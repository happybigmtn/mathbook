from manim import *


class CompactnessScene(Scene):
    """
    Visual explanation of Compactness in topology.

    Shows how a compact set can be covered by finitely many sets
    from any open cover, contrasting [0,1] (compact) with R (not compact).
    """

    def construct(self):
        # Title
        title = Text("Compactness", font_size=48, color=BLUE)
        subtitle = Text("In Topology", font_size=28, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Definition
        def_text = Text(
            "A set is compact if every open cover has a finite subcover",
            font_size=24,
            color=YELLOW,
        )
        def_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_text))
        self.wait(2)
        self.play(FadeOut(def_text))

        # Part 1: Compact example [0,1]
        compact_text = Text("Compact: [0, 1]", font_size=32, color=GREEN)
        compact_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(compact_text))

        # Create number line segment [0,1]
        number_line = NumberLine(
            x_range=[-0.2, 1.2, 0.2],
            length=8,
            include_numbers=True,
            numbers_to_include=[0, 0.5, 1],
        )
        number_line.shift(DOWN * 0.5)

        # Highlight the [0,1] interval
        interval = Line(
            number_line.n2p(0), number_line.n2p(1), stroke_width=8, color=GREEN
        )

        self.play(Create(number_line))
        self.play(Create(interval))
        self.wait(1)

        # Show open cover (intervals covering [0,1])
        cover_title = Text("Open Cover:", font_size=24, color=BLUE)
        cover_title.next_to(number_line, DOWN, buff=0.8)
        self.play(Write(cover_title))

        # Create several open intervals covering [0,1]
        cover_intervals = VGroup()
        colors = [BLUE, PURPLE, PINK, ORANGE]

        # First interval covers start
        i1 = Interval(
            number_line.n2p(-0.1), number_line.n2p(0.4), color=colors[0], stroke_width=4
        )
        cover_intervals.add(i1)

        # Middle intervals
        i2 = Interval(
            number_line.n2p(0.3), number_line.n2p(0.7), color=colors[1], stroke_width=4
        )
        cover_intervals.add(i2)

        i3 = Interval(
            number_line.n2p(0.6), number_line.n2p(1.1), color=colors[2], stroke_width=4
        )
        cover_intervals.add(i3)

        # Overlapping to show cover
        self.play(*[Create(interval) for interval in cover_intervals], run_time=2)
        self.wait(1)

        # Show finite subcover
        subcover_text = Text("Finite Subcover exists!", font_size=24, color=GREEN)
        subcover_text.next_to(cover_title, DOWN)
        self.play(Write(subcover_text))

        # Highlight that these three cover [0,1]
        brackets = VGroup()
        for i, interval in enumerate(cover_intervals):
            brace = Brace(interval, DOWN, color=colors[i])
            brackets.add(brace)

        self.play(*[Create(brace) for brace in brackets])
        self.wait(2)

        self.play(FadeOut(brackets), FadeOut(subcover_text))

        # Part 2: Non-compact example R
        self.play(
            FadeOut(compact_text),
            FadeOut(number_line),
            FadeOut(interval),
            FadeOut(cover_title),
            FadeOut(cover_intervals),
        )

        noncompact_text = Text("Not Compact: ℝ (Real Line)", font_size=32, color=RED)
        noncompact_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(noncompact_text))

        # Create long number line representing R
        real_line = NumberLine(
            x_range=[-5, 5, 1],
            length=10,
            include_numbers=True,
        )
        real_line.shift(DOWN * 0.5)

        # Add infinity indicators
        left_arrow = Arrow(
            real_line.get_left() + LEFT * 0.5, real_line.get_left(), color=GRAY
        )
        right_arrow = Arrow(
            real_line.get_right() + RIGHT * 0.5, real_line.get_right(), color=GRAY
        )

        infinity_label = MathTex(r"-\infty \cdots \infty", font_size=24, color=GRAY)
        infinity_label.next_to(real_line, DOWN, buff=0.3)

        self.play(Create(real_line), Create(left_arrow), Create(right_arrow))
        self.play(Write(infinity_label))
        self.wait(1)

        # Show cover with no finite subcover
        cover_title2 = Text("Cover: {(n, n+2) : n ∈ ℤ}", font_size=24, color=BLUE)
        cover_title2.next_to(real_line, DOWN, buff=0.8)
        self.play(Write(cover_title2))

        # Show some intervals from the cover
        cover_intervals2 = VGroup()
        for n in range(-3, 4):
            interval = Interval(
                real_line.n2p(n),
                real_line.n2p(n + 2),
                color=BLUE,
                stroke_width=3,
                fill_opacity=0.3,
            )
            cover_intervals2.add(interval)

        self.play(*[Create(interval) for interval in cover_intervals2], run_time=2)

        # Show the problem
        problem_text = Text("No finite subcover possible!", font_size=24, color=RED)
        problem_text.next_to(cover_title2, DOWN)
        self.play(Write(problem_text))

        # Show ellipsis indicating infinite continuation
        dots = MathTex(r"\cdots", font_size=36, color=GRAY)
        dots.next_to(cover_intervals2[0], LEFT, buff=0.3)
        dots2 = MathTex(r"\cdots", font_size=36, color=GRAY)
        dots2.next_to(cover_intervals2[-1], RIGHT, buff=0.3)

        self.play(Write(dots), Write(dots2))
        self.wait(2)

        # Fade out
        self.play(
            FadeOut(
                VGroup(
                    noncompact_text,
                    real_line,
                    left_arrow,
                    right_arrow,
                    infinity_label,
                    cover_title2,
                    cover_intervals2,
                    problem_text,
                    dots,
                    dots2,
                )
            )
        )

        # Summary
        summary = VGroup(
            Text("Compact sets are 'finite-like'", font_size=32, color=GREEN),
            Text("[0,1] behaves like a finite set", font_size=24),
            Text("ℝ is 'too big' to be compact", font_size=24, color=RED),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
