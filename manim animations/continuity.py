from manim import *
import numpy as np


class ContinuityScene(Scene):
    """
    Continuity visualization.

    Shows continuous vs discontinuous functions,
    types of discontinuities, and the epsilon-delta definition.
    """

    def construct(self):
        # Title
        title = Text("Continuity", font_size=44, color=BLUE)
        subtitle = Text("No Jumps, Breaks, or Holes", font_size=26, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Definition
        def_title = Text("Intuitive Definition:", font_size=26)
        def_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_title))

        definition = Text(
            "A function is continuous if you can draw it\n"
            "without lifting your pencil from the paper",
            font_size=22,
            line_spacing=1.5,
        )
        definition.next_to(def_title, DOWN, buff=0.3)

        self.play(Write(definition))
        self.wait(2)

        self.play(FadeOut(definition), FadeOut(def_title))

        # Setup axes for examples
        axes = Axes(
            x_range=[-2, 4, 1],
            y_range=[-1, 4, 1],
            axis_config={"color": WHITE},
            x_length=8,
            y_length=4,
        )
        axes.next_to(title, DOWN, buff=0.5)

        self.play(Create(axes))

        # Continuous function
        cont_graph = axes.plot(
            lambda x: x**2, x_range=[-1.5, 2], color=GREEN, stroke_width=3
        )
        cont_label = MathTex(
            r"\\text{Continuous: } f(x) = x^2", font_size=20, color=GREEN
        )
        cont_label.next_to(axes, RIGHT).shift(UP * 1.5)

        self.play(Create(cont_graph), Write(cont_label))
        self.wait(1)

        # Discontinuous function - jump
        jump_graph1 = axes.plot(
            lambda x: x, x_range=[-1.5, 1], color=RED, stroke_width=3
        )
        jump_graph2 = axes.plot(
            lambda x: x + 1.5, x_range=[1.001, 2.5], color=RED, stroke_width=3
        )

        # Open and closed circles at discontinuity
        open_circle = Circle(radius=0.08, color=RED, fill_opacity=0).move_to(
            axes.c2p(1, 1)
        )
        closed_circle = Dot(axes.c2p(1, 2.5), color=RED, radius=0.08)

        jump_label = MathTex(r"\\text{Jump discontinuity}", font_size=20, color=RED)
        jump_label.next_to(axes, RIGHT)

        self.play(
            Create(jump_graph1),
            Create(jump_graph2),
            Create(open_circle),
            Create(closed_circle),
            Write(jump_label),
        )
        self.wait(2)

        self.play(
            FadeOut(cont_graph),
            FadeOut(cont_label),
            FadeOut(jump_graph1),
            FadeOut(jump_graph2),
            FadeOut(open_circle),
            FadeOut(closed_circle),
            FadeOut(jump_label),
            FadeOut(axes),
        )

        # Types of discontinuities
        types_title = Text("Types of Discontinuities:", font_size=26, color=YELLOW)
        types_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(types_title))

        types = VGroup(
            Text("1. Removable (hole)", font_size=22, color=BLUE),
            Text("2. Jump (step)", font_size=22, color=RED),
            Text("3. Infinite (vertical asymptote)", font_size=22, color=ORANGE),
            Text("4. Oscillatory", font_size=22, color=PURPLE),
        ).arrange(DOWN, buff=0.3)
        types.next_to(types_title, DOWN, buff=0.5)
        types.to_edge(LEFT, buff=1)

        self.play(*[Write(t) for t in types])
        self.wait(2)

        self.play(FadeOut(types), FadeOut(types_title))

        # Formal definition
        formal_title = Text("Formal Definition:", font_size=26, color=GREEN)
        formal_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(formal_title))

        formal = MathTex(r"\\lim_{x \\to c} f(x) = f(c)", font_size=28)
        formal.next_to(formal_title, DOWN, buff=0.5)

        conditions = VGroup(
            Text("Three conditions:", font_size=20),
            Text("1. f(c) exists", font_size=20),
            Text("2. Limit exists", font_size=20),
            Text("3. They are equal", font_size=20),
        ).arrange(DOWN, buff=0.2)
        conditions.next_to(formal, DOWN, buff=0.5)

        self.play(Write(formal))
        self.play(*[Write(c) for c in conditions])
        self.wait(2)

        self.play(FadeOut(formal), FadeOut(conditions), FadeOut(formal_title))

        # Importance
        importance_title = Text("Why Continuity Matters:", font_size=26, color=YELLOW)
        importance_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(importance_title))

        importance = VGroup(
            Text("• Intermediate Value Theorem", font_size=22),
            Text("• Extreme Value Theorem", font_size=22),
            Text("• Integration requires continuity", font_size=22),
            Text("• Many physical laws assume continuity", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        importance.next_to(importance_title, DOWN, buff=0.5)
        importance.to_edge(LEFT, buff=1)

        self.play(*[Write(i) for i in importance])
        self.wait(3)

        self.play(FadeOut(importance), FadeOut(importance_title))

        # Summary
        summary = VGroup(
            Text("Continuity", font_size=36, color=BLUE),
            MathTex(r"\\lim_{x \\to c} f(x) = f(c)", font_size=28),
            Text("Smooth functions without breaks", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
