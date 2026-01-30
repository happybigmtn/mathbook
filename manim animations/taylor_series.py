from manim import *
import numpy as np


class TaylorSeriesScene(Scene):
    """
    Taylor Series - Feynman Style Visualization

    Shows how we can approximate complex functions with simple polynomials
    by matching derivatives at a point.
    """

    def construct(self):
        # Start with the problem: e^x is hard to compute
        title = Text("Approximating the Hard Stuff", font_size=36, color=BLUE)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.scale(0.6).to_edge(UP))

        problem = Text("How do calculators compute e^x, sin(x), etc.?", font_size=26)
        problem.shift(UP * 1)

        calculator = Text("🧮", font_size=80)
        calculator.shift(DOWN * 0.5)

        self.play(Write(problem))
        self.play(Create(calculator))
        self.wait(2)

        self.play(FadeOut(problem), FadeOut(calculator))

        # The key idea
        idea_title = Text(
            "The Key Idea: Build from simple pieces", font_size=30, color=GREEN
        )
        self.play(Write(idea_title))
        self.wait(1)
        self.play(idea_title.animate.scale(0.7).to_edge(UP))

        # Show the target function
        axes = Axes(
            x_range=[-3, 3, 1],
            y_range=[-2, 3, 1],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=5,
        )
        axes.next_to(idea_title, DOWN, buff=0.5)

        # e^x
        target_func = axes.plot(
            lambda x: np.exp(x), x_range=[-2, 1.1], color=BLUE, stroke_width=4
        )
        target_label = MathTex(r"e^x", font_size=28, color=BLUE)
        target_label.next_to(axes, RIGHT).shift(UP * 2)

        self.play(Create(axes))
        self.play(Create(target_func), Write(target_label))
        self.wait(1)

        # Pick a point to approximate around
        x0 = 0
        y0 = np.exp(x0)
        point = Dot(axes.c2p(x0, y0), color=YELLOW, radius=0.12)
        point_label = Text("Approximate here", font_size=20, color=YELLOW)
        point_label.next_to(point, UP, buff=0.3)

        self.play(Create(point), Write(point_label))
        self.wait(1)

        # Build approximations step by step
        # Step 0: Constant (just the value)
        approx0 = axes.plot(lambda x: y0, x_range=[-2, 2], color=RED, stroke_width=2)
        label0 = MathTex(r"f(x) \\approx 1", font_size=22, color=RED)
        label0.next_to(target_label, DOWN, buff=0.3)

        self.play(Create(approx0), Write(label0))
        self.wait(1.5)

        # Step 1: Linear (match slope)
        # f'(x) = e^x, so f'(0) = 1
        slope = 1
        approx1 = axes.plot(
            lambda x: y0 + slope * (x - x0),
            x_range=[-1.5, 1.5],
            color=GREEN,
            stroke_width=2,
        )
        label1 = MathTex(r"f(x) \\approx 1 + x", font_size=22, color=GREEN)
        label1.next_to(label0, DOWN, buff=0.2)

        # Show the tangent line
        tangent = axes.plot(
            lambda x: y0 + slope * (x - x0),
            x_range=[-1, 1],
            color=YELLOW,
            stroke_width=3,
            stroke_opacity=0.5,
        )

        self.play(
            FadeOut(approx0),
            FadeOut(label0),
            Create(tangent),
            Create(approx1),
            Write(label1),
        )
        self.wait(1.5)

        # Step 2: Quadratic (match curvature)
        # f''(x) = e^x, so f''(0) = 1
        approx2 = axes.plot(
            lambda x: y0 + slope * (x - x0) + 0.5 * (x - x0) ** 2,
            x_range=[-2, 1.5],
            color=ORANGE,
            stroke_width=2,
        )
        label2 = MathTex(
            r"f(x) \\approx 1 + x + \\frac{x^2}{2}", font_size=22, color=ORANGE
        )
        label2.next_to(label1, DOWN, buff=0.2)

        self.play(
            FadeOut(approx1),
            FadeOut(label1),
            FadeOut(tangent),
            Create(approx2),
            Write(label2),
        )
        self.wait(1.5)

        # Step 3: Cubic
        approx3 = axes.plot(
            lambda x: y0
            + slope * (x - x0)
            + 0.5 * (x - x0) ** 2
            + (1 / 6) * (x - x0) ** 3,
            x_range=[-2.2, 1.8],
            color=PURPLE,
            stroke_width=2,
        )
        label3 = MathTex(
            r"f(x) \\approx 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6}",
            font_size=20,
            color=PURPLE,
        )
        label3.next_to(label2, DOWN, buff=0.2)

        self.play(
            FadeOut(approx2),
            FadeOut(label2),
            Create(approx3),
            Write(label3),
        )
        self.wait(2)

        # Show the pattern
        self.play(
            FadeOut(approx3),
            FadeOut(label3),
            FadeOut(point),
            FadeOut(point_label),
        )

        pattern_title = Text("The Pattern", font_size=28, color=GREEN)
        pattern_title.next_to(idea_title, DOWN, buff=0.5)
        self.play(Write(pattern_title))

        # Show Taylor series formula simply
        taylor = MathTex(
            r"e^x \\approx 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\cdots",
            font_size=26,
        )
        taylor.next_to(pattern_title, DOWN, buff=0.5)

        factorial_explained = Text(
            "Each term matches a derivative at x=0", font_size=22, color=YELLOW
        )
        factorial_explained.next_to(taylor, DOWN, buff=0.5)

        self.play(Write(taylor))
        self.wait(1)
        self.play(Write(factorial_explained))
        self.wait(2)

        # Key insight
        insight = Text(
            "More terms = better approximation near x=0", font_size=24, color=GREEN
        )
        insight.to_edge(DOWN, buff=0.8)

        self.play(Write(insight))
        self.wait(3)

        self.play(
            FadeOut(axes),
            FadeOut(target_func),
            FadeOut(target_label),
            FadeOut(pattern_title),
            FadeOut(taylor),
            FadeOut(factorial_explained),
            FadeOut(insight),
            FadeOut(idea_title),
            FadeOut(title),
        )
