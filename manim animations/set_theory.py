from manim import *
import numpy as np


class SetTheoryScene(Scene):
    """
    Set Theory - Feynman Style Visualization

    Shows set operations through concrete visual examples
    using Venn diagrams and collections of objects.
    """

    def construct(self):
        # Start with concrete examples
        title = Text("Collections of Things", font_size=36, color=BLUE)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.scale(0.6).to_edge(UP))

        # Show two sets of fruits
        set_a_label = Text("Set A: Apples and Bananas", font_size=24, color=BLUE)
        set_a_label.shift(UP * 2 + LEFT * 2)

        set_a = VGroup(
            Text("🍎", font_size=40),
            Text("🍎", font_size=40),
            Text("🍌", font_size=40),
        ).arrange(RIGHT, buff=0.3)
        set_a.next_to(set_a_label, DOWN, buff=0.3)

        set_b_label = Text("Set B: Bananas and Oranges", font_size=24, color=RED)
        set_b_label.shift(UP * 2 + RIGHT * 2)

        set_b = VGroup(
            Text("🍌", font_size=40),
            Text("🍊", font_size=40),
            Text("🍊", font_size=40),
        ).arrange(RIGHT, buff=0.3)
        set_b.next_to(set_b_label, DOWN, buff=0.3)

        self.play(Write(set_a_label), Write(set_a))
        self.play(Write(set_b_label), Write(set_b))
        self.wait(2)

        # Union: everything in either set
        self.play(FadeOut(set_a_label), FadeOut(set_b_label))

        # FADE OUT TITLE before writing new one
        self.play(FadeOut(title))

        union_title = Text(
            "Union (A ∪ B): Everything in either set", font_size=26, color=GREEN
        )
        union_title.to_edge(UP, buff=0.5)

        union_result = VGroup(
            Text("🍎", font_size=40),
            Text("🍎", font_size=40),
            Text("🍌", font_size=40),
            Text("🍌", font_size=40),
            Text("🍊", font_size=40),
            Text("🍊", font_size=40),
        ).arrange(RIGHT, buff=0.3)
        union_result.shift(DOWN * 0.5)

        self.play(Write(union_title))
        self.play(
            FadeOut(set_a),
            FadeOut(set_b),
        )
        self.play(Write(union_result))
        self.wait(2)

        # Intersection: things in both sets
        self.play(FadeOut(union_title))

        intersection_title = Text(
            "Intersection (A ∩ B): Things in BOTH sets", font_size=26, color=GREEN
        )
        intersection_title.to_edge(UP, buff=0.5)

        self.play(Write(intersection_title))

        # Highlight just the bananas
        intersection_result = VGroup(
            Text("🍌", font_size=50, color=YELLOW),
        )
        intersection_result.shift(DOWN * 0.5)

        # Only keep the bananas
        self.play(
            FadeOut(union_result[0]),  # Apples
            FadeOut(union_result[1]),  # Apples
            FadeOut(union_result[4]),  # Oranges
            FadeOut(union_result[5]),  # Oranges
            FadeOut(union_result[3]),  # Other banana
        )
        self.play(
            union_result[2]
            .animate.scale(1.25)
            .move_to(intersection_result.get_center())
        )
        self.wait(2)

        self.play(FadeOut(intersection_result[0]), FadeOut(intersection_title))

        # Venn diagram visualization
        venn_title = Text("Venn Diagram Representation", font_size=28, color=GREEN)
        venn_title.to_edge(UP, buff=0.5)
        self.play(Write(venn_title))

        # Create Venn diagram
        circle_a = Circle(radius=1.5, color=BLUE, fill_opacity=0.3)
        circle_a.shift(LEFT * 0.8)
        label_a = Text("A", font_size=28, color=BLUE).next_to(circle_a, UL)

        circle_b = Circle(radius=1.5, color=RED, fill_opacity=0.3)
        circle_b.shift(RIGHT * 0.8)
        label_b = Text("B", font_size=28, color=RED).next_to(circle_b, UR)

        # Add elements to the diagram
        apple_in_a = Text("🍎", font_size=30).move_to(circle_a.get_left() + RIGHT * 0.5)
        banana_intersection = Text("🍌", font_size=30).move_to(
            (circle_a.get_center() + circle_b.get_center()) / 2
        )
        orange_in_b = Text("🍊", font_size=30).move_to(
            circle_b.get_right() + LEFT * 0.5
        )

        self.play(Create(circle_a), Create(circle_b), Write(label_a), Write(label_b))
        self.play(
            Write(apple_in_a),
            Write(banana_intersection),
            Write(orange_in_b),
        )
        self.wait(2)

        # Highlight operations on Venn diagram
        union_highlight = Union(circle_a, circle_b, color=GREEN, fill_opacity=0.5)
        union_label = Text("A ∪ B", font_size=24, color=GREEN).to_edge(DOWN, buff=1)

        self.play(Create(union_highlight), Write(union_label))
        self.wait(1.5)

        self.play(FadeOut(union_highlight), FadeOut(union_label))

        intersection_highlight = Intersection(
            circle_a, circle_b, color=PURPLE, fill_opacity=0.8
        )
        intersection_label = Text("A ∩ B", font_size=24, color=PURPLE).to_edge(
            DOWN, buff=1
        )

        self.play(Create(intersection_highlight), Write(intersection_label))
        self.wait(2)

        self.play(
            FadeOut(circle_a),
            FadeOut(circle_b),
            FadeOut(label_a),
            FadeOut(label_b),
            FadeOut(apple_in_a),
            FadeOut(banana_intersection),
            FadeOut(orange_in_b),
            FadeOut(intersection_highlight),
            FadeOut(intersection_label),
            FadeOut(venn_title),
        )

        # Summary
        summary_title = Text(
            "Set Theory: The Language of Collections", font_size=28, color=BLUE
        )
        self.play(Write(summary_title))
        self.wait(0.5)
        self.play(summary_title.animate.scale(0.7).to_edge(UP))

        summary = VGroup(
            Text("• Union (∪): Everything in either set", font_size=22),
            Text("• Intersection (∩): Only what's in both", font_size=22),
            Text("• Complement (A'): Everything NOT in A", font_size=22),
            Text("• Subset (⊆): All of A is contained in B", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.4)
        summary.to_edge(LEFT, buff=1)
        summary.shift(DOWN * 0.5)

        for item in summary:
            self.play(Write(item))
            self.wait(0.5)

        self.wait(2)

        self.play(FadeOut(summary), FadeOut(summary_title))
