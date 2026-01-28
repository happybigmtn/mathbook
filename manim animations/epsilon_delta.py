from manim import *
import numpy as np


class EpsilonDeltaScene(Scene):
    """
    Epsilon-Delta definition of limits visualization.

    Shows how for every epsilon > 0, there exists a delta > 0
    such that the function stays within the epsilon band.
    """

    def construct(self):
        # Title
        title = Text("The ε-δ Definition of Limits", font_size=40, color=BLUE)
        subtitle = MathTex(r"\lim_{x \to c} f(x) = L", font_size=32, color=YELLOW)
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

        definition = MathTex(
            r"\forall \varepsilon > 0, \exists \delta > 0 : |x - c| < \delta \implies |f(x) - L| < \varepsilon",
            font_size=22,
        )
        definition.next_to(def_title, DOWN, buff=0.3)

        self.play(Write(definition))
        self.wait(2)

        self.play(FadeOut(definition), FadeOut(def_title))

        # Graph setup
        axes = Axes(
            x_range=[-1, 4, 1],
            y_range=[-1, 4, 1],
            axis_config={"color": WHITE},
            x_length=7,
            y_length=5,
        )
        axes.next_to(title, DOWN, buff=0.5)

        # Function: f(x) = x^2
        def func(x):
            return x**2 / 3

        graph = axes.plot(func, x_range=[0, 3], color=BLUE, stroke_width=3)

        # Point of interest
        c = 2
        L = func(c)

        c_dot = Dot(axes.c2p(c, 0), color=WHITE, radius=0.08)
        L_dot = Dot(axes.c2p(0, L), color=WHITE, radius=0.08)
        point_dot = Dot(axes.c2p(c, L), color=YELLOW, radius=0.1)

        c_label = MathTex(r"c", font_size=24).next_to(c_dot, DOWN)
        L_label = MathTex(r"L", font_size=24).next_to(L_dot, LEFT)

        self.play(Create(axes), Create(graph))
        self.play(Create(c_dot), Create(L_dot), Create(point_dot))
        self.play(Write(c_label), Write(L_label))

        # Epsilon band
        epsilon_tracker = ValueTracker(0.5)

        epsilon_band = always_redraw(
            lambda: axes.plot(
                lambda x: L + epsilon_tracker.get_value(),
                x_range=[0, 3],
                color=RED,
                stroke_width=2,
            )
        )

        epsilon_band_lower = always_redraw(
            lambda: axes.plot(
                lambda x: L - epsilon_tracker.get_value(),
                x_range=[0, 3],
                color=RED,
                stroke_width=2,
            )
        )

        epsilon_lines = always_redraw(
            lambda: VGroup(
                Line(
                    axes.c2p(0, L + epsilon_tracker.get_value()),
                    axes.c2p(3, L + epsilon_tracker.get_value()),
                    color=RED,
                    stroke_width=1,
                    stroke_opacity=0.3,
                ),
                Line(
                    axes.c2p(0, L - epsilon_tracker.get_value()),
                    axes.c2p(3, L - epsilon_tracker.get_value()),
                    color=RED,
                    stroke_width=1,
                    stroke_opacity=0.3,
                ),
            )
        )

        epsilon_label = always_redraw(
            lambda: MathTex(
                f"\\varepsilon = {epsilon_tracker.get_value():.2f}",
                font_size=20,
                color=RED,
            )
            .next_to(axes, RIGHT)
            .shift(UP * 1.5)
        )

        band_text = Text("ε-band around L", font_size=20, color=RED)
        band_text.to_corner(UR)

        self.play(Write(band_text))
        self.play(Create(epsilon_lines), Write(epsilon_label))
        self.wait(1)

        # Delta band
        delta_tracker = ValueTracker(0.3)

        delta_line_left = always_redraw(
            lambda: DashedLine(
                axes.c2p(c - delta_tracker.get_value(), 0),
                axes.c2p(c - delta_tracker.get_value(), 3),
                color=GREEN,
            )
        )

        delta_line_right = always_redraw(
            lambda: DashedLine(
                axes.c2p(c + delta_tracker.get_value(), 0),
                axes.c2p(c + delta_tracker.get_value(), 3),
                color=GREEN,
            )
        )

        delta_label = always_redraw(
            lambda: MathTex(
                f"\\delta = {delta_tracker.get_value():.2f}", font_size=20, color=GREEN
            )
            .next_to(axes, RIGHT)
            .shift(DOWN * 1.5)
        )

        delta_text = Text("δ-interval around c", font_size=20, color=GREEN)
        delta_text.next_to(band_text, DOWN, buff=0.3)

        self.play(Write(delta_text))
        self.play(Create(delta_line_left), Create(delta_line_right), Write(delta_label))
        self.wait(1)

        # Animate epsilon getting smaller
        explanation = Text(
            "As ε gets smaller, we can always find a suitable δ",
            font_size=22,
            color=YELLOW,
        )
        explanation.to_corner(DL)
        self.play(Write(explanation))

        self.play(
            epsilon_tracker.animate.set_value(0.2),
            delta_tracker.animate.set_value(0.15),
            run_time=3,
        )
        self.wait(1)

        self.play(
            epsilon_tracker.animate.set_value(0.1),
            delta_tracker.animate.set_value(0.08),
            run_time=3,
        )
        self.wait(2)

        self.play(
            FadeOut(axes),
            FadeOut(graph),
            FadeOut(c_dot),
            FadeOut(L_dot),
            FadeOut(point_dot),
            FadeOut(c_label),
            FadeOut(L_label),
            FadeOut(epsilon_lines),
            FadeOut(epsilon_label),
            FadeOut(delta_line_left),
            FadeOut(delta_line_right),
            FadeOut(delta_label),
            FadeOut(band_text),
            FadeOut(delta_text),
            FadeOut(explanation),
        )

        # Intuitive explanation
        intuitive = VGroup(
            Text("Intuitively:", font_size=28, color=GREEN),
            Text("We can make f(x) as close to L as we want", font_size=24),
            Text("by making x close enough to c", font_size=24),
        ).arrange(DOWN, buff=0.4)
        intuitive.next_to(title, DOWN, buff=1)

        self.play(Write(intuitive))
        self.wait(3)

        self.play(FadeOut(intuitive), FadeOut(title))
