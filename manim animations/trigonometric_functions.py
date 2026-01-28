from manim import *
import numpy as np


class TrigonometricFunctionsScene(Scene):
    """
    Trigonometric Functions visualization.

    Shows sine and cosine as projections from the unit circle,
    along with their graphs and key properties.
    """

    def construct(self):
        # Title
        title = Text("Trigonometric Functions", font_size=44, color=BLUE)
        subtitle = MathTex(
            r"\sin(\theta) \text{ and } \cos(\theta)", font_size=32, color=YELLOW
        )
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(Write(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Create unit circle
        circle_title = Text("Unit Circle Definition:", font_size=26)
        circle_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(circle_title))

        plane = NumberPlane(
            x_range=[-2, 2, 1],
            y_range=[-2, 2, 1],
            background_line_style={"stroke_opacity": 0.4},
        )
        plane.scale(1.5)
        plane.shift(LEFT * 3)

        unit_circle = Circle(
            radius=plane.c2p(1, 0)[0] - plane.c2p(0, 0)[0], color=YELLOW, stroke_width=3
        )
        unit_circle.move_to(plane.c2p(0, 0))

        self.play(Create(plane))
        self.play(Create(unit_circle))

        # Animate point moving around circle
        theta_tracker = ValueTracker(0)

        dot = Dot(plane.c2p(1, 0), color=RED, radius=0.08)
        radius_line = always_redraw(
            lambda: Line(plane.c2p(0, 0), dot.get_center(), color=RED)
        )

        # Projections
        sin_line = always_redraw(
            lambda: DashedLine(
                dot.get_center(),
                plane.c2p(0, np.sin(theta_tracker.get_value())),
                color=GREEN,
            )
        )

        cos_line = always_redraw(
            lambda: DashedLine(
                dot.get_center(),
                plane.c2p(np.cos(theta_tracker.get_value()), 0),
                color=BLUE,
            )
        )

        sin_projection = always_redraw(
            lambda: Dot(
                plane.c2p(0, np.sin(theta_tracker.get_value())),
                color=GREEN,
                radius=0.08,
            )
        )

        cos_projection = always_redraw(
            lambda: Dot(
                plane.c2p(np.cos(theta_tracker.get_value()), 0), color=BLUE, radius=0.08
            )
        )

        # Labels
        sin_label = always_redraw(
            lambda: MathTex(r"\sin(\theta)", font_size=20, color=GREEN).next_to(
                sin_projection, LEFT, buff=0.15
            )
        )

        cos_label = always_redraw(
            lambda: MathTex(r"\cos(\theta)", font_size=20, color=BLUE).next_to(
                cos_projection, DOWN, buff=0.15
            )
        )

        theta_label = always_redraw(
            lambda: MathTex(
                f"\\theta = {theta_tracker.get_value():.2f}", font_size=22
            ).next_to(unit_circle, UR)
        )

        self.play(
            Create(dot),
            Create(radius_line),
            Create(sin_line),
            Create(cos_line),
            Create(sin_projection),
            Create(cos_projection),
            Write(sin_label),
            Write(cos_label),
            Write(theta_label),
        )

        # Animate
        self.play(theta_tracker.animate.set_value(PI / 2), run_time=3, rate_func=smooth)
        self.wait(0.5)
        self.play(theta_tracker.animate.set_value(PI), run_time=3, rate_func=smooth)
        self.wait(0.5)
        self.play(
            theta_tracker.animate.set_value(3 * PI / 2), run_time=3, rate_func=smooth
        )
        self.wait(0.5)
        self.play(theta_tracker.animate.set_value(2 * PI), run_time=3, rate_func=smooth)
        self.wait(1)

        # Fade out unit circle elements
        self.play(
            FadeOut(plane),
            FadeOut(unit_circle),
            FadeOut(dot),
            FadeOut(radius_line),
            FadeOut(sin_line),
            FadeOut(cos_line),
            FadeOut(sin_projection),
            FadeOut(cos_projection),
            FadeOut(sin_label),
            FadeOut(cos_label),
            FadeOut(theta_label),
            FadeOut(circle_title),
        )

        # Graphs
        graph_title = Text("Graphs:", font_size=26)
        graph_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(graph_title))

        axes = Axes(
            x_range=[0, 4 * PI, PI / 2],
            y_range=[-1.5, 1.5, 0.5],
            axis_config={"color": WHITE},
            x_length=9,
            y_length=4,
        )
        axes.next_to(graph_title, DOWN, buff=0.3)

        # Sine graph
        sine_graph = axes.plot(lambda x: np.sin(x), color=GREEN, stroke_width=3)
        sine_label = MathTex(r"y = \sin(x)", font_size=24, color=GREEN)
        sine_label.next_to(axes, RIGHT)
        sine_label.shift(UP * 1.5)

        # Cosine graph
        cosine_graph = axes.plot(lambda x: np.cos(x), color=BLUE, stroke_width=3)
        cosine_label = MathTex(r"y = \cos(x)", font_size=24, color=BLUE)
        cosine_label.next_to(axes, RIGHT)
        cosine_label.shift(DOWN * 1.5)

        self.play(Create(axes))
        self.play(Create(sine_graph), Write(sine_label))
        self.play(Create(cosine_graph), Write(cosine_label))
        self.wait(2)

        # Key values
        self.play(
            FadeOut(sine_graph),
            FadeOut(cosine_graph),
            FadeOut(sine_label),
            FadeOut(cosine_label),
            FadeOut(axes),
            FadeOut(graph_title),
        )

        values_title = Text("Key Values:", font_size=26, color=YELLOW)
        values_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(values_title))

        values = VGroup(
            MathTex(r"\sin(0) = 0, \quad \cos(0) = 1", font_size=26),
            MathTex(
                r"\sin\left(\frac{\pi}{2}\right) = 1, \quad \cos\left(\frac{\pi}{2}\right) = 0",
                font_size=26,
            ),
            MathTex(r"\sin(\pi) = 0, \quad \cos(\pi) = -1", font_size=26),
            MathTex(
                r"\sin\left(\frac{3\pi}{2}\right) = -1, \quad \cos\left(\frac{3\pi}{2}\right) = 0",
                font_size=26,
            ),
            MathTex(r"\sin(2\pi) = 0, \quad \cos(2\pi) = 1", font_size=26),
        ).arrange(DOWN, buff=0.4)
        values.next_to(values_title, DOWN, buff=0.5)

        self.play(*[Write(v) for v in values])
        self.wait(2)

        # Identity
        self.play(FadeOut(values), FadeOut(values_title))

        identity = MathTex(
            r"\sin^2(\theta) + \cos^2(\theta) = 1", font_size=36, color=GREEN
        )
        identity.next_to(title, DOWN, buff=1)

        identity_explanation = Text(
            "The Pythagorean Identity", font_size=24, color=YELLOW
        )
        identity_explanation.next_to(identity, DOWN)

        self.play(Write(identity))
        self.play(Write(identity_explanation))
        self.wait(3)

        self.play(FadeOut(identity), FadeOut(identity_explanation), FadeOut(title))
