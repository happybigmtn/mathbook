from manim import *
import numpy as np


class SetTheoryScene(Scene):
    """
    Set Theory visualization.

    Shows basic set operations, Venn diagrams,
    and fundamental concepts of set theory.
    """

    def construct(self):
        # Title
        title = Text("Set Theory", font_size=44, color=BLUE)
        subtitle = Text("The Foundation of Mathematics", font_size=24, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Definition
        def_title = Text("Definition:", font_size=26)
        def_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_title))

        definition = VGroup(
            Text("A set is a collection of distinct objects", font_size=22),
            MathTex(r"A = \\left\\{ 1, 2, 3, 4, 5 \\right\\}", font_size=26),
            MathTex(r"3 \\in A, \\quad 7 \\notin A", font_size=24),
        ).arrange(DOWN, buff=0.4)
        definition.next_to(def_title, DOWN, buff=0.3)

        self.play(*[Write(d) for d in definition])
        self.wait(2)

        self.play(FadeOut(definition), FadeOut(def_title))

        # Venn diagram
        venn_title = Text("Set Operations (Venn Diagrams):", font_size=26, color=GREEN)
        venn_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(venn_title))

        # Create circles for Venn diagram
        circle_a = Circle(radius=1.5, color=BLUE, fill_opacity=0.3)
        circle_a.shift(LEFT * 0.8)
        label_a = MathTex(r"A", font_size=24, color=BLUE).next_to(circle_a, UL)

        circle_b = Circle(radius=1.5, color=RED, fill_opacity=0.3)
        circle_b.shift(RIGHT * 0.8)
        label_b = MathTex(r"B", font_size=24, color=RED).next_to(circle_b, UR)

        self.play(Create(circle_a), Create(circle_b), Write(label_a), Write(label_b))

        # Union
        union_text = MathTex(r"A \\cup B", font_size=22).to_edge(DOWN, buff=1)
        self.play(Write(union_text))
        self.wait(1)

        self.play(FadeOut(union_text))

        # Intersection
        intersect_text = MathTex(r"A \\cap B", font_size=22).to_edge(DOWN, buff=1)
        intersect_region = Intersection(
            circle_a, circle_b, color=PURPLE, fill_opacity=0.8
        )

        self.play(Write(intersect_text), Create(intersect_region))
        self.wait(1)

        self.play(FadeOut(intersect_text), FadeOut(intersect_region))

        # Complement
        self.play(FadeOut(circle_b), FadeOut(label_b))
        complement_text = MathTex(r"A^c \\text{ or } A'", font_size=22).to_edge(
            DOWN, buff=1
        )
        self.play(Write(complement_text))
        self.wait(1)

        self.play(
            FadeOut(circle_a),
            FadeOut(label_a),
            FadeOut(complement_text),
            FadeOut(venn_title),
        )

        # Set operations
        ops_title = Text("Basic Operations:", font_size=26, color=YELLOW)
        ops_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(ops_title))

        operations = VGroup(
            MathTex(
                r"\\text{Union: } A \\cup B = \\left\\{ x : x \\in A \\text{ or } x \\in B \\right\\}",
                font_size=20,
            ),
            MathTex(
                r"\\text{Intersection: } A \\cap B = \\left\\{ x : x \\in A \\text{ and } x \\in B \\right\\}",
                font_size=20,
            ),
            MathTex(
                r"\\text{Complement: } A^c = \\left\\{ x : x \\notin A \\right\\}",
                font_size=20,
            ),
            MathTex(
                r"\\text{Subset: } A \\subseteq B \\text{ if all elements of } A \\text{ are in } B",
                font_size=20,
            ),
        ).arrange(DOWN, buff=0.3)
        operations.next_to(ops_title, DOWN, buff=0.5)

        self.play(*[Write(op) for op in operations])
        self.wait(2)

        self.play(FadeOut(operations), FadeOut(ops_title))

        # Special sets
        special_title = Text("Special Sets:", font_size=26, color=GREEN)
        special_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(special_title))

        special = VGroup(
            MathTex(r"\\emptyset \\text{ (empty set)}", font_size=22),
            MathTex(
                r"\\mathbb{N} = \\left\\{ 1, 2, 3, ... \\right\\} \\text{ (natural numbers)}",
                font_size=22,
            ),
            MathTex(
                r"\\mathbb{Z} = \\left\\{ ..., -2, -1, 0, 1, 2, ... \\right\\} \\text{ (integers)}",
                font_size=20,
            ),
            MathTex(r"\\mathbb{R} \\text{ (real numbers)}", font_size=22),
        ).arrange(DOWN, buff=0.3)
        special.next_to(special_title, DOWN, buff=0.5)

        self.play(*[Write(s) for s in special])
        self.wait(2)

        self.play(FadeOut(special), FadeOut(special_title))

        # Summary
        summary = VGroup(
            Text("Set Theory", font_size=36, color=BLUE),
            MathTex(
                r"A \\cup B, \\quad A \\cap B, \\quad A \\subseteq B", font_size=26
            ),
            Text("The language of modern mathematics", font_size=22),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
