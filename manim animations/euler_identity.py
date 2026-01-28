from manim import *


class EulerIdentityScene(Scene):
    """
    Euler's Identity: e^(iπ) + 1 = 0

    Visualizes how this beautiful equation connects five fundamental constants
    through rotation in the complex plane.
    """

    def construct(self):
        # Title
        title = Text("Euler's Identity", font_size=48, color=BLUE)
        subtitle = MathTex(r"e^{i\pi} + 1 = 0", font_size=40, color=YELLOW)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(Write(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Show the five constants
        constants_text = Text("Five Fundamental Constants:", font_size=28, color=GREEN)
        constants_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(constants_text))

        constants = VGroup(
            MathTex(r"e \approx 2.718...", font_size=24, color=BLUE),
            MathTex(r"i = \sqrt{-1}", font_size=24, color=RED),
            MathTex(r"\pi \approx 3.141...", font_size=24, color=PURPLE),
            MathTex(r"1", font_size=24, color=ORANGE),
            MathTex(r"0", font_size=24, color=WHITE),
        ).arrange(RIGHT, buff=0.5)
        constants.next_to(constants_text, DOWN, buff=0.5)

        self.play(*[Write(c) for c in constants], run_time=2)
        self.wait(1)

        self.play(FadeOut(constants), FadeOut(constants_text))

        # Complex plane setup
        plane = ComplexPlane(
            x_range=[-2, 2, 1],
            y_range=[-2, 2, 1],
            background_line_style={
                "stroke_color": BLUE_E,
                "stroke_width": 1,
                "stroke_opacity": 0.6,
            },
        )
        plane.scale(1.5)

        plane_title = Text("Complex Plane:", font_size=26)
        plane_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(plane_title))

        self.play(Create(plane), run_time=2)

        # Unit circle
        unit_circle = Circle(
            radius=plane.c2p(1, 0)[0] - plane.c2p(0, 0)[0], color=YELLOW, stroke_width=3
        )
        unit_circle.move_to(plane.c2p(0, 0))

        circle_label = MathTex(r"|z| = 1", font_size=20, color=YELLOW)
        circle_label.next_to(unit_circle, UR, buff=0.1)

        self.play(Create(unit_circle), Write(circle_label))

        # Show Euler's formula: e^(iθ) = cos(θ) + i sin(θ)
        formula = MathTex(
            r"e^{i\theta} = \cos(\theta) + i\sin(\theta)", font_size=28, color=GREEN
        )
        formula.to_corner(DL)
        self.play(Write(formula))

        # Animate the point moving around the circle
        theta_tracker = ValueTracker(0)

        dot = Dot(plane.c2p(1, 0), color=RED, radius=0.1)
        line = always_redraw(
            lambda: Line(
                plane.c2p(0, 0),
                plane.c2p(
                    np.cos(theta_tracker.get_value()), np.sin(theta_tracker.get_value())
                ),
                color=RED,
            )
        )

        theta_label = always_redraw(
            lambda: MathTex(
                f"\\theta = {theta_tracker.get_value():.2f}", font_size=20
            ).next_to(formula, DOWN)
        )

        point_label = always_redraw(
            lambda: MathTex(f"e^{{i\\theta}}", font_size=18, color=RED).next_to(
                dot, UR, buff=0.1
            )
        )

        self.play(Create(dot), Create(line), Write(theta_label), Write(point_label))

        # Animate to π
        self.play(theta_tracker.animate.set_value(PI), run_time=4, rate_func=smooth)

        # At θ = π
        final_point = MathTex(r"e^{i\pi} = -1", font_size=28, color=YELLOW)
        final_point.next_to(dot, LEFT, buff=0.3)

        self.play(Write(final_point))
        self.wait(2)

        # Add 1 to both sides
        self.play(
            FadeOut(plane),
            FadeOut(unit_circle),
            FadeOut(circle_label),
            FadeOut(dot),
            FadeOut(line),
            FadeOut(theta_label),
            FadeOut(point_label),
            FadeOut(formula),
            FadeOut(plane_title),
        )

        # Final equation
        equation = MathTex(r"e^{i\pi} + 1 = 0", font_size=48, color=YELLOW)
        equation.move_to(ORIGIN)

        # Break it down
        breakdown = VGroup(
            MathTex(r"e^{i\pi} = -1", font_size=32),
            MathTex(r"e^{i\pi} + 1 = 0", font_size=32, color=YELLOW),
        ).arrange(DOWN, buff=0.5)

        self.play(Transform(final_point, breakdown[0]))
        self.wait(1)
        self.play(Write(breakdown[1]))
        self.wait(2)

        # Beauty message
        beauty = Text(
            "The most beautiful equation in mathematics", font_size=28, color=GREEN
        )
        beauty.next_to(breakdown, DOWN, buff=0.8)

        self.play(Write(beauty))
        self.wait(3)

        self.play(FadeOut(breakdown), FadeOut(beauty), FadeOut(title))
