from manim import *
import numpy as np


class ThreeGeometriesScene(ThreeDScene):
    """
    Three Geometries visualization.

    Compares Euclidean, Hyperbolic, and Elliptic geometries
    through the parallel postulate and triangle angle sums.
    """

    def construct(self):
        # Title
        title = Text("The Three Geometries", font_size=44, color=BLUE)
        subtitle = Text("Euclidean, Hyperbolic, and Elliptic", font_size=26, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Parallel Postulate
        parallel_title = Text("The Parallel Postulate:", font_size=26, color=YELLOW)
        parallel_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(parallel_title))

        postulate = Text(
            "Given a line and a point not on it,\n"
            "how many parallel lines pass through the point?",
            font_size=22,
            line_spacing=1.5,
        )
        postulate.next_to(parallel_title, DOWN, buff=0.3)

        self.play(Write(postulate))
        self.wait(2)

        self.play(FadeOut(postulate), FadeOut(parallel_title))

        # Euclidean Geometry
        euclid_title = Text("Euclidean Geometry", font_size=28, color=GREEN)
        euclid_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(euclid_title))

        # Draw line and point
        line = Line(LEFT * 3, RIGHT * 3, color=WHITE, stroke_width=3)
        line.shift(DOWN * 1)

        point = Dot(UP * 1, color=YELLOW, radius=0.1)
        point_label = MathTex(r"P", font_size=24).next_to(point, UP, buff=0.1)

        parallel_line = Line(LEFT * 3, RIGHT * 3, color=BLUE, stroke_width=2)
        parallel_line.shift(UP * 1)

        self.play(Create(line), Create(point), Write(point_label))
        self.play(Create(parallel_line))

        # Exactly one parallel
        euclid_answer = MathTex(r"\text{Exactly one}", font_size=26, color=GREEN)
        euclid_answer.next_to(euclid_title, DOWN, buff=2)
        self.play(Write(euclid_answer))

        # Triangle angle sum
        triangle = Polygon(
            np.array([-1, -1, 0]),
            np.array([1, -1, 0]),
            np.array([0, 0.7, 0]),
            color=WHITE,
            stroke_width=2,
        )
        triangle.shift(RIGHT * 3 + DOWN * 0.5)

        angle_sum = MathTex(r"180°", font_size=24, color=YELLOW)
        angle_sum.next_to(triangle, DOWN)

        self.play(Create(triangle), Write(angle_sum))
        self.wait(2)

        self.play(
            FadeOut(line),
            FadeOut(point),
            FadeOut(point_label),
            FadeOut(parallel_line),
            FadeOut(euclid_answer),
            FadeOut(triangle),
            FadeOut(angle_sum),
            FadeOut(euclid_title),
        )

        # Hyperbolic Geometry
        hyper_title = Text("Hyperbolic Geometry", font_size=28, color=RED)
        hyper_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(hyper_title))

        # Poincaré disk model
        disk = Circle(radius=2.5, color=WHITE, stroke_width=2)
        disk.shift(LEFT * 1)

        self.play(Create(disk))

        # Hyperbolic line (circular arc)
        arc = Arc(
            radius=3, start_angle=PI / 6, angle=2 * PI / 3, color=BLUE, stroke_width=2
        )
        arc.shift(LEFT * 1 + DOWN * 0.5)

        hyper_point = Dot(LEFT * 1 + UP * 0.8, color=YELLOW, radius=0.1)

        self.play(Create(arc), Create(hyper_point))

        # Multiple parallels in hyperbolic geometry
        parallels = VGroup()
        for i in range(3):
            offset = (i - 1) * 0.4
            hyp_line = Arc(
                radius=2.5 + offset,
                start_angle=PI / 4,
                angle=PI / 2,
                color=GREEN,
                stroke_width=2,
            )
            hyp_line.shift(LEFT * 1 + DOWN * 0.3)
            parallels.add(hyp_line)

        self.play(*[Create(p) for p in parallels])

        hyper_answer = MathTex(r"\text{Infinitely many}", font_size=26, color=RED)
        hyper_answer.next_to(hyper_title, DOWN, buff=2.5)
        self.play(Write(hyper_answer))

        # Triangle with angle sum < 180
        hyper_triangle = Polygon(
            np.array([2, -0.5, 0]),
            np.array([3.5, -0.5, 0]),
            np.array([2.8, 0.5, 0]),
            color=WHITE,
            stroke_width=2,
        )

        hyper_angle = MathTex(r"\text{Sum} < 180°", font_size=22, color=YELLOW)
        hyper_angle.next_to(hyper_triangle, DOWN)

        self.play(Create(hyper_triangle), Write(hyper_angle))
        self.wait(2)

        self.play(
            FadeOut(disk),
            FadeOut(arc),
            FadeOut(hyper_point),
            FadeOut(parallels),
            FadeOut(hyper_answer),
            FadeOut(hyper_triangle),
            FadeOut(hyper_angle),
            FadeOut(hyper_title),
        )

        # Elliptic Geometry
        ellipse_title = Text("Elliptic Geometry", font_size=28, color=PURPLE)
        ellipse_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(ellipse_title))

        # Sphere model
        sphere = Sphere(radius=1.5, resolution=(20, 20))
        sphere.set_color(BLUE)
        sphere.set_opacity(0.6)
        sphere.shift(LEFT * 1)

        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        self.play(Create(sphere))

        # Great circles (lines in elliptic geometry)
        great_circle1 = Circle(radius=1.5, color=YELLOW, stroke_width=2)
        great_circle1.rotate(PI / 2, axis=RIGHT)
        great_circle1.shift(LEFT * 1)

        great_circle2 = Circle(radius=1.5, color=GREEN, stroke_width=2)
        great_circle2.rotate(PI / 4, axis=UP)
        great_circle2.shift(LEFT * 1)

        self.play(Create(great_circle1), Create(great_circle2))

        # No parallels in elliptic geometry
        ellipse_answer = MathTex(
            r"\text{Zero (all lines intersect)}", font_size=24, color=PURPLE
        )
        ellipse_answer.next_to(ellipse_title, DOWN, buff=2)
        self.play(Write(ellipse_answer))

        # Triangle with angle sum > 180
        ellipse_triangle = Polygon(
            np.array([2.5, -0.5, 0]),
            np.array([4, -0.5, 0]),
            np.array([3.25, 0.8, 0]),
            color=WHITE,
            stroke_width=2,
        )

        ellipse_angle = MathTex(r"\text{Sum} > 180°", font_size=22, color=YELLOW)
        ellipse_angle.next_to(ellipse_triangle, DOWN)

        self.play(Create(ellipse_triangle), Write(ellipse_angle))
        self.wait(2)

        self.set_camera_orientation(phi=0, theta=0)

        self.play(
            FadeOut(sphere),
            FadeOut(great_circle1),
            FadeOut(great_circle2),
            FadeOut(ellipse_answer),
            FadeOut(ellipse_triangle),
            FadeOut(ellipse_angle),
            FadeOut(ellipse_title),
        )

        # Summary
        summary = VGroup(
            Text("Three Geometries:", font_size=32, color=BLUE),
            MathTex(
                r"\text{Euclidean: } 1 \text{ parallel}, \quad \text{Sum} = 180°",
                font_size=24,
                color=GREEN,
            ),
            MathTex(
                r"\text{Hyperbolic: } \infty \text{ parallels}, \quad \text{Sum} < 180°",
                font_size=24,
                color=RED,
            ),
            MathTex(
                r"\text{Elliptic: } 0 \text{ parallels}, \quad \text{Sum} > 180°",
                font_size=24,
                color=PURPLE,
            ),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
