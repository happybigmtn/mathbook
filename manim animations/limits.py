from manim import *
import numpy as np


class LimitsScene(Scene):
    """
    Limits visualization.

    Shows the concept of limits, one-sided limits,
    infinite limits, and limit laws.
    """

    def construct(self):
        # Title
        title = Text("Limits", font_size=44, color=BLUE)
        subtitle = MathTex(r"\\lim_{x \\to a} f(x) = L", font_size=28, color=YELLOW)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(Write(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Intuitive definition
        def_title = Text("Intuitive Definition:", font_size=26)
        def_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_title))

        definition = Text(
            "As x gets closer and closer to a,\nf(x) gets closer and closer to L",
            font_size=22,
            line_spacing=1.5,
        )
        definition.next_to(def_title, DOWN, buff=0.3)

        self.play(Write(definition))
        self.wait(2)

        self.play(FadeOut(definition), FadeOut(def_title))

        # Visual example
        axes = Axes(
            x_range=[-1, 5, 1],
            y_range=[-1, 8, 1],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=4,
        )
        axes.next_to(title, DOWN, buff=0.5)

        # Function: f(x) = x^2
        graph = axes.plot(lambda x: x**2, x_range=[0, 3], color=BLUE, stroke_width=3)

        # Point of interest
        a = 2
        L = a**2

        point_a = Dot(axes.c2p(a, 0), color=RED, radius=0.08)
        point_L = Dot(axes.c2p(0, L), color=RED, radius=0.08)
        point_on_graph = Dot(axes.c2p(a, L), color=YELLOW, radius=0.1)

        a_label = MathTex(r"a", font_size=20).next_to(point_a, DOWN)
        L_label = MathTex(r"L", font_size=20).next_to(point_L, LEFT)

        self.play(Create(axes), Create(graph))
        self.play(Create(point_a), Create(point_L), Create(point_on_graph))
        self.play(Write(a_label), Write(L_label))

        # Animate approach
        approach_text = Text("As x → a, f(x) → L", font_size=22, color=GREEN)
        approach_text.next_to(axes, DOWN, buff=0.5)
        self.play(Write(approach_text))
        self.wait(2)

        self.play(
            FadeOut(axes),
            FadeOut(graph),
            FadeOut(point_a),
            FadeOut(point_L),
            FadeOut(point_on_graph),
            FadeOut(a_label),
            FadeOut(L_label),
            FadeOut(approach_text),
        )

        # One-sided limits
        one_sided_title = Text("One-Sided Limits:", font_size=26, color=GREEN)
        one_sided_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(one_sided_title))

        one_sided = VGroup(
            MathTex(
                r"\\lim_{x \\to a^+} f(x) \\text{ (right-hand limit)}", font_size=24
            ),
            MathTex(
                r"\\lim_{x \\to a^-} f(x) \\text{ (left-hand limit)}", font_size=24
            ),
            Text(
                "The limit exists only if both one-sided limits exist and are equal",
                font_size=20,
            ),
        ).arrange(DOWN, buff=0.3)
        one_sided.next_to(one_sided_title, DOWN, buff=0.5)

        self.play(*[Write(o) for o in one_sided])
        self.wait(2)

        self.play(FadeOut(one_sided), FadeOut(one_sided_title))

        # Limit laws
        laws_title = Text("Limit Laws:", font_size=26, color=YELLOW)
        laws_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(laws_title))

        laws = VGroup(
            MathTex(
                r"\\lim_{x \\to a} [f(x) + g(x)] = \\lim_{x \\to a} f(x) + \\lim_{x \\to a} g(x)",
                font_size=20,
            ),
            MathTex(
                r"\\lim_{x \\to a} [cf(x)] = c \\lim_{x \\to a} f(x)", font_size=20
            ),
            MathTex(
                r"\\lim_{x \\to a} [f(x)g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)",
                font_size=20,
            ),
            MathTex(
                r"\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}",
                font_size=20,
            ),
        ).arrange(DOWN, buff=0.3)
        laws.next_to(laws_title, DOWN, buff=0.5)

        self.play(*[Write(l) for l in laws])
        self.wait(2)

        self.play(FadeOut(laws), FadeOut(laws_title))

        # Important limits
        important_title = Text("Important Limits:", font_size=26, color=GREEN)
        important_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(important_title))

        important = VGroup(
            MathTex(r"\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1", font_size=24),
            MathTex(
                r"\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e",
                font_size=24,
            ),
            MathTex(r"\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1", font_size=24),
        ).arrange(DOWN, buff=0.4)
        important.next_to(important_title, DOWN, buff=0.5)

        self.play(*[Write(i) for i in important])
        self.wait(3)

        self.play(FadeOut(important), FadeOut(important_title))

        # Summary
        summary = VGroup(
            Text("Limits", font_size=36, color=BLUE),
            MathTex(r"\\lim_{x \\to a} f(x) = L", font_size=28),
            Text("The foundation of calculus", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
