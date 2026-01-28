from manim import *
import numpy as np


class LogarithmsScene(Scene):
    """
    Logarithms visualization.

    Shows the relationship between logarithms and exponents,
    logarithm properties, and natural logarithm.
    """

    def construct(self):
        # Title
        title = Text("Logarithms", font_size=44, color=BLUE)
        subtitle = MathTex(r"\\log_b(x) = y \\iff b^y = x", font_size=28, color=YELLOW)
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

        definition = VGroup(
            MathTex(
                r"\\log_b(x) \\text{ is the exponent } y \\text{ such that } b^y = x",
                font_size=24,
            ),
            Text("Logarithms are the inverse of exponentiation", font_size=20),
        ).arrange(DOWN, buff=0.4)
        definition.next_to(def_title, DOWN, buff=0.3)

        self.play(*[Write(d) for d in definition])
        self.wait(2)

        self.play(FadeOut(definition), FadeOut(def_title))

        # Graph of log
        axes = Axes(
            x_range=[0.1, 5, 1],
            y_range=[-2, 2, 0.5],
            axis_config={"color": WHITE},
            x_length=7,
            y_length=4,
        )
        axes.next_to(title, DOWN, buff=0.5)

        log_graph = axes.plot(
            lambda x: np.log(x), x_range=[0.1, 5], color=BLUE, stroke_width=3
        )
        log_label = MathTex(r"y = \\ln(x)", font_size=24, color=BLUE)
        log_label.next_to(axes, RIGHT).shift(UP)

        exp_graph = axes.plot(
            lambda x: np.exp(x), x_range=[-2, 1.5], color=GREEN, stroke_width=3
        )
        exp_label = MathTex(r"y = e^x", font_size=24, color=GREEN)
        exp_label.next_to(axes, RIGHT).shift(DOWN)

        self.play(Create(axes))
        self.play(Create(log_graph), Write(log_label))
        self.play(Create(exp_graph), Write(exp_label))

        # Show they are inverses
        inverse_text = Text("Inverse functions: reflection across y=x", font_size=20)
        inverse_text.next_to(axes, DOWN, buff=0.5)
        self.play(Write(inverse_text))
        self.wait(2)

        self.play(
            FadeOut(axes),
            FadeOut(log_graph),
            FadeOut(log_label),
            FadeOut(exp_graph),
            FadeOut(exp_label),
            FadeOut(inverse_text),
        )

        # Properties
        props_title = Text("Logarithm Properties:", font_size=26, color=GREEN)
        props_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(props_title))

        properties = VGroup(
            MathTex(r"\\log_b(xy) = \\log_b(x) + \\log_b(y)", font_size=24),
            MathTex(r"\\log_b(\\frac{x}{y}) = \\log_b(x) - \\log_b(y)", font_size=24),
            MathTex(r"\\log_b(x^n) = n\\log_b(x)", font_size=24),
            MathTex(r"\\log_b(1) = 0, \\quad \\log_b(b) = 1", font_size=24),
        ).arrange(DOWN, buff=0.4)
        properties.next_to(props_title, DOWN, buff=0.5)

        self.play(*[Write(p) for p in properties])
        self.wait(2)

        self.play(FadeOut(properties), FadeOut(props_title))

        # Change of base
        change_title = Text("Change of Base Formula:", font_size=26, color=YELLOW)
        change_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(change_title))

        change_formula = MathTex(
            r"\\log_b(x) = \\frac{\\log_c(x)}{\\log_c(b)}", font_size=28
        )
        change_formula.next_to(change_title, DOWN, buff=0.5)

        self.play(Write(change_formula))

        example = MathTex(
            r"\\log_2(8) = \\frac{\\ln(8)}{\\ln(2)} = \\frac{2.079}{0.693} = 3",
            font_size=24,
        )
        example.next_to(change_formula, DOWN, buff=0.5)

        self.play(Write(example))
        self.wait(2)

        self.play(FadeOut(change_formula), FadeOut(example), FadeOut(change_title))

        # Applications
        apps_title = Text("Applications:", font_size=26, color=GREEN)
        apps_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(apps_title))

        applications = VGroup(
            Text("• Measuring earthquake intensity (Richter scale)", font_size=20),
            Text("• Sound intensity (decibels)", font_size=20),
            Text("• pH scale in chemistry", font_size=20),
            Text("• Algorithm complexity analysis", font_size=20),
            Text("• Compound interest calculations", font_size=20),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        applications.next_to(apps_title, DOWN, buff=0.5)
        applications.to_edge(LEFT, buff=1)

        self.play(*[Write(app) for app in applications])
        self.wait(3)

        self.play(FadeOut(applications), FadeOut(apps_title))

        # Summary
        summary = VGroup(
            Text("Logarithms", font_size=36, color=BLUE),
            MathTex(r"\\log_b(x) = y \\iff b^y = x", font_size=28),
            Text("The inverse of exponentiation", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
