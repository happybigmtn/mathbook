from manim import *
import numpy as np


class IntegrationScene(Scene):
    """
    Integration visualization.

    Shows Riemann sums approximating integrals,
    the Fundamental Theorem of Calculus,
    and applications of integration.
    """

    def construct(self):
        # Title
        title = Text("Integration", font_size=44, color=BLUE)
        subtitle = Text("Accumulating Change", font_size=26, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Setup axes
        axes = Axes(
            x_range=[0, 5, 1],
            y_range=[0, 8, 1],
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

        # Riemann sums
        riemann_title = Text("Riemann Sums:", font_size=24)
        riemann_title.next_to(axes, DOWN, buff=0.3)
        self.play(Write(riemann_title))

        # Start with 4 rectangles
        n_tracker = ValueTracker(4)

        def get_rectangles(n):
            dx = 3 / n
            rectangles = VGroup()
            for i in range(int(n)):
                x = i * dx
                height = func(x)
                rect = Rectangle(
                    width=dx * (axes.c2p(1, 0)[0] - axes.c2p(0, 0)[0]),
                    height=height * (axes.c2p(0, 1)[1] - axes.c2p(0, 0)[1]),
                    fill_opacity=0.5,
                    color=GREEN,
                    stroke_width=1,
                )
                rect.move_to(axes.c2p(x + dx / 2, height / 2), aligned_edge=DOWN)
                rectangles.add(rect)
            return rectangles

        rectangles = always_redraw(lambda: get_rectangles(n_tracker.get_value()))

        self.play(Create(rectangles))

        # Increase number of rectangles
        n_label = always_redraw(
            lambda: MathTex(f"n = {int(n_tracker.get_value())}", font_size=20).next_to(
                riemann_title, RIGHT
            )
        )

        self.play(Write(n_label))

        self.play(n_tracker.animate.set_value(8), run_time=2)
        self.play(n_tracker.animate.set_value(16), run_time=2)
        self.play(n_tracker.animate.set_value(32), run_time=2)

        # Show limit
        limit_text = MathTex(r"\\int_0^3 x^2 \\, dx = 9", font_size=28, color=YELLOW)
        limit_text.next_to(riemann_title, DOWN, buff=0.5)

        self.play(Write(limit_text))
        self.wait(2)

        self.play(
            FadeOut(rectangles),
            FadeOut(n_label),
            FadeOut(limit_text),
            FadeOut(riemann_title),
            FadeOut(axes),
            FadeOut(graph),
            FadeOut(graph_label),
        )

        # Fundamental Theorem
        ftc_title = Text("Fundamental Theorem of Calculus:", font_size=26, color=GREEN)
        ftc_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(ftc_title))

        ftc = VGroup(
            MathTex(r"\\int_a^b f(x) \\, dx = F(b) - F(a)", font_size=28),
            Text("where F'(x) = f(x)", font_size=22),
        ).arrange(DOWN, buff=0.3)
        ftc.next_to(ftc_title, DOWN, buff=0.5)

        self.play(*[Write(f) for f in ftc])
        self.wait(2)

        self.play(FadeOut(ftc), FadeOut(ftc_title))

        # Applications
        apps_title = Text("Applications:", font_size=26, color=YELLOW)
        apps_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(apps_title))

        applications = VGroup(
            Text("• Area under curves", font_size=22),
            Text("• Volume of solids", font_size=22),
            Text("• Work and energy", font_size=22),
            Text("• Center of mass", font_size=22),
            Text("• Probability (expected value)", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        applications.next_to(apps_title, DOWN, buff=0.5)
        applications.to_edge(LEFT, buff=1)

        self.play(*[Write(app) for app in applications])
        self.wait(3)

        self.play(FadeOut(applications), FadeOut(apps_title))

        # Summary
        summary = VGroup(
            Text("Integration", font_size=36, color=BLUE),
            MathTex(r"\\int_a^b f(x) \\, dx", font_size=28),
            Text("The reverse of differentiation", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
