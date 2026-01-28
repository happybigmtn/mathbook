from manim import *
import numpy as np


class FourierTransformScene(Scene):
    """
    Fourier Transform visualization.

    Shows how any signal can be decomposed into sine waves,
    and how the Fourier transform reveals the frequency spectrum.
    """

    def construct(self):
        # Title
        title = Text("The Fourier Transform", font_size=44, color=BLUE)
        subtitle = Text(
            "Decomposing signals into frequencies", font_size=24, color=GRAY
        )
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Setup axes
        axes = Axes(
            x_range=[0, 4 * PI, PI / 2],
            y_range=[-2, 2, 1],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=3,
        )
        axes.next_to(title, DOWN, buff=0.5)

        # Show a complex signal
        signal_text = Text("Complex Signal:", font_size=24)
        signal_text.next_to(axes, LEFT)
        signal_text.shift(UP * 2)

        self.play(Write(signal_text))

        # Create a signal composed of two sine waves
        def complex_signal(x):
            return np.sin(x) + 0.5 * np.sin(3 * x) + 0.3 * np.sin(5 * x)

        signal_graph = axes.plot(complex_signal, color=BLUE, stroke_width=3)

        self.play(Create(axes))
        self.play(Create(signal_graph), run_time=2)
        self.wait(1)

        # Decompose into components
        self.play(FadeOut(signal_graph))

        decomp_text = Text("Decomposed into:", font_size=24, color=GREEN)
        decomp_text.next_to(axes, LEFT)
        decomp_text.shift(UP * 2)

        self.play(Transform(signal_text, decomp_text))

        # Show individual sine waves
        sine_1 = axes.plot(lambda x: np.sin(x), color=RED, stroke_width=2)
        sine_2 = axes.plot(lambda x: 0.5 * np.sin(3 * x), color=GREEN, stroke_width=2)
        sine_3 = axes.plot(lambda x: 0.3 * np.sin(5 * x), color=YELLOW, stroke_width=2)

        labels = VGroup(
            MathTex(r"\sin(x)", font_size=20, color=RED),
            MathTex(r"0.5\sin(3x)", font_size=20, color=GREEN),
            MathTex(r"0.3\sin(5x)", font_size=20, color=YELLOW),
        )

        for i, label in enumerate(labels):
            label.next_to(axes, RIGHT)
            label.shift(UP * (1 - i * 0.8))

        self.play(Create(sine_1), Write(labels[0]))
        self.wait(0.5)
        self.play(Create(sine_2), Write(labels[1]))
        self.wait(0.5)
        self.play(Create(sine_3), Write(labels[2]))
        self.wait(1)

        # Show sum equals original
        self.play(FadeOut(sine_1), FadeOut(sine_2), FadeOut(sine_3))

        sum_text = Text("Sum = Original Signal", font_size=24, color=BLUE)
        sum_text.next_to(axes, LEFT)
        sum_text.shift(UP * 2)

        self.play(Transform(signal_text, sum_text))

        sum_graph = axes.plot(complex_signal, color=BLUE, stroke_width=3)
        self.play(Create(sum_graph))
        self.wait(2)

        # Frequency spectrum
        self.play(
            FadeOut(axes), FadeOut(sum_graph), FadeOut(signal_text), FadeOut(labels)
        )

        spectrum_title = Text("Frequency Spectrum:", font_size=28, color=YELLOW)
        spectrum_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(spectrum_title))

        # Bar chart showing frequencies
        freq_axes = Axes(
            x_range=[0, 6, 1],
            y_range=[0, 1.2, 0.5],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=4,
        )
        freq_axes.next_to(spectrum_title, DOWN, buff=0.5)

        x_label = MathTex(r"\text{Frequency}", font_size=24)
        x_label.next_to(freq_axes.x_axis, DOWN)
        y_label = MathTex(r"\text{Amplitude}", font_size=24)
        y_label.next_to(freq_axes.y_axis, LEFT)

        self.play(Create(freq_axes), Write(x_label), Write(y_label))

        # Frequency bars
        bar_1 = Rectangle(
            height=freq_axes.c2p(0, 1)[1] - freq_axes.c2p(0, 0)[1],
            width=0.3,
            fill_opacity=0.8,
            color=RED,
        )
        bar_1.move_to(freq_axes.c2p(1, 0.5))

        bar_2 = Rectangle(
            height=freq_axes.c2p(0, 0.5)[1] - freq_axes.c2p(0, 0)[1],
            width=0.3,
            fill_opacity=0.8,
            color=GREEN,
        )
        bar_2.move_to(freq_axes.c2p(3, 0.25))

        bar_3 = Rectangle(
            height=freq_axes.c2p(0, 0.3)[1] - freq_axes.c2p(0, 0)[1],
            width=0.3,
            fill_opacity=0.8,
            color=YELLOW,
        )
        bar_3.move_to(freq_axes.c2p(5, 0.15))

        freq_labels = VGroup(
            MathTex(r"f=1", font_size=18).next_to(bar_1, DOWN),
            MathTex(r"f=3", font_size=18).next_to(bar_2, DOWN),
            MathTex(r"f=5", font_size=18).next_to(bar_3, DOWN),
        )

        self.play(
            GrowFromEdge(bar_1, DOWN),
            GrowFromEdge(bar_2, DOWN),
            GrowFromEdge(bar_3, DOWN),
            run_time=2,
        )
        self.play(*[Write(label) for label in freq_labels])

        self.wait(2)

        # Prism analogy
        self.play(
            FadeOut(freq_axes),
            FadeOut(bar_1),
            FadeOut(bar_2),
            FadeOut(bar_3),
            FadeOut(x_label),
            FadeOut(y_label),
            FadeOut(freq_labels),
            FadeOut(spectrum_title),
        )

        prism_title = Text("The Prism Analogy:", font_size=28, color=GREEN)
        prism_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(prism_title))

        # Draw prism
        prism = Polygon(
            [-2, -1, 0],
            [2, -1, 0],
            [2.5, 1, 0],
            [-1.5, 1, 0],
            color=BLUE,
            fill_opacity=0.3,
        )

        # White light entering
        white_light = Arrow(LEFT * 4, LEFT * 2, color=WHITE, buff=0)
        white_label = Text("White Light", font_size=20, color=WHITE)
        white_label.next_to(white_light, UP)

        # Spectrum exiting
        colors = [RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE]
        spectrum_arrows = VGroup(
            *[
                Arrow(
                    RIGHT * 2 + UP * (i - 2.5) * 0.3,
                    RIGHT * 4 + UP * (i - 2.5) * 0.5,
                    color=color,
                    buff=0,
                )
                for i, color in enumerate(colors)
            ]
        )

        spectrum_label = Text("Spectrum", font_size=20)
        spectrum_label.next_to(spectrum_arrows, RIGHT)

        analogy_text = Text(
            "Fourier Transform : Signal :: Prism : Light", font_size=22, color=YELLOW
        )
        analogy_text.next_to(prism, DOWN, buff=0.8)

        self.play(Create(prism))
        self.play(Create(white_light), Write(white_label))
        self.play(*[Create(arrow) for arrow in spectrum_arrows], Write(spectrum_label))
        self.play(Write(analogy_text))

        self.wait(3)

        # Final summary
        self.play(
            FadeOut(prism),
            FadeOut(white_light),
            FadeOut(white_label),
            FadeOut(spectrum_arrows),
            FadeOut(spectrum_label),
            FadeOut(analogy_text),
            FadeOut(prism_title),
        )

        summary = VGroup(
            Text("Fourier Transform", font_size=36, color=BLUE),
            Text("Decomposes signals into frequencies", font_size=26),
            Text("Reveals hidden structure", font_size=26, color=GREEN),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
