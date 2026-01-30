from manim import *
import numpy as np


class ContinuityScene(Scene):
    """
    Continuity - Feynman Style Visualization

    Shows what it means for a function to be continuous
    through the "pencil test" and concrete examples.
    """

    def construct(self):
        # Start with the pencil test
        title = Text(
            "Can You Draw It Without Lifting Your Pencil?", font_size=32, color=BLUE
        )
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.scale(0.7).to_edge(UP))

        # Show a continuous function being drawn
        axes = Axes(
            x_range=[-2, 4, 1],
            y_range=[-1, 4, 1],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=5,
        )
        axes.next_to(title, DOWN, buff=0.5)

        # Continuous parabola
        parabola = axes.plot(
            lambda x: 0.5 * x**2, x_range=[-1.5, 2.5], color=GREEN, stroke_width=4
        )

        # Animate drawing with a pencil
        pencil = Text("✏️", font_size=30)

        self.play(Create(axes))

        # Move pencil along the curve
        self.add(pencil)
        pencil.move_to(axes.c2p(-1.5, 0.5 * (-1.5) ** 2) + UP * 0.3)

        self.play(
            MoveAlongPath(pencil, parabola),
            Create(parabola),
            run_time=3,
        )

        continuous_text = Text("Continuous!", font_size=28, color=GREEN)
        continuous_text.next_to(axes, RIGHT).shift(UP)

        self.play(Write(continuous_text))
        self.wait(2)

        self.play(FadeOut(parabola), FadeOut(continuous_text), FadeOut(pencil))

        # Show a discontinuous function
        # Piecewise with a jump
        line1 = axes.plot(lambda x: x, x_range=[-1.5, 0.9], color=RED, stroke_width=4)
        line2 = axes.plot(
            lambda x: x + 2, x_range=[1.1, 2.5], color=RED, stroke_width=4
        )

        # Gap markers
        gap_start = Dot(axes.c2p(1, 1), color=RED, radius=0.08)
        gap_end = Dot(axes.c2p(1, 3), color=RED, radius=0.08)
        open_circle = Circle(radius=0.1, color=RED, fill_opacity=0).move_to(
            axes.c2p(1, 1)
        )

        jump_text = Text("Jump discontinuity", font_size=24, color=RED)
        jump_text.next_to(axes, RIGHT)

        self.play(Create(line1))

        # Try to continue with pencil
        pencil.move_to(axes.c2p(0.9, 0.9) + UP * 0.3)
        self.play(pencil.animate.move_to(axes.c2p(1, 1) + UP * 0.3))

        # Show the gap
        self.play(Create(open_circle), Create(gap_end))

        # Jump the pencil
        self.play(pencil.animate.move_to(axes.c2p(1.1, 3.1) + UP * 0.3))
        self.play(Create(line2))

        # Move pencil along second part
        self.play(
            MoveAlongPath(pencil, line2),
            run_time=1.5,
        )

        self.play(Write(jump_text))
        self.wait(2)

        self.play(
            FadeOut(line1),
            FadeOut(line2),
            FadeOut(gap_start),
            FadeOut(gap_end),
            FadeOut(open_circle),
            FadeOut(jump_text),
            FadeOut(pencil),
            FadeOut(axes),
        )

        # Types of discontinuities
        types_title = Text("Types of Discontinuities", font_size=30, color=GREEN)
        self.play(Write(types_title))
        self.wait(0.5)
        self.play(types_title.animate.scale(0.7).to_edge(UP))

        # Show each type with simple drawing
        types = VGroup(
            VGroup(
                Text("1. Removable (hole)", font_size=24, color=BLUE),
                Text("One point missing", font_size=18, color=GRAY),
            ).arrange(DOWN, buff=0.1),
            VGroup(
                Text("2. Jump (step)", font_size=24, color=RED),
                Text("Function jumps to new value", font_size=18, color=GRAY),
            ).arrange(DOWN, buff=0.1),
            VGroup(
                Text("3. Infinite (asymptote)", font_size=24, color=ORANGE),
                Text("Goes to infinity", font_size=18, color=GRAY),
            ).arrange(DOWN, buff=0.1),
        ).arrange(DOWN, buff=0.5, aligned_edge=LEFT)
        types.to_edge(LEFT, buff=1)
        types.shift(DOWN * 0.5)

        for type_group in types:
            self.play(Write(type_group))
            self.wait(0.5)

        self.wait(2)

        self.play(FadeOut(types), FadeOut(types_title))

        # Why continuity matters
        why_title = Text("Why Does Continuity Matter?", font_size=28, color=GREEN)
        self.play(Write(why_title))
        self.wait(0.5)
        self.play(why_title.animate.scale(0.7).to_edge(UP))

        reasons = VGroup(
            Text("• Intermediate Value Theorem:", font_size=22),
            Text(
                "  If you go from 2 to 5, you hit every number in between",
                font_size=20,
                color=YELLOW,
            ),
            Text("• Extreme Value Theorem:", font_size=22),
            Text(
                "  Continuous functions on closed intervals have max/mins",
                font_size=20,
                color=YELLOW,
            ),
            Text("• Integration:", font_size=22),
            Text(
                "  You can only integrate continuous functions",
                font_size=20,
                color=YELLOW,
            ),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        reasons.to_edge(LEFT, buff=1)
        reasons.shift(DOWN * 0.5)

        for reason in reasons:
            self.play(Write(reason))
            self.wait(0.5)

        self.wait(2)

        self.play(
            FadeOut(reasons),
            FadeOut(why_title),
            FadeOut(title),
        )
