from manim import *
import numpy as np


class TrigonometricFunctionsScene(Scene):
    """
    Trigonometric Functions - Feynman Style Visualization

    Shows sine and cosine as projections from the unit circle,
    building intuition through animated visual demonstrations.
    """

    def construct(self):
        # Start with a concrete question
        title = Text("How High? How Far?", font_size=36, color=BLUE)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.scale(0.6).to_edge(UP))

        # Create a unit circle scene
        question = Text("If you walk around a circle of radius 1...", font_size=24)
        question.shift(UP * 1.5)

        self.play(Write(question))
        self.wait(1)

        # Create the unit circle
        plane = NumberPlane(
            x_range=[-2, 2, 1],
            y_range=[-2, 2, 1],
            background_line_style={"stroke_opacity": 0.3},
        )
        plane.scale(1.5)
        plane.shift(LEFT * 2.5 + DOWN * 0.5)

        unit_circle = Circle(
            radius=plane.c2p(1, 0)[0] - plane.c2p(0, 0)[0], color=YELLOW, stroke_width=3
        )
        unit_circle.move_to(plane.c2p(0, 0))

        self.play(Create(plane))
        self.play(Create(unit_circle))
        self.play(FadeOut(question))

        # Animate a point moving around the circle
        theta_tracker = ValueTracker(0)

        dot = Dot(plane.c2p(1, 0), color=RED, radius=0.1)
        radius_line = always_redraw(
            lambda: Line(plane.c2p(0, 0), dot.get_center(), color=RED, stroke_width=2)
        )

        angle_arc = always_redraw(
            lambda: Arc(
                radius=0.3,
                start_angle=0,
                angle=theta_tracker.get_value(),
                color=GREEN,
                stroke_width=3,
            ).move_to(plane.c2p(0, 0))
        )

        angle_label = always_redraw(
            lambda: MathTex(
                f"θ = {theta_tracker.get_value():.2f}", font_size=20
            ).next_to(plane.c2p(0, 0), DR, buff=0.3)
        )

        self.play(
            Create(dot), Create(radius_line), Create(angle_arc), Write(angle_label)
        )

        # Show the projections
        # Vertical projection (sine)
        sin_line = always_redraw(
            lambda: DashedLine(
                dot.get_center(),
                plane.c2p(0, np.sin(theta_tracker.get_value())),
                color=GREEN,
                stroke_width=2,
            )
        )

        sin_projection = always_redraw(
            lambda: Dot(
                plane.c2p(0, np.sin(theta_tracker.get_value())),
                color=GREEN,
                radius=0.08,
            )
        )

        sin_label = always_redraw(
            lambda: MathTex(r"\sin(θ)", font_size=18, color=GREEN).next_to(
                sin_projection, LEFT, buff=0.15
            )
        )

        # Horizontal projection (cosine)
        cos_line = always_redraw(
            lambda: DashedLine(
                dot.get_center(),
                plane.c2p(np.cos(theta_tracker.get_value()), 0),
                color=BLUE,
                stroke_width=2,
            )
        )

        cos_projection = always_redraw(
            lambda: Dot(
                plane.c2p(np.cos(theta_tracker.get_value()), 0),
                color=BLUE,
                radius=0.08,
            )
        )

        cos_label = always_redraw(
            lambda: MathTex(r"\cos(θ)", font_size=18, color=BLUE).next_to(
                cos_projection, DOWN, buff=0.15
            )
        )

        self.play(
            Create(sin_line),
            Create(sin_projection),
            Write(sin_label),
            Create(cos_line),
            Create(cos_projection),
            Write(cos_label),
        )

        # Animate around the circle
        explanation = Text("Watch how the projections change...", font_size=22)
        explanation.to_edge(DOWN, buff=1)
        self.play(Write(explanation))

        # Quarter circle
        self.play(theta_tracker.animate.set_value(PI / 2), run_time=2, rate_func=smooth)
        self.wait(0.5)

        # Half circle
        self.play(theta_tracker.animate.set_value(PI), run_time=2, rate_func=smooth)
        self.wait(0.5)

        # Three quarters
        self.play(
            theta_tracker.animate.set_value(3 * PI / 2), run_time=2, rate_func=smooth
        )
        self.wait(0.5)

        # Full circle
        self.play(theta_tracker.animate.set_value(2 * PI), run_time=2, rate_func=smooth)
        self.wait(1)

        self.play(FadeOut(explanation))

        # Clear for the graph view
        self.play(
            FadeOut(plane),
            FadeOut(unit_circle),
            FadeOut(dot),
            FadeOut(radius_line),
            FadeOut(angle_arc),
            FadeOut(angle_label),
            FadeOut(sin_line),
            FadeOut(sin_projection),
            FadeOut(sin_label),
            FadeOut(cos_line),
            FadeOut(cos_projection),
            FadeOut(cos_label),
        )

        # Show the sine and cosine graphs
        graph_title = Text("The Graphs Tell the Story", font_size=28, color=GREEN)
        self.play(Write(graph_title))
        self.wait(0.5)
        self.play(graph_title.animate.scale(0.7).to_edge(UP))

        axes = Axes(
            x_range=[0, 2 * PI + 0.5, PI / 2],
            y_range=[-1.5, 1.5, 0.5],
            axis_config={"color": WHITE},
            x_length=10,
            y_length=4,
        )
        axes.next_to(graph_title, DOWN, buff=0.3)

        # Sine wave
        sine_graph = axes.plot(lambda x: np.sin(x), color=GREEN, stroke_width=3)
        sine_label = MathTex(r"y = \sin(x)", font_size=24, color=GREEN)
        sine_label.next_to(axes, RIGHT).shift(UP * 1.5)

        # Cosine wave
        cosine_graph = axes.plot(lambda x: np.cos(x), color=BLUE, stroke_width=3)
        cosine_label = MathTex(r"y = \cos(x)", font_size=24, color=BLUE)
        cosine_label.next_to(axes, RIGHT).shift(DOWN * 1.5)

        self.play(Create(axes))
        self.play(Create(sine_graph), Write(sine_label))
        self.play(Create(cosine_graph), Write(cosine_label))

        # Highlight key points
        key_points = VGroup(
            MathTex(r"\sin(0) = 0", font_size=20),
            MathTex(r"\sin(\frac{\pi}{2}) = 1", font_size=20),
            MathTex(r"\cos(0) = 1", font_size=20),
            MathTex(r"\cos(\frac{\pi}{2}) = 0", font_size=20),
        )
        key_points.arrange(DOWN, buff=0.2)
        key_points.to_edge(LEFT, buff=0.5)

        self.play(Write(key_points))
        self.wait(2)

        # The identity
        self.play(
            FadeOut(sine_graph),
            FadeOut(cosine_graph),
            FadeOut(sine_label),
            FadeOut(cosine_label),
            FadeOut(key_points),
            FadeOut(axes),
        )

        identity = MathTex(r"\sin^2(θ) + \cos^2(θ) = 1", font_size=40, color=YELLOW)
        identity_explanation = Text(
            "The Pythagorean Identity", font_size=24, color=GREEN
        )
        identity_explanation.next_to(identity, DOWN, buff=0.5)

        self.play(Write(identity))
        self.play(Write(identity_explanation))
        self.wait(2)

        final = Text(
            "Sine and Cosine: Just projections from a circle!", font_size=26, color=BLUE
        )
        final.to_edge(DOWN, buff=1)
        self.play(Write(final))
        self.wait(3)

        self.play(
            FadeOut(identity),
            FadeOut(identity_explanation),
            FadeOut(final),
            FadeOut(graph_title),
            FadeOut(title),
        )
