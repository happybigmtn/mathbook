from manim import *
import numpy as np


class VectorsScene(Scene):
    """
    Vectors visualization.

    Shows vector addition, scalar multiplication, dot product,
    and cross product in 2D and 3D.
    """

    def construct(self):
        # Title
        title = Text("Vectors", font_size=44, color=BLUE)
        subtitle = Text("Magnitude and Direction", font_size=26, color=GRAY)
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
            MathTex(r"\\vec{v} = (v_1, v_2, ..., v_n)", font_size=28),
            MathTex(r"|\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + ... + v_n^2}", font_size=24),
        ).arrange(DOWN, buff=0.4)
        definition.next_to(def_title, DOWN, buff=0.3)

        self.play(*[Write(d) for d in definition])
        self.wait(1)

        self.play(FadeOut(definition), FadeOut(def_title))

        # Vector in 2D plane
        plane = NumberPlane(
            x_range=[-4, 4, 1],
            y_range=[-3, 3, 1],
            background_line_style={"stroke_opacity": 0.4},
        )
        plane.next_to(title, DOWN, buff=0.5)

        self.play(Create(plane))

        # Draw a vector
        vector = Arrow(plane.c2p(0, 0), plane.c2p(2, 3), color=YELLOW, buff=0)
        vector_label = MathTex(r"\\vec{v} = (2, 3)", font_size=22).next_to(
            vector.get_end(), UR
        )

        self.play(Create(vector), Write(vector_label))
        self.wait(1)

        # Vector addition
        vector2 = Arrow(plane.c2p(0, 0), plane.c2p(3, 1), color=GREEN, buff=0)
        vector2_label = MathTex(r"\\vec{w} = (3, 1)", font_size=22).next_to(
            vector2.get_end(), RIGHT
        )

        self.play(Create(vector2), Write(vector2_label))

        # Parallelogram method
        sum_vector = Arrow(plane.c2p(0, 0), plane.c2p(5, 4), color=RED, buff=0)
        sum_label = MathTex(r"\\vec{v} + \\vec{w}", font_size=22).next_to(
            sum_vector.get_end(), UR
        )

        # Copy vectors for parallelogram
        v_copy = vector.copy().shift(vector2.get_end() - plane.c2p(0, 0))
        w_copy = vector2.copy().shift(vector.get_end() - plane.c2p(0, 0))

        self.play(
            Create(v_copy, run_time=0.5),
            Create(w_copy, run_time=0.5),
            Create(sum_vector),
            Write(sum_label),
        )
        self.wait(2)

        self.play(
            FadeOut(plane),
            FadeOut(vector),
            FadeOut(vector_label),
            FadeOut(vector2),
            FadeOut(vector2_label),
            FadeOut(sum_vector),
            FadeOut(sum_label),
            FadeOut(v_copy),
            FadeOut(w_copy),
        )

        # Dot product
        dot_title = Text("Dot Product:", font_size=26, color=GREEN)
        dot_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(dot_title))

        dot_formula = MathTex(
            r"\\vec{v} \\cdot \\vec{w} = |\\vec{v}||\\vec{w}||\\cos \\theta = v_1w_1 + v_2w_2 + ...",
            font_size=24,
        )
        dot_formula.next_to(dot_title, DOWN, buff=0.3)

        self.play(Write(dot_formula))

        # Geometric interpretation
        geo = Text("Measures how much vectors point in same direction", font_size=20)
        geo.next_to(dot_formula, DOWN, buff=0.5)

        self.play(Write(geo))
        self.wait(2)

        self.play(FadeOut(dot_title), FadeOut(dot_formula), FadeOut(geo))

        # Applications
        apps_title = Text("Applications:", font_size=26, color=YELLOW)
        apps_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(apps_title))

        applications = VGroup(
            Text("• Physics: forces, velocities", font_size=22),
            Text("• Computer graphics", font_size=22),
            Text("• Machine learning", font_size=22),
            Text("• Engineering", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        applications.next_to(apps_title, DOWN, buff=0.5)
        applications.to_edge(LEFT, buff=1)

        self.play(*[Write(app) for app in applications])
        self.wait(2)

        self.play(FadeOut(applications), FadeOut(apps_title))

        # Summary
        summary = VGroup(
            Text("Vectors", font_size=36, color=BLUE),
            MathTex(r"\\vec{v} = (v_1, v_2, ..., v_n)", font_size=28),
            Text("Fundamental to linear algebra and physics", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
