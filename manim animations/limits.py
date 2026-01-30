from manim import *
import numpy as np


class LimitsScene(Scene):
    """
    Limits - Feynman Style Visualization

    Shows what "approaching" means through the classic example
    of walking toward a wall, but never quite reaching it.
    """

    def construct(self):
        # Start with Zeno's paradox - walking to a wall
        title = Text("The Infinite Walk", font_size=36, color=BLUE)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.scale(0.6).to_edge(UP))

        # Create a scene: person and wall
        ground = Line(LEFT * 5, RIGHT * 5, color=GREEN, stroke_width=3)
        ground.to_edge(DOWN, buff=2)

        wall = Rectangle(width=0.5, height=3, color=GRAY, fill_opacity=0.8)
        wall.next_to(ground, RIGHT, buff=-0.5)
        wall.shift(UP * 1.5)

        person = Text("🏃", font_size=50)
        person.move_to(ground.get_left() + UP * 0.5)

        wall_label = Text("Wall", font_size=24).next_to(wall, UP)

        self.play(Create(ground), Create(wall), Write(wall_label))
        self.play(Create(person))
        self.wait(1)

        # The rule: walk half the remaining distance each step
        rule = Text(
            "Rule: Each step covers half the remaining distance",
            font_size=24,
            color=YELLOW,
        )
        rule.to_edge(DOWN, buff=1)
        self.play(Write(rule))
        self.wait(2)

        # Animate the steps
        steps = []
        current_pos = person.get_center()
        wall_pos = wall.get_left()

        for i in range(5):
            # Calculate half the remaining distance
            remaining = wall_pos[0] - current_pos[0]
            step_distance = remaining / 2

            # Create step marker
            step_num = MathTex(f"\\text{{Step {i + 1}}}", font_size=20)
            step_num.next_to(person, UP, buff=0.5)

            # Distance text
            dist_text = MathTex(
                f"\\frac{{{remaining:.1f}}}{{2}} = {step_distance:.2f}", font_size=18
            )
            dist_text.next_to(person, DOWN, buff=0.3)

            # Move person
            new_pos = current_pos + RIGHT * step_distance
            self.play(
                person.animate.move_to(new_pos),
                Write(step_num),
                Write(dist_text),
                run_time=1,
            )

            steps.extend([step_num, dist_text])
            current_pos = new_pos

            self.wait(0.5)

        # The paradox
        paradox = Text("Will you ever reach the wall?", font_size=28, color=RED)
        paradox.to_edge(DOWN, buff=0.5)

        self.play(Write(paradox))
        self.wait(2)

        # Clear for the resolution
        self.play(
            *[
                FadeOut(obj)
                for obj in [ground, wall, wall_label, person, rule, paradox] + steps
            ]
        )

        # Resolution: limits
        resolution_title = Text("The Resolution: Limits", font_size=32, color=GREEN)
        self.play(Write(resolution_title))
        self.wait(1)
        self.play(resolution_title.animate.scale(0.7).to_edge(UP))

        # Show the distance approaching zero
        axes = Axes(
            x_range=[0, 6, 1],
            y_range=[0, 10, 2],
            axis_config={"color": WHITE},
            x_length=9,
            y_length=5,
        )
        axes.next_to(resolution_title, DOWN, buff=0.5)

        # Distance after n steps: 10 / 2^n (starting from 10 units away)
        distance_graph = axes.plot(
            lambda n: 10 / (2**n),
            x_range=[0, 5.5],
            color=BLUE,
            stroke_width=3,
        )

        x_label = Text("Step number", font_size=20).next_to(axes.x_axis, DOWN)
        y_label = Text("Distance to wall", font_size=20).next_to(axes.y_axis, LEFT)

        self.play(Create(axes), Create(x_label), Create(y_label))
        self.play(Create(distance_graph))

        # Show the steps as points
        points = VGroup()
        for n in range(6):
            x = n
            y = 10 / (2**n)
            point = Dot(axes.c2p(x, y), color=YELLOW, radius=0.08)
            points.add(point)

        self.play(*[Create(point) for point in points])
        self.wait(1)

        # Show the limit
        limit_line = DashedLine(
            axes.c2p(0, 0),
            axes.c2p(6, 0),
            color=RED,
            stroke_width=2,
        )

        limit_text = MathTex(
            r"\\lim_{n \\to \\infty} \\frac{10}{2^n} = 0", font_size=28, color=RED
        )
        limit_text.next_to(axes, RIGHT).shift(UP * 2)

        self.play(Create(limit_line))
        self.play(Write(limit_text))
        self.wait(2)

        # Key insight
        insight = Text(
            "The limit is where you're headed, not where you are",
            font_size=24,
            color=YELLOW,
        )
        insight.to_edge(DOWN, buff=0.8)

        self.play(Write(insight))
        self.wait(3)

        self.play(
            FadeOut(axes),
            FadeOut(x_label),
            FadeOut(y_label),
            FadeOut(distance_graph),
            FadeOut(points),
            FadeOut(limit_line),
            FadeOut(limit_text),
            FadeOut(insight),
            FadeOut(resolution_title),
            FadeOut(title),
        )
