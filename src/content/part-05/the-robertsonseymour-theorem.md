# The Robertson–Seymour Theorem

V.32.   The Robertson–Seymour Theorem

about advanced concepts in modern algebraic geom-
etry such as schemes [IV.5 §3](/part-04/arithmetic-geometry) and “sheaves.” Hirze-
bruch’s generalization, like the classical result about
curves, expresses an analytically defined quantity in
terms of purely topological invariants: it is this fea-
ture of both results that under lies their importance.
Another generalization of which the same can be said
is the famous atiyah–singer index theorem [V.2](/part-05/the-atiyahsinger-index-theorem),
which has itself been generalized several times.
V.32 The Robertson–Seymour
     Theorem

A graph G is a mathematical structure that consists of
a set V (G) of vertices and a set E(G) of edges, where
each edge links a pair of vertices. Graphs can be used to
represent many different networks in an abstract way.
For example, the vertices might represent cities, and the
edges might represent highways linking the cities; sim-
ilarly, we could use a graph to represent which is lands
of an archipelago are linked by bridges, or to repre-
sent the wires of a telephone network. Among graphs
there are certain families of “nice” graphs. One such
family is the family of cycles: a k-cycle is a set of k ver-   finite?
tices arranged around a circle with each point joined
by an edge to the points immediately before and after
it. Another family is that of complete graphs: the com-
plete graph of order k consists of k vertices, all pairs
of which are joined.
   An important concept in graph theory, particularly
when families of graphs are involved, is that of a minor.
Given a graph G, a minor of G is any graph you can
obtain by applying a sequence of operations of two
kinds, known as contractions and deletions, applied to
edges. To contract the edge that joins two vertices x
and y, one “fuses” x and y into a single vertex, join-
ing it to all the vertices that were previously joined to
either x or y. For example, if you contract an edge of
a 9-cycle, you will obtain an 8-cycle. Deleting an edge
means what one would guess: for example, if you delete
an edge from a 9-cycle you will get a path with nine
vertices and eight edges.
   It is not hard to check that a graph H is a minor of
G if and only if we can find a collection of disjoint sub-
sets of G, one for each vertex of H, with the follow-
ing properties: they should be connected, which means
that any two vertices in one of the subsets are joined
to each other by a path in that subset, and for any pair
of vertices in H that are linked by an edge in H the

725
two corresponding subsets of G should be linked by an
edge. For example, a graph has a 3-cycle (or triangle) as
a minor if and only if it contains a cycle.
For an example of how minors can arise naturally,
note that if a graph is planar (meaning that it can be
drawn in the plane in such a way that edges do not
cross), then so is any minor of it. This is expressed by
saying that the class of planar graphs is minor closed.
Now, there is a theorem of Kuratowski that tells us
which graphs are planar. One form that this theorem
takes is the following statement: a graph is planar if
and only if it does not have either K5 or K3,3 as a minor,
where K5 denotes the complete graph of order 5, and
Bruce Reed
K3,3 denotes the complete bipartite graph that consists
of two sets of three vertices, with every vertex in one set
joined to every vertex in the other set. Thus, the class of
planar graphs is characterized by two forbidden minors.
Kuratowski’s theorem tells us which graphs can be
embedded into the plane. What happens for other sur-
faces? For example, it is easy to see that for any d the set
of graphs that can be drawn on a d-holed torus is minor
closed, but is there a finite set of forbidden minors in
this case? To put it another way, is the set of obs truc-
tions to being embeddable into the d-holed torus only
A special case of the Robertson–Seymour theorem
states that the answer to this question is yes for any
surface. But the theorem itself is much more general. It
states that for any minor-closed class of graphs, there
is a finite set of forbidden minors. In other words, for
any minor-closed class G there exist graphs G1 , . . . , Gk
such that a graph G belongs to the family G if and only
if G does not have any Gi as a minor. There is also a
pleasant form of the theorem (which is easily seen to be
equivalent) that says that the class of all graphs is “well-
quasi-ordered” by the minor relation: this means that
given any sequence G1 , G2 , . . . of graphs there must
exist one that is a minor of a later one.
It turns out that testing a graph for the presence of a
given minor can be done reasonably fast, so that one
amazing spin-off from the Robertson–Seymour theo-
rem is that for any minor-closed class there is an effi-
cient algorithm for checking whether or not a given
graph belongs to the class. This has had a huge number
of applications in routing problems and the like.
The actual proof of the Robertson–Seymour theorem
is enormous: it was published in a sequence of twenty-
two papers. Interestingly, it turns out that the case of
graphs embeddable into a given surface plays a key
role, as we now explain.