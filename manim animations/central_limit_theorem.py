from manim import *
import numpy as np


class CentralLimitTheoremScene(Scene):
    """
    Central Limit Theorem visualization.

    Shows how the sum of independent random variables approaches
    a normal distribution, regardless of the original distribution.
    """

    def construct(self):
        # Title
        title = Text("The Central Limit Theorem", font_size=42, color=BLUE)
        subtitle = Text(
            "Why the Normal Distribution is Everywhere", font_size=24, color=GRAY
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
            y_range=[0, 0.8, 0.2],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=4,
        )
        axes.next_to(title, DOWN, buff=0.5)

        # Uniform distribution
        uniform_title = Text("Start with Uniform Distribution", font_size=24)
        uniform_title.next_to(axes, DOWN, buff=0.3)

        self.play(Create(axes), Write(uniform_title))

        # Draw uniform distribution
        uniform = VMobject()
        uniform.set_points_as_corners(
            [axes.c2p(-1, 0), axes.c2p(-1, 0.5), axes.c2p(1, 0.5), axes.c2p(1, 0)]
        )
        uniform.set_fill(BLUE, opacity=0.5)
        uniform.set_stroke(BLUE, width=2)

        self.play(Create(uniform))
        self.wait(1)

        self.play(FadeOut(uniform), FadeOut(uniform_title))

        # Sum of 2 uniforms
        sum2_title = Text("Sum of 2 Uniform Variables", font_size=24)
        sum2_title.next_to(axes, DOWN, buff=0.3)

        self.play(Write(sum2_title))

        # Triangular distribution
        triangular = VMobject()
        triangular.set_points_as_corners(
            [axes.c2p(-2, 0), axes.c2p(0, 0.5), axes.c2p(2, 0)]
        )
        triangular.set_fill(GREEN, opacity=0.5)
        triangular.set_stroke(GREEN, width=2)

        self.play(Create(triangular))
        self.wait(1)

        self.play(FadeOut(triangular), FadeOut(sum2_title))

        # Sum of 3 uniforms
        sum3_title = Text("Sum of 3 Uniform Variables", font_size=24)
        sum3_title.next_to(axes, DOWN, buff=0.3)

        self.play(Write(sum3_title))

        # Piecewise quadratic (approximation)
        sum3 = axes.plot(
            lambda x: max(0, 0.4 - 0.05 * x**2) if abs(x) < 3 else 0,
            x_range=[-3, 3],
            color=ORANGE,
            stroke_width=3,
        )

        self.play(Create(sum3))
        self.wait(1)

        self.play(FadeOut(sum3), FadeOut(sum3_title))

        # Sum of many uniforms - Normal distribution
        normal_title = Text("Sum of 30 Uniform Variables", font_size=24, color=YELLOW)
        normal_title.next_to(axes, DOWN, buff=0.3)

        self.play(Write(normal_title))

        # Normal distribution
        def normal(x, mu=0, sigma=1):
            return (1 / (sigma * np.sqrt(2 * np.pi))) * np.exp(
                -0.5 * ((x - mu) / sigma) ** 2
            )

        normal_curve = axes.plot(
            lambda x: normal(x, 0, 1), x_range=[-4, 4], color=YELLOW, stroke_width=3
        )

        self.play(Create(normal_curve))

        # Normal formula
        normal_formula = MathTex(
            r"f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}",
            font_size=24,
        )
        normal_formula.next_to(normal_title, DOWN, buff=0.3)

        self.play(Write(normal_formula))
        self.wait(2)

        self.play(
            FadeOut(normal_curve),
            FadeOut(normal_formula),
            FadeOut(normal_title),
            FadeOut(axes),
        )

        # CLT Statement
        clt_title = Text("The Central Limit Theorem:", font_size=28, color=GREEN)
        clt_title.next_to(title, DOWN, buff=0.5)

        clt_statement = Text(
            "The sum of independent random variables\napproaches a normal distribution",
            font_size=22,
            line_spacing=1.5,
        )
        clt_statement.next_to(clt_title, DOWN, buff=0.5)

        self.play(Write(clt_title))
        self.play(Write(clt_statement))
        self.wait(2)

        # Key points
        points = VGroup(
            Text("• Regardless of original distribution", font_size=20),
            Text("• Mean = sum of means", font_size=20),
            Text("• Variance = sum of variances", font_size=20),
            Text("• Explains why normal distribution is universal", font_size=20),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        points.next_to(clt_statement, DOWN, buff=0.5)
        points.to_edge(LEFT, buff=1)

        self.play(*[Write(p) for p in points])
        self.wait(3)

        self.play(FadeOut(clt_title), FadeOut(clt_statement), FadeOut(points))

        # Summary
        summary = VGroup(
            Text("Central Limit Theorem", font_size=36, color=BLUE),
            Text("The reason statistics works!", font_size=26, color=GREEN),
            Text("Normal distribution emerges from sums", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
