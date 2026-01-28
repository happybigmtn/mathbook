from manim import *
import numpy as np


class ExponentialGrowthScene(Scene):
    """
    Exponential Growth visualization.

    Shows exponential vs linear growth, doubling time,
    and real-world applications.
    """

    def construct(self):
        # Title
        title = Text("Exponential Growth", font_size=44, color=BLUE)
        subtitle = MathTex(r"f(t) = A_0 e^{rt}", font_size=28, color=YELLOW)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(Write(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Setup axes
        axes = Axes(
            x_range=[0, 5, 1],
            y_range=[0, 10, 2],
            axis_config={"color": WHITE},
            x_length=7,
            y_length=5,
        )
        axes.next_to(title, DOWN, buff=0.5)

        # Linear vs exponential
        linear_graph = axes.plot(
            lambda x: x + 1, x_range=[0, 5], color=GREEN, stroke_width=3
        )
        linear_label = MathTex(
            r"\\text{Linear: } f(x) = x + 1", font_size=20, color=GREEN
        )
        linear_label.next_to(axes, RIGHT).shift(UP * 2)

        exp_graph = axes.plot(
            lambda x: np.exp(0.5 * x), x_range=[0, 5], color=BLUE, stroke_width=3
        )
        exp_label = MathTex(
            r"\\text{Exponential: } f(x) = e^{0.5x}", font_size=20, color=BLUE
        )
        exp_label.next_to(axes, RIGHT)

        self.play(Create(axes))
        self.play(Create(linear_graph), Write(linear_label))
        self.play(Create(exp_graph), Write(exp_label))
        self.wait(2)

        self.play(
            FadeOut(axes),
            FadeOut(linear_graph),
            FadeOut(linear_label),
            FadeOut(exp_graph),
            FadeOut(exp_label),
        )

        # Doubling time
        double_title = Text("Doubling Time:", font_size=26, color=GREEN)
        double_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(double_title))

        doubling = VGroup(
            MathTex(
                r"T_{\\text{double}} = \\frac{\\ln(2)}{r} \\approx \\frac{0.693}{r}",
                font_size=26,
            ),
            Text("Time it takes for a quantity to double", font_size=20),
        ).arrange(DOWN, buff=0.4)
        doubling.next_to(double_title, DOWN, buff=0.5)

        self.play(*[Write(d) for d in doubling])
        self.wait(2)

        self.play(FadeOut(doubling), FadeOut(double_title))

        # The Rule of 70
        rule_title = Text("The Rule of 70:", font_size=26, color=YELLOW)
        rule_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(rule_title))

        rule = VGroup(
            MathTex(
                r"\\text{Doubling time} \\approx \\frac{70}{\\text{growth rate (\\%)}}",
                font_size=24,
            ),
            Text("Example: 7% growth rate → doubling in ~10 years", font_size=20),
        ).arrange(DOWN, buff=0.4)
        rule.next_to(rule_title, DOWN, buff=0.5)

        self.play(*[Write(r) for r in rule])
        self.wait(2)

        self.play(FadeOut(rule), FadeOut(rule_title))

        # Applications
        apps_title = Text("Real-World Examples:", font_size=26, color=GREEN)
        apps_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(apps_title))

        applications = VGroup(
            Text("• Population growth", font_size=22),
            Text("• Compound interest", font_size=22),
            Text("• Radioactive decay (negative growth)", font_size=22),
            Text("• Viral spread (initial phases)", font_size=22),
            Text("• Moore's Law (transistor count)", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        applications.next_to(apps_title, DOWN, buff=0.5)
        applications.to_edge(LEFT, buff=1)

        self.play(*[Write(app) for app in applications])
        self.wait(3)

        self.play(FadeOut(applications), FadeOut(apps_title))

        # Warning about unsustainability
        warning = Text(
            "Nothing can grow exponentially forever!", font_size=26, color=RED
        )
        warning.next_to(title, DOWN, buff=1)

        self.play(Write(warning))
        self.wait(2)

        self.play(FadeOut(warning))

        # Summary
        summary = VGroup(
            Text("Exponential Growth", font_size=36, color=BLUE),
            MathTex(r"f(t) = A_0 e^{rt}", font_size=28),
            Text("The power of compound growth", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
