from manim import *
import numpy as np


class DerivativesScene(Scene):
    """
    Derivatives visualization.

    Shows the concept of instantaneous rate of change,
    tangent lines, and the limit definition of derivative.
    """

    def construct(self):
        # Title
        title = Text("Derivatives", font_size=44, color=BLUE)
        subtitle = Text("Instantaneous Rate of Change", font_size=24, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Setup axes
        axes = Axes(
            x_range=[-1, 5, 1],
            y_range=[-1, 8, 1],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=5,
        )
        axes.next_to(title, DOWN, buff=0.5)

        # Function: f(x) = x^2
        def func(x):
            return x**2

        graph = axes.plot(func, x_range=[0, 3], color=BLUE, stroke_width=3)
        graph_label = MathTex(r"f(x) = x^2", font_size=24, color=BLUE)
        graph_label.next_to(axes, RIGHT).shift(UP * 2)

        self.play(Create(axes), Create(graph), Write(graph_label))

        # Point of interest
        x0 = 2
        y0 = func(x0)

        point = Dot(axes.c2p(x0, y0), color=YELLOW, radius=0.1)
        point_label = MathTex(r"P", font_size=20).next_to(point, UR, buff=0.1)

        self.play(Create(point), Write(point_label))

        # Secant lines approaching tangent
        secant_title = Text("Secant lines approach tangent:", font_size=22)
        secant_title.next_to(axes, DOWN, buff=0.3)
        self.play(Write(secant_title))

        h_tracker = ValueTracker(1.5)

        secant_line = always_redraw(
            lambda: axes.plot(
                lambda x: y0
                + (func(x0 + h_tracker.get_value()) - y0)
                / h_tracker.get_value()
                * (x - x0),
                x_range=[x0 - 1, x0 + h_tracker.get_value() + 0.5],
                color=GREEN,
                stroke_width=2,
            )
        )

        second_point = always_redraw(
            lambda: Dot(
                axes.c2p(x0 + h_tracker.get_value(), func(x0 + h_tracker.get_value())),
                color=RED,
                radius=0.08,
            )
        )

        h_label = always_redraw(
            lambda: MathTex(f"h = {h_tracker.get_value():.2f}", font_size=20)
            .next_to(axes, RIGHT)
            .shift(DOWN)
        )

        self.play(Create(secant_line), Create(second_point), Write(h_label))

        # Animate h getting smaller
        self.play(h_tracker.animate.set_value(0.5), run_time=2)
        self.play(h_tracker.animate.set_value(0.2), run_time=2)
        self.play(h_tracker.animate.set_value(0.05), run_time=2)

        # Tangent line
        tangent = axes.plot(
            lambda x: y0 + 2 * x0 * (x - x0),
            x_range=[0, 3],
            color=YELLOW,
            stroke_width=3,
        )
        tangent_label = MathTex(r"\text{Tangent}", font_size=20, color=YELLOW)
        tangent_label.next_to(axes, RIGHT).shift(DOWN * 2)

        self.play(FadeOut(secant_line), FadeOut(second_point), FadeOut(h_label))
        self.play(Create(tangent), Write(tangent_label))

        # Slope = derivative
        slope_text = MathTex(r"f'(2) = 4", font_size=28, color=YELLOW)
        slope_text.next_to(axes, DOWN, buff=0.5)
        self.play(Write(slope_text))
        self.wait(2)

        self.play(
            FadeOut(axes),
            FadeOut(graph),
            FadeOut(graph_label),
            FadeOut(point),
            FadeOut(point_label),
            FadeOut(tangent),
            FadeOut(tangent_label),
            FadeOut(secant_title),
            FadeOut(slope_text),
        )

        # Definition
        def_title = Text("Definition:", font_size=26, color=GREEN)
        def_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_title))

        definition = MathTex(
            r"f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}", font_size=28
        )
        definition.next_to(def_title, DOWN, buff=0.5)

        self.play(Write(definition))
        self.wait(2)

        self.play(FadeOut(definition), FadeOut(def_title))

        # Common derivatives
        derivatives_title = Text("Common Derivatives:", font_size=26, color=YELLOW)
        derivatives_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(derivatives_title))

        common = VGroup(
            MathTex(r"\\frac{d}{dx}(x^n) = nx^{n-1}", font_size=24),
            MathTex(r"\\frac{d}{dx}(e^x) = e^x", font_size=24),
            MathTex(r"\\frac{d}{dx}(\\ln x) = \\frac{1}{x}", font_size=24),
            MathTex(r"\\frac{d}{dx}(\\sin x) = \\cos x", font_size=24),
            MathTex(r"\\frac{d}{dx}(\\cos x) = -\\sin x", font_size=24),
        ).arrange(DOWN, buff=0.3)
        common.next_to(derivatives_title, DOWN, buff=0.5)

        self.play(*[Write(c) for c in common])
        self.wait(2)

        self.play(FadeOut(common), FadeOut(derivatives_title))

        # Applications
        apps_title = Text("Applications:", font_size=26, color=GREEN)
        apps_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(apps_title))

        applications = VGroup(
            Text("• Velocity and acceleration", font_size=22),
            Text("• Optimization (max/min)", font_size=22),
            Text("• Related rates", font_size=22),
            Text("• Curve sketching", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        applications.next_to(apps_title, DOWN, buff=0.5)
        applications.to_edge(LEFT, buff=1)

        self.play(*[Write(app) for app in applications])
        self.wait(3)

        self.play(FadeOut(applications), FadeOut(apps_title))

        # Summary
        summary = VGroup(
            Text("Derivatives", font_size=36, color=BLUE),
            MathTex(r"f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}", font_size=26),
            Text("The fundamental tool of calculus", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
