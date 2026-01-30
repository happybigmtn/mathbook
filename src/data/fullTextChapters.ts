import type { FullTextChapter, Annotation } from "@/types"

// Helper function to create annotations
function createAnnotation(
  id: string,
  type: Annotation["type"],
  content: string
): Annotation {
  return { id, type, content }
}

// Mapping of book references to chapter IDs and parts
const chapterMap: Record<string, { id: string; part: string }> = {
  "III.15": { id: "determinants", part: "part-03" },
  "III.16": { id: "dierential-forms-and-integration", part: "part-03" },
  "III.17": { id: "dimension", part: "part-03" },
  "III.18": { id: "distributions", part: "part-03" },
  "III.19": { id: "duality", part: "part-03" },
  "III.20": { id: "dynamical-systems-and-chaos", part: "part-03" },
  "I.1": { id: "what-is-mathematics-about", part: "part-01" },
  "III.21": { id: "elliptic-curves", part: "part-03" },
  "I.2": { id: "language-and-grammar", part: "part-01" },
  "I.3": { id: "fundamental-definitions", part: "part-01" },
  "III.23": { id: "the-euler-and-navierstokes-equations", part: "part-03" },
  "I.4": { id: "general-goals", part: "part-01" },
  "III.24": { id: "expanders", part: "part-03" },
  "III.25": { id: "the-exponential-and-logarithmic-functions", part: "part-03" },
  "III.26": { id: "the-fast-fourier-transform", part: "part-03" },
  "III.27": { id: "the-fourier-transform", part: "part-03" },
  "III.28": { id: "fuchsian-groups", part: "part-03" },
  "III.29": { id: "function-spaces", part: "part-03" },
  "II.1": { id: "from-numbers-to-number-systems", part: "part-02" },
  "III.30": { id: "galois-groups", part: "part-03" },
  "II.2": { id: "geometry-origins", part: "part-02" },
  "III.31": { id: "the-gamma-function", part: "part-03" },
  "II.3": { id: "abstract-algebra-development", part: "part-02" },
  "III.32": { id: "generating-functions", part: "part-03" },
  "II.4": { id: "algorithms", part: "part-02" },
  "III.33": { id: "genus", part: "part-03" },
  "II.5": { id: "rigor-in-analysis", part: "part-02" },
  "III.35": { id: "hamiltonians", part: "part-03" },
  "II.6": { id: "idea-of-proof", part: "part-02" },
  "III.36": { id: "the-heat-equation", part: "part-03" },
  "II.7": { id: "foundations-crisis", part: "part-02" },
  "III.37": { id: "bayesian-analysis", part: "part-03" },
  "III.38": { id: "homology-and-cohomology", part: "part-03" },
  "III.39": { id: "homotopy-groups", part: "part-03" },
  "III.40": { id: "the-ideal-class-group", part: "part-03" },
  "III.41": { id: "irrational-and-transcendental-numbers", part: "part-03" },
  "III.1": { id: "axiom-of-choice", part: "part-03" },
  "III.42": { id: "the-ising-model", part: "part-03" },
  "III.2": { id: "the-axiom-of-determinacy", part: "part-03" },
  "III.43": { id: "jordan-normal-form", part: "part-03" },
  "III.3": { id: "bayesian-analysis", part: "part-03" },
  "III.44": { id: "knot-polynomials", part: "part-03" },
  "III.4": { id: "braid-groups", part: "part-03" },
  "III.45": { id: "k-theory", part: "part-03" },
  "III.5": { id: "buildings", part: "part-03" },
  "III.46": { id: "the-leech-lattice", part: "part-03" },
  "III.6": { id: "calabiyau-manifolds", part: "part-03" },
  "III.47": { id: "l-functions", part: "part-03" },
  "III.7": { id: "cardinals", part: "part-03" },
  "III.48": { id: "lie-theory", part: "part-03" },
  "III.8": { id: "categories", part: "part-03" },
  "III.49": { id: "linear-and-nonlinear-waves-and-solitons", part: "part-03" },
  "III.9": { id: "compactness-and-compactication", part: "part-03" },
  "III.50": { id: "linear-operators-and-their-properties", part: "part-03" },
  "III.10": { id: "computational-complexity-classes", part: "part-03" },
  "III.51": { id: "local-and-global-in-number-theory", part: "part-03" },
  "III.11": { id: "countable-and-uncountable-sets", part: "part-03" },
  "III.52": { id: "the-mandelbrot-set", part: "part-03" },
  "III.12": { id: "c--algebras", part: "part-03" },
  "III.53": { id: "manifolds", part: "part-03" },
  "III.13": { id: "curvature", part: "part-03" },
  "III.54": { id: "matroids", part: "part-03" },
  "III.14": { id: "designs", part: "part-03" },
  "III.55": { id: "measures", part: "part-03" },
  "III.56": { id: "metric-spaces", part: "part-03" },
  "IV.5": { id: "arithmetic-geometry", part: "part-04" },
  "III.57": { id: "models-of-set-theory", part: "part-03" },
  "IV.6": { id: "algebraic-topology", part: "part-04" },
  "III.58": { id: "modular-arithmetic", part: "part-03" },
  "IV.7": { id: "dierential-topology", part: "part-04" },
  "III.59": { id: "modular-forms", part: "part-03" },
  "IV.8": { id: "moduli-spaces", part: "part-04" },
  "III.60": { id: "moduli-spaces", part: "part-03" },
  "IV.9": { id: "representation-theory", part: "part-04" },
  "III.61": { id: "the-monster-group", part: "part-03" },
  "IV.10": { id: "geometric-and-combinatorial-group-theory", part: "part-04" },
  "III.62": { id: "normed-spaces-and-banach-spaces", part: "part-03" },
  "IV.11": { id: "harmonic-analysis", part: "part-04" },
  "III.63": { id: "number-fields", part: "part-03" },
  "IV.12": { id: "analysis", part: "part-04" },
  "III.64": { id: "optimization-and-lagrange-multipliers", part: "part-03" },
  "IV.13": { id: "general-relativity-and-the-einstein-equations", part: "part-04" },
  "III.65": { id: "orbifolds", part: "part-03" },
  "IV.14": { id: "dynamics", part: "part-04" },
  "III.66": { id: "ordinals", part: "part-03" },
  "IV.15": { id: "operator-algebras", part: "part-04" },
  "III.67": { id: "the-peano-axioms", part: "part-03" },
  "IV.16": { id: "mirror-symmetry", part: "part-04" },
  "III.68": { id: "permutation-groups", part: "part-03" },
  "IV.17": { id: "vertex-operator-algebras", part: "part-04" },
  "III.69": { id: "phase-transitions", part: "part-03" },
  "IV.18": { id: "enumerative-and-algebraic-combinatorics", part: "part-04" },
  "III.70": { id: "", part: "part-03" },
  "IV.19": { id: "extremal-and-probabilistic-combinatorics", part: "part-04" },
  "III.71": { id: "probability-distributions", part: "part-03" },
  "IV.20": { id: "computational-complexity", part: "part-04" },
  "III.72": { id: "projective-space", part: "part-03" },
  "IV.21": { id: "numerical-analysis", part: "part-04" },
  "III.73": { id: "quadratic-forms", part: "part-03" },
  "IV.22": { id: "set-theory", part: "part-04" },
  "III.74": { id: "quantum-computation", part: "part-03" },
  "IV.23": { id: "logic-and-model-theory", part: "part-04" },
  "III.75": { id: "quantum-groups", part: "part-03" },
  "IV.24": { id: "stochastic-processes", part: "part-04" },
  "III.76": { id: "quaternions-octonions-and-normed-iv25-probabilistic-models-of-critical-phenomena", part: "part-03" },
  "III.77": { id: "representations", part: "part-03" },
  "III.78": { id: "ricci-flow", part: "part-03" },
  "III.79": { id: "riemann-surfaces", part: "part-03" },
  "III.80": { id: "the-riemann-zeta-function", part: "part-03" },
  "III.81": { id: "rings-ideals-and-modules", part: "part-03" },
  "III.82": { id: "schemes", part: "part-03" },
  "V.1": { id: "the-abc-conjecture", part: "part-05" },
  "III.83": { id: "the-schrdinger-equation", part: "part-03" },
  "V.2": { id: "the-atiyahsinger-index-theorem", part: "part-05" },
  "III.84": { id: "the-simplex-algorithm", part: "part-03" },
  "V.3": { id: "the-banachtarski-paradox", part: "part-05" },
  "III.85": { id: "special-functions", part: "part-03" },
  "V.4": { id: "the-birchswinnerton-dyer-conjecture", part: "part-05" },
  "III.86": { id: "the-spectrum", part: "part-03" },
  "V.5": { id: "carlesons-theorem", part: "part-05" },
  "III.87": { id: "spherical-harmonics", part: "part-03" },
  "V.6": { id: "the-central-limit-theorem", part: "part-05" },
  "III.88": { id: "symplectic-manifolds", part: "part-03" },
  "V.7": { id: "the-classication-of-finite-simple-groups", part: "part-05" },
  "III.89": { id: "tensor-products", part: "part-03" },
  "V.8": { id: "dirichlets-theorem", part: "part-05" },
  "III.90": { id: "topological-spaces", part: "part-03" },
  "V.9": { id: "ergodic-theorems", part: "part-05" },
  "III.91": { id: "transforms", part: "part-03" },
  "V.10": { id: "fermats-last-theorem", part: "part-05" },
  "III.92": { id: "trigonometric-functions", part: "part-03" },
  "V.11": { id: "fixed-point-theorems", part: "part-05" },
  "III.93": { id: "universal-covers", part: "part-03" },
  "V.12": { id: "the-four-color-theorem", part: "part-05" },
  "III.94": { id: "variational-methods", part: "part-03" },
  "V.13": { id: "the-fundamental-theorem-of-algebra", part: "part-05" },
  "III.95": { id: "varieties", part: "part-03" },
  "V.14": { id: "the-fundamental-theorem-of-arithmetic", part: "part-05" },
  "III.96": { id: "vector-bundles", part: "part-03" },
  "V.15": { id: "gdels-theorem", part: "part-05" },
  "III.97": { id: "von-neumann-algebras", part: "part-03" },
  "V.16": { id: "gromovs-polynomial-growth-theorem", part: "part-05" },
  "III.98": { id: "wavelets", part: "part-03" },
  "V.17": { id: "hilberts-nullstellensatz", part: "part-05" },
  "III.99": { id: "the-zermelofraenkel-axioms", part: "part-03" },
  "V.19": { id: "inequalities", part: "part-05" },
  "V.20": { id: "the-insolubility-of-the-halting-problem", part: "part-05" },
  "V.21": { id: "the-insolubility-of-the-quintic", part: "part-05" },
  "IV.1": { id: "number-theory", part: "part-04" },
  "V.22": { id: "liouvilles-theorem-and-roths-theorem", part: "part-05" },
  "IV.2": { id: "number-theory", part: "part-04" },
  "V.23": { id: "mostows-strong-rigidity-theorem", part: "part-05" },
  "IV.3": { id: "computational-number-theory", part: "part-04" },
  "V.24": { id: "the-p-versus-np-problem", part: "part-05" },
  "IV.4": { id: "algebra", part: "part-04" },
  "V.25": { id: "the-poincar-conjecture", part: "part-05" },
  "V.26": { id: "the-prime-number-theorem-and-the-vi34-jnos-bolyai-18021860", part: "part-05" },
  "VI.35": { id: "carl-gustav-jacob-jacobi-18041851", part: "part-06" },
  "V.27": { id: "problems-and-results-in-vi36-peter-gustav-lejeune-dirichlet-18051859", part: "part-05" },
  "VI.37": { id: "william-rowan-hamilton-18051865", part: "part-06" },
  "V.28": { id: "from-quadratic-reciprocity-to-vi38-augustus-de-morgan-18061871", part: "part-05" },
  "VI.39": { id: "joseph-liouville-18091882", part: "part-06" },
  "V.29": { id: "rational-points-on-curves-and-vi40-ernst-eduard-kummer-18101893", part: "part-05" },
  "VI.41": { id: "variste-galois-18111832", part: "part-06" },
  "V.30": { id: "the-resolution-of-singularities", part: "part-05" },
  "VI.42": { id: "james-joseph-sylvester-18141897", part: "part-06" },
  "V.31": { id: "the-riemannroch-theorem", part: "part-05" },
  "VI.43": { id: "george-boole-18151864", part: "part-06" },
  "V.32": { id: "the-robertsonseymour-theorem", part: "part-05" },
  "VI.44": { id: "karl-weierstrass-18151897", part: "part-06" },
  "V.33": { id: "the-three-body-problem", part: "part-05" },
  "VI.45": { id: "pafnuty-chebyshev-18211894", part: "part-06" },
  "V.34": { id: "the-uniformization-theorem", part: "part-05" },
  "VI.46": { id: "arthur-cayley-18211895", part: "part-06" },
  "V.35": { id: "the-weil-conjectures", part: "part-05" },
  "VI.47": { id: "charles-hermite-18221901", part: "part-06" },
  "VI.48": { id: "leopold-kronecker-18231891", part: "part-06" },
  "VI.50": { id: "julius-wilhelm-richard-dedekind-18311916", part: "part-06" },
  "VI.1": { id: "pythagoras-ca", part: "part-06" },
  "VI.51": { id: "mile-lonard-mathieu-18351890", part: "part-06" },
  "VI.2": { id: "euclid-ca", part: "part-06" },
  "VI.52": { id: "camille-jordan-18381922", part: "part-06" },
  "VI.3": { id: "archimedes-ca", part: "part-06" },
  "VI.53": { id: "sophus-lie-18421899", part: "part-06" },
  "VI.4": { id: "apollonius-ca", part: "part-06" },
  "VI.54": { id: "georg-cantor-18451918", part: "part-06" },
  "VI.5": { id: "abu-jafar-muhammad-ibn-musa-al-khwarizm-vi55-william-kingdon-cliord-18451879", part: "part-06" },
  "VI.56": { id: "gottlob-frege-18481925", part: "part-06" },
  "VI.6": { id: "leonardo-of-pisa-known-as-fibonacci-vi57-christian-felix-klein-18491925", part: "part-06" },
  "VI.58": { id: "ferdinand-georg-frobenius-18491917", part: "part-06" },
  "VI.7": { id: "girolamo-cardano-15011576", part: "part-06" },
  "VI.59": { id: "sofya-sonya-kovalevskaya-18501891", part: "part-06" },
  "VI.8": { id: "rafael-bombelli-1526after", part: "part-06" },
  "VI.60": { id: "william-burnside-18521927", part: "part-06" },
  "VI.9": { id: "franois-vite-15401603", part: "part-06" },
  "VI.61": { id: "jules-henri-poincar-18541912", part: "part-06" },
  "VI.10": { id: "simon-stevin-15481620", part: "part-06" },
  "VI.62": { id: "giuseppe-peano-18581932", part: "part-06" },
  "VI.11": { id: "ren-descartes-15961650", part: "part-06" },
  "VI.63": { id: "david-hilbert-18621943", part: "part-06" },
  "VI.12": { id: "pierre-fermat-1601665", part: "part-06" },
  "VI.64": { id: "hermann-minkowski-18641909", part: "part-06" },
  "VI.13": { id: "blaise-pascal-16231662", part: "part-06" },
  "VI.65": { id: "jacques-hadamard-18651963", part: "part-06" },
  "VI.14": { id: "isaac-newton-16421727", part: "part-06" },
  "VI.66": { id: "ivar-fredholm-18661927", part: "part-06" },
  "VI.15": { id: "gottfried-wilhelm-leibniz-16461716", part: "part-06" },
  "VI.67": { id: "charles-jean-de-la-valle-poussin-18661962", part: "part-06" },
  "VI.16": { id: "brook-taylor-16851731", part: "part-06" },
  "VI.68": { id: "felix-hausdor-18681942", part: "part-06" },
  "VI.17": { id: "christian-goldbach-16901764", part: "part-06" },
  "VI.69": { id: "lie-joseph-cartan-18691951", part: "part-06" },
  "VI.18": { id: "the-bernoullis-", part: "part-06" },
  "VI.70": { id: "emile-borel-18711956", part: "part-06" },
  "VI.19": { id: "leonhard-euler-17071783", part: "part-06" },
  "VI.71": { id: "bertrand-arthur-william-russell-18721970", part: "part-06" },
  "VI.20": { id: "jean-le-rond-dalembert-17171783", part: "part-06" },
  "VI.72": { id: "henri-lebesgue-18751941", part: "part-06" },
  "VI.21": { id: "edward-waring-ca", part: "part-06" },
  "VI.73": { id: "godfrey-harold-hardy-18771947", part: "part-06" },
  "VI.22": { id: "joseph-louis-lagrange-17361813", part: "part-06" },
  "VI.74": { id: "frigyes-frdric-riesz-18801956", part: "part-06" },
  "VI.23": { id: "pierre-simon-laplace-17491827", part: "part-06" },
  "VI.75": { id: "luitzen-egbertus-jan-brouwer-18811966", part: "part-06" },
  "VI.24": { id: "adrien-marie-legendre-17521833", part: "part-06" },
  "VI.76": { id: "emmy-noether-18821935", part: "part-06" },
  "VI.25": { id: "jean-baptiste-joseph-fourier-17681830", part: "part-06" },
  "VI.77": { id: "wacaw-sierpinski-18821969", part: "part-06" },
  "VI.26": { id: "carl-friedrich-gauss-17771855", part: "part-06" },
  "VI.78": { id: "george-birkho-18841944", part: "part-06" },
  "VI.27": { id: "simon-denis-poisson-17811840", part: "part-06" },
  "VI.79": { id: "john-edensor-littlewood-18851977", part: "part-06" },
  "VI.28": { id: "bernard-bolzano-17811848", part: "part-06" },
  "VI.80": { id: "hermann-weyl-18851955", part: "part-06" },
  "VI.29": { id: "augustin-louis-cauchy-17891857", part: "part-06" },
  "VI.81": { id: "thoralf-skolem-18871963", part: "part-06" },
  "VI.30": { id: "august-ferdinand-mbius-17901868", part: "part-06" },
  "VI.82": { id: "srinivasa-ramanujan-18871920", part: "part-06" },
  "VI.31": { id: "nicolai-ivanovich-lobachevskii-17921856", part: "part-06" },
  "VI.83": { id: "richard-courant-18881972", part: "part-06" },
  "VI.32": { id: "george-green-17931841", part: "part-06" },
  "VI.84": { id: "stefan-banach-18921945", part: "part-06" },
  "VI.33": { id: "niels-henrik-abel-18021829", part: "part-06" },
  "VI.85": { id: "norbert-wiener-18941964", part: "part-06" },
  "VI.86": { id: "emil-artin-18981962", part: "part-06" },
  "VII.8": { id: "mathematics-and-economic-reasoning", part: "part-07" },
  "VI.87": { id: "alfred-tarski-19011983", part: "part-06" },
  "VII.9": { id: "the-mathematics-of-money", part: "part-07" },
  "VI.88": { id: "andrei-nikolaevich-kolmogorov-19031987", part: "part-06" },
  "VII.10": { id: "mathematical-statistics", part: "part-07" },
  "VI.89": { id: "alonzo-church-19031995", part: "part-06" },
  "VII.11": { id: "mathematics-and-medical-statistics", part: "part-07" },
  "VI.90": { id: "william-vallance-douglas-hodge-19031975", part: "part-06" },
  "VII.12": { id: "analysis-mathematical-and-philosophical", part: "part-07" },
  "VI.91": { id: "john-von-neumann-19031957", part: "part-06" },
  "VII.13": { id: "mathematics-and-music", part: "part-07" },
  "VI.92": { id: "kurt-gdel-19061978", part: "part-06" },
  "VII.14": { id: "mathematics-and-art", part: "part-07" },
  "VI.93": { id: "andr-weil-19061998", part: "part-06" },
  "VI.94": { id: "alan-turing-19121954", part: "part-06" },
  "VI.95": { id: "abraham-robinson-19181974", part: "part-06" },
  "VI.96": { id: "nicolas-bourbaki-1935", part: "part-06" },
  "VIII.1": { id: "the-art-of-problem-solving", part: "part-08" },
  "VIII.2": { id: "why-mathematics-you-might-ask", part: "part-08" },
  "VIII.3": { id: "the-ubiquity-of-mathematics", part: "part-08" },
  "VIII.4": { id: "numeracy", part: "part-08" },
  "VII.1": { id: "mathematics-and-chemistry", part: "part-07" },
  "VIII.5": { id: "mathematics-an-experimental-science", part: "part-08" },
  "VII.2": { id: "mathematical-biology", part: "part-07" },
  "VIII.6": { id: "advice-to-a-young-mathematician", part: "part-08" },
  "VII.3": { id: "wavelets-and-applications", part: "part-07" },
  "VIII.7": { id: "a-chronology-of-mathematical-events", part: "part-08" },
  "VII.4": { id: "the-mathematics-of-trac-in-networks", part: "part-07" },
  "VII.5": { id: "the-mathematics-of-algorithm-design", part: "part-07" },
  "VII.6": { id: "reliable-transmission-of-information", part: "part-07" },
  "VII.7": { id: "mathematics-and-cryptography", part: "part-07" },
}

// Helper function to convert book references to links
function ref(chapter: string): string {
  const mapped = chapterMap[chapter]
  if (mapped) {
    if (mapped.id === "placeholder") {
      return `[${chapter}](/placeholder?ref=${encodeURIComponent(chapter)})`
    }
    return `[${chapter}](/${mapped.part}/${mapped.id})`
  }
  return `[${chapter}](/placeholder?ref=${encodeURIComponent(chapter)})`
}

// I.1 What Is Mathematics About? - Full Text
export const whatIsMathematicsFullText: FullTextChapter = {
  id: "what-is-mathematics-about",
  title: "What Is Mathematics About?",
  description: "An exploration of the fundamental nature of mathematics, its main branches, and what mathematicians study.",
  part: "part-01",
  partTitle: "Introduction",
  order: 1,
  content: [
    {
      id: "introduction",
      title: "Introduction",
      type: "text",
      content: "The fundamental nature of mathematics and its classification.",
      fullText: `It is notoriously hard to give a satisfactory answer to the question, "What is mathematics?" The approach of this book is not to try. Rather than giving a definition of mathematics, the intention is to give a good idea of what mathematics is by describing many of its most important concepts, theorems, and applications. Nevertheless, to make sense of all this information it is useful to be able to classify it somehow.

The most obvious way of classifying mathematics is by its subject matter, and that will be the approach of this brief introductory section and the longer section entitled some fundamental mathematical definitions ${ref("I.3")}. However, it is not the only way, and not even obviously the best way. Another approach is to try to classify the kinds of questions that mathematicians like to think about. This gives a usefully different view of the subject: it often happens that two areas of mathematics that appear very different if you pay attention to their subject matter are much more similar if you look at the kinds of questions that are being asked.

The last section of part I, entitled the general goals of mathematical research ${ref("I.4")}, looks at the subject from this point of view. At the end of that article there is a brief discussion of what one might regard as a third classification, not so much of mathematics itself but of the content of a typical article in a mathematics journal. As well as theorems and proofs, such an article will contain definitions, examples, lemmas, formulas, conjectures, and so on. The point of that discussion will be to say what these words mean and why the different kinds of mathematical output are important.`,
      annotations: [
        createAnnotation("intro-1", "note", "This chapter uses two approaches to classify mathematics: by subject matter and by the types of questions asked."),
      ],
    },
    {
      id: "algebra-geometry-analysis",
      title: "1. Algebra, Geometry, and Analysis",
      type: "text",
      content: "The three main branches of mathematics.",
      fullText: `Although any classification of the subject matter of mathematics must immediately be hedged around with qualifications, there is a crude division that undoubtedly works well as a first approximation, namely the division of mathematics into algebra, geometry, and analysis. So let us begin with this, and then qualify it later.

**1.1 Algebra versus Geometry**

Most people who have done some high school mathematics will think of algebra as the sort of mathematics that results when you substitute letters for numbers. Algebra will often be contrasted with arithmetic, which is a more direct study of the numbers themselves. So, for example, the question, "What is $3 \\times 7$?" will be thought of as belonging to arithmetic, while the question, "If $x + y = 10$ and $xy = 21$, then what is the value of the larger of $x$ and $y$?" will be regarded as a piece of algebra. This contrast is less apparent in more advanced mathematics for the simple reason that it is very rare for numbers to appear without letters to keep them company.

There is, however, a different contrast, between algebra and geometry, which is much more important at an advanced level. The high school conception of geometry is that it is the study of shapes such as circles, triangles, cubes, and spheres together with concepts such as rotations, reflections, symmetries, and so on. Thus, the objects of geometry, and the processes that they undergo, have a much more visual character than the equations of algebra.

This contrast persists right up to the frontiers of modern mathematical research. Some parts of mathematics involve manipulating symbols according to certain rules: for example, a true equation remains true if you "do the same to both sides." These parts would typically be thought of as algebraic, whereas other parts are concerned with concepts that can be visualized, and these are typically thought of as geometrical.

However, a distinction like this is never simple. If you look at a typical research paper in geometry, will it be full of pictures? Almost certainly not. In fact, the methods used to solve geometrical problems very often involve a great deal of symbolic manipulation, although good powers of visualization may be needed to find and use these methods and pictures will typically underlie what is going on. As for algebra, is it "mere" symbolic manipulation? Not at all: very often one solves an algebraic problem by finding a way to visualize it.

As an example of visualizing an algebraic problem, consider how one might justify the rule that if $a$ and $b$ are positive integers then $ab = ba$. It is possible to approach the problem as a pure piece of algebra (perhaps proving it by induction), but the easiest way to convince yourself that it is true is to imagine a rectangular array that consists of $a$ rows with $b$ objects in each row. The total number of objects can be thought of as $a$ lots of $b$, if you count it row by row, or as $b$ lots of $a$, if you count it column by column. Therefore, $ab = ba$. Similar justifications can be given for other basic rules such as $a(b + c) = ab + ac$ and $a(bc) = (ab)c$.

In the other direction, it turns out that a good way of solving many geometrical problems is to "convert them into algebra." The most famous way of doing this is to use Cartesian coordinates. For example, suppose that you want to know what happens if you reflect a circle about a line $L$ through its center, then rotate it through $40^\\circ$ counterclockwise, and then reflect it once more about the same line $L$. One approach is to visualize the situation as follows.

Imagine that the circle is made of a thin piece of wood. Then instead of reflecting it about the line you can rotate it through $180^\\circ$ about $L$ (using the third dimension). The result will be upside down, but this does not matter if you simply ignore the thickness of the wood. Now if you look up at the circle from below while it is rotated counterclockwise through $40^\\circ$, what you will see is a circle being rotated clockwise through $40^\\circ$. Therefore, if you then turn it back the right way up, by rotating about $L$ once again, the total effect will have been a clockwise rotation through $40^\\circ$.

Mathematicians vary widely in their ability and willingness to follow an argument like that one. If you cannot quite visualize it well enough to see that it is definitely correct, then you may prefer an algebraic approach, using the theory of linear algebra and matrices (which will be discussed in more detail in ${ref("I.3")} §3.2). To begin with, one thinks of the circle as the set of all pairs of numbers $(x, y)$ such that $x^2 + y^2 \\leqslant 1$. The two transformations, reflection in a line through the center of the circle and rotation through an angle $\\theta$, can both be represented by $2 \\times 2$ matrices, which are arrays of numbers of the form $({}^a_c \\; {}^b_d)$. There is a slightly complicated, but purely algebraic, rule for multiplying matrices together, and it is designed to have the property that if matrix $A$ represents a transformation $R$ (such as a reflection) and matrix $B$ represents a transformation $T$, then the product $AB$ represents the transformation that results when you first do $T$ and then $R$. Therefore, one can solve the problem above by writing down the matrices that correspond to the transformations, multiplying them together, and seeing what transformation corresponds to the product. In this way, the geometrical problem has been converted into algebra and solved algebraically.

Thus, while one can draw a useful distinction between algebra and geometry, one should not imagine that the boundary between the two is sharply defined. In fact, one of the major branches of mathematics is even called algebraic geometry ${ref("IV.4")}. And as the above examples illustrate, it is often possible to translate a piece of mathematics from algebra into geometry or vice versa. Nevertheless, there is a definite difference between algebraic and geometric methods of thinking—one more symbolic and one more pictorial—and this can have a profound influence on which subjects a mathematician chooses to pursue.`,
      annotations: [
        createAnnotation("ag-1", "visual", "The commutative property $ab = ba$ can be visualized as a rectangle with $a$ rows and $b$ columns—counting by rows or columns gives the same total."),
        createAnnotation("ag-2", "note", "Algebra and geometry are deeply interconnected. Many problems can be solved by translating between these two modes of thinking."),
      ],
    },
  ],
  exercises: [],
}

// I.2 The Language and Grammar of Mathematics - Full Text (VERBATIM)
export const languageAndGrammarFullText: FullTextChapter = {
  id: "language-and-grammar",
  title: "The Language and Grammar of Mathematics",
  description: "Understanding mathematical notation, symbols, and the logical structure of mathematical statements.",
  part: "part-01",
  partTitle: "Introduction",
  order: 2,
  content: [
    {
      id: "four-basic-concepts",
      title: "Four Basic Concepts",
      type: "text",
      content: "The fundamental concepts of mathematical language.",
      fullText: `Another word that famously has three quite distinct meanings is "is." The three meanings are illustrated in the following three sentences.
(1) 5 is the square root of 25.
(2) 5 is less than 10.
(3) 5 is a prime number.
In the first of these sentences, "is" could be replaced by "equals": it says that two objects, 5 and the square root of 25, are in fact one and the same object, just as it does in the English sentence "London is the capital of the United Kingdom." In the second sentence, "is" plays a completely different role. The words "less than 10" form an adjectival phrase, specifying a property that numbers may or may not have, and "is" in this sentence is like "is" in the English sentence "Grass is green." As for the third sentence, the word "is" there means "is an example of," as it does in the English sentence "Mercury is a planet."

These differences are reflected in the fact that the sentences cease to resemble each other when they are written in a more symbolic way. An obvious way to write (1) is $5 = \\sqrt{25}$. As for (2), it would usually be written $5 < 10$, where the symbol "$<$" means "is less than." The third sentence would normally not be written symbolically because the concept of a prime number is not quite basic enough to have universally recognized symbols associated with it. However, it is sometimes useful to do so, and then one must invent a suitable symbol. One way to do it would be to adopt the convention that if $n$ is a positive integer, then $P(n)$ stands for the sentence "$n$ is prime." Another way, which does not hide the word "is," is to use the language of sets.

**2.1 Sets**

Broadly speaking, a set is a collection of objects, and in mathematical discourse these objects are mathematical ones such as numbers, points in space, or even other sets. If we wish to rewrite sentence (3) symbolically, another way to do it is to define $P$ to be the collection, or set, of all prime numbers. Then we can rewrite it as "5 belongs to the set $P$." This notion of belonging to a set is sufficiently basic to deserve its own symbol, and the symbol used is "$\\in$." So a fully symbolic way of writing the sentence is $5 \\in P$.

The members of a set are usually called its elements, and the symbol "$\\in$" is usually read "is an element of." So the "is" of sentence (3) is more like "$\\in$" than "$=$."

Although one cannot directly substitute the phrase "is an element of" for "is," one can do so if one is prepared to modify the rest of the sentence a little.

There are three common ways to denote a specific set. One is to list its elements inside curly brackets: $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$, for example, is the set whose elements are the eight numbers 2, 3, 5, 7, 11, 13, 17, and 19. The majority of sets considered by mathematicians are too large for this to be feasible—indeed, they are often infinite—so a second way to denote sets is to use dots to imply a list that is too long to write down: for example, the expressions $\\{1, 2, 3, \\ldots, 100\\}$ and $\\{2, 4, 6, 8, \\ldots\\}$ can be used to represent the set of all positive integers up to 100 and the set of all positive even numbers, respectively. A third way, and the way that is most important, is to define a set via a property: an example that shows how this is done is the expression $\\{x : x \\text{ is prime and } x < 20\\}$. To read an expression such as this, one first reads the opening curly bracket as "The set of." Next, one reads the symbol that occurs before the colon. The colon itself one reads as "such that." Finally, one reads what comes after the colon, which is the property that determines the elements of the set. In this instance, we end up saying, "The set of $x$ such that $x$ is prime and $x$ is less than 20," which is in fact equal to the set $\\{2, 3, 5, 7, 11, 13, 17, 19\\}$ considered earlier.

Many sentences of mathematics can be rewritten in set-theoretic terms. For example, sentence (2) earlier could be written as $5 \\in \\{n : n < 10\\}$. Often there is no point in doing this (as here, where it is much easier to write $5 < 10$) but there are circumstances where it becomes extremely convenient. For example, one of the great advances in mathematics was the use of Cartesian coordinates to translate geometry into algebra and the way this was done was to define geometrical objects as sets of points, where points were themselves defined as pairs or triples of numbers. So, for example, the set $\\{(x, y) : x^2 + y^2 = 1\\}$ is (or represents) a circle of radius 1 with its center at the origin $(0, 0)$. That is because, by the Pythagorean theorem, the distance from $(0, 0)$ to $(x, y)$ is $\\sqrt{x^2 + y^2}$, so the sentence "$x^2 + y^2 = 1$" can be reexpressed geometrically as "the distance from $(0, 0)$ to $(x, y)$ is 1." If all we ever cared about was which points were in the circle, then we could make do with sentences such as "$x^2 + y^2 = 1$," but in geometry one often wants to consider the entire circle as a single object (rather than as a multiplicity of points, or as a property that points might have), and then set-theoretic language is indispensable.

A second circumstance where it is usually hard to do without sets is when one is defining new mathematical objects. Very often such an object is a set together with a mathematical structure imposed on it, which takes the form of certain relationships among the elements of the set. For examples of this use of set-theoretic language, see sections 1 and 2, on number systems and algebraic structures, respectively, in some fundamental mathematical definitions ${ref("I.3")}.

Sets are also very useful if one is trying to do metamathematics, that is, to prove statements not about mathematical objects but about the process of mathematical reasoning itself. For this it helps a lot if one can devise a very simple language—with a small vocabulary and an uncomplicated grammar—into which it is in principle possible to translate all mathematical arguments. Sets allow one to reduce greatly the number of parts of speech that one needs, turning almost all of them into nouns. For example, with the help of the membership symbol "$\\in$" one can do without adjectives, as the translation of "5 is a prime number" (where "prime" functions as an adjective) into "$5 \\in P$" has already suggested.`,
      annotations: [
        createAnnotation("sets-1", "note", "Set-builder notation $\\{x : P(x)\\}$ is powerful: it defines infinite sets by a property rather than listing elements."),
        createAnnotation("belongs-1", "note", "The symbol $\\in$ means 'is an element of' - it's one of the most fundamental symbols in mathematics."),
      ],
    },
    {
      id: "functions",
      title: "2.2 Functions",
      type: "text",
      content: "The concept of mathematical functions.",
      fullText: `Let us now switch attention from the word "is" to some other parts of the sentences (1)–(3), focusing first on the phrase "the square root of" in sentence (1). If we wish to think about this phrase grammatically, then we should analyze what sort of role it plays in a sentence, and the analysis is simple: in virtually any mathematical sentence where the phrase appears, it is followed by the name of a number. If the number is $n$, then this produces the slightly longer phrase, "the square root of $n$," which is a noun phrase that denotes a number and plays the same grammatical role as a number (at least when the number is used as a noun rather than as an adjective). For instance, replacing "5" by "the square root of 25" in the sentence "5 is less than 7" yields a new sentence, "The square root of 25 is less than 7," that is still grammatically correct (and true).

One of the most basic activities of mathematics is to take a mathematical object and transform it into another one, sometimes of the same kind and sometimes not. "The square root of" transforms numbers into numbers, as do "four plus," "two times," "the cosine of," and "the logarithm of." A nonnumerical example is "the center of gravity of," which transforms geometrical shapes (provided they are not too exotic or complicated to have a center of gravity) into points—meaning that if $S$ stands for a shape, then "the center of gravity of $S$" stands for a point. A function is, roughly speaking, a mathematical transformation of this kind.

It is not easy to make this definition more precise. To ask, "What is a function?" is to suggest that the answer should be a thing of some sort, but functions seem to be more like processes. Moreover, when they appear in mathematical sentences they do not behave like nouns. (They are more like prepositions, though with a definite difference that will be discussed in the next subsection.) One might therefore think it inappropriate to ask what kind of object "the square root of" is. Should one not simply be satisfied with the grammatical analysis already given?

As it happens, no. Over and over again, throughout mathematics, it is useful to think of a mathematical phenomenon, which may be complex and very unthinglike, as a single object. We have already seen a simple example: a collection of infinitely many points in the plane or space is sometimes better thought of as a single geometrical shape. Why should one wish to do this for functions? Here are two reasons. First, it is convenient to be able to say something like, "The derivative of sin is cos," or to speak in general terms about some functions being differentiable and others not. More generally, functions can have properties, and in order to discuss those properties one needs to think of functions as things. Second, many algebraic structures are most naturally thought of as sets of functions. (See, for example, the discussion of groups and symmetry in ${ref("I.3")} §2.1. See also hilbert spaces ${ref("III.37")}, function spaces ${ref("III.29")}, and vector spaces ${ref("I.3")} §2.3.)

If $f$ is a function, then the notation $f(x) = y$ means that $f$ turns the object $x$ into the object $y$. Once one starts to speak formally about functions, it becomes important to specify exactly which objects are to be subjected to the transformation in question, and what sort of objects they can be transformed into. One of the main reasons for this is that it makes it possible to discuss another notion that is central to mathematics, that of inverting a function. (See ${ref("I.4")} §1 for a discussion of why it is central.) Roughly speaking, the inverse of a function is another function that undoes it, and that it undoes; for example, the function that takes a number $n$ to $n - 4$ is the inverse of the function that takes $n$ to $n + 4$, since if you add four and then subtract four, or vice versa, you get the number you started with.

Here is a function $f$ that cannot be inverted. It takes each number and replaces it by the nearest multiple of 100, rounding up if the number ends in 50. Thus, $f(113) = 100$, $f(3879) = 3900$, and $f(1050) = 1100$. It is clear that there is no way of undoing this process with a function $g$. For example, in order to undo the effect of $f$ on the number 113 we would need $g(100)$ to equal 113. But the same argument applies to every number that is at least as big as 50 and smaller than 150, and $g(100)$ cannot be more than one number at once.

Now let us consider the function that doubles a number. Can this be inverted? Yes it can, one might say: just divide the number by two again. And much of the time this would be a perfectly sensible response, but not, for example, if it was clear from the context that the numbers being talked about were positive integers. Then one might be focusing on the difference between even and odd numbers, and this difference could be encapsulated by saying that odd numbers are precisely those numbers $n$ for which the equation $2x = n$ does not have a solution. (Notice that one can undo the doubling process by halving. The problem here is that the relationship is not symmetrical: there is no function that can be undone by doubling, since you could never get back to an odd number.)

To specify a function, therefore, one must be careful to specify two sets as well: the domain, which is the set of objects to be transformed, and the range, which is the set of objects they are allowed to be transformed into. A function $f$ from a set $A$ to a set $B$ is a rule that specifies, for each element $x$ of $A$, an element $y = f(x)$ of $B$. Not every element of the range needs to be used: consider once again the example of "two times" when the domain and range are both the set of all positive integers. The set $\\{f(x) : x \\in A\\}$ of values actually taken by $f$ is called the image of $f$. (Slightly confusingly, the word "image" is also used in a different sense, applied to the individual elements of $A$: if $x \\in A$, then its image is $f(x)$.)

The following symbolic notation is used. The expression $f: A \\rightarrow B$ means that $f$ is a function with domain $A$ and range $B$. If we then write $f(x) = y$, we know that $x$ must be an element of $A$ and $y$ must be an element of $B$. Another way of writing $f(x) = y$ that is sometimes more convenient is $f: x \\mapsto y$. (The bar on the arrow is to distinguish it from the arrow in $f: A \\rightarrow B$, which has a very different meaning.)

If we want to undo the effect of a function $f: A \\rightarrow B$, then we can, as long as we avoid the problem that occurred with the approximating function discussed earlier. That is, we can do it if $f(x)$ and $f(x')$ are different whenever $x$ and $x'$ are different elements of $A$. If this condition holds, then $f$ is called an injection. On the other hand, if we want to find a function $g$ that is undone by $f$, then we can do so as long as we avoid the problem of the integer-doubling function. That is, we can do it if every element $y$ of $B$ is equal to $f(x)$ for some element $x$ of $A$ (so that we have the option of setting $g(y) = x$). If this condition holds, then $f$ is called a surjection. If $f$ is both an injection and a surjection, then $f$ is called a bijection. Bijections are precisely the functions that have inverses.`,
      annotations: [
        createAnnotation("functions-1", "note", "A function needs domain and range specified: $f: A \\rightarrow B$ means $f$ takes elements from $A$ and maps them to elements of $B$."),
        createAnnotation("bijection-1", "note", "Bijections are functions that are both injective (one-to-one) and surjective (onto) - these are the functions that have inverses."),
      ],
    },
  ],
  exercises: [],
}

// II.1 From Numbers to Number Systems - FULL VERBATIM TEXT
export const fromNumbersToNumberSystemsFullText: FullTextChapter = {
  id: "from-numbers-to-number-systems",
  title: "From Numbers to Number Systems",
  description: "Complete chapter by Fernando Q. Gouvêa",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 1,
  content: [
    {
      id: "ii1-full-text",
      title: "From Numbers to Number Systems",
      type: "text",
      content: "Complete chapter by Fernando Q. Gouvêa",
      fullText: `II.1 From Numbers to
Number Systems
Fernando Q. Gouvêa
People have been writing numbers down for as long as
they have been writing. In every civilization that has
developed a way of recording information, we also ﬁnd
a way of recording numbers. Some scholars even argue
that numbers came ﬁrst.
It is fairly clear that numbers ﬁrst arose as adjectives:
they speciﬁed how many or how much of something
there was. Thus, it was possible to talk about three
apricots, say, long before it was possible to talk about
the number 3. But once the concept of “threeness” is
on the table, so that the same adjective speciﬁes three
ﬁsh and three horses, and once a written symbol such
as “3” is developed that can be used in all of those
instances, the conditions exist for 3 itself to emerge
as an independent entity. Once it does, we are doing
mathematics.
This process seems to have repeated itself many
times when new kinds of numbers have been introduced: ﬁrst a number is used, then it is represented
symbolically, and ﬁnally it comes to be conceived as a
thing in itself and as part of a system of similar entities.

1

Numbers in Early Mathematics

The earliest mathematical documents we know about
go back to the civilizations of the ancient Middle East,
in Egypt and in Mesopotamia. In both cultures, a scribal
class developed. Scribes were responsible for keeping
records, which often required them to do arithmetic
and solve simple mathematical problems. Most of the
mathematical documents we have from those cultures
seem to have been created for the use of young scribes
learning their craft. Many of them are collections of

problems, provided with either answers or brief solutions: twenty-ﬁve problems about digging trenches in
one tablet, twelve problems requiring the solution of
a linear equation in another, problems about squares
and their sides in a third.
Numbers were used both for counting and for measuring, so a need for fractional numbers must have
come up fairly early. Fractions are complicated to write
down, and computing with them can be diﬃcult. Hence,
the problem of “broken numbers” may well have been
the ﬁrst really challenging mathematical problem. How
does one write down fractions? The Egyptians and
the Mesopotamians came up with strikingly diﬀerent
answers, both of which are also quite diﬀerent from
the way we write them today.
In Egypt (and later in Greece and much of the Mediterranean world), the fundamental notion was “the nth
part,” as in “the third part of six is two.” In this language, one would express the idea of dividing 7 by 3
as, “What is the third part of seven?” The answer is,
“Two and the third.” The process was complicated by an
additional restriction: one never recorded a ﬁnal result
using more than one of the same kind of part. Thus, the
number we would want to express as “two ﬁfth parts”
would have to be given as “the third and the ﬁfteenth.”
In Mesopotamia, we ﬁnd a very diﬀerent idea, which
may have arisen to allow easy conversion between different kinds of units. First of all, the Babylonians had a
way to generate symbols for all the numbers from 1 to
59. For larger numbers, they used a positional system
much like the one we use today, but based on 60 rather
than 10. So something like 1, 20 means one sixty and
twenty units, that is, 1 × 60 + 20 = 80. The same system
was then extended to fractions, so that one half was
represented as thirty sixtieths. It is convenient to mark
the beginning of the fractional part with a semicolon,
though this and the comma are a modern convention
that has no counterpart in the original texts. Then, for

78

II. The Origins of Modern Mathematics

36
example, 1;24,36 means 1 + 24
60 + 602 , which we would
141
more usually write as 100 , or 1.41. The Mesopotamian
way of writing numbers is called a sexagesimal placevalue system by analogy with the system we use today,
which is, of course, a decimal place-value system.
Neither of these systems is really equipped to deal
well with complicated numbers. In Mesopotamia, for
example, only ﬁnite sexagesimal expressions were employed, so the scribes were not able to write down an
exact value for the reciprocal of 7 because there is no
ﬁnite sexagesimal expression for 17 . In practice, this
meant that to divide by 7 required ﬁnding an approximate answer. The Egyptian “parts” system, on the other
hand, can represent any positive rational number, but
doing so may require a sequence of denominators that
to our eyes looks very complicated. One of the surviving papyri includes problems that look designed to
produce just such complicated answers. One of these
answers is “14, the 4th, the 56th, the 97th, the 194th,
the 388th, the 679th, the 776th,” which in modern notation is the fraction 14 28
97 . It seems that the joy of computation for its own sake became well-established very
early in the development of mathematics.
Mediterranean civilizations preserved both of these
systems for a while. Most everyday numbers were speciﬁed using the system of “parts.” On the other hand,
astronomy and navigation required more precision, so
the sexagesimal system was used in those ﬁelds. This
included measuring time and angles. The fact that we
still divide an hour into sixty minutes and a minute into
sixty seconds goes back, via the Greek astronomers,
to the Babylonian sexagesimal fractions; almost four
thousand years later, we are still inﬂuenced by the
Babylonian scribes.

2

Lengths Are Not Numbers

Things get more complicated with the mathematics
of classical Greek and Hellenistic civilizations. The
Greeks, of course, are famous for coming up with
the ﬁrst mathematical proofs. They were the ﬁrst to
attempt to do mathematics in a rigorously deductive
way, using clear initial assumptions and careful statements. This, perhaps, is what led them to be very
careful about numbers and their relations to other
magnitudes.
Sometime before the fourth century b.c.e., the Greeks
made the fundamental discovery of “incommensurable
magnitudes.” That is, they discovered that it is not
always possible to express two given lengths as (integer) multiples of a third length. It is not just that lengths

and numbers are conceptually distinct things (though
this was important too). The Greeks had found a proof
that one cannot use numbers to represent lengths.
Suppose, they argued, you have two line segments.
If their lengths are both given by numbers, then those
numbers will at worst involve some fractions. By changing the unit of length, then, we can make sure that both
of the lengths correspond to whole numbers. In other
words, it must be possible to choose a unit length so
that each of our segments consists of a whole number
multiple of the unit. The two segments, then, could be
“measured together,” i.e., would be “commensurable.”
Now here’s the catch: the Greeks could prove that this
was not always the case. Their standard example had to
do with the side and the diagonal of a square. We do not
know exactly how they ﬁrst established that these two
segments are not commensurable, but it might have
been something like this: if you subtract the side from
the diagonal, you will get a segment shorter than either
of them; if both side and diagonal are measured by a
common unit, then so is the diﬀerence. Now repeat the
argument: take the remainder and subtract it from the
side until we get a second remainder smaller than the
ﬁrst (it can be subtracted twice, in fact). The second
remainder will also be measured by the common unit.
It turns out to be quite easy to show that this process
will never terminate; instead, it will produce smaller and
smaller remainder segments. Eventually, the remainder
segment will be smaller than the unit that supposedly
measures it a whole number of times. That is impossible (no whole number is smaller than 1, after all), and
hence we can conclude that the common unit does not,
in fact, exist.
Of course, the diagonal does in fact have a length.
Today, we would say that if the length of the side is
√
one unit, then the length of the diagonal is 2 units,
and we would interpret this argument as showing that
√
the number 2 is not a fraction. The Greeks did not
√
quite see in what sense 2 could be a number. Instead,
it was a length, or, even better, the ratio between the
length of the diagonal and the length of the side. Similar arguments could be applied to other lengths; for
example, they knew that the side of a square of area 1
and a square of area 10 are incommensurable.
The conclusion, then, is that lengths are not numbers:
instead, they are some other kind of magnitude. But
now we are faced with a proliferation of magnitudes:
numbers, lengths, areas, angles, volumes, etc. Each of
these must be taken as a diﬀerent kind of quantity, not
comparable with the others.

II.1.

From Numbers to Number Systems

This is a problem for geometry, particularly if we
want to measure things. The Greeks solved this problem by relying heavily on the notion of a ratio. Two
quantities of the same type have a ratio, and this ratio
was allowed to be equal to the ratio of two quantities of
another type: equality of two ratios was deﬁned using
Eudoxus’s theory of proportion, the latter being one of
the most important and deep ideas of Greek geometry.
So, for example, rather than talking about a number
called π , which to them would not be a number at all,
they would say that “the ratio of the circle to the square
on its radius is the same as the ratio of the circumference to the diameter.” Notice that one of the two ratios
is between two areas, the other between two lengths.
The number π itself had no name in Greek mathematics, but the Greeks did compare it with ratios between
numbers: archimedes [VI.3] showed that it was just a
little bit less than the ratio of 22 to 7 and just a little
bit more than the ratio of 223 to 71.
Doing things this way seems ungainly to us, but it
worked very well. Furthermore, it is philosophically satisfying to conceive of a great variety of magnitudes
organized into various kinds (segments, angles, surfaces, etc.). Magnitudes of the same kind can be related
to one another by ratios, and ratios can be compared
with each other because they are relations perceived by
our minds. In fact, the word for ratio, both in Greek and
in Latin, is the same as the word for “reason” or “explanation” (logos in Greek, ratio in Latin). From the beginning, “irrational” (alogos in Greek) could mean both
“without a ratio” and “unreasonable.”
Inevitably, this austere theoretical system was somewhat disconnected from the everyday needs of people
who needed to measure things such as lengths and
angles. Astronomers kept right on using sexagesimal
approximations, as did mapmakers and other scientists. There was some “leakage” of course: in the ﬁrst
century c.e., Heron of Alexandria wrote a book that
reads like an attempt to apply the theoreticians’ discoveries to practical measurement. It is to him, for
22
example, that we owe the recommendation to use 7
as an approximation for π . (Presumably, he chose
Archimedes’ upper bound because it was the simpler
number.) In theoretical mathematics, however, the distinction between numbers and other kinds of magnitudes remained ﬁrm.
The history of numbers in the West over the ﬁfteen
hundred years that followed the classical Greek period
can be seen as having two main themes: ﬁrst, the Greek

79
compartmentalization between diﬀerent kinds of quantities was slowly demolished; second, in order to do this
the notion of number had to be generalized over and
over again.

3

Decimal Place Value

Our system for representing whole numbers goes back,
ultimately, to the mathematicians of the Indian subcontinent. Sometime before (probably well before) the ﬁfth
century c.e., they created nine symbols to designate
the numbers from one to nine and used the position
of these symbols to indicate their actual value. So a 3
in the units position meant three, and a 3 in the tens
position meant three tens, i.e., thirty. This, of course, is
what we still do; the symbols themselves have changed,
but not the principle. At about the same time, a place
marker was developed to indicate an unoccupied space;
this eventually evolved into our zero.
Indian astronomy made extensive use of sines, which
are almost never whole numbers. To represent these,
a Babylonian-style sexagesimal system was used, with
each “sexagesimal unit” being represented using the
decimal system. So “thirty-three and a quarter” might
be represented as 33 15 , i.e., 33 units and 15 “minutes”
(sixtieths).
Decimal place-value numeration was passed on from
India to the Islamic world fairly early. In the ninth century c.e. in Baghdad, the recently established capital
of the caliphate, one ﬁnds al-khwārizmı̄ [VI.5] writing a treatise on numeration in the Indian style, “using
nine symbols.” Several centuries later, al-Khwārizmı̄’s
treatise was translated into Latin. It was so popular
and inﬂuential in late-medieval Europe that decimal
numeration was often referred to as “algorism.”
It is worth noting that in al-Khwārizmı̄’s writing zero
still had a special status: it was a place holder, not
a number. But once we have a symbol, and we start
doing arithmetic using these symbols, the distinction
quickly disappears. We have to know how to add and
multiply numbers by zero in order to multiply multidigit numbers. In this way, “nothing” slowly became a
number.

4

What People Want Is a Number

As Greek culture was displaced by other inﬂuences, the
practical tradition became more important. One can see
this in al-Khwārizmı̄’s other famous book, whose title

80

II. The Origins of Modern Mathematics

gave us the word “algebra.” The book is actually a compendium of many diﬀerent kinds of practical or semipractical mathematics problems. Al-Khwārizmı̄ opens
the book with a declaration that tells us at once that we
are no longer in the Greek mathematical world: “When
I considered what people generally want in calculating,
I found that it is always a number.”
The ﬁrst portion of al-Khwārizmı̄’s book deals with
quadratic equations and with the algebraic manipulations (done entirely in words, with no symbols whatsoever) needed to deal with them. His procedure is exactly
the quadratic formula we still use, which of course
requires extracting a square root. But in every example
the number whose square root we need to ﬁnd turns
out to be a square, so that the square root is easily
found—and al-Khwārizmı̄ does get a number!
At other points in the book, however, we can see
that al-Khwārizmı̄ is beginning to think of irrational
square roots as number-like entities. He teaches the
reader how to manipulate symbols with square roots
in them, and gives (in words, of course) examples such
√
√
as (20− 200)+( 200−10) = 10. In the second part of
the book, which deals with geometry and measurement,
one even sees an approximation to a square root: “The
product is one thousand eight hundred and seventyﬁve; take its root, it is the area; it is forty-three and a
little.”
The mathematicians of medieval Islam were inﬂuenced not only by the practical tradition represented
by al-Khwārizmı̄, but also by the Greek tradition, especially euclid’s [VI.2] Elements. One ﬁnds in their writing a mixture of Greek precision and a more practical approach to measurement. In Omar Khayyam’s
Algebra, for example, one sees both theorems in the
Greek style and the desire for numerical solutions. In
his discussion of cubic equations Khayyam manages to
ﬁnd solutions by means of geometric constructions but
laments his inability to ﬁnd numerical values.
Slowly, however, the realm of “number” began to
√
grow. The Greeks might have insisted that 10 was not
a number, but rather a name for a line segment, the
side of a square whose area is 10, or a name for a ratio.
Among the medieval mathematicians, both in Islam and
√
in Europe, 10 started to behave more and more like a
number, entering into operations and even appearing
as the solution of certain problems.

5

Giving Equal Status to All Numbers

The idea of extending the decimal place-value system
to include fractions was discovered by several mathe-

maticians independently. The most inﬂuential of these
was stevin [VI.10], a Flemish mathematician and engineer who popularized the system in a booklet called
De Thiende (“The tenth”), which was ﬁrst published in
1585. By extending place value to tenths, hundredths,
and so on, Stevin created the system we still use today.
More importantly, he explained how it simpliﬁed calculations that involved fractions, and gave many practical applications. The cover page, in fact, announces
that the book is for “astrologers, surveyors, measurers
of tapestries.”
Stevin was certainly aware of some of the issues created by his move. He knew, for example, that the decimal expansion for 13 was inﬁnitely long; his discussion simply says that while it might be more correct
to say that the full inﬁnite expansion was the correct
representation, in practice it made little diﬀerence if
we truncated it.
Stevin was also aware that his system provided a way
to attach a “number” (meaning a decimal expansion)
to every single length. He saw little diﬀerence between
1.1764705882 (the beginning of the decimal expansion
20
of 17 ) and 1.4142135623 (the beginning of the decimal
√
expansion of 2). In his Arithmetic he boldly declared
that all (positive) numbers were squares, cubes, fourth
powers, etc., and that roots were just numbers. He also
says that “there are no absurd, irrational, irregular,
inexplicable, or surd numbers.” Those were all terms
used for irrational numbers, i.e., numbers that are not
fractions.
What Stevin was proposing, then, was to ﬂatten the
incredible diversity of “quantities” or “magnitudes”
into one expansive notion of number, deﬁned by decimal expansions. He was aware that these numbers
could be represented as lengths along a line. This
amounted to a fairly clear notion of what we now call
the positive real numbers.
Stevin’s proposal was made immensely more inﬂuential by the invention of logarithms. Like the sine and
the cosine, these were practical computational tools. In
order to be used, they needed to be tabulated, and the
tables were given in decimal form. Very soon, everyone
was using decimal representation.
It was only much later that it came to be understood
what a bold leap this move represented. The positive
real numbers are not just a larger number system; they
are an immensely larger number system, whose internal complexity we still do not fully understand (see set
theory [IV.22]).

II.1.

From Numbers to Number Systems

6

Real, False, Imaginary

Even as Stevin was writing, the next steps were being
taken: under the pressure of the theory of equations,
negative numbers and complex numbers began to be
useful. Stevin himself was already aware of negative
numbers, though he was clearly not quite comfortable
with them. For example, he explained that the fact that
−3 is a root of x 2 + x − 6 really means that 3 is a root
of the associated polynomial x 2 − x − 6, obtained by
replacing x by −x everywhere.
This was an easy dodge, but cubic equations created more diﬃcult problems. The work of several Italian mathematicians of the sixteenth century led to a
method for solving cubic equations. As a crucial step,
this method involved extracting a square root. The
problem was that the number whose root was needed
sometimes came out negative.
Up until then, it had always turned out that when an
algebraic problem led to the extraction of the square
root of a negative number, the problem simply had no
solution. But the equation x 3 = 15x + 4 clearly did
have a solution—indeed, x = 4 is one—it was just that
√
applying the cubic formula required computing −121.
It was bombelli [VI.8], also a mathematician and
engineer, who decided to bite the bullet and just see
what happened. In his Algebra, published in 1572, he
went ahead and computed with this “new kind of radical” and showed that he could ﬁnd the solution of
the cubic in this way. This showed that the cubic formula did indeed work in this case; more importantly,
it showed that these strange new numbers could be
useful.
It took a while for people to become comfortable with
these new quantities. About ﬁfty years later, we ﬁnd
both Albert Girard and descartes [VI.11] saying that
equations can have three sorts of roots: true (meaning positive), false (negative), and imaginary. It is not
completely clear that they understood that these imaginary roots would be what we now call complex numbers; Descartes, at least, sometimes seems to be saying
that an equation of degree n must have n roots, and
that the ones that are neither “true” nor “false” must
simply be imagined.
Slowly, however, complex numbers began to be used.
They came up in the theory of equations, in debates
about the logarithms of negative numbers, and in connection to trigonometry. Their connection with the sine
and cosine functions (via the exponential) was turned
into a powerful tool by euler [VI.19] in the eighteenth

81
century. By the middle of the eighteenth century, it was
well-known that every polynomial had a complete set
of roots in the complex numbers. This result became
known as the fundamental theorem of algebra
[V.13]; it was ﬁnally proved to everyone’s satisfaction
by gauss [VI.26]. Thus, the theory of equations did not
seem to require any further extension of the notion of
number.

7

Number Systems, Old and New

Since complex numbers are clearly diﬀerent from real
numbers, their presence stimulated people to begin
classifying numbers into diﬀerent kinds. Stevin’s egalitarianism had its impact, but it could not quite erase
the fact that whole numbers are nicer than decimals,
and that fractions are generally easier to grasp than
irrational numbers.
In the nineteenth century, all sorts of new ideas created the need for a more careful look at this classiﬁcation. In number theory, Gauss and kummer [VI.40]
started looking at subsets of the complex numbers that
behaved in a way analogous to the integers, such as the
√
set of all numbers a + b −1 with a and b both integers.
In the theory of equations, galois [VI.41] pointed out
that in order to do a careful analysis of the solvability of
an equation one must start by agreeing on what numbers count as “rational.” So, for example, he pointed out
that in abel’s [VI.33] theorem on the unsolvability of
the quintic, “rational” meant “expressible as a quotient
of polynomials in the symbols used as the coeﬃcients
of the equation,” and he noted that the set of all such
expressions obeyed the usual rules of arithmetic.
In the eighteenth century, Johann Lambert had established that e and π were irrational, and conjectured
that in fact they were transcendental, that is, that they
were not roots of any polynomial equation. Even the
existence of transcendental numbers was not known at
the time; liouville [VI.39] proved that such numbers
exist in 1844. Within a few decades, it was proved that
both e and π were transcendental, and later in the century cantor [VI.54] showed that in fact the vast majority of real numbers were transcendental. Cantor’s discovery highlighted, for the ﬁrst time, that the system
Stevin had popularized contained unexpected depths.
Perhaps the most important change in the concept of
number, however, came after hamilton’s [VI.37] discovery, in 1843, of a completely new number system.
Hamilton had noticed that coordinatizing the plane
using complex numbers (rather than simply using pairs

82
of real numbers) vastly simpliﬁed plane geometry. He
set out to ﬁnd a similar way to parametrize threedimensional space. This turned out to be impossible,
but led Hamilton to a four -dimensional system, which
he called the quaternions [III.76]. These behaved
much like numbers, with one crucial diﬀerence: multiplication was not commutative, that is, if q and q are
quaternions, qq and q q are usually not the same.
The quaternions were the ﬁrst system of “hypercomplex numbers,” and their appearance generated
lots of new questions. Were there other such systems?
What counts as a number system? If certain “numbers”
can fail to satisfy the commutative law, can we make
numbers that break other rules?
In the long run, this intellectual ferment led mathematicians to let go of the vague notion of “number”
or “quantity” and to hold on, instead, to the more formal notion of an algebraic structure. Each of the number systems, in the end, is simply a set of entities on
which we can do operations. What makes them interesting is that we can use them to parametrize, or coordinatize, systems that interest us. The whole numbers
(or integers, to give them their latinized formal name),
for example, formalize the notion of counting, while
the real numbers parametrize the line and serve as the
basis for geometry.
By the beginning of the twentieth century, there were
many well-known number systems. The integers had
pride of place, followed by a nested hierarchy consisting of the rational numbers (i.e., the fractions), the
real numbers (Stevin’s decimals, now carefully formalized), and the complex numbers. Still more general
than the complex numbers were the quaternions. But
these were by no means the only systems around.
Number theorists worked with several diﬀerent ﬁelds
of algebraic numbers, subsets of the complex numbers that could be understood as autonomous systems. Galois had introduced ﬁnite systems that obeyed
the usual rules of arithmetic, which we now call ﬁnite
ﬁelds. Function theorists worked with ﬁelds of functions; they certainly did not think of these as numbers,
but their analogy to number systems was known and
exploited.
Early in the twentieth century, Kurt Hensel introduced the p-adic numbers [III.51], which were built
from the rational numbers by giving a special role to a
prime number p. (Since p can be chosen at will, Hensel
in fact created inﬁnitely many new number systems.)
These too “obeyed the usual rules of arithmetic,” in
the sense that addition and multiplication behaved as

II. The Origins of Modern Mathematics
expected; in modern language, they were ﬁelds. The
p-adics provided the ﬁrst system of things that were
recognizably numbers but that had no visible relation
to the real or complex numbers—apart from the fact
that both systems contained the rational numbers. As
a result, they led Ernst Steinitz to create an abstract
theory of ﬁelds.
The move to abstraction that appears in Steinitz’s
work had also occurred in other parts of mathematics, most notably the theory of groups and their representations and the theory of algebraic numbers. All of
these theories were brought together into conceptual
unity by noether [VI.76], whose program came to be
known as “abstract algebra.” This left numbers behind
completely, focusing instead on the abstract structure
of sets with operations.
Today, it is no longer that easy to decide what counts
as a “number.” The objects from the original sequence
of “integer, rational, real, and complex” are certainly
numbers, but so are the p-adics. The quaternions are
rarely referred to as “numbers,” on the other hand,
though they can be used to coordinatize certain mathematical notions. In fact, even stranger systems can
show up as coordinates, such as Cayley’s octonions
[III.76]. In the end, whatever serves to parametrize or
coordinatize the problem at hand is what we use. If the
requisite system turns out not to exist yet, well, one
just has to invent it.
Further Reading
Berlinghoﬀ, W. P., and F. Q. Gouvêa. 2004. Math through the
Ages: A Gentle History for Teachers and Others, expanded
edn. Farmington, ME/Washington, DC: Oxton House/The
Mathematical Association of America.
Ebbingaus, H.-D., et al. 1991. Numbers. New York: Springer.
Fauvel, J., and J. J. Gray, eds. 1987. The History of Mathematics: A Reader. Basingstoke: Macmillan.
Fowler, D. 1985. 400 years of decimal fractions. Mathematics Teaching 110:20–21.
. 1999. The Mathematics of Plato’s Academy, 2nd edn.
Oxford: Oxford University Press.
Gouvêa, F. Q. 2003. p-adic Numbers: An Introduction, 2nd
edn. New York: Springer.
Katz, V. J. 1998. A History of Mathematics, 2nd edn. Reading,
MA: Addison-Wesley.
, ed. 2007. The Mathematics of Egypt, Mesopotamia,
China, India, and Islam: A Sourcebook. Princeton, NJ:
Princeton University Press.
Mazur, B. 2002. Imagining Numbers (Particularly the Square
Root of Minus Fifteen). New York: Farrar, Straus, and
Giroux.

II.2.

Geometry

83

Menninger, K. 1992. Number Words and Number Symbols:
A Cultural History of Numbers. New York: Dover. (Translated by P. Broneer from the revised German edition of
1957/58: Zahlwort und Ziﬀer. Eine Kulturgeschichte der
Zahl. Göttingen: Vandenhoeck und Ruprecht.)
Reid, C. 2006. From Zero to Inﬁnity: What Makes Numbers
Interesting. Natick, MA: A. K. Peters.

`,
      annotations: [
        createAnnotation("ii1-1", "note", "Key insight from this chapter."),
        createAnnotation("ii1-2", "note", "Important historical development discussed."),
        createAnnotation("ii1-3", "note", "Significant mathematical concept explained."),
      ],
    },
  ],
  exercises: [],
}

// II.2 Geometry - FULL VERBATIM TEXT
export const geometryOriginsFullText: FullTextChapter = {
  id: "geometry-origins",
  title: "Geometry",
  description: "Complete chapter by Jeremy Gray",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 2,
  content: [
    {
      id: "ii2-full-text",
      title: "Geometry",
      type: "text",
      content: "Complete chapter by Jeremy Gray",
      fullText: `II.2 Geometry
Jeremy Gray
1

Introduction

The modern view of geometry was inspired by the novel
geometrical theories of hilbert [VI.63] and Einstein in
the early years of the twentieth century, which built in
their turn on other radical reformulations of geometry
in the nineteenth century. For thousands of years, the
geometrical knowledge of the Greeks, as set out most
notably in euclid’s [VI.2] Elements, was held up as a
paradigm of perfect rigor, and indeed of human knowledge. The new theories amounted to the overthrow of
an entire way of thinking. This essay will pursue the history of geometry, starting from the time of Euclid, continuing with the advent of non-Euclidean geometry, and
ending with the work of riemann [VI.49], klein [VI.57],
and poincaré [VI.61]. Along the way, we shall examine how and why the notions of geometry changed so
remarkably. Modern geometry itself will be discussed
in later parts of this book.

2

Naive Geometry

Geometry generally, and Euclidean geometry in particular, is informally and rightly taken to be the mathematical description of what you see all around you:
a space of three dimensions (left–right, up–down, forwards–backwards) that seems to extend indeﬁnitely
far. Objects in it have positions, they sometimes move
around and occupy other positions, and all of these
positions can be speciﬁed by measuring lengths along
straight lines: this object is twenty meters from that
one, it is two meters tall, and so on. We can also measure angles, and there is a subtle relationship between
angles and lengths. Indeed, there is another aspect
to geometry, which we do not see but which we reason about. Geometry is a mathematical subject that is
full of theorems—the isosceles triangle theorem, the
Pythagorean theorem, and so on—which collectively
summarize what we can say about lengths, angles,
shapes, and positions. What distinguishes this aspect

of geometry from most other kinds of science is its
highly deductive nature. It really seems that by taking the simplest of concepts and thinking hard about
them one can build up an impressive, deductive body
of knowledge about space without having to gather
experimental evidence.
But can we? Is it really as simple as that? Can we have
genuine knowledge of space without ever leaving our
armchairs? It turns out that we cannot: there are other
geometries, also based on the concepts of length and
angle, that have every claim to be useful, but that disagree with Euclidean geometry. This is an astonishing
discovery of the early nineteenth century, but, before it
could be made, a naive understanding of fundamental
concepts, such as straightness, length, and angle, had
to be replaced by more precise deﬁnitions—a process
that took many hundreds of years. Once this had been
done, ﬁrst one and then inﬁnitely many new geometries
were discovered.

3

The Greek Formulation

Geometry can be thought of as a set of useful facts
about the world, or else as an organized body of knowledge. Either way, the origins of the subject are much
disputed. It is clear that the civilizations of Egypt and
Babylonia had at least some knowledge of geometry—
otherwise, they could not have built their large cities,
elaborate temples, and pyramids. But not only is it difﬁcult to give a rich and detailed account of what was
known before the Greeks, it is diﬃcult even to make
sense of the few scattered sources that we have from
before the time of Plato and Aristotle. One reason for
this is the spectacular success of the later Greek writer,
and author of what became the deﬁnitive text on geometry, Euclid of Alexandria (ca. 300 b.c.e.). One glance at
his famous Elements shows that a proper account of
the history of geometry will have to be about something much more than the acquisition of geometrical
facts. The Elements is a highly organized, deductive
body of knowledge. It is divided into a number of distinct themes, but each theme has a complex theoretical structure. Thus, whatever the origins of geometry might have been, by the time of Euclid it had
become the paradigm of a logical subject, oﬀering a
kind of knowledge quite diﬀerent from, and seemingly
higher than, knowledge directly gleaned from ordinary
experience.
Rather, therefore, than attempt to elucidate the early
history of geometry, this essay will trace the high road

84
of geometry’s claim on our attention: the apparent certainty of mathematical knowledge. It is exactly this
claim to a superior kind of knowledge that led eventually to the remarkable discovery of non-Euclidean
geometry: there are geometries other than Euclid’s that
are every bit as rigorously logical. Even more remarkably, some of these turn out to provide better models
of physical space than Euclidean geometry.
The Elements opens with four books on the study
of plane ﬁgures: triangles, quadrilaterals, and circles.
The famous theorem of Pythagoras is the forty-seventh
proposition of the ﬁrst book. Then come two books on
the theory of ratio and proportion and the theory of
similar ﬁgures (scale copies), treated with a high degree
of sophistication. The next three books are about whole
numbers, and are presumably a reworking of much
older material that would now be classiﬁed as elementary number theory. Here, for example, one ﬁnds the
famous result that there are inﬁnitely many prime numbers. The next book, the tenth, is by far the longest,
and deals with
 the√seemingly specialist topic of lengths
of the form a ± b (to write them as we would). The
ﬁnal three books, where the curious lengths studied in
Book X play a role, are about three-dimensional geometry. They end with the construction of the ﬁve regular
solids and a proof that there are no more. The discovery of the ﬁfth and last had been one of the topics that
excited Plato. Indeed, the ﬁve regular solids are crucial
to the cosmology of Plato’s late work the Timaeus.
Most books of the Elements open with a number
of deﬁnitions, and each has an elaborate deductive
structure. For example, to understand the Pythagorean
theorem, one is driven back to previous results, and
thence to even earlier results, until ﬁnally one comes
to rest on basic deﬁnitions. The whole structure is
quite compelling: reading it as an adult turned the
philosopher Thomas Hobbes from incredulity to lasting belief in a single sitting. What makes the Elements
so convincing is the nature of the arguments employed.
With some exceptions, mostly in the number-theoretic
books, these arguments use the axiomatic method.
That is to say, they start with some very simple axioms
that are intended to be self-evidently true, and proceed
by purely logical means to deduce theorems from them.
For this approach to work, three features must be
in place. The ﬁrst is that circularity should be carefully avoided. That is, if you are trying to prove a statement P and you deduce it from an earlier statement,
and deduce that from a yet earlier statement, and so
on, then at no stage should you reach the statement

II. The Origins of Modern Mathematics
P again. That would not prove P from the axioms,
but merely show that all the statements in your chain
were equivalent. Euclid did a remarkable job in this
respect.
The second necessary feature is that the rules of
inference should be clear and acceptable. Some geometrical statements seem so obvious that one can fail to
notice that they need to be proved: ideally, one should
use no properties of ﬁgures other than those that have
been clearly stated in their deﬁnitions, but this is a diﬃcult requirement to meet. Euclid’s success here was still
impressive, but mixed. On the one hand, the Elements
is a remarkable work, far outstripping any contemporary account of any of the topics it covers, and capable
of speaking down the millennia. On the other, it has
little gaps that from time to time later commentators
would ﬁll. For example, it is neither explicitly assumed
nor proved in the Elements that two circles will meet
if their centers lie outside each other and the sum of
their radii is greater than the distance between their
centers. However, Euclid is surprisingly clear that there
are rules of inference that are of general, if not indeed
universal, applicability, and others that apply to mathematics because they rely on the meanings of the terms
involved.
The third feature, not entirely separable from the
second, is adequate deﬁnitions. Euclid oﬀered two, or
perhaps three, sorts of deﬁnition. Book I opens with
seven deﬁnitions of objects, such as “point” and “line,”
that one might think were primitive and beyond definition, and it has recently been suggested that these
deﬁnitions are later additions. Then come, in Book I
and again in many later books, deﬁnitions of familiar
ﬁgures designed to make them amenable to mathematical reasoning: “triangle,” “quadrilateral,” “circle,” and
so on. The postulates of Book I form the third class of
deﬁnition and are rather more problematic.
Book I states ﬁve “common notions,” which are rules
of inference of a very general sort. For example, “If
equals be added to equals, the wholes are equals.” The
book also has ﬁve “postulates,” which are more narrowly mathematical. For example, the ﬁrst of these
asserts that one may draw a straight line from any point
to any point. One of these postulates, the ﬁfth, became
notorious: the so-called parallel postulate. It says that
“If a straight line falling on two straight lines make the
interior angles on the same side less than two right
angles, the two straight lines, if produced indeﬁnitely,
meet on that side on which are the angles less than two
right angles.”

II.2.

Geometry

Parallel lines, therefore, are straight lines that do not
meet. A helpful rephrasing of Euclid’s parallel postulate
was introduced by the Scottish editor, Robert Simson. It
appears in his edition of Euclid’s Elements from 1806.
There he showed that the parallel postulate is equivalent, if one assumes those parts of the Elements that
do not depend on it, to the following statement: given
any line m in a plane, and any point P in that plane that
does not lie on the line m, there is exactly one line n
in the plane that passes through the point P and does
not meet the line m. From this formulation it is clear
that the parallel postulate makes two assertions: given
a line and a point as described, a parallel line exists and
it is unique.
It is worth noting that Euclid himself was probably
well aware that the parallel postulate was awkward. It
asserts a property of straight lines that seems to have
made Greek mathematicians and philosophers uncomfortable, and this may be why its appearance in the Elements is delayed until proposition 29 of Book I. The
commentator Proclus (ﬁfth century c.e.), in his extensive discussion of Book I of the Elements, observed that
the hyperbola and asymptote get closer and closer as
they move outwards, but they never meet. If a line and a
curve can do this, why not two lines? The matter needs
further analysis. Unfortunately, not much of the Elements would be left if mathematicians dropped the parallel postulate and retreated to the consequences of the
remaining deﬁnitions: a signiﬁcant body of knowledge
depends on it. Most notably, the parallel postulate is
needed to prove that the angles in a triangle add up to
two right angles—a crucial result in establishing many
other theorems about angles in ﬁgures, including the
Pythagorean theorem.
Whatever claims educators may have made about
Euclid’s Elements down the ages, a signiﬁcant number
of experts knew that it was an unsatisfactory compromise: a useful and remarkably rigorous theory could be
had, but only at the price of accepting the parallel postulate. But the parallel postulate was diﬃcult to accept
on trust: it did not have the same intuitively obvious
feel of the other axioms and there was no obvious way
of verifying it. The higher one’s standards, the more
painful this compromise was. What, the experts asked,
was to be done?
One Greek discussion must suﬃce here. In Proclus’s
view, if the truth of the parallel postulate was not obvious, and yet geometry was bare without it, then the only
possibility was that it was true because it was a theorem. And so he gave it a proof. He argued as follows. Let

85
two lines m and n cross a third line k at P and Q , respectively, and make angles with it that add up to two right
angles. Now draw a line l that crosses m at P and enters
the space between the lines m and n. The distance
between l and m as one moves away from the point P
continually increases, said Proclus, and therefore line l
must eventually cross line n.
Proclus’s argument is ﬂawed. The ﬂaw is subtle, and
sets us up for what is to come. He was correct that
the distance between the lines l and m increases indefinitely. But his argument assumes that the distance
between lines m and n does not also increase indeﬁnitely, and is instead bounded. Now Proclus knew very
well that if the parallel postulate is granted, then it can
be shown that the lines m and n are parallel and that
the distance between them is a constant. But until the
parallel postulate is proved, nothing prevents one saying that the lines m and n diverge. Proclus’s proof does
not therefore work unless one can show that lines that
do not meet also do not diverge.
Proclus’s attempt was not the only one, but it is typical of such arguments, which all have a standard form.
They start by detaching the parallel postulate from
Euclid’s Elements, together with all the arguments and
theorems that depend on it. Let us call what remains
the “core” of the Elements. Using this core, an attempt
is then made to derive the parallel postulate as a theorem. The correct conclusion to be derived from Proclus’s attempt is not that the parallel postulate is a theorem, but rather that, given the core of the Elements,
the parallel postulate is equivalent to the statement
that lines that do not meet also do not diverge. Aganis,
a writer of the sixth century c.e. about whom almost
nothing is known, assumed, in a later attempt, that parallel lines are everywhere equidistant, and his argument
showed only that, given the core, the Euclidean deﬁnition of parallel lines is equivalent to deﬁning them to
be equidistant.
Notice that one cannot even enter this debate unless
one is clear which properties of straight lines belong to
them by deﬁnition, and which are to be derived as theorems. If one is willing to add to the store of “commonsense” assumptions about geometry as one goes along,
the whole careful deductive structure of the Elements
collapses into a pile of facts.
This deductive character of the Elements is clearly
something that Euclid regarded as important, but one
can also ask what he thought geometry was about. Was
it meant, for example, as a mathematical description
of space? No surviving text tells us what he thought

86

II. The Origins of Modern Mathematics

about this question, but it is worth noting that the most
celebrated Greek theory of the universe, developed by
Aristotle and many later commentators, assumed that
space was ﬁnite, bounded by the sphere of the ﬁxed
stars. The mathematical space of the Elements is inﬁnite, and so one has at least to consider the possibility
that, for all these writers, mathematical space was not
intended as a simple idealization of the physical world.

a

k

b
4

m

n

Arab and Islamic Commentators

What we think of today as Greek geometry was the
work of a handful of mathematicians, mostly concentrated in a period of less than two centuries. They were
eventually succeeded by a somewhat larger number of
Arabic and Islamic writers, spread out over a much
greater area and a longer time. These writers tend to be
remembered as commentators on Greek mathematics
and science, and for transmitting them to later Western authors, but they should also be remembered as
creative, innovative mathematicians and scientists in
their own right. A number of them took up the study
of Euclid’s Elements, and with it the problem of the parallel postulate. They too took the view that it was not
a proper postulate, but one that could be proved as a
theorem using the core alone.
Among the ﬁrst to attempt a proof was Thābit ibn
Qurra. He was a pagan from near Aleppo who lived and
worked in Baghdad, where he died in 901. Here there
is room to describe only his ﬁrst approach. He argued
that if two lines m and n are crossed by a third, k, and
if they approach each other on one side of the line k,
then they diverge indeﬁnitely on the other side of k. He
deduced that two lines that make equal alternate angles
with a transversal (the marked angles in ﬁgure 1) cannot approach each other on one side of a transversal:
the symmetry of the situation would imply that they
approached on the other side as well, but he had shown
that they would have to diverge on the other side. From
this he deduced the Euclidean theory of parallels, but
his argument was also ﬂawed, since he had not considered the possibility that two lines could diverge in both
directions.
The distinguished Islamic mathematician and scientist ibn al-Haytham was born in Basra in 965 and died
in Egypt in 1041. He took a quadrilateral with two equal
sides perpendicular to the base and dropped a perpendicular from one side to the other. He now attempted
to prove that this perpendicular is equal to the base,
and to do so he argued that as one of two original perpendiculars is moved toward the other, its tip sweeps

Figure 1 The lines m and n make equal alternate
angles a and b with the transversal k.

A

D
A'

B

B'

C

Figure 2 AB and CD are equal, the angle ADC is a right
angle, A B is an intermediate position of AB as it moves
toward CD.

out a straight line, which will coincide with the perpendicular just dropped (see ﬁgure 2). This amounts
to the assumption that the curve everywhere equidistant from a straight line is itself straight, from which
the parallel postulate easily follows, and so his attempt
fails. His proof was later heavily criticized by Omar
Khayyam for its use of motion, which he found fundamentally unclear and alien to Euclid’s Elements. It
is indeed quite distinct from any use Euclid had for
motion in geometry, because in this case the nature
of the curve obtained is not clear: it is precisely what
needs to be analyzed.
The last of the Islamic attempts on the parallel postulate is due to Nas.ır al-Dı̄n al-T.ūsı̄. He was born in Iran
in 1201 and died in Baghdad in 1274. His extensive
commentary is also one of our sources of knowledge
of earlier Islamic mathematical work on this subject.
Al-T.ūsı̄ focused on showing that if two lines begin to
converge, then they must continue to do so until they
eventually meet. To this end he set out to show that
(∗) if l and m are two lines that make an angle of less
than a right angle, then every line perpendicular
to l meets the line m.

II.2.

Geometry

He showed that if (∗) is true, then the parallel postulate
follows. However, his argument for (∗) is ﬂawed.
It is genuinely diﬃcult to see what is wrong with
some of these arguments if one uses only the techniques available to mathematicians of the time. Islamic
mathematicians showed a degree of sophistication that
was not to be surpassed by their Western successors
until the eighteenth century. Unfortunately, however,
their writings did not come to the attention of the West
until much later, with the exception of a single work
in the Vatican Library, published in 1594, which was
for many years erroneously attributed to al-T.ūsı̄ (and
which may have been the work of his son).

5

The Western Revival of Interest

The Western revival of interest in the parallel postulate came with the second wave of translations of Greek
mathematics, led by Commandino and Maurolico in the
sixteenth century and spread by the advent of printing. Important texts were discovered in a number of
older libraries, and ultimately this led to the production of new texts of Euclid’s Elements. Many of these
had something to say about the problem of parallels,
pithily referred to by Henry Savile as “a blot on Euclid.”
For example, the powerful Jesuit Christopher Clavius,
who edited and reworked the Elements in 1574, tried to
argue that parallel lines could be deﬁned as equidistant
lines.
The ready identiﬁcation of physical space with the
space of Euclidean geometry came about gradually during the sixteenth and seventeenth centuries, after the
acceptance of Copernican astronomy and the abolition of the so-called sphere of ﬁxed stars. It was canonized by newton [VI.14] in his Principia Mathematica, which proposed a theory of gravitation that was
ﬁrmly situated in Euclidean space. Although Newtonian physics had to ﬁght for its acceptance, Newtonian cosmology had a smooth path and became the
unchallenged orthodoxy of the eighteenth century. It
can be argued that this identiﬁcation raised the stakes,
because any unexpected or counterintuitive conclusion
drawn solely from the core of the Elements was now,
possibly, a counterintuitive fact about space.
In 1663 the English mathematician John Wallis took
a much more subtle view of the parallel postulate than
any of his predecessors. He had been instructed by Halley, who could read Arabic, in the contents of the apocryphal edition of al-T.ūsı̄’s work in the Vatican Library,
and he too gave an attempted proof. Unusually, Wallis

87
also had the insight to see where his own argument was
ﬂawed, and commented that what it really showed was
that, in the presence of the core, the parallel postulate
was equivalent to the assertion that there exist similar
ﬁgures that are not congruent.
Half a century later, Wallis was followed by the most
persistent and thoroughgoing of all the defenders of
the parallel postulate, Gerolamo Saccheri, an Italian
Jesuit who published in 1733, the year of his death,
a short book called Euclid Freed of Every Flaw. This
little masterpiece of classical reasoning opens with a
trichotomy. Unless the parallel postulate is known, the
angle sum of a triangle may be either less than, equal to,
or greater than two right angles. Saccheri showed that
whatever happens in one triangle happens for them all,
so there are apparently three geometries compatible
with the core. In the ﬁrst, every triangle has an angle
sum less than two right angles (call this case L). In the
second, every triangle has an angle sum equal to two
right angles (call this case E). In the third, every triangle has an angle sum greater than two right angles (call
this case G). Case E is, of course, Euclidean geometry,
which Saccheri wished to show was the only case possible. He therefore set to work to show that each of the
other cases independently self-destructed. He was successful with case G, and then turned to case L “which
alone obstructs the truth of the [parallel] axiom,” as he
put it.
Case L proved to be diﬃcult, and during the course
of his investigations Saccheri established a number of
interesting propositions. For example, if case L is true,
then two lines that do not meet have just one common
perpendicular, and they diverge on either side of it.
In the end, Saccheri tried to deal with his diﬃculties
by relying on foolish statements about the behavior of
lines at inﬁnity: it was here that his attempted proof
failed.
Saccheri’s work sank slowly, though not completely,
into obscurity. It did, however, come to the attention
of the Swiss mathematician Johann Lambert, who pursued the trichotomy but, unlike Saccheri, stopped short
of claiming success in proving the parallel postulate.
Instead the work was abandoned, and was published
only in 1786, after his death. Lambert distinguished
carefully between unpalatable results and impossibilities. He had a sketch of an argument to show that in
case L the area of a triangle is proportional to the difference between two right angles and the angle sum
of the triangle. He knew that in case L similar triangles had to be congruent, which would imply that the

88

II. The Origins of Modern Mathematics

tables of trigonometric functions used in astronomy
were not in fact valid and that diﬀerent tables would
have to be produced for every size of triangle. In particular, for every angle less than 60◦ there would be
precisely one equilateral triangle with that given angle
at each vertex. This would lead to what philosophers
called an “absolute” measure of length (one could take,
for instance, the length of the side of an equilateral triangle with angles equal to 30◦ ), which leibniz’s [VI.15]
follower Wolﬀ had said was impossible. And indeed it
is counterintuitive: lengths are generally deﬁned in relative terms, as, for instance, a certain proportion of the
length of a meter rod in Paris, or of the circumference
of Earth, or of something similar. But such arguments,
said Lambert, “were drawn from love and hate, with
which a mathematician can have nothing to do.”

6

The Shift of Focus around 1800

The phase of Western interest in the parallel postulate that began with the publication of modern editions
of Euclid’s Elements started to decline with a further
turn in that enterprise. After the French revolution,
legendre [VI.24] set about writing textbooks, largely
for the use of students hoping to enter the École Polytechnique, that would restore the study of elementary
geometry to something like the rigorous form in which
it appeared in the Elements. However, it was one thing
to seek to replace books of a heavily intuitive kind, but
quite another to deliver the requisite degree of rigor.
Legendre, as he came to realize, ultimately failed in his
attempt. Speciﬁcally, like everyone before him, he was
unable to give an adequate defense of the parallel postulate. Legendre’s Éléments de Géométrie ran to numerous editions, and from time to time a diﬀerent attempt
on the postulate was made. Some of these attempts
would be hard to describe favorably, but the best can
be extremely persuasive.
Legendre’s work was classical in spirit, and he still
took it for granted that the parallel postulate had to
be true. But by around 1800 this attitude was no longer
universally held. Not everybody thought that the postulate must, somehow, be defended, and some were prepared to contemplate with equanimity the idea that it
might be false. No clearer illustration of this shift can
be found than a brief note sent to gauss [VI.26] by
F. K. Schweikart, a Professor of Law at the University
of Marburg, in 1818. Schweikart described in a page
the main results he had been led to in what he called
“astral geometry,” in which the angle sum of a triangle

was less than two right angles: squares had a particular form, and the altitude of a right-angled isosceles
triangle was bounded by an amount Schweikart called
“the constant.” Schweikart went so far as to claim that
the new geometry might even be the true geometry of
space. Gauss replied positively. He accepted the results,
and he claimed that he could do all of elementary
geometry once a value for the constant was given. One
could argue, somewhat ungenerously, that Schweikart
had done little more than read Lambert’s posthumous
book—although the theorem about isosceles triangles
is new. However, what is notable is the attitude of
mind: the idea that this new geometry might be true,
and not just a mathematical curiosity. Euclid’s Elements
shackled him no more.
Unfortunately, it is much less clear what Gauss himself thought. Some historians, bearing Gauss’s remarkable mathematical originality in mind, have been inclined to interpret the evidence in such a way that
Gauss emerges as the ﬁrst person to discover non-Euclidean geometry. However, the evidence is slight, and
it is diﬃcult to draw ﬁrm conclusions from it. There are
traces of some early investigations by Gauss of Euclidean geometry that include a study of a new deﬁnition
of parallel lines; there are claims made by Gauss late in
life that he had known this or that fact for many years;
and there are letters he wrote to his friends. But there
is no material in the surviving papers that allows us
to reconstruct what Gauss knew or that supports the
claim that Gauss discovered non-Euclidean geometry.
Rather, the picture would seem to be that Gauss came
to realize during the 1810s that all previous attempts
to derive the parallel postulate from the core of Euclidean geometry had failed and that all future attempts
would probably fail as well. He became more and more
convinced that there was another possible geometry
of space. Geometry ceased, in his mind, to have the
status of arithmetic, which was a matter of logic, and
became associated with mechanics, an empirical science. The simplest accurate statement of Gauss’s position through the 1820s is that he did not doubt that
space might be described by a non-Euclidean geometry,
and of course there was only one possibility: that of
case L described above. It was an empirical matter, but
one that could not be resolved by land-based measurements because any departure from Euclidean geometry
was, evidently, very small. In this view he was supported by his friends, such as Bessel and Olbers, both
professional astronomers. Gauss the scientist was convinced, but Gauss the mathematician may have retained

II.2.

Geometry

a small degree of doubt, and certainly never developed the mathematical theory required to describe
non-Euclidean geometry adequately.
One theory available to Gauss from the early 1820s
was that of diﬀerential geometry. Gauss eventually
published one of his masterworks on this subject,
his Disquisitiones Generales circa Superﬁcies Curvas
(1827). In it he showed how to describe geometry on
any surface in space, and how to regard certain features of the geometry of a surface as intrinsic to the surface and independent of how the surface was embedded into three-dimensional space. It would have been
possible for Gauss to consider a surface of constant
negative curvature [III.78], and to show that triangles
on such a surface are described by hyperbolic trigonometric formulas, but he did not do this until the 1840s.
Had he done so, he would have had a surface on which
the formulas of a geometry satisfying case L apply.
A surface, however, is not enough. We accept the
validity of two-dimensional Euclidean geometry because it is a simpliﬁcation of three-dimensional Euclidean geometry. Before a two-dimensional geometry satisfying the hypotheses of case L can be accepted, it is
necessary to show that there is a plausible three-dimensional geometry analogous to case L. Such a geometry
has to be described in detail and shown to be as plausible as Euclidean three-dimensional geometry. This
Gauss simply never did.

7

Bolyai and Lobachevskii

The fame for discovering non-Euclidean geometry goes
to two men, bolyai [VI.34] in Hungary and lobachevskii [VI.31] in Russia, who independently gave very similar accounts of it. In particular, both men described a
system of geometry in two and three dimensions that
diﬀered from Euclid’s but had an equally good claim to
be the geometry of space. Lobachevskii published ﬁrst,
in 1829, but only in an obscure Russian journal, and
then in French in 1837, in German in 1840, and again
in French in 1855. Bolyai published his account in 1831,
in an appendix to a two-volume work on geometry by
his father.
It is easiest to describe their achievements together.
Both men deﬁned parallels in a novel way, as follows.
Given a point P and a line m there will be some lines
through P that meet m and others that do not. Separating these two sets will be two lines through P that
do not quite meet m but which might come arbitrarily
close, one to the right of P and one to the left. This situation is illustrated in ﬁgure 3: the two lines in question

89

P
n'

n''
m

Figure 3 The lines n and n through P separate the lines
through P that meet the line m from those that do not.

P

Figure 4 A curve perpendicular to a family of parallels.

are n and n . Notice that lines on the diagram appear
curved. This is because, in order to represent them on
a ﬂat, Euclidean page, it is necessary to distort them,
unless the geometry is itself Euclidean, in which case
one can put n and n together and make a single line
that is inﬁnite in both directions.
Given this new way of talking, it still makes sense to
talk of dropping the perpendicular from P to the line m.
The left and right parallels to m through P make equal
angles with the perpendicular, called the angle of parallelism. If the angle is a right angle, then the geometry
is Euclidean. However, if it is less than a right angle,
then the possibility arises of a new geometry. It turns
out that the size of the angle depends on the length
of the perpendicular from P to m. Neither Bolyai nor
Lobachevskii expended any eﬀort in trying to show that
there was not some contradiction in taking the angle of
parallelism to be less than a right angle. Instead, they
simply made the assumption and expended a great deal
of eﬀort on determining the angle from the length of
the perpendicular.
They both showed that, given a family of lines all parallel (in the same direction) to a given line, and given
a point on one of the lines, there is a curve through
that point that is perpendicular to each of the lines
(ﬁgure 4).
In Euclidean geometry the curve deﬁned in this way
is the straight line that is at right angles to the family of parallel lines and that passes through the given

90

II. The Origins of Modern Mathematics

P

Figure 5 A curve perpendicular to
a family of Euclidean parallels.

P

Q

Figure 6 A curve perpendicular to
a family of Euclidean lines through a point.

point (ﬁgure 5). If, again in Euclidean geometry, one
takes the family of all lines through a common point Q
and chooses another point P, then there will be a curve
through P that is perpendicular to all the lines: the circle
with center Q that passes through P (ﬁgure 6).
The curve deﬁned by Bolyai and Lobachevskii has
some of the properties of both these Euclidean constructions: it is perpendicular to all the parallels, but it
is curved and not straight. Bolyai called such a curve
an L-curve. Lobachevskii more helpfully called it a
horocycle, and the name has stuck.
Their complicated arguments took both men into
three-dimensional geometry. Here Lobachevskii’s arguments were somewhat clearer than Bolyai’s, and both
men notably surpassed Gauss. If the ﬁgure deﬁning a
horocycle is rotated about one of the parallel lines, the
lines become a family of parallel lines in three dimensions and the horocycle sweeps out a bowl-shaped surface, called the F -surface by Bolyai and the horosphere
by Lobachevskii. Both men now showed that something
remarkable happens. Planes through the horosphere
cut it either in circles or in horocycles, and if a triangle

is drawn on a horosphere whose sides are horocycles,
then the angle sum of such a triangle is two right angles.
To put this another way, although the space that contains the horosphere is a three-dimensional version of
case L, and is deﬁnitely not Euclidean, the geometry you
obtain when you restrict attention to the horosphere is
(two-dimensional) Euclidean geometry!
Bolyai and Lobachevskii also knew that one can draw
spheres in their three-dimensional space, and they
showed (though in this they were not original) that the
formulas of spherical geometry hold independently of
the parallel postulate. Lobachevskii now used an ingenious construction involving his parallel lines to show
that a triangle on a sphere determines and is determined by a triangle in the plane, which also determines and is determined by a triangle on the horosphere. This implies that the formulas of spherical
geometry must determine formulas that apply to the
triangles on the horosphere. On checking through the
details, Lobachevskii, and in more or less the same way
Bolyai, showed that the triangles on the horosphere are
described by the formulas of hyperbolic trigonometry.
The formulas for spherical geometry depend on the
radius of the sphere in question. Similarly, the formulas of hyperbolic trigonometry depend on a certain real
parameter. However, this parameter does not have a
similarly clear geometrical interpretation. That defect
apart, the formulas have a number of reassuring properties. In particular, they closely approximate the familiar formulas of plane geometry when the sides of the
triangles are very small, which helps to explain how
this geometry could have remained undetected for so
long—it diﬀers very little from Euclidean geometry in
small regions of space. Formulas for length and area
can be developed in the new setting: they show that
the area of a triangle is proportional to the amount by
which the angle sum of the triangle falls short of two
right angles. Lobachevskii, in particular, seems to have
felt that the very fact that there were neat and plausible
formulas of this kind was enough reason to accept the
new geometry. In his opinion, all geometry was about
measurement, and theorems in geometry were unfailing connections between measurements expressed by
formulas. His methods produced such formulas, and
that, for him, was enough.
Bolyai and Lobachevskii, having produced a description of a novel three-dimensional geometry, raised the
question of which geometry is true: is it Euclidean
geometry or is it the new geometry for some value of
the parameter that could presumably be determined

II.2.

Geometry

experimentally? Bolyai left matters there, but Lobachevskii explicitly showed that measurements of stellar
parallax might resolve the question. Here he was unsuccessful: such experiments are notoriously delicate.
By and large, the reaction to Bolyai and Lobachevskii’s ideas during their lifetimes was one of neglect
and hostility, and they died unaware of the success
their discoveries would ultimately have. Bolyai and his
father sent their work to Gauss, who replied in 1832
that he could not praise the work “for to do so would be
to praise myself,” adding, for extra measure, a simpler
proof of one of Janos Bolyai’s opening results. He was,
he said, nonetheless delighted that it was the son of his
old friend who had taken precedence over him. Janos
Bolyai was enraged, and refused to publish again, thus
depriving himself of the opportunity to establish his
priority over Gauss by publishing his work as an article
in a mathematics journal. Oddly, there is no evidence
that Gauss knew the details of the young Hungarian’s
work in advance. More likely, he saw at once how the
theory would go once he appreciated the opening of
Bolyai’s account.
A charitable interpretation of the surviving evidence
would be that, by 1830, Gauss was convinced of the
possibility that physical space might be described by
non-Euclidean geometry, and he surely knew how to
handle two-dimensional non-Euclidean geometry using
hyperbolic trigonometry (although no detailed account
of this survives from his hand). But the three-dimensional theory was known ﬁrst to Bolyai and Lobachevskii, and may well not have been known to Gauss until
he read their work.
Lobachevskii fared little better than Bolyai. His initial publication of 1829 was savaged in the press by
Ostrogradskii, a much more established ﬁgure who
was, moreover, in St Petersburg, whereas Lobachevskii
was in provincial Kazan. His account in Journal für die
reine und angewandte Mathematik (otherwise known
as Crelle’s Journal) suﬀered grievously from referring
to results proved only in the Russian papers from
which it had been adapted. His booklet of 1840 drew
only one review, of more than usual stupidity. He did,
however, send it to Gauss, who found it excellent and
had Lobachevskii elected to the Göttingen Academy of
Sciences. But Gauss’s enthusiasm stopped there, and
Lobachevskii received no further support from him.
Such a dreadful response to a major discovery invites
analysis on several levels. It has to be said that the deﬁnition of parallels upon which both men depended was,

91
as it stood, inadequate, but their work was not criticized on that account. It was dismissed with scorn,
as if it were self-evident that it was wrong: so wrong
that it would be a waste of time ﬁnding the error it
surely contained, so wrong that the right response was
to heap ridicule upon its authors or simply to dismiss
them without comment. This is a measure of the hold
that Euclidean geometry still had on the minds of most
people at the time. Even Copernicanism, for example,
and the discoveries of Galileo drew a better reception
from the experts.

8

Acceptance of Non-Euclidean Geometry

When Gauss died in 1855, an immense amount of unpublished mathematics was found among his papers.
Among it was evidence of his support for Bolyai and
Lobachevskii, and his correspondence endorsing the
possible validity of non-Euclidean geometry. As this
was gradually published, the eﬀect was to send people oﬀ to look for what Bolyai and Lobachevskii had
written and to read it in a more positive light.
Quite by chance, Gauss had also had a student at
Göttingen who was capable of moving the matter decisively forward, even though the actual amount of contact between the two was probably quite slight. This
was riemann [VI.49]. In 1854 he was called to defend
his Habilitation thesis, the postdoctoral qualiﬁcation
that was a German mathematician’s license to teach
in a university. As was the custom, he oﬀered three
titles and Gauss, who was his examiner, chose the one
Riemann least expected: “On the hypotheses that lie at
the foundation of geometry.” The paper, which was to
be published only posthumously, in 1867, was nothing
less than a complete reformulation of geometry.
Riemann proposed that geometry was the study of
what he called manifolds [I.3 §§6.9, 6.10]. These were
“spaces” of points, together with a notion of distance
that looked like Euclidean distance on small scales but
which could be quite diﬀerent at larger scales. This kind
of geometry could be done in a variety of ways, he suggested, by means of the calculus. It could be carried
out for manifolds of any dimension, and in fact Riemann was even prepared to contemplate manifolds for
which the dimension was inﬁnite.
A vital aspect of Riemann’s geometry, in which he
followed the lead of Gauss, was that it was concerned
only with those properties of the manifold that were
intrinsic, rather than properties that depended on some
embedding into a larger space. In particular, the distance between two points x and y was deﬁned to be

92
the length of the shortest curve joining x and y that
lay entirely within the surface. Such curves are called
geodesics. (On a sphere, for example, the geodesics are
arcs of great circles.)
Even two-dimensional manifolds could have diﬀerent, intrinsic curvatures—indeed, a single two-dimensional manifold could have diﬀerent curvatures in different places—so Riemann’s deﬁnition led to inﬁnitely
many genuinely distinct geometries in each dimension.
Furthermore, these geometries were best deﬁned without reference to a Euclidean space that contained them,
so the hegemony of Euclidean geometry was broken
once and for all.
As the word “hypotheses” in the title of his thesis
suggests, Riemann was not at all interested in the sorts
of assumptions needed by Euclid. Nor was he much
interested in the opposition between Euclidean and
non-Euclidean geometry. He made a small reference
at the start of his paper to the murkiness that lay at
the heart of geometry, despite the eﬀorts of Legendre,
and toward the end he considered the three diﬀerent
geometries on two-dimensional manifolds for which
the curvature is constant. He noted that one was spherical geometry, another was Euclidean geometry, and the
third was diﬀerent again, and that in each case the angle
sums of all triangles could be calculated as soon as one
knew the sum of the angles of any one triangle. But
he made no reference to Bolyai or Lobachevskii, merely
noting that if the geometry of space was indeed a threedimensional geometry of constant curvature, then to
determine which geometry it was would involve taking measurements in unfeasibly large regions of space.
He did discuss generalizations of Gauss’s curvature to
spaces of arbitrary dimension, and he showed what
metrics [III.56] (that is, deﬁnitions of distance) there
could be on spaces of constant curvature. The formula
he wrote down is very general, but as with Bolyai and
Lobachevskii it depended on a certain real parameter—
the curvature. When the curvature is negative, his deﬁnition of distance gives a description of non-Euclidean
geometry.
Riemann died in 1866, and by the time his thesis was
published an Italian mathematician, Eugenio Beltrami,
had independently come to some of the same ideas.
He was interested in what the possibilities were if one
wished to map one surface to another. For example, one
might ask, for some particular surface S, whether it is
possible to ﬁnd a map from S to the plane such that
the geodesics in S are mapped to straight lines in the
plane. He found that the answer was yes if and only if

II. The Origins of Modern Mathematics
the space has constant curvature. There is, for example,
a well-known map from the hemisphere to a plane with
this property. Beltrami found a simple way of modifying the formula so that now it deﬁned a map from a
surface of constant negative curvature onto the interior of a disk, and he realized the signiﬁcance of what
he had done: his map deﬁned a metric on the interior
of the disk, and the resulting metric space obeyed the
axioms for non-Euclidean geometry; therefore, those
axioms would not lead to a contradiction.
Some years earlier, Minding, in Germany, had found a
surface, sometimes called the pseudosphere, that had
constant negative curvature. It was obtained by rotating a curve called the tractrix about its axis. This surface has the shape of a bugle, so it seemed rather less
natural than the space of Euclidean plane geometry
and unsuitable as a rival to it. The pseudosphere was
independently rediscovered by liouville [VI.39] some
years later, and Codazzi learned of it from that source
and showed that triangles on this surface are described
by the formulas of hyperbolic trigonometry. But none
of these men saw the connection to non-Euclidean
geometry—that was left to Beltrami.
Beltrami realized that his disk depicted an inﬁnite
space of constant negative curvature, in which the
geometry of Lobachevskii (he did not know at that time
of Bolyai’s work) held true. He saw that it related to the
pseudosphere in a way similar to the way that a plane
relates to an inﬁnite cylinder. After a period of some
doubt, he learned of Riemann’s ideas and realized that
his disk was in fact as good a depiction of the space
of non-Euclidean geometry as any could be; there was
no need to realize his geometry as that of a surface in
Euclidean three-dimensional space. He thereupon published his essay, in 1868. This was the ﬁrst time that
sound foundations had been publicly given for the area
of mathematics that could now be called non-Euclidean
geometry.
In 1871 the young klein [VI.57] took up the subject. He already knew that the English mathematician
cayley [VI.46] had contrived a way of introducing
Euclidean metrical concepts into projective geometry [I.3 §6.7]. While studying at Berlin, Klein saw a way
of generalizing Cayley’s idea and exhibiting Beltrami’s
non-Euclidean geometry as a special case of projective
geometry. His idea met with the disapproval of weierstrass [VI.44], the leading mathematician in Berlin,
who objected that projective geometry was not a metrical geometry: therefore, he claimed, it could not generate metrical concepts. However, Klein persisted and in a

II.2.

Geometry

93

series of three papers, in 1871, 1872, and 1873, showed
that all the known geometries could be regarded as
subgeometries of projective geometry. His idea was to
recast geometry as the study of a group acting on a
space. Properties of ﬁgures (subsets of the space) that
remain invariant under the action of the group are the
geometric properties. So, for example, in a projective
space of some dimension, the appropriate group for
projective geometry is the group of all transformations
that map lines to lines, and the subgroup that maps the
interior of a given conic to itself may be regarded as the
group of transformations of non-Euclidean geometry:
see the box on p. 94. (For a fuller discussion of Klein’s
approach to geometry, see [I.3 §6].)
In the 1870s Klein’s message was spread by the ﬁrst
and third of these papers, which were published in
the recently founded journal Mathematische Annalen.
As Klein’s prestige grew, matters changed, and by the
1890s, when he had the second of the papers republished and translated into several languages, it was this,
the Erlanger Programm, that became well-known. It is
named after the university where Klein became a professor, at the remarkably young age of twenty-three,
but it was not his inaugural address. (That was about
mathematics education.) For many years it was a singularly obscure publication, and it is unlikely that it had
the eﬀect on mathematics that some historians have
come to suggest.

9

Convincing Others

Klein’s work directed attention away from the ﬁgures
in geometry and toward the transformations that do
not alter the ﬁgures in crucial respects. For example, in
Euclidean geometry the important transformations are
the familiar rotations and translations (and reﬂections,
if one chooses to allow them). These correspond to the
motions of rigid bodies that contemporary psychologists saw as part of the way in which individuals learn
the geometry of the space around them. But this theory
was philosophically contentious, especially when it
could be extended to another metrical geometry, nonEuclidean geometry. Klein prudently entitled his main
papers “On the so-called non-Euclidean geometry,” to
keep hostile philosophers at bay (in particular Lotze,
who was the well-established Kantian philosopher at
Göttingen). But with these papers and the previous
work of Beltrami the case for non-Euclidean geometry
was made, and almost all mathematicians were persuaded. They believed, that is, that alongside Euclidean

geometry there now stood an equally valid mathematical system called non-Euclidean geometry. As for which
one of these was true of space, it seemed so clear that
Euclidean geometry was the sensible choice that there
appears to have been little or no discussion. Lipschitz
showed that it was possible to do all of mechanics in
the new setting, and there the matter rested, a hypothetical case of some charm but no more. Helmholtz,
the leading physicist of his day, became interested—he
had known Riemann personally—and gave an account
of what space would have to be if it was learned about
through the free mobility of bodies. His ﬁrst account
was deeply ﬂawed, because he was unaware of nonEuclidean geometry, but when Beltrami pointed this out
to him he reworked it (in 1870). The reworked version
also suﬀered from mathematical deﬁciencies, which
were pointed out somewhat later by lie [VI.53], but he
had more immediate trouble from philosophers.
Their question was, “What sort of knowledge is this
theory of non-Euclidean geometry?” Kantian philosophy was coming back into fashion, and in Kant’s view
knowledge of space was a fundamental pure a priori
intuition, rather than a matter to be determined by
experiment: without this intuition it would be impossible to have any knowledge of space at all. Faced with
a rival theory, non-Euclidean geometry, neo-Kantian
philosophers had a problem. They could agree that the
mathematicians had produced a new and prolonged
logical exercise, but could it be knowledge of the world?
Surely the world could not have two kinds of geometry? Helmholtz hit back, arguing that knowledge of
Euclidean geometry and non-Euclidean geometry would
be acquired in the same way—through experience—but
these empiricist overtones were unacceptable to the
philosophers, and non-Euclidean geometry remained a
problem for them until the early years of the twentieth
century.
Mathematicians could not in fact have given a completely rigorous defense of what was becoming the
accepted position, but as the news spread that there
were two possible descriptions of space, and that one
could therefore no longer be certain that Euclidean
geometry was correct, the educated public took up the
question: what was the geometry of space? Among the
ﬁrst to grasp the problem in this new formulation was
poincaré [VI.61]. He came to mathematical fame in the
early 1880s with a remarkable series of essays in which
he reformulated Beltrami’s disk model so as to make
it conformal: that is, so that angles in non-Euclidean
geometry were represented by the same angles in the

94

II. The Origins of Modern Mathematics

Cross-ratios and distances in conics. A projective transformation of the plane sends four distinct
points on a line, A, B, C, D, to four distinct collinear
points, A , B , C , D , in such a way that the quantity
AB CD
AD CB
is preserved: that is,
AB CD
AB CD
=
.
AD CB
AD CB
This quantity is called the cross-ratio of the four
points A, B, C, D, and is written CR(A, B, C, D).
In 1871, Klein described non-Euclidean geometry
as the geometry of points inside a ﬁxed conic, K,
where the transformations allowed are the projec-

D
Q

R

P

A

K
Figure 7 Three points, P, Q, and R, on a non-Euclidean
straight line in Klein’s projective model of non-Euclidean
geometry.

model. He then used his new disk model to connect
complex function theory, the theory of linear diﬀerential equations, riemann surface [III.79] theory, and
non-Euclidean geometry to produce a rich new body
of ideas. Then, in 1891, he pointed out that the disk
model permitted one to show that any contradiction
in non-Euclidean geometry would yield a contradiction
in Euclidean geometry as well, and vice versa. Therefore, Euclidean geometry was consistent if and only if
non-Euclidean geometry was consistent. A curious consequence of this was that if anybody had managed to
derive the parallel postulate from the core of Euclidean
geometry, then they would have inadvertently proved
that Euclidean geometry was inconsistent!
One obvious way to try to decide which geometry
described the actual universe was to appeal to physics.
But Poincaré was not convinced by this. He argued in
another paper (1902) that experience was open to many

tive transformations that map K to itself and its
interior to its interior (see ﬁgure 7). To deﬁne the
distance between two points P and Q inside K, Klein
noted that if the line PQ is extended to meet K at A
and D, then the cross-ratio CR(A, P, D, Q ) does not
change if one applies a projective transformation:
that is, it is a projective invariant. Moreover, if R is
a third point on the line PQ and the points lie in the
order P, Q , R, then CR(A, P, D, Q ) CR(A, Q , D, R) =
CR(A, P, D, R). Accordingly, he deﬁned the distance
between P and Q as d(PQ ) = − 12 log CR(A, P, D, Q )
(the factor of − 12 is introduced to facilitate the later
introduction of trigonometry). With this deﬁnition,
distance is additive along a line: d(PQ ) + d(QR) =
d(PR).

interpretations and there was no logical way of deciding what belonged to mathematics and what to physics.
Imagine, for example, an elaborate set of measurements of angle sums of ﬁgures, perhaps on an astronomical scale. Something would have to be taken to be
straight, perhaps the paths of rays of light. Suppose,
ﬁnally, that the conclusion is that the angle sum of a triangle is indeed less than two right angles by an amount
proportional to the area of the triangle. Poincaré said
that there were two possible conclusions: light rays are
straight and the geometry of space is non-Euclidean;
or light rays are somehow curved, and space is Euclidean. Moreover, he continued, there was no logical way
to choose between these possibilities. All one could do
was to make a convention and abide by it, and the sensible convention was to choose the simpler geometry:
Euclidean geometry.
This philosophical position was to have a long life in
the twentieth century under the name of conventionalism, but it was far from accepted in Poincaré’s lifetime. A prominent critic of conventionalism was the
Italian Federigo Enriques, who, like Poincaré, was both a
powerful mathematician and a writer of popular essays
on issues in science and philosophy. He argued that
one could decide whether a property was geometrical or physical by seeing whether we had any control
over it. We cannot vary the law of gravity, but we can
change the force of gravity at a point by moving matter around. Poincaré had compared his disk model to
a metal disk that was hot in the center and got cooler
as one moved outwards. He had shown that a simple
law of cooling produced ﬁgures identical to those of
non-Euclidean geometry. Enriques replied that heat was

II.3.

`,
      annotations: [
        createAnnotation("ii2-1", "note", "Key insight from this chapter."),
        createAnnotation("ii2-2", "note", "Important historical development discussed."),
        createAnnotation("ii2-3", "note", "Significant mathematical concept explained."),
      ],
    },
  ],
  exercises: [],
}

// II.3 The Development of Abstract Algebra - FULL VERBATIM TEXT
export const abstractAlgebraDevelopmentFullText: FullTextChapter = {
  id: "abstract-algebra-development",
  title: "The Development of Abstract Algebra",
  description: "Complete chapter by Karen Hunger Parshall",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 3,
  content: [
    {
      id: "ii3-full-text",
      title: "The Development of Abstract Algebra",
      type: "text",
      content: "Complete chapter by Karen Hunger Parshall",
      fullText: `The Development of Abstract Algebra

likewise something we can vary. A property such as
Poincaré invoked, which was truly beyond our control,
was not physical but geometric.

10

Looking Ahead

In the end, the question was resolved, but not in
its own terms. Two developments moved mathematicians beyond the simple dichotomy posed by Poincaré.
Starting in 1899, hilbert [VI.63] began an extensive
rewriting of geometry along axiomatic lines, which
eclipsed earlier ideas of some Italian mathematicians
and opened the way to axiomatic studies of many
kinds. Hilbert’s work captured very well the idea that
if mathematics is sound, it is sound because of the
nature of its reasoning, and led to profound investigations in mathematical logic. And in 1915 Einstein
proposed his general theory of relativity, which is in
large part a geometric theory of gravity. Conﬁdence
in mathematics was restored; our sense of geometry
was much enlarged, and our insights into the relationships between geometry and space became considerably more sophisticated. Einstein made full use of
contemporary ideas about geometry, and his achievement would have been unthinkable without Riemann’s
work. He described gravity as a kind of curvature in the
four-dimensional manifold of spacetime (see general
relativity and the einstein equations [IV.13]). His
work led to new ways of thinking about the large-scale
structure of the universe and its ultimate fate, and to
questions that remain unanswered to this day.
Further Reading
Bonola, R. 1955. History of Non-Euclidean Geometry, translated by H. S. Carslaw and with a preface by F. Enriques.
New York: Dover.
Euclid. 1956. The Thirteen Books of Euclid’s Elements, 2nd
edn. New York: Dover.
Gray, J. J. 1989. Ideas of Space: Euclidean, Non-Euclidean,
and Relativistic, 2nd edn. Oxford: Oxford University Press.
Gray, J. J. 2004. Janos Bolyai, non-Euclidean Geometry and
the Nature of Space. Cambridge, MA: Burndy Library.
Hilbert, D. 1899. Grundlagen der Geometrie (many subsequent editions). Tenth edn., 1971, translated by L. Unger,
Foundations of Geometry. Chicago, IL: Open Court.
Poincaré, H. 1891. Les géométries non-Euclidiennes. Revue
Générales des Sciences Pures et Appliquées 2:769–74.
(Reprinted, 1952, in Science and Hypothesis, pp. 35–50.
New York: Dover.)
. 1902. L’expérience et la géométrie. In La Science et
l’Hypothèse, pp. 95–110. (Reprinted, 1952, in Science and
Hypothesis, pp. 72–88. New York: Dover.)

95

II.3 The Development of
Abstract Algebra
Karen Hunger Parshall
1

Introduction

What is algebra? To the high school student encountering it for the ﬁrst time, algebra is an unfamiliar
abstract language of x’s and y’s, a’s and b’s, together
with rules for manipulating them. These letters, some
of them variables and some constants, can be used
for many purposes. For example, one can use them to
express straight lines as equations of the form y =
ax + b, which can be graphed and thereby visualized in
the Cartesian plane. Furthermore, by manipulating and
interpreting these equations, it is possible to determine
such things as what a given line’s root is (if it has one)—
that is, where it crosses the x-axis—and what its slope
is—that is, how steep or ﬂat it appears in the plane
relative to the axis system. There are also techniques
for solving simultaneous equations, or equivalently for
determining when and where two lines intersect (or
demonstrating that they are parallel).
Just when there already seem to be a lot of techniques and abstract manipulations involved in dealing with lines, the ante is upped. More complicated
curves like quadratics, y = ax 2 + bx + c, and even
cubics, y = ax 3 + bx 2 + cx + d, and quartics, y =
ax 4 + bx 3 + cx 2 + dx + e, enter the picture, but the
same sort of notation and rules apply, and similar sorts
of questions are asked. Where are the roots of a given
curve? Given two curves, where do they intersect?
Suppose now that the same high school student, having mastered this sort of algebra, goes on to university
and attends an algebra course there. Essentially gone
are the by now familiar x’s, y’s, a’s, and b’s; essentially gone are the nice graphs that provide a way to
picture what is going on. The university course reﬂects
some brave new world in which the algebra has somehow become “modern.” This modern algebra involves
abstract structures—groups [I.3 §2.1], rings [III.81 §1],
ﬁelds [I.3 §2.2], and other so-called objects—each one
deﬁned in terms of a relatively small number of axioms
and built up of substructures like subgroups, ideals,
and subﬁelds. There is a lot of moving around between
these objects, too, via maps like group homomorphisms and ring automorphisms [I.3 §4.1]. One objective of this new type of algebra is to understand the
underlying structure of the objects and, in doing so, to

96

II. The Origins of Modern Mathematics

build entire theories of groups or rings or ﬁelds. These
abstract theories may then be applied in diverse settings where the basic axioms are satisﬁed but where it
may not be at all apparent a priori that a group or a ring
or a ﬁeld may be lurking. This, in fact, is one of modern
algebra’s great strengths: once we have proved a general fact about an algebraic structure, there is no need
to prove that fact separately each time we come across
an instance of that structure. This abstract approach
allows us to recognize that contexts that may look quite
diﬀerent are in fact importantly similar.
How is it that two endeavors—the high school analysis of polynomial equations and the modern algebra of
the research mathematician—so seemingly diﬀerent in
their objectives, in their tools, and in their philosophical outlooks are both called “algebra”? Are they even
related? In fact, they are, but the story of how they are
is long and complicated.

2 Algebra before There Was Algebra:
From Old Babylon to the Hellenistic Era
Solutions of what would today be recognized as ﬁrstand second-degree polynomial equations may be found
in Old Babylonian cuneiform texts that date to the second millennium b.c.e. However, these problems were
neither written in a notation that would be recognizable to our modern-day high school student nor solved
using the kinds of general techniques so characteristic of the high school algebra classroom. Rather, particular problems were posed, and particular solutions
obtained, from a series of recipe-like steps. No general
theoretical justiﬁcation was given, and the problems
were largely cast geometrically, in terms of measurable
line segments and surfaces of particular areas. Consider, for example, this problem, translated and transcribed from a clay tablet held in the British Museum
(catalogued as BM 13901, problem 1) that dates from
between 1800 and 1600 b.c.e.:
The surface of my confrontation I have accumulated:
45 is it. 1, the projection, you posit. The moiety of 1
you break, 30 and 30 you make hold. 15 to 45 you
append: by 1, 1 is equalside. 30 which you have made
hold in the inside you tear out: 30 the confrontation.

This may be translated into modern notation as the
3
equation x 2 + 1x = 4 , where it is important to notice
that the Babylonian number system is base 60, so 45
3
denotes 45
60 = 4 . The text then lays out the following
algorithm for solving the problem: take 1, the coeﬃcient of the linear term, and halve it to get 12 . Square 12

1

1

3

to get 4 . Add 4 to 4 , the constant term, to get 1. This is
1
the square of 1. Subtract from this the 2 which you mul1
tiplied by to get 2 , the side of the square. The modern
reader can easily see that this algorithm is equivalent to
what is now called the quadratic formula, but the Babylonian tablet presents it in the context of a particular
problem and repeats it in the contexts of other particular problems. There are no equations in the modern
sense; the Babylonian writer is literally eﬀecting a construction of plane ﬁgures. Similar problems and similar algorithmic solutions can also be found in ancient
Egyptian texts such as the Rhind papyrus, believed to
have been copied in 1650 b.c.e. from a text that was
about a century and a half older.
There is a sharp contrast between the problem-oriented, untheoretical approach characteristic of texts
from this early period and the axiomatic and deductive
approach that euclid [VI.2] introduced into mathematics in around 300 b.c.e. in his magisterial, geometrical
treatise, the Elements. (See geometry [II.2] for a further discussion of this work.) There, building on explicit
deﬁnitions and a small number of axioms or selfevident truths, Euclid proceeded to deduce known—
and almost certainly some hitherto unknown—results
within a strictly geometrical context. Geometry done
in this axiomatic context deﬁned Euclid’s standard of
rigor. But what does this quintessentially geometrical
text have to do with algebra? Consider the sixth proposition in Euclid’s Book II, ostensibly a book on plane
ﬁgures, and in particular quadrilaterals:
If a straight line be bisected and a straight line be
added to it in a straight line, the rectangle contained by
the whole with the added straight line and the added
straight line together with the square on the half is
equal to the square on the straight line made up of
the half and the added straight line.

While clearly a geometrical construction, it equally
clearly describes two constructions—one a rectangle
and one a square—that have equal areas. It therefore
describes something that we should be able to write
as an equation. Figure 1 gives the picture corresponding to Euclid’s construction: he proves that the area of
rectangle ADMK equals the sum of rectangles CDML
and HMFG. To do this, he adds the square on CB—
namely, square LHGE—to CDML and HMFG. This gives
square CDFE. It is not hard to see that this is equivalent to the high school procedure of “completing the
square” and to the algebraic equation (2a + b)b + a2 =
(a + b)2 , which we obtain by setting CB = a and

II.3.

The Development of Abstract Algebra

A

C

B

K

L

H

E

G

97
D

M

F

Figure 1 The sixth proposition from Euclid’s Book II.

BD = b. Equivalent, yes, but for Euclid this is a speciﬁc geometrical construction and a particular geometrical equivalence. For this reason, he could not deal
with anything but positive real quantities, since the
sides of a geometrical ﬁgure could only be measured in
those terms. Negative quantities did not and could not
enter into Euclid’s fundamentally geometrical mathematical world. Nevertheless, in the historical literature,
Euclid’s Book II has often been described as dealing
with “geometrical algebra,” and, because of our easy
translation of the book’s propositions into the language of algebra, it has been argued, albeit ahistorically, that Euclid had algebra but simply presented it
geometrically.
Although Euclid’s geometrical standard of rigor came
to be regarded as a pinnacle of mathematical achievement, it was in many ways not typical of the mathematics of classical Greek antiquity, a mathematics
that focused less on systematization and more on the
clever and individualistic solution of particular problems. There is perhaps no better exemplar of this than
archimedes [VI.3], held by many to have been one
of the three or four greatest mathematicians of all
time. Still, Archimedes, like Euclid, posed and solved
particular problems geometrically. As long as geometry deﬁned the standard of rigor, not only negative
numbers but also what we would recognize as polynomial equations of degree higher than three eﬀectively fell outside the sphere of possible mathematical discussion. (As in the example from Euclid above,
quadratic polynomials result from the geometrical process of completing the square; cubics could conceivably result from the geometrical process of completing
the cube; but quartics and higher-degree polynomials
could not be constructed in this way in familiar, threedimensional space.) However, there was another math-

ematician of great importance to the present story,
Diophantus of Alexandria (who was active in the middle of the third century c.e.). Like Archimedes, he posed
particular problems, but he solved them in an algorithmic style much more reminiscent of the Old Babylonian texts than of Archimedes’ geometrical constructions, and as a result he was able to begin to exceed the
bounds of geometry.
In his text Arithmetica, Diophantus put forward general, indeterminate problems, which he then restricted
by specifying that the solutions should have particular forms, before providing speciﬁc solutions. He
expressed these problems in a very diﬀerent way from
the purely rhetorical style that held sway for centuries
after him. His notation was more algebraic and was ultimately to prove suggestive to sixteenth-century mathematicians (see below). In particular, he used special
abbreviations that allowed him to deal with the ﬁrst six
positive and negative powers of the unknown as well
as with the unknown to the zeroth power. Thus, whatever his mathematics was, it was not the “geometrical
algebra” of Euclid and Archimedes.
Consider, for example, this problem from Book II
of the Arithmetica: “To ﬁnd three numbers such that
the square of any one of them minus the next following gives a square.” In terms of modern notation,
he began by restricting his attention to solutions of
the form (x + 1, 2x + 1, 4x + 1). It is easy to see that
(x+1)2 −(2x+1) = x 2 and (2x+1)2 −(4x+1) = 4x 2 , so
two of the conditions of the problem are immediately
satisﬁed, but he needed (4x +1)2 −(x +1) = 16x 2 +7x
to be a square as well. Arbitrarily setting 16x 2 + 7x =
25x 2 , Diophantus then determined that x = 79 gave him
23 37
what he needed, so a solution was 16
9 , 9 , 9 , and he was
done. He provided no geometrical justiﬁcation because
in his view none was needed; a single numerical solution was all he required. He did not set up what we
would recognize as a more general set of equations and
try to ﬁnd all possible solutions.
Diophantus, who lived more than four centuries after
Archimedes’ death, was doing neither geometry nor
algebra in our modern sense, yet the kinds of problems
and the sorts of solutions he obtained for them were
very diﬀerent from those found in the works of either
Euclid or Archimedes. The extent to which Diophantus
created a wholly new approach, rather than drawing on
an Alexandrian tradition of what might be called “algorithmic algebraic,” as opposed to “geometric algebraic,”
scholarship is unknown. It is clear that by the time Diophantus’s ideas were introduced into the Latin West in

98

II. The Origins of Modern Mathematics

the sixteenth century, they suggested new possibilities
to mathematicians long conditioned to the authority of
geometry.

3

Algebra before There Was Algebra:
The Medieval Islamic World

The transmission of mathematical ideas was, however,
a complex process. After the fall of the Roman Empire
and the subsequent decline of learning in the West,
both the Euclidean and the Diophantine traditions ultimately made their way into the medieval Islamic world.
There they were not only preserved—thanks to the
active translation initiatives of Islamic scholars—but
also studied and extended.
al-khwārizmı̄ [VI.5] was a scholar at the royally
funded House of Wisdom in Baghdad. He linked the
kinds of geometrical arguments Euclid had presented
in Book II of his Elements with the indigenous problemsolving algorithms that dated back to Old Babylonian
times. In particular, he wrote a book on practical mathematics, entitled al-Kitāb al-mukhtas.ar fı̄ h
. isāb al-jabr
wa’l-muqābala (“The compendious book on calculation by completion and balancing”), beginning it with
a theoretical discussion of what we would now recognize as polynomial equations of the ﬁrst and second
degrees. (The latinization of the word “al-jabr” or “completion” in his title gave us our modern term “algebra.”) Because he employed neither negative numbers
nor zero coeﬃcients, al-Khwārizmı̄ provided a systematization in terms of six separate kinds of examples
where we would need just one, namely ax 2 +bx+c = 0.
He considered, for example, the case when “a square
and 10 roots are equal to 39 units,” and his algorithmic solution in terms of multiplications, additions,
and subtractions was in precisely the same form as
the above solution from tablet BM 13901. This, however, was not enough for al-Khwārizmı̄. “It is necessary,” he said, “that we should demonstrate geometrically the truth of the same problems which we have
explained in numbers,” and he proceeded to do this
by “completing the square” in geometrical terms reminiscent of, but not as formal as, those Euclid used in
Book II. (Abū Kāmil (ca. 850–930), an Egyptian Islamic
mathematician of the generation after al-Khwārizmı̄,
introduced a higher level of Euclidean formality into
the geometric–algorithmic setting.) This juxtaposition
made explicit how the relationships between geometrical areas and lines could be interpreted in terms of
numerical multiplications, additions, and subtractions,

a key step that would ultimately suggest a move away
from the geometrical solution of particular problems
and toward an algebraic solution of general types of
equations.
Another step along this path was taken by the mathematician and poet Omar Khayyam (ca. 1050–1130) in
a book he entitled Al-jabr after al-Khwārizmı̄’s work.
Here he proceeded to systematize and solve what we
would recognize, in the absence of both negative numbers and zero coeﬃcients, as the cases of the cubic
equation. Following al-Khwārizmı̄, Khayyam provided
geometrical justiﬁcations, yet his work, even more than
that of his predecessor, may be seen as closer to a
general problem-solving technique for speciﬁc cases of
equations, that is, closer to the notion of algebra.
The Persian mathematician al-Karajı̄ (who ﬂourished
in the early eleventh century) also knew well and
appreciated the geometrical tradition stemming from
Euclid’s Elements. However, like Abū-Kāmil, he was
aware of the Diophantine tradition too, and synthesized in more general terms some of the procedures
Diophantus had laid out in the context of speciﬁc examples in the Arithmetica. Although Diophantus’s ideas
and style were known to these and other medieval
Islamic mathematicians, they would remain unknown
in the Latin West until their rediscovery and translation in the sixteenth century. Equally unknown in
the Latin West were the accomplishments of Indian
mathematicians, who had succeeded in solving some
quadratic equations algorithmically by the beginning
of the eighth century and who, like Bragmagupta four
hundred years later, had techniques for ﬁnding integer solutions to particular examples of what are today
called Pell’s equations, namely, equations of the form
ax 2 + b = y 2 , where a and b are integers and a is not
a square.

4 Algebra before There
Was Algebra: The Latin West
Concurrent with the rise of Islam in the East, the
Latin West underwent a gradual cultural and political stabilization in the centuries following the fall
of the Roman Empire. By the thirteenth century, this
relative stability had resulted in the ﬁrm entrenchment of the Catholic Church as well as the establishment both of universities and of an active economy.
Moreover, the Islamic conquest of most of the Iberian
peninsula in the eighth century and the subsequent
establishment there of an Islamic court, library, and

II.3.

The Development of Abstract Algebra

research facility similar to the House of Wisdom in
Baghdad brought the fruits of medieval Islamic scholarship to western Europe’s doorstep. However, as Islam
found its position on the Iberian peninsula increasingly compromised in the twelfth and thirteenth centuries, this Islamic learning, as well as some of the
ancient Greek scholarship that the medieval Islamic
scholars had preserved in Latin translation, began to
ﬁlter into medieval Europe. In particular, ﬁbonacci
[VI.6], son of an inﬂuential administrator within the
Pisan city state, encountered al-Khwārizmı̄’s text and
recognized not only the impact that the Arabic number system detailed there could have on accounting
and commerce (Roman numerals and their cumbersome rules for manipulation were still widely in use)
but also the importance of al-Khwārizmı̄’s theoretical
discussion, with its wedding of geometrical proof and
the algorithmic solution of what we can interpret as
ﬁrst- and second-degree equations. In his 1202 book
Liber Abbaci, Fibonacci presented al-Khwārizmı̄’s work
almost verbatim, and extolled all of these virtues, thus
eﬀectively introducing this knowledge and approach
into the Latin West.
Fibonacci’s presentation, especially of the practical aspects of al-Khwārizmı̄’s text, soon became wellknown in Europe. So-called abacus schools (named
after Fibonacci’s text and not after the Chinese calculating instrument) sprang up all over the Italian peninsula,
particularly in the fourteenth and ﬁfteenth centuries,
for the training of accountants and bookkeepers in an
increasingly mercantilistic Western world. The teachers in these schools, the “maestri d’abaco,” built on
and extended the algorithms they found in Fibonacci’s
text. Another tradition, the Cossist tradition—after the
German word “Coss” connoting algebra, that is, “Kunstrechnung” or “artful calculation”—developed simultaneously in the Germanic regions of Europe and aimed
to introduce algebra into the mainstream there.
In 1494 the Italian Luca Pacioli published (by now
this is the operative word: Pacioli’s text is one of the
earliest printed mathematical texts) a compendium of
all known mathematics. By this time, the geometrical
justiﬁcations that al-Khwārizmı̄ and Fibonacci had presented had long since fallen from the mathematical vernacular. By reintroducing them in his book, the Summa,
Pacioli brought them back to the mathematical fore.
Not knowing of Khayyam’s work, he asserted that solutions had been discovered only in the six cases treated
by both al-Khwārizmı̄ and Fibonacci, even though there
had been abortive attempts to solve the cubic and even

99
though he held out the hope that it could ultimately be
solved.
Pacioli’s book had highlighted a key unsolved problem: could algorithmic solutions be determined for the
various cases of the cubic? And, if so, could these be
justiﬁed geometrically with proofs similar in spirit to
those found in the texts of al-Khwārizmı̄ and Fibonacci?
Among several sixteenth-century Italian mathematicians who eventually managed to answer the ﬁrst question in the aﬃrmative was cardano [VI.7]. In his Ars
Magna, or The Great Art, of 1545, he presented algorithms with geometric justiﬁcations for the various
cases of the cubic, eﬀectively completing the cube
where al-Khwārizmı̄ and Fibonacci had completed the
square. He also presented algorithms that had been discovered by his student Ludovico Ferrari (1522–65) for
solving the cases of the quartic. These intrigued him,
because, unlike the algorithms for the cubic, they were
not justiﬁed geometrically. As he put it in his book, “all
those matters up to and including the cubic are fully
demonstrated, but the others which we will add, either
by necessity or out of curiosity, we do not go beyond
barely setting out.” An algebra was breaking out of the
geometrical shell in which it had been encased.

5

Algebra Is Born

This process was accelerated by the rediscovery and
translation into Latin of Diophantus’s Arithmetica in
the 1560s, with its abbreviated presentational style
and ungeometrical approach. Algebra, as a general
problem-solving technique, applicable to questions in
geometry, number theory, and other mathematical settings, was established in raphael bombelli’s [VI.8]
Algebra of 1572 and, more importantly, in viète’s
[VI.9] In Artem Analyticem Isagoge, or Introduction
to the Analytic Art, of 1591. The aim of the latter
was, in Viète’s words, “to leave no problem unsolved,”
and to this end he developed a true notation—using
vowels to denote variables and consonants to denote
coeﬃcients—as well as methods for solving equations
in one unknown. He called his techniques “specious
logistics.”
Dimensionality—in the form of his so-called law of
homogeneity—was, however, still an issue for Viète.
As he put it, “[o]nly homogeneous magnitudes are
to be compared to one another.” The problem was
that he distinguished two types of magnitudes: “ladder magnitudes”—that is, variables (A side) (or x in our
modern notation), (A square) (or x 2 ), (A cube) (or x 3 ),

100
etc.; and “compared magnitudes”—that is, coeﬃcients
(B length) of dimension one, (B plane) of dimension
two, (B solid) of dimension three, etc. In the light of
his law of homogeneity, then, Viète could legitimately
perform the operation (A cube) + (B plane)(A side) (or
x 3 +bx in our notation), since the dimension of (A cube)
is three, as is that of the product of the two-dimensional
coeﬃcient (B plane) and the one-dimensional variable (A side), but he could not legally add the threedimensional variable (A cube) to the two-dimensional
product of the one-dimensional coeﬃcient (B length)
and the one-dimensional variable (A side) (or, again,
x 3 + bx in our notation). Be this as it may, his “analytic art” still allowed him to add, subtract, multiply,
and divide letters as opposed to speciﬁc numbers, and
those letters, as long as they satisﬁed the law of homogeneity, could be raised to the second, third, fourth,
or, indeed, any power. He had a rudimentary algebra,
although he failed to apply it to curves.
The ﬁrst mathematicians to do that were fermat
[VI.12] and descartes [VI.11] in their independent
development of the analytic geometry so familiar to
the high school algebra student of today. Fermat, and
others like Thomas Harriot (ca. 1560–1621) in England,
were inﬂuenced in their approaches by Viète, while Descartes not only introduced our present-day notational
convention of representing variables by x’s and y’s
and constants by a’s, b’s, and c’s but also began the
arithmetization of algebra. He introduced a unit that
allowed him to interpret all geometrical magnitudes
as line segments, whether they were x’s, x 2 ’s, x 3 ’s,
x 4 ’s, or any higher power of x, thereby removing concerns about homogeneity. Fermat’s main work in this
direction was a 1636 manuscript written in Latin, entitled “Introduction to plane and solid loci” and circulated among the early seventeenth-century mathematical cognoscenti; Descartes’s was La Géométrie, written
in French as one of three appendices to his philosophical tract, Discours de la Méthode, published in 1637.
Both were regarded as establishing the identiﬁcation
of geometrical curves with equations in two unknowns,
or in other words as establishing analytic geometry
and thereby introducing algebraic techniques into the
solution of what had previously been considered geometrical problems. In Fermat’s case, the curves were
lines or conic sections—quadratic expressions in x
and y; Descartes did this too, but he also considered
equations more generally, tackling questions about the
roots of polynomial equations that were connected
with transforming and reducing the polynomials.

II. The Origins of Modern Mathematics
In particular, although he gave no proof or even general statement of it, Descartes had a rudimentary version of what we would now call the fundamental
theorem of algebra [V.13], the result that a polynomial equation x n + an−1 x n−1 + · · · + a1 x + a0 of
degree n has precisely n roots over the ﬁeld C of complex numbers. For example, while he held that a given
polynomial of degree n could be decomposed into n
linear factors, he also recognized that the cubic x 3 −
6x 2 + 13x − 10 = 0 has three roots: the real root 2 and
two complex roots. In his further exploration of these
issues, moreover, he developed algebraic techniques,
involving suitable transformations, for analyzing polynomial equations of the ﬁfth and sixth degrees. Liberated from homogeneity concerns, Descartes was thus
able to use his algebraic techniques freely to explore
territory where the geometrically bound Cardano had
clearly been reluctant to venture. newton [VI.14] took
the liberation of algebra from geometrical concerns a
step further in his Arithmetica Universalis (or Universal Arithmetic) of 1707, arguing for the complete arithmetization of algebra, that is, for modeling algebra and
algebraic operations on the real numbers and the usual
operations of arithmetic.
Descartes’s La Géométrie highlighted at least two
problems for further algebraic exploration: the fundamental theorem of algebra and the solution of polynomial equations of degree greater than four. Although
eighteenth-century mathematicians like d’alembert
[VI.20] and euler [VI.19] attempted proofs of the fundamental theorem of algebra, the ﬁrst person to prove
it rigorously was gauss [VI.26], who gave four distinct
proofs over the course of his career. His ﬁrst, an algebraic geometrical proof, appeared in his doctoral dissertation of 1799, while a second, fundamentally different proof was published in 1816, which in modern
terminology essentially involved constructing the polynomial’s splitting ﬁeld. While the fundamental theorem
of algebra established how many roots a given polynomial equation has, it did not provide insight into
exactly what those roots were or how precisely to ﬁnd
them. That problem and its many mathematical repercussions exercised a number of mathematicians in the
late eighteenth and nineteenth centuries and formed
one of the strands of the mathematical thread that
became modern algebra in the early twentieth century.
Another emerged from attempts to understand the general behavior of systems of (one or more) polynomials
in n unknowns, and yet another grew from eﬀorts to
approach number-theoretic questions algebraically.

II.3.

The Development of Abstract Algebra

6

The Search for the Roots
of Algebraic Equations

The problem of ﬁnding roots of polynomials provides
a direct link from the algebra of the high school classroom to that of the modern research mathematician.
Today’s high school student dutifully employs the
quadratic formula to calculate the roots of seconddegree polynomials. To derive this formula, one transforms the given polynomial into one that can be solved
more easily. By more complicated manipulations of
cubics and quartics, Cardano and Ferrari obtained formulas for the roots of those as well. It is natural to ask
whether the same can be done for higher-degree polynomials. More precisely, are there formulas that involve
just the usual operations of arithmetic—addition, subtraction, multiplication, and division—together with
the extraction of roots? When there is such a formula,
one says that the equation is solvable by radicals.
Although many eighteenth-century mathematicians
(including Euler, Alexandre-Théophile Vandermonde
(1735–96), waring [VI.21], and Étienne Bézout (1730–
83)) contributed to the eﬀort to decide whether higherorder polynomial equations are solvable by radicals, it
was not until the years from roughly 1770 to 1830 that
there were signiﬁcant breakthroughs, particularly in
the work of lagrange [VI.22], abel [VI.33], and Gauss.
In a lengthy set of “Réﬂections sur la résolution
algébrique des équations” (Reﬂections on the algebraic
resolution of equations) published in 1771, Lagrange
tried to determine principles underlying the resolution
of algebraic equations in general by analyzing in detail
the speciﬁc cases of the cubic and the quartic. Building on the work of Cardano, Lagrange showed that a
cubic of the form x 3 + ax 2 + bx + c = 0 could always
be transformed into a cubic with no quadratic term
x 3 + px + q = 0 and that the roots of this could be
written as x = u + v, where u3 and v 3 are the roots
of a certain quadratic polynomial equation. Lagrange
was then able to show that if x1 , x2 , x3 are the three
roots of the cubic, the intermediate functions u and v
1
could actually be written as u = 3 (x1 + αx2 + α2 x3 )
1
2
and v = 3 (x1 +α x2 +αx3 ), for α a primitive cube root
of unity. That is, u and v could be written as rational
expressions or resolvents in x1 , x2 , x3 . Conversely,
starting with a linear expression y = Ax1 + Bx2 + Cx3
in the roots x1 , x2 , x3 and then permuting the roots
in all possible ways yielded six expressions each of
which was a root of a particular sixth-degree polynomial equation. An analysis of the latter equation (which

101
involved the exploitation of properties of symmetric
polynomials) yielded the same expressions for u and v
in terms of x1 , x2 , x3 and the cube root of unity α. As
Lagrange showed, this kind of two-pronged analysis—
involving intermediate expressions rational in the roots
that are solutions of a solvable equation as well as the
behavior of certain rational expressions under permutation of the roots—yielded the complete solution in
the cases both of the cubic and the quartic. It was one
approach that encompassed the solution of both types
of equation. But could this technique be extended to
the case of the quintic and higher-degree polynomials?
Lagrange was unable to push it through in the case of
the quintic, but by building on his ideas, ﬁrst his student Paolo Ruﬃni (1765–1822) at the turn of the nineteenth century and then, deﬁnitively, the young Norwegian mathematician Abel in the 1820s showed that, in
fact, the quintic is not solvable by radicals. (See the
insolubility of the quintic [V.21].) This negative
result, however, still left open the questions of which
algebraic equations were solvable by radicals and why.
As Lagrange’s analysis seemed to underscore, the
answer to this question in the cases of the cubic and the
quartic involved in a critical way the cube and fourth
roots of unity, respectively. By deﬁnition, these satisfy
the particularly simple polynomial equations x 3 −1 = 0
and x 4 − 1 = 0, respectively. It was thus natural to
examine the general case of the so-called cyclotomic
equation x n − 1 = 0 and ask for what values n the
nth roots of unity are actually constructible. To put
this question in equivalent algebraic terms: for which
n is it possible to ﬁnd a formula for the nth roots of
unity that expresses them in terms of integers using the
usual arithmetical operations and extraction of square
(but not higher) roots? This was one of the many questions explored by Gauss in his wide-ranging, magisterial, and groundbreaking 1801 treatise Disquisitiones
Arithmeticae. One of his most famous results was that
the regular 17-gon (or, equivalently, a 17th root of
unity) was constructible. In the course of his analysis,
he not only employed techniques similar to those developed by Lagrange but also developed key concepts such
as modular arithmetic [III.58] and the properties of
the modular “worlds” Zp , for p a prime, and, more generally, Zn , for n ∈ Z+ , as well as the notion of a primitive element (a generator) of what would later be termed
a cyclic group.
Although it is not clear how well he knew Gauss’s
work, in the years around 1830 galois [VI.41] drew
from the ideas both of Lagrange on the analysis of

102
resolvents and of cauchy [VI.29] on permutations and
substitutions to obtain a solution to the general problem of solvability of polynomial equations by radicals.
Although his approach borrowed from earlier ideas,
it was in one important respect fundamentally new.
Whereas prior eﬀorts had aimed at deriving an explicit
algorithm for calculating the roots of a polynomial of a
given degree, Galois formulated a theoretical process
based on constructs more general than but derived
from the given equation that allowed him to assess
whether or not that equation was solvable.
To be more precise, Galois recast the problem into
one in terms of two new concepts: ﬁelds (which he
called “domains of rationality”) and groups (or, more
precisely, groups of substitutions). A polynomial equation f (x) = 0 of degree n was reducible over its domain
of rationality—the ground ﬁeld from which its coefﬁcients were taken—if all n of its roots were in that
ground ﬁeld; otherwise, it was irreducible over that
ﬁeld. It could, however, be reducible over some larger
ﬁeld. Consider, for example, the polynomial x 2 + 1 as
a polynomial over R, the ﬁeld of real numbers. While
we know from high school algebra that this polynomial does not factor into a product of two real, linear
factors (that is, there are no real numbers r1 and r2
such that x 2 + 1 = (x − r1 )(x − r2 )), it does factor
over C, the ﬁeld of complex numbers, and, speciﬁcally,
√
√
x 2 + 1 = (x + −1)(x − −1). Thus, if we take all
√
numbers of the form a + b −1, where a and b belong
to R, then we enlarge R to a new ﬁeld C in which the
polynomial x 2 + 1 is reducible. If F is a ﬁeld and x is an
element of F that does not have an nth root in F, then by
a similar process we can adjoin an element y to F and
stipulate that y n = x. We call y a radical. The set of
all polynomial expressions in y, with coeﬃcients in F,
can be shown to form a larger ﬁeld. Galois showed that
if it was possible to enlarge F by successively adjoining radicals to obtain a ﬁeld K in which f (x) factored
into n linear factors, then f (x) = 0 was solvable by
radicals. He developed a process that hinged both on
the notion of adjoining an element—in particular, a socalled primitive element—to a given ground ﬁeld and
on the idea of analyzing the internal structure of this
new, enlarged ﬁeld via an analysis of the (ﬁnite) group
of substitutions (automorphisms of K) that leave invariant all rational relations of the n roots of f (x) = 0. The
group-theoretic aspects of Galois’s analysis were particularly potent; he introduced the notions, although
not the modern terminology, of a normal subgroup of a
group, a factor group, and a solvable group. Galois thus

II. The Origins of Modern Mathematics
resolved the concrete problem of determining when a
polynomial equation was solvable by radicals by examining it from the abstract perspective of groups and
their internal structure.
Galois’s ideas, although sketched in the early 1830s,
did not begin to enter into the broader mathematical consciousness until their publication in 1846 in
liouville’s [VI.39] Journal des Mathématiques Pures et
Appliquées, and they were not fully appreciated until
two decades later when ﬁrst Joseph Serret (1819–85)
and then jordan [VI.52] ﬂeshed them out more fully.
In particular, Jordan’s Traité des Substitutions et des
Équations Algébriques (“Treatise on substitutions and
on algebraic equations”) of 1870 not only highlighted
Galois’s work on the solution of algebraic equations
but also developed the general structure theory of permutation groups as it had evolved at the hands of
Lagrange, Gauss, Cauchy, Galois, and others. By the end
of the nineteenth century, this line of development of
group theory, stemming from eﬀorts to solve algebraic
equations by radicals, had intertwined with three others: the abstract notion of a group deﬁned in terms
of a group multiplication table, which was formulated
by cayley [VI.46], the structural work of mathematicians like Ludwig Sylow (1832–1918) and Otto Hölder
(1859–1937), and the geometrical work of lie [VI.53]
and klein [VI.57]. By 1893, when Heinrich Weber (1842–
1914) codiﬁed much of this earlier work by giving the
ﬁrst actual abstract deﬁnitions of the notions both of
group and ﬁeld, thereby recasting them in a form much
more familiar to the modern mathematician, groups
and ﬁelds had been shown to be of central importance in a wide variety of areas, both mathematical and
physical.

7 Exploring the Behavior of
Polynomials in n Unknowns
The problem of solving algebraic equations involved
ﬁnding the roots of polynomials in one unknown. At
least as early as the late seventeenth century, however, mathematicians like leibniz [VI.15] had been
interested in techniques for solving simultaneously
systems of linear equations in more than two variables. Although his work remained unknown at the
time, Leibniz considered three linear equations in three
unknowns and determined their simultaneous solvability based on the value of a particular expression in
the coeﬃcients of the system. This expression, equivalent to what Cauchy would later call the determinant

II.3.

The Development of Abstract Algebra

[III.15] and which would ultimately be associated with
an n × n square array or matrix [I.3 §4.2] of coeﬃcients, was also developed and analyzed independently
by Gabriel Cramer (1704–52) in the mid eighteenth century in the general context of the simultaneous solution
of a system of n linear equations in n unknowns. From
these beginnings, a theory of determinants, independent of the context of solving systems of linear equations, quickly became a topic of algebraic study in its
own right, attracting the attention of Vandermonde,
laplace [VI.23], and Cauchy, among others. Determinants were thus an example of a new algebraic construct, the properties of which were then systematically
explored.
Although determinants came to be viewed in terms
of what sylvester [VI.42] would dub matrices, a theory
of matrices proper grew initially from the context not
of solving simultaneous linear equations but rather of
linearly transforming the variables of homogeneous
polynomials in two, three, or more generally n variables. In the Disquisitiones Arithmeticae, for example, Gauss considered how binary and ternary quadratic forms with integer coeﬃcients—expressions of
the form a1 x 2 + 2a2 xy + a3 y 2 and a1 x 2 + a2 y 2 +
a3 z2 + 2a4 xy + 2a5 xz + 2a6 yz, respectively—are
aﬀected by a linear transformation of their variables.
In the ternary case, he applied the linear transformation x = αx + βy + γz , y = α x + β y + γ z , and
z = α x + β y + γ z to derive a new ternary form.
He denoted the linear transformation of the variables
by the square array
α,

β,

γ

α,

β,

γ

α ,

β ,

γ

and, in the process of showing what the composition of
two such transformations was, gave an explicit example of matrix multiplication. By the middle of the nineteenth century, Cayley had begun to explore matrices
per se and had established many of the properties that
the theory of matrices as a mathematical system in its
own right enjoys. This line of algebraic thought was
eventually reinterpreted in terms of the theory of algebras (see below) and developed into the independent
area of linear algebra and the theory of vector spaces
[I.3 §2.3].
Another theory that arose out of the analysis of linear transformations of homogeneous polynomials was
the theory of invariants, and this too has its origins in

103
some sense in Gauss’s Disquisitiones. As in his study
of ternary quadratic forms, Gauss began his study
of binary forms by applying a linear transformation,
speciﬁcally, x = αx + βy , y = γx + δy . The result
was the new binary form a1 (x )2 + 2a2 x y + a3 (y )2 ,
where, explicitly, a1 = a1 α2 + 2a2 αγ + a3 γ 2 , a2 =
a1 αβ + a2 (αδ + βγ) + a3 γδ, and a3 = a1 β2 + 2a2 βδ +
a3 δ2 . As Gauss noted, if you multiply the second of
these equations by itself and subtract from this the
product of the ﬁrst and the third equations, you obtain
the relation a22 − a1 a3 = (a22 − a1 a3 )(αδ − βγ)2 . To
use language that Sylvester would develop in the early
1850s, Gauss realized that the expression a22 − a1 a3 in
the coeﬃcients of the original binary quadratic form
is an invariant in the sense that it remains unchanged
up to a power of the determinant of the linear transformation. By the time Sylvester coined the term, the
invariant phenomenon had also appeared in the work
of the English mathematician boole [VI.43], and had
attracted Cayley’s attention. It was not until after Cayley and Sylvester met in the late 1840s, however, that
the two of them began to pursue a theory of invariants proper, which aimed to determine all invariants for
homogeneous polynomials of degree m in n unknowns
as well as simultaneous invariants for systems of such
polynomials.
Although Cayley and (especially) Sylvester pursued
this line of research from a purely algebraic point of
view, invariant theory also had number-theoretic and
geometric implications, the former explored by Gotthold Eisenstein (1823–52) and hermite [VI.47], the
latter by Otto Hesse (1811–74), Paul Gordan (1837–
1912), and Alfred Clebsch (1833–72), among others.
It was of particular interest to understand how many
“genuinely distinct” invariants were associated with a
speciﬁc form, or system of forms. In 1868, Gordan
achieved a fundamental breakthrough by showing that
the invariants associated with any binary form in n variables can always be expressed in terms of a ﬁnite number of them. By the late 1880s and early 1890s, however, hilbert [VI.63] brought new, abstract concepts
associated with the theory of algebras (see below) to
bear on invariant theory and, in so doing, not only reproved Gordan’s result but also showed that the result
was true for forms of degree m in n unknowns. With
Hilbert’s work, the emphasis shifted from the concrete
calculations of his English and German predecessors
to the kind of structurally oriented existence theorems
that would soon be associated with abstract, modern
algebra.

104

II. The Origins of Modern Mathematics

8 The Quest to Understand
the Properties of “Numbers”
As early as the sixth century b.c.e., the Pythagoreans
had studied the properties of numbers formally. For
example, they deﬁned the concept of a perfect number, which is a positive integer, such as 6 = 1 + 2 + 3
and 28 = 1 + 2 + 4 + 7 + 14, which is the sum of its
divisors (excluding the integer itself). In the sixteenth
century, Cardano and Bombelli had willingly worked
with new expressions, complex numbers, of the form
√
a + −b, for real numbers a and b, and had explored
their computational properties. In the seventeenth century, Fermat famously claimed that he could prove that
the equation x n + y n = zn , for n an integer greater
than 2, had no solutions in the integers, except for the
trivial cases when z = x or z = y and the remaining
variable is zero. The latter result, known as fermat’s
last theorem [V.10], generated many new ideas, especially in the eighteenth and nineteenth centuries, as
mathematicians worked to ﬁnd an actual proof of Fermat’s claim. Central to their eﬀorts were the creation
and algebraic analysis of new types of number systems
that extended the integers in much the same way that
Galois had extended ﬁelds. This ﬂexibility to create and
analyze new number systems was to become one of the
hallmarks of modern algebra as it would develop into
the twentieth century.
One of the ﬁrst to venture down this path was Euler.
In the proof of Fermat’s last theorem for the n = 3
case that he gave in his Elements of Algebra of 1770,
Euler introduced the system of numbers of the form
√
a + b −3, where a and b are integers. He then blithely
proceeded to factorize them into primes, without further justiﬁcation, just as he would have factorized
ordinary integers. By the 1820s and 1830s, Gauss had
launched a more systematic study of numbers that are
now called the Gaussian integers. These are all num√
bers of the form a + b −1, for integers a and b. He
showed that, like the integers, the Gaussian integers are
closed under addition, subtraction, and multiplication;
he deﬁned the notions of unit, prime, and norm in order
to prove an analogue of the fundamental theorem
of arithmetic [V.14] for them. He thereby demonstrated that there were whole new algebraic worlds to
create and explore. (See algebraic numbers [IV.1] for
more on these topics.)
Whereas Euler had been motivated in his work by
Fermat’s last theorem, Gauss was trying to generalize
the law of quadratic reciprocity [V.28] to a law of

biquadratic reciprocity. In the quadratic case, the problem was the following. If a and m are integers with
m ⩾ 2, then we say that a is a quadratic residue mod m
if the equation x 2 = a has a solution mod m; that is,
if there is an integer x such that x 2 is congruent to
a mod m. Now suppose that p and q are distinct odd
primes. If you know whether p is a quadratic residue
mod q, is there a simple way of telling whether q is a
quadratic residue mod p? In 1785, Legendre had posed
and answered this question—the status of q mod p
will be the same as that of p mod q if at least one
of p and q is congruent to 1 mod 4, and diﬀerent if
they are both congruent to 3 mod 4—but he had given
a faulty proof. By 1796, Gauss had come up with the
ﬁrst rigorous proof of the theorem (he would ultimately
give eight diﬀerent proofs of it), and by the 1820s he
was asking the analogous question for the case of two
biquadratic equivalences x 4 ≡ p (mod q) and y 4 ≡ q
(mod p). It was in his attempts to answer this new question that he introduced the Gaussian integers and signaled at the same time that the theory of residues of
higher degrees would make it necessary to create and
analyze still other new sorts of “integers.” Although
Eisenstein, dirichlet [VI.36], Hermite, kummer [VI.40],
and kronecker [VI.48], among others, pushed these
ideas forward in this Gaussian spirit, it was dedekind
[VI.50] in his tenth supplement to Dirichlet’s Vorlesungen über Zahlentheorie (Lectures on Number Theory)
of 1871 who fundamentally reconceptualized the problem by treating it not number theoretically but rather
set theoretically and axiomatically. Dedekind introduced, for example, the general notions—if not what
would become the precise axiomatic deﬁnitions—of
ﬁelds, rings, ideals [III.81 §2], and modules [III.81 §3]
and analyzed his number-theoretic setting in terms of
these new, abstract constructs. His strategy was, from
a philosophical point of view, not unlike that of Galois:
translate the “concrete” problem at hand into new,
more abstract terms in order to solve it more cleanly
at a “higher” level. In the early twentieth century,
noether [VI.76] and her students, among them Bartel
van der Waerden (1903–96), would develop Dedekind’s
ideas further to help create the structural approach to
algebra so characteristic of the twentieth century.
Parallel to this nineteenth-century, number-theoretic
evolution of the notion of “number” on the continent of
Europe, a very diﬀerent set of developments was taking
place, initially in the British Isles. From the late eighteenth century, British mathematicians had debated
not only the nature of number—questions such as,

II.3.

The Development of Abstract Algebra

“Do negative and imaginary numbers make sense?”—
but also the meaning of algebra—questions like, “In an
expression like ax + by, what values may a, b, x, and
y legitimately take on and what precisely may ‘+’ connote?” By the 1830s, the Irish mathematician hamilton
[VI.37] had come up with a “uniﬁed” interpretation of
the complex numbers that circumvented, in his view,
the logical problem of adding a real number and an
imaginary one, an apple and an orange. Given real numbers a and b, Hamilton conceived of the complex num√
ber a + b −1 as the ordered pair (he called it a “couple”) (a, b). He then deﬁned addition, subtraction, multiplication, and division of such couples. As he realized,
this also provided a way of representing numbers in
the complex plane, and so he naturally asked whether
he could construct algebraic, ordered triples so as to
represent points in 3-space. After a decade of contemplating this question oﬀ and on, Hamilton ﬁnally
answered it not for triples but for quadruples, the socalled quaternions [III.76], “numbers” of the form
(a, b, c, d) = a+bi+cj+dk, where a, b, c, and d are real
and where i, j, k satisfy the relations ij = −ji = k, jk =
−kj = i, ki = −ik = j, i2 = j2 = k2 = −1. As in the twodimensional case, addition is deﬁned component-wise,
but multiplication, while deﬁnable in such a way that
every nonzero element has a multiplicative inverse, is
not commutative. Thus, this new number system did
not obey all of the “usual” laws of arithmetic.
Although some of Hamilton’s British contemporaries
questioned the extent to which mathematicians were
free to create such new mathematical worlds, others,
like Cayley, immediately took the idea further and
created a system of ordered 8-tuples, the octonions,
the multiplication of which was neither commutative
nor even, as was later discovered, associative. Several
questions naturally arise about such systems, but one
that Hamilton asked was what happens if the ﬁeld of
coeﬃcients, the base ﬁeld, is not the reals but rather
the complexes? In that case, it is easy to see that
the product of the two nonzero complex quaternions
√
√
√
√
(− −1, 0, 1, 0) = − −1 + j and ( −1, 0, 1, 0) = −1 + j
is 1 + j2 = 1 + (−1) = 0. In other words, the complex
quaternions contain zero divisors—nonzero elements
the product of which is zero—another phenomenon
that distinguishes their behavior fundamentally from
that of the integers. As it ﬂourished in the hands of
mathematicians like Benjamin Peirce (1809–80), frobenius [VI.58], Georg Scheﬀers (1866–1945), Theodor
Molien (1861–1941), cartan [VI.69], and Joseph H. M.
Wedderburn (1882–1948), among others, this line of

105
thought resulted in a freestanding theory of algebras.
This naturally intertwined with developments in the
theory of matrices (the n × n matrices form an algebra
of dimension n2 over their base ﬁeld) as it had evolved
through the work of Gauss, Cayley, and Sylvester. It also
merged with the not unrelated theory of n-dimensional
vector spaces (n-dimensional algebras are n-dimensional vector spaces with a vector multiplication as
well as a vector addition and scalar multiplication) that
issued from ideas like those of Hermann Grassmann
(1809–77).

9

Modern Algebra

By 1900, many new algebraic structures had been identiﬁed and their properties explored. Structures that
were ﬁrst isolated in one context were then found to
appear, sometimes unexpectedly, in others: thus, these
new structures were mathematically more general than
the problems that had led to their discovery. In the
opening decades of the twentieth century, algebraists
(the term is not ahistorical by 1900) increasingly recognized these commonalities—these shared structures
such as groups, ﬁelds and rings—and asked questions
at a more abstract level. For example, what are all of
the ﬁnite simple groups? Can they be classiﬁed? (See
the classiﬁcation of ﬁnite simple groups [V.7].)
Moreover, inspired by the set-theoretic and axiomatic
work of cantor [VI.54], Hilbert, and others, they came
to appreciate the common standard of analysis and
comparison that axiomatization could provide. Coming
from this axiomatic point of view, Ernst Steinitz (1871–
1928), for example, laid the groundwork for an abstract
theory of ﬁelds in 1910, while Abraham Fraenkel (1891–
1965) did the same for an abstract theory of rings four
years later. As van der Waerden came to realize in the
late 1920s, these developments could be interpreted as
dovetailing philosophically with results like Hilbert’s in
invariant theory and Dedekind’s and Noether’s in the
algebraic theory of numbers. That interpretation, laid
out in 1930 in van der Waerden’s classic textbook Moderne Algebra, codiﬁed the structurally oriented “modern algebra” that subsumed the algebra of polynomials
of the high school classroom and that continues to
characterize algebraic thought today.
Further Reading
Bashmakova, I., and G. Smirnova. 2000. The Beginnings and
Evolution of Algebra, translated by A. Shenitzer. Washington, DC: The Mathematical Association of America.

106

II. The Origins of Modern Mathematics

Corry, L. 1996. Modern Algebra and the Rise of Mathematical Structures. Science Networks, volume 17. Basel:
Birkhäuser.
Edwards, H. M. 1984. Galois Theory. New York: Springer.
Heath, T. L. 1956. The Thirteen Books of Euclid’s Elements,
2nd edn. (3 vols.). New York: Dover.
Høyrup, J. 2002. Lengths, Widths, Surfaces: A Portrait of Old
Babylonian Algebra and Its Kin. New York: Springer.
Klein, J. 1968. Greek Mathematical Thought and the Origin
of Algebra, translated by E. Brann. Cambridge, MA: The
MIT Press.
Netz, R. 2004. The Transformation of Mathematics in the
Early Mediterranean World: From Problems to Equations.
Cambridge: Cambridge University Press.
Parshall, K. H. 1988. The art of algebra from al-Khwārizmı̄
to Viète: A study in the natural selection of ideas. History
of Science 26:129–64.
. 1989. Toward a history of nineteenth-century invariant theory. In The History of Modern Mathematics, edited
by D. E. Rowe and J. McCleary, volume 1, pp. 157–206.
Amsterdam: Academic Press.
Sesiano, J. 1999. Une Introduction à l’histoire de l’algèbre:
Résolution des équations des Mésopotamiens à la Renaissance. Lausanne: Presses Polytechniques et Universitaires
Romandes.
Van der Waerden, B. 1985. A History of Algebra from alKhwārizmı̄ to Emmy Noether. New York: Springer.
Wussing, H. 1984. The Genesis of the Abstract Group Concept: A Contribution to the History of the Origin of Abstract
Group Theory, translated by A. Shenitzer. Cambridge, MA:
The MIT Press.

`,
      annotations: [
        createAnnotation("ii3-1", "note", "Key insight from this chapter."),
        createAnnotation("ii3-2", "note", "Important historical development discussed."),
        createAnnotation("ii3-3", "note", "Significant mathematical concept explained."),
      ],
    },
  ],
  exercises: [],
}

// II.4 Algorithms - FULL VERBATIM TEXT
export const algorithmsFullText: FullTextChapter = {
  id: "algorithms",
  title: "Algorithms",
  description: "Complete chapter by Jean-Luc Chabert",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 4,
  content: [
    {
      id: "ii4-full-text",
      title: "Algorithms",
      type: "text",
      content: "Complete chapter by Jean-Luc Chabert",
      fullText: `II.4 Algorithms
Jean-Luc Chabert
1

What Is an Algorithm?

It is not easy to give a precise deﬁnition of the word
“algorithm.” One can provide approximate synonyms:
some other words that (sometimes) mean roughly the
same thing are “rule,” “technique,” “procedure,” and
“method.” One can also give good examples, such as
long multiplication, the method one learns in high
school for multiplying two positive integers together.
However, although informal explanations and wellchosen examples do give a good idea of what an algorithm is, the concept has undergone a long evolution: it
was not until the twentieth century that a satisfactory
formal deﬁnition was achieved, and ideas about algorithms have evolved further even since then. In this article, we shall try to explain some of these developments
and clarify the contemporary meaning of the term.

1.1

Abacists and Algorists

Returning to the example of multiplication, an obvious point is that how you try to multiply two numbers
together is strongly inﬂuenced by how you represent
those numbers. To see this, try multiplying the Roman
numerals CXLVII and XXIX together without ﬁrst converting them into their decimal counterparts, 147 and
29. It is diﬃcult and time-consuming, and explains why
arithmetic in the Roman empire was extremely rudimentary. A numeration system can be additive, as it
was for the Romans, or positional, like ours today. If it
is positional, then it can use one or several bases—for
instance, the Sumerians used both base 10 and base 60.
For a long time, many processes of calculation used
abacuses. Originally, these were lines traced on sand,
onto which one placed stones (the Latin for small stone
is calculus) to represent numbers. Later there were
counting tables equipped with rows or columns onto
which one placed tokens. These could be used to represent numbers to a given base. For example, if the
base was 10, then a token would represent one unit,
ten units, one hundred units, etc., according to which
row or column it was in. The four arithmetic operations
could then be carried out by moving the tokens according to precise rules. The Chinese counting frame can be
regarded as a version of the abacus.
In the twelfth century, when the Arabic mathematical works were translated into Latin, the denary positional numeration system spread through Europe. This
system was particularly suitable for carrying out the
arithmetic operations, and led to new methods of calculation. The term algoritmus was introduced to refer
to these, and to distinguish them from the traditional
methods that used tokens on an abacus.
Although the signs for the numerals had been adapted from Indian practice, the numerals became known
as Arabic. And the origin of the word “algorithm” is
Arabic: it arose from a distortion of the name alkhwārizmı̄ [VI.5], who was the author of the oldest
known work on algebra, in the ﬁrst half of the ninth
century. His treatise, entitled al-Kitāb al-mukhtas.ar fı̄
h
. isāb al-jabr wa’l-muqābala (“The compendious book
on calculation by completion and balancing”), gave rise
to the word “algebra.”
1.2

Finiteness

As we have just seen, in the Middle Ages the term “algorithm” referred to the processes of calculation based
on the decimal notation for the integers. However, in

II.4.

Algorithms

the seventeenth century, according to d’alembert’s
[VI.20] Encyclopédie, the word was used in a more general sense, referring not just to arithmetic but also to
methods in algebra and to other calculational procedures such as “the algorithm of the integral calculus”
or “the algorithm of sines.”
Gradually, the term came to mean any process of systematic calculation that could be carried out by means
of very precise rules. Finally, with the growing role of
computers, the important role of ﬁniteness was fully
understood: it is essential that the process stops and
provides a result after a ﬁnite time. Thus one arrives at
the following naive deﬁnition:
An algorithm is a set of ﬁnitely many rules for manipulating a ﬁnite amount of data in order to produce a
result in a ﬁnite number of steps.
Note the insistence on ﬁniteness: ﬁniteness in the writing of the algorithm and ﬁniteness in the implementation of the algorithm.
The formulation above is not of course a mathematical deﬁnition in the classical sense of the term. As we
shall see later, it was important to formalize it further.
But for now, let us be content with this “deﬁnition”
and look at some classical examples of algorithms in
mathematics.

2

Three Historical Examples

A feature of algorithms that we have not yet mentioned
is iteration, or the repetition of simple procedures. To
see why iteration is important, consider once again the
example of long multiplication. This is a method that
works for positive integers of any size. As the numbers get larger, the procedure takes longer, but—and
this is of vital importance—the method is “the same”:
if you understand how to multiply two three-digit numbers together, then you do not need to learn any new
principles in order to multiply two 137-digit numbers
together (even if you might be rather reluctant to do
the calculation). The reason for this is that the method
for long multiplication involves a great deal of carefully
structured repetition of much smaller tasks, such as
multiplying two one-digit numbers together. We shall
see that iteration plays a very important part in the
algorithms to be discussed in this section.
2.1

Euclid’s Algorithm: Iteration

One of the best, and most often used, examples to illustrate the nature of algorithms is euclid’s algorithm

107
[III.22], which goes back to the third century b.c.e. It
is a procedure described by euclid [VI.2] to determine
the greatest common divisor (gcd) of two positive integers a and b. (Sometimes the greatest common divisor
is known as the highest common factor (hcf).)
When one ﬁrst meets the concept of the greatest common divisor of a and b, it is usually deﬁned to be the
largest positive integer that is a divisor (or factor) of
both a and b. However, for many purposes it is more
convenient to think of it as the unique positive integer d with the following two properties. First, d is a
divisor of a and b, and second, if c is any other divisor of a and b, then d is divisible by c. The method for
determining d is provided by the ﬁrst two propositions
of Book VII of Euclid’s Elements. Here is the ﬁrst one:
“Two unequal numbers being set out, and the less being
continually subtracted in turn from the greater, if the
number which is left never measures the one before it
until a unit is left, the original numbers will be prime
to one another.” In other words, if by carrying out successive alternate subtractions one obtains the number
1, then the gcd of the two numbers is equal to 1. In this
case one says that the numbers are relatively prime or
coprime.
2.1.1

Alternate Subtractions

Let us describe Euclid’s procedure in general. It is based
on two simple observations:
(i) if a = b then the gcd of a and b is b (or a);
(ii) d is a common divisor of a and b if and only if it
is a common divisor of a − b and b, which implies
that the gcd of a and b is the same as the gcd of
a − b and b.
Now suppose that we wish to determine the gcd of a
and b and suppose that a ⩾ b. If a = b then observation (i) tells us that the gcd is b. Otherwise, observation (ii) tells us that the answer will be the same as it is
for the two numbers a − b and b. If we now let a1 be
the larger of these two numbers and b1 the smaller (of
course, if they are equal then we just set a1 = b1 = b),
then we are faced with the same task that we started
with—to determine the gcd of two numbers—but the
larger of these two numbers, a1 , is smaller than a, the
larger of the original two numbers. We can therefore
repeat the process: if a1 = b1 then the gcd of a1 and
b1 , and hence that of a and b, is b1 , and otherwise
we replace a1 by a1 − b1 and reorganize the numbers
a1 − b1 and b1 so that if one of them is larger then it
comes ﬁrst.

108

II. The Origins of Modern Mathematics
a and b integers
0≤b≤a
yes

no

a=b

the gcd of the given
numbers is the
current value of a

c
yes
a
b

a−b
c<b

b
c

no

a

c

Figure 1 A ﬂow chart for the
procedure in Euclid’s algorithm.

One further observation is needed if we want to show
that this procedure works. It is the following fundamental fact about the positive integers, sometimes known
as the well-ordering principle.
(iii) A strictly decreasing sequence of positive integers
a0 > a1 > a2 > · · · must be ﬁnite.
Since the iterative procedure just described produces
exactly such a strictly decreasing sequence, the iterations must eventually stop, which means that at some
point ak and bk will be equal, and that value is thus the
gcd of a and b (see ﬁgure 1).
2.1.2

Euclidean Divisions

Euclid’s algorithm is usually described in a slightly different way. One makes use of a more complex procedure called Euclidean division—that is, division with
remainder—which greatly reduces the number of steps
that the algorithm takes. The basic fact underlying this
procedure is that if a and b are two positive integers
then there are (unique) integers q and r such that
a = bq + r

and

0 ⩽ r < b.

The number q is called the quotient and r is the remainder. Remarks (i) and (ii) above are then replaced by the
following ones:
(i ) if r = 0 then the gcd of a and b is equal to b;
(ii ) the gcd of a and b is the same as the gcd of b and
r.
This time, at the ﬁrst step, one replaces (a, b) by (b, r ).
If r = 0, then at the second step one replaces (b, r ) by

(r , r1 ), where r1 is the remainder in the division of b
by r , and so on. The sequence of remainders is strictly
decreasing (b > r > r1 > r2 ⩾ 0), so the process stops
and the gcd is the last nonzero remainder.
It is not hard to see that the two approaches are
equivalent. Suppose, for example, that a = 103 438 and
b = 37. If you use the ﬁrst approach, then you will
repeatedly subtract 37 from 103 438 until you reach a
number that is smaller than 37. This number will be the
remainder when 103 438 is divided by 37, which is the
ﬁrst number you would calculate if you used the second
approach. Thus, the reason for the second approach is
that repeated subtraction can be a very ineﬃcient way
of calculating remainders. This eﬃciency gain is very
important in practice: the second approach gives rise
to a polynomial-time algorithm [IV.20 §2], while the
time taken by the ﬁrst is exponentially long.
2.1.3

Generalizations

Euclid’s algorithm can be generalized to many other
contexts where we have notions of addition, subtraction, and multiplication. For example, there is a variant
of it that applies to the ring [III.81 §1] Z[i] of Gaussian
integers, that is, numbers of the form a + bi, where a
and b are ordinary integers. It can also be applied to the
ring of all polynomials with real coeﬃcients (or coeﬃcients in any ﬁeld, for that matter). The one requirement is that we should be able to ﬁnd some analogue
of the notion of division with remainder, after which
the algorithm is virtually identical to the algorithm for
positive integers. For example, we have the following
statement for polynomials: given any two polynomials
A and B with B not the zero polynomial, there are polynomials Q and R such that A = BQ+R and either R = 0
or the degree of R is less than the degree of B.
As Euclid noticed (Elements, Book X, proposition 2),
one may also carry out the procedure on pairs of numbers a and b that are not necessarily integers. It is easy
to check that the process will stop if and only if the
ratio a/b is a rational number. This observation leads
to the concept of continued fractions [III.22], which
are discussed in part III. They were not studied explicitly before the seventeenth century, but the roots of the
idea can be traced back to archimedes [VI.3].
2.2

The Method of Archimedes to Calculate π:
Approximation and Finiteness

The ratio of the circumference of a circle to the diameter is a constant that has been denoted by π since

II.4.

Algorithms

109

the eighteenth century (see [III.70]). Let us see how
Archimedes, in the third century b.c.e., obtained the
classical approximation 22
7 for this ratio. If one draws
inscribed polygons (whose vertices lie on the circle) and
circumscribed polygons (whose sides are tangent to the
circle) and if one computes the length of these polygons, then one obtains lower and upper bounds for
the value of π , since the circumference of the circle
is greater than the length of any inscribed polygon and
less than the length of any circumscribed polygon (ﬁgure 2). Archimedes started with regular hexagons, and
then repeatedly doubled the number of sides, obtaining more and more precise bounds. He ﬁnished with
ninety-six-sided polygons, obtaining the estimates

2.3

The Newton–Raphson Method:
Recurrence Formulas

In around 1670, newton [VI.14] devised a method for
ﬁnding roots of equations, which he explained with reference to the example x 3 − 2x − 5 = 0. His explanation
starts with the observation that the root x is approximately equal to 2. He therefore writes x = 2 + p and
obtains an equation for p by substituting 2 + p for x in
the original equation. This new equation works out to
be p3 + 6p 2 + 10p − 1 = 0. Because x is close to 2, p is

H
D

A
F N

E

1
3 + 10
71 ⩽ π ⩽ 3 + 7 .

This process clearly involves iteration, but is it right
to call it an algorithm? Strictly speaking it is not: however many sides you take for your polygon, all you
will get is an approximation to π , so the process is
not ﬁnite. However, what we do have is an algorithm
that will calculate π to any desired accuracy: for example, if you demand an approximation that is correct
to ten decimal places, then after a ﬁnite number of
steps the algorithm will give you one. What matters now
is that the process converges. That is, it is important
that the values that come out of the iteration get arbitrarily close to π . The geometric origin of the method
can be used to prove that this is indeed the case, and
in 1609 in Germany Ludolph van Ceulen obtained an
approximation accurate to thirty-ﬁve decimal places
using polygons with 262 sides.
Nevertheless, there is a clear diﬀerence between this
algorithm for approximating π and Euclid’s algorithm
for calculating the gcd of two positive integers. Algorithms like Euclid’s are often called discrete algorithms,
and are contrasted with numerical algorithms, which
are algorithms that are used to compute numbers that
are not integers (see numerical analysis [IV.21]).

G

T

O

C

B

Figure 2 Approximation of π .

small, so he then estimates p by forgetting the terms
p 3 and 6p 2 (since these should be considerably smaller
than 10p − 1). This gives him the equation 10p − 1 = 0,
1
or p = 10
. Of course, this is not an exact solution, but it
provides him with a new and better approximation, 2.1,
for x. He then repeats the process, writing x = 2.1 + q,
substituting to obtain an equation for q, solving this
equation approximately, and reﬁning his estimate still
further. The estimate he obtains for q is −0.0054, so
the next approximation for x is 2.0946.
How, though, can we be sure that this process really
does converge to x? Let us examine the method more
closely.
2.3.1

Tangents and Convergence

Newton’s method can be interpreted geometrically in
terms of the graph of a function f , though Newton himself did not do so. A root x of the equation f (x) = 0
corresponds to a point where the curve with equation
y = f (x) intersects the x-axis. If you start with an
approximate value a for x and set p = x − a, as we
did above, then when you substitute a + p for x to
obtain a new function g(p), you are eﬀectively moving
the origin from (0, 0) to the point (a, 0). Then when
you forget all powers of p other than the constant and
linear terms, you are ﬁnding the best linear approximation to the function g—which, geometrically speaking,
is the tangent line to g at the point (0, g(0)). Thus, the
approximate value you obtain for p is the x-coordinate
of the point where the tangent at (0, g(0)) crosses the

110

II. The Origins of Modern Mathematics

a

a+p+q

a+p

for quadratic polynomials but diﬃcult as soon as the
degree is 3 or more. For example, the domains of
attraction of the roots ±1 of the polynomial z 2 − 1
are the open half-planes bounded by the vertical axis,
but the domains corresponding to the roots 1, ω, and
ω2 of z 3 − 1 are extremely complicated sets. They
were described by Julia in 1918—such subsets are now
called fractal sets. Newton’s method and fractal sets are
discussed further in dynamics [IV.14].
2.3.2

Figure 3 Newton’s method.

x-axis. Adding a to this value returns the origin to (0, 0)
and gives the new approximation to the root of f . This
is why Newton’s method is often called the tangent
method (ﬁgure 3). And one can now see that the new
approximation will deﬁnitely be better than the old one
if the tangent to f at (a, f (a)) intersects the x-axis at a
point that lies between a and the point where the curve
y = f (x) intersects the x-axis.
As it happens, this is not the case for Newton’s choice
of the value a = 2 above, but it is true for the approximate value 2.1 and for all subsequent ones. Geometrically, the favorable situation occurs if the point
(a, f (a)) lies above the x-axis in a convex part of the
curve that crosses the x-axis or below the x-axis in a
concave part of the curve that crosses the x-axis. Under
these circumstances, and provided the root is not a
multiple one, the convergence is quadratic, meaning
that the error at each stage is roughly the square of
the error at the previous stage—or, equivalently, the
approximation is valid to a number of decimal places
that roughly doubles at each stage. This is enormously
fast.
The choice of the initial approximation value is obviously important, and raises unexpectedly subtle questions. These are clearer if we look at complex polynomials and their complex roots. Newton’s method can be
easily adapted to this more general context. Suppose
that z is a root of some complex polynomial and that
z0 is an initial approximation for z. Newton’s method
then gives us a sequence z0 , z1 , z2 , . . . , which may or
may not converge to z. We deﬁne the domain of attraction, denoted A(z), to be the set of all complex numbers z0 such that the resulting sequence does indeed
converge to z. How do we determine A(z)?
The ﬁrst person to ask this problem was cayley
[VI.46], in 1879. He noticed that the solution is easy

Recurrence Formulas

At each stage of his method, Newton had to produce
a new equation, but in 1690 Raphson noticed that this
was not really necessary. For particular examples, he
gave single formulas that could be used at each step,
but his basic observation applies in general and leads
to a general formula for every case, which one can
easily obtain using the interpretation in terms of tangents. Indeed, the tangent to the curve y = f (x) at the
point of x-coordinate a has the equation y − f (a) =
f (a)(x − a), and it cuts the x-axis at the point with
x-coordinate a − f (a)/f (a). What we now call the
Newton–Raphson method springs from this simple formula. One starts with an initial approximation a0 = a
and then deﬁnes successive approximations using the
recurrence formula
f (an )
an+1 = an −
.
f (an )
As an example, let us consider the function f (x) =
x 2 − c. Here, Newton’s method provides a sequence of
√
approximations of the square root c of c, given by
the recurrence formula an+1 = 12 (an + c/an ) (which
we obtain by substituting x 2 + c for f in the general
formula above). This method for approximating square
roots was known by Heron of Alexandria in the ﬁrst
√
century. Note that if a0 is close to c, then c/a0 is also
√
close, c lies between them, and a1 = 12 (a0 + c/a0 ) is
their arithmetic mean.

3
3.1

Does an Algorithm Always Exist?

Hilbert’s Tenth Problem:
The Need for Formalization

In 1900, at the Second International Congress of Mathematicians, hilbert [VI.63] proposed a list of twentythree problems. These problems, and Hilbert’s works in
general, had a huge inﬂuence on mathematics during
the twentieth century (Gray 2000). We are interested
here in Hilbert’s tenth problem: given a Diophantine

II.4.

Algorithms

equation, that is, a polynomial equation with any number of indeterminates and with integer coeﬃcients, “a
process is sought by which it can be determined, in a
ﬁnite number of operations, whether the equation is
solvable in integral numbers.” In other words, we have
to ﬁnd an algorithm which tells us, for any Diophantine equation, whether or not it has at least one integer
solution. Of course, for many Diophantine equations it
is easy to ﬁnd solutions, or to prove that no solutions
exist. However, this is by no means always the case: consider, for instance, the Fermat equation x n + y n = zn
(n ⩾ 3). (Even before the solution of fermat’s last
theorem [V.10] an algorithm was known for determining for any speciﬁc n whether this equation had
a solution. However, one could not call it easy.)
If Hilbert’s tenth problem has a positive answer, then
one can demonstrate it by exhibiting a “process” of the
sort that Hilbert asked for. To do this, it is not necessary
to have a precise understanding of what a “process” is.
However, if you want to give a negative answer, then
you have to show that no algorithm exists, and for that
you need to say precisely what counts as an algorithm.
In section 1.2 we gave a deﬁnition that seems to be reasonably precise, but it is not precise enough to enable
us to think about Hilbert’s tenth problem. What kind of
rules are we allowed to use in an algorithm? How can
we be sure that no algorithm achieves a certain task,
rather than just that we are unable to ﬁnd one?
3.2

Recursive Functions: Church’s Thesis

What we need is a formal deﬁnition of the notion of an
algorithm. In the seventeenth century, leibniz [VI.15]
envisaged a universal language that would allow one to
reduce mathematical proofs to simple computations.
Then, during the nineteenth century, logicians such
as Charles Babbage, boole [VI.43], frege [VI.56], and
peano [VI.62] tried to formalize mathematical reasoning by an “algebraization” of logic. Finally, between
1931 and 1936, gödel [VI.92], church [VI.89], and
Stephen Kleene introduced the notion of recursive functions (see Davis (1965), which contains the original
texts). Roughly speaking, a recursive function is one
that can be calculated by means of an algorithm, but
the deﬁnition of recursive functions is diﬀerent, and is
completely precise.
3.2.1

Primitive Recursive Functions

Another rough deﬁnition of a recursive function is as
follows: a recursive function is one that has an induc-

111
tive deﬁnition. To give an idea of what this means, let us
consider addition and multiplication as functions from
N × N to N. To emphasize this, we shall write sum(x, y)
and prod(x, y) for x + y and xy, respectively.
A familiar fact about multiplication is that it is “repeated addition.” Let us examine this idea more precisely. We can deﬁne the function “prod” in terms of
the function “sum” by means of the following two
rules: prod(1, y) equals y and prod(x + 1, y) equals
sum(prod(x, y), y). Thus, if you know prod(x, y) and
you know how to calculate sums, then you can work out
prod(x + 1, y). Since you also know the “base case”
prod(1, y), a simple inductive argument shows that
these simple rules completely determine the function
“prod.”
We have just seen how one function can be “recursively deﬁned” in terms of another. We now want to
understand the class of all functions from Nn to N that
can be built up in a few basic ways, of which recursion
is the most important. We shall refer to functions from
Nn to N as n-ary functions.
To begin with, we need an initial stock of functions
out of which the rest will be built. It turns out that a
very simple set of functions is enough. Most basic are
the constant functions: that is, functions that take every
n-tuple in Nn to some ﬁxed positive integer c. Another
very simple function, but the function that allows us
to create much more interesting ones, is the successor
function, which takes a positive integer n to the next
one, n + 1. Finally, we have projection functions: the
function Ukn takes a sequence (x1 , . . . , xn ) in Nn and
maps it to the kth coordinate xk .
We then have two ways of constructing functions
from other functions. The ﬁrst is substitution. Given an
m-ary function φ and m n-ary functions ψ1 , . . . , ψm ,
one deﬁnes an n-ary function by
(x1 , . . . , xn ) → φ(ψ1 (x1 , . . . , xn ), . . . , ψm (x1 , . . . , xn )).
For example, (x + y)2 = prod(sum(x, y), sum(x, y)),
so we can obtain the function (x, y) → (x + y)2
from the functions “sum” and “prod” by means of
substitution.
The second method of construction is called primitive recursion. This is a more general form of the inductive method we used above in order to construct the
function “prod” from the function “sum.” Given an
(n − 1)-ary function ψ and an (n + 1)-ary function μ,
one deﬁnes an n-ary function φ by saying that
φ(1, x2 , . . . , xn ) = ψ(x2 , . . . , xn )

112

II. The Origins of Modern Mathematics

and

the function that takes y to A(x + 1, y) “iterates” the
function that takes y to A(x, y). This means that the
values of A(x, y) are extremely large even when x and
y are fairly small. For example, A(4, y + 1) = 2A(4,y) ,
so in general A(4, y) is given by an “exponential tower”
of height y. We have A(4, 1) = 2, A(4, 2) = 22 = 4,
A(4, 3) = 24 = 16, A(4, 4) = 216 = 65 536, and
A(4, 5) = 265 536 , which is too large a number for its
decimal notation to be reproduced here.
It can be shown that for every primitive recursive
function φ there is some x such that the function
A(x, y) grows faster than φ(y). This is proved by an
inductive argument. To oversimplify slightly, if ψ(y)
and μ(y) have already been shown to grow more slowly
than A(x, y), then one can show that the function
φ produced from them by primitive recursion also
grows more slowly. This allows us to deﬁne a “diagonal” function A(y) = A(y, y) that is not primitive recursive because it grows faster than any of the
functions A(x, y).
If we are trying to understand in a precise way which
functions can be calculated algorithmically, then our
deﬁnition will surely have to encompass functions like
the Ackermann function, since they can in principle be
computed. Therefore, we must consider a larger class
of functions than just the primitive recursive ones.
This is what Gödel, Church, and Kleene did, and they
obtained in diﬀerent ways the same class of recursive
functions. For instance, Kleene added a third method of
construction, which he called minimization. If f is an
(n + 1)-ary function, one deﬁnes an n-ary function g
by taking g(x1 , . . . , xn ) to be the smallest y such that
f (x1 , . . . , xn , y) = 0. (If there is no such y, one regards
g as undeﬁned for (x1 , . . . , xn ). We shall ignore this
complication in what follows.)
It turns out that, not only is the Ackermann function
recursive, but so are all functions that one can write
a computer program to calculate. So this gives us the
formal deﬁnition of computability that we did not have
before.

φ(k + 1, x2 , . . . , xn )
= μ(k, φ(k, x2 , . . . , xn ), x2 , . . . , xn ).
In other words, ψ tells you the “initial values” of φ
(the values when the ﬁrst coordinate is 1) and μ tells
you how to work out φ(k + 1, x2 , . . . , xn ) in terms
of φ(k, x2 , . . . , xn ), x2 , . . . , xn and k. (The sum–product example was simpler because we did not have a
dependence on k.)
A primitive recursive function is any function that can
be built from the initial stock of functions using the two
operations, substitution and primitive recursion, that
we have just described.
3.2.2

Recursive Functions

If you think for a while about primitive recursion and
know a small amount about programming computers,
you should be able to convince yourself that they are
eﬀectively computable: that is, that for any primitive
recursive function there is an algorithm for computing
it. (For example, the operation of primitive recursion
can usually be realized in a rather direct way as a FOR
loop.)
How about the converse? Are all computable functions primitive recursive? Consider, for example, the
function that takes the positive integer n to pn , the
nth prime number. It is not hard to devise a simple
algorithm for computing pn , and it is then a good exercise (if you want to understand primitive recursion) to
convert this algorithm into a proof that the function is
primitive recursive.
However, it turns out that this function is not typical:
there are computable functions that are not primitive
recursive. In 1928, Wilhelm Ackermann deﬁned a function, now known as the Ackermann function, that has a
“doubly inductive” deﬁnition. The following function is
not quite the same as Ackermann’s, but it is very similar. It is the function A(x, y) that is determined by the
following recurrence rules:
(i) A(1, y) = y + 2 for every y;
(ii) A(x, 1) = 2 for every x;
(iii) A(x+1, y +1) = A(x, A(x+1, y)) whenever x > 1
and y > 1.
For example, A(2, y + 1) = A(1, A(2, y)) = A(2, y) + 2.
From this and the fact that A(2, 1) = 2 it follows that
A(2, y) = 2y for every y. In a similar way one can
show that A(3, y) = 2y , and in general that for each x

3.2.3

Eﬀective Calculability

Once the notion of recursive functions had been formulated, Church claimed that the class of recursive functions was exactly the same as the class of “eﬀectively
calculable” functions. This claim is widely believed,
but it is a conviction that cannot be proved since
the notion of recursive function is a mathematically
precise concept while that of an eﬀectively calculable function is an intuitive notion, rather like that of

II.4.

Algorithms

“algorithm.” Church’s statement lies in the realm of
metamathematics and is now called Church’s thesis.
3.3

Turing Machines

One of the strongest pieces of evidence for Church’s
thesis is that in 1936 turing [VI.94] found a very
diﬀerent-looking way of formalizing the notion of an
algorithm, which he showed was equivalent. That is,
every function that was computable in his new sense
was recursive and vice versa. His approach was to
deﬁne a notion that is now called a Turing machine,
which can be thought of as an extremely primitive computer, and which played an important part in the development of actual computers. Indeed, functions that
are computable by Turing machines are precisely those
that can be programmed on a computer. The primitive architecture of Turing machines does not make
them any less powerful: it merely means that in practice they would be too cumbersome to program or to
implement in hardware. Since recursive functions are
the same as Turing-computable functions, it follows
that recursive functions too are those functions that
can be programmed on a computer, so to disbelieve
Church’s thesis would be to maintain that there are
some “eﬀective procedures” that cannot be converted
into computer programs—which seems rather implausible. A description of Turing machines can be found
in computational complexity [IV.20 §1].
Turing introduced his machines in response to a
question that generalized Hilbert’s tenth problem. The
Entscheidungsproblem, or decision problem, was also
asked by Hilbert, in 1922. He wanted to know whether
there was a “mechanical process” by which one could
determine whether any given mathematical statement
could be proved. In order to think about this, Turing
needed a precise notion of what constituted a “mechanical process.” Once he had deﬁned Turing machines,
he was able to show by means of a fairly straightforward diagonal argument that the answer to Hilbert’s
question was no. His argument is outlined in the
insolubility of the halting problem [V.20].

4
4.1

Properties of Algorithms

Iteration versus Recursion

As previously mentioned, we often encounter computation rules which deﬁne each element of a sequence
in terms of the preceding elements. This gives rise to
two diﬀerent ways of carrying out the computation.

113
The ﬁrst is iteration: one computes the ﬁrst terms, then
one obtains succeeding terms by means of a recurrence
formula. The second is recursion, a procedure which
seems circular at ﬁrst because one deﬁnes a procedure
in terms of itself. However, this is allowed because the
procedure calls on itself with smaller values of the variables. The concept of recursion is subtle and powerful.
Let us try to clarify the diﬀerence between recursion
and iteration with some examples.
Suppose that we wish to compute n! = 1 · 2 ·
3 · · · (n − 1) · n. An obvious way of doing it is to note
the recurrence relation n! = n · (n − 1)! and the initial value 1! = 1. Having done so, one could then
compute successively the numbers 2!, 3!, 4!, and so
on until one reached n!, which would be the iterative
approach. Alternatively, one could say that if fact(n) is
the result of a procedure that leads to n!, then fact(n) =
n × fact(n − 1), which would be a recursive procedure.
The second approach says that to obtain n! it suﬃces to
know how to obtain (n−1)!, and to obtain (n−1)! it sufﬁces to know how to obtain (n−2)!, and so on. Since one
knows that 1! = 1, one can obtain n!. Thus, recursion
is a bit like iteration but thought of “backwards.”
In some ways this example is too simple to show
clearly the diﬀerence between the two procedures.
Moreover, if one wishes to compute n!, then iteration
seems simpler and more natural than recursion. We
now look at an example where recursion is far simpler
than iteration.
4.1.1

The Tower of Hanoi

The Tower of Hanoi is a problem that goes back to
Édouard Lucas in 1884. One is given n disks, all of different sizes and each with a hole in the middle, stacked
on a peg A in order of size, with the largest one at the
bottom. We also have two empty pegs B and C. The
problem is to move the stack from peg A to peg B while
obeying the following rules. One is allowed to move just
one disk at a time, and each move consists in taking
the top disk from one of the pegs and putting it onto
another peg. In addition, no disk may ever be placed
above a smaller disk.
The problem is easy if you have just three disks,
but becomes rapidly harder as the number of disks
increases. However, with the help of recursion one can
see very quickly that an algorithm exists for moving
the disks in the required way. Indeed, suppose that we
know a procedure H(n − 1) that solves the problem for
n − 1 disks. Here is a procedure H(n) for n disks: move

114

II. The Origins of Modern Mathematics

the ﬁrst n − 1 disks on top of A to C with the procedure
H(n − 1), then move the last disk on A to B, and ﬁnally
apply once more the procedure H(n−1) to move all the
disks from C to B. If we write HAB (n) for the procedure
that moves n disks from peg A to peg B according to the
rules, then we can represent this recursion symbolically
as
HAB (n) = HAC (n − 1)HAB (1)HBC (n − 1).
Thus, HAB (n) is deduced from HAC (n − 1) and HBC (n −
1), which are clearly equivalent to HAB (n − 1). Since
HAB (1) is certainly easy, we have the full recursion.
One can easily check by induction that this procedure takes 2n − 1 moves—moreover, it turns out that
the task cannot be accomplished in fewer moves. Thus,
the number of moves is an exponential function of n,
so for large n the procedure will be very long.
Furthermore, the larger n is, the more memory one
must use to keep track of where one is in the procedure.
By contrast, if we wish to carry out an iteration during
an iterative procedure, it is usually enough to know just
the result of the previous iteration. Thus, the most we
need to remember is the result of one iteration. There
is in fact an iterative procedure for the Tower of Hanoi
as well. It is easy to describe, but it is much less obvious
that it actually solves the problem. It encodes the positions of the n disks as an n-bit sequence and at each
step applies a very simple rule to obtain the next n-bit
sequence. This rule makes no reference to how many
steps have so far taken place, and therefore the amount
of memory needed, beyond that required to store the
positions of the disks, is very small.
4.1.2

The Extended Euclid Algorithm

Euclid’s algorithm is another example that lends itself
in a very natural way to a recursive procedure. Recall
that if a and b are two positive integers, then we
can write a = qb + r with 0 ⩽ r < b. The algorithm depended on the observation that gcd(a, b) =
gcd(b, r ). Since the remainder r can be calculated easily from a and b, and since the pair (b, r ) is smaller
than the pair (a, b), this gives us a recursive procedure,
which stops when we reach a pair of the form (a, 0).
An important extension of Euclid’s algorithm is Bézout’s lemma, which states that for any pair of positive integers (a, b) there exist (not necessarily positive)
integers u and v such that
ua + vb = d = gcd(a, b).
How can we obtain such integers u and v? The answer
is given by the extended Euclid algorithm, which again

can be deﬁned using recursion. Suppose we can ﬁnd a
pair (u , v ) that works for b and r : that is, u b +v r =
d. Since a = qb + r , we can substitute r = a − qb into
this equation and deduce that d = u b + v (a − qb) =
v a+(u −v q)b. Thus, setting u = v and v = u −v q,
we have ua + vb = d. Since a pair (u, v) that works
for a and b can be easily calculated from a pair (u , v )
that works for the smaller b and r , this gives us a recursive procedure. The “bottom” of the recursion is when
r = 0, in which case we know that 1b +0r = d. Once we
reach this, we can “run back up” through Euclid’s algorithm, successively modifying our pair (u, v) according
to the rule just given. Notice, incidentally, that the fact
that this procedure exists is a proof of Bézout’s lemma.
4.2

Complexity

So far we have considered algorithms in a theoretical
way and ignored their obvious practical importance.
However, the mere existence of an algorithm for carrying out a certain task does not guarantee that your
computer can do it, because some algorithms take so
many steps that no computer can implement them
(unless you are prepared to wait billions of years for
the answer). The complexity of an algorithm is, loosely
speaking, the number of steps it takes to complete
its task (as a function of the size of the input). More
precisely, this is the time complexity of the algorithm.
There is also its space complexity, which measures the
maximum amount of memory a computer needs in
order to implement it. Complexity theory is the study
of the computational resources that are needed to carry
out various tasks. It is discussed in detail in computational complexity [IV.20]—here we shall give a hint
of it by examining the complexity of one algorithm.
4.2.1

The Complexity of Euclid’s Algorithm

The length of time that a computer will take to implement Euclid’s algorithm is closely related to the number
of times one needs to compute quotients and remainders: that is, to the number of times that the recursive procedure calls on itself. Of course, this number
depends in turn on the size of the numbers a and b
whose gcd is to be determined. An initial observation
is that if 0 < b ⩽ a, then the remainder in the division of a by b is less than a/2. To see this, notice that
if b ⩾ a/2 then the remainder is a − b, which is at
most a/2, whereas if b ⩽ a/2 then we know that the
remainder is at most b and so is again at most a/2. It

II.4.

Algorithms

115

follows that after two steps of calculating the remainder, one arrives at a pair where the larger number is
at most half what it was before. From this it is easy to
show that the number of such calculations needed is at
most 2 log2 a + 1, which is roughly proportional to the
number of digits of a. Since this number is far smaller
than a itself, the algorithm can be used easily for very
large numbers, which gives it great practical utility to
go with its theoretical signiﬁcance.
The number of divisions needed in the worst case
does not appear to have been studied until the ﬁrst half
of the nineteenth century: the above bound of 2 log2 a+
1 was given by Pierre-Joseph-Étienne Finck in 1841. It
is in fact not hard to improve this result slightly and
prove that the algorithm takes longest when a and b are
consecutive Fibonacci numbers. This implies that the
number of divisions needed is never more than logφ a+
1, where φ is the golden ratio.
Euclid’s algorithm also has low space complexity:
once one has replaced a pair (a, b) by a new pair (b, r ),
one can forget the original pair, so at any stage one
does not have to hold very much in one’s memory (or
store it in the memory of one’s computer). By contrast,
the extended Euclid algorithm appears to require one
to remember the entire sequence of calculations that
leads to the gcd d of a and b, so that one can make
a series of substitutions and eventually ﬁnd u and v
such that ua + vb = d. However, a closer look at it
reveals that one can perform it while keeping track of
only a few numbers at any one time.
Let us see how this works with an example. We shall
set a = 38, b = 21, and ﬁnd integers u and v such that
38u + 21v = 1. We begin by writing down the ﬁrst step
of Euclid’s algorithm:
38 = 1 × 21 + 17.
This tells us that 17 = 38 − 21. Now we write down the
second step:
21 = 1 × 17 + 4.
We know how to write 17 in terms of 38 and 21, so let
us do a substitution:
21 = 1 × (38 − 21) + 4.
Rearranging this, we discover that 4 = 2 × 21 − 38. Now
we write down the third step of Euclid’s algorithm:
17 = 4 × 4 + 1.
We know how to write 17 and 4 in terms of 38 and 21,
so let us substitute again:
38 − 21 = 4 × (2 × 21 − 38) + 1.

Rearranging this, we ﬁnd that 1 = 5 × 38 − 9 × 21, and
we have ﬁnished.
If you think about this procedure, you will see that
at each stage one just has to keep track of how two
numbers are expressed in terms of a and b. Thus, the
space complexity of the extended Euclid algorithm is
small if you implement it properly.

5
5.1

Modern Aspects of Algorithms

Algorithms and Chance

Earlier it was remarked that the notion of algorithm
has continued to develop even since its formalization
in the 1920s and 1930s. One of the main reasons for
this has been the realization that randomness can be
a very useful tool in algorithms. This may seem puzzling at ﬁrst, since algorithms as we have described
them are deterministic procedures; in a moment we
shall give an example that illustrates how randomness
can be used. A second reason is the recent development
of the notion of a quantum algorithm: for more about
this, see quantum computation [III.74].
The following simple example illustrates how chance
can be useful. Given an integer n, we shall deﬁne a function f (n) that is not too hard to calculate but is diﬃcult to analyze. If n has d digits, then you approximate
√
n to the point where the ﬁrst d digits after the decimal point are correct (using Newton’s method, say),
and let f (n) equal the dth digit. Now suppose that you
wish to know roughly what proportion of numbers n
between 1030 and 1031 have f (n) = 0. There does not
seem to be a good way of determining this theoretically,
but calculating it on a computer looks very hard, too,
as there are so many numbers between 1030 and 1031 .
However, if one chooses a random sample of 10 000
numbers between 1030 and 1031 and does the calculation for just those numbers, then with high probability
the proportion of those numbers with f (n) = 0 will be
roughly the same as the proportion of all numbers in
the range with f (n) = 0. Thus, if you do not demand
absolute certainty but instead are satisﬁed with a very
small error probability, then you can achieve your goal
with much more modest computational resources.
5.1.1

Pseudorandom Numbers

How, though, does one use a deterministic computer to
select ten thousand random numbers between 1030 and
1031 ? The answer is that one does not in fact need to: it
is almost always good enough to make a pseudorandom

116
selection instead. The basic idea is well-illustrated by
a method proposed by von neumann [VI.91] in the
mid 1940s. One begins with a 2n-digit integer a, called
the “seed,” calculates a2 , and extracts from a2 a new
2n-digit number b by taking all the digits of a2 from
the (n + 1)st to the 3nth. One then repeats the procedure for b, and so on. Because of the way multiplication jumbles up digits, the resulting sequence of
2n-digit numbers is very hard to distinguish from a
truly random sequence, and can be used in randomized
algorithms.
There are many other ways of producing pseudorandom sequences, and this raises an obvious question: what properties should a sequence have for us
to regard it as pseudorandom? This turns out to be a
complex question, and several diﬀerent answers have
been proposed. Randomized algorithms and pseudorandomness are discussed in depth in computational
complexity [IV.20 §§6, 7], and a formal deﬁnition of
“pseudorandom generators” can be found there. (See
also computational number theory [IV.3 §2] for an
account of a famous randomized algorithm for testing
whether a number is prime.) Here, let us discuss a similar question about inﬁnite sequences of zeros and ones.
When should we regard such a sequence as “random”?
Again, many diﬀerent answers have been suggested.
One idea is to consider simple statistical tests: we
would expect that in the long run the frequency of zeros
should be roughly the same as that of ones, and more
generally that any small subsequence such as 00110
should appear with the “right” frequency (which for
1
this sequence would be 32
since it has length 5).
It is perfectly possible, however, for a sequence to
pass these simple tests but to be generated by a deterministic procedure. If one is trying to decide whether
a sequence of zeros and ones is actually random—
that is, produced by some means such as tossing a
coin—then we will be very suspicious of a sequence if
we can identify an algorithm that produces the same
sequence. For example, we would reject a sequence that
was derived in a simple way from the digits of π , even
if it passed the statistical tests. However, merely to ask
that a sequence cannot be produced by a recursive procedure does not give a good test for randomness: for
example, if one takes any such sequence and alternates
the terms of that sequence with zeros, one then obtains
a new sequence that is far from random, but which still
cannot be produced recursively.
For this reason, von Mises suggested in 1919 that a
sequence of zeros and ones should be called random if

II. The Origins of Modern Mathematics
it is not only the case that the limit of the frequency of
ones is 12 , but also that the same is true for any subsequence that can be extracted “by means of a reasonable
procedure.” In 1940 Church made this more precise by
translating “by means of a reasonable procedure” into
“by means of a recursive function.” However, even this
condition is too weak: there are such sequences that
do not satisfy the “law of the iterated logarithm” (something that a random sequence would satisfy). Currently,
the so-called Martin–Löf thesis, formulated in 1966, is
one of the most commonly used deﬁnitions of randomness: a random sequence is a sequence that satisﬁes all
the “eﬀective statistical sequential tests,” a notion that
we cannot formulate precisely here, but which uses in
an essential manner the notion of recursive function. By
contrast with Church’s thesis, with which almost every
mathematician agrees, the Martin–Löf thesis is still very
much under discussion.
5.2

The Inﬂuence of Algorithms on
Contemporary Mathematics

Throughout its history, mathematics has concerned
itself with problems of existence. For example, are there
transcendental numbers [III.41], that is, numbers
that are not the root of any polynomial with integer
coeﬃcients? There are two kinds of answers to such
questions: either one actually exhibits a number such
as π and proves that it is transcendental (this was done
by Carl Lindemann in 1873), or one gives an “indirect
existence proof,” such as cantor’s [VI.54] demonstration that there are “far more” real numbers than there
are roots of polynomials with integer coeﬃcients (see
countable and uncountable sets [III.11]), which
shows in particular that some real numbers must be
transcendental.
5.2.1

Constructivist Schools

In around 1910, under the leadership of l. e. j. brouwer
[VI.75], the intuitionist school [II.7 §3.1] of mathematics arose, which rejected the principle of the excluded middle, the principle that every mathematical
assertion is either true or false. In particular, Brouwer
did not accept that the existence of a mathematical
object such as a transcendental number is proved by
the fact that its nonexistence would lead to a contradiction. This was the ﬁrst of several “constructivist”
schools, for which an object exists if and only if it can
be constructed explicitly.

II.5.

`,
      annotations: [
        createAnnotation("ii4-1", "note", "Key insight from this chapter."),
        createAnnotation("ii4-2", "note", "Important historical development discussed."),
        createAnnotation("ii4-3", "note", "Significant mathematical concept explained."),
      ],
    },
  ],
  exercises: [],
}

// II.5 The Development of Rigor in Mathematical Analysis - FULL VERBATIM TEXT
export const rigorInAnalysisFullText: FullTextChapter = {
  id: "rigor-in-analysis",
  title: "The Development of Rigor in Mathematical Analysis",
  description: "Complete chapter by Tom Archibald",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 5,
  content: [
    {
      id: "ii5-full-text",
      title: "The Development of Rigor in Mathematical Analysis",
      type: "text",
      content: "Complete chapter by Tom Archibald",
      fullText: `The Development of Rigor in Mathematical Analysis

Not many working mathematicians have subscribed
to these principles, but almost all would agree that
there is an important diﬀerence between constructive
proofs and indirect proofs of existence, a diﬀerence
that has come to seem more important with the rise
of computer science. This has added a further level of
reﬁnement: sometimes, even if you know that a mathematical object can be produced algorithmically, you
still care whether the algorithm can be made to work
in a reasonably short time.
5.2.2

Eﬀective Results

In number theory there is an important distinction
between “eﬀective” and “ineﬀective” results. For example, mordell’s conjecture [V.29], proposed in 1922
and ﬁnally proved by Faltings in 1983, states that a
smooth rational plane curve of degree n > 3 has at
most ﬁnitely many points with rational coeﬃcients.
Among its many consequences is that the Fermat equation x n + y n = zn has only ﬁnitely many integral solutions for each n ⩾ 4. (Of course, we now know that it
has no nontrivial solutions, but the Mordell conjecture
was proved before Fermat’s last theorem, and it has
many other consequences.) However, Faltings’s proof is
ineﬀective, which means that it does not give any information about how many solutions there are (except that
there are not inﬁnitely many), or how large they can be,
so one cannot use a computer to ﬁnd them all and know
that one has ﬁnished the job. There are many other
very important proofs in number theory that are ineffective, and replacing any one of them with an eﬀective
argument would be a major breakthrough.
A completely diﬀerent set of issues was raised by
another solution to a famous open problem, the fourcolor theorem [V.12], which was conjectured by Francis Guthrie, a student of de morgan [VI.38], in 1852
and proved in 1976 by Appel and Haken, with a proof
that made essential use of computers. They began with
a theoretical argument that reduced the problem to
checking ﬁnitely many cases, but the number of cases
was so large that it could not be done by hand and was
instead done by computers. But how should we judge
such a proof? Can we be sure that the computer has
been programmed correctly? And even if it has, how
do we know with a computation of that size that the
computer has operated correctly? And does a proof
that relies on a computer really tell us why the theorem is true? These questions continue to be debated
today.

117
Further Reading
Archimedes. 2002. The Works of Archimedes, translated by
T. L. Heath. London: Dover. Originally published 1897,
Cambridge University Press, Cambridge.
Chabert, J.-L., ed. 1999. A History of Algorithms: From the
Pebble to the Microchip. Berlin: Springer
Davis, M., ed. 1965. The Undecidable. New York: The Raven
Press.
Euclid. 1956. The Thirteen Books of Euclid’s Elements, translated by T. L. Heath (3 vols.), 2nd edn. London: Dover.
Originally published 1929, Cambridge University Press,
Cambridge.
Gray, J. J. 2000. The Hilbert Challenge. Oxford: Oxford
University Press.
Newton, I. 1969. The Mathematical Papers of Isaac Newton,
edited by D. T. Whiteside, volume 3 (1670–73), pp. 43–47.
Cambridge: Cambridge University Press.

II.5 The Development of Rigor in
Mathematical Analysis
Tom Archibald
1

Background

This article is about how rigor came to be introduced
into mathematical analysis. This is a complicated topic,
since mathematical practice has changed considerably,
especially in the period between the founding of the calculus (shortly before 1700) and the early twentieth century. In a sense, the basic criteria for what constitutes a
correct and logical argument have not altered, but the
circumstances under which one would require such an
argument, and even to some degree the purpose of the
argument, have altered with time. The voluminous and
successful mathematical analysis of the 1700s, associated with names such as Johann and Daniel bernoulli
[VI.18], euler [VI.19], and lagrange [VI.22], lacked
foundational clarity in ways that were criticized and
remedied in subsequent periods. By around 1910 a
general consensus had emerged about how to make
arguments in analysis rigorous.
Mathematics consists of more than techniques for
calculation, methods for describing important features
of geometric objects, and models of worldly phenomena. Nowadays, almost all working mathematicians are
trained in, and concerned with, the production of rigorous arguments that justify their conclusions. These
conclusions are usually framed as theorems, which are
statements of fact, accompanied by an argument, or
proof, that the theorem is indeed true. Here is a simple
example: every positive whole number that is divisible

118
by 6 is also divisible by 2. Running through the six times
table (6, 12, 18, 24, …) we see that each number is even,
which makes the statement easy enough to believe. A
possible justiﬁcation of it would be to say that since 6
is divisible by 2, then every number divisible by 6 must
also be divisible by 2.
Such a justiﬁcation might or might not be thought
of as a thorough proof, depending on the reader. For
on hearing the justiﬁcation we can raise questions: is it
always true that if a, b, and c are three positive whole
numbers such that c is divisible by b and b is divisible by a, then c is divisible by a? What is divisibility
exactly? What is a whole number? The mathematician
deals with such questions by precisely deﬁning concepts (such as divisibility of one number by another),
basing the deﬁnitions on a smallish number of undeﬁned terms (“whole number” might be one, though it
is possible to start even further back, with sets). For
example, one could deﬁne a number n to be divisible
by a number m if and only if there exists an integer q
such that qm = n. Using this deﬁnition, we can give a
more precise proof: if n is divisible by 6, then n = 6q
for some q, and therefore n = 2(3q), which proves that
n is divisible by 2. Thus we have used the deﬁnitions
to show that the deﬁnition of divisibility by 2 holds
whenever the deﬁnition of divisibility by 6 holds.
Historically, mathematical writers have been satisﬁed with varying levels of rigor. Results and methods
have often been widely used without a full justiﬁcation
of the kind just outlined, particularly in bodies of mathematical thought that are new and rapidly developing.
Some ancient cultures, the Egyptians for example, had
methods for multiplication and division, but no justiﬁcation of these methods has survived and it does not
seem especially likely that formal justiﬁcation existed.
The methods were probably accepted simply because
they worked, rather than because there was a thorough
argument justifying them.
By the middle of the seventeenth century, European
mathematical writers who were engaged in research
were well-acquainted with the model of rigorous mathematical argument supplied by euclid’s [VI.2] Elements. The kind of deductive, or synthetic, argument
we illustrated earlier would have been described as a
proof more geometrico—in the geometrical way. While
Euclid’s arguments, assumptions, and deﬁnitions are
not wholly rigorous by today’s standards, the basic idea
was clear: one proceeds from clear deﬁnitions and generally agreed basic ideas (such as that the whole is
greater than the part) to deduce theorems (also called

II. The Origins of Modern Mathematics
propositions) in a step-by-step manner, not bringing
in anything extra (either on the sly or unintentionally).
This classical model of geometric argument was widely
used in reasoning about whole numbers (for example
by fermat [VI.12]), in analytic geometry (descartes
[VI.11]), and in mechanics (Galileo).
This article is about rigor in analysis, a term which
itself has had a shifting meaning. Coming from ancient
origins, by around 1600 the term was used to refer to
mathematics in which one worked with an unknown
(something we would now write as x) to do a calculation
or ﬁnd a length. In other words, it was closely related to
algebra, though the notion was imported into geometry
by Descartes and others. However, over the course of
the eighteenth century the word came to be associated
with the calculus, which was the principal area of application of analytic techniques. When we talk about rigor
in analysis it is the rigorous theory of the mathematics
associated with diﬀerential and integral calculus that
we are principally discussing. In the third quarter of
the seventeenth century rival methods for the diﬀerential and integral calculus were devised by newton
[VI.14] and leibniz [VI.15], who thereby synthesized
and extended a considerable amount of earlier work
concerned with tangents and normals to curves and
with the areas of regions bounded by curves. The techniques were highly successful, and were extended readily in a variety of directions, most notably in mechanics
and in diﬀerential equations.
The key common feature of this research was the use
of inﬁnities: in some sense, it involved devising methods for combining inﬁnitely many inﬁnitely small quantities to get a ﬁnite answer. For example, suppose we
divide the circumference of a circle into a (large) number of equal parts by marking oﬀ points at equal distances, then joining the points and creating triangles by
joining the points to the center. Adding up the areas of
the triangles approximates the circular area, and the
more points we use the better the approximation. If
we imagine inﬁnitely many of these inscribed triangles,
the area of each will be “inﬁnitely small” or inﬁnitesimal. But because the total involves adding up inﬁnitely
many of them, it may be that we get a ﬁnite positive total (rather than just 0, from adding up inﬁnitely
many zeros, or an inﬁnite number, as we would get
if we added the same ﬁnite number to itself inﬁnitely
many times). Many techniques for doing such calculations were devised, though the interpretation of what
was taking place varied. Were the inﬁnities involved
“real” or merely “potential”? If something is “really”

II.5.

The Development of Rigor in Mathematical Analysis

inﬁnitesimal, is it just zero? Aristotelian writers had
abhorred actual inﬁnities, and complaints about them
were common at the time.
Newton, Leibniz, and their immediate followers provided mathematical arguments to justify these methods. However, the introduction of techniques involving reasoning with inﬁnitely small objects, limiting
processes, inﬁnite sums, and so forth meant that the
founders of the calculus were exploring new ground
in their arguments, and the comprehensibility of these
arguments was frequently compromised by vague terminology or by the drawing of one conclusion when
another might seem to follow equally well. The objects
they were discussing included inﬁnitesimals (quantities
inﬁnitely smaller than those we experience directly),
ratios of vanishingly small quantities (i.e., fractions
in, or approaching, the form 0/0), and ﬁnite sums of
inﬁnitely many positive terms. Taylor series representations, in particular, provoked a variety of questions.
A function may be written as a series in such a way
that the series, when viewed as a function, will have, at
a given point x = a, the same value as the function, the
same rate of change (or ﬁrst derivative), and the same
higher-order derivatives to arbitrary order:
f (x) = f (a) + f (a)(x − a) + 12 f (a)(x − a)2 + · · · .
For example, sin x = x − x 3 /3! + x 5 /5! + · · · , a fact
already known to Newton though such series are now
named after Newton’s disciple brook taylor [VI.16].
One problem with early arguments was that the
terms being discussed were used in diﬀerent ways by
diﬀerent writers. Other problems arose from this lack
of clarity, since it concealed a variety of issues. Perhaps the most important of these was that an argument
could fail to work in one context, even though a very
similar argument worked perfectly well in another. In
time, this led to serious problems in extending analysis.
Eventually, analysis became fully rigorous and these
diﬃculties were solved, but the process was a long
one and it was complete only by the beginning of the
twentieth century.
Let us consider some examples of the kinds of difﬁculties that arose from the very beginning, using a
result of Leibniz. Suppose we have two variables, u
and v, each of which changes when another variable,
x, changes. An inﬁnitesimal change in x is denoted dx,
the diﬀerential of x. The diﬀerential is an inﬁnitesimal
quantity, thought of as a geometrical magnitude, such
as a length, for example. This was imagined to be combined or compared with other magnitudes in the usual

119
ways (two lengths can be added, have a ratio, and so on).
When x changes to x + dx, u and v change to u + du
and v + dv, respectively. Leibniz concluded that the
product uv would then change to uv + u dv + v du,
so that d(uv) = u dv + v du. His argument is, roughly,
that d(uv) = (u + du)(v + dv) − uv. Expanding the
right-hand side using regular algebra and then simplifying gives u dv + v du + du dv. But the term du dv
is a second-order inﬁnitesimal, vanishingly small compared with the ﬁrst-order diﬀerentials, and is thus
treated as equal to 0. Indeed, one aspect of the problems is that there appears to be an inconsistency in the
way that inﬁnitesimals are treated. For instance, if you
want to work out the derivative of y = x 2 , the calculation corresponding to the one just given (expanding
(x + dx)2 , and so on) shows that dy/dx = 2x + dx. We
then treat the dx on the right-hand side as zero, but
the one on the left-hand side seems as though it ought
to be an inﬁnitesimal nonzero quantity, since otherwise
we could not divide by it. So is it zero or not? And if not,
how do we get around the apparent inconsistency?
At a slightly more technical level, the calculus required mathematicians to deal repeatedly with the
“ultimate” values of ratios of the form dy/dx when
the quantities in both numerator and denominator
approach or actually reach 0. This phrasing uses, once
again, the diﬀerential notation of Leibniz, though the
same issues arose for Newton with a slightly diﬀerent
notational and conceptual approach. Newton generally
spoke of variables as depending on time, and he sought
(for example) the values approached when “evanescent increments”—vanishingly small time intervals—
are considered. One long-standing set of confusions
arose precisely from this idea that variable quantities
were in the process of changing, whether with time
or with changes in the value of another variable. This
means that we talk about values of a variable approaching a given value, but without a clear idea of what this
“approach” actually is.

2

Eighteenth-Century Approaches
and Critiques

Of course, had the calculus not turned out to be an
enormously fruitful ﬁeld of endeavor, no one would
have bothered to criticize it. But the methods of Newton and Leibniz were widely adopted for the solution of
problems that had interested earlier generations (notably tangent and area problems) and for the posing and
solution of problems that these techniques suddenly

120

II. The Origins of Modern Mathematics

made far more accessible. Problems of areas, maxima
and minima, the formulation and solution of diﬀerential equations to describe the shape of hanging chains
or the positions of points on vibrating strings, applications to celestial mechanics, the investigation of problems having to do with the properties of functions
(thought of for the most part as analytic expressions
involving variable quantities)—all these ﬁelds and more
were developed over the course of the eighteenth century by mathematicians such as Taylor, Johann and
Daniel Bernoulli, Euler, d’alembert [VI.20], Lagrange,
and many others. These people employed many virtuoso arguments of suspect validity. Operations with
divergent series, the use of imaginary numbers, and
manipulations involving actual inﬁnities were used
eﬀectively in the hands of the most capable of these
writers. However, the methods could not always be
explained to the less capable, and thus certain results
were not reliably reproducible—a very odd state for
mathematics from today’s standpoint. To do Euler’s
calculations, one needed to be Euler. This was a situation that persisted well into the following century.
Speciﬁc controversies often highlighted issues that
we now see as a result of foundational confusion. In the
case of inﬁnite series, for example, there was confusion
about the domain of validity of formal expressions.
Consider the series
1 − 1 + 1 − 1 + 1 − 1 + 1 − ··· .
In today’s usual elementary deﬁnition (due to cauchy
[VI.29] around 1820) we would now consider this series
to be divergent because the sequence of partial sums
1, 0, 1, 0, . . . does not tend to a limit. But in fact there
was some controversy about the actual meaning of such
expressions. Euler and Nicolaus Bernoulli, for example,
discussed the potential distinction between the sum
and the value of an inﬁnite sum, Bernoulli arguing that
something like 1−2+6−24+120+· · · has no sum but
that this algebraic expression does constitute a value.
Whatever may have been meant by this, Euler defended
the notion that the sum of the series is the value of
the ﬁnite expression that gives rise to the series. In
his 1755 Institutiones Calculi Diﬀerentialis, he gives the
example of 1 − x + x 2 − x 3 + · · · , which comes from
1/(1 + x), and later defended the view that this meant
1
that 1 − 1 + 1 − 1 + · · · = 2 . His view was not universally accepted. Similar controversies arose in considering how to extend the values of functions outside
their usual domain, for example with the logarithms of
negative numbers.

Probably the most famous eighteenth-century critique of the language and methods of eighteenth-century analysis is due to the philosopher George Berkeley (1685–1753). Berkeley’s motto, “To be is to be
perceived,” expresses his idealist stance, which was
coupled with a strong view that the abstraction of
individual qualities, for the purposes of philosophical discussion, is impossible. The objects of philosophy should thus be things that are perceived, and
perceived in their entirety. The impossibility of perceiving inﬁnitesimally small objects, combined with
their manifestly abstracted nature, led him to attack
their use in his 1734 treatise The Analyst: Or, a Discourse Addressed to an Inﬁdel Mathematician. Referring
sarcastically in 1734 to inﬁnitesimals as the “ghosts
of departed quantities,” Berkeley argued that neglecting some quantity, no matter how small, was inappropriate in mathematical argument. He quoted Newton in this regard, to the eﬀect that “in mathematical
matters, errors are to be condemned, no matter how
small.” Berkeley continued, saying that “[n]othing but
the obscurity of the subject” could have induced Newton to impose this kind of reasoning on his followers. Such remarks, while they apparently did not dissuade those enamored of the methods, contributed to a
sentiment that aspects of the calculus required deeper
explanation. Writers such as Euler, d’Alembert, Lazare
Carnot, and others attempted to address foundational
criticisms by clarifying what diﬀerentials were, and
gave a variety of arguments to justify the operations
of the calculus.
2.1

Euler

Euler contributed to the general development of analysis more than any other individual in the eighteenth
century, and his approaches to justifying his arguments
were enormously inﬂuential even after his death, owing
to the success and wide use of his important textbooks.
Euler’s reasoning is sometimes regarded as rather careless since he operated rather freely with the notation of
the calculus, and many of his arguments are certainly
deﬁcient by later standards. This is particularly true
of arguments involving inﬁnite series and products. A
typical example is provided by an early version of his
proof that
∞

1
π2
=
.
2
n
6
n=1
His method is as follows. Using the known series expansion for sin x he considered the zeros of
√
x
x2
x3
sin x
√
=1−
+
−
+ ··· .
x
3!
5!
7!

II.5.

The Development of Rigor in Mathematical Analysis

These lie at π 2 , (2π )2 , (3π )2 , . . . . Applying (without argument) the factor theorem for ﬁnite algebraic
equations he expressed this equation as
√
x
x
x
sin x
√
= 1− 2
1−
1−
··· .
x
π
4π 2
9π 2
Now, it can be seen that the coeﬃcient of x in the inﬁnite sum, − 16 , should equal the negative of the sum
of the coeﬃcients of x in the product. Euler apparently concluded this by imagining multiplying out the
inﬁnitely many terms and selecting the 1 from all but
one of them. This gives
1
1
1
1
+
+
+ ··· = ,
π2
4π 2
9π 2
6
and multiplying both sides by π 2 gives the required
sum.
We now think of this approach as having several
problems. The product of the inﬁnitely many terms
may or may not represent a ﬁnite value, and today
we would specify conditions for when it does. Also,
applying a result about (ﬁnite) polynomials to (inﬁnite) power series is a step that requires justiﬁcation.
Euler himself was to provide alternative arguments
for this result later in his life. But the fact that he
may have known counterexamples—situations in which
such usages would not work—was not, for him, a decisive obstacle. This view, in which one reasoned in a
generic situation that might admit a few exceptions,
was common at his time, and it was only in the late
nineteenth century that a concerted eﬀort was made to
state the results of analysis in ways that set out precisely the conditions under which the theorems would
hold.
Euler did not dwell on the interpretation of inﬁnite
sums or inﬁnitesimals. Sometimes he was happy to
regard diﬀerentials as actually equal to zero, and to
derive the meaning of a ratio of diﬀerentials from the
context of the problem:
An inﬁnitely small quantity is nothing but a vanishing quantity and therefore will be actually equal to
0. . . . Hence there are not so many mysteries hidden in
this concept as there are usually believed to be. These
supposed mysteries have rendered the calculus of the
inﬁnitely small quite suspect to many people.

This statement, from the Institutiones Calculi Diﬀerentialis of 1755, was followed by a discussion of proportions in which one of the ratios is 0/0, and a justiﬁcation of the fact that diﬀerentials may be neglected
in calculations with ordinary numbers. This accurately

121
describes a good deal of his practice—when he worked
with diﬀerential equations, for example.
Controversial matters did arise, however, and debates about deﬁnitions were not unusual. The bestknown example involves discussions connected with
the so-called vibrating string problem, which involved
Euler, d’Alembert, and Daniel Bernoulli. These were
closely connected with the deﬁnition of functions
[I.2 §2.2], and the question of which functions studied
by analysis actually could be represented by series (in
particular trigonometric series). The idea that a curve
of arbitrary shape could serve as an initial position for
a vibrating string extended the idea of function, and
the work of fourier [VI.25] in the early nineteenth
century made such functions analytically accessible. In
this context, functions with broken graphs (a kind of
discontinuous function) came under inspection. Later,
how to deal with such functions would be a decisive
issue for the foundations of analysis, as the more “natural” objects associated with algebraic operations and
trigonometry gave way to the more general modern
concept of function.
2.2

Responses from the Late Eighteenth Century

One signiﬁcant response to Berkeley in Britain was that
of Colin Maclaurin (1698–1746), whose 1742 textbook
A Treatise of Fluxions attempted to clarify the foundations of the calculus and do away with the idea
of inﬁnitely small quantities. Maclaurin, a leading ﬁgure of the Scottish Enlightenment of the mid eighteenth century, was the most distinguished British
mathematician of his time and an ardent proponent
of Newton’s methods. His work, unlike that of many
of his British contemporaries, was read with interest
on the Continent, especially his elaborations of Newtonian celestial mechanics. Maclaurin attempted to base
his reasoning on the notion of the limits of what he
termed “assignable” ﬁnite quantities. Maclaurin’s work
is famously obscure, though it did provide examples of
calculating the limits of ratios. Perhaps his most important contribution to the clariﬁcation of the foundations
of analysis was his inﬂuence on d’Alembert.
D’Alembert had read both Berkeley and Maclaurin
and followed them in rejecting inﬁnitesimals as real
quantities. While exploring the idea of a diﬀerential as
a limit, he also attempted to reconcile his idea with the
idea that inﬁnitesimals may be consistently regarded
as being actually zero, perhaps in a nod to Euler’s
view. The main exposition of d’Alembert’s views may

122

II. The Origins of Modern Mathematics

be found in the Encyclopédie, in the articles on differentials (published in 1754) and on limits (1765).
D’Alembert argued for the importance of geometric
rather than algebraic limits. His meaning seems to have
been that the quantities being investigated should not
be treated merely formally, by substitution and simpliﬁcation. Rather, a limit should be understood as the
limit of a length (or collection of lengths), area, or other
dimensioned quantity, in much the way that a circle
may be seen as a limit of inscribed polygons. His aim
seems primarily to have been to establish the reality
of the objects described by existing algorithms, since
the actual calculations he employs are carried out with
diﬀerentials.
2.2.1

Lagrange

In the course of the eighteenth century, the diﬀerential
and the integral calculus gradually distinguished themselves as a set of methods distinct from their applications in mechanics and physics. At the same time, the
primary focus of the methods moved away from geometry, so that in work of the second half of the eighteenth
century we increasingly see calculus treated as “algebraic analysis” of “analytic functions.” The term “analytic” was used in a variety of senses. For many writers,
such as Euler, it merely referred to a function (that is, a
relationship between variable quantities) that is given
by a single expression of the type used in analysis.
Lagrange provided a foundation for the calculus that
was indebted to this algebraic viewpoint. Lagrange
concentrated on power-series expansions as the basic
entity of analysis, and through his work the term analytic function evolved toward its more recent meaning connected with the existence of a convergent Taylor series representation. His approach reached a full
expression in his Théorie des Fonctions Analytiques of
1797. This was a version of his lectures at the École
Polytechnique, a new institution for the elite training
of military engineers in revolutionary France. Lagrange
assumed that a function must necessarily be expressible as an inﬁnite series of algebraic functions, basing this argument on the existence of expansions for
known functions. He ﬁrst sought to show that “in general” no negative or fractional powers would appear
in the expansion, and from this he obtained a powerseries representation. His arguments here are surprising, and somewhat ad hoc, and I use an example given
by Fraser (1987). The slightly strange notation is based
on that of Lagrange. Suppose that one seeks an expan√
sion of f (x) = x + i in powers of i. In general, only

integer powers will be involved. Terms of the form im/n
do not make sense, says Lagrange, since the expression
√
of the function x + i is only two-valued, while im/n
has n values. Hence the series

√
x + i = x + pi + qi2 + · · · + tik + · · ·
√
obtains its two values from the term x, and all other
powers must be integral. With fractional exponents set
aside, Lagrange argued that f (x +i) = f (x)+ia P (x, i),
with P ﬁnite for i = 0. Successive application of this
result gave him the expansion
f (x + i) = f (x) + pi + qi2 + r i3 + · · · ,
where i was a small increment. The number p depends
on x, so Lagrange deﬁned a derived function f (x) =
p(x). The French term dérivée is the origin of the term
derivative, and in Lagrange’s language f is the “primitive” of this derived function. Similar arguments can
be made to relate the higher coeﬃcients to the higher
derivatives in the usual Taylor formula.
This approach, which seems oddly circular to modern eyes, relied on the eighteenth-century distinction
between the “algebraic” inﬁnite process of the series
expansion on the one hand, and the use of diﬀerentials on the other. Lagrange did not see the original
series expansion as based on the limit process. With
the renewed emphasis on limits and modern deﬁnitions developed by Cauchy, this approach was soon to
be regarded as untenable.

3
3.1

The First Half of the Nineteenth Century
Cauchy

Many writers contributed to discussions on rigor in
analysis in the ﬁrst decades of the nineteenth century.
It was Cauchy who was to revive the limit approach to
greatest eﬀect. His aim was pedagogical, and his ideas
were probably worked out in the context of preparing
his introductory lectures for the École Polytechnique at
the beginning of the 1820s. Although the students were
the best in France in scholarly ability, many found the
approach too diﬃcult. As a result, while Cauchy himself continued to use his methods, other instructors
held on to older approaches using inﬁnitesimals, which
they found more intuitively accessible for the students
as well as better adapted to the solution of problems
in elementary mechanics. Cauchy’s self-imposed exile
from Paris in the 1830s further limited the impact of
his approach, which was initially taken up only by a
few of his students.

II.5.

The Development of Rigor in Mathematical Analysis

Nonetheless, Cauchy’s deﬁnitions of limit, of continuity, and of the derivative gradually came into general use in France, and were inﬂuential elsewhere as
well, especially in Italy. Moreover, his methods of using
these deﬁnitions in proofs, and particularly his use of
mean value theorems in various forms, moved analysis
from a collection of symbolic manipulations of quantities with special properties toward the science of argument about inﬁnite processes using close estimation
via the manipulation of inequalities.
In some respects, Cauchy’s greatest contribution lay
in his clear deﬁnitions. For earlier writers, the sum
of an inﬁnite series was a somewhat vague notion,
sometimes interpreted by a kind of convergence argument (as with the sum of a geometric series such as
∞
−n ) and sometimes as the value of the function
n=0 2
from which the series was derived (as Euler, for example, often regarded it). Cauchy revised the deﬁnition to
state that the sum of an inﬁnite series was the limit
of the sequence of partial sums. This provided a uniﬁed approach for series of numbers and series of functions, an important step in the move to base calculus
and analysis on ideas about real numbers. This trend,
eventually dominant, is often referred to as the “arithmetization of analysis.” Similarly, a continuous function is one for which “an inﬁnitely small increase of
the variable produces an inﬁnitely small increase of the
function itself” (Cauchy 1821, pp. 34–35).
As we see from the example just given, Cauchy did
not shy away from inﬁnitely small quantities, nor did
he analyze this notion further. The limit of a variable
quantity is deﬁned in a way that we would now regard
as conversational, or heuristic:
When the values that are successively assigned to a
given variable approach a ﬁxed value indeﬁnitely, in
such a way that it ends up diﬀering from it as little as
one wishes, this latter value is called the limit of all the
others. Thus, for example, an irrational number is the
limit of the various fractions that provide values that
are closer and closer to it.
Cauchy (1821, p. 4)

These ideas were not completely rigorous by modern
standards, but he was able to use them to provide a
uniﬁed foundation for the basic processes of analysis.
This use of inﬁnitely small quantities appears, for
example, in his deﬁnition of a continuous function. To
paraphrase his deﬁnition, suppose that a function f (x)
is single-valued on some ﬁnite interval of the real line,
and choose any value x0 inside the interval. If the value

123
of x0 is increased to x0 + a, the function also changes
by the amount f (x0 + a) − f (x0 ). Cauchy says that
the function f is continuous for this interval if, for
each value of x0 in that interval, the numerical value of
the diﬀerence f (x0 + a) − f (x0 ) decreases indeﬁnitely
to 0 with a. In other words, Cauchy deﬁnes continuity as a property on an interval rather than at a point,
in essence by saying that on that interval inﬁnitely
small changes in the argument produce inﬁnitely small
changes in the function value. Cauchy appears to have
considered continuity to be a property of a function on
an interval.
This deﬁnition emphasizes the importance of jumps
in the value of the function for the understanding of
its properties, something that Cauchy had encountered
early in his career when discussing the fundamental
theorem of calculus [I.3 §5.5]. In his 1814 memoir
on deﬁnite integrals, Cauchy stated:
If the function φ(z) increases or decreases in a continuous manner between z = b and z = b , the
b
value of the integral [ b φ (z) dz] will ordinarily be
represented by φ(b ) − φ(b ). But if … the function
passes suddenly from one value to another sensibly
diﬀerent … the ordinary value of the integral must be
diminished.
Oeuvres (volume 1, pp. 402–3)

In his lectures, Cauchy assumed continuity when
deﬁning the deﬁnite integral. He considered ﬁrst of all
a division of the interval of integration into a ﬁnite
number of subintervals on which the function is either
increasing or decreasing. (This is not possible for all
functions, but this appeared not to concern Cauchy.)
He then deﬁned the deﬁnite integral as the limit of the
sum S = (x1 − x0 )f (x0 ) + (x2 − x1 )f (x1 ) + · · · +
(X − xn−1 )f (xn−1 ) as the number n becomes very
large. Cauchy gives a detailed argument for the existence of this limit, using his theorem of the mean and
the fact of continuity.
Versions of the main subjects of Cauchy’s lectures
were published in 1821 and 1823. Every student at the
École Polytechnique would have been aware of them
subsequently, and many would have used them explicitly. They were joined in 1841 by a version of the course
elaborated by Cauchy’s associate, the Abbé Moigno.
They were referred to frequently in France and the definitions employed by Cauchy became standard there.
We also know that the lectures were studied by others, notably by abel [VI.33] and dirichlet [VI.36], who
spent time in Paris in the 1820s, and by riemann
[VI.49].

124

II. The Origins of Modern Mathematics

Cauchy’s movement away from the formal approach
of Lagrange rejected the “vagueness of algebra.” Although he was clearly guided by intuition (both geometric and otherwise), he was well aware that intuition could be misleading, and produced examples to
show the value of adhering to precise deﬁnitions. One
famous example, the function that takes the value
2
e−1/x when x ≠ 0 and zero when x = 0, is diﬀerentiable inﬁnitely many times, yet it does not yield
a Taylor series that converges to the function at the
origin. Despite this example, which he mentioned in
his lectures, Cauchy was not a specialist in counterexamples, and in fact the trend toward producing
counterexamples for the purpose of clarifying deﬁnitions was a later development.
Abel famously drew attention to an error in Cauchy’s
work: his statement that a convergent series of continuous functions has a continuous sum. For this to be
true, the series must be uniformly convergent, and in
1826 Abel gave as a counterexample the series
∞

k=1

(−1)k+1

sin kx
,
k

which is discontinuous at odd multiples of π . Cauchy
was led to make this distinction only much later, after
the phenomenon had been identiﬁed by several writers.
Historians have written extensively about this apparent
error; one inﬂuential account, due to Bottazzini, proposes that for various reasons Cauchy would not have
found Abel’s example telling, even if he had known of
it at the time (this account appears in Bottazzini (1990,
p. LXXXV)).
Before leaving the time of Cauchy, we should note
the related independent activity of bolzano [VI.28].
Bolzano, a Bohemian priest and professor whose ideas
were not widely disseminated at the time, investigated
the foundations of the calculus extensively. In 1817,
for example, he gave what he termed a “purely analytic proof of the theorem that between any two values
that possess opposite signs, at least one real root of
the equation exists”: the intermediate value theorem.
Bolzano also studied inﬁnite sets: what is now called
the Bolzano–Weierstrass theorem states that for every
bounded inﬁnite set there is at least one point having
the property that any disk about that point contains
inﬁnitely many points of the set. Such “limit points”
were studied independently by weierstrass [VI.44].
By the 1870s, Bolzano’s work became more broadly
known.

3.2

Riemann, the Integral, and Counterexamples

Riemann is indelibly associated with the foundations of
analysis because of the Riemann integral, which is part
of every calculus course. Despite this, he was not always
driven by issues involving rigor. Indeed he remains a
standard example of the fruitfulness of nonrigorous
intuitive invention. There are many points in Riemann’s
work at which issues about rigor arise naturally, and
the wide interest in his innovations did much to direct
the attention of researchers to making these insights
precise.
Riemann’s deﬁnition of the deﬁnite integral was presented in his 1854 Habilitationschrift —the “second thesis,” which qualiﬁed him to lecture at a university for
fees. He generalized Cauchy’s notion to functions that
are not necessarily continuous. He did this as part of an
investigation of fourier series [III.27] expansions. The
extensive theory of such series was devised by Fourier
in 1807 but not published until the 1820s. A Fourier
series represents a function in the form
∞


f (x) = a0 +

(an cos(nx) + bn sin(nx))

n=1

on a ﬁnite interval.
The immediate inspiration for Riemann’s work was
dirichlet [VI.36], who had corrected and developed
earlier faulty work by Cauchy on the question of when
and whether the Fourier series expansion of a function
converges to the function from which it is derived. In
1829 Dirichlet had succeeded in proving such convergence for a function with period 2π that is integrable
on an interval of that length, does not possess inﬁnitely
many maxima and minima there, and at jump discontinuities takes on the average value between the two
limiting values on each side. As Riemann noted, following his professor Dirichlet, “this subject stands in the
closest connection to the principles of inﬁnitesimal calculus, and can therefore serve to bring these to greater
clarity and deﬁniteness” (Riemann 1854, p. 238). Riemann sought to extend Dirichlet’s investigations to further cases, and was thus led to investigate in detail
each of the conditions given by Dirichlet. Accordingly,
he generalized the deﬁnition of a deﬁnite integral as
follows:
We take between a and b an increasing sequence of
values x1 , x2 , . . . , xn−1 , and for brevity designate x1 −a
by δ1 , x2 − x1 by δ2 , . . . , b − xn−1 by δn and by  a

II.5.

The Development of Rigor in Mathematical Analysis

positive proper fraction. Then the value of the sum
S = δ1 f (a + 1 δ1 ) + δ2 f (x1 + 2 δ2 )
+ δ3 f (x2 + 3 δ3 ) + · · · + δn f (xn−1 + n δn )
depends on the choice of the intervals δ and the quantities . If it has the property that it approaches inﬁnitely
closely a ﬁxed limit A no matter how the δ and  are
chosen, as δ becomes inﬁnitely small, then we call this
b
value a f (x) dx.

In connection with this deﬁnition of the integral, and
in part to show its power, Riemann provided an example of a function that is discontinuous in any interval, yet can be integrated. The integral thus has points
of nondiﬀerentiability on each interval. Riemann’s definition rendered problematic the inverse relationship
between diﬀerentiation and integration, and his example brought this problem out clearly. The role of such
“pathological” counterexamples in pushing the development of rigor, already apparent in Cauchy’s work,
intensiﬁed greatly around this time.
Riemann’s deﬁnition was published only in 1867, following his death; an expository version due to Gaston
Darboux appeared in French in 1873. The popularization and extension of Riemann’s approach went hand
in hand with the increasing appreciation of the importance of rigor associated with the Weierstrass school,
discussed below. Riemann’s approach focused attention on sets of points of discontinuities, and thus were
seminal for cantor’s [VI.54] investigations into point
sets in the 1870s and afterwards.
The use of the Dirichlet principle serves as a further example of the way in which Riemann’s work drew
attention to problems in the foundations of analysis.
In connection with his research into complex analysis, Riemann was led to investigate solutions to the
so-called Dirichlet problem: given a function g, deﬁned
on the boundary of a closed region in the plane, does
there exist a function f that satisﬁes the laplace
partial differential equation [I.3 §5.4] in the interior and takes the same values as g on the boundary? Riemann asserted that the answer was yes. To
demonstrate this, he reduced the question to proving the existence of a function that minimizes a certain integral over the region, and argued on physical
grounds that such a minimizing function must always
exist. Even before Riemann’s death his assertion was
questioned by weierstrass [VI.44], who published a
counterexample in 1870. This led to attempts to reformulate Riemann’s results and prove them by other

125
means, and ultimately to a rehabilitation of the Dirichlet principle through the provision of precise and broad
hypotheses for its validity, which were expressed by
hilbert [VI.63] in 1900.

4

Weierstrass and His School

Weierstrass had a passion for mathematics as a student
at Bonn and Münster, but his student career was very
uneven. He spent the years from 1840 to 1856 as a high
school teacher, undertaking research independently
but at ﬁrst publishing obscurely. Papers from 1854
onward in Journal für die reine und angewandte Mathematik (otherwise known as Crelle’s Journal) attracted
wide attention to his talent, and he obtained a professorship in Berlin in 1856. Weierstrass began to lecture
regularly on mathematical analysis, and his approach
to the subject developed into a series of four courses
of lectures given cyclically between the early 1860s
and 1890. The lectures evolved over time and were
attended by a large number of important mathematical researchers. They also indirectly inﬂuenced many
others through the circulation of unpublished notes.
This circle included R. Lipschitz, P. du Bois-Reymond,
H. A. Schwarz, O. Hölder, Cantor, L. Koenigsberger, G.
Mittag-Leﬄer, kovalevskaya [VI.59], and L. Fuchs, to
name only some of the most important. Through their
use of Weierstrassian approaches in their own research,
and their espousal of his ideas in their own lectures,
these approaches became widely used well before the
eventual publication of a version of his lectures late in
his life. The account that follows is based largely on
the 1878 version of the lectures. His approach was also
inﬂuential outside Germany: parts of it were absorbed
in France in the lectures of hermite [VI.47] and jordan
[VI.52], for example.
Weierstrass’s approach builds on that of Cauchy
(though the detailed relationship between the two bodies of work has never been fully examined). The two
overarching themes of Weierstrass’s approach are, on
the one hand, the banning of the idea of motion, or
changing values of a variable, from limit processes, and,
on the other, the representation of functions, notably
of a complex variable. The two are intimately linked.
Essential to the motion-free deﬁnition of a limit is
Weierstrass’s nascent investigation of what we would
now call the topology of the real line or complex plane,
with the idea of a limit point, and a clear distinction between local and global behavior. The central
objects of study for Weierstrass are functions (of one

126

II. The Origins of Modern Mathematics

or more real or complex variable quantities), but it
should be borne in mind that set theory is not involved,
so that functions are not to be thought of as sets of
ordered pairs.
The lectures begin with a now-familiar subject: the
development of rational, negative, and real numbers
from the integers. For example, negative numbers are
deﬁned operationally by making the integers closed
under the operation of subtraction. He attempted a uniﬁed approach to the deﬁnition of rational and irrational
numbers which involved unit fractions and decimal
expansions and now seems somewhat murky. Weierstrass’s deﬁnition of the real numbers appears unsatisfactory to modern eyes, but the general path of arithmetization of analysis was established by this approach. In
parallel to the development of number systems, he also
developed diﬀerent classes of functions, building them
up from rational functions by using power-series representations. Thus, in Weierstrass’s approach, a polynomial (called an integer rational function) is generalized to a “function of integer character,” which means
a function with a convergent power-series expansion
everywhere. The Weierstrass factorization theorem asserts that any such function may be written as a (possibly inﬁnite) product of certain “prime” functions and
exponential functions with polynomial exponents of a
certain type.
The limit deﬁnition given by Weierstrass has thoroughly modern features:
That a variable quantity x becomes inﬁnitely small
simultaneously with another quantity y means: “After
the assumption of an arbitrarily small quantity  a
bound δ for x may be found, such that for every value
of x for which |x| < δ, the corresponding value of |y|
will be less than .”
Weierstrass (1988, p. 57)

Weierstrass immediately used this deﬁnition to give
a proof of continuity for rational functions of several variables, using an argument that could appear
in a textbook today. The former notions of variables
tending to given values were replaced by quantiﬁed
statements about linked inequalities. The framing of
hypotheses in terms of inequalities became a guiding
motif in the work of Weierstrass’s school: here we mention in passing the Lipschitz and Hölder conditions in
the existence theory for diﬀerential equations. The clarity that this language gave to problems involving the
interchange of limits, for example, meant that previously intractable problems could now be handled in

a routine way by those inculcated in the Weierstrass
approach.
The fact that general functions were built from rational functions using series expansions gave the latter a key role in Weierstrass’s work, and as early as
1841 he had identiﬁed the importance of uniform convergence. The distinction between uniform and pointwise convergence was made very clearly in his lectures. A series converges, as it does for Cauchy, if
its sequence of partial sums converges, though now
the convergence is phrased in the following terms: the

series fn (x) converges to s0 at x = x0 if, given an
arbitrary positive , there is an integer N such that
|s0 − (f1 (x0 ) + f2 (x0 ) + · · · + fn (x0 ))| <  for every
n > N. The convergence is uniform on a domain of the
variable if the same N will work for that  value for all
x in the domain. Uniform convergence guarantees continuity of the sum, since these are series of rational,
hence continuous, functions. From this point of view,
then, uniform convergence is important well beyond
the context of trigonometric series (important though
those may be). Indeed, it is a central tool of the entire
theory of functions.
Weierstrass’s role as a critic of rigor in the work of
others, notably Riemann, has already been noted. More
than any other leading ﬁgure, he generated counterexamples to illustrate diﬃculties with received notions
and to distinguish between diﬀerent kinds of analytical behavior. One of his best-known examples was of
an everywhere-continuous but nowhere-diﬀerentiable

function, namely f (x) = bn cos(an x), which is uniformly convergent for b < 1 but fails to be diﬀerentiable at any x if ab > 1 + 32 π . Similarly he constructed functions for which the Dirichlet principle
fails, examples of sets constituting “natural boundaries,” that is, obstacles to continuing series expansions into larger domains, and so forth. The careful
distinctions he encouraged, and the very procedure
of seeking pathological rather than typical examples,
threw the spotlight on the precision of hypotheses in
analysis to an unprecedented degree. From the 1880s,
with the maturity of this program, analysis no longer
dealt with generic cases and looked instead for absolutely precise statements in a way that has for the most
part endured to the present. This was also to become
a pattern and an imperative in other areas of mathematics, though sometimes the passage from reasoning
from generic examples to fully expressed hypotheses
and deﬁnitions took decades. (Algebraic geometry provides a famous example, one in which reasoning with

II.5.

The Development of Rigor in Mathematical Analysis

generic cases lasted until the 1920s.) In this sense the
form of rigorous argument and exposition espoused by
Weierstrass and his school was to become a pattern for
mathematics generally.
4.1

The Aftermath of Weierstrass and Riemann

Analysis became the model subdiscipline for rigor for
a variety of reasons. Of course, analysis was important
for the sheer volume and range of application of its
results. Not everyone agreed with the precise way in
which Weierstrass approached foundational questions
(through series, rational functions, and so on). Indeed,
Riemann’s more geometric approach had also attracted
followers, if not exactly a school, and the insights
his approach aﬀorded were enthusiastically embraced.
However, any subsequent discussion had to take place
at a level of rigor comparable to that which Weierstrass
had attained. While approaches to the foundations of
analysis were to vary, the idea that limits should be rigorously handled in much the way that Weierstrass did
was not to alter. Among the remaining central issues
for rigor was the deﬁnition of the number systems.
For the real numbers, probably the most successful deﬁnition (in terms of its later use) was provided
by dedekind [VI.50]. Dedekind, like Weierstrass, took
the integers as fundamental, and extended them to the
rationals, noting that the algebraic properties satisﬁed
by the latter are those satisﬁed by what we now call a
ﬁeld [I.3 §2.2]. (This idea is also Dedekind’s.) He then
showed that the rational numbers satisfy a trichotomy
law. That is, each rational number x divides the entire
collection into three parts: x itself, rational numbers
greater than x, and rational numbers less than x. He
also showed that the rationals greater and less than a
given number extend to inﬁnity, and that any rational
corresponds to a distinct point on the number line.
However, he also observed that along that line there
are inﬁnitely many points that do not correspond to
any rational. Using the idea that to every point on the
line there should correspond a number, he constructed
the remainder of the continuum (that is, the real line)
by the use of cuts. These are ordered pairs (A1 , A2 ) of
nonempty sets of rational numbers such that every element of the ﬁrst set is less than every element of the
second, and such that taken together they contain all
the rationals. Such cuts may obviously be produced by
an element x, in which case x is either the greatest element of A1 or the least element of A2 . But sometimes
A1 does not have a greatest element, or A2 a least element, and in that case we can use the cut to deﬁne a

127
new number, which is necessarily irrational. The set of
all such cuts may be shown to correspond to the points
of the number line, so that nothing is left out. A critical
reader might feel that this is begging the question, since
the idea of the number line constituting a continuum
in some way might seem to be a hidden premise.
Dedekind’s construction stimulated a good deal of
discussion, especially in Germany, about the best way
to found the real numbers. Participants included Cantor, E. Heine, and the logician frege [VI.56]. Heine
and Cantor, for example, considered real numbers as
equivalence classes of Cauchy sequences of rationals,
together with a machinery that permitted them to
deﬁne the basic arithmetical operations. A very similar approach was proposed by the French mathematician Charles Méray. Frege, by contrast, in his 1884 Die
Grundlagen der Arithmetik, sought to found the integers on logic. While his attempts to construct the reals
along these lines did not bear fruit, he had an important role in his insistence that the various constructions should not merely be mathematically functional
but should also be demonstrably free from internal
contradiction.
Despite much activity on the foundations of the
real numbers, inﬁnite sets, and other basic notions for
analysis, consensus remained elusive. For example, the
inﬂuential Berlin mathematician leopold kronecker
[VI.48] denied the existence of the reals, and held that
all true mathematics was to be based on ﬁnite sets. Like
Weierstrass, with whom he worked and whom he inﬂuenced, he emphasized the strong analogies between the
integers and the polynomials, and sought to use this
algebraic foundation to build all of mathematics. Hence
for Kronecker the entire main path of research in analysis was anathema, and he opposed it ardently. These
views were inﬂuential, both directly and indirectly, on
a number of later writers, including brouwer [VI.75],
the intuitionist school around him, and the algebraist
and number theorist Kurt Hensel.
All eﬀorts to found analysis were based in one way
or another on an underlying notion (not always made
explicit) of quantity. The foundational framework of
analysis, however, was to shift over the period from
1880 to 1910 toward the theory of sets. This had its
origin in the work of Cantor, a student of Weierstrass
who began studying discontinuities of Fourier series in
the early 1870s. Cantor became concerned about how
to distinguish between diﬀerent types of inﬁnite sets.
His proofs that the rational numbers and the algebraic
numbers are countable [III.11] while the reals are not

128
led him to a hierarchy of inﬁnite sets of diﬀerent cardinality. The importance of this discovery for analysis
was at ﬁrst not widely recognized, though in the 1880s
Mittag-Leﬄer and Hurwitz both made signiﬁcant applications of notions about derived sets (the set of limit
points of a given set) and dense or nowhere-dense sets.
Cantor gradually came to the view that set theory
could function as a foundational tool for all of mathematics. As early as 1882 he wrote that the science
of sets encompassed arithmetic, function theory, and
geometry, combining them into a “higher unity” based
on the idea of cardinality. However, this proposal was
vaguely articulated and at ﬁrst attracted no adherents. Nonetheless, sets began to ﬁnd their way into
the language of analysis, most notably through ideas
of measure [III.55] and measurability of a set. Indeed,
one important route to the absorption of analysis by
set theory was the path that sought to determine
what kind of function could “measure” a set in an
abstract sense. The work of lebesgue [VI.72] and borel
[VI.70] around 1900 on integration and measurability
tied set theory to the calculus in a very concrete and
intimate way.
A further key step in the establishment of the foundations of analysis in the early twentieth century was
a new emphasis on mathematical theories as axiomatic
structures. This received enormous impetus from the
work of Hilbert, who, beginning in the 1890s, had
sought to provide a renewed axiomatization of geometry. peano [VI.62] in Italy headed a school with similar aims. Hilbert redeﬁned the reals on these axiomatic
grounds, and his many students and associates turned
to axiomatics with enthusiasm for the clarity the approach could provide. Rather than proving the existence of speciﬁc entities such as the reals, the mathematician posits a system satisfying the fundamental
properties they possess. A real number (or whatever
object) is then deﬁned by the set of axioms provided.
As Epple has pointed out, such deﬁnitions were considered to be ontologically neutral in that they did not
provide methods for telling real numbers from other
objects, or even state whether they existed at all (Epple
2003, p. 316). Hilbert’s student Ernst Zermelo began
work on axiomatizing set theory along these lines, publishing his axioms in 1908 (see [IV.22 §3]). Problems
with set theory had emerged in the form of paradoxes,
the most famous due to russell [VI.71]: if S is the set
of all sets that do not contain themselves, then it is
not possible for S to be in S, nor can it not be in S. Zermelo’s axiomatics sought to avoid this diﬃculty, in part

II. The Origins of Modern Mathematics
by avoiding the deﬁnition of set. By 1910, weyl [VI.80]
was to refer to mathematics as the science of “∈,” or
set membership, rather than the science of quantity.
Nonetheless, Zermelo’s axioms as a foundational strategy were contested. For one thing, a consistency proof
for the axioms was lacking. Such “meaning-free” axiomatization was also contested on the grounds that it
removed intuition from the picture.
Against the complex and rapidly developing background of mathematics in the early twentieth century,
these debates took on many dimensions that have
implications well beyond the question of what constitutes rigorous argument in analysis. For the practicing
analyst, however, as well as for the teacher of basic
inﬁnitesimal calculus, these discussions are marginal
to everyday mathematical life and education, and are
treated as such. Set theory is pervasive in the language
used to describe the basic objects. Real-valued functions of one real variable are deﬁned as sets of ordered
pairs of real numbers, for example; a set-theoretic deﬁnition of an ordered pair was given by wiener [VI.85] in
1914, and the set-theoretic deﬁnition of functions may
be dated from that time. However, research in analysis
has been largely distinct from, and generally avoids, the
foundational issues that may remain in connection with
this vocabulary. This is not at all to say that contemporary mathematicians treat analysis in a purely formal
way. The intuitive content associated with numbers and
functions is very much a part of the way of thinking of
most mathematicians. The axioms for the reals and for
set theory form a framework to be referred to when
necessary. But the essential objects of basic analysis,
namely derivatives, integrals, series, and their existence
or convergence behaviors, are dealt with along the lines
of the early twentieth century, so that the ontological debates about the inﬁnitesimal and inﬁnite are no
longer very lively.
A coda to this story is provided by the researches of
robinson [VI.95] (1918–74) into “nonstandard” analysis, published in 1961. Robinson was an expert in model
theory: the study of the relationship between systems
of logical axioms and the structures that may satisfy
them. His diﬀerentials were obtained by adjoining to
the regular real numbers a set of “diﬀerentials,” which
satisﬁed the axioms of an ordered ﬁeld (in which there
is ordinary arithmetic like that of the real numbers)
but in addition had elements that were smaller than
1/n for every positive integer n. In the eyes of some,
this creation eliminated many of the unpleasant features of the usual way of dealing with the reals, and

II.6.

`,
      annotations: [
        createAnnotation("ii5-1", "note", "Key insight from this chapter."),
        createAnnotation("ii5-2", "note", "Important historical development discussed."),
        createAnnotation("ii5-3", "note", "Significant mathematical concept explained."),
      ],
    },
  ],
  exercises: [],
}

// II.6 The Development of the Idea of Proof - FULL VERBATIM TEXT
export const ideaOfProofFullText: FullTextChapter = {
  id: "idea-of-proof",
  title: "The Development of the Idea of Proof",
  description: "Complete chapter by Leo Corry",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 6,
  content: [
    {
      id: "ii6-full-text",
      title: "The Development of the Idea of Proof",
      type: "text",
      content: "Complete chapter by Leo Corry",
      fullText: `The Development of the Idea of Proof

realized the ultimate goal of Leibniz to have a theory of
inﬁnitesimals which was part of the same structure as
that of the reals. Despite stimulating a ﬂurry of activity,
and considerable acclaim from some quarters, Robinson’s approach has never been widely accepted as a
working foundation for analysis.
Further Reading
Bottazzini, U. 1990. Geometrical rigour and “modern analysis”: an introduction to Cauchy’s Cours d’Analyse. In
Cauchy (1821). Bologna: Editrice CLUB.
Cauchy, A.-L. 1821. Cours d’Analyse de l’École Royale Polytechnique: Première Partie—Analyse Algébrique. Paris:
L’Imprimerie Royale. (Reprinted, 1990, by Editrice CLUB,
Bologna.)
Epple, M. 2003. The end of the science of quantity: foundations of analysis, 1860–1910. In A History of Analysis, edited by H. N. Jahnke, pp. 291–323. Providence, RI:
American Mathematical Society.
Fraser, C. 1987. Joseph Louis Lagrange’s algebraic vision of
the calculus. Historia Mathematica 14:38–53.
Jahnke, H. N., ed. 2003. A History of Analysis. Providence,
RI: American Mathematical Society/London Mathematical
Society.
Riemann, G. F. B. 1854. Ueber die Darstellbarkeit einer
Function durch eine trigonometrische Reihe. Königlichen
Gesellschaft der Wissenschaften zu Göttingen 13:87–131.
Republished in Riemann’s collected works (1990): Gesammelte Mathematische Werke und Wissenschaftliche Nachlass und Nachträge, edited by R. Narasimhan, 3rd edn.,
pp. 259–97. Berlin: Springer.
Weierstrass, K. 1988. Einleitung in die Theorie der Analytischen Functionen: Vorlesung Berlin 1878, edited by
P. Ullrich. Braunschweig: Vieweg/DMV.

II.6 The Development of the
Idea of Proof
Leo Corry
1 Introduction and
Preliminary Considerations
In many respects the development of the idea of proof
is coextensive with the development of mathematics
as a whole. Looking back into the past, one might
at ﬁrst consider mathematics to be a body of scientiﬁc knowledge that deals with the properties of numbers, magnitudes, and ﬁgures, obtaining its justiﬁcations from proofs rather than, say, from experiments
or inductive inferences. Such a characterization, however, is not without problems. For one thing, it immediately leaves out important chapters in the history

129
of civilization that are more naturally associated with
mathematics than with any other intellectual activity.
For example, the Mesopotamian and Egyptian cultures
developed elaborate bodies of knowledge that would
most naturally be described as belonging to arithmetic
or geometry, even though nothing is found in them that
comes close to the idea of proof as it was later practiced in mathematics at large. To the extent that any
justiﬁcation is given, say, in the thousands of mathematical procedures found on clay tablets written in
cuneiform script, it is inductive or based on experience. The tablets repetitively show—without additional
explanation or attempts at general justiﬁcations—a
given procedure to be followed whenever one is pursuing a certain type of result. Later on, in the context of
Chinese, Japanese, Mayan, or Hindu cultures, one again
ﬁnds important developments in ﬁelds naturally associated with mathematics. The extent to which these cultures pursued the idea of mathematical proof—a question that is debated among historians to this day—
was undoubtedly not as great as it was in Greek tradition, and it certainly did not take the speciﬁc forms
we typically associate with the latter. Should one nevertheless say that these are instances of mathematical
knowledge, even though they are not justiﬁed on the
basis of some kind of general, deductive proof? If so,
then we cannot characterize mathematics as a body of
knowledge that is backed up by proofs, as suggested
above. However, this litmus test certainly provides a
useful criterion—one that we do not want to give up
too easily—for distinguishing mathematics from other
intellectual endeavors.
Without totally ignoring these important questions,
the present account focuses on a story that started,
at some point in the past, usually taken to be before
or around the ﬁfth century b.c.e. in Greece, with the
realization that there was a distinctive body of claims,
mainly associated with numbers and with diagrams,
whose truth could be and needed to be vindicated in
a very special way—namely, by means of a general,
deductive argument, or “proof.” Exactly when and how
this story began is unclear. Equally unclear are the
direct historical sources of such a unique idea. Since the
emphasis on the use of logic and reason in constructing
an argument was well-entrenched in other spheres of
public life in ancient Greece—such as politics, rhetoric,
and law—much earlier than the ﬁfth century b.c.e., it is
possible that it is in those domains that the origins of
mathematical proof are to be found.

130
The early stages of this story raise additional questions, both historical and methodological. For instance,
Thales of Miletus, the ﬁrst mathematician known by
name (though he was also a philosopher and scientist),
is reported to have proved several geometric theorems,
such as, for instance, that the opposite angles between
two intersecting straight lines are equal, or that if two
vertices of a triangle are the endpoints of the diameter of a circle and the third is any other point on
the circle then the triangle must be right angled. Even
if we were to accept such reports at face value, several questions would immediately arise: in what sense
can it be asserted that Thales “proved” these results?
More speciﬁcally, what were Thales’s initial assumptions and what inference methods did he take to be
valid? We know very little about this. However, we do
know that, as a result of a complex historical process,
a certain corpus of knowledge eventually developed
that comprised known results, techniques employed,
and problems (both solved and yet requiring solution).
This corpus gradually also incorporated the regulatory
idea of proof: that is, the idea that some kind of general argument, rather than an example (or even many
examples), was the necessary justiﬁcation to be sought
in all cases. As part of this development, the idea of
proof came to be associated with strictly deductive arguments, as opposed to, say, dialogic (meaning “negotiated”) or “probabilistically inferred” truth. It is an
interesting and diﬃcult historical question to establish why this was the case, and one that we will not
address here.
euclid’s [VI.2] Elements was compiled some time
around the year 300 b.c.e. It stands out as the most successful and comprehensive attempt of its kind to organize the basic concepts, results, proofs, and techniques
required by anyone wanting to master this increasingly
complex body of knowledge. Still, it is important to
stress that it was not the only such attempt within the
Hellenic world. This endeavor was not just a matter
of compilation, codiﬁcation, and canonization, such as
one can ﬁnd in any other evolving ﬁeld of learning at
any point in time. Instead, the assertions it contained
were of two diﬀerent kinds, and the distinction was
vitally important. On the one hand there were basic
assumptions, or axioms, and on the other there were
theorems, which were typically more elaborate statements, together with accounts of how they followed
from the axioms—that is, proofs. The way that proof
was conceived and realized in the Elements became the
paradigm for centuries to come.

II. The Origins of Modern Mathematics
This article outlines the evolution of the idea of
deductive proof as initially shaped in the framework
of Euclidean-style mathematics and as subsequently
practiced in the mainstream mathematical culture of
ancient Greece, the Islamic world, Renaissance Europe,
early modern European science, and then in the nineteenth century and at the turn of the twentieth. The
main focus will be on geometry: other ﬁelds like arithmetic and algebra will be treated mainly in relation to
it. This choice is amply justiﬁed by the subject matter itself. Indeed, much as mathematics stands out
among the sciences for the unique way in which it relies
on proof, so Euclidean-style geometry stood out—at
least until well into the seventeenth century—among
closely related disciplines such as arithmetic, algebra,
and trigonometry.
Results in these other disciplines, or indeed the
disciplines as a whole, were often regarded as fully
legitimate only when they had been provided with
a geometric (or geometric-like) foundation. However,
important developments in nineteenth-century mathematics, mainly in connection with the rise of noneuclidean geometries [II.2 §§6–10] and with problems in the foundations of analysis [II.5], eventually
led to a fundamental change of orientation, where arithmetic (and eventually set theory [IV.22]) became the
bastion of certainty and clarity from which other mathematical disciplines, geometry included, drew their
legitimacy and their clarity. (See the crisis in the
foundations of mathematics [II.7] for a detailed
account of this development.) And yet, even before
this fundamental change, Euclidean-style proof was not
the only way in which mathematical proof was conceived, explored, and practiced. By focusing mainly on
geometry, the present account will necessarily leave out
important developments that eventually became the
mainstream of legitimate mathematical knowledge. To
mention just one important example in this regard, a
fundamental question that will not be pursued here is
how the principle of mathematical induction originated
and developed, became accepted as a legitimate inference rule of universal validity, and was ﬁnally codiﬁed
as one of the basic axioms of arithmetic in the late nineteenth century. Moreover, the evolution of the notion
of proof involves many other dimensions that will not
be treated here, such as the development of the internal organization of mathematics into subdisciplines,
as well as the changing interrelations between mathematics and its neighboring disciplines. At a diﬀerent
level, it is related to how mathematics itself evolved as

II.6.

The Development of the Idea of Proof

a socially institutionalized enterprise: we shall not discuss interesting questions about how proofs are produced, made public, disseminated, criticized, and often
rewritten and improved.

2

131

A

E

D

F

Greek Mathematics

Euclid’s Elements is the paradigmatic work of Greek
mathematics, partly for what it has to say about the
basic concepts, tools, results, and problems of synthetic geometry and arithmetic, but also for how it
regards the role of a mathematical proof and the form
that such a proof takes. All proofs appearing in the Elements have six parts and are accompanied by a diagram. I illustrate this with the example of proposition I.37. Euclid’s text is quoted here in the classical
translation of Sir Thomas Heath, and the meaning of
some terms diﬀers from current usage. Thus, two triangles are said to be “in the same parallels” if they have
the same height and both their bases are contained in
a single line, and any two ﬁgures are said to be “equal”
if their areas are equal. For the sake of explanation,
names of the parts of the proof have been added: these
do not appear in the original. The proof is illustrated
in ﬁgure 1.
Protasis (enunciation). Triangles which are on the
same base and in the same parallels are equal to one
another.
Ekthesis (setting out). Let ABC, DBC be triangles on
the same base BC and in the same parallels AD, BC.
Diorismos (deﬁnition of goal). I say that the triangle
ABC is equal to the triangle DBC.
Kataskeue (construction). Let AD be produced in both
directions to E, F; through B let BE be drawn parallel
to CA, and through C let CF be drawn parallel to BD.
Apodeixis (proof). Then each of the ﬁgures EBCA,
DBCF is a parallelogram; and they are equal, for they
are on the same base BC and in the same parallels
BC, EF. Moreover the triangle ABC is half of the parallelogram EBCA, for the diameter AB bisects it; and
the triangle DBC is half of the parallelogram DBCF,
for the diameter DC bisects it. Therefore the triangle
ABC is equal to the triangle DBC.
Sumperasma (conclusion). Therefore triangles which
are on the same base and in the same parallels are
equal to one another.
This is an example of a proposition that states a property of geometric ﬁgures. The Elements also includes
propositions that express a task to be carried out. An

B

C

Figure 1 Proposition I.37 of Euclid’s Elements.

A
B

C

G

D
E

L

K

H

F

Figure 2 Proposition IX.35 of Euclid’s Elements.

example is proposition I.1: “On a given ﬁnite straight
line to construct an equilateral triangle.” The same six
parts of the proof and the diagram invariably appear
in propositions of this kind as well. This formal structure is also followed in all propositions appearing in
the three arithmetic books of the Elements and, most
importantly, all of them are always accompanied by a
diagram. Thus, for instance, consider proposition IX.35,
which in its original version reads as follows:
If as many numbers as we please be in continued proportion, and there be subtracted from the second and
the last numbers equal to the ﬁrst, then, as the excess
of the second is to the ﬁrst, so will the excess of the
last be to all those before it.

This cumbersome formulation may prove incomprehensible on ﬁrst reading. In more modern terms, an
equivalent to this theorem would state that, given a
geometric progression a1 , a2 , . . . , an+1 , we have
(an+1 − a1 ) : (a1 + a2 + · · · + an ) = (a2 − a1 ) : a1 .
This translation, however, fails to convey the spirit of
the original, in which no formal symbolic manipulation
is, or can be, made. More importantly, a modern algebraic proof fails to convey the ubiquity of diagrams in
Greek mathematical proofs, even where they are not
needed for a truly geometric construction. Indeed, the
accompanying diagram for proposition IX.35 is shown

132

II. The Origins of Modern Mathematics

A

as ﬁgure 2 and the ﬁrst few lines of the proof are as
follows:
Let there be as many numbers as we please in continued proportion A, BC, D, EF, beginning from A as least
and let there be subtracted from BC and EF the numbers BG, FH, each equal to A; I say that, as GC is to A,
so is EH to A, BC, D. For let FK be made equal to BC and
FL equal to D. . . .

This proposition and its proof provide good examples of the capabilities, as well as the limitations, of
ancient Greek practices of notation, and especially of
how they managed without a truly symbolic language.
In particular, they demonstrate that proofs were never
conceived by the Greeks, even ideally, as purely logical
constructs, but rather as speciﬁc kinds of arguments
that one applied to a diagram. The diagram was not
just a visual aid to the argumentation. Rather, through
the ekthesis part of the proof, it embodied the idea
referred to by the general character and formulation
of the proposition.
Together with the centrality of diagrams, the sixpart structure is also typical of most of Greek mathematics. The constructions and diagrams that typically appeared in Greek mathematical proofs were not
of an arbitrary kind, but what we identify today as
straightedge-and-compass constructions. The reasoning in the apodeixis part could be either a direct deduction or an argument by contradiction, but the result was
always known in advance and the proof was a means
to justify it. In addition, Greek geometric thinking,
and in particular Euclid-style geometric proofs, strictly
adhered to a principle of homogeneity. That is, magnitudes were only compared with, added to, or subtracted
from magnitudes of like kind—numbers, lengths, areas,
or volumes. (See numbers [II.1 §2] for more about this.)
Of particular interest are those Greek proofs concerned with lengths of curves, as well as with areas or
volumes enclosed by curvilinear shapes. Greek mathematicians lacked a ﬂexible notation capable of expressing the gradual approximation of curves by polygons
and an eventual passage to the inﬁnite. Instead, they
devised a special kind of proof that involved what can
retrospectively be seen as an implicit passage to the
limit, but which did so in the framework of a purely geometric proof and thus unmistakably followed the sixpart proof-scheme described above. This implicit passage to the inﬁnite was based on the application of a
continuity principle, later associated with archimedes
[VI.3]. In Euclid’s formulation, for instance, the princi-

O

R

E
K
D

B

H

F
L

Q

P

S

M
G

C
Figure 3 Proposition XII.2 of Euclid’s Elements.

ple states that, given two unequal magnitudes of the
same kind, A, B (be they two lengths, two areas, or two
volumes), with A greater than B, and if we subtract from
A a magnitude which is greater than A/2, and from
the remainder we subtract a magnitude that is greater
than its half, and if this process is iterated a suﬃcient
number of times, then we will eventually remain with a
magnitude that is smaller than B. Euclid used this principle to prove, for instance, that the ratio of the areas
of two circles equals the ratio of the squares of their
diameters (XII.2). The method used, later known as the
exhaustion method, was based on a double contradiction that became standard for many centuries to come.
This double contradiction is illustrated in ﬁgure 3, the
accompanying diagram to the proposition.
If the ratio of the square on BD to the square on FH
is not the same as the ratio of circle ABCD to circle
EFGH, then it must be the same as the ratio of circle
ABCD to an area S either larger or smaller than circle EFGH. The curvilinear ﬁgures are approximated by
polygons, since the continuity principle allows the difference between the inscribed polygon and the circle
to be as close as desired (e.g., closer than the diﬀerence between S and EFGH). The “double contradiction”
is reached if one assumes that S is either smaller or
larger than EFGH.
Forms of proof and constructions other than those
mentioned so far are occasionally found in Greek mathematical texts. These include diagrams based on what
is assumed to be the synchronized motion of two lines
(e.g., the trisectrix, or Archimedes’ spiral), mechanical
devices of many sorts, or reasoning based on idealized mechanical considerations. However, the Euclidean type of proof described above remained a model
to be followed wherever possible. There is a famous
Archimedes palimpsest that provides evidence of how
less canonical methods, drawing on mechanical considerations (albeit of a highly idealized kind), were used to

II.6.

The Development of the Idea of Proof

deduce results about areas and volumes. However, even
this bears testimony to the primacy of the ideal model:
there is a letter from Archimedes to Eratosthenes in
which he displays the ingenuity of his mechanical methods but at the same time is at pains to stress their
heuristic character.

3

133

c
a
f

d
b

Islamic and Renaissance Mathematics

Just as Euclid is now considered to represent an entire
mainstream tradition of Greek mathematics, so alkhwārizmı̄ [VI.5] is regarded as a representative of
Islamic mathematics. There are two main traits of his
work that are relevant to the present account and
that became increasingly central to the development
of mathematics, starting with his works in the late
eighth century and continuing until the works of cardano [VI.7] in sixteenth-century Italy. These traits are
a pervasive “algebraization” of mathematical thinking,
and a continued reliance on Euclidean-style geometric
proof as the main way of legitimizing the validity of
mathematical knowledge in general and of algebraic
reasoning in mathematics in particular.
The prime example of this combination is found in
al-Khwārizmı̄’s seminal text al-Kitāb al-mukhtas.ar fı̄
h
. isāb al-jabr wa’l-muqābala (“The compendious book
on calculation by completion and balancing”), where
he discusses the solutions of problems in which the
unknown length appears in combination with numbers
and squares (the side of which is an unknown). Since he
only envisages the possibility of positive “coeﬃcients”
and positive rational solutions, al-Khwārizmı̄ needs to
consider six diﬀerent situations each of which requires
a diﬀerent recipe for ﬁnding the unknown: the fullgrown idea of a general quadratic equation and an algorithm to solve it in all cases does not appear in Islamic
mathematical texts. For instance, the problem “squares
and roots equal to numbers” (e.g., x 2 + 10x = 39, in
modern notation) and the problem “roots and numbers
equal to squares” (e.g., 3x + 4 = x 2 ) are considered
to be completely diﬀerent ones, as are their solutions,
and accordingly al-Khwārizmı̄ treats them separately.
In all cases, however, al-Khwārizmı̄ proves the validity
of the method described by translating it into geometric terms and then relying on Euclid-like geometric theorems built around a speciﬁc diagram. It is noteworthy,
however, that the problems refer to speciﬁc numerical quantities associated with the magnitudes involved,
and these measured magnitudes refer to the accompanying diagrams as well. In this way, al-Khwārizmı̄ interestingly departs from the Euclidean style of proof. Still,

e
Figure 4 Al-Khwārizmı̄’s geometric justiﬁcation
of the formula for a quadratic equation.

the Greek principle of homogeneity is essentially preserved, as the three quantities usually involved in the
problem are all of the same kind, namely, areas.
Consider, for instance, the equation x 2 + 10x =
39, which corresponds to the following problem of
al-Khwārizmı̄.
What is the square which combined with ten of its roots
will give a sum total of 39?

The recipe prescribes the following steps.
Take one-half of the roots [5] and multiply them by
itself [25]. Add this amount to 39 and obtain 64. Take
the square root of this, which is eight, subtract from it
half the roots, leaving three. The number three therefore represents one root of this square, which itself, of
course, is nine.

The justiﬁcation is provided by ﬁgure 4.
Here ab represents the said square, which for us is
x 2 , and the rectangles c, d, e, f represent an area of
10
4 x each, so that all of them together equal 10x, as
in the problem. Thus, the small squares in the corners represent an area of 6.25 each, and we can “complete” the large square, being equal to 64, and whose
side is therefore 8, thus yielding the solution 3 for the
unknown.
Abu Kamil Shuja, just one generation after al-Khwārizmı̄, added force to this approach when he solved
additional problems while speciﬁcally relying on theorems taken from the Elements, including the accompanying diagrams, in order to justify his method of solution. The primacy of the Euclidean-type proof, which
was already accepted in geometry and arithmetic, thus
also became associated with the algebraic methods
that eventually turned into the main topic of interest in Renaissance mathematics. Cardano’s 1545 Ars

134

II. The Origins of Modern Mathematics

Magna, the foremost example of this new trend, presented a complete treatment of the equations of third
and fourth degree. Although the algebraic line of reasoning that he adopted and developed became increasingly abstract and formal, Cardano continued to justify
his arguments and methods of solution by reference to
Euclid-like geometric arguments based on diagrams.

4

Seventeenth-Century Mathematics

The next signiﬁcant change in the conception of proof
appears in the seventeenth century. The most inﬂuential development of mathematics in this period was the
creation of the inﬁnitesimal calculus simultaneously
by newton [VI.14] and leibniz [VI.15]. This momentous development was the culmination of a process
that spanned most of the century, involving the introduction and gradual improvement of important techniques for determining areas and volumes, gradients
of tangents, and maxima and minima. These developments included the elaboration of traditional points of
view that went back to the Greek classics, as well as the
introduction of completely new ideas such as the “indivisibles,” whose status as a legitimate tool for mathematical proof was hotly debated. At the same time,
the algebraic techniques and approaches that Renaissance mathematicians continued to expand upon, following on from their Islamic predecessors, now gained
additional impetus and were gradually incorporated—
starting with the work of fermat [VI.12] and descartes [VI.11]—into the arsenal of tools available for
proving geometric results. Underlying these various
trends were diﬀerent conceptions and practices of
mathematical proof, which are brieﬂy described and
illustrated now.
Examples of how the classical Greek conception of
geometric proof was essentially followed but at the
same time fruitfully modiﬁed and expanded are found
in the work of Fermat, as can be seen in his calculation of the area enclosed by a generalized hyperbola
(in modern notation (y/a)m = (x/b)n (m, n ≠ 1)) and
its asymptotes.
The quadratic hyperbola (i.e., a ﬁgure represented by
y = 1/x 2 ), for instance, is deﬁned here in terms of a
purely geometric relationship on any two of its points,
namely, that the ratio between the squares built on the
abscissas equals the inverse ratio between the lengths
of the ordinates. In its original version it is expressed as
follows: AG2 : AH2 :: IH : EG (see ﬁgure 5). It should be
noticed that this is not an equation in the present sense

C

B

E
I

A

G

H

N

P

O M

Figure 5 Diagram for Fermat’s proof
of the area under a hyperbola.

of the word, on which the standard symbolic manipulations can be directly performed. Rather, this is a fourterm proportion to which the rules of Greek classical
mathematics apply. Also, the proof was entirely geometric and indeed it essentially followed the Euclidean
style. Thus, if the segments AG, AH, AO, etc., are chosen in continued proportion, then one can prove that
the rectangles EH, IO, NM, etc., are also in continued
proportion, and indeed that EH : IO :: IO : NM :: · · · ::
AH : AG.
Fermat made use of proposition IX.35 of the Elements
(mentioned above), which comprises an expression for
the sum of any number of quantities in a geometric
progression, namely (in more modern notation):
(an+1 − a1 ) : (a1 + a2 + · · · + an ) = (a2 − a1 ) : a1 .
But at this point his proof takes an interesting turn.
He introduces the somewhat obscure concept of “adequare,” which he found in the works of Diophantus,
and which allows a kind of “approximate equality.”
Speciﬁcally, this idea allows him to bypass the cumbersome procedure of double contradiction typically used
in Greek geometry as an implicit passage to the inﬁnite. A ﬁgure bounded by GE, by the horizontal asymptote, and by the hyperbola will equal the inﬁnite sum
of rectangles obtained when the rectangle EH “will vanish and will be reduced to nothing.” Further, proposition IX.35 implies that this sum equals the area of the
rectangle BG. Signiﬁcantly, Fermat still chose to rely on
the authority of the ancients, hinting at the method of
double contradiction when he declared that this result
“would be easy to conﬁrm by a more lengthy proof
carried out in the manner of Archimedes.”
Attempts to expand the accepted canon of geometric proof eventually led to the more progressive
approaches associated with the idea of indivisibles, as

II.6.

The Development of the Idea of Proof

practiced by Cavalieri, Roberval, and Torricelli. This
is well illustrated by Torricelli’s 1643 calculation of
the volume of the inﬁnite body created by rotating
the hyperbola xy = k2 around the y-axis, with values of x between 0 and a (as we would describe it in
modern terms).
The essential idea of indivisibles is that areas are considered to be sums, or collections, of inﬁnitely many
line segments, and volumes are considered to be sums,
or collections, of inﬁnitely many areas. In this example, Torricelli calculated the volume of revolution by
considering it to be a sum of the curved surfaces of
an inﬁnite collection of cylinders successively inscribed
within each other and having radii ranging from 0 to a.
In modern algebraic terms, the height of the inscribed
cylinder with radius x is k2 /x, so the area of its curved
√
surface is 2π x(k2 /x) = π ( 2k)2 , a constant value that
is independent of x and equal to the area of a circle
√
of radius 2k. Thus, in Torricelli’s approach based on
the geometry of indivisibles, the collection of all surfaces that, when taken together, comprise the inﬁnite
body can be equated to a collection of circles with area
2π k2 , one for each x between 0 and a, or equivalently
to a cylinder of volume 2π k2 a.
The rules of Euclid-like geometric proof were completely contravened in proofs of this kind and this
made them unacceptable in the eyes of many. On the
other hand, their fruitfulness was highly appealing,
especially in cases like this one in which an inﬁnite body
was shown to have a ﬁnite volume, a result which Torricelli himself found extremely surprising. Both supporters and detractors alike, however, realized that techniques of this kind might lead to contradictions and
inaccurate results. By the eighteenth century, with the
accelerated development of the inﬁnitesimal calculus
and its associated techniques and concepts, techniques
based on indivisibles had essentially disappeared.
The limits set by the classical paradigm of Euclidean geometric proof were then transgressed in a different direction by the all-embracing algebraization of
geometry at the hands of Descartes. The fundamental step undertaken by Descartes was to introduce unit
lengths as a key element in the diagrams used in geometric proofs. The radical innovation implied by this
step, allowing the hitherto nonexistent possibility of
deﬁning operations with line segments, was explicitly
stressed by Descartes in La Géométrie in 1637:
Just as arithmetic consists of only four or ﬁve operations, namely addition, subtraction, multiplication,

135
division, and the extraction of roots, which may be
considered a kind of division, so in geometry, to ﬁnd
required lines it is merely necessary to add or subtract
other lines; or else, taking one line, which I shall call the
unit in order to relate it as closely as possible to numbers, and which can in general be chosen arbitrarily,
and having given two other lines, to ﬁnd a fourth line
which shall be to one of the given lines as the other is to
the unit (which is the same as multiplication); or again,
to ﬁnd a fourth line which is to one of the given lines as
the unit is to the other (which is equivalent to division);
or, ﬁnally, to ﬁnd one, two, or several mean proportionals between the unit and some other line (which is the
same as extracting the square root, cube root, etc., of
the given line).

Thus, for instance, given two segments BD, BE, the
division of their lengths is represented by BC in ﬁgure 6,
in which AB represents the unit length.
Although the proof was Euclid-like in appearance
(because of the diagram and the use of the theory of
similar triangles), the introduction of the unit length
and its use for deﬁning the operations with segments
set it radically apart and opened completely new horizons for geometric proofs. Not only had measurements
of length been absent from Euclidean-style proofs thus
far, but also, as a consequence of the very existence
of these operations, the essential dimensionality traditionally associated with geometric theorems lost its
signiﬁcance. Descartes used expressions such as a − b,
a/b, a2 , b 3 , and their roots, but he stressed that
they should all be understood as “only simple lines,
which, however, I name squares, cubes, etc., so that I
make use of the terms employed in algebra.” With the
removal of dimensionality, the requirement of homogeneity also became unnecessary. Unlike his predecessors, who handled magnitudes only when they had a
direct geometric signiﬁcance, Descartes could not see
any problem in forming an expression such as a2 b2 − b
and then extracting its cube root. In order to do so, he
said “we must consider the quantity a2 b2 divided once
by the unit, and the quantity b multiplied twice by the
unit.” Sentences of this kind would be simply incomprehensible to Greek geometers, as well as to their Islamic
and Renaissance followers.
This algebraization of geometry, and particularly the
newly created possibility of proving geometric facts
via algebraic procedures, was strongly related to the
recent consolidation of the idea of an algebraic equation, seen as an autonomous mathematical entity, for
which formal rules of manipulation were well-known
and could be systematically applied. This idea reached

136

II. The Origins of Modern Mathematics

E
C

D

A

B

Figure 6 Descartes’s geometric calculation
of the division of two given segments.

full maturity in the hands of viète [VI.9] only around
1591. But not all mathematicians in the seventeenth
century saw the important developments associated
with algebraic thinking either as a direction to be naturally adopted or as a clear sign of progress in the latter discipline. A prominent opponent of any attempt
to deviate from the classical Euclidean-style approach
in geometry was none other than newton [VI.14], who,
in the Arithmetica Universalis (1707), was emphatic in
expressing his views:
Equations are expressions of arithmetic computation
and properly have no place in geometry, except in
so far as truly geometrical quantities (lines, surfaces,
solids and proportions) are thereby shown equal, some
to others. Multiplications, divisions, and computations
of that kind have recently been introduced into geometry, unadvisedly and against the ﬁrst principle of this
science. . . . Therefore these two sciences ought not to
be confounded, and recent generations by confounding
them have lost that simplicity in which all geometrical
elegance consists.

Newton’s Principia bears witness to the fact that
statements like this one were far from mere lip service, as Newton consistently preferred Euclidean-style
proofs, considering them to be the correct language for
presenting his new physics and for bestowing it with
the highest degree of certainty. He used his own calculus only where strictly necessary, and barred algebra
from his treatise entirely.

5 Geometry and Proof in
Eighteenth-Century Mathematics
Mathematical analysis became the primary focus of
mathematicians in the eighteenth century. Questions
relating to the foundations of analysis arose immediately after the calculus began to be developed and were

not settled until the late nineteenth century. To a considerable extent these questions were about the nature
of legitimate mathematical proof, and debates about
them played an important role in undermining the longundisputed status of geometry as the basis for mathematical certainty and bestowing this status on arithmetic instead. The ﬁrst important stage in this process
was euler’s [VI.19] reformulation of the calculus. Once
separated from its purely geometric roots, the calculus
came to be centered on the algebraically oriented concept of function. This trend for favoring algebra over
geometry was given further impetus by Euler’s successors. d’alembert [VI.20], for instance, associated
mathematical certainty above all with algebra—because
of its higher degree of generality and abstraction—and
only subsequently with geometry and mechanics. This
was a clear departure from the typical views of Newton
and of his contemporaries. The trend reached a peak
and was transformed into a well-conceived program in
the hands of lagrange [VI.22], who in the preface to
his 1788 Méchanique Analitique famously expressed
a radical view about how one could achieve certainty
in the mathematical sciences while distancing oneself
from geometry. He wrote as follows:
One will not ﬁnd ﬁgures in this work. The methods
that I expound require neither constructions, nor geometrical or mechanical arguments, but only algebraic
operations, subject to a regular and uniform course.

The details of these developments are beyond the scope
of this article. What is important to stress, however, is
that in spite of their very considerable impact, the basic
conceptions of proof in the more mainstream realm of
geometry did not change very much during the eighteenth century. An illuminating perspective on these
conceptions is oﬀered by the views of contemporary
philosophers, especially Immanuel Kant.
Kant had a very profound knowledge of contemporary science, and particularly of mathematics. A
philosophical discussion of his views on mathematical
knowledge and proof need not concern us here. However, given his acquaintance with contemporary conceptions, they do provide an insightful historical perspective on proof as it was understood at the time. Of
particular interest is the contrast he draws between
a philosophical argument, on the one hand, and a
geometric proof, on the other. Whereas the former
deals with general concepts, the latter deals with concrete, yet nonempirical, concepts, by reference to “visualizable intuitions” (Anschauung). This diﬀerence is

II.6.

The Development of the Idea of Proof

epitomized in the following, famous passage from his
Critique of Pure Reason.
Suppose a philosopher be given the concept of a triangle and he is left to ﬁnd out, in his own way, what
relation the sum of its angles bears to a right angle.
He has nothing but the concept of a ﬁgure enclosed by
three straight lines, and possessing three angles. However long he meditates on this concept, he will never
produce anything new. He can analyze and clarify the
concept of a straight line or of an angle or of the number three, but he can never arrive at any properties not
already contained in these concepts. Now let the geometrician take up these questions. He at once begins by
constructing a triangle. Since he knows that the sum of
two right angles is exactly equal to the sum of all the
adjacent angles which can be constructed from a single
point on a straight line, he prolongs one side of his triangle and obtains two adjacent angles, which together
are equal to two right angles. He then divides the external angle by drawing a line parallel to the opposite side
of the triangle, and observes that he has thus obtained
an external adjacent angle which is equal to an internal
angle—and so on. In this fashion, through a chain of
inferences guided throughout by intuition, he arrives
at a fully evident and universally valid solution of the
problem.

In a nutshell, then, for Kant the nature of mathematical proof that sets it apart from other kinds of deductive argumentation (like philosophy) lies in the centrality of the diagrams and the role that they play. As in the
Elements, this diagram is not just a heuristic guide for
what is no more than abstract reasoning, but rather an
“intuition,” a singular embodiment of the mathematical
idea that is clearly located not only in space, but rather
in space and time. In fact,
I cannot represent to myself a line, however small, without drawing it in thought, that is gradually generating all its parts from a point. Only in this way can the
intuition be obtained.

This role played by diagrams as “visualizable intuitions” is what provides, for Kant, the explanation of
why geometry is not just an empirical science, but also
not just a huge tautology devoid of any synthetic content. According to him, geometric proof is constrained
by logic but it is much more than just a purely logical analysis of the terms involved. This view was at the
heart of a novel philosophical analysis whose starting
point was the then-entrenched conception of what a
mathematical proof is.

137

6

Nineteenth-Century Mathematics and
the Formal Conception of Proof

The nineteenth century was full of important developments in geometry and other parts of mathematics, not
just of the methods but also of the aims of the various subdisciplines. Logic, as a ﬁeld of knowledge, also
underwent signiﬁcant changes and a gradual mathematization that entirely transformed its scope and methods. Consequently, by the end of the century the conception of proof and its role in mathematics had also
been deeply transformed.
In Göttingen in 1854 riemann [VI.49] gave his seminal talk “On the hypotheses which lie at the foundations of geometry.” At around the same time, the
works of bolyai [VI.34] and lobachevskii [VI.31] on
non-Euclidean geometry, as well as the related ideas of
gauss [VI.26], all dating from the 1830s, began to be
more generally known. The existence of coherent, alternative geometries brought about a pressing need for
the most basic, longstanding beliefs about the essence
of geometric knowledge, including the role of proof
and mathematical rigor, to be revised. Of even greater
signiﬁcance in this regard was the renewed interest in
projective geometry [I.3 §6.7], which became a very
active ﬁeld of research with its own open research questions and foundational issues after the publication of
Jean Poncelet’s 1822 treatise. The addition of projective geometry to the many other possible geometric
perspectives prompted a variety of attempts at uniﬁcation and classiﬁcation, the most signiﬁcant of which
were those based on group-theoretic ideas. Particularly
notable were those of klein [VI.57] and lie [VI.53] in the
1870s. In 1882, Moritz Pasch published an inﬂuential
treatise on projective geometry devoted to a systematic
exploration of its axiomatic foundations and the interrelationships among its fundamental theorems. Pasch’s
book also attempted to close the many logical gaps that
had been found in Euclidean geometry over the years.
More systematically than any of his fellow nineteenthcentury mathematicians, Pasch emphasized that all
geometric results should be obtained from axioms by
strict logical deduction, without relying on analytical
means, and above all without appeal to diagrams or to
properties of the ﬁgures involved. Thus, although in
some ways he was consciously reverting to the canons
of Euclid-like proof (which by then were somewhat loosened), his attitude toward diagrams was fundamentally
diﬀerent. Aware of the potential limitations of visualizing diagrams (and perhaps their misleading inﬂuence)

138
he put a much greater emphasis on the pure logical
structure of the proof than his predecessors had. Nevertheless, he was not led to an outright formalist view
of geometry and geometric proof. Rather, he consistently adopted an empirical approach to the origins and
meaning of geometry and fell short of claiming that
diagrams were for heuristic use only:
The basic propositions [of geometry] cannot be understood without corresponding drawings; they express
what has been observed from certain, very simple facts.
The theorems are not founded on observations, but
rather, they are proved. Every inference performed during a deduction must ﬁnd conﬁrmation in a drawing,
yet it is not justiﬁed by a drawing but from a certain
preceding statement (or a deﬁnition).

Pasch’s work deﬁnitely contributed to diagrams losing their central status in geometric proofs in favor
of purely deductive relations, but it did not directly
lead to a thorough revision of the status of the axioms
of geometry, or to a change in the conception that
geometry deals essentially with the study of our spatial, visualizable intuition (in the sense of Anschauung).
The all-important nineteenth-century developments in
geometry produced signiﬁcant changes in the conception of proof only under the combined inﬂuence of
additional factors.
Mathematical analysis continued to be a primary ﬁeld
of research, and the study of its foundations became
increasingly identiﬁed with arithmetic, rather than geometric, rigor. This shift was provoked by the works
of mathematicians like cauchy [VI.29], weierstrass
[VI.44], cantor [VI.54], and dedekind [VI.50], which
aimed at eliminating intuitive arguments and concepts
in favor of ever more elementary statements and deﬁnitions. (In fact, it was not until the work of Dedekind
on the foundations of arithmetic, in the last third of
the century, that the rigorous formulation pursued in
these works was given any kind of axiomatic underpinning.) The idea of investigating the axiomatic basis of
mathematical theories, whether geometry, algebra, or
arithmetic, and of exploring alternative possible systems of postulates was indeed pursued during the
nineteenth century by mathematicians such as George
Peacock, Charles Babbage, John Herschel, and, in a
diﬀerent geographical and mathematical context, Hermann Grassmann. But such investigations were the
exception rather than the rule, and they had only a
fairly limited role in shaping a new conception of proof
in analysis and geometry.

II. The Origins of Modern Mathematics
One major turning point, where the above trends
combined to produce a new kind of approach to proof,
is to be found in the works of giuseppe peano [VI.62]
and his Italian followers. Peano’s mainstream activities
were as a competent analyst, but he was also interested
in artiﬁcial languages, and particularly in developing an
artiﬁcial language that would allow a completely formal
treatment of mathematical proofs. In 1889 his successful application of such a conceptual language to arithmetic yielded his famous postulates for the natural numbers [III.67]. Pasch’s systems of axioms for
projective geometry posed a challenge to Peano’s artiﬁcial language, and he set out to investigate the relationship between the logical and the geometric terms
involved in the deductive structure of geometry. In this
context he introduced the idea of an independent set
of axioms, and applied this concept to his own system
of axioms for projective geometry, which were a slight
modiﬁcation of Pasch’s. This view did not lead Peano to
a formalistic conception of proof, and he still conceived
geometry in terms very similar to his predecessors:
Anyone is allowed to take a hypothesis and develop
its logical consequences. However, if one wants to
give this work the name of geometry it is necessary
that such hypotheses or postulates express the result
of simple and elementary observations of physical
ﬁgures.

Under the inﬂuence of Peano, Mario Pieri developed
a symbolism with which to handle abstract–formal theories. Unlike Peano and Pasch, Pieri consistently promoted the idea of geometry as a purely logical system, where theorems are deduced from hypothetical
premises and where the basic terms are completely
detached from any empirical or intuitive signiﬁcance.
A new chapter in the history of geometry and of
proof was opened at the end of the nineteenth century
with the publication of hilbert’s [VI.63] Grundlagen
der Geometrie, a work that synthesized and brought to
completion the various trends of geometric research
described above. Hilbert was able to achieve a comprehensive analysis of the logical interrelations among
the fundamental results of projective geometry, such
as the theorems of Desargues and Pappus, while paying particular attention to the role of continuity considerations within their proofs. His analysis was based
on the introduction of a generalized analytic geometry,
in which the coordinates may be taken from a variety
of diﬀerent number ﬁelds [III.63], rather than from
the real numbers alone. This approach created a purely

II.6.

The Development of the Idea of Proof

synthetic arithmetization of any given type of geometry, and thus helped to clarify the logical structure
of Euclidean geometry as a deductive system. It also
clariﬁed the relationship between Euclidean geometry
and the various other kinds of known geometries—nonEuclidean, projective, or non-Archimedean. This focus
on logic implied, among other things, that diagrams
should be relegated to a merely heuristic role. In fact,
although diagrams still appear in many proofs in the
Grundlagen, the entire purpose of the logical analysis
is to avoid being misled by diagrams. Proofs, and particularly geometric proofs, have thus become purely logical arguments, rather than arguments about diagrams.
And at the same time, the essence and the role of the
axioms from which the derivations in question start
also underwent a dramatic change.
Following Pasch’s lead, Hilbert introduced a new system of axioms for geometry that attempted to close
the logical gaps inherent in earlier systems. These
axioms were of ﬁve kinds—axioms of incidence, of
order, of congruence, of parallels, and of continuity—
each of which expressed a particular way in which
spatial intuition manifests itself in our understanding.
They were formulated for three fundamental kinds of
object: points, lines, and planes. These remained undeﬁned, and the system of axioms was meant to provide
an implicit deﬁnition of them. In other words, rather
than deﬁning points or lines at the outset and then postulating axioms that are assumed to be valid for them,
a point and a line were not directly deﬁned, except as
entities that satisfy the axioms postulated by the system. Further, Hilbert demanded that the axioms in a
system of this kind should be mutually independent,
and introduced a method for checking that this demand
is fulﬁlled; in order to do so, he constructed models
of geometries that fail to satisfy a given axiom of the
system but satisfy all the others. Hilbert also required
that the system be consistent, and that the consistency
of geometry could be made to depend, in his system,
on that of arithmetic. He initially assumed that proving the consistency of arithmetic would not present a
major obstacle and it was a long time before he realized
that this was not the case. Two additional requirements
that Hilbert initially introduced for axiomatic systems
were simplicity and completeness. Simplicity meant, in
essence, that an axiom should not contain more than
“a single idea.” The demand that every axiom in a system be “simple,” however, was never clearly deﬁned or
systematically pursued in subsequent works of Hilbert
or any of his successors. The last requirement, com-

139
pleteness, meant for Hilbert in 1900 that any adequate
axiomatization of a mathematical domain should allow
for a derivation of all the known theorems of the discipline in question. Hilbert claimed that his axioms would
indeed yield all the known results of Euclidean geometry, but of course this was not a property that he could
formally prove. In fact, since this property of “completeness” cannot be formally checked for any given
axiomatic system, it did not become one of the standard requirements of an axiomatic system. It is important to note that the concept of completeness used by
Hilbert in 1900 is completely diﬀerent from the currently accepted, model-theoretical one that appeared
much later. The latter amounts to the requirement that
in a given axiomatic system every true statement, be it
known or unknown, should be provable.
The use of undeﬁned concepts and the concomitant
conception of axioms as implicit deﬁnitions gave enormous impetus to the view of geometry as a purely logical system, such as Pieri had devised it, and eventually
transformed the very idea of truth and proof in mathematics. Hilbert claimed on various occasions—echoing
an idea of Dedekind—that, in his system, “points, lines,
and planes” could be substituted by “chairs, tables, and
beer mugs,” without thereby aﬀecting in any sense the
logical structure of the theory. Moreover, in the light
of discussions about set-theoretical paradoxes, Hilbert
strongly emphasized the view that the logical consistency of a concept implicitly deﬁned by axioms was the
essence of mathematical existence. Under the inﬂuence
of these views, of the new methodological tools introduced by Hilbert, and of the successful overview of the
foundations of geometry thus achieved, many mathematicians went on to promote new views of mathematics and new mathematical activities that in many
senses went beyond the views embodied in Hilbert’s
approach. On the one hand, a trend that thrived in the
United States at the beginning of the twentieth century,
led by Eliakim H. Moore, turned the study of systems
of postulates into a mathematical ﬁeld in its own right,
independent of direct interest in the ﬁeld of research
deﬁned by the systems in question. For instance, these
mathematicians deﬁned the minimal set of independent postulates for groups, ﬁelds, projective geometry,
etc., without then proceeding to investigate of any of
these individual disciplines. On the other hand, prominent mathematicians started to adopt and develop
increasingly formalistic views of proof and of mathematical truth, and began applying them in a growing number of mathematical ﬁelds. The work of the

140
radically modernist mathematician felix hausdorff
[VI.68] provides important examples of this trend, as he
was among the ﬁrst to consistently associate Hilbert’s
achievement with a new, formalistic view of geometry.
In 1904, for instance, he wrote:
In all philosophical debates since Kant, mathematics,
or at least geometry, has always been treated as heteronomous, as dependent on some external instance
of what we could call, for want of a better term, intuition, be it pure or empirical, subjective or scientiﬁcally
amended, innate or acquired. The most important and
fundamental task of modern mathematics has been to
set itself free from this dependency, to ﬁght its way
through from heteronomy to autonomy.

Hilbert himself would pursue such a point of view
around 1918, when he engaged in the debates about the
consistency of arithmetic and formulated his “ﬁnitist”
program. This program did indeed adopt a strongly formalistic view, but it did so with the restricted aim of
solving this particular problem. It is therefore important to stress that Hilbert’s conceptions of geometry
were, and remained, essentially empiricist and that he
never regarded his axiomatic analysis of geometry as
part of an overall formalistic conception of mathematics. He considered the axiomatic approach as a tool for
the conceptual clariﬁcation of existing, well-elaborated
theories, of which geometry provided only the most
prominent example.
The implication of Hilbert’s axiomatic approach for
the concept of proof and of truth in mathematics provoked strong reactions from some mathematicians,
and prominently so from frege [VI.56]. Frege’s views
are closely related to the changing status of logic at the
turn of the twentieth century and its gradual process of
mathematization and formalization. This process was
an outcome of the successive eﬀorts through the nineteenth century of boole [VI.43], de morgan [VI.38],
Grassmann, Charles S. Peirce, and Ernst Schröder at
formulating an algebra of logic. The most signiﬁcant
step toward a new, formal conception of logic, however, came with the increased understanding of the role
of the logical quantiﬁers [I.2 §3.2] (universal, ∀, and
existential, ∃) in the process of formulating a modern
mathematical proof. This understanding emerged in an
informal, but increasingly clear, fashion as part of the
process of the rigorization of analysis and the distancing from visual intuition, especially at the hands of
Cauchy, bolzano [VI.28], and Weierstrass. It was formally deﬁned and systematically codiﬁed for the ﬁrst

II. The Origins of Modern Mathematics
time by Frege in his 1879 Begriﬀsschrift . Frege’s system, as well as similar ones proposed later by Peano
and by russell [VI.71], brought to the fore a clear distinction between propositional connectives and quantiﬁers, as well as between logical symbols and algebraic
or arithmetic ones.
Frege formulated the idea of a formal system, in
which one deﬁnes in advance all the allowable symbols, all the rules that produce well-formed formulas,
all axioms (i.e., certain preselected, well-formed formulas), and all the rules of inference. In such systems
any deduction can be checked syntactically—in other
words, by purely symbolic means. On the basis of such
systems Frege aimed to produce theories with no logical gaps in their proofs. This would apply not only to
analysis and to its arithmetic foundation—the mathematical ﬁelds that provided the original motivation for
his work—but also to the new systems of geometry that
were evolving at the time. On the other hand, in Frege’s
view the axioms of mathematical theories—even if they
appear in the formal system merely as well-formed formulas—embody truths about the world. This is precisely the source of his criticism of Hilbert. It is the
truth of the axioms, asserted Frege, that certiﬁes their
consistency, rather than the other way around, as
Hilbert suggested.
We thus see how foundational research in two separate ﬁelds—geometry and analysis—was inspired by
diﬀerent methodologies and philosophical outlooks,
but converged at the turn of the twentieth century
to create an entirely new conception of mathematical
proof. In this conception a mathematical proof is seen
as a purely logical construct validated in purely syntactic terms, independently of any visualization through
diagrams. This conception has dominated mathematics
ever since.

Epilogue: Proof in the Twentieth Century
The new notion of proof that stabilized at the beginning
of the twentieth century provided an idealized model—
broadly accepted to this day—of what should constitute a valid mathematical argument. To be sure, actual
proofs devised and published by mathematicians since
that time are seldom presented as fully formalized
texts. They typically present a clearly articulated argument in a language that is precise enough to convince
the reader that it could—in principle, and perhaps with
straightforward (if sustained) eﬀort—be turned into
one. Throughout the decades, however, some limitations of this dominant idea have gradually emerged

II.6.

The Development of the Idea of Proof

and alternative conceptions of what should count as a
valid mathematical argument have become increasingly
accepted as part of current mathematical practice.
The attempt to pursue this idea systematically to its
full extent led, early on and very unexpectedly, to a
serious diﬃculty with the notion of a proof as a completely formalized and purely syntactic deductive argument. In the early 1920s, Hilbert and his collaborators
developed a fully ﬂedged mathematical theory whose
subject matter was “proof,” considered as an object of
study in itself. This theory, which presupposed the formal conception of proof, arose as part of an ambitious
program for providing a direct, ﬁnitistic consistency
proof of arithmetic represented as a formalized system. Hilbert asserted that, just as the physicist examines the physical apparatus with which he carries out
his experiments and the philosopher engages in a critique of reason, so the mathematician should be able
to analyze mathematical proofs and do so strictly by
mathematical means. About a decade after the program
was launched, gödel [VI.92] came up with his astonishing incompleteness theorem [V.15], which famously
showed that “mathematical truth” and “provability”
were not one and the same thing. Indeed, in any consistent, suﬃciently rich axiomatic system (including the
systems typically used by mathematicians) there are
true mathematical statements that cannot be proved.
Gödel’s work implied that Hilbert’s ﬁnitistic program
was too optimistic, but at the same time it also made
clear the deep mathematical insights that could be
obtained from Hilbert’s proof theory.
A closely related development was the emergence of
proofs that certain important mathematical statements
were undecidable. Interestingly, these seemingly negative results have given rise to new ideas about the
legitimate grounds for establishing the truth of such
statements. For instance, in 1963 Paul Cohen established that the continuum hypothesis [IV.22 §5] can
be neither proved nor disproved in the usual systems
of axioms for set theory. Most mathematicians simply accept this idea and regard the problem as solved
(even if not in the way that was originally expected),
but some contemporary set theorists, notably Hugh
Woodin, maintain that there are good reasons to believe
that the hypothesis is false. The strategy they follow in
order to justify this assertion is fundamentally diﬀerent from the formal notion of proof: they devise new
axioms, demonstrate that these axioms have very desirable properties, argue that they should therefore be
accepted, and then show that they imply the negation of

141
the continuum hypothesis. (See set theory [IV.22 §10]
for further discussion.)
A second important challenge came from the everincreasing length of signiﬁcant proofs appearing in
various mathematical domains. A prominent example
was the classiﬁcation theorem for ﬁnite simple
groups [V.7], whose proof was worked out in many separate parts by a large numbers of mathematicians. The
resulting arguments, if put together, would reach about
ten thousand pages, and errors have been found since
the announcement in the early 1980s that the proof was
complete. It has always been relatively straightforward
to ﬁx the errors and the theorem is indeed accepted
and used by group theorists. Nevertheless, the notion
of a proof that is too long for a single human being to
check is a challenge to our conception of when a proof
should be accepted as such. The more recent, very conspicuous cases of fermat’s last theorem [V.10] and
the poincaré conjecture [V.25] were hard to survey
for diﬀerent reasons: not only were they long (though
nowhere near as long as the classiﬁcation of ﬁnite simple groups), but they were also very diﬃcult. In both
cases there was a signiﬁcant interval between the ﬁrst
announcement of the proofs and their complete acceptance by the mathematical community because checking them required enormous eﬀorts by the very few
people qualiﬁed to do so. There is no controversy about
either of these two breakthroughs, but they do raise an
interesting sociological problem: if somebody claims to
have proved a theorem and nobody else is prepared
to check it carefully (perhaps because, unlike the two
theorems just mentioned, this one is not important
enough for another mathematician to be prepared to
spend the time that it would take), then what is the
status of the theorem?
Proofs based on probabilistic considerations have
also appeared in various mathematical domains, including number theory, group theory, and combinatorics. It is sometimes possible to prove mathematical
statements (see, for example, the discussion of random
primality testing in computational number theory
[IV.3 §2]), not with complete certainty, but in such a way
that the probability of error is tiny—at most one in a
trillion, say. In such cases, we may not have a formal
proof, but the chances that we are mistaken in considering the given statement to be true are probably lower
than, say, the chance that there is a signiﬁcant mistake
in one of the lengthy proofs mentioned above.
Another challenge has come from the introduction
of computer-assisted methods of proof. For instance,

142
in 1976 Kenneth Appel and Wolfgang Haken settled a
famous old problem by proving the four-color theorem [V.12]. Their proof involved the checking of a
huge number of diﬀerent map conﬁgurations, which
they did with the help of a computer. Initially, this
raised debates about the legitimacy of their proof but
it quickly became accepted and there are now several proofs of this kind. Some mathematicians even
believe that computer-assisted and, more importantly,
computer-generated proofs are the future of the entire
discipline. Under this (currently minority) view, our
present views about what counts as an acceptable
mathematical proof will soon become obsolete.
A last point to stress is that many branches of mathematics now contain conjectures that seem to be both
fundamentally important and out of reach for the foreseeable future. Mathematicians persuaded of the truth
of such conjectures increasingly undertake the systematic study of their consequences, assuming that an
acceptable proof will one day appear (or at least that the
conjecture is true). Such conditional results are published in leading mathematical journals and doctoral
degrees are routinely awarded for them.
These trends all raise interesting questions about existing conceptions of legitimate mathematical proofs,
the status of truth in mathematics, and the relationship
between “pure” and “applied” ﬁelds. The formal notion
of a proof as a string of symbols that obeys certain
syntactical rules continues to provide an ideal model
for the principles that underlie what most mathematicians see as the essence of their discipline. It allows
far-reaching mathematical analysis of the power of certain axiomatic systems, but at the same time it falls
short of explaining the changing ways in which mathematicians decide what kinds of arguments they are willing to accept as legitimate in their actual professional
practice.
Acknowledgments. I thank José Ferreirós and Reviel Netz
for useful comments on previous versions of this text.

Further Reading
Bos, H. 2001. Redeﬁning Geometrical Exactness. Descartes’
Transformation of the Early Modern Concept of Construction. New York: Springer.
Ferreirós, J. 2000. Labyrinth of Thought. A History of Set
Theory and Its Role in Modern Mathematics. Boston, MA:
Birkhäuser.
Grattan-Guinness, I. 2000. The Search for Mathematical
Roots, 1870–1940: Logics, Set Theories and the Foundations of Mathematics from Cantor through Russell to
Gödel. Princeton, NJ: Princeton University Press.

II. The Origins of Modern Mathematics
Netz, R. 1999. The Shaping of Deduction in Greek Mathematics: A Study in Cognitive History. Cambridge: Cambridge
University Press.
Rashed, R. 1994. The Development of Arabic Mathematics:
Between Arithmetic and Algebra, translated by A. F. W.
Armstrong. Dordrecht: Kluwer.

II.7 The Crisis in the Foundations of
Mathematics
José Ferreirós
The foundational crisis is a celebrated aﬀair among
mathematicians and it has also reached a large nonmathematical audience. A well-trained mathematician
is supposed to know something about the three viewpoints called “logicism,” “formalism,” and “intuitionism” (to be explained below), and about what gödel’s
incompleteness results [V.15] tell us about the status
of mathematical knowledge. Professional mathematicians tend to be rather opinionated about such topics, either dismissing the foundational discussion as
irrelevant—and thus siding with the winning party—
or defending, either as a matter of principle or as an
intriguing option, some form of revisionist approach
to mathematics. But the real outlines of the historical debate are not well-known and the subtler philosophical issues at stake are often ignored. Here we
shall mainly discuss the former, in the hope that this
will help bring the main conceptual issues into sharper
focus.
The foundational crisis is usually understood as a
relatively localized event in the 1920s, a heated debate
between the partisans of “classical” (meaning late-nineteenth-century) mathematics, led by hilbert [VI.63],
and their critics, led by brouwer [VI.75], who advocated strong revision of the received doctrines. There
is, however, a second, and in my opinion very important, sense in which the “crisis” was a long and global
process, indistinguishable from the rise of modern
mathematics and the philosophical and methodological issues it created. This is the standpoint from which
the present account has been written.
Within this longer process one can still pick out some
noteworthy intervals. Around 1870 there were many
discussions about the acceptability of non-Euclidean
geometries, and also about the proper foundations of
complex analysis and even the real numbers. Early in
the twentieth century there were debates about set
theory, about the concept of the continuum, and about
the role of logic and the axiomatic method versus

II.7.

`,
      annotations: [
        createAnnotation("ii6-1", "note", "Key insight from this chapter."),
        createAnnotation("ii6-2", "note", "Important historical development discussed."),
        createAnnotation("ii6-3", "note", "Significant mathematical concept explained."),
      ],
    },
  ],
  exercises: [],
}

// II.7 The Crisis in the Foundations of Mathematics - FULL VERBATIM TEXT
export const foundationsCrisisFullText: FullTextChapter = {
  id: "foundations-crisis",
  title: "The Crisis in the Foundations of Mathematics",
  description: "Complete chapter by José Ferreirós",
  part: "part-02",
  partTitle: "The Origins of Modern Mathematics",
  order: 7,
  content: [
    {
      id: "ii7-full-text",
      title: "The Crisis in the Foundations of Mathematics",
      type: "text",
      content: "Complete chapter by José Ferreirós",
      fullText: `The Crisis in the Foundations of Mathematics

the role of intuition. By about 1925 there was a crisis in the proper sense, during which the main opinions in these debates were developed and turned into
detailed mathematical research projects. And in the
1930s gödel [VI.92] proved his incompleteness results,
which could not be assimilated without some cherished
beliefs being abandoned. Let us analyze some of these
events and issues in greater detail.

1

Early Foundational Questions

There is evidence that in 1899 Hilbert endorsed the
viewpoint that came to be known as logicism. Logicism
was the thesis that the basic concepts of mathematics are deﬁnable by means of logical notions, and that
the key principles of mathematics are deducible from
logical principles alone.
Over time this thesis has become unclear, based as it
seems to be on a fuzzy and immature conception of the
scope of logical theory. But historically speaking logicism was a neat intellectual reaction to the rise of modern mathematics, and particularly to the set-theoretic
approach and methods. Since the majority opinion was
that set theory is just a part of (reﬁned) logic,1 this thesis was thought to be supported by the fact that the
theories of natural and real numbers can be derived
from set theory, and also by the increasingly important
role of set-theoretic methods in algebra and in real and
complex analysis.
Hilbert was following dedekind [VI.50] in the way
he understood mathematics. For us, the essence of
Hilbert’s and Dedekind’s early logicism is their selfconscious endorsement of certain modern methods,
however daring they seemed at the time. These methods had emerged gradually during the nineteenth century, and were particularly associated with Göttingen
mathematics (gauss [VI.26] and dirichlet [VI.36]);
they experienced a crucial turning point with riemann’s [VI.49] novel ideas, and were developed further by Dedekind, cantor [VI.54], Hilbert, and other,
lesser ﬁgures. Meanwhile, the inﬂuential Berlin school
of mathematics had opposed this new trend, kronecker [VI.48] head-on and weierstrass [VI.44] more
subtly. (The name of Weierstrass is synonymous with
the introduction of rigor in real analysis, but in fact, as
will be indicated below, he did not favor the more modern methods elaborated in his time.) Mathematicians in
1. One should mention that key ﬁgures like Riemann and Cantor
disagreed (see Ferreirós 1999). The “majority” included Dedekind,
peano [VI.62], Hilbert, russell [VI.71], and others.

143
Paris and elsewhere also harbored doubts about these
new and radical ideas.
The most characteristic traits of the modern approach were:
(i) acceptance of the notion of an “arbitrary” function
proposed by Dirichlet;
(ii) a wholehearted acceptance of inﬁnite sets and the
higher inﬁnite;
(iii) a preference “to put thoughts in the place of
calculations” (Dirichlet), and to concentrate on
“structures” characterized axiomatically; and
(iv) a frequent reliance on “purely existential” methods of proof.
An early and inﬂuential example of these traits was
Dedekind’s approach (1871) to algebraic number
theory [IV.1]—his set-theoretic deﬁnition of number
ﬁelds [III.63] and ideals [III.81 §2], and the methods
by which he proved results such as the fundamental theorem of unique decomposition. In a remarkable departure from the number-theoretic tradition,
Dedekind studied the factorization properties of algebraic integers in terms of ideals, which are certain inﬁnite sets of algebraic integers. Using this new abstract
concept, together with a suitable deﬁnition of the
product of two ideals, Dedekind was able to prove in
full generality that, within any ring of algebraic integers, ideals possess a unique decomposition into prime
ideals.
The inﬂuential algebraist Kronecker complained that
Dedekind’s proofs do not enable us to calculate, in
a particular case, the relevant divisors or ideals: that
is, the proof was purely existential. Kronecker’s view
was that this abstract way of working, made possible
by the set-theoretic methods and by a concentration
on the algebraic properties of the structures involved,
was too remote from an algorithmic treatment—that is,
from so-called constructive methods. But for Dedekind
this complaint was misguided: it merely showed that
he had succeeded in elaborating the principle “to put
thoughts in the place of calculations,” a principle that
was also emphasized in Riemann’s theory of complex
functions. Obviously, concrete problems would require
the development of more delicate computational techniques, and Dedekind contributed to this in several
papers. But he also insisted on the importance of a
general, conceptual theory.
The ideas and methods of Riemann and Dedekind
became better known through publications of the period 1867–72. These were found particularly shocking

144
because of their very explicit defense of the view that
mathematical theories ought not to be based upon formulas and calculations—they should always be based
on clearly formulated general concepts, with analytical expressions or calculating devices relegated to the
further development of the theory.
To explain the contrast, let us consider the particularly clear case of the opposition between the different approaches of Riemann and Weierstrass to function theory. Weierstrass explicitly represented analytic
(or holomorphic [I.3 §5.6]) functions as collections
∞
of power series of the form n=0 an (z − a)n , which
were connected with each other by analytic continuation [I.3 §5.6]. Riemann chose a very diﬀerent
and more abstract approach, deﬁning a function to be
analytic if it satisﬁes the cauchy–riemann differentiability conditions [I.3 §5.6].2 This neat conceptual
deﬁnition appeared objectionable to Weierstrass, as the
class of diﬀerentiable functions had never been carefully characterized (in terms of series representations,
for example). Exercising his famous critical abilities,
Weierstrass oﬀered examples of continuous functions
that were nowhere diﬀerentiable.
It is worth mentioning that, in preferring inﬁnite
series as the key means for research in analysis and
function theory, Weierstrass remained closer to the
old eighteenth-century idea of a function as an analytical expression. On the other hand, Riemann and
Dedekind were always in favor of Dirichlet’s abstract
idea of a function f as an “arbitrary” way of associating with each x some y = f (x). (Previously it had
been required that y should be expressed in terms
of x by means of an explicit formula.) In his letters, Weierstrass criticized this conception of Dirichlet’s as too general and vague to constitute the starting
point for any interesting mathematical development.
He seems to have missed the point that it was in fact
just the right framework in which to deﬁne and analyze general concepts such as continuity [I.3 §5.2]
and integration [I.3 §5.5]. This framework came to be
called the conceptual approach in nineteenth-century
mathematics.
Similar methodological debates emerged in other
areas too. In a letter of 1870, Kronecker went as far
as saying that the Bolzano–Weierstrass theorem was
2. Riemann determined particular functions by a series of independent traits such as the associated riemann surface [III.79] and the
behavior at singular points. These traits determined the function via a
certain variational principle (the “Dirichlet principle”), which was also
criticized by Weierstrass, who gave a counterexample to it. Hilbert and
Kneser would later reformulate and justify the principle.

II. The Origins of Modern Mathematics
an “obvious sophism,” promising that he would oﬀer
counterexamples. The Bolzano–Weierstrass theorem,
which states that an inﬁnite bounded set of real numbers has an accumulation point, was a cornerstone
of classical analysis, and was emphasized as such by
Weierstrass in his famous Berlin lectures. The problem
for Kronecker was that this theorem rests entirely on
the completeness axiom for the real numbers (which,
in one version, states that every sequence of nonempty
nested closed intervals in R has a nonempty intersection). The real numbers cannot be constructed in an
elementary way from the rational numbers: one has
to make heavy use of inﬁnite sets (such as the set of
all possible “Dedekind cuts,” which are subsets C ⊂ Q
such that p ∈ C whenever p and q are rational numbers such that p < q and q ∈ C). To put it another
way: Kronecker was drawing attention to the problem
that, very often, the accumulation point in the Bolzano–
Weierstrass theorem cannot be constructed by elementary operations from the rational numbers. The classical idea of the set of real numbers, or “the continuum,”
already contained the seeds of the nonconstructive
ingredient in modern mathematics.
Later on, in around 1890, Hilbert’s work on invariant theory led to a debate about his purely existential proof of another basic result, the basis theorem,
which states (in modern terminology) that every ideal
in a polynomial ring is ﬁnitely generated. Paul Gordan, famous as the “king” of invariants for his heavily
algorithmic work on the topic, remarked humorously
that this was “theology,” not mathematics! (He apparently meant that, because the proof was purely existential, rather than constructive, it was comparable with
philosophical proofs of the existence of God.)
This early foundational debate led to a gradual clariﬁcation of the opposing viewpoints. Cantor’s proofs in
set theory also became quintessential examples of the
modern methodology of existential proof. He oﬀered
an explicit defense of the higher inﬁnite and modern
methods in a paper of 1883, which was peppered with
hidden attacks on Kronecker’s views. Kronecker in turn
criticized Dedekind’s methods publicly in 1882, spoke
privately against Cantor, and in 1887 published an
attempt to spell out his foundational views. Dedekind
replied with a detailed set-theoretic (and “thus,” for
him, logicistic) theory of the natural numbers in 1888.
The early round of criticism ended with an apparent
victory for the modern camp, which enrolled new and
powerful allies such as Hurwitz, minkowski [VI.64],
Hilbert, Volterra, Peano, and hadamard [VI.65], and

II.7.

The Crisis in the Foundations of Mathematics

which was defended by inﬂuential ﬁgures such as klein
[VI.57]. Although Riemannian function theory was still
in need of further reﬁnement, recent developments
in real analysis, number theory, and other ﬁelds were
showing the power and promise of the modern methods. During the 1890s, the modern viewpoint in general, and logicism in particular, enjoyed great expansion. Hilbert developed the new methodology into the
axiomatic method, which he used to good eﬀect in his
treatment of geometry (1899 and subsequent editions)
and of the real number system.
Then, dramatically, came the so-called logical paradoxes, discovered by Cantor, Russell, Zermelo, and others, which will be discussed below. These were of two
kinds. On the one hand, there were arguments showing that assumptions that certain sets exist lead to
contradictions. These were later called the set-theoretic
paradoxes. On the other, there were arguments, later
known as the semantic paradoxes, which showed up
diﬃculties with the notions of truth and deﬁnability.
These paradoxes completely destroyed the attractive
view of recent developments in mathematics that had
been proposed by logicism. Indeed, the heyday of logicism came before the paradoxes, that is, before 1900;
it subsequently enjoyed a revival with Russell and his
“theory of types,” but by 1920 logicism was of interest more to philosophers than to mathematicians. However, the divide between advocates of the modern methods and constructivist critics of these methods was
there to stay.

2

Around 1900

Hilbert opened his famous list of mathematical problems at the Paris International Congress of Mathematics
of 1900 with Cantor’s continuum problem [IV.22 §5],
a key question in set theory, and with the problem
of whether every set can be well-ordered. His second
problem amounted to establishing the consistency of
the notion of the set R of real numbers. It was not by
chance that he began with these problems: rather, it
was a way of making a clear statement about how mathematics should be in the twentieth century. Those two
problems, and the axiom of choice [III.1] employed
by Hilbert’s young colleague Zermelo to show that R
(the continuum) can be well-ordered, are quintessential
examples of the traits (i)–(iv) that were listed above. It
is little wonder that less daring minds objected and
revived Kronecker’s doubts, as can be seen in many
publications of 1905–6. This brings us to the next stage
of the debate.

145
2.1

Paradoxes and Consistency

In a remarkable turn of events, the champions of modern mathematics stumbled upon arguments that cast
new doubts on its cogency. In around 1896, Cantor discovered that the seemingly harmless concepts of the
set of all ordinals and the set of all cardinals led to
contradictions. In the former case the contradiction
is usually called the Burali-Forti paradox; the latter is
the Cantor paradox. The assumption that all transﬁnite ordinals form a set leads, by Cantor’s previous
results, to the result that there is an ordinal that is less
than itself—and similarly for cardinals. Upon learning
of these paradoxes, Dedekind began to doubt whether
human thought is completely rational. Even worse, in
1901–2 Zermelo and Russell discovered a very elementary contradiction, now known as Russell’s paradox or
sometimes as the Zermelo–Russell paradox, which will
be discussed in a moment. The untenability of the
previous understanding of set theory as logic became
clear, and there began a new period of instability. But
it should be said that only logicists were seriously
upset by these arguments: they were presented with
contradictions in their theories.
Let us explain the importance of the Zermelo–Russell
paradox. From Riemann to Hilbert, many authors accepted the principle that, given any well-deﬁned logical or mathematical property, there exists a set of all
objects satisfying that property. In symbols: given a
well-deﬁned property p, there exists another object,
the set {x : p(x)}. For example, corresponding to the
property of “being a real number” (which is expressed
formally by Hilbert’s axioms) there is the set of all real
numbers; corresponding to the property of “being an
ordinal” there is the set of all ordinals; and so on. This
is called the comprehension principle, and it constitutes
the basis for the logicistic understanding of set theory,
often called naive set theory, although its naivete is
only clear with hindsight. The principle was thought
of as a basic logical law, so that all of set theory was
merely a part of elementary logic.
The Zermelo–Russell paradox shows that the comprehension principle is contradictory, and it does so
by formulating a property that seems to be as basic
and purely logical as possible. Let p(x) be the property x ∉ x (bearing in mind that negation and membership were assumed to be purely logical concepts).
The comprehension principle yields the existence of
the set R = {x : x ∉ x}, but this leads quickly to a
contradiction: if R ∈ R, then R ∉ R (by the deﬁnition

146

II. The Origins of Modern Mathematics

of R), and similarly, if R ∉ R, then R ∈ R. Hilbert (like
his older colleague frege [VI.56]) was led to abandon
logicism, and even wondered whether Kronecker might
have been right all along. Eventually he concluded that
set theory had shown the need to reﬁne logical theory.
It was also necessary to establish set theory axiomatically, as a basic mathematical theory based on mathematical (not logical) axioms, and Zermelo undertook
this task.
Hilbert famously advocated that to claim that a set of
mathematical objects exists is tantamount to proving
that the corresponding axiom system is consistent—
that is, free of contradictions. The documentary evidence suggests that Hilbert came to this celebrated
principle in reaction to Cantor’s paradoxes. His reasoning may have been that, instead of jumping directly
from well-deﬁned concepts to their corresponding sets,
one had ﬁrst to prove that the concepts are logically
consistent. For example, before one could accept the set
of all real numbers, one should prove the consistency
of Hilbert’s axiom system for them. Hilbert’s principle
was a way of removing any metaphysical content from
the notion of mathematical existence. This view, that
mathematical objects had a sort of “ideal existence” in
the realm of thought rather than an independent metaphysical existence, had been anticipated by Dedekind
and Cantor.
The “logical” paradoxes included not only the ones
that go by the names of Burali-Forti, Cantor, and Russell, but also many semantic paradoxes formulated by
Russell, Richard, König, Grelling, etc. (Richard’s paradox will be discussed below.) Much confusion emerged
from the abundance of diﬀerent paradoxes, but one
thing is clear: they played an important role in promoting the development of modern logic and convincing
mathematicians of the need for strictly formal presentation of their theories. Only when a theory has been
stated within a precise formal language can one disregard the semantic paradoxes, and even formulate the
distinction between these and the set-theoretic ones.
2.2

Predicativity

When the books of Frege and Russell made the paradoxes of set theory widely known to the mathematical
community in 1903, poincaré [VI.61] used them to put
forward criticisms of both logicism and formalism.
His analysis of the paradoxes led him to coin an
important new notion, predicativity, and maintain that
impredicative deﬁnitions should be avoided in mathematics. Informally, a deﬁnition is impredicative when

it introduces an element by reference to a totality that
already contains that element. A typical example is
the following: Dedekind deﬁnes the set N of natural
numbers as the intersection of all sets that contain
1 and are closed under an injective function σ such
that 1 ∉ σ (N). (The function σ is called the successor
function.) His idea was to characterize N as minimal,
but in his procedure the set N is ﬁrst introduced by
appeal to a totality of sets that should already include
N itself. This kind of procedure appeared unacceptable
to Poincaré (and also to Russell), especially when the
relevant object can be speciﬁed only by reference to
the more embracing totality. Poincaré found examples
of impredicative procedures in each of the paradoxes
he studied.
Take, for instance, Richard’s paradox, which is one
of the linguistic or semantic paradoxes (where, as we
said, the notions of truth and deﬁnability are prominent). One begins with the idea of deﬁnable real numbers. Because deﬁnitions must be expressed in a certain
language by ﬁnite expressions, there are only countably many deﬁnable numbers. Indeed, we can explicitly count the deﬁnable real numbers by listing them in
alphabetical order of their deﬁnitions. (This is known
as the lexicographic order.) Richard’s idea was to apply
to this list a diagonal process, of the kind used by Cantor to prove that R is not countable [III.11]. Let the
deﬁnable numbers be a1 , a2 , a3 , . . . . Deﬁne a new number r in a systematic way, making sure that the nth
decimal digit of r is diﬀerent from the nth decimal
digit of an . (For example, let the nth digit of r be 2
unless the nth digit of an is 2, in which case let the
nth digit of r be 4.) Then r cannot belong to the set
of deﬁnable numbers. But in the course of this construction, the number r has just been deﬁned in ﬁnitely
many words! Poincaré would ban impredicative deﬁnitions and would therefore prevent the introduction of
the number r , since it was deﬁned with reference to the
totality of all deﬁnable numbers.3
In this kind of approach to the foundations of mathematics, all mathematical objects (beyond the natural
numbers) must be introduced by explicit deﬁnitions.
If a deﬁnition refers to a presumed totality of which
the object being deﬁned is itself a member, we are
involved in a circle: the object itself is then a constituent of its own deﬁnition. In this view, “deﬁnitions”
3. The modern solution is to establish mathematical deﬁnitions
within a well-determined formal theory, whose language and expressions are ﬁxed to begin with. Richard’s paradox takes advantage of an
ambiguity as to what the available means of deﬁnition are.

II.7.

The Crisis in the Foundations of Mathematics

must be predicative: one refers only to totalities that
have already been established before the object one is
deﬁning. Important authors such as Russell and weyl
[VI.80] accepted this point of view and developed it.
Zermelo was not convinced, arguing that impredicative deﬁnitions were often used unproblematically, not
only in set theory (as in Dedekind’s deﬁnition of N, for
example), but also in classical analysis. As a particular
example, he cited cauchy’s [VI.29] proof of the fundamental theorem of algebra [V.13],4 but a simpler example of impredicative deﬁnition is the least
upper bound in real analysis. The real numbers are
not introduced separately, by explicit predicative deﬁnitions of each one of them; rather, they are introduced
as a completed whole, and the particular way in which
the least upper bound of an inﬁnite bounded set of
reals is singled out becomes impredicative. But Zermelo
insisted that these deﬁnitions are innocuous, because
the object being deﬁned is not “created” by the deﬁnition; it is merely singled out (see his paper of 1908 in
van Heijenoort (1967, pp. 183–98)).
Poincaré’s idea of abolishing impredicative deﬁnitions became important for Russell, who incorporated
it as the “vicious circle principle” in his inﬂuential
theory of types. Type theory is a system of higher-order
logic, with quantiﬁcation over properties or sets, over
relations, over sets of sets, and so on. Roughly speaking, it is based on the idea that the elements of any
set should always be objects of a certain homogeneous
type. For instance, we can have sets of “individuals,”
such as {a, b}, or sets of sets of individuals, such as
{{a}, {a, b}}, but never a “mixed” set like {a, {a, b}}.
Russell’s version of type theory became rather complicated because of the so-called ramiﬁcation he adopted
in order to avoid impredicativity. This system, together
with axioms of inﬁnity, choice, and “reducibility” (a
surprisingly ad hoc means to “collapse” the ramiﬁcation), suﬃced for the development of set theory and the
number systems. Thus it became the logical basis for
the renowned Principia Mathematica by Whitehead and
Russell (1910–13), in which they carefully developed a
foundation for mathematics.
Type theory remained the main logical system until
about 1930, but under the form of simple type theory

4. Cauchy’s reasoning was clearly nonconstructive, or “purely existential” as we have been saying. In order to show that the polynomial
must have one root, Cauchy studied the absolute value of the polynomial, which has a global minimum σ . This global minimum is impredicatively deﬁned. Cauchy assumed that it was positive, and from this
he derived a contradiction.

147
(that is, without ramiﬁcation), which, as Chwistek, Ramsey, and others realized, suﬃces for a foundation in
the style of Principia. Ramsey proposed arguments that
were aimed at eliminating worries about impredicativity, and he tried to justify the other existence axioms
of Principia—the axiom of inﬁnity and the axiom of
choice—as logical principles. But his arguments were
inconclusive. Russell’s attempt to rescue logicism from
the paradoxes remained unconvincing, except to some
philosophers (especially members of the Vienna Circle).
Poincaré’s suggestions also became a key principle
for the interesting foundational approach proposed by
Weyl in his book Das Kontinuum (1918). The main idea
was to accept the theory of the natural numbers as they
were conventionally developed using classical logic,
but to work predicatively from there on. Thus, unlike
Brouwer, Weyl accepted the principle of the excluded
middle. (This, and Brouwer’s views, will be discussed in
the next section.) However, the full system of the real
numbers was not available to him: in his system the set
R was not complete and the Bolzano–Weierstrass theorem failed, which meant that he had to devise sophisticated replacements for the usual derivations of results
in analysis.
The idea of predicative foundations for mathematics,
in the style of Weyl, has been carefully developed in
recent decades with noteworthy results (see Feferman
1998). Predicative systems lie between those that countenance all of the modern methodology and the more
stringent constructivistic systems. This is one of several foundational approaches that do not ﬁt into the
conventional but by now outdated triad of logicism,
formalism, and intuitionism.
2.3

Choices

As important as the paradoxes were, their impact on
the foundational debate has often been overstated. One
frequently ﬁnds accounts that take the paradoxes as
the real starting point of the debate, in strong contrast with our discussion in section 1. But even if we
restrict our attention to the ﬁrst decade of the twentieth century, there was another controversy of equal,
if not greater, importance: the arguments that surrounded the axiom of choice and Zermelo’s proof of
the well-ordering theorem.
Recall from section 2.1 that the association between
sets and their deﬁning properties was at the time
deeply ingrained in the minds of mathematicians and
logicians (via the contradictory principle of comprehension). The axiom of choice (AC) is the principle that,

148
given any inﬁnite family of disjoint nonempty sets,
there is a set, known as a choice set, that contains
exactly one element from each set in the family. The
problem with this, said the critics, is that it merely
stipulates the existence of the choice set and does not
give a deﬁning property for it. Indeed, when it is possible to characterize the choice set explicitly, then the
use of AC is avoidable! But in the case of Zermelo’s
well-ordering theorem it is essential to employ AC. The
required well-ordering of R “exists” in the ideal sense of
Cantor, Dedekind, and Hilbert, but it seemed clear that
it was completely out of reach from any constructivist
perspective.
Thus, the axiom of choice exacerbated obscurities in
previous conceptions of set theory, forcing mathematicians to introduce much-needed clariﬁcations. On the
one hand, AC was nothing but an explicit statement
of previous views about arbitrary subsets, and yet, on
the other, it obviously clashed with strongly held views
about the need to explicitly deﬁne inﬁnite sets by properties. The stage was set for deep debate. The discussions about this particular topic contributed more than
anything else to a clariﬁcation of the existential implications of modern mathematical methods. It is instructive to know that borel [VI.70], Baire, and lebesgue
[VI.72], who became critics, had all relied on AC in less
obvious ways in order to prove theorems of analysis.
Not by chance, the axiom was suggested to Zermelo
by an analyst, Erhard Schmidt, who was a student of
Hilbert.5
After the publication of Zermelo’s proof, an intense
debate developed throughout Europe. Zermelo was
spurred on to work out the foundations of set theory
in an attempt to show that his proof could be developed within an unexceptionable axiom system. The
outcome was his famous axiom system [IV.22 §3], a
masterpiece that emerged from careful analysis of set
theory as it was historically given in the contributions
of Cantor and Dedekind and in Zermelo’s own theorem. With some additions due to Fraenkel and von neumann [VI.91] (the axioms of replacement and regularity) and the major innovation proposed by Weyl and
skolem [VI.81] (to formulate it within ﬁrst-order
logic [IV.23 §1], i.e., quantifying over individuals, the
sets, but not over their properties), the axiom system
became in the 1920s the one that we now know.
5. One may still gain much insight by reading the letters exchanged
by the French analysts in 1905 (see Moore 1982; Ewald 1996) and Zermelo’s clever arguments in his second 1908 proof of well-ordering
(van Heijenoort 1967).

II. The Origins of Modern Mathematics
The ZFC system (this stands for “Zermelo–Fraenkel
with choice”) codiﬁes the key traits of modern mathematical methodology, oﬀering a satisfactory framework for the development of mathematical theories
and the conduct of proofs. In particular, it includes
strong existence principles, allows impredicative definitions and arbitrary functions, warrants purely existential proofs, and makes it possible to deﬁne the main
mathematical structures. It thus exhibits all the tendencies (i)–(iv) mentioned in section 1. Zermelo’s own
work was completely in line with Hilbert’s informal
axiomatizations of about 1900, and he did not forget to promise a proof of consistency. Axiomatic set
theory, whether in the Zermelo–Fraenkel presentation
or the von Neumann–Bernays–Gödel version, is the system that most mathematicians regard as the working
foundation for their discipline.
As of 1910, the contrast between Russell’s type
theory and Zermelo’s set theory was strong. The former system was developed within formal logic, and its
point of departure (albeit later compromised for pragmatic reasons) was in line with predicativism; in order
to derive mathematics, the system needed the existential assumptions of inﬁnity and choice, but these were
rhetorically treated as tentative hypotheses rather than
outright axioms. The latter system was presented informally, adopted the impredicative standpoint wholeheartedly, and asserted as axioms strong existential
assumptions that were suﬃcient to derive all of classical mathematics and Cantor’s theory of the higher inﬁnite. In the 1920s the separation diminished greatly,
especially with respect to the ﬁrst two traits just indicated. Zermelo’s system was perfected and formulated
within the language of modern formal logic. And the
Russellians adopted simple type theory, thus accepting the impredicative and “existential” methodology of
modern mathematics. This is often given the (potentially confusing) term “Platonism”: the objects that the
theory refers to are treated as if they were independent
of what the mathematician can actually and explicitly
deﬁne.
Meanwhile, back in the ﬁrst decade of the twentieth
century, a young mathematician in the Netherlands was
beginning to ﬁnd his way toward a philosophically colored version of constructivism. Brouwer presented his
strikingly peculiar metaphysical and ethical views in
1905, and started to elaborate a corresponding foundation for mathematics in his thesis of 1907. His philosophy of “intuitionism” derived from the old metaphysical view that individual consciousness is the one and

II.7.

The Crisis in the Foundations of Mathematics

only source of knowledge. This philosophy is perhaps
of little interest in itself, so we shall concentrate here
on Brouwer’s constructivistic principles. In the years
around 1910, Brouwer became a renowned mathematician, with crucial contributions to topology such as his
ﬁxed point theorem [V.11]. By the end of World War I,
he started to publish detailed elaborations of his foundational ideas, helping to create the famous “crisis,” to
which we now turn. He was also successful in establishing the customary (but misleading) distinction between
formalism and intuitionism.

3 The Crisis in a Strict Sense
In 1921, the Mathematische Zeitschrift published a
paper by Weyl in which the famous mathematician, who
was a disciple of Hilbert, openly espoused intuitionism
and diagnosed a “crisis in the foundations” of mathematics. The crisis pointed toward a “dissolution” of
the old state of analysis, by means of Brouwer’s “revolution.” Weyl’s paper was meant as a propaganda pamphlet to rouse the sleepers, and it certainly did. Hilbert
answered in the same year, accusing Brouwer and Weyl
of attempting a “putsch” aimed at establishing “dictatorship à la Kronecker” (see the relevant papers in
Mancosu (1998) and van Heijenoort (1967)). The foundational debate shifted dramatically toward the battle
between Hilbert’s attempts to justify “classical” mathematics and Brouwer’s developing reconstruction of a
much-reformed intuitionistic mathematics.
Why was Brouwer “revolutionary”? Up to 1920 the
key foundational issues had been the acceptability of
the real numbers and, more fundamentally, of the
impredicativity and strong existential assumptions of
set theory, which supported the higher inﬁnite and
the unrestricted use of existential proofs. Set theory
and, by implication, classical analysis had been criticized for their reliance on impredicative deﬁnitions
and for their strong existential assumptions (in particular, the axiom of choice, of which extensive use
was made by sierpiński [VI.77] in 1918). Thus, the
debate in the ﬁrst two decades of the twentieth century was mainly about which principles to accept
when it came to deﬁning and establishing the existence of sets and subsets. A key question was, can
one make rigorous the vague idea behind talk of “arbitrary subsets”? The most coherent reactions had been
Zermelo’s axiomatization of set theory and Weyl’s
predicative system in Das Kontinuum. (The Principia
Mathematica of Whitehead and Russell was an unsuc-

149
cessful compromise between predicativism and classical mathematics.)
Brouwer, however, brought new and even more basic
questions to the fore. No one had questioned the traditional ways of reasoning about the natural numbers:
classical logic, in particular the use of quantiﬁers and
the principle of the excluded middle, had been used in
this context without hesitation. But Brouwer put forward principled critiques of these assumptions and
started developing an alternative theory of analysis
that was much more radical than Weyl’s. In doing so, he
came upon a new theory of the continuum, which ﬁnally
enticed Weyl and made him announce the coming of a
new age.
3.1

Intuitionism

Brouwer began systematically developing his views
with two papers on “intuitionistic set theory,” written in German and published in 1918 and 1919 by
the Verhandelingen of the Dutch Academy of Sciences.
These contributions were part of what he regarded as
the “Second Act” of intuitionism. The “First Act” (from
1907) had been his emphasis on the intuitive foundations of mathematics. Already Klein and Poincaré had
insisted that intuition has an inescapable role to play
in mathematical knowledge: as important as logic is in
proofs and in the development of mathematical theory,
mathematics cannot be reduced to pure logic; theories
and proofs are of course organized logically, but their
basic principles (axioms) are grounded in intuition. But
Brouwer went beyond them and insisted on the absolute independence of mathematics from language and
logic.
From 1907, Brouwer rejected the principle of the
excluded middle (PEM), which he regarded as equivalent to Hilbert’s conviction that all mathematical problems are solvable. PEM is the logical principle that the
statement p ∨ ¬p (that is, either p or not p) must
always be true, whatever the proposition p may be.
(For example, it follows from PEM that either the decimal expansion of π contains inﬁnitely many sevens or
it contains only ﬁnitely many sevens, even though we
do not have a proof of which.) Brouwer held that our
customary logical principles were abstracted from the
way we dealt with subsets of a ﬁnite set, and that it
was wrong to apply them to inﬁnite sets as well. After
World War I he started the systematic reconstruction
of mathematics.
The intuitionist position is that one can only state “p
or q” when one can give either a constructive proof of

150
p or a constructive proof of q. This standpoint has the
consequence that proofs by contradiction (reductio ad
absurdum) are not valid. Consider Hilbert’s ﬁrst proof
of his basis theorem (section 1), achieved by reductio:
he showed that one can derive a contradiction from the
assumption that the basis is inﬁnite, and from this he
concluded that the basis is ﬁnite. The logic behind this
procedure is that we start from a concrete instance of
PEM, p ∨ ¬p, show that ¬p is untenable, and conclude
that p must be true. But constructive mathematics asks
for explicit procedures for constructing each object that
is assumed to exist, and explicit constructions behind
any mathematical statement. Similarly, we have mentioned before (section 2.1) Cauchy’s proof of the fundamental theorem of algebra, as well as many proofs in
real analysis that invoke the least upper bound. All of
these proofs are invalid for a constructivist, and several mathematicians have tried to save the theorems
by ﬁnding constructivist proofs for them. For instance,
both Weyl and Kneser worked on constructivist proofs
for the fundamental theorem of algebra.
It is easy to give instances of the use of PEM that a
constructivist will not accept: one just has to apply it
to any unsolved mathematical problem. For example,
Catalan’s constant is the number
∞

(−1)n
K=
.
(2n + 1)2
n=0
It is not known whether K is transcendental, so if p is
the statement “Catalan’s constant is transcendental,”
then a constructivist will not accept that p is either true
or false.
This may seem odd, or even obviously wrong, until
one realizes that constructivists have a diﬀerent view
about what truth is. For a constructivist, to say that a
proposition is true simply means that we can prove it
in accordance with the stringent methods that we are
discussing; to say that it is false means that we can
actually exhibit a counterexample to it. Since there is
no reason to suppose that every existence statement
has either a strict constructivist proof or an explicit
counterexample, there is no reason to believe PEM (with
this notion of truth). Thus, in order to establish the
existence of a natural number with a certain property, a proof by reductio ad absurdum is not enough.
Existence must be shown by explicit determination or
construction if you want to persuade a constructivist.
Notice also how this viewpoint implies that mathematics is not timeless or ahistorical. It was only in
1882 that Lindemann proved that π is a transcenden-

II. The Origins of Modern Mathematics
tal number [III.41]. Since that date, it has been possible to assign a truth value to statements that were
neither true nor false before, according to intuitionists. This may seem paradoxical, but it was just right
for Brouwer, since in his view mathematical objects
are mental constructions and he rejected as “metaphysics” the assumption that they have an independent
existence.
In 1918, Brouwer replaced the sets of Cantor and
Zermelo by constructive counterparts, which he would
later call “spreads” and “species.” A species is basically
a set that has been deﬁned by a characteristic property, but with the proviso that every element has been
previously and independently deﬁned by an explicit
construction. In particular, the deﬁnition of any given
species will be strictly predicative.
The concept of a spread is particularly characteristic of intuitionism, and it forms the basis for Brouwer’s
deﬁnition of the continuum. It is an attempt to avoid
idealization and do justice to the temporal nature
of mathematical constructions. Suppose, for example,
that we wish to deﬁne a sequence of rational numbers that gives better and better approximations to
the square root of 2. In classical analysis, one conceives of such sequences as existing in their entirety,
but Brouwer deﬁned a notion that he called a choice
sequence, which pays more attention to how they might
be produced. One way to produce them is to give a rule,
2 + 2)/2x
such as the recurrence relation xn+1 = (xn
n
(and the initial condition x1 = 2). But another is to
make less rigidly determined choices that obey certain
constraints: for instance, one might insist that xn has
2 diﬀers from 2 by at most
denominator n and that xn
100/n, which does not determine xn uniquely but does
ensure that the sequence produces better and better
√
approximations to 2.
A choice sequence is therefore not required to be
completely speciﬁed from the outset, and it can involve
choices that are freely made by the mathematician at
diﬀerent moments in time. Both these features make
choice sequences very diﬀerent from the sequences
of classical analysis: it has been said that intuitionist
mathematics is “mathematics in the making.” By contrast, classical mathematics is marked by a kind of
timeless objectivity, since its objects are assumed to
be fully determined in themselves and independent of
the thinking processes of mathematicians.
A spread has choice sequences as its elements—it is
something like a law that regulates how the sequences

II.7.

The Crisis in the Foundations of Mathematics

are constructed.6 For instance, one could take a spread
that consisted of all choice sequences that began in
some particular way, and such a spread would represent a segment—in general, spreads do not represent
isolated elements, but continuous domains. By using
spreads whose elements satisfy the Cauchy condition,
Brouwer oﬀered a new mathematical conception of the
continuum: rather than being made up of points (or real
numbers) with some previous Platonic existence, it was
more genuinely “continuous.” Interestingly, this view
is reminiscent of Aristotle, who, twenty-three centuries
earlier, had emphasized the priority of the continuum
and rejected the idea that an extended continuum can
be made up of unextended points.
The next stage in Brouwer’s redevelopment of analysis was to analyze the idea of a function. Brouwer
deﬁned a function to be an assignment of values to the
elements of a spread. However, because of the nature of
spreads, this assignment had to be wholly dependent
on an initial segment of the choice sequence in order
to be constructively admissible. This threw up a big
surprise: all functions that are everywhere deﬁned are
continuous (and even uniformly continuous). What, you
might wonder, about the function f where f (x) = 0
when x < 0 and f (x) = 1 when x ⩾ 0? For Brouwer,
this is not a well-deﬁned function, and the underlying
reason for this is that one can determine spreads for
which we do not know (and may never know) whether
they are positive, zero, or negative. For instance, one
could let xn be 1 if all the even numbers between 4 and
2n are sums of two primes, and −1 otherwise.
The rejection of PEM has the eﬀect that intuitionistic negation diﬀers in meaning from classical negation.
Thus, intuitionistic arithmetic is also diﬀerent from
classical arithmetic. Nevertheless, in 1933 Gödel and
Gentzen were able to show that the dedekind–peano
axioms [III.67] of arithmetic are consistent relative to
formalized intuitionistic arithmetic. (That is, they were
able to establish a correspondence between the sentences of both formal systems, such that a contradiction in classical arithmetic yields a contradiction in its
intuitionistic counterpart; thus, if the latter is consistent, the former must be as well.) This was a small triumph for the Hilbertians, though corresponding proofs
6. More precisely, a spread is deﬁned by means of two laws; see
Heyting (1956), or more recently van Atten (2003), for further details
on this and other points. One can picture a spread as a subtree of the
universal tree of natural numbers (consisting of all ﬁnite sequences of
natural numbers), together with an assignment of previously available
mathematical objects to the nodes. One law of the spread determines
nodes in the tree, the other maps them to objects.

151
for systems of analysis or set theory have never been
found.
Initially there had been hopes that the development of intuitionism would end in a simple and elegant presentation of pure mathematics. However, as
Brouwer’s reconstruction developed in the 1920s, it
became more and more clear that intuitionistic analysis
was extremely complicated and foreign. Brouwer was
not worried, for, as he would say in 1933, “the spheres
of truth are less transparent than those of illusion.” But
Weyl, although convinced that Brouwer had delineated
the domain of mathematical intuition in a completely
satisfactory way, remarked in 1925: “the mathematician watches with pain the largest part of his towering theories dissolve into mist before his eyes.” Weyl
seems to have abandoned intuitionism shortly thereafter. Fortunately, there was an alternative approach
that suggested another way of rehabilitating classical
mathematics.
3.2

Hilbert’s Program

This alternative approach was, of course, Hilbert’s program, which promised, in the memorable phrasing of
1928, “to eliminate from the world once and for all the
skeptical doubts” as to the acceptability of the classical
theories of mathematics. The new perspective, which
he started to develop in 1904, relied heavily on formal
logic and a combinatorial study of the formulas that are
provable from given formulas (the axioms). With modern logic, proofs are turned into formal computations
that can be checked mechanically, so that the process
is purely constructivistic.
In the light of our previous discussion (section 1),
it is interesting that the new project was to employ
Kroneckerian means for a justiﬁcation of modern, antiKroneckerian methodology. Hilbert’s aim was to show
that it is impossible to prove a contradictory formula
from the axioms. Once this had been shown combinatorially or constructively (or, as Hilbert also said, ﬁnitarily), the argument can be regarded as a justiﬁcation
of the axiom system—even if we read the axioms as
talking about non-Kroneckerian objects like the real
numbers or transﬁnite sets.
Still, Hilbert’s ideas at the time were marred by a deﬁcient understanding of logical theory.7 It was only in
1917–18 that Hilbert returned to this topic, now with
7. The logic he presented in 1905 lagged far behind Frege’s system
of 1879 or Peano’s of the 1890s. We do not enter into the development
of logical theory in this period (see, for example, Moore 1998).

152
a reﬁned understanding of logical theory and a greater
awareness of the considerable technical diﬃculties of
his project. Other mathematicians played very significant parts in promoting this better understanding.
By 1921, helped by his assistant Bernays, Hilbert had
arrived at a very reﬁned conception of the formalization of mathematics, and had perceived the need for a
deeper and more careful probing into the logical structure of mathematical proofs and theories. His program
was ﬁrst clearly formulated in a talk at Leipzig late in
1922.
Here we will describe the mature form of Hilbert’s
program, as it was presented for instance in the 1925
paper “On the inﬁnite” (see van Heijenoort 1967). The
main goal was to establish, by means of syntactic consistency proofs, the logical acceptability of the principles and modes of inference of modern mathematics.
Axiomatics, logic, and formalization made it possible
to study mathematical theories from a purely mathematical standpoint (hence the name metamathematics),
and Hilbert hoped to establish the consistency of the
theories by employing very weak means. In particular,
Hilbert hoped to answer all of the criticisms of Weyl
and Brouwer, and thereby justify set theory, the classical theory of real numbers, classical analysis, and of
course classical logic with its PEM (the basis for indirect
proofs by reductio ad absurdum).
The whole point of Hilbert’s approach was to make
mathematical theories fully precise, so that it would
become possible to obtain precise results about their
properties. The following steps are indispensable for
the completion of such a program.
(i) Finding suitable axioms and primitive concepts for
a mathematical theory T , such as that of the real
numbers.
(ii) Finding axioms and inference rules for classical
logic, which makes the passage from given propositions to new propositions a purely syntactic,
formal procedure.
(iii) Formalizing T by means of the formal logical calculus, so that propositions of T are just strings of
symbols, and proofs are sequences of such strings
that obey the formal rules of inference.
(iv) A ﬁnitary study of the formalized proofs of T that
shows that it is impossible for a string of symbols
that expresses a contradiction to be the last line
of a proof.
In fact, steps (ii) and (iii) can be solved with rather simple systems formalized in ﬁrst-order logic, like those

II. The Origins of Modern Mathematics
studied in any introduction to mathematical logic, such
as Dedekind–Peano arithmetic or Zermelo–Fraenkel set
theory. It turns out that ﬁrst-order logic is enough for
codifying mathematical proofs, but, interestingly, this
realization came rather late—after gödel’s theorems
[V.15].
Hilbert’s main insight was that, when theories are
formalized, any proof becomes a ﬁnite combinatorial
object: it is just an array of strings of symbols complying with the formal rules of the system. As Bernays
said, this was like “projecting” the deductive structure
of a theory T into the number-theoretic domain, and it
became possible to express in this domain the consistency of T . These realizations raised hopes that a ﬁnitary study of formalized proofs would suﬃce to establish the consistency of the theory, that is, to prove the
sentence expressing the consistency of T . But this hope,
not warranted by the previous insights, turned out to
be wrong.8
Also, a crucial presupposition of the program was
that not only the logical calculus but also each of the
axiomatic systems would be complete. Roughly speaking, this means that they would be suﬃciently powerful to allow the derivation of all the relevant results.9
This assumption turned out to be wrong for systems
that contain (primitive recursive) arithmetic, as Gödel
showed.
It remains to say a bit more about what Hilbert meant
by ﬁnitism (for details, see Tait 1981). This is one of
the points in which his program of the 1920s adopted
to some extent the principles of intuitionists such as
Poincaré and Brouwer and deviated strongly from the
ideas Hilbert himself had considered in 1900. The key
idea is that, contrary to the views of logicists like
Frege and Dedekind, logic and pure thought require
something that is given “intuitively” in our immediate
experience: the signs and formulas.
In 1905, Poincaré had put forth the view that a formal consistency proof for arithmetic would be circular, as such a demonstration would have to proceed by
induction on the length of formulas and proofs, and
thus would rely on the same axiom of induction that it
was supposed to establish. Hilbert replied in the 1920s
that the form of induction required at the metamathematical level is much weaker than full arithmetical
induction, and that this weak form is grounded on the
8. For further details, see, for example, Sieg (1999).
9. The notion of “relevant result” should of course be made precise:
doing so leads to the notion either of syntactic completeness or of
semantic completeness.

II.7.

The Crisis in the Foundations of Mathematics

ﬁnitary consideration of signs that he took to be intuitively given. Finitary mathematics was not in need of
any further justiﬁcation or reduction.
Hilbert’s program proceeded gradually by studying
weak theories at ﬁrst and proceeding to progressively
stronger ones. The metatheory of a formal system studies properties such as consistency, completeness, and
some others (“completeness” in the logical sense means
that all true or valid formulas that can be represented
in the calculus are formally deducible in it). Propositional logic was quickly proved to be consistent and
complete. First-order logic, also known as predicate
logic, was proved complete by Gödel in his dissertation
of 1929. For all of the 1920s, the attention of Hilbert
and coworkers was set on elementary arithmetic and its
subsystems; once this had been settled, the project was
to move on to the much more diﬃcult, but crucial, cases
of the theory of real numbers and set theory. Ackermann and von Neumann were able to establish consistency results for certain subsystems of arithmetic, but
between 1928 and 1930 Hilbert was convinced that the
consistency of arithmetic had already been established.
Then came the severe blow of Gödel’s incompleteness
results (see section 4).
The name “formalism,” as a description of this program, came from the fact that Hilbert’s method consisted in formalizing each mathematical theory, and
formally studying its proof structure. However, this
name is rather one-sided and even confusing, especially because it is usually contrasted with intuitionism, a full-blown philosophy of mathematics. Like most
mathematicians, Hilbert never viewed mathematics as
a mere game played with formulas. Indeed, he often
emphasized the meaningfulness of (informal) mathematical statements and the depth of conceptual content expressed in them.10

153

The crisis was unfolding not just at an intellectual level
but also at a personal level. One should perhaps tell
this story as a tragedy, in which the personalities of
the main ﬁgures and the successive events made the
ﬁnal result quite inescapable.
Hilbert and Brouwer were very diﬀerent personalities, though they were both extremely willful and clever
men. Brouwer’s worldview was idealistic and tended
to solipsism. He had an artistic temperament and an

eccentric private life. He despised the modern world,
looking to the inner life of the self as the only way
out (at least in principle, though not always in practice). He preferred to work in isolation, although he had
good friends in the mathematical community, especially in the international group of topologists that
gathered around him. Hilbert was typically modernist
in his views and attitudes; full of optimism and rationalism, he was ready to lead his university, his country,
and the international community into a new world. He
was very much in favor of collaboration, and felt happy
to join Klein’s schemes for institutional development
and power.
As a consequence of World War I, Germans in the
early 1920s were not allowed to attend the International Congresses of Mathematicians. When the opportunity ﬁnally arose in 1928, Hilbert was eager to seize
on it, but Brouwer was furious because of restrictions
that were still imposed on the German delegation and
sent a circular letter in order to convince other mathematicians. Their viewpoints were widely known and
led to a clash between the two men. On another level,
Hilbert had made important concessions to his opponents in the 1920s, hoping that he would succeed in
his project of ﬁnding a consistency proof. Brouwer
emphasized these concessions, accusing him of failing to recognize authorship, and demanded new concessions.11 Hilbert must have felt insulted and perhaps even threatened by a man whom he regarded
as perhaps the greatest mathematician of the younger
generation.
The last straw came with an episode in 1928. Brouwer
had since 1915 been a member of the editorial board
of Mathematische Annalen, the most prestigious mathematics journal at the time, of which Hilbert had been
the main editor since 1902. Ill with “pernicious anemia,” and apparently thinking that he was close to the
end, Hilbert feared for the future of his journal and
decided it was imperative to remove Brouwer from the
editorial board. When he wrote to other members of the
board explaining his scheme, which he was already carrying out, Einstein replied saying that his proposal was
unwise and that he wanted to have nothing to do with
it. Other members, however, did not wish to upset the
old and admired Hilbert. Finally, a dubious procedure
was adopted, where the whole board was dissolved and
created anew. Brouwer was greatly disturbed by this

10. This is very explicit, for example, in the lectures of 1919–20
edited by Rowe (1992), and also in the 1930 paper that bears exactly
the same title (see Gesammelte Abhandlungen, volume 3).

11. See his “Intuitionistic reﬂections on formalism” of 1928 (in
Mancosu 1998).

3.3

Personal Disputes

154

II. The Origins of Modern Mathematics

action, and as a result of it the journal lost Einstein and
Carathéodory, who had previously been main editors
(see van Dalen 2005).
After that, Brouwer ceased to publish for some years,
leaving some book plans unﬁnished. With his disappearance from the scene, and with the gradual disappearance of previous political turbulences, the feelings
of “crisis” began to fade away (see Hesseling 2003).
Hilbert did not intervene much in the subsequent
debates and foundational developments.

4

Gödel and the Aftermath

It was not only the Annalen war that Hilbert won: the
mathematical community as a whole continued to work
in the style of modern mathematics. And yet his program suﬀered a profound blow with the publication
of Gödel’s famous 1931 article in the Monatshefte für
Mathematik und Physik. An extremely ingenious development of metamathematical methods—the arithmetization of metamathematics—allowed Gödel to prove
that systems like axiomatic set theory or Dedekind–
Peano arithmetic are incomplete (see gödel’s theorem
[V.15]). That is, there exist propositions P formulated
strictly in the language of the system such that neither
P nor ¬P is formally provable in the system.
This theorem already presented a deep problem for
Hilbert’s endeavor, as it shows that formal proof cannot
even capture arithmetical truth. But there was more.
A close look at Gödel’s arguments made it clear that
this ﬁrst metamathematical proof could itself be formalized, which led to “Gödel’s second theorem”—that
it is impossible to establish the consistency of the
systems mentioned above by any proof that can be
codiﬁed within them. Gödel’s arithmetization of metamathematics makes it possible to build a sentence, in
the language of formal arithmetic, that expresses the
consistency of this same formal system. And this sentence turns out to be among those that are unprovable.12 To express it contrapositively, a ﬁnitary formal
proof (codiﬁable in the system of formal arithmetic)
of the impossibility of proving 1 = 0 could be transformed into a contradiction of the system! Thus, if
the system is indeed consistent (as most mathematicians are convinced it is), then there is no such ﬁnitary proof.

12. For further details, see, for example, Smullyan (2001), van Heijenoort (1967), and good introductions to mathematical logic. Both
theorems were carefully proved in Hilbert and Bernays (1934/39). Bad
expositions and faulty interpretations of Gödel’s results abound.

According to what Gödel called at the time “the
von Neumann conjecture” (namely, that if there is a
ﬁnitary proof of consistency, then it can be formalized
and codiﬁed within elementary arithmetic), the second
theorem implies the failure of Hilbert’s program (see
Mancosu (1999, p. 38) and, for more on the reception,
Dawson (1997, pp. 68 ﬀ)). One should emphasize that
Gödel’s negative results are purely constructivistic and
even ﬁnitistic, valid for all parties in the foundational
debate. They were diﬃcult to digest, but in the end
they led to a reestablishment of the basic terms for
foundational studies.
Mathematical logic and foundational studies continued to develop brilliantly with Gentzen-style proof
theory, with the rise of model theory [IV.23], etc.—
all of which had their roots in the foundational studies of the ﬁrst third of the twentieth century. Although
the Zermelo–Fraenkel axioms suﬃce for giving a rigorous foundation to most of today’s mathematics,
and have a rather convincing intuitive justiﬁcation in
terms of the “iterative” conception of sets,13 there is
a general feeling that foundational studies, instead
of achieving their ambitious goal, “found themselves
attracted into the whirl of mathematical activity, and
are now enjoying full voting rights in the mathematical
senate.”14
However, this impression is somewhat superﬁcial.
Proof theory has developed, leading to noteworthy
reductions of classical theories to systems that can be
regarded as constructive. A striking example is that
analysis can be formalized in conservative extensions
of arithmetic: that is, in systems that extend the language of arithmetic while including all theorems of
arithmetic, but which are “conservative” in the sense
that they have no new consequences in the language of
arithmetic. Some parts of analysis can even be developed in conservative extensions of primitive recursive
arithmetic (see Feferman 1998). This raises questions
about the philosophical bases on which the admissibility of the relevant constructive theories can be founded.
But for these systems the question is far less simple
than it was for Hilbert’s ﬁnitary mathematics; it seems

13. The basic idea is to view the set-theoretic universe as a product
of iterating the following operation: one starts with a basic domain
V0 (possibly ﬁnite or even equal to ∅) and forms all possible sets of
elements in the domain; this gives a new domain V1 , and one iterates
forming sets of V0 ∪ V1 , and so on (to inﬁnity and beyond!). This produces an open-ended set-theoretic universe, masterfully described by
Zermelo (1930). On the iterative conception, see, for example, the last
papers in Bernacerraf and Putnam (1983).
14. To use the words of Gian-Carlo Rota in an essay of 1973.

II.7.

The Crisis in the Foundations of Mathematics

fair to say that no general consensus has yet been
reached.
Whatever its roots and justiﬁcation may be, mathematics is a human activity. This truism is clear from the
subsequent development of our story. The mathematical community refused to abandon “classical” ideas and
methods; the constructivist “revolution” was aborted.
In spite of its failure, formalism established itself in
practice as the avowed ideology of twentieth-century
mathematicians. Some have remarked that formalism
was less a real faith than a Sunday refuge for those who
spent their weekdays working on mathematical objects
as something very real. The Platonism of working days
was only abandoned, as a bourbaki [VI.96] member
said, when a ready-made reply was needed to unwelcome philosophical questions concerning mathematical knowledge.
One should note that formalism suited very well the
needs of a self-conscious, autonomous community of
research mathematicians. It granted them full freedom
to choose their topics and to employ modern methods to explore them. However, to reﬂective mathematical minds it has long been clear that it is not the
answer. Epistemological questions about mathematical
knowledge have not been “eliminated from the world”;
philosophers, historians, cognitive scientists, and others keep looking for more adequate ways of understanding its content and development. Needless to say,
this does not threaten the autonomy of mathematical
researchers—if autonomy is to be a concern, perhaps
we should worry instead about the pressures exerted
on us by the market and other powers.
Both (semi-)constructivism and modern mathematics have continued to develop: the contrast between
them has simply been consolidated, though in a very
unbalanced way, since some 99% of practicing mathematicians are “modern.” (But do statistics matter when
it comes to the correct methods for mathematics?) In
1905, commenting on the French debate, hadamard
[VI.65] wrote that “there are two conceptions of mathematics, two mentalities, in evidence.” It has now come
to be recognized that there is value in both approaches:
they complement each other and can coexist peacefully.
In particular, interest in eﬀective methods, algorithms,
and computational mathematics has grown markedly
in recent decades—and all of these are closer to the
constructivist tradition.
The foundational debate left a rich legacy of ideas
and results, key insights and developments, including
the formulation of axiomatic set theories and the rise

155
of intuitionism. One of the most important of these
developments was the emergence of modern mathematical logic as a reﬁnement of axiomatics, which led to
the theories of recursion and computability in around
1936 (see algorithms [II.4 §3.2]). In the process, our
understanding of the characteristics, possibilities, and
limitations of formal systems was hugely clariﬁed.
One of the hottest issues throughout the whole
debate, and probably its main source, was the question
of how to understand the continuum. The reader may
recall the contrast between the set-theoretic understanding of the real numbers and Brouwer’s approach,
which rejected the idea that the continuum is “built
of” points. That this is a labyrinthine question was
further established by results on Cantor’s continuum
hypothesis (CH), which postulates that the cardinality
of the set of real numbers is ℵ1 , the second transﬁnite cardinal, or equivalently that every inﬁnite subset
of R must biject with either N or with R itself. Gödel
proved in 1939 that CH is consistent with axiomatic
set theory, but Paul Cohen proved in 1963 that it
is independent of its axioms (i.e., Cohen proved that
the negation of CH is consistent with axiomatic set
theory [IV.22 §5]). The problem is still alive, with a few
mathematicians proposing alternative approaches to
the continuum and others trying to ﬁnd new and convincing set-theoretic principles that will settle Cantor’s
question (see Woodin 2001).
The foundational debate has also contributed in
a deﬁnitive way to clarifying the peculiar style and
methodology of modern mathematics, especially the
so-called Platonism or existential character of modern
mathematics (see the classic 1935 paper of Bernays
in Benacerraf and Putnam (1983)), by which is meant
(here at least) a methodological trait rather than any
supposed implications of metaphysical existence. Modern mathematics investigates structures by considering their elements as given independently of human
(or mechanical) capabilities of eﬀective deﬁnition and
construction. This may seem surprising, but perhaps
this trait can be explained by broader characteristics of
scientiﬁc thought and the role played by mathematical
structures in the modeling of scientiﬁc phenomena.
In the end, the debate made it clear that mathematics
and its modern methods are still surrounded by important philosophical problems. When a sizable amount of
mathematical knowledge can be taken for granted, theorems can be established and problems can be solved
with the certainty and clarity for which mathematics is
celebrated. But when it comes to laying out the bare

156

II. The Origins of Modern Mathematics

beginnings, philosophical issues cannot be avoided.
The reader of these pages may have felt this at several
places, especially in the discussion of intuitionism, but
also in the basic ideas behind Hilbert’s program, and
of course in the problem of the relationship between
formal mathematics and its informal counterpart, a
problem that is brought into sharp focus by Gödel’s
theorems.
Acknowledgments. I thank Mark van Atten, Jeremy Gray,
Paolo Mancosu, José F. Ruiz, Wilfried Sieg, and the editors
for their helpful comments on a previous version of this
paper.

Further Reading
It is impossible to list here all the relevant articles
by Bernays, Brouwer, Cantor, Dedekind, Gödel, Hilbert,
Kronecker, von Neumann, Poincaré, Russell, Weyl, Zermelo, etc. The reader can easily ﬁnd them in the source
books by van Heijenoort (1967), Benacerraf and Putnam
(1983), Heinzmann (1986), Ewald (1996), and Mancosu
(1998).
Benacerraf, P., and H. Putnam, eds. 1983. Philosophy of
Mathematics: Selected Readings. Cambridge: Cambridge
University Press.
Dawson Jr., J. W. 1997. Logical Dilemmas: The Life and Work
of Kurt Gödel. Wellesley, MA: A. K. Peters.
Ewald, W., ed. 1996. From Kant to Hilbert: A Source Book in
the Foundations of Mathematics, 2 vols. Oxford: Oxford
University Press.
Feferman, S. 1998. In the Light of Logic. Oxford: Oxford
University Press.
Ferreirós, J. 1999. Labyrinth of Thought: A History of Set
Theory and Its Role in Modern Mathematics. Basel: Birkhäuser.
Heinzmann, G., ed. 1986. Poincaré, Russell, Zermelo et
Peano. Paris: Vrin.

Hesseling, D. E. 2003. Gnomes in the Fog: The Reception of
Brouwer’s Intuitionism in the 1920s. Basel: Birkhäuser.
Heyting, A. 1956. Intuitionism: An Introduction. Amsterdam:
North-Holland. Third revised edition, 1971.
Hilbert, D., and P. Bernays. 1934/39. Grundlagen der Mathematik, 2 vols. Berlin: Springer.
Mancosu, P., ed. 1998. From Hilbert to Brouwer: The Debate
on the Foundations of Mathematics in the 1920s. Oxford:
Oxford University Press.
. 1999. Between Vienna and Berlin: the immediate
reception of Gödel’s incompleteness theorems. History
and Philosophy of Logic 20:33–45.
Mehrtens, H. 1990. Moderne—Sprache—Mathematik. Frankfurt: Suhrkamp.
Moore, G. H. 1982. Zermelo’s Axiom of Choice. New York:
Springer.
. 1998. Logic, early twentieth century. In Routledge
Encyclopedia of Philosophy, edited by E. Craig. London:
Routledge.
Rowe, D. 1992. Natur und mathematisches Erkennen. Basel:
Birkhäuser.
Sieg, W. 1999. Hilbert’s programs: 1917–1922. The Bulletin
of Symbolic Logic 5:1–44.
Smullyan, R. 2001. Gödel’s Incompleteness Theorems. Oxford: Oxford University Press.
Tait, W. W. 1981. Finitism. Journal of Philosophy 78:524–46.
van Atten, M. 2003. On Brouwer. Belmont, CA: Wadsworth.
van Dalen, D. 1999/2005. Mystic, Geometer, and Intuitionist:
The Life of L. E. J. Brouwer. Volume I: The Dawning Revolution. Volume II: Hope and Disillusion. Oxford: Oxford
University Press.
van Heijenoort, J., ed. 1967. From Frege to Gödel: A Source
Book in Mathematical Logic. Cambridge, MA: Harvard
University Press. (Reprinted, 2002.)
Weyl, H. 1918. Das Kontinuum. Leipzig: Veit.
Whitehead, N. R., and B. Russell. 1910/13. Principia Mathematica. Cambridge: Cambridge University Press. Second
edition 1925/27. (Reprinted, 1978.)
Woodin, W. H. 2001. The continuum hypothesis, I, II. Notices
of the American Mathematical Society 48:567–76, 681–90.

Part III
Mathematical Concepts

`,
      annotations: [
        createAnnotation("ii7-1", "note", "Key insight from this chapter."),
        createAnnotation("ii7-2", "note", "Important historical development discussed."),
        createAnnotation("ii7-3", "note", "Significant mathematical concept explained."),
      ],
    },
  ],
  exercises: [],
}

// III.1 The Axiom of Choice
export const axiomOfChoiceFullText: FullTextChapter = {
  id: "axiom-of-choice",
  title: "The Axiom of Choice",
  description: "The axiom of choice and its implications for mathematics.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 1,
  content: [
    {
      id: "axiom-choice-content",
      title: "The Axiom of Choice",
      type: "text",
      content: "Understanding the axiom of choice.",
      fullText: `Consider the following problem: it is easy to find two irrational numbers $a$ and $b$ such that $a + b$ is rational, or such that $ab$ is rational (in both cases one could take $a = \\sqrt{2}$ and $b = -\\sqrt{2}$), but is it possible for $a^b$ to be rational? Here is an elegant proof that the answer is yes.

Let $x = \\sqrt{2}^{\\sqrt{2}}$. If $x$ is rational then we have our example. But $x^{\\sqrt{2}} = \\sqrt{2}^2 = 2$ is rational, so if $x$ is irrational then again we have an example.

Now this argument certainly establishes that it is possible for $a$ and $b$ to be irrational and for $a^b$ to be rational. However, the proof has a very interesting feature: it is nonconstructive, in the sense that it does not actually name two irrationals $a$ and $b$ that work. Instead, it tells us that either we can take $a = b = \\sqrt{2}$ or we can take $a = \\sqrt{2}$ and $b = \\sqrt{2}^{\\sqrt{2}}$.

The axiom of choice is one of several rules that we use for building sets out of other sets. Roughly speaking, the axiom of choice says that we are allowed to make an arbitrary number of unspecified choices when we wish to form a set.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// III.37 Bayesian Analysis
export const bayesianAnalysisFullText: FullTextChapter = {
  id: "bayesian-analysis",
  title: "Bayesian Analysis",
  description: "Bayesian statistics and probabilistic reasoning.",
  part: "part-03",
  partTitle: "Mathematical Concepts",
  order: 37,
  content: [
    {
      id: "bayesian-content",
      title: "Bayesian Analysis",
      type: "text",
      content: "Understanding Bayesian statistics.",
      fullText: `Suppose you throw a pair of standard dice. The probability that the total is 10 is $\\frac{1}{12}$ because there are thirty-six ways the dice can come up, of which three (4 and 6, 5 and 5, and 6 and 4) give 10. If, however, you look at the first die and see that it came up as a 6, then the conditional probability that the total is 10, given this information, is $\\frac{1}{6}$ (since that is the probability that the other die comes up as a 4).

In general, the probability of A given B is defined to be the probability of A and B divided by the probability of B. In symbols, one writes

$$P[A|B] = \\frac{P[A \\wedge B]}{P[B]}$$

From this it follows that $P[A \\wedge B] = P[A|B] P[B]$. Now $P[A \\wedge B]$ is the same as $P[B \\wedge A]$. Therefore,

$$P[A|B] P[B] = P[B|A] P[A],$$

since the left-hand side is $P[A \\wedge B]$ and the right-hand side is $P[B \\wedge A]$. Dividing through by $P[B]$ we obtain Bayes's theorem:

$$P[A|B] = \\frac{P[B|A] P[A]}{P[B]},$$

which expresses the conditional probability of A given B in terms of the conditional probability of B given A.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// IV.1 Algebraic Numbers
export const algebraicNumbersFullText: FullTextChapter = {
  id: "algebraic-numbers",
  title: "Algebraic Numbers",
  description: "The theory of algebraic numbers and their properties.",
  part: "part-04",
  partTitle: "Branches of Mathematics",
  order: 1,
  content: [
    {
      id: "algebraic-numbers-content",
      title: "Algebraic Numbers",
      type: "text",
      content: "Introduction to algebraic number theory.",
      fullText: `Algebraic number theory is the study of finite field extensions of the rational numbers. These fields, called algebraic number fields, arise naturally when one attempts to solve polynomial equations with rational coefficients.

An algebraic number is a complex number that is a root of a polynomial equation with rational coefficients. The set of all algebraic numbers forms a field, which is an algebraic closure of the rational numbers.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// IV.2 Analytic Number Theory
export const analyticNumberTheoryFullText: FullTextChapter = {
  id: "analytic-number-theory",
  title: "Analytic Number Theory",
  description: "Using analysis to study properties of integers and prime numbers.",
  part: "part-04",
  partTitle: "Branches of Mathematics",
  order: 2,
  content: [
    {
      id: "analytic-nt-content",
      title: "Analytic Number Theory",
      type: "text",
      content: "Introduction to analytic methods in number theory.",
      fullText: `Analytic number theory is the study of the properties of integers using methods from analysis. The prime number theorem, which describes the distribution of prime numbers, is one of the most famous results in this field.

The Riemann zeta function plays a central role in analytic number theory. Its zeros are intimately connected with the distribution of prime numbers through the explicit formulas.`,
      annotations: [],
    },
  ],
  exercises: [],
}

// Helper function to get a full text chapter by ID
export function getFullTextChapterById(id: string): FullTextChapter | undefined {
  const chapters = [
    whatIsMathematicsFullText,
    languageAndGrammarFullText,
    fromNumbersToNumberSystemsFullText,
    geometryOriginsFullText,
    abstractAlgebraDevelopmentFullText,
    algorithmsFullText,
    rigorInAnalysisFullText,
    ideaOfProofFullText,
    foundationsCrisisFullText,
    axiomOfChoiceFullText,
    bayesianAnalysisFullText,
    algebraicNumbersFullText,
    analyticNumberTheoryFullText,
  ]
  return chapters.find((chapter) => chapter.id === id)
}

// Helper function to check if full text exists for a chapter
export function hasFullText(id: string): boolean {
  return getFullTextChapterById(id) !== undefined
}