from manim import *
import numpy as np


class LogarithmsScene(Scene):
    """
    Logarithms - Feynman Style Visualization

    Shows logarithms as the answer to "how many digits?" and
    their relationship to exponents through concrete examples.
    """

    def construct(self):
        # Start with a practical question
        title = Text("How Many Digits?", font_size=36, color=BLUE)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.scale(0.6).to_edge(UP))

        # Show powers of 10
        powers = VGroup(
            MathTex(r"10^0 = 1", font_size=28),
            MathTex(r"10^1 = 10", font_size=28),
            MathTex(r"10^2 = 100", font_size=28),
            MathTex(r"10^3 = 1,000", font_size=28),
            MathTex(r"10^6 = 1,000,000", font_size=28),
        ).arrange(DOWN, buff=0.4)
        powers.shift(UP * 0.5)

        question = Text("What power of 10 gives 500?", font_size=26, color=YELLOW)
        question.to_edge(DOWN, buff=1)

        for power in powers:
            self.play(Write(power))
            self.wait(0.3)

        self.play(Write(question))
        self.wait(2)

        # The answer
        answer = MathTex(r"10^{2.699...} = 500", font_size=30, color=GREEN)
        answer.next_to(question, UP, buff=0.5)

        log_answer = MathTex(r"\\log_{10}(500) = 2.699...", font_size=30, color=GREEN)
        log_answer.next_to(answer, UP, buff=0.3)

        self.play(Write(answer))
        self.play(Write(log_answer))
        self.wait(2)

        self.play(
            FadeOut(powers),
            FadeOut(question),
            FadeOut(answer),
            FadeOut(log_answer),
        )

        # Visual: logarithm as "number of digits minus one"
        digits_title = Text(
            "Logarithm ≈ (Number of Digits) - 1", font_size=28, color=GREEN
        )
        self.play(Write(digits_title))
        self.wait(1)
        self.play(digits_title.animate.scale(0.8).to_edge(UP))

        # Show examples
        examples = VGroup(
            VGroup(
                MathTex(r"5", font_size=32),
                Text("→ 1 digit →", font_size=20),
                MathTex(r"\\log(5) \\approx 0.7", font_size=24),
            ).arrange(RIGHT, buff=0.3),
            VGroup(
                MathTex(r"50", font_size=32),
                Text("→ 2 digits →", font_size=20),
                MathTex(r"\\log(50) \\approx 1.7", font_size=24),
            ).arrange(RIGHT, buff=0.3),
            VGroup(
                MathTex(r"500", font_size=32),
                Text("→ 3 digits →", font_size=20),
                MathTex(r"\\log(500) \\approx 2.7", font_size=24),
            ).arrange(RIGHT, buff=0.3),
            VGroup(
                MathTex(r"5000", font_size=32),
                Text("→ 4 digits →", font_size=20),
                MathTex(r"\\log(5000) \\approx 3.7", font_size=24),
            ).arrange(RIGHT, buff=0.3),
        ).arrange(DOWN, buff=0.5)
        examples.shift(DOWN * 0.5)

        for example in examples:
            self.play(Write(example))
            self.wait(0.5)

        self.wait(2)

        self.play(FadeOut(examples), FadeOut(digits_title))

        # The inverse relationship
        inverse_title = Text(
            "Logarithms are the Inverse of Exponents", font_size=28, color=GREEN
        )
        self.play(Write(inverse_title))
        self.wait(1)
        self.play(inverse_title.animate.scale(0.8).to_edge(UP))

        # Create axes
        axes = Axes(
            x_range=[0.1, 5, 1],
            y_range=[-2, 3, 1],
            axis_config={"color": WHITE},
            x_length=7,
            y_length=5,
        )
        axes.next_to(inverse_title, DOWN, buff=0.5)

        # ln(x)
        log_graph = axes.plot(
            lambda x: np.log(x), x_range=[0.1, 5], color=BLUE, stroke_width=3
        )
        log_label = MathTex(r"y = \\ln(x)", font_size=24, color=BLUE)
        log_label.next_to(axes, RIGHT).shift(UP)

        # e^x
        exp_graph = axes.plot(
            lambda x: np.exp(x), x_range=[-1.5, 1.2], color=RED, stroke_width=3
        )
        exp_label = MathTex(r"y = e^x", font_size=24, color=RED)
        exp_label.next_to(axes, RIGHT).shift(DOWN)

        self.play(Create(axes))
        self.play(Create(log_graph), Write(log_label))
        self.play(Create(exp_graph), Write(exp_label))

        # Show reflection across y=x
        diagonal = DashedLine(
            axes.c2p(0.1, 0.1), axes.c2p(3, 3), color=YELLOW, stroke_opacity=0.4
        )
        self.play(Create(diagonal))

        reflection_text = Text("Reflection across y = x", font_size=22, color=YELLOW)
        reflection_text.to_edge(DOWN, buff=0.8)
        self.play(Write(reflection_text))
        self.wait(2)

        self.play(
            FadeOut(axes),
            FadeOut(log_graph),
            FadeOut(log_label),
            FadeOut(exp_graph),
            FadeOut(exp_label),
            FadeOut(diagonal),
            FadeOut(reflection_text),
            FadeOut(inverse_title),
            FadeOut(title),
        )
