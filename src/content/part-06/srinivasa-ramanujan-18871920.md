# Srinivasa Ramanujan (1887–1920)

VI.82.   Srinivasa Ramanujan                                                                                                 807

theorem and the Skolem paradox. Skolem had real-                for many of the breakthroughs in number theory in
ized, long before anyone else, that mathematical the-           the twentieth century. He worked on analytic num-
ories nearly always have several different models. He            ber theory, as well as on elliptic functions [V.31](/part-05/the-riemannroch-theorem),
argued that there are axiom systems, and one can prove          hypergeometric series, and the theory of continued
theorems in these settings, but what is meant by the            fractions [III.22]. Much of this work was carried out
objects that obey these rules will generally vary from          together with his friend, benefactor, and collaborator
case to case. From this he drew the radical conclu-             g. h. hardy [VI.73](/part-06/godfrey-harold-hardy-18771947).
sion that attempts to build mathematics on axiomatic               Hardy and Ramanujan founded the powerful “circle
theories were unlikely to succeed (although nowadays,           method” in their remarkable paper that gave an exact
of course, mathematics built on axiomatic foundations           formula for p(n), the number of integer partitions of n.
has become overwhelmingly successful).                          Ramanujan independently discovered the two identi-
   Skolem’s insistence on first-order theories, in which         ties that came to be known as the Rogers–Ramanujan
variables may range only over elements, not subsets,            identities:
was one that his contemporaries took time to accept.                  . nfty                  2
                                                                                      qn
But that viewpoint, and the great clarity that comes with         1+
                                                                      n=1
                                                                          (1 − q)(1 − q 2 ) · · · (1 − q n )
it, is today the overwhelmingly dominant one. Skolem                                           . nfty
                                                                                                              1
insisted that the only possible logic to use in any inves-                                =                                  ,
ti gation of the foundations of mathematics was first-                                         n=0
                                                                                                   (1 − q 5 n+1 )(1 − q5 n+4 )

order logic [IV.22 §3.2](/part-04/set-theory), and that second-order theo-                 . nfty
                                                                                          2
                                                                                     qn +n
ries were impermissible in the foundations, precisely            1+
                                                                          (1 − q)(1 − q 2 ) · · · (1 − q n )
because second-order theories allowed the axioms to                   n=1
                                                                                              . nfty
refer to sets, but the nature of sets was, in his view,                                                        1
                                                                                          =                                  .
one of the topics to be elucidated. Skolem also felt                                         n=0
                                                                                                   (1 − q 5 n+2 )(1 − q5 n+3 )

that, while one can talk of individual objects, talk of all     These have applications ranging from lie theory
objects of a certain kind can be problematic if it is too       [III.48](/part-03/lie-theory) to statistical physics. The importance of these
in formal. Indeed, a generation earlier mathematicians           identities relates to the fact that the generating func-
had encountered the paradoxes of naive set theory,              tion [IV.18 §§2.4, 3] for p(n) is
where loose talk about all sets of certain kinds causes                                    . nfty
                                                                                                 1
real difficulties: for example, Russell’s paradox of the                                                .
set of all sets that are not members of themselves (if it                                  n=0
                                                                                               1 − qn
is a member of itself, then it is not, but if it is not, then   Thus, for example, the second identity asserts that the
it is).                                                         number of partitions of n into parts all of which are
   Skolem’s work is also characterized by a distrust of         2 or 3 mod 5 is equal to the number of partitions into
the concept of infinity and a preference for finitistic rea-      distinct parts, all greater than 1, in which no two parts
soning. He was an early advocate of primitive recur-            are consecutive integers.
sion [II.4 §3.2.1](/part-02/algorithms), which deals with the theory of what           In his work on p(n), Ramanujan discovered and
are called computable functions, as a way of avoiding           proved many divisibility properties, e.g., that 5 always
paradoxes concerning the infinite.                               divides p(5 n + 4) and that 7 always divides p(7 n + 6).
                                                                His conjectures on these divisibility properties inspired
Further Reading
                                                                the development of extensive methods in modular
Fenstadt, J. E., ed. 1970. Thoralf Skolem: Selected Works in    forms [III.59](/part-03/modular-forms), and his last conjecture was finally settled
  Logic. Oslo: Universitetsfor laget.                            in 1969 by Oliver Atkin.
                                                 Jeremy Gray      All Ramanujan’s studies involving p(n) concerned
                                                                the modular form
                                                                                     . nfty
VI.82      Srinivasa Ramanujan                                                       
                                                                      η(w) = q1/24         (1 − qn ),   where q = e2π iw .
b. Erode, India, 1887; d. Madras (now Chennai), India, 1920
                                                                                     n=1
Partitions; modular forms; mock theta functions
                                                                The relevance of this is that q1/24 /η(w) is the generat-
Ramanujan, a self-taught Indian genius, made monu-              ing function for p(n). Of special interest to Ramanujan
mental contributions to mathematics that set the stage          was the arithmetic function τ(n), defined by the 24 th