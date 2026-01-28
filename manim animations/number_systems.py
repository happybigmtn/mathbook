from manim import *
import numpy as np


class NumberSystemsScene(Scene):
    """
    Number Systems visualization.

    Shows the expansion from ℕ to ℤ to ℚ to ℝ to ℂ,
    with the equations that motivated each expansion.
    """

    def construct(self):
        # Title
        title = Text("The Number Systems", font_size=44, color=BLUE)
        subtitle = Text("From Natural to Complex Numbers", font_size=24, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Natural Numbers
        natural_title = Text("Natural Numbers (ℕ)", font_size=28, color=GREEN)
        natural_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(natural_title))

        naturals = MathTex(r"\mathbb{N} = \\1, 2, 3, 4, 5, ...\\", font_size=28)
        naturals.next_to(natural_title, DOWN, buff=0.3)

        self.play(Write(naturals))

        # Problem
        problem1 = MathTex(r"2 - 3 = ?", font_size=26, color=RED)
        problem1.next_to(naturals, DOWN, buff=0.5)

        self.play(Write(problem1))
        self.wait(1)

        self.play(FadeOut(naturals), FadeOut(problem1), FadeOut(natural_title))

        # Integers
        int_title = Text("Integers (ℤ)", font_size=28, color=BLUE)
        int_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(int_title))

        integers = MathTex(r"\mathbb{Z} = \\..., -2, -1, 0, 1, 2, ...\\", font_size=28)
        integers.next_to(int_title, DOWN, buff=0.3)

        self.play(Write(integers))

        # Problem
        problem2 = MathTex(r"2 \div 3 = ?", font_size=26, color=RED)
        problem2.next_to(integers, DOWN, buff=0.5)

        self.play(Write(problem2))
        self.wait(1)

        self.play(FadeOut(integers), FadeOut(problem2), FadeOut(int_title))

        # Rational Numbers
        rat_title = Text("Rational Numbers (ℚ)", font_size=28, color=YELLOW)
        rat_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(rat_title))

        rationals = MathTex(
            r"\mathbb{Q} = \\left\\{ \\frac{p}{q} : p, q \in \mathbb{Z}, q \\neq 0 \\right\\}",
            font_size=24,
        )
        rationals.next_to(rat_title, DOWN, buff=0.3)

        self.play(Write(rationals))

        # Problem
        problem3 = MathTex(r"x^2 = 2", font_size=26, color=RED)
        problem3.next_to(rationals, DOWN, buff=0.5)

        sqrt2 = MathTex(r"\sqrt{2} \\notin \\mathbb{Q}", font_size=24, color=RED)
        sqrt2.next_to(problem3, DOWN, buff=0.2)

        self.play(Write(problem3))
        self.play(Write(sqrt2))
        self.wait(1)

        self.play(
            FadeOut(rationals), FadeOut(problem3), FadeOut(sqrt2), FadeOut(rat_title)
        )

        # Real Numbers
        real_title = Text("Real Numbers (ℝ)", font_size=28, color=PURPLE)
        real_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(real_title))

        reals = MathTex(
            r"\mathbb{R} = \\mathbb{Q} \\cup \\text{irrationals}", font_size=26
        )
        reals.next_to(real_title, DOWN, buff=0.3)

        self.play(Write(reals))

        # Problem
        problem4 = MathTex(r"x^2 = -1", font_size=26, color=RED)
        problem4.next_to(reals, DOWN, buff=0.5)

        self.play(Write(problem4))
        self.wait(1)

        self.play(FadeOut(reals), FadeOut(problem4), FadeOut(real_title))

        # Complex Numbers
        complex_title = Text("Complex Numbers (ℂ)", font_size=28, color=ORANGE)
        complex_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(complex_title))

        complexes = MathTex(
            r"\mathbb{C} = \\left\\{ a + bi : a, b \\in \\mathbb{R}, i^2 = -1 \\right\\}",
            font_size=22,
        )
        complexes.next_to(complex_title, DOWN, buff=0.3)

        self.play(Write(complexes))

        # Complex plane visualization
        plane = ComplexPlane(
            x_range=[-2, 2, 1],
            y_range=[-2, 2, 1],
            background_line_style={"stroke_opacity": 0.4},
        )
        plane.scale(0.8)
        plane.next_to(complexes, DOWN, buff=0.5)

        # Show a complex number
        z_point = Dot(plane.c2p(1, 1), color=YELLOW, radius=0.1)
        z_label = MathTex(r"z = 1 + i", font_size=22).next_to(z_point, UR, buff=0.1)

        self.play(Create(plane))
        self.play(Create(z_point), Write(z_label))
        self.wait(2)

        self.play(
            FadeOut(plane),
            FadeOut(z_point),
            FadeOut(z_label),
            FadeOut(complexes),
            FadeOut(complex_title),
        )

        # Tower visualization
        tower_title = Text("The Tower of Number Systems:", font_size=28, color=GREEN)
        tower_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(tower_title))

        tower = VGroup(
            MathTex(
                r"\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}",
                font_size=32,
            ),
            Text("Each solves equations the previous couldn't", font_size=20),
        ).arrange(DOWN, buff=0.5)
        tower.next_to(tower_title, DOWN, buff=0.5)

        self.play(Write(tower[0]))
        self.play(Write(tower[1]))
        self.wait(3)

        self.play(FadeOut(tower), FadeOut(tower_title))

        # Summary
        summary = VGroup(
            Text("Number Systems", font_size=36, color=BLUE),
            MathTex(
                r"\\mathbb{N} \\to \\mathbb{Z} \\to \\mathbb{Q} \\to \\mathbb{R} \\to \\mathbb{C}",
                font_size=28,
            ),
            Text("Each expansion enables new mathematics", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
