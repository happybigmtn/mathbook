from manim import *
import numpy as np


class ExponentialGrowthScene(Scene):
    """
    Exponential Growth - Feynman Style Visualization

    Shows the difference between linear and exponential growth
    through the classic rice on a chessboard story.
    """

    def construct(self):
        # Start with the chessboard story
        title = Text("The Chessboard Problem", font_size=36, color=BLUE)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.scale(0.6).to_edge(UP))

        story = Text("Put 1 grain of rice on the first square,", font_size=24)
        story2 = Text("then double it on each square...", font_size=24)
        story.shift(UP * 1.5)
        story2.next_to(story, DOWN, buff=0.3)

        self.play(Write(story))
        self.play(Write(story2))
        self.wait(2)

        # Show the progression
        squares = VGroup(
            VGroup(
                MathTex(r"\\text{Square 1:}", font_size=22), MathTex(r"1", font_size=28)
            ).arrange(RIGHT, buff=0.5),
            VGroup(
                MathTex(r"\\text{Square 2:}", font_size=22), MathTex(r"2", font_size=28)
            ).arrange(RIGHT, buff=0.5),
            VGroup(
                MathTex(r"\\text{Square 3:}", font_size=22), MathTex(r"4", font_size=28)
            ).arrange(RIGHT, buff=0.5),
            VGroup(
                MathTex(r"\\text{Square 4:}", font_size=22), MathTex(r"8", font_size=28)
            ).arrange(RIGHT, buff=0.5),
            VGroup(
                MathTex(r"\\text{Square 10:}", font_size=22),
                MathTex(r"512", font_size=28),
            ).arrange(RIGHT, buff=0.5),
            VGroup(
                MathTex(r"\\text{Square 20:}", font_size=22),
                MathTex(r"524,288", font_size=28),
            ).arrange(RIGHT, buff=0.5),
            VGroup(
                MathTex(r"\\text{Square 30:}", font_size=22),
                MathTex(r"\\approx 1 \\text{ billion}", font_size=24),
            ).arrange(RIGHT, buff=0.5),
            VGroup(
                MathTex(r"\\text{Square 64:}", font_size=22),
                MathTex(r"\\approx 18 \\text{ quintillion}", font_size=24),
            ).arrange(RIGHT, buff=0.5),
        ).arrange(DOWN, buff=0.3)
        squares.shift(DOWN * 0.5)

        self.play(FadeOut(story), FadeOut(story2))

        for square in squares:
            self.play(Write(square))
            self.wait(0.3)

        self.wait(2)

        # The punchline
        punchline = Text("More rice than exists on Earth!", font_size=28, color=RED)
        punchline.to_edge(DOWN, buff=0.5)

        self.play(Write(punchline))
        self.wait(2)

        self.play(FadeOut(squares), FadeOut(punchline))

        # Compare linear vs exponential
        compare_title = Text("Linear vs Exponential Growth", font_size=30, color=GREEN)
        self.play(Write(compare_title))
        self.wait(1)
        self.play(compare_title.animate.scale(0.7).to_edge(UP))

        # Create axes
        axes = Axes(
            x_range=[0, 5, 1],
            y_range=[0, 20, 5],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=5,
        )
        axes.next_to(compare_title, DOWN, buff=0.5)

        # Linear: y = 2x
        linear = axes.plot(lambda x: 2 * x, x_range=[0, 5], color=GREEN, stroke_width=3)
        linear_label = MathTex(r"\\text{Linear: } y = 2x", font_size=22, color=GREEN)
        linear_label.next_to(axes, RIGHT).shift(UP * 2)

        # Exponential: y = 2^x
        exp = axes.plot(lambda x: 2**x, x_range=[0, 4.3], color=BLUE, stroke_width=3)
        exp_label = MathTex(r"\\text{Exponential: } y = 2^x", font_size=22, color=BLUE)
        exp_label.next_to(axes, RIGHT)

        self.play(Create(axes))
        self.play(Create(linear), Write(linear_label))
        self.play(Create(exp), Write(exp_label))

        # Highlight the difference
        highlight = Text(
            "Exponential eventually dwarfs linear", font_size=24, color=YELLOW
        )
        highlight.to_edge(DOWN, buff=0.8)

        self.play(Write(highlight))
        self.wait(2)

        # Show doubling time
        self.play(
            FadeOut(linear),
            FadeOut(linear_label),
            FadeOut(highlight),
        )

        doubling_title = Text("The Doubling Time", font_size=28, color=GREEN)
        doubling_title.next_to(compare_title, DOWN, buff=0.5)
        self.play(Write(doubling_title))

        # Mark doubling points
        for n in range(4):
            x = n
            y = 2**n
            point = Dot(axes.c2p(x, y), color=YELLOW, radius=0.1)
            label = MathTex(f"2^{n} = {y}", font_size=18)
            label.next_to(point, UP, buff=0.2)
            self.play(Create(point), Write(label))

        doubling_formula = MathTex(
            r"T_{\\text{double}} = \\frac{\\ln(2)}{r}", font_size=26
        )
        doubling_formula.next_to(axes, RIGHT).shift(UP)

        self.play(Write(doubling_formula))
        self.wait(2)

        self.play(
            FadeOut(axes),
            FadeOut(exp),
            FadeOut(exp_label),
            FadeOut(doubling_title),
            FadeOut(doubling_formula),
            *[FadeOut(obj) for obj in self.mobjects if isinstance(obj, (Dot, MathTex))],
            FadeOut(compare_title),
            FadeOut(title),
        )
