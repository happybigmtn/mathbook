"""
Manim animation for Euler's formula
"""

from manim import *
import numpy as np

class EulersFormulaScene(Scene):
    def construct(self):
        # Title
        title = MathTex("e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)")
        title.scale(1.5)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.to_edge(UP))

        # Create complex plane
        plane = ComplexPlane(
            x_range=[-2, 2],
            y_range=[-2, 2],
            background_line_style={
                "stroke_color": BLUE_D,
                "stroke_width": 1,
                "stroke_opacity": 0.5,
            },
        )
        plane.add_coordinates()

        self.play(Create(plane))
        self.wait(0.5)

        # Unit circle
        circle = Circle(radius=1, color=YELLOW)
        self.play(Create(circle))

        # Animate point moving on circle
        dot = Dot(color=RED)
        dot.move_to(plane.c2p(1, 0))

        line = always_redraw(lambda: Line(
            plane.c2p(0, 0),
            dot.get_center(),
            color=GREEN,
        ))

        self.play(Create(line), FadeIn(dot))

        # Angle tracker
        angle = ValueTracker(0)

        def update_dot(mob):
            theta = angle.get_value()
            mob.move_to(plane.c2p(np.cos(theta), np.sin(theta)))

        dot.add_updater(update_dot)

        # Angle arc
        arc = always_redraw(lambda: Arc(
            radius=0.3,
            start_angle=0,
            angle=angle.get_value(),
            color=ORANGE,
        ))

        theta_label = always_redraw(lambda: MathTex("\\theta").next_to(
            arc.point_from_proportion(0.5),
            UR,
            buff=0.1,
        ))

        self.play(Create(arc), Write(theta_label))

        # Animate through different angles
        values = [PI/4, PI/2, PI, 3*PI/2, 2*PI]

        for val in values:
            self.play(angle.animate.set_value(val), run_time=2)

            # Show coordinates
            coord = MathTex(
                f"e^{{i{val:.2f}}} = \\cos({val:.2f}) + i\\sin({val:.2f})",
                f" = {np.cos(val):.2f} + {np.sin(val):.2f}i"
            )
            coord.scale(0.7)
            coord.to_edge(DOWN)

            self.play(Write(coord))
            self.wait(0.5)
            self.play(FadeOut(coord))

        # Euler's identity
        self.play(angle.animate.set_value(PI), run_time=1)

        identity = MathTex("e^{i\\pi} + 1 = 0")
        identity.scale(2)
        identity.move_to(ORIGIN)
        identity.set_background_stroke(width=5)

        self.play(
            FadeOut(plane),
            FadeOut(circle),
            FadeOut(dot),
            FadeOut(line),
            FadeOut(arc),
            FadeOut(theta_label),
            FadeOut(title),
        )

        self.play(Write(identity))
        self.wait(2)
