from manim import *


class GroupsScene(Scene):
    """
    Visual explanation of Group Theory.

    Shows the four group axioms using the example of symmetries of an equilateral triangle (D3).
    """

    def construct(self):
        # Title
        title = Text("Groups", font_size=48, color=BLUE)
        subtitle = Text("The Algebra of Symmetry", font_size=28, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Definition of a Group
        def_text = Text(
            "A group is a set with an operation satisfying 4 axioms:", font_size=24
        )
        def_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_text))
        self.wait(1)

        # Show the four axioms
        axioms = VGroup(
            Text("1. Closure", font_size=22, color=GREEN),
            Text("2. Associativity", font_size=22, color=GREEN),
            Text("3. Identity", font_size=22, color=GREEN),
            Text("4. Inverses", font_size=22, color=GREEN),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        axioms.next_to(def_text, DOWN, buff=0.3)
        axioms.to_edge(LEFT, buff=1)

        self.play(*[Write(axiom) for axiom in axioms], run_time=2)
        self.wait(2)

        # Fade axioms to side
        self.play(FadeOut(def_text), axioms.animate.scale(0.8).to_edge(LEFT, buff=0.5))

        # Example: Symmetries of an Equilateral Triangle (D3)
        example_title = Text(
            "Example: D₃ (Symmetries of Triangle)", font_size=28, color=YELLOW
        )
        example_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(example_title))

        # Create triangle
        triangle = Polygon(
            UP * 1.5,
            DOWN * 1.5 + LEFT * 1.3,
            DOWN * 1.5 + RIGHT * 1.3,
            color=BLUE,
            fill_opacity=0.3,
            stroke_width=3,
        )
        triangle.shift(RIGHT * 2.5)

        # Label vertices
        labels = VGroup(
            MathTex("A", font_size=24).move_to(triangle.get_vertices()[0] + UP * 0.3),
            MathTex("B", font_size=24).move_to(
                triangle.get_vertices()[1] + DOWN * 0.3 + LEFT * 0.3
            ),
            MathTex("C", font_size=24).move_to(
                triangle.get_vertices()[2] + DOWN * 0.3 + RIGHT * 0.3
            ),
        )

        self.play(Create(triangle), Write(labels))

        # Show rotations
        rotation_text = Text("Rotations:", font_size=20, color=BLUE)
        rotation_text.next_to(example_title, DOWN, buff=0.5)
        rotation_text.to_edge(LEFT, buff=1)

        rotations = VGroup(
            MathTex(r"r_0 = \text{identity}", font_size=20),
            MathTex(r"r_1 = 120° \text{ clockwise}", font_size=20),
            MathTex(r"r_2 = 240° \text{ clockwise}", font_size=20),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.2)
        rotations.next_to(rotation_text, DOWN, buff=0.2)
        rotations.to_edge(LEFT, buff=1.5)

        self.play(Write(rotation_text))
        self.play(*[Write(r) for r in rotations])

        # Animate 120° rotation
        self.play(
            Rotate(triangle, angle=-2 * PI / 3, about_point=triangle.get_center()),
            run_time=2,
        )
        self.wait(0.5)
        self.play(
            Rotate(triangle, angle=-2 * PI / 3, about_point=triangle.get_center()),
            run_time=2,
        )
        self.wait(0.5)
        self.play(
            Rotate(triangle, angle=-2 * PI / 3, about_point=triangle.get_center()),
            run_time=2,
        )
        self.wait(1)

        # Show reflections
        reflection_text = Text("Reflections:", font_size=20, color=PURPLE)
        reflection_text.next_to(rotations, DOWN, buff=0.4)
        reflection_text.to_edge(LEFT, buff=1)

        reflections = VGroup(
            MathTex(r"s_1 = \text{reflect across } A", font_size=20),
            MathTex(r"s_2 = \text{reflect across } B", font_size=20),
            MathTex(r"s_3 = \text{reflect across } C", font_size=20),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.2)
        reflections.next_to(reflection_text, DOWN, buff=0.2)
        reflections.to_edge(LEFT, buff=1.5)

        self.play(Write(reflection_text))
        self.play(*[Write(r) for r in reflections])
        self.wait(1)

        # Demonstrate composition (Closure)
        self.play(
            FadeOut(rotation_text),
            FadeOut(rotations),
            FadeOut(reflection_text),
            FadeOut(reflections),
        )

        closure_text = Text(
            "Closure: composing symmetries gives a symmetry", font_size=20, color=GREEN
        )
        closure_text.next_to(example_title, DOWN, buff=0.5)
        closure_text.to_edge(LEFT, buff=1)
        self.play(Write(closure_text))

        # Show r1 then r1 = r2
        compose_text = MathTex(r"r_1 \circ r_1 = r_2", font_size=28, color=YELLOW)
        compose_text.next_to(closure_text, DOWN, buff=0.3)
        compose_text.to_edge(LEFT, buff=2)
        self.play(Write(compose_text))

        # Animate composition
        self.play(
            Rotate(
                triangle,
                angle=-2 * PI / 3,
                about_point=triangle.get_center(),
                run_time=1.5,
            )
        )
        self.play(
            Rotate(
                triangle,
                angle=-2 * PI / 3,
                about_point=triangle.get_center(),
                run_time=1.5,
            )
        )
        self.wait(1)

        # Reset and show identity
        self.play(FadeOut(closure_text), FadeOut(compose_text))

        identity_text = Text("Identity: doing nothing (r₀)", font_size=20, color=GREEN)
        identity_text.next_to(example_title, DOWN, buff=0.5)
        identity_text.to_edge(LEFT, buff=1)
        self.play(Write(identity_text))

        identity_eq = MathTex(
            r"r_0 \circ g = g \circ r_0 = g", font_size=24, color=YELLOW
        )
        identity_eq.next_to(identity_text, DOWN, buff=0.3)
        identity_eq.to_edge(LEFT, buff=2)
        self.play(Write(identity_eq))
        self.wait(2)

        # Show inverses
        self.play(FadeOut(identity_text), FadeOut(identity_eq))

        inverse_text = Text(
            "Inverses: every symmetry can be undone", font_size=20, color=GREEN
        )
        inverse_text.next_to(example_title, DOWN, buff=0.5)
        inverse_text.to_edge(LEFT, buff=1)
        self.play(Write(inverse_text))

        inverse_eq = MathTex(r"r_1 \circ r_2 = r_0", font_size=24, color=YELLOW)
        inverse_eq.next_to(inverse_text, DOWN, buff=0.3)
        inverse_eq.to_edge(LEFT, buff=2)
        self.play(Write(inverse_eq))

        # Animate: rotate 120°, then 240° = back to start
        self.play(
            Rotate(
                triangle,
                angle=-2 * PI / 3,
                about_point=triangle.get_center(),
                run_time=1.5,
            )
        )
        self.play(
            Rotate(
                triangle,
                angle=-4 * PI / 3,
                about_point=triangle.get_center(),
                run_time=1.5,
            )
        )
        self.wait(2)

        # Summary
        self.play(
            FadeOut(inverse_text),
            FadeOut(inverse_eq),
            FadeOut(triangle),
            FadeOut(labels),
        )
        self.play(FadeOut(example_title), FadeOut(axioms))

        # Final summary
        summary = VGroup(
            Text("Groups capture symmetry", font_size=36, color=BLUE),
            Text("D₃ has 6 elements", font_size=28),
            Text("3 rotations + 3 reflections", font_size=24),
            Text("Every symmetry forms a group!", font_size=28, color=YELLOW),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
