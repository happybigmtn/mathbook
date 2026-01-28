from manim import *
import numpy as np


class TaylorSeriesScene(Scene):
    """
    Taylor Series visualization.

    Shows how functions can be approximated by polynomials,
    with increasing accuracy as more terms are added.
    """

    def construct(self):
        # Title
        title = Text("Taylor Series", font_size=44, color=BLUE)
        subtitle = Text(
            "Approximating Functions with Polynomials", font_size=24, color=GRAY
        )
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Setup axes
        axes = Axes(
            x_range=[-4, 4, 1],
            y_range=[-2, 2, 0.5],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=4,
        )
        axes.next_to(title, DOWN, buff=0.5)

        # Function: sin(x)
        sin_graph = axes.plot(
            lambda x: np.sin(x), x_range=[-4, 4], color=BLUE, stroke_width=3
        )
        sin_label = MathTex(r"\\sin(x)", font_size=24, color=BLUE)
        sin_label.next_to(axes, RIGHT).shift(UP * 1.5)

        self.play(Create(axes), Create(sin_graph), Write(sin_label))

        # Taylor approximations
        taylor_title = Text("Taylor Approximations around 0:", font_size=22)
        taylor_title.next_to(axes, DOWN, buff=0.3)
        self.play(Write(taylor_title))

        # 1st order: x
        approx1 = axes.plot(lambda x: x, x_range=[-2, 2], color=GREEN, stroke_width=2)
        label1 = MathTex(r"x", font_size=20, color=GREEN)
        label1.next_to(taylor_title, RIGHT)

        self.play(Create(approx1), Write(label1))
        self.wait(1)

        # 3rd order: x - x^3/6
        approx3 = axes.plot(
            lambda x: x - x**3 / 6, x_range=[-3, 3], color=YELLOW, stroke_width=2
        )
        label3 = MathTex(r"x - \\frac{x^3}{6}", font_size=20, color=YELLOW)
        label3.next_to(label1, RIGHT)

        self.play(Create(approx3), Write(label3))
        self.wait(1)

        # 5th order: x - x^3/6 + x^5/120
        approx5 = axes.plot(
            lambda x: x - x**3 / 6 + x**5 / 120,
            x_range=[-4, 4],
            color=RED,
            stroke_width=2,
        )
        label5 = MathTex(
            r"x - \\frac{x^3}{6} + \\frac{x^5}{120}", font_size=20, color=RED
        )
        label5.next_to(label3, RIGHT)

        self.play(Create(approx5), Write(label5))
        self.wait(2)

        self.play(
            FadeOut(approx1),
            FadeOut(approx3),
            FadeOut(approx5),
            FadeOut(label1),
            FadeOut(label3),
            FadeOut(label5),
            FadeOut(sin_graph),
            FadeOut(sin_label),
            FadeOut(taylor_title),
        )

        # General formula
        formula_title = Text("General Formula:", font_size=26, color=GREEN)
        formula_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(formula_title))

        formula = MathTex(
            r"f(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\frac{f'''(a)}{3!}(x-a)^3 + \\cdots",
            font_size=24,
        )
        formula.next_to(formula_title, DOWN, buff=0.5)

        self.play(Write(formula))
        self.wait(2)

        self.play(FadeOut(formula), FadeOut(formula_title))

        # Applications
        apps_title = Text("Applications:", font_size=26, color=YELLOW)
        apps_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(apps_title))

        applications = VGroup(
            Text("• Approximating functions", font_size=22),
            Text("• Numerical methods", font_size=22),
            Text("• Physics (small angle approx)", font_size=22),
            Text("• Error analysis", font_size=22),
            Text("• Solving differential equations", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        applications.next_to(apps_title, DOWN, buff=0.5)
        applications.to_edge(LEFT, buff=1)

        self.play(*[Write(app) for app in applications])
        self.wait(3)

        self.play(FadeOut(applications), FadeOut(apps_title), FadeOut(axes))

        # Summary
        summary = VGroup(
            Text("Taylor Series", font_size=36, color=BLUE),
            MathTex(
                r"f(x) \\approx \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n",
                font_size=26,
            ),
            Text("Approximating the complicated with the simple", font_size=22),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
