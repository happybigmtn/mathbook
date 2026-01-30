from manim import *
import numpy as np


class ComplexNumbersScene(Scene):
    """
    Complex Numbers - Feynman Style Visualization

    Shows WHY we need complex numbers through a concrete problem,
    then builds the intuition visually without overwhelming formulas.
    """

    def construct(self):
        # Start with a concrete problem: x^2 + 1 = 0
        title = Text("The Problem That Broke Mathematics", font_size=36, color=BLUE)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.scale(0.6).to_edge(UP))

        # Create axes for the parabola
        axes = Axes(
            x_range=[-3, 3, 1],
            y_range=[-2, 5, 1],
            axis_config={"color": WHITE},
            x_length=6,
            y_length=4,
        )
        axes.shift(DOWN * 0.5)

        # Draw x^2 + 1
        parabola = axes.plot(
            lambda x: x**2 + 1, x_range=[-2.2, 2.2], color=BLUE, stroke_width=3
        )

        # Draw x-axis
        x_axis_line = axes.plot(
            lambda x: 0, x_range=[-3, 3], color=GRAY, stroke_width=1, stroke_opacity=0.5
        )

        # Label the problem
        problem = MathTex(r"x^2 + 1 = 0", font_size=32, color=YELLOW)
        problem.to_edge(DOWN, buff=1)

        self.play(Create(axes))
        self.play(Create(x_axis_line))
        self.play(Create(parabola))
        self.play(Write(problem))
        self.wait(2)

        # Show that it never crosses zero
        zero_point = Dot(axes.c2p(0, 0), color=RED, radius=0.1)
        cross_marker = Cross(zero_point, scale_factor=2, color=RED, stroke_width=4)

        self.play(Create(zero_point))
        self.play(Create(cross_marker))

        # The question appears
        question = Text("Where does it cross?", font_size=28, color=RED)
        question.next_to(problem, UP, buff=0.5)
        self.play(Write(question))
        self.wait(2)

        # Clear EVERYTHING before next scene
        self.play(
            FadeOut(axes),
            FadeOut(parabola),
            FadeOut(x_axis_line),
            FadeOut(zero_point),
            FadeOut(cross_marker),
            FadeOut(problem),
            FadeOut(question),
            FadeOut(title),
        )
        self.wait(0.5)

        # New scene: The breakthrough
        breakthrough = Text(
            "The Breakthrough: Add a New Dimension", font_size=32, color=GREEN
        )
        self.play(Write(breakthrough))
        self.wait(1)
        self.play(FadeOut(breakthrough))

        # Show the complex plane being born
        # Start with just the real line
        real_line = NumberLine(
            x_range=[-3, 3, 1],
            length=6,
            color=BLUE,
            include_numbers=True,
        )

        explanation1 = Text("We start with the real number line...", font_size=24)
        explanation1.to_edge(UP)

        self.play(Create(real_line))
        self.play(Write(explanation1))
        self.wait(1)

        # Now add the vertical axis - FADE OUT old text first
        explanation2 = Text(
            "...and add a vertical axis for 'imaginary' numbers", font_size=24
        )
        explanation2.to_edge(UP)

        self.play(FadeOut(explanation1))
        self.play(Write(explanation2))

        # Create the full complex plane
        plane = ComplexPlane(
            x_range=[-3, 3, 1],
            y_range=[-3, 3, 1],
            background_line_style={"stroke_opacity": 0.3},
        )
        plane.scale(1.2)

        real_label = Text("Real", font_size=18, color=BLUE).next_to(plane.x_axis, DOWN)
        imag_label = Text("Imaginary", font_size=18, color=GREEN).next_to(
            plane.y_axis, LEFT
        )

        self.play(
            Transform(real_line, plane),
            Create(real_label),
            Create(imag_label),
        )
        self.wait(2)

        # Show the solution visually
        i_point = Dot(plane.c2p(0, 1), color=YELLOW, radius=0.12)
        i_label = MathTex(r"i", font_size=28, color=YELLOW).next_to(
            i_point, UR, buff=0.1
        )

        neg_i_point = Dot(plane.c2p(0, -1), color=YELLOW, radius=0.12)
        neg_i_label = MathTex(r"-i", font_size=28, color=YELLOW).next_to(
            neg_i_point, DR, buff=0.1
        )

        solution_text = Text("The solutions live here!", font_size=26, color=GREEN)
        solution_text.to_edge(DOWN, buff=1)

        self.play(Create(i_point), Write(i_label))
        self.play(Create(neg_i_point), Write(neg_i_label))
        self.play(Write(solution_text))
        self.wait(2)

        # Show i^2 = -1 visually using rotation
        explanation3 = Text("Watch what happens when we multiply by i...", font_size=24)
        explanation3.to_edge(UP)

        self.play(FadeOut(explanation2))
        self.play(Write(explanation3))

        # Start with 1 on the real axis
        one_point = Dot(plane.c2p(1, 0), color=RED, radius=0.1)
        one_label = MathTex(r"1", font_size=24, color=RED).next_to(
            one_point, DOWN, buff=0.1
        )

        self.play(Create(one_point), Write(one_label))

        # Multiply by i: rotate 90 degrees counterclockwise
        # FIX: Convert to list for proper rotation center
        center = plane.c2p(0, 0).tolist()

        arc1 = Arc(
            radius=plane.c2p(1, 0)[0] - plane.c2p(0, 0)[0],
            start_angle=0,
            angle=PI / 2,
            color=YELLOW,
            stroke_width=3,
        )
        arc1.move_to(plane.c2p(0, 0))

        self.play(
            Rotate(one_point, angle=PI / 2, about_point=center),
            Rotate(one_label, angle=PI / 2, about_point=center),
            Create(arc1),
            run_time=2,
        )

        # Now it's at i
        result1 = MathTex(r"1 \\times i = i", font_size=22, color=YELLOW)
        result1.next_to(one_point, RIGHT, buff=0.2)
        self.play(Write(result1))
        self.wait(1)

        # Multiply by i again
        arc2 = Arc(
            radius=plane.c2p(1, 0)[0] - plane.c2p(0, 0)[0],
            start_angle=PI / 2,
            angle=PI / 2,
            color=ORANGE,
            stroke_width=3,
        )
        arc2.move_to(plane.c2p(0, 0))

        self.play(
            Rotate(one_point, angle=PI / 2, about_point=center),
            Rotate(one_label, angle=PI / 2, about_point=center),
            FadeOut(result1),
            Create(arc2),
            run_time=2,
        )

        # Now it's at -1
        result2 = MathTex(r"i \\times i = -1", font_size=22, color=ORANGE)
        result2.next_to(one_point, DOWN, buff=0.2)
        self.play(Write(result2))
        self.wait(2)

        # Clear for the summary
        self.play(
            FadeOut(plane),
            FadeOut(real_label),
            FadeOut(imag_label),
            FadeOut(i_point),
            FadeOut(i_label),
            FadeOut(neg_i_point),
            FadeOut(neg_i_label),
            FadeOut(one_point),
            FadeOut(one_label),
            FadeOut(arc1),
            FadeOut(arc2),
            FadeOut(result2),
            FadeOut(solution_text),
            FadeOut(explanation3),
        )

        # Summary
        summary_title = Text("What We Learned", font_size=32, color=BLUE)
        self.play(Write(summary_title))
        self.wait(0.5)
        self.play(summary_title.animate.scale(0.8).to_edge(UP))

        # Key insights with more spacing
        insights = VGroup(
            Text("• Some equations have no solutions on the real line", font_size=22),
            Text("• Adding a vertical axis creates new numbers", font_size=22),
            Text("• Multiplying by i = rotating 90°", font_size=22),
            Text("• i² = -1 (two rotations = flip)", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.5)
        insights.to_edge(LEFT, buff=1)
        insights.shift(DOWN * 0.3)

        for insight in insights:
            self.play(Write(insight))
            self.wait(0.5)

        self.wait(2)

        # Final thought
        final = Text(
            "Complex numbers aren't imaginary—they're geometric!",
            font_size=26,
            color=GREEN,
        )
        final.to_edge(DOWN, buff=1)

        self.play(Write(final))
        self.wait(3)

        self.play(
            FadeOut(insights),
            FadeOut(final),
            FadeOut(summary_title),
        )
