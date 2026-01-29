# Determinants

$174$

III . $15$

Determinants

The determinant of $a2 \times 2$ matrix

a b

c d

is defined to be $ad - bc.$ The determinant of $a 3 \times 3$ matrix ⎛ ⎞ a b c ⎜ ⎟ ⎜ d e f ⎟ ⎝ ⎠ g h i is defined to be aei $+ bfg +$ cdh - afh-bdi-ceg. What do these expressions have in common, how do they generalize, and why is the generalization significant? To begin with the first question, let us make a few simple observations. Both expressions are sums and differences of products of entries from the matrix. Each one of these products contains exactly one element from each row of the matrix and also exactly one element from each column.
In both cases, a minus sign seems to attach itself to the products for which the entries selected from the matrix “slope upward” rather than “downward.” Up to a point it is easy to see how to extend this definition to $n \times n$ matrices with $n \ge 4$ . We simply take sums and differences of all possible products of n entries, where one entry from each row is used and one from each column. The difficulty comes in deciding which of these products to add and which to subtract. To do this we take one of the products and use it to define a permutation σ of the set { $1$ , $2$ , . . .
, n} as follows. For each i $\le$ n, the product contains exactly one entry in the ith row. If it belongs to the jth column then σ (i)  =  j. The product is added if this permutation is even and subtracted if it is odd (see permutation groups [III.68](/part-03/permutation-groups)). So, for example, the permutation corresponding to the entry $af$ h in the $3 \times 3$ determinant above sends $1$ to $1$ , $2$ to $3$ , and $3$ to $2$ . This is an odd permutation, which is why af h receives a minus sign.
We still need to explain why the particular choice of products and minus signs that we have just defined is important. The reason is that it tells us something about the effect of a matrix when it is considered as a linear map. Let A be an n $\times$ n matrix. Then, as explained in [I.3](/part-01/fundamental-definitions), A specifies a linear map α from R n to R n . The determinant of A tells us what this linear map does to volumes. More precisely, if X is a subset of R n with n-dimensional volume V , then αX, the result of transforming X using the linear map α, will have vol-

III. Mathematical Concepts

ume V times the determinant of A. We could write this symbolically as follows: vol (α X)  =  det A · vol (X). For example, consider the $2 \times 2$ matrix cos $\theta -$ sin $\thetaA =$ / sin $\theta$

cos $\theta$

The corresponding linear map is a rotation of $R^{2}$ through an angle of $\theta.$ Since rotating a shape does not affect its volume, we should expect the determinant of A to be $1$ , and sure enough it is cos ${}^{2}\theta +$ sin ${}^{2}\theta,$ which is $1$ by Pythagoras’s theorem. The above explanation is a slight over simplification in one respect: determinants can be negative, but clearly volumes cannot. If the determinant of a matrix is $- 2$ , to give an example, it means that the linear map multiplies volumes by $2$ but also “turns shapes inside out” by reflecting them.
Determinants have many useful properties, which become obvious once one knows the above interpretation in terms of volumes. (However , it is much less obvious that this interpretation is correct: in setting up the theory of determinants one must do some work somewhere .) Let us give three of these properties.

 (  i  )  Let $V$ be a vector space [I.3](/part-01/fundamental-definitions) and let α : $V \to V$ be a linear map. Let $v^{1}$ , . . . , v n be a basis of V and let A be the matrix of α with respect to this basis. Now let $w^{1}$ , . . . , w n be another basis of V and let B be the matrix of α with respect to this different basis. Then A and B are different matrices, but since they both represent the linear map α, they must have the same effect on volumes. It follows that det (A) = det (B). To put this another way:
the determinant is better thought of as a property of linear maps rather than of matrices. Two matrices that represent the same linear map in the above sense are called similar. It turns out that A and B are similar if and only if there is an invertible matrix P such that $P - 1AP = B. ($ An $n \times n$ matrix $P$ is invertible if there is a matrix Q such that P Q equals the n $\times$ n identity matrix, I n , which turns out to imply that QP equals I n as well.
If this is true, then Q is called the inverse of P and is denoted P $- 1$ .) What we have just shown is that similar matrices have the same determinant. (ii) If A and B are any two n $\times$ n matrices, then they represent linear maps α and β of R n . The product AB represents the linear map αβ: that is, the linear map that results from doing β followed by α. Since β multiplies volumes by det B and α multiplies them by