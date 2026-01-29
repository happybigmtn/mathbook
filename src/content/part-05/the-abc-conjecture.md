# The ABC Conjecture

                                                                                                Part V
                           Theorems and Problems

                                                              smaller than x 2 . But the ABC conjecture has other con-
V.1    The ABC Conjecture                                     sequences that are less obvious, and more important,
                                                              than this one. For instance, Bombieri has shown that
The ABC conjecture, proposed by Masser and Oesterlé           the ABC conjecture implies roth’s theorem [V.22](/part-05/liouvilles-theorem-and-roths-theorem),
in 1985, is a bold and very general conjecture in number      Elkies has shown that it implies the mordell conjec-
theory with a wide range of important consequences.           ture [V.29](/part-05/rational-points-on-curves-and-vi40-ernst-eduard-kummer-18101893), and Granville and Stark have shown that a
The rough idea of the conjecture is that it is impossible     strengthening of the ABC conjecture implies the non-
for one number to be the sum of two others if all three       existence of Siegel zeros (these are defined in analytic
numbers have many repeated prime factors and no two           number theory [IV.2](/part-04/number-theory)). It is also equivalent to strong
have a prime factor in common (which would then have          forms, as yet unproven, of a famous theorem of Baker
to be shared by the third).                                   in transcendence theory, and of the theorem of Wiles
   More precisely, one defines the radical of a positive       about modular forms [III.59](/part-03/modular-forms) that implies Fermat’s
integer n to be the product of all primes that divide         last theorem.
n, with each distinct prime included just once. For             The ABC conjecture is discussed further in compu-
instance, 3960 = 23 \times 32 \times 5 \times 11, so its radical is          tational number theory [IV.3](/part-04/computational-number-theory).
2 \times 3 \times 5 \times 11 = 330. Let us write rad(n) for the radical
of n. The ABC conjecture asserts that for every posi-         V.2 The Atiyah–Singer Index
tive real number  there is a constant K such that if            Theorem
a, b, and c are coprime integers and a + b = c, then                Nigel Higson and John Roe
c < K rad(abc)1+ .
   To get a feel for the meaning of this conjecture, con-                     1   Elliptic Equations
sider the Fermat equation x r + y r = zr . If three posi-
tive integers x, y, and z solve the equation, then we can     The Atiyah–Singer index theorem is concerned with the
divide through by any common factors they might have          existence and uniqueness of solutions to linear par-
and obtain a solution for which x, y, and z, and hence        tial differential equations of elliptic type. To understand
their r th powers, are coprime. Set a = x r , b = y r , and   this concept, consider the two equations
c = zr . Then                                                           ∂f     ∂f               ∂f      ∂f
                                                                            +     = 0 and           +i      = 0.
                                                                        ∂x     ∂y               ∂x      ∂y
   rad(abc) = rad(xyz) ⩽ xyz = (abc)1/r ⩽ c 3/r ,                                                   √
                                                              They differ only by the factor i = −1, but their solu-
where the last inequality follows from the fact that c        tions nevertheless have very different properties. Any
                                                   1
is greater than both a or b. If we set  to be 6 , then       function of the form f (x, y) = g(x − y) is a solu-
the ABC conjecture gives us a constant K such that c          tion to the first equation, but in the analogous gen-
cannot be more than K(c 3/r )7/6 = Kc 7/2 r . If r ⩾ 4 then    eral solution g(x + iy) of the second equation, g must
the power 7/2 r is less than 1, so the Fermat equation         be a holomorphic function [I.3 §5.6](/part-01/fundamental-definitions) of the complex
can have at most finitely many solutions with x, y, and        variable z = x + iy, and it was already known in the
z coprime.                                                    nineteenth century that such functions are very spe-
   It is clear that this is just one of a huge number         cial. For example, the first equation has an infinite-
of consequences of a similar kind. For instance, we           dimensional set of bounded solutions, but liouville’s
could deduce that there are only finitely many solu-           theorem [I.3 §5.6](/part-01/fundamental-definitions) in complex analysis asserts that the
tions of the equation 2 r + 3 s = x 2 , since the rad-          only bounded solutions of the second equation are the
ical of 2 r 3 s x 2 is at most 6 x, which is considerably        constant functions.

