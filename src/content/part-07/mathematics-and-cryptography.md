# Mathematics and Cryptography

VII.7.   Mathematics and Cryptography                                                                              887

   Over the years, coding theory has amassed a wide          and algorithmic developments to meet this need. It has
variety of results. Some of these give better con struc-      also provided entirely new possibilities, such as “digital
tions of codes with faster algorithms. Others provide        signatures” (which will be discussed later).
theoretical upper limits on how well codes can per-             One of the oldest and most basic methods of cryptog-
form. The theory uses an enormous variety of math-           raphy is simple substitution. Suppose that a message to
ematical tools, many of them more advanced than the          be enciphered consists of a piece of English text. Before
ones described in this article. Most not able among them      it is sent, the sender and recipient agree on a permu-
are algebraic geometry and graph theory, which are           tation of the twenty-six letters of the alphabet, which
used to construct very good codes, and the theory of         they keep private. An enciphered message might then
orthogonal polynomials, which is used to prove limits        look something like
on parameters of codes, such as their rate and relia-
                                                                       ZPLKKWL MFUPP UFL XA EUXMFLP
bility. Most of the highlights of this vast literature are
covered in Pless and Huffman (1998).                          For very short messages this method is reasonably
                                                             secure—it is just possible to work out the meaning
Further Reading                                              of the above example by matching letter patterns to
Hamming, R. W. 1950. Error detecting and error correcting    those commonly seen in English, but it is quite chal-
  codes. Bell System Technical Journal 29:147–60.            leng ing! However, for longer messages, simply count-
Forney Jr., G. D. 1966. Concatenated Codes. Cambridge, MA:   ing the frequencies of each letter and comparing those
  MIT Press.                                                 counts with the frequencies of letters in natural lan-
Peters on, W. W. 1960. Encoding and error-correction pro-     guage will almost always reveal the hidden permutation
  cedures for Bose–Chaudhuri codes. IEEE Transactions on     sufficiently to allow the meaning to be easily recovered.
  Information Theory 6:459–70.
                                                                A major leap forward in cryptography came with the
Pless, V. S., and W. C. Huffman, eds. 1998. Handbook of
  Coding Theory, two volumes. Amsterdam: North-Holland.      advent of mechanical encryption devices in the twenti-
Reed, I. S., and G. Solomon. 1960. Polynomial codes over     eth century, of which the German Enigma used during
  certain finite fields. SIAM Journal of Applied Mathematics   World War II is perhaps the most famous example. An
  8:300–4.                                                   account of the fascinating Enigma story and the role of
Shannon, C. E. 1948. A mathematical theory of communica-     the code breakers of Bletchley Park appears in Simon
  tion. Bell System Technical Journal 27:379–423, 623–56.    Singh’s excellent book on cryptography (Singh 1999).
                                                             It is interesting that the principle on which Enigma
VII.7 Mathematics and Cryptography                           operates is a development of the simple substitution
                                                             method. Each letter of the input message is enciphered
         Clifford Cocks
                                                             exactly as a simple substitution, but with the addi-
                                                             tional rule that the permutation controlling the sub-
            1   Introduction and History
                                                             stitution changes after every letter. A complex electro-
Cryptography is the science of hiding the meaning or         mechanical device controls the substitution process in
content of communications. The aim is that an adver-         a deterministic way. The recipient can decipher the
sary who sees a message only in its enciphered state         message only if he or she can set up another device
cannot make sense of or derive useful information from       in exactly the same way as the originator. The informa-
what is seen. On the other hand, the intended recip-         tion needed to do this is called the key. Making sure
ient must be able to decipher the true meaning. For          that keys are known only by the right people is called
most of history cryptography has been an art practiced       key management. Until the advent of public-key cryp-
seriously only by a few—such as governments for mil-         tography (to be discussed later), key management was
itary and diplomatic communications—for whom the             a major inconvenience and expense for anyone wanting
consequences of unauthorized disclosure of informa-          to secure their communications.
tion are damaging enough to justify the expense and
inconvenience of enciphering messages. Recently this                   2    Stream Ciphers and Linear
has changed: one of the results of the information rev-                    Feedback Shift Registers
olution has been the need for instant and secure com-
munication for all on demand. Fortunately, mathemat-         Since the advent of computers, information has tended
ics has come to the rescue and provided theoretical          to be transmitted as binary data: that is, as a stream

$888$

a r

$a^{r} - 1a1$

Figure $1$ Linear feedback shift register. of $0s$ and $1s$ . For such data there is a rather different method of encipherment based on a device called the linear feedback shift register, or LFSR (see figure $1$ ). The first step is to generate a random-looking sequence of $0s$ and $1s$ in $a$ deterministic way, and this is done by means of a recurrence formula, of which a simple example is $x^{t} = x^{t} - {}^{3} + x^{t} - {}^{4}$ . Here, addition is mod $2$ , so x t will be $1$ if an odd number of the terms $x^{t} - {}^{3}$ , $x^{t} - {}^{4}$ is $1$ , and it will be $0$ otherwise.
We must also specify the first four values of the sequence, so let us begin with 1000 . The sequence then continues as follows: 100110101111000100110101111 . . . . More generally, one specifies some positive integers $a^{1}$ , $a^{2}$ , . . . , a r , called feedback positions--the numbers $3$ and $4$ in the above example--and defines a sequence by means of the recurrence formula $x^{t} = xt - a^{1} + xt - a^{2} +$ · · · $+ xt - a^{r}$ , where again the addition is mod $2$ .
A sequence produced in this way usually looks fairly random, but because there are only finitely many binary sequences of length a r it must eventually repeat. Notice that, in our example, the sequence is periodic with period $15$ , which is actually the longest possible period, since there are sixteen binary sequences of length $4$ , and after a moment’s thought one sees that the sequence 0000 cannot occur (or else the whole sequence up to then would have had to consist entirely of zeros). In general, the length of the sequence depends on properties of the polynomial

P(x) = 1 + (xa)1 + (xa)2 + · · · + (xa)r over the field [I.3](/part-01/fundamental-definitions)F2 of two elements. As we have just seen in the case $a^{r} = 4$ , the maximum possible sequence length is (2 a)r - 1 , and for this length to be achieved the polynomial P (x) must be irreducible over $F^{2}$ : that is, it must not factorize into smaller polynomials. For example, the polynomial $1 + x^{4} + x^{5}$ is not VII.
The Influence of Mathematics irreducible, because $(1 + x + x^{3})(1 + x + x^{2})$ expands out to $1 + x + x + x^{2} + x^{2} + x^{3} + x^{3} + x^{4} + x^{5}$ , which equals $1 + x^{4} + x^{5}$ since $1 + 1 = 0$ in the field $F^{2}$ . Irreducibility is a necessary condition for the sequence to have the maximum length, but it does not guarantee it. For that we need a second condition: that the polynomial is primitive.
To see what this means, let us take the polynomial $x^{3} + x + 1$ and calculate the remainder when, for the first few positive integers m, we divide $x^{m}$ by $x^{3} + x + 1($ with all coefficients in $F^{2})$ . When m goes from $1$ to $7$ we obtain the polynomials x, $x^{2}$ , $x + 1$ , $x^{2} + x,x^{2} + x + 1$ , $x^{2} + 1$ , $1$ . For instance, $x^{6} = (x^{3} + x + 1)(x^{3} + x + 1) + x^{2} + 1$ , so the remainder on dividing $x^{6}$ by $x^{3} + x + 1$ is $x^{2} + 1$ . Now the first time that we obtained the polynomial $1$ was when $m = 7$ , and $7 = 2^{3} - 1$ .
This shows that the polynomial $x^{3} + x + 1$ is primitive. In general, a polynomial p (x) of degree d is primitive if the first time you obtain a remainder of $1$ when you divide x m by  p(x) is when $m = 2^{d} - 1$ . There are computationally efficient tests for determining whether a polynomial is irreducible and whether it is primitive. The advantage of using a primitive polynomial as the basis of an LFSR is that, in the sequence it generates, no subsequence of length a r is repeated until all nonzero sequences of length a r have appeared exactly once.
How is all this applied in cryptography? A simple idea would be to take the stream of bits generated by an LFSR and add it term by term to the message one is enciphering. For instance, if the LFSR generated a sequence that began 1001101 and the message was 0000111 , then the encrypted message would begin 1001010 . To decipher such a message, one could simply repeat the process: adding the two sequences 1001101$and$1001010 gives the original message 0000111 .
For this to work, the recipient would need to know the details of the LFSR in order to be able to generate the same sequence 1001101 , so one might consider using the feedback positions (in this case $3$ and $4$ ) as the secret key. The above procedure is not good enough to be of practical use because there is an efficient algorithm, due to Berlekamp and Massey ( 1969 ), that can recover the feedback rule from the stream of bits it generates. It is better to use some predetermined nonlinear function of the successive sequences of a r bits in order to

VII . $7$ .

Mathematics and Cryptography

L

R

F

Figure $2$ Feistel round structure.

scramble further the sequence of bits produced by the LFSR. Even then, such procedures are simple enough that, with careful design, they can be applied to large amounts of data very quickly.

$3$

Block Ciphers and the Computer Age

$3$ . $1$

Data Encryption Standard

When computers started to be used, an entirely different method of cryptography became practical: the block cipher. The first example of this was DES: the Data Encryption Standard (first published in 1977 ). DES was adopted as a standard in 1976 by the U.S. National Bureau of Standards (now the National Institute of Standards and Technology). This enciphers a block of $64$ bits at a time, with a key of length $56$ bits. It has a particular structure, referred to as a Feistel cipher (see figure 2). This structure is as follows.
Given a block of $64$ bits, you first divide it into two parts of $32$ bits each, and call them L and R. Next, you take a subset of the $56$ bits of the key, according to some predetermined rule, and use this subset to define a nonlinear function F , again according to some predetermined rule, which takes $32$ - bit sequences to $32$ - bit sequences. You then replace the pair [L , R] by the pair [R ⊕ F (L), L].
(Here R ⊕ F (L) denotes the result of taking the mod - $2$ sum of R and F (L) one bit at a time .) Having done that, you repeat the process a number of times, choosing a different nonlinear function F each time (but always deriving it in a predetermined way from the $56$ - bit key). A complete encryption by DES consists of $16$ such rounds, together with some permutation of the bits of the input and output. One reason for using the Feistel structure is that as long as one knows the $56$ - bit key it is quite easy to reverse the encryption process.
Given a round that performs the transformation [L , R] $\to$ [R ⊕ F (L), L],

$889$

one can invert it by means of the transformation [L , R] $\to$ [R , L ⊕ F (R)] . This has the great advantage that it does not require us to invert F , so even if F is quite complicated the procedure can be easy to carry out. A number of what are called “modes of use” of DES have been developed. Simply using the algorithm to encrypt each $64$ - bit block of data in turn is called ECB (for electronic codebook) mode. A disadvantage of this mode is that if there is an exact $64$ - bit repeat in the data then this results in an exact $64$ - bit repeat in the cipher.
Another mode is CBC, or cipher block chaining, mode. Here, each block of data is added mod $2$ to the previous block before being encrypted as above. In OFB, or output feedback, mode the block of data is added to the DES encipherment of the previous block. It is an easy exercise to see how to decipher in CBC and OFB modes, and in practice these are the two most common modes of use of DES.

$3$ . $2$

Advanced Encryption Standard

The U.S. National Institute of Standards and Technology recently held a competition for a replacement for DES, to be called the Advanced Encryption Standard, or AES. This was to be $a_{128}$ - wide block cipher with a variety of possible key lengths. Many competing designs were submitted and subjected to public scrutiny, and the winning entry was called Rijndael, after the designers Joan Daemen and Vincent Rijmen. The design is remarkable and elegant and makes use of interesting mathematical structures (Daeman and Rijmen 2002).
The $128$ bits in each block are thought of as $16$ bytes (a byte consists of eight bits), arranged in $a4 \times 4$ square. Each byte is then thought of as an element of $F^{256}$ , the field of order $256$ . Encryption consists of ten or more rounds (the exact number depending upon the key length); and each round mixes the data and the key. A round consists of a series of steps, typically as follows. First, each byte, regarded as an element of the finite field $F^{256}$ , is replaced by its inverse in the field, except that $0$ is left unchanged.
Each byte is then regarded as an element of the vector space of dimension $8$ over the field $F^{2}$ and an invertible linear transformation is applied. Each row of the $4 \times 4$ square is then rotated, by a different number of bytes for each row. Next, the values of each column of the square are taken to be the coefficients of a degree $3$ polynomial over $F^{256}$ and this is multiplied by a fixed polynomial

890                                                                                     VII. The Influence of Mathematics

and reduced modulo x 4 + 1. Finally, the key for the            limited the use of encryption to those organizations
round, which is derived linearly from the encryption            that could afford the physical security and separate
key, is added modulo 2 to the 128 bits.                         communication channels necessary for distributing
  It can be seen that all of these steps are reversible,        keys reliably.
which makes decipherment straightforward. It is likely             The following remarkable, counter intuitive pro posi-
that AES will take over from DES as the most widely             tion forms the basis of public-key cryptography: it is
used block cipher.                                              possible for two entities to communicate information
                                                                in such a way that they start with no secret shared
                   4   One-Time Key                             information; an adversary has access to all commu-
                                                                nications between them; at the end the entities have
The various encryption methods described above rely
                                                                shared secret knowledge that the adversary is unable
on the computational difficulty of recovering some
                                                                to determine.
secret that protects the enciphered data. There is one
                                                                   It is easy to see how useful such a capability could
classic encryption method that does not rely on this
                                                                be. Consider, for example, some one making a pur-
property. This is the “one-time key.” Imagine that the
                                                                chase over the Internet. Having identified a product one
message to be enciphered is encoded as a sequence
                                                                wishes to buy the next step is to send personal infor-
of bits (for example, the standard ASCII encoding that
                                                                mation such as credit card details to the vendor. With
represents each character as eight bits). Suppose that
                                                                public-key cryptography it is possible to do this in a
ahead of time the sender and recipient have shared
                                                                secure manner straightaway.
a sequence of random key bits r1 , . . . , rn at least as
                                                                   How might public-key cryptography be possible? The
long as the message. Suppose that the message bits are
                                                                structure of a solution was proposed by James Ellis in
p1 , p2 , . . . , pn .
                                                                1969,1 with the first public description by Diffie and
  The enciphered message is then x1 , x2 , . . . , xn , where
                                                                Hellman (1976). The critical idea is to use a function
xi = pi + ri . Here, as usual, addition is mod 2 addition
                                                                that is hard to invert unless you have an “inverse key”
in each bit. If the bits ri are fully random, then knowing
                                                                that helps you to do so.
the sequence xi gives no information whatsoever about
                                                                   More formally, a one-way function H is a mapping
the message sequence pi . This system is called one-time
                                                                from a set X to itself, with the property that if you are
key. It is very secure as long as the key is used only once.
                                                                told the value y = H(x) for some x ∈ X, then it is
However, it is impractical to use this method except
                                                                computationally hard to determine x. The inverse key
in very specialized situations because of the need for
                                                                is a secret value, z, say, used in creating the function H,
sender and recipient to share and keep safe possibly
                                                                with the property that if you know z then it becomes
large quantities of key material.
                                                                computationally easy to recover x from H(x).
                                                                   We can use this to solve the problem of secure key
            5   Public-Key Cryptography                         exchange as follows. Let us suppose that Bob wishes to
All of the examples of encryption methods that we               send some data securely to Alice. (Particularly useful
have seen so far have had the following structure. Two          would be a shared secret that they can use later as a
communicators agree on an algorithm or method for               key for subsequent communications.) Alice begins by
encryption. The choice of method (e.g., simple substi-          generating a one-way function H with an inverse key
tution, AES, or one-time key) can be made public with-          z. She then communicates the function H to Bob, but
out the security of the system being compromised. The           the inverse key remains her personal secret, which she
two communicators also agree on a secret key in the             reveals to no one—not even to Bob. Bob takes the data
form required by the chosen encryption method. This             x that he wishes to send, computes H(x), and returns
key needs to be kept secure and never revealed to any           the result of his computation to Alice. Because Alice
adversary. The communicators encipher and decipher              has the inverse key z, she can reverse the function H
messages using the algorithm and secret key.                    and there by recover x.
  This presents a major problem: how can the commu-                Now suppose that an adversary manages to read all
nicators securely share the secret key? It would be inse-       the communications between Alice and Bob. Then the
cure to exchange this over the same system that they
will later use to send enciphered messages. Until so-             1. See “The possibility of secure non-secret digital encryption,”
called public-key methods were discovered this issue            available at www.cesg.gov.uk/site/publications/media/possnse.pdf.

VII.7.    Mathematics and Cryptography                                                                             891

adversary will know the function H and the value H(x).        be shown to be equivalent to the ability to factorize N.
However, Alice has not communicated the inverse key           The value of d is Alice’s private key (or “inverse key” in
z, so the adversary is faced with the computationally         the terminology above): it is the secret that can undo
intractable problem of inverting H. Therefore, Bob has        the encryption function H.
successfully transmitted the secret x to Alice with out          This is because H(x)d mod N can be shown to equal
the adversary being able to work out what it is. (For         x. Indeed, the significance of the number (P −1)(Q−1)
a more precise idea of what computational intractabil-        is that it equals φ(N), the number of integers less
ity is and a further discussion of one-way functions,         than N and coprime to N. euler’s theorem [III.58](/part-03/modular-arithmetic)
see computational complexity [IV.20](/part-04/computational-complexity), especially              states that xφ(N) ≡ 1 mod N whenever x is coprime
section 7.)                                                   to N. Therefore, x mφ(N) ≡ 1 mod N as well, so if de
   It can be helpful to imagine the one-way function H        has the form mφ(N) + 1, as we are assuming, then
as a padlock and the inverse key as the key that unlocks      H(x)d ≡ x de ≡ x mod N. In other words, if you raise x
the padlock. Then if Alice wants to receive an enci-          to the power e mod N and then raise that to the power
phered message from Bob, she sends him her padlock,           d mod N you get back to x. (An important point is that
retaining the key. Bob locks (enciphers) the message          raising numbers to powers mod N is computationally
into a box with the padlock, and returns it. Only Alice,      easy by the method of “repeated squaring.” This is dis-
who is in possession of the padlock key, can unlock           cussed in computational number theory [IV.3 §2](/part-04/computational-number-theory).)
(decipher) the message.                                         While it has not been proved that the only way for
                                                              an adversary to defeat the RSA encryption system is to
5.1      RSA                                                  factorize N, no other general attack has been found.
                                                              This has created interest in finding improved factor-
It is all very well to have such a framework, but it
                                                              ization methods. A number of new subexponential
leaves open an obvious question: how can one produce
                                                              methods—elliptic curve factorization (Lenstra 1987),
a one-way function with an inverse key? The following
                                                              the multiple polynomial quadratic sieve (Silverman
method was published by Rivest, Shamir, and Adleman
                                                              1987), and the number field sieve (Lenstra and Lenstra
(1978). It relies on the fact that it is relatively easy to
                                                              1993)—have been discovered in the years since the RSA
find large prime numbers and multiply them to pro-
                                                              algorithm was found. See computational number
duce a composite number, but it is much harder, if you
                                                              theory [IV.3 §3](/part-04/computational-number-theory) for discussions of some of them.
are given that composite number, to determine its two
prime factors.                                                5.1.1    Implementation Details
   To create a one-way function by their method, Alice
first finds two large prime numbers P and Q. She then           The security of the RSA system depends on the primes
calculates the integer N = P Q and sends it to Bob,           P and Q being large enough to make factorization hard.
together with another integer e called the encryption         However, the larger they are, the slower the encryption
exponent. The values N and e are called the public            process is. Thus, there is a trade-off between security
parameters because it does not matter if an adversary         and the speed of encryption. A typical choice that is
knows what they are.                                          often made is to use primes that are each of 512 bits.
   Bob then expresses the secret value x that he wishes          For the deciphering method to work, the encryp-
to send to Alice as a number modulo N. Next, he com-          tion exponent e must have no factors in common with
putes H(x), which is defined to be x e mod N, that is,         either (P − 1) or (Q − 1). This assumption was needed
                                                              when we applied Euler’s theorem, and if it does not
the remainder when x e is divided by N. Bob sends H(x)
                                                              hold then the encryption function is not invertible.
to Alice.
                                                              Values such as 17 or 216 + 1 are often used in prac-
   Upon receipt of Bob’s message, Alice needs to recover
                                                              tice, because making e small reduces the amount of
x from x e mod N. This she can do by first calculating
                                                              computation needed to calculate the encrypted value
the number d that satisfies the equation
                                                              x e mod N. (These two values of e are also well-suited
               de ≡ 1   mod (P − 1)(Q − 1).                   to calculation by repeated squaring.)
To do this efficiently, Alice can use euclid’s algo-
                                                              5.2     Diffie–Hellman
rithm [III.22]. Notice, however, that this would not be
possible if she did not know the values of P and Q. In        Another approach to generating a shared secret was
fact, the ability to calculate the correct value of d can     published by Whitfield Diffie and Martin Hellman. In

892                                                                                VII. The Influence of Mathematics

their protocol Alice and Bob jointly create a shared          a group G and some element g ∈ G. We will require
secret, which can then be used as the key for one of          the group to be Abelian and will use “+” to denote the
the conventional cryptographic systems such as AES.           group operation. (In the examples so far, the groups
To do this, they agree on a large prime number P and a        under consideration were multiplicative groups con-
primitive element g modulo P , which means a number           sisting of elements coprime to some integer N, so by
g such that g P −1 ≡ 1 mod P , but g m ≡ 1 mod P for any     using additive notation we are taking a “logarithmic”
m < P − 1.                                                    perspective.)
   Alice then creates her own private key a, a number           To execute the protocol Alice computes some pri-
randomly chosen between 1 and P − 1, and calculates           vate integer a and computes and sends ag to Bob. Note
ga = g a mod P and sends this to Bob.                         that Alice can compute this sum of a elements of G in
   Bob similarly creates his own private key b between        time of order logarithmic in a by successive doubling
1 and P − 1 and calculates and sends gb = g b mod P           and adding. (In the multiplicative groups considered
to Alice.                                                     earlier, “doubling” is squaring, “adding” is multiplying,
   Alice and Bob can now create the shared secret             and “multiplying by a” is raising to the power a.)
g ab mod P . Alice calculates this as gba mod P and Bob         Similarly, Bob computes a private integer b and
calculates this as gab mod P . Note that all of these terms   computes and sends bg to Alice.
can be calculated in time logarithmic in a and b through        Both Alice and Bob can calculate the shared value
repeated squaring.                                            abg. An adversary will know only G, g, ag, and bg.
   An adversary, however, would see only g a mod P and          The question is: which groups can be used in practical
  b mod P , and would also know g and P . How could           cryptographic systems? The critical property is that the
g
g ab mod P be determined from this? One method is             discrete logarithm problem in G must be hard; in other
to solve what is called the discrete logarithm problem.       words, given G, g, and ag it should be a hard problem
This is the problem of calculating a if you know P , g,       to determine a.
and g a mod P . For large P this appears to be a com-           One type of group that has aroused interest for cryp-
putationally intractable problem. It is not known for         to graphic purposes is the additive group generated by
certain whether there is a faster way for the adver-          points on an elliptic curve [III.21](/part-03/elliptic-curves). An elliptic curve
sary to calculate g ab mod P than computing discrete          has an equation of the form
logarithms—this is called the Diffie–Hellman problem—                              y 2 = x 3 + ax + b.
but at present no better method is known.
   It is not obvious how to find primitive elements in         It is an interesting exercise to sketch this curve over
general, but it is much easier if, as is usually the case,    the real numbers—the shape depends upon how many
the prime P has been constructed so as to ensure that         times the curve
the factorization of P − 1 is known. For instance, if P is                        y = x 3 + ax + b
of the form 2 Q + 1, where Q is also a prime (such num-
                                                              crosses the x-axis.
bers are called Sophie Germain primes), then it can be
                                                                 It is possible to define an “addition rule” (often called
shown that for any a, exactly one of a and −a has the
                                                              a group law) on the points of this curve, as follows.
property that its Qth power is congruent to −1 mod P ,
                                                              Given two points A and B on the curve, the straight
and this one is a primitive element. In practice, one can
                                                              line joining them must meet the curve in a third point,
find such primes by a process of trial and error: for
                                                              C say. This is because a straight line must meet a cubic
example, one can choose a number Q randomly and
                                                              in three places precisely. Define A + B to be the mirror
use randomized primality tests to see whether Q and
                                                              image of C in the x-axis (see figure 3).
2 Q + 1 are prime. Assuming that, as every one believes,
                                                                 It is obvious that A + B = B + A from this definition.
such pairs occur with the “expected” frequency, the
                                                              What is rather more surprising is that the associative
probability of finding one on any given attempt is large
                                                              law holds. That is, for any three points A, B, and C we
enough for this approach to be feasible.
                                                              have ((A + B) + C) = (A + (B + C)). There are some deep
                                                              reasons why this is true, but of course it can be verified
5.3   Other Groups
                                                              by just doing the algebra.
The Diffie–Hellman protocol can be expressed in the                To use this for cryptography the group is formed
language of group theory [I.3 §2.1](/part-01/fundamental-definitions). Suppose we have          from the set of points on an elliptic curve defined over

VII . $7$ .

Mathematics and Cryptography

C

B

A

$A + B$

Figure $3$ Addition of points on an elliptic curve. a finite field. The graphical image for the sum of two points is no longer valid, but the algebraic definition still holds, so addition still obeys the associative law. We need to add one further point to the set of points on the curve to function as the zero of the group: this is the “point at infinity” on the curve. For optimal security it turns out to be best to find a curve defined over F p for which the number of elements in the group is a prime number.
In fact it is guaranteed--by a deep result on the theory of elliptic curves--that the number of points on a curve defined √over $F^{p}$ will lie between $p + 1 - 2 p$ and $p + 1 + 2 p.$ (See the weil conjectures [V.35](/part-05/the-weil-conjectures).) The reason this group is used is that for general curves the discrete logarithm problem appears to be particularly hard. If the group has n elements and if we are given group elements g and ag, then the number of steps needed to determine a, by the best algorithms √ that are currently known, is around n.
Since there is a so-called birthday attack that allows one to solve this √ problem in any group with n elements in around n computational steps, this means that the problem for elliptic curve groups is as hard as it can be. Therefore, whatever level of security you require, the public key is as short as it can be. This is important when there are constraints on the number of bits that can be sent as it allows the protocol to be executed in the minimum possible time.

$6$

Digital Signatures

As well as secure transmission of data, there is another very useful capability that is provided by public-key cryptography. That is the concept of a digital signature. A digital signature is a string of symbols that an author attaches to the end of a message that certifies the

$893$

authenticity of the message. In other words, it proves that the message was written by the attested author and that it has not been modified. Once the necessary frameworks are in place, this opens up the possibility of much legal business being conducted online. There are a number of ways that public-key methods can be used to create digital signatures. The one based on the RSA system is perhaps the simplest. Suppose Alice wants to sign documents.
Just as she does for encryption, she generates two large prime numbers P and Q and calculates her public modulus $N = P$ Q and her public exponent e. She also generates her private key--the deciphering exponent d with the property that x de ≡ x mod N for any x. She will use the same parameters both for encryption and for the creation of digital signatures. Alice can assume that the recipients of her signed messages know her N and e values.
In practice she may have these values themselves signed and certified by a trusted authority or organization that the prospective recipient of a signed message will recognize. One other component of this system is an object called a one-way hash function, which takes as its input the message to be signed, which may be rather long, and outputs a number between $1$ and $N - 1$ . The important property that a hash function must have is that for any value y between $1$ and N it is computationally hard to construct a message x that hashes to that value.
This is similar to a one-way function except that we are no longer assuming that for each y there is exactly one x that maps to y. However, the hash function should ideally also be collision free, which means that, even though there are many pairs of messages that hash to the same value, it is not easy to find any. Such hash functions need to be carefully designed, but there are some recognized standard hash functions (two of which are called $MD5$ and SHA - $1$ ). Suppose that x is the message to be signed, and let X be the output when you apply the hash function to x.
The digital signature that Alice appends to the message is $Y = X$ d mod N. Observe that anyone in possession of Alice’s public key can verify the signature by following these steps. First, calculate the hashed value X of the message x, which is possible because the hash function is made public. Next, compute $Z = Y$ e mod N, which can be done because the parameters N and e are also public. Finally, verify that X equals Z. In order to fake such a signature, you have to find Y with the property that Y e ≡ X mod N. That is, you must know how

894                                                                              VII. The Influence of Mathematics

to calculate X d , which is computationally intractable if   where B is the point on the curve corresponding to his
you do not already know d.                                   identity.
  It is also possible to construct digital signatures          Alice and Bob are now able to communicate with-
using a public key based on discrete logarithms (Diffie–       out any initial key exchange, using the common key
Hellman type) rather than on factorization (RSA type).       w(x A, B) = w(A, x B). The important point is that
The U.S. standards body has published such a proposal:       unlike other public-key systems this can be done with-
the Digital Signature Standard (1994).                       out any need to share public keys.

                                                             7.2   Communication Protocols
        7   Some Current Research Topics
                                                             A second area of activity is the study of proposed pro-
Cryptography remains an active and fascinating area
                                                             tocols, especially those likely to become international
for research—there are undoubtedly more results and
                                                             standards. When public-key methods are to be used
ideas to be discovered. For a good over view of current
                                                             in practical communication the sequence of bits to be
activity one should look at recent proceedings of the
                                                             transmitted needs to be clearly defined, so that both
main conferences, such as Crypto, Eurocrypt, or Asia-
                                                             communicating parties understand the same thing by
crypt (these are published in the Springer series Lecture
                                                             each bit sent. For example, if an n-bit number is
Notes in Computer Science). The comprehensive book
                                                             transmitted, are the bits transmitted in increasing or
on cryptography by Menezes, van Oorschott, and Van-
                                                             decreasing order of significance? The rules or proto-
stone (1996) is a good way to get up to speed on present
                                                             cols are often enshrined in public standards, and it is
theory. In this final section I out line just a few of the
                                                             important that they do not introduce any weakness into
directions in which the subject is moving.
                                                             the system.
                                                                An example of the sort of weakness that can be intro-
7.1   New Public-Key Methods
                                                             duced in this way is one discovered by Coppersmith
One important area of investigation is the search            (1997) in a seminal paper. He showed that in a low-
for new public-key methods and signature schemes.            exponent RSA system (for example, one with encryp-
Recently some interesting new ideas have come from           tion exponent equal to 17) a weakness arises if too
the use of pairings on elliptic curves (Boneh and            many of the bits of the number that is to be enciphered
Franklin 2001). These are maps w from pairs of points        are set to publicly known values. This is something
on the curve to either the finite field over which the         that is natural to want to do, if, as is often the case,
curve is defined or an extension field.                        a large public-key modulus is being used to transmit a
   A pairing w is bilinear, in the sense that w(A+B, C) =    much shorter communication key. As a result of Cop-
w(A, C)w(B, C) and w(A, B + C) = w(A, B)w(A, C),             per smith’s discovery such fields are nowadays usually
where addition is the group operation defined on points       padded out before they are encrypted, with bits that
of the curve and multiplication takes place in the field.     vary unpredictably.
   One way that such a map can be used is to create an
                                                             7.3   Control of Information
“identity-based cryptosystem.” Here, a user’s identity
serves as his or her public key, which eliminates the        Using public-key methods, one can control very pre-
need for directories or other public-key infrastructure      cisely how information is released, shared, or gener-
in order to store and propagate public keys.                 ated. Research in this area is usually focused on finding
   In such a system, a central authority decides upon        elegant and efficient ways of achieving different sorts
a curve, a pairing map w, and a hash function that           of control in a variety of situations. As a simple exam-
maps identities to points on the curve. All of this is       ple, we might want to create a secret that is shared
made public, but there is also a secret parameter, an        between N people in such a way that if any K people
integer x.                                                   combine their share (where K < N) they can reconstruct
   Suppose that the hash function maps Alice’s identity      the secret, but no information can be gained about the
to the point A on the curve. The authority calculates        secret by any smaller number than K collaborating.
Alice’s private key x A and issues it to her when she           Another example of this type of control is a protocol
registers, after making appropriate checks on her iden-      that allows two participants to create an RSA modulus
tity. Similarly, Bob would receive his private key x B,       (a product of two primes) in such a way that neither