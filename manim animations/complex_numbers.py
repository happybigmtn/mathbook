from manim import *
import numpy as np


class ComplexNumbersScene(Scene):
    """
    Complex Numbers visualization.

    Shows the complex plane, operations on complex numbers,
    and Euler's formula connection.
    """

    def construct(self):
        # Title
        title = Text("Complex Numbers", font_size=44, color=BLUE)
        subtitle = MathTex(r"z = a + bi", font_size=32, color=YELLOW)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(Write(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Definition
        def_title = Text("Definition:", font_size=26)
        def_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_title))

        definition = VGroup(
            MathTex(r"z = a + bi", font_size=28),
            MathTex(
                r"\text{where } i^2 = -1, \quad a, b \\in \\mathbb{R}", font_size=24
            ),
            MathTex(r"a = \\text{Re}(z), \quad b = \\text{Im}(z)", font_size=24),
        ).arrange(DOWN, buff=0.3)
        definition.next_to(def_title, DOWN, buff=0.3)

        self.play(*[Write(d) for d in definition])
        self.wait(2)

        self.play(FadeOut(definition), FadeOut(def_title))

        # Complex Plane
        plane_title = Text("The Complex Plane:", font_size=26, color=GREEN)
        plane_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(plane_title))

        plane = ComplexPlane(
            x_range=[-3, 3, 1],
            y_range=[-3, 3, 1],
            background_line_style={"stroke_opacity": 0.4},
        )
        plane.scale(1.2)
        plane.next_to(plane_title, DOWN, buff=0.5)

        # Labels
        real_label = Text("Real", font_size=20).next_to(plane.x_axis, DOWN)
        imag_label = Text("Imaginary", font_size=20).next_to(plane.y_axis, LEFT)

        self.play(Create(plane), Write(real_label), Write(imag_label))

        # Show a complex number
        z = 2 + 1.5j
        z_point = Dot(plane.c2p(z.real, z.imag), color=YELLOW, radius=0.1)
        z_label = MathTex(r"z = 2 + 1.5i", font_size=22).next_to(z_point, UR, buff=0.1)

        # Line from origin
        line = Line(plane.c2p(0, 0), z_point.get_center(), color=YELLOW, stroke_width=2)

        self.play(Create(line), Create(z_point), Write(z_label))

        # Show real and imaginary parts
        a_line = DashedLine(z_point.get_center(), plane.c2p(z.real, 0), color=GREEN)
        b_line = DashedLine(z_point.get_center(), plane.c2p(0, z.imag), color=RED)

        a_label = MathTex(r"a = 2", font_size=18, color=GREEN).next_to(
            plane.c2p(z.real / 2, 0), DOWN
        )
        b_label = MathTex(r"b = 1.5", font_size=18, color=RED).next_to(
            plane.c2p(0, z.imag / 2), LEFT
        )

        self.play(Create(a_line), Create(b_line), Write(a_label), Write(b_label))
        self.wait(2)

        self.play(
            FadeOut(plane),
            FadeOut(real_label),
            FadeOut(imag_label),
            FadeOut(z_point),
            FadeOut(z_label),
            FadeOut(line),
            FadeOut(a_line),
            FadeOut(b_line),
            FadeOut(a_label),
            FadeOut(b_label),
            FadeOut(plane_title),
        )

        # Operations
        ops_title = Text("Operations:", font_size=26, color=YELLOW)
        ops_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(ops_title))

        operations = VGroup(
            MathTex(r"(a + bi) + (c + di) = (a+c) + (b+d)i", font_size=22),
            MathTex(r"(a + bi) \\cdot (c + di) = (ac - bd) + (ad + bc)i", font_size=22),
        ).arrange(DOWN, buff=0.5)
        operations.next_to(ops_title, DOWN, buff=0.5)

        self.play(*[Write(op) for op in operations])
        self.wait(2)

        self.play(FadeOut(operations), FadeOut(ops_title))

        # Polar form
        polar_title = Text("Polar Form:", font_size=26, color=GREEN)
        polar_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(polar_title))

        polar_form = VGroup(
            MathTex(
                r"z = r e^{i\\theta} = r(\\cos \\theta + i \\sin \\theta)", font_size=26
            ),
            MathTex(r"r = |z| = \\sqrt{a^2 + b^2}", font_size=24),
            MathTex(r"\\theta = \\arg(z) = \\tan^{-1}(\\frac{b}{a})", font_size=24),
        ).arrange(DOWN, buff=0.4)
        polar_form.next_to(polar_title, DOWN, buff=0.5)

        self.play(*[Write(p) for p in polar_form])
        self.wait(2)

        self.play(FadeOut(polar_form), FadeOut(polar_title))

        # Applications
        apps_title = Text("Applications:", font_size=26, color=YELLOW)
        apps_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(apps_title))

        applications = VGroup(
            Text("• AC circuit analysis", font_size=22),
            Text("• Signal processing", font_size=22),
            Text("• Quantum mechanics", font_size=22),
            Text("• Control theory", font_size=22),
            Text("• Fluid dynamics", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        applications.next_to(apps_title, DOWN, buff=0.5)
        applications.to_edge(LEFT, buff=1)

        self.play(*[Write(app) for app in applications])
        self.wait(3)

        self.play(FadeOut(applications), FadeOut(apps_title))

        # Summary
        summary = VGroup(
            Text("Complex Numbers", font_size=36, color=BLUE),
            MathTex(r"z = a + bi = r e^{i\\theta}", font_size=28),
            Text("Complete the number system", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
