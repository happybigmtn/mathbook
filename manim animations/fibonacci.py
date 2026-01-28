from manim import *
import numpy as np


class FibonacciScene(Scene):
    """
    Fibonacci Sequence visualization.

    Shows the sequence, its recursive definition, spiral pattern,
    and appearance in nature (phyllotaxis).
    """

    def construct(self):
        # Title
        title = Text("The Fibonacci Sequence", font_size=44, color=BLUE)
        subtitle = MathTex(r"F_n = F_{n-1} + F_{n-2}", font_size=32, color=YELLOW)
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
            MathTex(r"F_0 = 0", font_size=28),
            MathTex(r"F_1 = 1", font_size=28),
            MathTex(r"F_n = F_{n-1} + F_{n-2} \text{ for } n \geq 2", font_size=28),
        ).arrange(DOWN, buff=0.3)
        definition.next_to(def_title, DOWN, buff=0.3)

        self.play(*[Write(d) for d in definition])
        self.wait(1)

        self.play(FadeOut(definition), FadeOut(def_title))

        # Show the sequence
        sequence_title = Text("The Sequence:", font_size=26, color=GREEN)
        sequence_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(sequence_title))

        fib_numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
        sequence = VGroup()

        for i, num in enumerate(fib_numbers):
            if i == 0:
                mob = MathTex(f"F_{{{i}}} = {num}", font_size=24)
            else:
                mob = MathTex(f"F_{{{i}}} = {num}", font_size=24)

            if i < 6:
                mob.move_to(np.array([i * 2 - 5, 1, 0]))
            else:
                mob.move_to(np.array([(i - 6) * 2 - 5, -0.5, 0]))

            sequence.add(mob)

        self.play(*[Write(s) for s in sequence], run_time=2)
        self.wait(2)

        self.play(FadeOut(sequence), FadeOut(sequence_title))

        # Visual representation with squares
        squares_title = Text("Fibonacci Squares:", font_size=26, color=YELLOW)
        squares_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(squares_title))

        # Draw squares with Fibonacci side lengths
        squares = VGroup()
        arcs = VGroup()

        # Square sizes (scaled down)
        sizes = [0.5, 0.5, 1, 1.5, 2.5, 4, 6.5]
        positions = [
            np.array([0, 0, 0]),
            np.array([0.5, 0, 0]),
            np.array([0.5, 0.5, 0]),
            np.array([-1, 0.5, 0]),
            np.array([-1, -2, 0]),
            np.array([1.5, -2, 0]),
            np.array([1.5, 2, 0]),
        ]

        colors = [BLUE, GREEN, RED, YELLOW, PURPLE, ORANGE, PINK]

        for i, (size, pos, color) in enumerate(zip(sizes, positions, colors)):
            square = Square(side_length=size, color=color, stroke_width=2)
            square.move_to(pos + np.array([size / 2, size / 2, 0]))
            squares.add(square)

            # Add arc
            if i < len(sizes) - 1:
                arc = Arc(
                    radius=size,
                    start_angle=i * PI / 2,
                    angle=PI / 2,
                    color=WHITE,
                    stroke_width=2,
                )
                arc.shift(pos + np.array([size / 2, size / 2, 0]))
                arcs.add(arc)

        # Scale down to fit
        squares_group = VGroup(squares, arcs)
        squares_group.scale(0.4)
        squares_group.next_to(squares_title, DOWN, buff=0.5)

        self.play(*[Create(s) for s in squares], run_time=2)
        self.play(*[Create(a) for a in arcs], run_time=2)
        self.wait(2)

        self.play(FadeOut(squares_group), FadeOut(squares_title))

        # Rabbit problem
        rabbit_title = Text("The Rabbit Problem (1202 CE):", font_size=26, color=GREEN)
        rabbit_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(rabbit_title))

        problem = Text(
            "How many pairs of rabbits will there be after n months\n"
            "if each pair produces a new pair every month starting\n"
            "from the second month?",
            font_size=20,
            line_spacing=1.5,
        )
        problem.next_to(rabbit_title, DOWN, buff=0.5)

        self.play(Write(problem))
        self.wait(2)

        self.play(FadeOut(problem), FadeOut(rabbit_title))

        # Properties
        props_title = Text("Interesting Properties:", font_size=26, color=YELLOW)
        props_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(props_title))

        properties = VGroup(
            MathTex(r"\sum_{i=0}^{n} F_i = F_{n+2} - 1", font_size=26),
            MathTex(r"F_1 + F_3 + F_5 + \cdots + F_{2n-1} = F_{2n}", font_size=24),
            MathTex(r"F_2 + F_4 + F_6 + \cdots + F_{2n} = F_{2n+1} - 1", font_size=24),
            MathTex(r"F_n^2 + F_{n+1}^2 = F_{2n+1}", font_size=26),
        ).arrange(DOWN, buff=0.4)
        properties.next_to(props_title, DOWN, buff=0.5)

        self.play(*[Write(p) for p in properties])
        self.wait(3)

        self.play(FadeOut(properties), FadeOut(props_title))

        # In nature
        nature_title = Text("In Nature:", font_size=26, color=GREEN)
        nature_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(nature_title))

        nature_examples = VGroup(
            Text("• Petal arrangements (3, 5, 8, 13, 21, 34 petals)", font_size=22),
            Text("• Seed spirals in sunflowers", font_size=22),
            Text("• Pinecone scales", font_size=22),
            Text("• Shell spirals", font_size=22),
            Text("• Branching patterns in trees", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        nature_examples.next_to(nature_title, DOWN, buff=0.5)
        nature_examples.to_edge(LEFT, buff=1)

        self.play(*[Write(ex) for ex in nature_examples])
        self.wait(3)

        self.play(FadeOut(nature_examples), FadeOut(nature_title))

        # Summary
        summary = VGroup(
            Text("The Fibonacci Sequence", font_size=36, color=BLUE),
            MathTex(r"0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...", font_size=26),
            Text("A universal pattern in mathematics and nature", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
