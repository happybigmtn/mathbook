from manim import *
import numpy as np


class DifferentialEquationsScene(Scene):
    """
    Differential Equations visualization.

    Shows what differential equations are, examples,
    and solutions to simple ODEs.
    """

    def construct(self):
        # Title
        title = Text("Differential Equations", font_size=44, color=BLUE)
        subtitle = Text("Equations Involving Derivatives", font_size=24, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Definition
        def_title = Text("What are Differential Equations?", font_size=26)
        def_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_title))

        definition = Text(
            "Equations that relate a function to its derivatives", font_size=22
        )
        definition.next_to(def_title, DOWN, buff=0.3)

        self.play(Write(definition))
        self.wait(1)

        # Example
        example = MathTex(r"\\frac{dy}{dx} = y", font_size=28, color=YELLOW)
        example.next_to(definition, DOWN, buff=0.5)

        self.play(Write(example))
        self.wait(2)

        self.play(FadeOut(definition), FadeOut(example), FadeOut(def_title))

        # Order and degree
        order_title = Text("Classification:", font_size=26, color=GREEN)
        order_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(order_title))

        classification = VGroup(
            Text("Order: Highest derivative in the equation", font_size=20),
            MathTex(
                r"\\frac{d^2y}{dx^2} + y = 0 \\quad \\text{(2nd order)}", font_size=22
            ),
            Text("Degree: Power of the highest derivative", font_size=20),
            MathTex(
                r"\\left(\\frac{dy}{dx}\\right)^2 + y = 0 \\quad \\text{(1st degree)}",
                font_size=22,
            ),
        ).arrange(DOWN, buff=0.3)
        classification.next_to(order_title, DOWN, buff=0.5)

        self.play(*[Write(c) for c in classification])
        self.wait(2)

        self.play(FadeOut(classification), FadeOut(order_title))

        # Simple example - exponential growth
        example_title = Text("Example: Exponential Growth", font_size=26, color=YELLOW)
        example_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(example_title))

        ode = MathTex(r"\\frac{dy}{dt} = ky", font_size=28)
        ode.next_to(example_title, DOWN, buff=0.3)

        solution = MathTex(r"y(t) = y_0 e^{kt}", font_size=28, color=GREEN)
        solution.next_to(ode, DOWN, buff=0.5)

        self.play(Write(ode))
        self.play(Write(solution))
        self.wait(2)

        self.play(FadeOut(ode), FadeOut(solution), FadeOut(example_title))

        # Applications
        apps_title = Text("Applications:", font_size=26, color=GREEN)
        apps_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(apps_title))

        applications = VGroup(
            Text("• Physics: motion, circuits, heat flow", font_size=22),
            Text("• Biology: population dynamics", font_size=22),
            Text("• Chemistry: reaction rates", font_size=22),
            Text("• Engineering: control systems", font_size=22),
            Text("• Economics: growth models", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        applications.next_to(apps_title, DOWN, buff=0.5)
        applications.to_edge(LEFT, buff=1)

        self.play(*[Write(app) for app in applications])
        self.wait(3)

        self.play(FadeOut(applications), FadeOut(apps_title))

        # Summary
        summary = VGroup(
            Text("Differential Equations", font_size=36, color=BLUE),
            MathTex(r"\\frac{dy}{dx} = f(x, y)", font_size=28),
            Text("Modeling change in the world around us", font_size=22),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
