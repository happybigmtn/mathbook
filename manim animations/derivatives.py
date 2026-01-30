from manim import *
import numpy as np


class DerivativesScene(Scene):
    """
    Derivatives - Feynman Style Visualization

    Shows the concept of instantaneous rate of change through
    a falling ball example, building intuition visually.
    """

    def construct(self):
        # Start with a concrete problem: a falling ball
        title = Text("How Fast is the Ball Falling?", font_size=36, color=BLUE)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.scale(0.6).to_edge(UP))

        # Create a vertical scene
        ground = Line(LEFT * 4, RIGHT * 4, color=GREEN, stroke_width=4)
        ground.to_edge(DOWN, buff=1)

        building = Rectangle(width=1, height=5, color=GRAY, fill_opacity=0.3)
        building.to_edge(DOWN, buff=1)
        building.shift(LEFT * 3)

        self.play(Create(ground), Create(building))

        # Ball at the top
        ball = Dot(building.get_top(), color=RED, radius=0.15)
        ball_label = Text("Ball", font_size=20, color=RED).next_to(ball, UP, buff=0.2)

        self.play(Create(ball), Write(ball_label))
        self.wait(0.5)

        # Drop the ball with trail
        trail = TracedPath(ball.get_center, stroke_color=YELLOW, stroke_width=2)
        self.add(trail)

        # Animate falling with acceleration
        def falling_path(t):
            # h(t) = h0 - 0.5 * g * t^2
            start_y = building.get_top()[1]
            ground_y = ground.get_center()[1]
            height = start_y - ground_y
            progress = t**2  # accelerating fall
            return building.get_top() + DOWN * height * progress

        self.play(
            MoveAlongPath(ball, ParametricFunction(falling_path, t_range=(0, 1))),
            run_time=2,
            rate_func=rate_functions.ease_in_quad,
        )

        self.wait(0.5)

        # The question
        question = Text(
            "What was its speed at THIS moment?", font_size=28, color=YELLOW
        )
        question.to_edge(DOWN, buff=2.5)

        # Show a specific point during the fall
        ball.move_to(falling_path(0.5))  # Middle of fall
        speed_point = Dot(ball.get_center(), color=YELLOW, radius=0.12)

        self.play(Create(speed_point))
        self.play(Write(question))
        self.wait(2)

        # Clear for the method
        self.play(
            FadeOut(ground),
            FadeOut(building),
            FadeOut(ball),
            FadeOut(ball_label),
            FadeOut(trail),
            FadeOut(speed_point),
            FadeOut(question),
            FadeOut(title),
        )

        # Show the method: average speed over smaller and smaller intervals
        method_title = Text("The Method: Zoom In", font_size=32, color=GREEN)
        self.play(Write(method_title))
        self.wait(1)
        self.play(method_title.animate.scale(0.7).to_edge(UP))

        # Create position-time graph
        axes = Axes(
            x_range=[0, 3, 0.5],
            y_range=[0, 5, 1],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=5,
        )
        axes.next_to(method_title, DOWN, buff=0.5)

        # Position vs time for falling object: y = 5 - 0.5*t^2 (inverted parabola)
        position_graph = axes.plot(
            lambda t: 5 - 0.5 * t**2, x_range=[0, 3], color=BLUE, stroke_width=3
        )

        # Labels
        time_label = Text("Time (s)", font_size=20).next_to(axes.x_axis, DOWN)
        pos_label = Text("Height (m)", font_size=20).next_to(axes.y_axis, LEFT)

        self.play(Create(axes), Create(time_label), Create(pos_label))
        self.play(Create(position_graph))
        self.wait(1)

        # Pick a point and show secant lines getting steeper
        t0 = 1.5
        y0 = 5 - 0.5 * t0**2

        point = Dot(axes.c2p(t0, y0), color=YELLOW, radius=0.1)
        point_label = MathTex(r"t=1.5s", font_size=20, color=YELLOW).next_to(
            point, UP, buff=0.1
        )

        self.play(Create(point), Write(point_label))

        # Show secant lines with decreasing delta_t
        delta_ts = [1.0, 0.5, 0.2, 0.05]
        prev_secant = None
        prev_slope_text = None
        prev_dt_text = None

        for i, dt in enumerate(delta_ts):
            t1 = t0 + dt
            y1 = 5 - 0.5 * t1**2

            # Secant line
            secant = Line(
                axes.c2p(t0, y0),
                axes.c2p(t1, y1),
                color=GREEN,
                stroke_width=2,
            )

            # Calculate slope
            slope = (y1 - y0) / (t1 - t0)
            slope_text = MathTex(
                f"\\text{{Average speed}} = {slope:.2f} m/s", font_size=20
            )
            slope_text.next_to(axes, RIGHT).shift(UP * 1.5)

            # Delta t indicator
            dt_text = MathTex(f"\\Delta t = {dt}", font_size=18, color=RED)
            dt_text.next_to(axes.c2p(t0 + dt / 2, y0), DOWN, buff=0.3)

            if (
                prev_secant is not None
                and prev_slope_text is not None
                and prev_dt_text is not None
            ):
                self.play(
                    Transform(prev_secant, secant),
                    FadeOut(prev_slope_text),
                    FadeOut(prev_dt_text),
                    Write(slope_text),
                    Write(dt_text),
                )
            else:
                self.play(
                    Create(secant),
                    Write(slope_text),
                    Write(dt_text),
                )

            prev_secant = secant
            prev_slope_text = slope_text
            prev_dt_text = dt_text

            self.wait(0.8)

        # Now show the tangent line (the limit)
        tangent = axes.plot(
            lambda t: y0 + (-t0) * (t - t0),  # Derivative of -0.5*t^2 is -t
            x_range=[t0 - 1, t0 + 1],
            color=RED,
            stroke_width=4,
        )

        tangent_text = Text("Instantaneous speed = -1.5 m/s", font_size=22, color=RED)
        tangent_text.next_to(axes, RIGHT).shift(UP * 1.5)

        # Only fade out if they exist
        if (
            prev_secant is not None
            and prev_slope_text is not None
            and prev_dt_text is not None
        ):
            self.play(
                FadeOut(prev_secant),
                FadeOut(prev_slope_text),
                FadeOut(prev_dt_text),
                Create(tangent),
                Write(tangent_text),
            )
        else:
            self.play(
                Create(tangent),
                Write(tangent_text),
            )
        self.wait(2)

        # Clear for summary
        self.play(
            FadeOut(axes),
            FadeOut(time_label),
            FadeOut(pos_label),
            FadeOut(position_graph),
            FadeOut(point),
            FadeOut(point_label),
            FadeOut(tangent),
            FadeOut(tangent_text),
            FadeOut(method_title),
        )

        # The key insight
        insight_title = Text("The Key Insight", font_size=32, color=GREEN)
        self.play(Write(insight_title))
        self.wait(0.5)
        self.play(insight_title.animate.scale(0.8).to_edge(UP))

        insights = VGroup(
            Text("• Speed at an instant = slope of position curve", font_size=24),
            Text("• Find it by zooming in until curve looks straight", font_size=24),
            Text("• The slope of that line is the derivative", font_size=24),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.5)
        insights.to_edge(LEFT, buff=1)
        insights.shift(DOWN * 0.5)

        for insight in insights:
            self.play(Write(insight))
            self.wait(0.5)

        self.wait(2)

        # Final summary
        self.play(
            FadeOut(insights),
            FadeOut(insight_title),
        )

        final = VGroup(
            Text("Derivative = Instantaneous Rate of Change", font_size=32, color=BLUE),
            Text(
                "Found by zooming in until the curve is flat",
                font_size=24,
                color=YELLOW,
            ),
        ).arrange(DOWN, buff=0.5)

        self.play(Write(final))
        self.wait(3)

        self.play(FadeOut(final), FadeOut(title))
