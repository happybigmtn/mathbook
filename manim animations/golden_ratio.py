from manim import *
import numpy as np


class GoldenRatioScene(Scene):
    """
    Golden Ratio (φ) visualization.

    Shows the golden rectangle spiral, its relationship to the Fibonacci sequence,
    and its appearance in geometry.
    """

    def construct(self):
        # Title
        title = Text("The Golden Ratio", font_size=44, color=BLUE)
        subtitle = MathTex(
            r"\phi = \frac{1 + \sqrt{5}}{2} \approx 1.618...",
            font_size=32,
            color=YELLOW,
        )
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(Write(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Definition
        def_text = Text("Definition:", font_size=26)
        def_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_text))

        definition = MathTex(r"\frac{a+b}{a} = \frac{a}{b} = \phi", font_size=32)
        definition.next_to(def_text, DOWN, buff=0.3)

        self.play(Write(definition))
        self.wait(1)

        # Visual representation with line segment
        line = Line(LEFT * 3, RIGHT * 3, color=WHITE, stroke_width=4)
        line.next_to(definition, DOWN, buff=0.8)

        # Mark the golden ratio point
        phi_val = (1 + np.sqrt(5)) / 2
        golden_point = line.get_left() + (line.get_right() - line.get_left()) / phi_val

        dot = Dot(golden_point, color=YELLOW, radius=0.1)

        # Labels
        a_label = MathTex(r"a", font_size=24).next_to(
            Line(line.get_left(), golden_point), DOWN, buff=0.2
        )
        b_label = MathTex(r"b", font_size=24).next_to(
            Line(golden_point, line.get_right()), DOWN, buff=0.2
        )

        self.play(Create(line))
        self.play(Create(dot), Write(a_label), Write(b_label))
        self.wait(2)

        self.play(
            FadeOut(line),
            FadeOut(dot),
            FadeOut(a_label),
            FadeOut(b_label),
            FadeOut(definition),
            FadeOut(def_text),
        )

        # Golden Rectangle Spiral
        spiral_title = Text("Golden Rectangle Spiral:", font_size=26, color=GREEN)
        spiral_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(spiral_title))

        # Draw golden rectangles with evolving spiral
        rectangles = VGroup()
        arcs = VGroup()

        # Start with large square
        sizes = [
            3,
            3 / phi_val,
            3 / phi_val**2,
            3 / phi_val**3,
            3 / phi_val**4,
            3 / phi_val**5,
        ]
        positions = [
            np.array([0, 0, 0]),
            np.array([3 - 3 / phi_val, 0, 0]),
            np.array([3 - 3 / phi_val, 3 / phi_val**2, 0]),
            np.array([3 - 3 / phi_val - 3 / phi_val**3, 3 / phi_val**2, 0]),
            np.array(
                [3 - 3 / phi_val - 3 / phi_val**3, 3 / phi_val**2 - 3 / phi_val**4, 0]
            ),
            np.array(
                [
                    3 - 3 / phi_val - 3 / phi_val**3 + 3 / phi_val**5,
                    3 / phi_val**2 - 3 / phi_val**4,
                    0,
                ]
            ),
        ]

        # Draw one rectangle and arc at a time to show evolution
        for i, (size, pos) in enumerate(zip(sizes, positions)):
            if i == 0:
                rect = Square(side_length=size, color=BLUE, stroke_width=2)
            else:
                rect = Rectangle(
                    width=size * (1 if i % 2 == 0 else phi_val),
                    height=size * (phi_val if i % 2 == 0 else 1),
                    color=BLUE,
                    stroke_width=2,
                )
            rect.move_to(pos + np.array([size / 2, size / 2, 0]) if i == 0 else pos)
            rectangles.add(rect)

            # Draw rectangle
            self.play(Create(rect), run_time=0.5)

            # Add and draw quarter circle arc immediately after rectangle
            if i < len(sizes) - 1:
                arc = Arc(
                    radius=size,
                    start_angle=i * PI / 2,
                    angle=PI / 2,
                    color=YELLOW,
                    stroke_width=3,
                )
                arc.shift(pos)
                arcs.add(arc)
                self.play(Create(arc), run_time=0.5)

        self.wait(2)

        self.play(FadeOut(rectangles), FadeOut(arcs), FadeOut(spiral_title))

        # Continued fraction
        cf_title = Text("Continued Fraction:", font_size=26, color=YELLOW)
        cf_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(cf_title))

        continued_fraction = MathTex(
            r"\phi = 1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1 + \cdots}}}",
            font_size=28,
        )
        continued_fraction.next_to(cf_title, DOWN, buff=0.5)

        self.play(Write(continued_fraction))
        self.wait(2)

        # Approximations
        approximations = VGroup(
            MathTex(r"1 = 1", font_size=22),
            MathTex(r"1 + \frac{1}{1} = 2", font_size=22),
            MathTex(r"1 + \frac{1}{1 + \frac{1}{1}} = \frac{3}{2} = 1.5", font_size=22),
            MathTex(
                r"1 + \frac{1}{1 + \frac{1}{1 + \frac{1}{1}}} = \frac{5}{3} \approx 1.667",
                font_size=22,
            ),
            MathTex(r"\vdots", font_size=22),
            MathTex(r"\phi \approx 1.6180339887...", font_size=24, color=GREEN),
        ).arrange(DOWN, buff=0.3)
        approximations.next_to(continued_fraction, DOWN, buff=0.5)

        self.play(*[Write(a) for a in approximations])
        self.wait(2)

        self.play(
            FadeOut(continued_fraction), FadeOut(approximations), FadeOut(cf_title)
        )

        # Connection to Fibonacci
        fib_title = Text("Connection to Fibonacci:", font_size=26, color=GREEN)
        fib_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(fib_title))

        fib_connection = MathTex(
            r"\phi = \lim_{n \to \infty} \frac{F_{n+1}}{F_n}", font_size=32
        )
        fib_connection.next_to(fib_title, DOWN, buff=0.5)

        self.play(Write(fib_connection))

        # Show ratios
        ratios = VGroup(
            MathTex(r"\frac{1}{1} = 1", font_size=22),
            MathTex(r"\frac{2}{1} = 2", font_size=22),
            MathTex(r"\frac{3}{2} = 1.5", font_size=22),
            MathTex(r"\frac{5}{3} \approx 1.667", font_size=22),
            MathTex(r"\frac{8}{5} = 1.6", font_size=22),
            MathTex(r"\frac{13}{8} = 1.625", font_size=22),
            MathTex(r"\vdots", font_size=22),
            MathTex(r"\to \phi", font_size=26, color=YELLOW),
        ).arrange(DOWN, buff=0.25)
        ratios.next_to(fib_connection, DOWN, buff=0.5)
        ratios.to_edge(RIGHT, buff=1)

        self.play(*[Write(r) for r in ratios])
        self.wait(3)

        self.play(FadeOut(fib_connection), FadeOut(ratios), FadeOut(fib_title))

        # Summary
        summary = VGroup(
            Text("The Golden Ratio", font_size=36, color=BLUE),
            MathTex(r"\phi = \frac{1 + \sqrt{5}}{2} \approx 1.618", font_size=28),
            Text("Appears in art, architecture, and nature", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
