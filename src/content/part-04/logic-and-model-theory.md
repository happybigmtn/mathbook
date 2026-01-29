# Logic and Model Theory

IV.23.   Logic and Model Theory                                                                                         635

                                                               is a statement about not just a structure but also the
IV.23 Logic and Model Theory                                   particular elements y and z.
          David Marker                                            There are various rules that allow one to build larger
                                                               formulas out of smaller ones. We will not give them
            1   Languages and Theories                         all, but for example if φ and ψ are formulas, then ¬φ,
                                                               φ ∨ ψ, φ ∧ ψ, φ → ψ, and φ ↔ ψ are all formulas. In
Mathematical logic is the study of formal languages            general, if φ is built out of smaller formulas φ1 , . . . , φn
that are used to describe mathematical structures and          using logical connectives (and parentheses), then we
what these can tell us about the structures themselves.        call φ a Boolean combination of φ1 , . . . , φn . Another
We can learn a lot about a formal language by inves-           important way to modify a formula is quantification:
tigating which of its sentences are true for the struc-        if φ(x) is a formula involving a free variable x, then
ture it describes, and we can learn a lot about the            ∀xφ(x) and ∃xφ(x) are both formulas.
structure by investigating the subsets of it that can be          The formulas just discussed are “purely logical,”
defined using the language. In this article, we shall see       which makes them not very useful for describing inter-
several examples of languages and the structures that          esting mathematical structures. Suppose, for example,
they are used to describe. We shall also see instances         that we wanted to study real solutions to algebraic
of the remarkable phenomenon that theorems in logic            and exponential equations over the field [I.3 §2.2](/part-01/fundamental-definitions) of
can sometimes be used to prove “purely mathemati-              real numbers. We can think of this as studying the
cal” results that seem to have nothing to do with logic.       “mathematical structure”
This introductory section briefly introduces some of                           Rexp = (R, +, ·, exp, <, 0, 1),
the basic ideas that will be needed to understand the          where the right-hand side is a septuple that consists of
later sections.                                                the set R of real numbers, the binary operations of addi-
   All the formal languages that we consider will be ex-       tion and multiplication, the exponential function
tensions of a basic logical language that we shall denote      [III.25](/part-03/the-exponential-and-logarithmic-functions), the “less than” relation, and the real numbers 0
by L0 . The statements, or formulas, of this language          and 1.
are made up of the following components: variables,               The various components of this structure are of
which are denoted by letters of the alphabet such as           course related to each other in many ways, but we can-
x or y, or letters with subscripts such as v1 , v2 , . . . ;   not express these relationships unless we are prepared
the parentheses “(” and “)”; the equality symbol “=”;          to extend the basic language L0 . For example, if we
the logical connectives ∧, ∨, ¬, →, ↔, which we read           wanted to write, in a formal way, the statement that
as “and,” “or,” “not,” “implies,” and “if and only if”; and    the exponential function turns addition into multipli-
the quantifiers ∃ and ∀, which we read as “there exists”        cation, then the obvious thing to write down would be
and “for all.” (If these symbols are unfamiliar to you,
                                                                (i) ∀x∀y exp(x) · exp(y) = exp(x + y).
then you should read the language and grammar
of mathematics [I.2](/part-01/language-and-grammar) before attempting to read this            Here we have two quantifiers, two bound variables x
article.) Here are a couple of formulas of L0 :                and y, and the equals sign, but the rest of the for-
                                                               mula involves extraneous elements such as “+”, “·”, and
  (i) ∀x ∀y ∃z (z = x ∧ z = y);
                                                               “exp”. Thus, to discuss the structure Rexp , we extend
 (ii) ∀x (x = y ∨ x = z).
                                                               the language L0 to a language Lexp , by adding in the
                                                               symbols “+”, “·”, “exp”, “<”, “0”, and “1”. Of course,
The first of these says that if any object exists at all then
                                                               these come with various syntactic rules that reflect the
there are at least three objects, and the second says that
                                                               fact that “+” is a binary operation, “exp” is a function,
y and z are the only objects. There is an important dif-
                                                               and so on. For instance, these rules would allow us to
ference between the two formulas: the variables x, y,
                                                               write exp(x + y) = z but would forbid us to write
and z that occur in the first formula are all bound vari-
                                                               exp(x = y) + z.
ables, which means that they are all attached to quan-
                                                                 Here are three more Lexp -formulas:
tifiers, whereas in the second formula, only the vari-
able x is bound, while the variables y and z are free.          (ii) ∀x (x > 0 → ∃y exp(y) = x);
This means that the first formula expresses a statement         (iii) ∃x x 2 = −1;
about some mathematical structure, while the second            (iv) ∃y y 2 = x.

636                                                                                       IV. Branches of Mathematics

We interpret these formulas as the assertions “for all           the reformulation was not obvious—it depended on a
positive x, there is a y such that ey = x,” “−1 is a             genuine mathematical theorem.
square,” and “x is a square.” The first three formulas              It is important to understand that formulas are
above are declarative statements about the structure             restricted in several ways, of which two stand out in
Rexp . Formulas (i) and (ii) are true in Rexp , while (iii) is   particular.
false. Formula (iv) is different because x is a free vari-
                                                                   • Formulas are finite. We do not allow formulas like
able: thus, it expresses a property of x. (For instance,
it is true if x = 8, but false if x = −7.) A sentence is             ∀x > 0 (x < 1 ∨ x < 1 + 1 ∨ x < 1 + 1 + 1 ∨ · · · ),
defined to be a formula with no free variables. If φ is               which would express the fact that R has the so-
an Lexp -sentence, then φ is either true or false in Rexp .          called Archimedean property. (If we did, then it
   If φ is a formula with free variables x1 , . . . , xn , and       would be much easier to define “<” above.)
a1 , . . . , an are real numbers, then we write Rexp 2             • Quantifiers range over elements of the structure,
φ(a1 , . . . , an ) if the formula φ is true for the partic-         and not subsets. This rules out a “second-order”
ular sequence (a1 , . . . , an ). We think of the formula as         formula such as
defining the set                                                         ∀S ⊆ R   (if S is bounded above,
      {(a1 , . . . , an ) ∈ Rn : Rexp 2 φ(a1 , . . . , an )},                        then S has a least upper bound),
                                                                     which would express the completeness of R by
that is, the set of all sequences (a1 , . . . , an ) for which
                                                                     quantifying over all subsets S of R. Since we
the formula is true when you set xi to equal ai for every
                                                                     look just at “first-order” formulas, what we are
i. For example, the formula
                                                                     studying is often called first-order logic.
        ∃z (x = z2 + 1 ∧ y = z · exp(exp(z)))
                                                                    Now that we have seen some examples of languages,
defines the parametrized curve                                    let us discuss them more generally. A language is basi-
               /+ 2        t,      0
                 t + 1, tee : t ∈ R .                            cally something like Lexp or Lrng above: that is, a set
                                                                 of symbols (combined with the basic logical symbols)
   For another example, one that illustrates an impor-           together with some rules concerning their use. If L is a
tant point, let us consider the structure (Z, +, ·, 0, 1):       language, then an L-structure is a mathematical struc-
that is, the integers, with addition, multiplication, 0,         ture in which all the sentences of L can be interpreted.
and 1. The language used to describe this structure is           (This concept will become clearer in a moment, when
the language of rings, Lrng = L(+, ·, 0, 1). (The nota-          we give a couple of examples.) An L-theory T is just a
tion here lists the symbols that we add to the basic             set of L-sentences, which one can think of as axioms
language L0 .) The language Lrng has no symbol for the           that an L-structure might or might not satisfy. A model
usual ordering on Z, but, surprisingly, this ordering can        of T is then an L-structure M in which all the sentences
nevertheless be defined in terms of Lrng . (To appreciate         of T , suitably interpreted, are true. For instance, the
the nonobviousness of this fact, the reader is encour-           structure was a model for the formulas (i) and (ii) of
aged to try to work out why it is true before reading            the language Lexp that we discussed earlier. (Another
on.)                                                             model for the same two formulas would be one in which
   The trick is to use a well-known theorem due to               we replaced the exponential function by the function
lagrange [VI.22](/part-06/joseph-louis-lagrange-17361813), which asserts that every nonnega-              2 x and interpreted “exp” as referring to that function
tive integer is a sum of four squares. It follows that the       instead.)
statement x ⩾ 0 can be defined by the formula                        The justification for the word “theory” is clearer in
                                                                 another example, the language of groups [I.3 §2.1](/part-01/fundamental-definitions),
       ∃y1 ∃y2 ∃y3 ∃y4       x = y12 + y22 + y32 + y42 .
                                                                 Lgrp = L(◦, e). Here, ◦ is a binary operation symbol
(Of course, we are also using the fact that a negative           and e is a constant. We might look at the theory Tgrp
integer cannot be written as a sum of four squares.              consisting of the sentences
Note too that a similar trick would work even if all one
                                                                   (i) ∀x∀y∀z x ◦ (y ◦ z) = (x ◦ y) ◦ z;
knew was that every nonnegative integer was a sum of
                                                                  (ii) ∀x x ◦ e = e ◦ x = x;
a hundred squares.) Once one has a way of expressing
                                                                 (iii) ∀x∃y x ◦ y = y ◦ x = e;
the statement that x is nonnegative, it is easy to define
the symbol “<”. The interesting aspect of this is that           which are the usual axioms for groups.

$IV$ . $23$ .

Logic and Model Theory

In order to interpret this language in some mathematical structure M we need M to consist of a set  M, a binary operation $f$ : $M^{2} \to M,$ and an element a $\in$ M. We then interpret “◦” as referring to f , “e” as referring to the element a, and quantification as being over the set M. Thus, for example, the interpretation of (iii) is that for every x in M there exists a y in M such that f (x , y)  =  a. Under this interpretation of the symbols of L grp , the structure M becomes an L grpstructure.
This L grpstructure is a model of T grp if in addition the sentences (i), (ii), and (iii) are all true. Since sentences (i) - (iii) are the axioms for groups, a model of T grp is nothing other than a group. We say that an L-sentence φ is a logical consequence of a theory T , and write $T_{2}$ φ, if φ is true in every model of T . That is, $T_{2}$ φ if φ is true in every structure in which all the sentences of T are true. Thus, the symbol “ $2$ ” has two different meanings, according to whether there is a structure or a theory on the left-hand side.
However, these two meanings are closely related in that they are both concerned with truth in models: $M_{2}$ φ means that φ is true in the model M, and $T_{2}$ φ, as we have just said, means that φ is true in every possible model of T . Either way, the symbol “ $2$ ” stands for a “semantic” notion of entailment. Returning to the example of groups, if φ is a sentence in L grp , then T grp $2$ φ if and only if φ is true for every group.
So, for instance, $T$ grp $2$ ∀x∀y∀z ( $xy = xz$ ∨ $y = z)$ , because if x, y, and z are elements of any group and $xy = xz$, then we can multiply both sides on the left by the inverse of x to deduce that $y = z$. We can now describe some of the basic problems in logic. (i) Given an L-theory T , can we decide if a sentence φ is a logical consequence of T , and if so how? (ii) Given an interesting mathematical structure, like R exp , or (N$, + , ·,$0 , 1), or the complex field, and a language L that describes the structure, can we determine which L-sentences are true of the structure?
(iii) Given a structure described by a language, do the subsets of the structure that can be defined in the language have special properties? Are they in some sense “simple”? For example, earlier we saw how to use L exp to define a certain curve in the plane. Now consider a very complicated set such

$637$

as a cantor set [III.17](/part-03/dimension) or the mandelbrot set [IV.14](/part-04/dynamics). Is it possible to prove that these sets cannot be defined in L exp because they are “too complex” in some sense? $2$ Completeness and Incompleteness Let T be an L-theory and let φ be an L-sentence. To show that $T_{2}$ φ, we must show that φ holds in every model of T . Checking all models of T sounds like a daunting task, but fortunately it is not necessary, since instead we can use a proof. One of the first tasks in mathematical logic is to say precisely what this means.
Suppose, then, that L is some language and that T is a set of sentences in L, i.e., an L-theory. Suppose also that φ is a formula of L. Informally speaking, a proof of φ assumes the statements of T and ends up establishing φ. We express this idea formally as follows. A proof of φ from $T$ is a finite sequence of L-formulas $\psi^{1}$ , . . . , $\psi^{m}$ (which one can think of as the lines of the proof) with the following properties: (i) each $\psi$ i is either a logical axiom, or a sentence of T , or a formula that follows from the previous formulas $\psi^{1}$ , . . .
, $\psi^{i} - {}^{1}$ by means of simple logical rules; ( $ii) \psi^{m} = φ.$ We shall not say precisely what a “simple logical rule” is, but three examples are • from φ$and$. si it follows that φ ∧ $\psi;$ • from φ ∧ $\psi$ it follows that φ; • from φ (x) it follows that ∃v φ (v). The other possible rules are similarly elementary. There are three points about proofs that need to be stressed. The first is that they are finite, which may seem too obvious to mention but is important because it has a number of consequences that are not obvious. The second is that proof systems have to be sound:
if there is a proof of φ from T , then φ is true in every model of T . To put this more succinctly, let us introduce the notation T * φ for the statement that there is a proof of φ from T . Then soundness is the assertion that if T * φ then $T_{2}$ φ. This is why we can prove that φ is true in every model of T by finding a proof rather than by looking at all the models. The third point is that it is easy to check whether a sequence of sentences is a proof. More precisely, there is an algorithm that can

$638$

look at $a$ sequence $\psi^{1}$ , . . . , $\psi^{m}$ and decide whether it really is a proof of φ from T . It is not too surprising that if φ can be proved from T , then φ is true in all models of T . Much more remarkable is that the converse is also true: if φ cannot be proved from T , then there must be a model of T in which φ is false. This tells us that two very different notions--the finitistic, syntactic notion of “proof” and the semantic notion of “logical consequence,” which concerns truth in models--always agree. This result is known as Gödel’s completeness theorem.
Here is its formal statement. Theorem. Let T be an L-theory and let φ be an L-sentence. Then $T 2φ$ if and only if $T *φ.$ Suppose that T is a simple theory like T grp , where there is an algorithm to decide whether a sentence is in T . (In the case of T grp this algorithm is particularly simple, but some theories might have infinitely many sentences .) We could write a computer program which, given a formula φ as its input, would systematically generate all possible proofs σ from T and check to see whether σ was a proof of φ.
If such a program finds a proof of φ, then it halts and tells us that $T_{2}$ φ. We say that {φ : $T_{2}$ φ} is recursively enumerable. However, one might hope for more. If $T_{2}$ φ, our program above will go on searching forever, so it will never tell us that there is no proof of φ. We say that an L-theory T is decidable if there is a computer program which, when given an L-sentence φ as input, will always halt and tell us, one way or another, whether $T_{2}$ φ.
Such a program would have to be cleverer than the one that just checks all possible proofs σ , and unfortunately such a program does not have to exist: as gödel [VI.92](/part-06/kurt-gdel-19061978) proved in his famous incompleteness theorem [V.15](/part-05/gdels-theorem), many important theories are undecidable. Here is a first version of his theorem, concerning the theory of the natural numbers (or theory of N for short), which means the set of all sentences in the language L rng that are true of the structure (N$, + , ·,$0 , 1) . Theorem. The theory of the natural numbers is undecidable.
At first, this might seem rather strange: after all, if T is the theory of N , then T contains all true sentences about N . So a sentence φ is provable from T if and only if it has a one-line proof (the line being φ itself). However, this does not make φ decidable, because the theory T is very complicated and there is no algorithm for deciding whether φ belongs to T .

IV. Branches of Mathematics

One approach to proving the incompleteness theorem is to associate a natural number with each computer program in such a way that statements about programs can be recast as statements about natural numbers. The theory of N then determines whether a program P halts on input x, thus solving what is known as the halting problem.
Since the halting problem was shown by turing [VI.94](/part-06/alan-turing-19121954) to be undecidable (a sketch of the proof can be found in the insolubility of the halting problem [V.20](/part-05/the-insolubility-of-the-halting-problem)), it follows that the theory of N is undecidable. How can we understand the theory of N ? One might hope to find a much smaller theory that yielded the same true sentences. That is, we could try to find a simple set of axioms about N that we know are true and hope that every true sentence follows from these axioms.
A good candidate is first-order Peano arithmetic, or PA. This is a theory in the language $L( +$ , ·, $0$ , 1) that involves a few simple axioms about addition and multiplication, such as ∀x∀y x · $(y + 1) = x$ · $y + x,$ together with axioms for induction. Why do we need more than one axiom of induction? The reason is that the obvious statement that expresses the principle of mathematical induction, namely ∀A $({}^{0}\in^{A}$ ∧ ∀x $x\in^{A} \to x + {}^{1}\in^{A}) \to$ ∀x $x\inA,$ is not a first-order sentence, because the quantifier is applied to all subsets A of N .
(It is also not a sentence in L rng since it uses the symbol “ $\in$ ” , but this is a less fundamental problem .) To get around this difficulty, one has a separate axiom of induction for each formula φ. It is the assertion that [φ (0) ∧ ∀x (φ (x) → φ (x + 1)) ] \to ∀x φ( x ). In words, this says that if φ(0) is true and $φ(x + 1)$ is true whenever φ (x) is true, then φ (x) is true for every x in N . Most of number theory can be formalized in PA and one might hope that PA * φ for every φ that is true in N . Sadly, this is not true. Here is a second version of Gödel’s incompleteness theorem.
Recall that the notation $N2\psi$ means simply that $\psi$ is true in N . Theorem. There is $a$ sentence $\psi$ such that $N2 \psi$ but $PA*\psi.$ Another way to state this result is to say that there is $a$ sentence $\psi$ such that $PA*\psi$ and $PA*¬\psi.$ To see

IV.23.   Logic and Model Theory                                                                                           639

that this is an equivalent statement, let ψ be any sen-             any satisfiable theory is consistent. On the other hand
tence. Then precisely one of ψ and ¬ψ is true. There-               if T is not satisfiable, then every sentence φ is a logi-
fore, if the theorem is false, then PA must prove either            cal consequence of T , for the trivial reason that there
ψ or ¬ψ. But this means that we can decide which by                 are no models of T in which φ is required to be true.
simply going through all possible proofs in PA until we             But the completeness theorem then tells us that T * φ
find a proof of ψ or a proof of ¬ψ.                                  for every φ. Choosing φ to be some contradictory state-
  Gödel’s original example of a true but unprovable                 ment, of the form ψ ∧ ¬ψ, for instance, we see that T is
sentence was a self-referential sentence that effectively            inconsistent. This way of reformulating the complete-
asserted                                                            ness theorem has the following simple consequence,
               “I am not provable from PA.”                         called the compactness theorem, which turns out to be
                                                                    surprisingly important, as we shall see.
More precisely, he found a sentence ψ for which he
was able to show that ψ is true in N if and only if ψ is            Theorem. If every finite subset of T is satisfiable, then
not provable from PA. With more work he showed that                 T is satisfiable.
there is a sentence that asserts
                                                                      The reason this is true is that if T is not satisfiable
                     “PA is consistent”
                                                                    then it is inconsistent (as we have just seen), which
that is unprovable from PA. The somewhat artificial                  means that a contradiction can be proved from T . Since
and met a mathematical nature of these sentences might                this proof, like all proofs, must be finite, it involves
lead one to hope that all “mathematically interesting”              only finitely many sentences from T . Therefore, T has
sentences about N are settled by PA. However, more                  a finite subset that implies a contradiction, which con-
recent work has shown that even this is a forlorn                   tradicts our assumption that all finite subsets of T are
hope, since there are undecidable statements related to             satisfiable.
ramsey’s theorem [IV.19 §2.2](/part-04/extremal-and-probabilistic-combinatorics) in finite combinatorics.
                                                                      Although the compactness theorem is an easy con-
  Undecidability also appears in number theory in
                                                                    sequence of the completeness theorem, it has many
a very basic way. Hilbert’s tenth problem asked if
                                                                    immediate intriguing consequences and lies at the
there is an algorithm to decide whether a polynomial
                                                                    heart of many constructions in model theory. Here are
p(X1 , . . . , Xn ) with integer coefficients has an integer
                                                                    two simple applications that show that theories have
zero. Davis, Matijasevic, Putnam, and Robinson showed
                                                                    many models that you might not expect. If M is some
that the answer is no.
                                                                    L-structure, let us write Th(M) for the theory of M:
Theorem. For any recursively enumerable S ⊆ N there                 that is, for the set of all L-sentences that are true in M.
is n > 0 and p(X, Y1 , . . . , Yn ) ∈ Z[X, Y1 , . . . , Yn ] such   We also extend our earlier notation M 2 φ from sin-
that m ∈ S if and only if p(m, Y1 , . . . , Yn ) has an integer     gle formulas to collections of formulas, so if M is an
zero.                                                               L-structure and T is an L-theory, then M 2 T means
                                                                    that every sentence of T is true in M, or in other words
  Since the halting problem provides an undecidable
                                                                    that M is a model of T .
recursively enumerable set, the answer to Hilbert’s
tenth problem is no. An important open question is                  Corollary. There exists an Lexp -structure M containing
whether there is an algorithm to decide if a polynomial             an infinite element a (which means that a > 1, a > 1+1,
with rational coefficients has a rational zero. Hilbert’s             a > 1 + 1 + 1, etc.), such that M 2 Th(Rexp ).
tenth problem is also discussed in the insolubility
                                                                       That is, there is a structure M in which all the true
of the halting problem [V.20](/part-05/the-insolubility-of-the-halting-problem), and other interesting
                                                                    first-order statements about the structure Rexp are still
examples of undecidability can be found in geometric
and combinatorial group theory [IV.10](/part-04/geometric-and-combinatorial-group-theory).                             true, but M is different from Rexp because it contains
                                                                    an infinite element. To prove this, we add one more
                                                                    constant symbol c to our language and consider the
                     3   Compactness
                                                                    theory T that consists of all the statements of Th(Rexp )
A theory T is called satisfiable if there are structures             (that is, all true statements about Rexp ), together with
that satisfy all of the sentences in T (that is, if T has a         the infinite sequence of statements c > 1, c > 1 + 1,
model), and we call T consistent if we cannot derive a              c > 1 + 1 + 1, and so on. If Δ is any finite subset of T ,
contradiction from T . Since our proof system is sound,             then we can make R a model of Δ simply by interpreting

640                                                                                        IV. Branches of Mathematics

c as a sufficiently large real number—large enough to              Hilbert’s Nullstellensatz itself is the same statement
satisfy all the statements of the form c > 1 + 1 + · · · + 1   but without the extra information about the degrees of
that belong to Δ. Since we can model every finite subset        the polynomials gi .
Δ of T , the compactness theorem tells us that we can            To see how the proposition is proved, we will restrict
model T itself. If M 2 T , then the element named by c         our attention to the case n = d = 2. This is just for
must be infinite.                                               notational simplicity: the proof is almost identical in
   The element 1/a will be an infinitesimal element of          larger cases. For each i between 1 and m let
M (which means that it satisfies statements that effec-
                                                                     Fi = ai X 2 + bi Y 2 + ci XY + di X + ei Y + fi .
tively say that it is smaller than 1/n for every positive
integer n). This observation is the first step toward a         For each k write down a formula φk that asserts that
rigorous development of calculus with infinitesimals.           there are no polynomials G1 , . . . , Gm with degree at
                                                                                           
   For another example, let Lrng = L(+, ·, 0, 1) be the        most k such that 1 =          Fi Gi . Let T be the theory of
language of rings. Let T be the set of L-sentences that        algebraically closed fields with the formulas φ1 , φ2 , . . .
are true in every finite field. We call T the theory of finite    and the assertion that the polynomials F1 , . . . , Fm have
fields. Recall that a field is said to have characteristic p     no common zero. If there is no positive integer l sat-
if p is the smallest positive integer (which has to be         isfying the conclusion of the proposition, then every
prime) such that 1 + 1 + · · · + 1 = 0 in the field, where      finite subset of T is satisfiable. Hence, by the compact-
the number of 1 s in the sum is p. If there is no such p,       ness theorem, T is satisfiable. If K 2 T , then F1 , . . . , Fm
then the field is said to have characteristic zero. Thus,       are polynomials over an algebraically closed field with
the fields Q, R, and C all have characteristic zero.            no common zero, but it is impossible to find polyno-
                                                                                              
Corollary. There is a field F with characteristic zero          mials G1 , . . . , Gm such that Gi Fi = 1. This contradicts
such that F 2 T .                                              Hilbert’s Nullstellensatz.
                                                                 Notice that in the above argument we did not say
   This result tells us that there is no possible set of       anything about the dependence of l on n, m, and
axioms that characterizes the finite fields: given any set       d. This is because the proof does not actually find a
of statements that are true in all finite fields, there is       bound: it merely shows that some sort of bound must
an infinite field in which they are also all true. To prove      exist. However, good explicit bounds were recently
it, we look at the theory T that consists of T together        discovered—see algebraic geometry [IV.4](/part-04/algebra) for more
with the statements 1 + 1 = 0, 1 + 1 + 1 = 0, and so on.
                                                               details.
Any finite set of statements in T will be true of a finite
field of sufficiently large characteristic, and thus satisfi-
                                                                               4    The Complex Field
able. By the compactness theorem T is satisfiable, but
a model of T clearly has to have characteristic zero.          A surprising counterpoint to Gödel’s incompleteness
   The compactness theorem can sometimes be used to            theorem is a result of tarski [VI.87](/part-06/alfred-tarski-19011983), which states that
show the existence of interesting algebraic bounds. The        the theories of the fields of real and complex numbers
next result allows us to deduce from hilbert’s null-           are decidable. The key to these results is a method
stellensatz [V.17](/part-05/hilberts-nullstellensatz) a stronger “quantitative version.” It       known as quantifier elimination. If we have a formula
is our first example of a statement that does not appear        without quantifiers that concerns the natural numbers,
to be logical in nature but which can be proved using          then it is easy to decide whether it is true or false. The
logic. Recall that a field is algebraically closed if every     negative solution to Hilbert’s tenth problem shows that
polynomial with coefficients in the field has a root in the       as soon as we start adding existential quantifiers (as we
field. (the fundamental theorem of algebra [V.13](/part-05/the-fundamental-theorem-of-algebra)               do if, for example, we assert that a polynomial has a
is the assertion that C is an algebraically closed field.)      zero), then we leave the realm of decidability.
                                                                  Thus, if we want to show that a formula is decidable,
Proposition. For any three positive integers n, m, d
                                                               it will be very useful if we can find an equivalent for-
there is a positive integer l such that if K is an alge-
                                                               mula that does not have quantifiers. And in some set-
braically closed field and f1 , . . . , fm are polynomials
                                                               tings, this turns out to be possible. For example, let
in n variables with coefficients in K, degree at most
                                                               φ(a, b, c) be the formula
d and no common zero, then there are polynomials
                                             
g1 , . . . , gm of degree at most l such that gi fi = 1.                           ∃x ax 2 + bx + c = 0.

IV.23.   Logic and Model Theory                                                                                           641

The usual rule for solving quadratics tells us that, as             The first is that sentences in the language Lrng can-
long as a = 0, this is true in R if and only if b 2 ⩾ 4 ac.         not distinguish between different algebraically closed
Therefore, R 2 φ(a, b, c) if and only if                            fields of the same characteristic. That is, if φ is any
[(a = 0 ∧ b2 − 4 ac ⩾ 0) ∨ (a = 0 ∧ (b = 0 ∨ c = 0))].             Lrng -sentence that is true for some algebraically closed
                                                                    field of characteristic p (where p is allowed to be zero),
As for the complex numbers, it is easy to see that C 2
                                                                    then it is true in every algebraically closed field of
φ(a, b, c) if and only if
                                                                    characteristic p.
                   a = 0 ∨ b = 0 ∨ c = 0.                            To see why this is true, let K and F be two alge-
In either case, φ is equivalent to a formula with no                braically closed fields of characteristic p, and suppose
quantifiers.                                                         that K 2 φ (or in other words that φ is true of K).
  For a second example, let φ(a, b, c, d) be the formula            Let k be the field Q if the characteristic is zero and
                                                                    the field with p elements otherwise. Tarski’s theorem
  ∃x∃y∃u∃v (xa + yc = 1 ∧ xb + yd = 0                               tells us that there is a quantifier-free sentence ψ that
                       ∧ ua + vc = 0 ∧ ub + vd = 1).                is equivalent to φ in all algebraically closed fields of
The formula φ(a, b, c, d) is the obvious way of assert-             characteristic p. However, the extremely simple nature
ing that the matrix ( ac d
                         b
                           ) is invertible. However, by the         of the quantifier-free sentences of Lrng means that their
determinant [III.15](/part-03/determinants) test, we know that, for any field               truth or falsity in any given field depends only on the
F , F 2 φ(a, b, c, d) if and only if ad − bc = 0. Thus             elements 0, 1, 1 + 1, and so on. Therefore,
the existence of an inverse can be expressed by the                              K 2 ψ  k 2 ψ  F 2 ψ.
quantifier-free formula ad − bc = 0.
                                                                    Since K 2 φ and φ and ψ are equivalent in all alge-
   Tarski proved that we can always eliminate quanti-
                                                                    braically closed fields of characteristic p, it follows that
fiers in algebraically closed fields.
                                                                    F 2 φ as well.
Theorem. For any Lrng -formula φ there is a quantifier-
free formula ψ such that φ is equivalent to ψ in every                 A consequence of this theorem is that an Lrng -sen-
algebraically closed field.                                          tence φ is true of the complex numbers if and only
                                                                    if it is true of the algebraic numbers Qalg . (Recall that
   Further more, Tarski gave an explicit algorithm for               these are all roots of polynomials with integer coef-
eliminating the quantifiers.                                         ficients. As one would expect, the algebraic numbers
   The equivalent quantifier-free formulas above were                form an algebraically closed field, though this is not
both finite Boolean combinations of formulas of the
                                                                    a wholly obvious fact.) Thus, rather surprisingly, if we
form p(v1 , . . . , vn ) = q(v1 , . . . , vn ), where p and q are
                                                                    wish to prove something about Qalg , we have the option
polynomials in n variables with integer coefficients. It
                                                                    of working in C and using the methods of complex
is not hard to see that this is true of any quantifier-
                                                                    analysis; similarly, if we want to prove something about
free Lrng -formula. It follows that a quantifier-free Lrng -
                                                                    C we can, if it makes things easier, work in Qalg and use
sentence is particularly simple: if no free variables are
                                                                    number-theoretic methods.
allowed and no quantifiers are allowed, then there can-
                                                                       Combining these ideas with the completeness theo-
not be any variables! Therefore, the polynomials p and
                                                                    rem gives another useful tool. If φ is any Lrng -sentence,
q have to be constant, which means that a quantifier-
                                                                    then the following are equivalent:
free Lrng -sentence is a finite Boolean combination of
formulas of the form k = l (where this should be                      (i) φ is true in every algebraically closed field of
regarded as an abbreviation for 1 + 1 + · · · + 1 =                       characteristic zero;
1 + 1 + · · · + 1, with k 1 s on the left-hand side and               (ii) for some m > 0, φ is true in every algebraically
l 1 s on the right-hand side).                                             closed field of characteristic p > m;
   This leads to the decidability result. If we want to             (iii) there are arbitrarily large p such that φ is true in
know whether C 2 φ, then we use Tarski’s algorithm to                     some algebraically closed field of characteristic p.
convert φ into an equivalent quantifier-free sentence.
But the very simple form of such sentences makes their                Let us see why this is so. Suppose first that φ is true
truth or falsity easy to decide.                                    in every algebraically closed field of characteristic 0.
   In the remainder of this section, we shall discuss a             The completeness theorem then implies that there is
number of other consequences of Tarski’s theorem.                   a proof of φ from the axioms for algebraically closed

642                                                                                            IV. Branches of Mathematics

fields combined with the sentences 1 = 0, 1 + 1 = 0,            p-element field. (It can be shown that any field F is con-
1+1+1 = 0, and so on. Since proofs are finite sequences          tained in an algebraically closed field. Roughly speak-
of formulas, there must be some m such that the proof            ing, the algebraic closure of F is the smallest alge-
used only the first m of these sentences (not necessar-           braically closed field that contains F .) Suppose, then,
                                                                                          alg
ily all of them). If p is some prime bigger than m, then         that some φd fails for Fp . Then there must be an injec-
                                                                                                 alg      alg
this proof shows that φ holds in algebraically closed            tive polynomial map f from (Fp )n to (Fp )n that is not
                                                                                                          alg
fields of characteristic p, since all the sentences we            surjective. Since every finite subset of Fp is contained
used are true in such fields.                                     in a finite subfield, there is a finite subfield k such that
  We have just shown that (i) implies (ii). It is obvious        all the n polynomials used to define f have coefficients
that (ii) implies (iii). To see that (iii) implies (i), let us   in k, from which it follows that f maps kn to kn . More-
suppose that (i) fails, so that there is an algebraically        over, by enlarging k if necessary, we can ensure that
closed field of characteristic zero in which ¬φ is true.          there is an element of kn that is not in the image of f .
Then, by the principle we proved earlier, ¬φ is true in          But now we have succeeded in transferring ourselves to
every algebraically closed field of characteristic zero.          a finite field: this function f : kn → kn is an injection
Thus, since (i) implies (ii), there is an m such that ¬φ is      between finite sets that is not a surjection, which is a
true in every algebraically closed field of characteristic        contradiction.
p > m. Therefore (iii) fails.                                       Quantifier elimination has other useful applications.
                                                                 Let F be a field, let K be a subfield of F , let ψ(v1 , . . . , vn )
  An interesting application of this theorem was found
                                                                 be a quantifier-free formula, and let a1 , . . . , an be ele-
by Ax. It is another example of a statement that has             ments of K. Since, as we have already mentioned,
nothing to do with logic, but which can be proved using          quantifier-free formulas are just Boolean combina-
logical tools. It is perhaps more striking than the pre-         tions of equalities between polynomials, the statement
vious example because in this case one does not even             ψ(a1 , . . . , an ) involves just the elements of K, and is
feel with hindsight that the statement did after all have        therefore true in K if and only if it is true in F . By quan-
some logical content.                                            tifier elimination, if K and F are algebraically closed,
                                                                 then the same is true for all formulas ψ, and not just
Theorem. If a polynomial map from Cn to Cn is an
                                                                 those that are quantifier free. From this observation we
injection, then it must also be a surjection.
                                                                 can prove the “weak version” of Hilbert’s Nullstellen-
  The basic thought behind the proof of this result is           satz. (For the proof, we shall need to assume a certain
very simple indeed: what is remarkable is that it is of          degree of familiarity with the basics of ring theory
any help. It is the observation that if k is a finite field,       [III.81](/part-03/rings-ideals-and-modules). We shall also write K[X] for the polynomial ring
then every injective polynomial map from kn to kn is a           K[X1 , . . . , Xn ] and . ar{v} for the n-tuple (v1 , . . . , vn ).)
surjection. This is true because every injection from a          Proposition. Suppose that K is an algebraically closed
finite set to itself is automatically a surjection.               field, P is a prime ideal in K[X], and g is a polynomial
  How do we exploit this observation? Well, the pre-             in K[X] that does not belong to P . Then there is some
vious results tell us that, in several situations, state-        a = (a1 , . . . , an ) in K n such that f (a) = 0 for every f
ments are true for one field if and only if they are true         that belongs to P , and such that g(a) = 0.
for another. We shall use these results to transfer our
                                                                 Proof. Let F be the algebraic closure of the fraction field
problem from C, where it is hard, to a finite field k,
                                                                 of the integral domain K[X]/P . We can view F as an
where it is trivial. The first step is a routine exercise:
                                                                 extension field of K with a natural homomorphism η :
one shows that for each positive integer d there is a
                                                                 K[X] → F . Let bi = η(Xi ) and let b ∈ F n be the element
sentence φd in Lrng that expresses the fact that every
                                                                 (b1 , . . . , bn ). Then f (b) = 0 for all f ∈ P and g(b) = 0.
injective polynomial map from F n to F n , with the n
                                                                 We would like to find such an element in K. Since ideals
polynomials all of degree at most d, is surjective. We
                                                                 in polynomial rings are finitely generated, we can find
would like to prove that all the sentences φd are true
                                                                 polynomials f1 , . . . , fm that generate P . The sentence
when F = C.
   The equivalences in the previous theorem imply that            ∃v1 · · · ∃vn (f1 (. ar{v}) = · · · = fm (. ar{v}) = 0 ∧ g(. ar{v}) = 0)
it is enough to prove that the sentences φd are true             is true in F . Thus it is also true in K and we can find a ∈
                       alg
when F is the field Fp , the algebraic closure of the             K n such that each f ∈ P vanishes at a but g(a) = 0.

IV.23.   Logic and Model Theory                                                                                           643

   Notice that the above proof has the same basic struc-       What are the quantifier-free formulas of Lor ? It turns
ture as the result about polynomial maps on Cn . The         out (and is not hard to show) that they are finite Boolean
idea was to come up with a different field, in this case       combinations of formulas of the form p(v1 , . . . , vn ) =
F , where the result was easy to prove, and use logi-        q(v1 , . . . , vn ) and formulas of the form p(v1 , . . . , vn ) <
cal ideas to deduce the result for the field we were          q(v1 , . . . , vn ), where, as in the case of Lrng , p and q are
originally interested in, in this case K.                    polynomials in n and m variables, respectively, with
                                                             integer coefficients. As for quantifier-free sentences,
                     5 The Reals                             they are Boolean combinations of sentences of the form
                                                             k = l and sentences of the form k < l.
Quantifier elimination in the language of rings does
                                                               One consequence of quantifier elimination is the fol-
not work in the field of real numbers. For instance, the
                                                             lowing result, which tells us that every Lor statement
formula
                                                             that is true in R can be proved from the real-closed-
                    ∃y x = y · y,
                                                             field axioms. One says that these axioms completely
which asserts “x is a square,” is not equivalent to a        axiomatize the theory of the real field.
quantifier-free formula in the language of rings. Of
                                                             Corollary. Let K be a real closed field and let φ be an
course, x is a square if and only if x ⩾ 0. So we could
                                                             Lor -sentence. Then K 2 φ if and only if R 2 φ.
eliminate this quantifier if we were prepared to add a
symbol for the ordering to our language. An amazing            To prove this, first use Tarski’s theorem to find a
result of Tarski shows that this is the only obstruction     quantifier-free sentence ψ such that φ and ψ are equiv-
to quantifier elimination.                                    alent in any real closed field. Every ordered field has
   Let Lor be the language of ordered rings, which is the    characteristic zero and contains the rational numbers
language of rings with the addition of the symbol “<”        as an ordered subfield. Therefore Q is a subfield of both
for an ordering. Which Lor -sentences are true in the real   K and R. But the very simple nature of quantifier-free
field? Some of the properties of R that we can formalize      sentences in Lor means that
in Lor include:                                                             K 2 ψ  Q 2 ψ  R 2 ψ.
 (i) the axioms for ordered fields, such as the sentence      Since φ and ψ are equivalent in all real closed fields, it
                                                             follows that K 2 φ if and only if R 2 φ.
            ∀x∀y (x > 0 ∧ y > 0) → x · y > 0;
 (ii) the intermediate-value property for polynomials,         By the completeness theorem, φ is true in every real
      which states that if p(x) is a polynomial and there    closed field if and only if we can prove φ from the
      exist a and b such that a < b and p(a) < 0 <           axioms for real closed fields, and φ is false in every
      p(b), then there exists a real number c such that      real closed field if and only if we can prove ¬φ from
      a < c < b and p(c) = 0.                                the axioms for real closed fields. It follows that the Lor -
                                                             theory of the real field is decidable. Indeed, if φ is true
The intermediate-value property is expressed not by          in R, then by the corollary above, it is true in every
just one sentence, but by the infinite sequence of            real closed field, so it has a proof. If φ is false in R,
sentences                                                    then ¬φ is true in R, so for the same reason ¬φ has a
                                                             proof. Therefore, to decide whether φ is true, one can
  ∀d0 · · · ∀dn ∀a∀b
                                                        search through all possible proofs from the axioms of
                di ai < 0 <   di b i → ∃c   di c i = 0 ,     real closed fields until one proves either φ or ¬φ.
one for each positive integer n.                                Let M be a mathematical structure consisting of a set
  An ordered field that satisfies the intermediate-value       M and various other parts such as functions and binary
property is called a real closed field. It turns out that     operations. A subset X of M is called definable, with
an equivalent way of axiomatizing real closed fields is       respect to some language L that describes M, if there
as ordered fields for which every positive element is a       is an L-formula φ with a free variable x such that X =
square and every polynomial of odd degree has a zero.        {x ∈ M : φ(x)}. Quantifier elimination gives us a good
Tarski’s theorem is the following statement.                 geometric understanding of the definable sets. If K is
Theorem. For any Lor -formula φ there is a quantifier-        an ordered field, we say that X ⊆ K n is semialgebraic
free Lor -formula ψ such that φ and ψ are equivalent in      if it is a finite Boolean combination of sets of the form
every real closed field.                                         {x ∈ K n : p(x) = 0}       and    {x ∈ K n : q(x) > 0},

$644$

where p, q $\in$ K[X 1 , . . . , X n]. By quantifier elimination, the definable sets in a real closed field are easily shown to be exactly the semialgebraic sets. A simple application of this fact is that if A is a semialgebraic subset of R n , then the closure of A is also semialgebraic. Indeed, the closure of A is, by definition, the set n (xi - yi)2 <   .

$x\inR^{n}$ : ∀  $> 0$ ∃y $\inAi = 1$

This is a definable set, and hence a semialgebraic set. Semialgebraic subsets of the real line are particularly simple. For any real polynomial f in one variable, the set {x $\in R$ : $f(x) > 0$ is a finite union of open intervals. Therefore, any semialgebraic subset of R is a finite union of points and intervals. This simple fact is the starting point of the modern model-theoretic approach to R . Let L ∗ be a language extending L or and let R ∗ denote the reals considered as an L ∗ - structure . For example, below we will be interested in the case where L ∗  =  L exp and R ∗  =  R exp .
We say that R ∗ is o-minimal if every subset of R definable using L ∗ - formulas is a finite union of points and intervals. The “o” in “o-minimal” stands for “ordered.” R ∗ is o-minimal if every definable subset of R can be defined using only the ordering. Pillay and Steinhorn introduced o-minimality, generalizing an earlier idea of van den Dries. It turned out to be a key definition, because although o-minimality is defined in terms of the one-dimensional set R , it has remarkably strong consequences for definable subsets of $R^{n}$ when $n > 1$ .
To explain this, we inductively define a collection of basic sets called cells as follows.

• A subset X of R is a cell if and only if it is either a point or an interval.

• If X is a cell in R $n$ and $f$ is a continuous definable function from X to R , then the graph of f (which is a subset of $R^{n} + {}^{1})$ is a cell.

• If X is a cell in R $n$ and $f$ and g are continuous definable functions from X to R such that f (x) $>$ g (x) for every x $\in$ X, then { (x , y) : x $\in$ X and f (x) $>$ y $>$ g (x) } is a cell, as are { (x , y) : x $\in$ X and f (x) $>$ y} and { (x , y) : x $\in$ X and y $>$ f (x) }. Cells are topologically simple definable sets that play the role of open intervals in R . It is not hard to see that any cell is homeomorphic to ( $0$ , $1$ ) n for some n. Remarkably, all definable sets can be decomposed into

IV. Branches of Mathematics

cells. The following theorem is a precise version of this statement. Theorem. (i) If R ∗ is an o-minimal structure, then every definable set X can be partitioned into finitely many disjoint cells. (ii) If f : X $\to$ R is a definable function, then there is a partition of X into finitely many cells such that f is continuous on each cell. This is just the beginning. In any o-minimal structure, definable sets have many of the good topological and geometric properties of the semialgebraic sets. For example:

• Any definable set has finitely many connected components.

• Definable bounded sets can be definably triangulated.

• Suppose that X is a definable subset of R n  +  m . For each a $\in$ R m , let X a be the “cross-section” {x $\in$ R n : (x , a) $\in$ X}. Then there are only finitely many different homeomorphism types for the sets X a . As these results were known for semialgebraic sets, the real interest is in finding new o-minimal structures. The most interesting example is R exp . It is known that R exp does not have quantifier elimination in the language L exp . Wilkie showed that the next best thing is true.
We say that R n is an exponential variety if it is the zero set of a finite system of exponential terms. For example, the set { (x ,  y, z) : $x =$ exp (y)2 - z3 ∧ exp (exp (z))  =  y  -  x} is an exponential variety. Theorem. Every L expdefinable subset of R n is of the form {x $\inR^{n}$ : ∃y $\inR^{m}(x$ , $y)\in^{V}$ for some exponential variety V ⊆ R n $+$ m . In other words, the definable sets, though not exponential varieties themselves, are projections of exponential varieties, which makes them tractable.
Indeed, a theorem from real analytic geometry, due to Khovanskii, states that every exponential variety has a finite number of connected components. Since this property is preserved by projections, it follows that every definable set has a finite number of connected components, and also that every definable subset of the real line is a finite union of points and intervals. Thus R exp is o-minimal and all of the results above about definable sets in o-minimal structures apply.

$IV$ . $23$ .

Logic and Model Theory

Tarski asked if the theory of R exp is decidable. This question remains open, but the answer is known to follow from the following conjecture of Schanuel in transcendental number theory. Conjecture. Suppose that $\lambda^{1}$ , . . . , $\lambda^{n}$ are complex numbers that are linearly independent over Q . Then the field $Q(\lambda^{1}$ , . . . , $\lambda^{n}$ , $e\lambda^{1}$ , . . . , $e\lambda^{n})$ has transcendence degree at least n. Macintyre and Wilkie have shown that if Schanuel’s conjecture is true, then the theory of R exp is decidable.
$6$ The Random Graph Model-theoretic methods give interesting information about random graphs [III.34] . Suppose we construct a graph as follows. The vertex set is the set N of all natural numbers N . To decide whether we will have an edge between $x$ and  y(with x = y )  we flip a coin, putting an edge there if and only if we get heads. Although these constructions are random, we will show below that, with probability $1$ , any two such graphs are isomorphic. The proof depends on the following extension property.
Let A and B be disjoint finite subsets of N , and suppose that they have sizes $n$ and $m$, respectively. We would like to find a vertex x $\in$ N that is joined to every element of A and to no element of B. Now for any particular x, the probability that it does not have the desired property is $p = 1 - 2 - (n + m)$ . Therefore, if we look at N different vertices, the probability that none of them has the desired property is p N . Since this converges to zero with N, the probability that at least one $x \in N$ has the property is $1$ .
Moreover, since there are only countably many disjoint pairs (A , B) of finite sets, with probability $1$ it is the case that for every such pair (A , B) one can find a vertex x that is joined to every vertex in A and to no vertex in B. We can formalize this observation in a model-theoretic way. Let L $g = L$ (∼), where “∼” is a binary relation symbol (which we read as “is joined to ”). We let T be the L gtheory : (i) ∀x∀y x ∼ y $\to$ y ∼ x; (ii) ∀x ¬ (x ∼ x); (iii) Φ n, m for $n,m \ge 0$ . Here Φ n, m is the sentence ∀$x^{1}$ · · · ∀x n ∀$y^{1}$ · · · ∀y m

$n 1111$

m

n

m

$x^{i} = y^{j} \to$ ∃z

x i ∼ z ∧

¬ (y i ∼ z) / $i = 1j = 1i = 1i = 1645$

The first two sentences tell us that the relation “∼” defines a graph, and for each pair (n , m) the sentence Φ n, m tells us that the extension property holds for all pairs of disjoint sets A and B with A of size n and B of size m. Thus, a model of T is a graph for which the extension property holds for any pair of disjoint finite sets of vertices. The argument above shows that with probability $1$ the random graphs we constructed are models of T . Now let us see why they are isomorphic (again with probability $1$ ). This will be an immediate consequence of the following theorem. Theorem.
If $G^{1}$ and $G^{2}$ are any two countable models of T , then $G^{1}$ is isomorphic to $G^{2}$ . Recall that an isomorphism between $G^{1}$ and $G^{2}$ means a bijection f from the vertex set of $G^{1}$ to the vertex set of $G^{2}$ such that x is joined to y in $G^{1}$ if and only if f (x) is joined to f (y) in $G^{2}$ . The proof, which we shall now sketch, is a “back-and-forth” argument that gradually builds up an isomorphism between $G^{1}$ and $G^{2}$ . First, let $a^{0}$ , $a^{1}$ , . . . be an enumeration of the vertices of $G^{1}$ and let $b^{0}$ , $b^{1}$ , . . .
be an enumeration of the vertices of $G^{2}$ . Let us set $f(a^{0})$ to be $b^{0}$ . Next, we choose an image for $a^{1}$ : if $a^{1}$ is joined to $a^{0}$ then we need to find some vertex that is joined to $b^{0}$ and if $a^{1}$ is not joined to $a^{0}$ then we need to find a vertex that is not joined to $b^{0}$ . Either way, we can do it because G is a model of T , so it satisfies the extension property.
(The particular cases we use here are $Φ^{1}$ , 0 and $Φ^{0}$ , 1 .) It is tempting to continue finding images for $a^{2}$ , $a^{3}$ , and so on, in each case using the extension property to make sure that the images are joined to each other if and only if the original vertices are. The trouble with this is that we may not end up with a bijection, since for any particular b j there is no guarantee that we will ever choose it as the image of some a j .
However, we can remedy this by alternately choosing an image for the first a i that does not yet have an image, and a preimage for the first b j that does not yet have a preimage. In this way we build the desired isomorphism. It was not essential to use model theory to prove the above result. However, it has the following very nice model-theoretic consequence. Corollary. For any L gsentence φ either φ is true in every model of T or ¬φ is true in every model of T . Moreover, there is an algorithm that will tell us which of φ or ¬φ is true in every model of T .
To prove this, one first applies a slight strengthening of the compactness theorem, which allows one to

646                                                                                       IV. Branches of Mathematics

conclude that if the result is false then there are count-        Note the following interesting consequence of this
able models G1 and G2 of T such that φ is true in G1           result. It is not hard to prove that the
                                                                                                     probability that a
and ¬φ is true in G2 . But this shows that G1 and G2 are       random graph contains at least 12 N    2 edges converges
not isomorphic, and therefore directly contradicts the         to 12 as N tends to infinity. Combining this simple
previous theorem.                                              observation with the theorem we can deduce that the
   To decide which of φ or ¬φ is true in every model of        property “contains at least as many edges as nonedges”
T , one searches through all possible proofs from the          cannot be expressed by a first-order formula in Lg . This
sentences of T . By the completeness theorem, one or           is a purely syntactic result, but to prove it we made
other of the statements has a proof, so we will eventu-        essential use of model theory.
ally find either a proof of φ or a proof of ¬φ. At that
point we will know which of φ and ¬φ is true in every          Further Reading
model of T .
                                                               Shoenfield (2001) is an excellent introduction to logic
   The theory T also gives us information about random         including the completeness and incompleteness the-
finite graphs. Let GN be the set of all graphs with ver-        orems, basic computability theory, and elementary
tices {1, 2, . . . , N}. We consider the probability measure   model theory.
on GN in which we make all graphs equally likely. This           The examples described here give only a small part
is the same as constructing a random graph on N ver-           of the flavor for modern model theory. Hodges (1993),
tices, where for each i and j we toss an unbiased coin         Marker (2002), and Poizat (2000) are comprehensive
in order to decide whether i is joined to j. For any Lg -      introductions. Marker et al. (1995) contains several
sentence φ, let us write p N (φ) for the probability that       introductory articles on the model theory of fields.
a random graph on N vertices satisfies φ.                         In addition to providing tools for analyzing defin-
   An easy variant of the argument for infinite graphs          ability in particular structures, a major goal in model
shows that for each extension axiom Φn, m , the proba-          theory is proving structure theorems for wide classes
bility p N (Φn, m ) tends to 1. Therefore, for any fixed M,       of mathematical structures. A key feature is the devel-
if N is sufficiently large, then with very high probability      opment by Shelah of notions of dependence generaliz-
a random graph on N vertices satisfies all the axioms           ing linear dependence in vector spaces and algebraic
Φn, m with n, m ⩽ M.                                            dependence in fields. Led by Hrushovski and Zilber,
   This observation allows us to use the theory T to get       model theorists have studied the geometry of depend-
a good understanding of the asymptotic properties of           ence and found that frequently it can be used to detect
random graphs. The following result is called a zero–          hidden algebraic structure.
one law.                                                         In recent years, abstract model theory has found in-
                                                               teresting applications in classical mathematics. Hrush-
Theorem. Given any Lg -sentence φ, the probability
                                                               ovski used these ideas to give a model-theoretic proof
p N (φ) either tends to 0 or tends to 1 as N → . nfty. More-
                                                               of the Mordell–Lang conjecture for function fields in
over, T axiomatizes the set of statements φ such that
                                                               Diophantine geometry. Bouscaren (1998) is an excellent
the limit is 1, called the almost sure theory of graphs,
                                                               collection of survey articles leading up to Hrushovski’s
which is a decidable theory.
                                                               proof.
   This follows from our previous results. We saw ear-
                                                               Bouscaren, E., ed. 1998. Model Theory and Algebraic Geom-
lier that either φ is true in every model of T or ¬φ is
                                                                 etry. An Introduction to E. Hrushovski’s Proof of the Geo-
true in every model of T . In the first case, by the com-         metric Mordell–Lang Conjecture. New York: Springer.
pleteness theorem there must be a proof of φ from T .          Hodges, W. 1993. Model Theory. Encyclopedia of Math-
Since proofs are finite, this proof can use only finitely          ematics and Its Applications, volume 42. Cambridge:
many of the statements Φn, m . Therefore, there exists            Cambridge University Press.
some M such that if G 2 ΦM, M , then G 2 φ. But if              Marker, D. 2002. Model Theory: An Introduction. New York:
G is a random graph on N vertices, then the prob-                Springer.
                                                               Marker, D., M. Messmer, and A. Pillay. 1995. Model Theory
ability that G 2 ΦM, M tends to 1, and therefore the
                                                                 of Fields. New York: Springer.
probability p N (φ) that G 2 φ tends to 1 as well. The          Poizat, B. 2000. A Course in Model Theory. An Introduction
same argument holds if ¬φ is true in every model of T            to Contemporary Mathematical Logic. New York: Springer.
and shows that p N (¬φ) tends to 1, which implies that          Shoenfield, J. 2001. Mathematical Logic. Natick, MA: A. K.
p N (φ) tends to 0.                                               Peters.