# The Robertson–Seymour Theorem

V.32.   The Robertson–Seymour Theorem                                                                                 725

about advanced concepts in modern algebraic geom-              two corresponding subsets of G should be linked by an
etry such as schemes [IV.5 §3](/part-04/arithmetic-geometry) and “sheaves.” Hirze-           edge. For example, a graph has a 3-cycle (or triangle) as
bruch’s generalization, like the classical result about        a minor if and only if it contains a cycle.
curves, expresses an analytically defined quantity in              For an example of how minors can arise naturally,
terms of purely topological invariants: it is this fea-        note that if a graph is planar (meaning that it can be
ture of both results that underlies their importance.          drawn in the plane in such a way that edges do not
Another generalization of which the same can be said           cross), then so is any minor of it. This is expressed by
is the famous atiyah–singer index theorem [V.2](/part-05/the-atiyahsinger-index-theorem),               saying that the class of planar graphs is minor closed.
which has itself been generalized several times.               Now, there is a theorem of Kuratowski that tells us
                                                               which graphs are planar. One form that this theorem
V.32 The Robertson–Seymour                                     takes is the following statement: a graph is planar if
     Theorem                                                   and only if it does not have either K5 or K3,3 as a minor,
                                                               where K5 denotes the complete graph of order 5, and
        Bruce Reed
                                                               K3,3 denotes the complete bipartite graph that consists
A graph G is a mathematical structure that consists of         of two sets of three vertices, with every vertex in one set
a set V (G) of vertices and a set E(G) of edges, where         joined to every vertex in the other set. Thus, the class of
each edge links a pair of vertices. Graphs can be used to      planar graphs is characterized by two forbidden minors.
represent many different networks in an abstract way.              Kuratowski’s theorem tells us which graphs can be
For example, the vertices might represent cities, and the      embedded into the plane. What happens for other sur-
edges might represent highways linking the cities; sim-        faces? For example, it is easy to see that for any d the set
ilarly, we could use a graph to represent which islands        of graphs that can be drawn on a d-holed torus is minor
of an archipelago are linked by bridges, or to repre-          closed, but is there a finite set of forbidden minors in
sent the wires of a telephone network. Among graphs            this case? To put it another way, is the set of obstruc-
there are certain families of “nice” graphs. One such          tions to being embeddable into the d-holed torus only
family is the family of cycles: a k-cycle is a set of k ver-   finite?
tices arranged around a circle with each point joined             A special case of the Robertson–Seymour theorem
by an edge to the points immediately before and after          states that the answer to this question is yes for any
it. Another family is that of complete graphs: the com-        surface. But the theorem itself is much more general. It
plete graph of order k consists of k vertices, all pairs       states that for any minor-closed class of graphs, there
of which are joined.                                           is a finite set of forbidden minors. In other words, for
   An important concept in graph theory, particularly          any minor-closed class G there exist graphs G1 , . . . , Gk
when families of graphs are involved, is that of a minor.      such that a graph G belongs to the family G if and only
Given a graph G, a minor of G is any graph you can             if G does not have any Gi as a minor. There is also a
obtain by applying a sequence of operations of two             pleasant form of the theorem (which is easily seen to be
kinds, known as contractions and deletions, applied to         equivalent) that says that the class of all graphs is “well-
edges. To contract the edge that joins two vertices x          quasi-ordered” by the minor relation: this means that
and y, one “fuses” x and y into a single vertex, join-         given any sequence G1 , G2 , . . . of graphs there must
ing it to all the vertices that were previously joined to      exist one that is a minor of a later one.
either x or y. For example, if you contract an edge of            It turns out that testing a graph for the presence of a
a 9-cycle, you will obtain an 8-cycle. Deleting an edge        given minor can be done reasonably fast, so that one
means what one would guess: for example, if you delete         amazing spin-off from the Robertson–Seymour theo-
an edge from a 9-cycle you will get a path with nine           rem is that for any minor-closed class there is an effi-
vertices and eight edges.                                      cient algorithm for checking whether or not a given
   It is not hard to check that a graph H is a minor of        graph belongs to the class. This has had a huge number
G if and only if we can find a collection of disjoint sub-      of applications in routing problems and the like.
sets of G, one for each vertex of H, with the follow-             The actual proof of the Robertson–Seymour theorem
ing properties: they should be connected, which means          is enormous: it was published in a sequence of twenty-
that any two vertices in one of the subsets are joined         two papers. Interestingly, it turns out that the case of
to each other by a path in that subset, and for any pair       graphs embeddable into a given surface plays a key
of vertices in H that are linked by an edge in H the           role, as we now explain.