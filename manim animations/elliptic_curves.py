from manim import *
import numpy as np


class EllipticCurvesScene(Scene):
    """
    Elliptic Curves visualization.

    Shows the curve y² = x³ + ax + b and the geometric group law
    for adding points on the curve.
    """

    def construct(self):
        # Title
        title = Text("Elliptic Curves", font_size=44, color=BLUE)
        subtitle = MathTex(r"y^2 = x^3 + ax + b", font_size=32, color=YELLOW)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(Write(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Setup coordinate system
        axes = Axes(
            x_range=[-4, 4, 1],
            y_range=[-4, 4, 1],
            axis_config={"color": WHITE},
            x_length=7,
            y_length=6,
        )
        axes.shift(DOWN * 0.5)

        axes_label = Text("The Curve", font_size=24)
        axes_label.next_to(axes, LEFT)
        axes_label.shift(UP * 3)

        self.play(Write(axes_label))
        self.play(Create(axes), run_time=2)

        # Plot elliptic curve: y² = x³ - x + 1
        def elliptic_curve(x):
            y_squared = x**3 - x + 1
            if y_squared >= 0:
                return np.sqrt(y_squared)
            return None

        def elliptic_curve_neg(x):
            y_squared = x**3 - x + 1
            if y_squared >= 0:
                return -np.sqrt(y_squared)
            return None

        # Plot both branches
        curve_pos = axes.plot(
            lambda x: elliptic_curve(x) if elliptic_curve(x) is not None else 0,
            x_range=[-1.5, 2.5],
            color=BLUE,
            stroke_width=3,
        )

        curve_neg = axes.plot(
            lambda x: elliptic_curve_neg(x) if elliptic_curve_neg(x) is not None else 0,
            x_range=[-1.5, 2.5],
            color=BLUE,
            stroke_width=3,
        )

        curve_label = MathTex(r"y^2 = x^3 - x + 1", font_size=22, color=BLUE)
        curve_label.next_to(axes, RIGHT)
        curve_label.shift(UP * 2)

        self.play(Create(curve_pos), Create(curve_neg), Write(curve_label))
        self.wait(1)

        # Point at infinity
        self.play(FadeOut(curve_pos), FadeOut(curve_neg), FadeOut(curve_label))

        infinity_text = Text("Point at Infinity (Identity)", font_size=26, color=GREEN)
        infinity_text.next_to(axes, RIGHT)
        infinity_text.shift(UP * 2)

        self.play(Write(infinity_text))

        # Show identity symbol
        infinity_symbol = MathTex(r"\mathcal{O}", font_size=40, color=YELLOW)
        infinity_symbol.move_to(axes.c2p(0, 0))

        self.play(Write(infinity_symbol))
        self.wait(1)

        # Point addition
        self.play(FadeOut(infinity_text), FadeOut(infinity_symbol))
        self.play(Create(curve_pos), Create(curve_neg))

        # Select two points
        p_x, p_y = -1, np.sqrt((-1) ** 3 - (-1) + 1)
        q_x, q_y = 0.5, np.sqrt(0.5**3 - 0.5 + 1)

        point_p = Dot(axes.c2p(p_x, p_y), color=RED, radius=0.1)
        point_q = Dot(axes.c2p(q_x, q_y), color=GREEN, radius=0.1)

        label_p = MathTex(r"P", font_size=24, color=RED).next_to(point_p, UR, buff=0.1)
        label_q = MathTex(r"Q", font_size=24, color=GREEN).next_to(
            point_q, UR, buff=0.1
        )

        addition_text = Text("Point Addition:", font_size=24, color=YELLOW)
        addition_text.next_to(axes, RIGHT)
        addition_text.shift(UP * 2)

        self.play(Write(addition_text))
        self.play(Create(point_p), Create(point_q), Write(label_p), Write(label_q))

        # Step 1: Draw line through P and Q
        line_pq = Line(
            axes.c2p(p_x, p_y), axes.c2p(q_x, q_y), color=YELLOW, stroke_width=2
        )

        line_eq = MathTex(r"\text{Line through } P \text{ and } Q", font_size=20)
        line_eq.next_to(addition_text, DOWN)

        self.play(Create(line_pq), Write(line_eq))
        self.wait(1)

        # Step 2: Find third intersection point
        # For demonstration, mark a point
        r_x = 1.5
        r_y = np.sqrt(r_x**3 - r_x + 1)
        point_r = Dot(axes.c2p(r_x, r_y), color=YELLOW, radius=0.1)
        label_r = MathTex(r"R", font_size=24, color=YELLOW).next_to(
            point_r, RIGHT, buff=0.1
        )

        intersect_text = MathTex(r"\text{Find third point } R", font_size=20)
        intersect_text.next_to(line_eq, DOWN)

        self.play(Create(point_r), Write(label_r), Write(intersect_text))
        self.wait(1)

        # Step 3: Reflect across x-axis to get P+Q
        point_sum = Dot(axes.c2p(r_x, -r_y), color=PURPLE, radius=0.1)
        label_sum = MathTex(r"P + Q", font_size=24, color=PURPLE).next_to(
            point_sum, RIGHT, buff=0.1
        )

        # Reflection line
        reflection_line = DashedLine(
            axes.c2p(r_x, r_y), axes.c2p(r_x, -r_y), color=GRAY, dash_length=0.1
        )

        sum_text = MathTex(
            r"\text{Reflect } R \text{ across } x\text{-axis}", font_size=20
        )
        sum_text.next_to(intersect_text, DOWN)

        self.play(Create(reflection_line))
        self.play(Create(point_sum), Write(label_sum), Write(sum_text))
        self.wait(2)

        # Show group properties
        self.play(
            FadeOut(line_pq),
            FadeOut(point_r),
            FadeOut(label_r),
            FadeOut(point_p),
            FadeOut(point_q),
            FadeOut(label_p),
            FadeOut(label_q),
            FadeOut(reflection_line),
            FadeOut(point_sum),
            FadeOut(label_sum),
            FadeOut(addition_text),
            FadeOut(line_eq),
            FadeOut(intersect_text),
            FadeOut(sum_text),
        )

        # Group law
        group_text = Text("Group Properties:", font_size=26, color=GREEN)
        group_text.next_to(axes, RIGHT)
        group_text.shift(UP * 2)

        properties = VGroup(
            MathTex(
                r"\bullet \text{ Closure: } P + Q \text{ is on curve}", font_size=20
            ),
            MathTex(r"\bullet \text{ Identity: } P + \mathcal{O} = P", font_size=20),
            MathTex(r"\bullet \text{ Inverses: } P + (-P) = \mathcal{O}", font_size=20),
            MathTex(
                r"\bullet \text{ Associative: } (P + Q) + R = P + (Q + R)", font_size=20
            ),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        properties.next_to(group_text, DOWN, buff=0.3)

        self.play(Write(group_text))
        self.play(*[Write(p) for p in properties])
        self.wait(2)

        # Applications
        self.play(
            FadeOut(group_text),
            FadeOut(properties),
            FadeOut(axes),
            FadeOut(curve_pos),
            FadeOut(curve_neg),
            FadeOut(axes_label),
        )

        apps_title = Text("Applications:", font_size=30, color=YELLOW)
        apps_title.next_to(title, DOWN, buff=0.5)

        applications = VGroup(
            Text("• Cryptography (ECC)", font_size=24),
            Text("• Fermat's Last Theorem", font_size=24),
            Text("• Number Theory", font_size=24),
            Text("• String Theory", font_size=24),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.4)
        applications.next_to(apps_title, DOWN, buff=0.5)

        self.play(Write(apps_title))
        self.play(*[Write(app) for app in applications])
        self.wait(3)

        self.play(FadeOut(applications), FadeOut(apps_title), FadeOut(title))
