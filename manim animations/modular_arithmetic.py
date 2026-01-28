from manim import *
import numpy as np


class ModularArithmeticScene(Scene):
    """
    Modular Arithmetic visualization.

    Shows clock arithmetic, congruence classes, and modular operations
    with visual representation on a circle.
    """

    def construct(self):
        # Title
        title = Text("Modular Arithmetic", font_size=44, color=BLUE)
        subtitle = MathTex(r"a \equiv b \pmod{m}", font_size=32, color=YELLOW)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(Write(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Clock analogy
        clock_title = Text("Clock Arithmetic (mod 12):", font_size=26, color=GREEN)
        clock_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(clock_title))

        # Draw clock
        clock = Circle(radius=2, color=WHITE, stroke_width=3)
        clock.shift(LEFT * 2.5)

        self.play(Create(clock))

        # Add numbers
        clock_numbers = VGroup()
        for i in range(12):
            angle = i * PI / 6 - PI / 2
            num = MathTex(str(i if i != 0 else 12), font_size=20)
            num.move_to(
                clock.get_center() + 1.6 * np.array([np.cos(angle), np.sin(angle), 0])
            )
            clock_numbers.add(num)

        self.play(*[Write(n) for n in clock_numbers])

        # Show 3 + 10 = 1 (mod 12)
        example = MathTex(r"3 + 10 = 13 \equiv 1 \pmod{12}", font_size=28, color=YELLOW)
        example.next_to(clock_title, DOWN, buff=0.5)
        example.to_edge(RIGHT, buff=1)

        self.play(Write(example))

        # Animate the addition on clock
        start_angle = 3 * PI / 6 - PI / 2
        arrow = Arrow(
            clock.get_center(),
            clock.get_center()
            + 1.3 * np.array([np.cos(start_angle), np.sin(start_angle), 0]),
            color=RED,
            buff=0,
        )

        self.play(Create(arrow))

        # Move 10 hours forward
        self.play(
            Rotate(arrow, angle=-10 * PI / 6, about_point=clock.get_center()),
            run_time=3,
        )

        end_text = Text("Lands on 1!", font_size=22, color=GREEN)
        end_text.next_to(example, DOWN, buff=0.5)
        self.play(Write(end_text))
        self.wait(1)

        self.play(
            FadeOut(clock),
            FadeOut(clock_numbers),
            FadeOut(arrow),
            FadeOut(clock_title),
            FadeOut(example),
            FadeOut(end_text),
        )

        # Formal definition
        def_title = Text("Formal Definition:", font_size=26, color=YELLOW)
        def_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_title))

        definition = VGroup(
            MathTex(r"a \equiv b \pmod{m} \text{ means } m \mid (a - b)", font_size=28),
            Text("or equivalently:", font_size=22),
            MathTex(r"a = b + km \text{ for some integer } k", font_size=26),
        ).arrange(DOWN, buff=0.4)
        definition.next_to(def_title, DOWN, buff=0.5)

        self.play(*[Write(d) for d in definition])
        self.wait(2)

        self.play(FadeOut(definition), FadeOut(def_title))

        # Residue classes
        residue_title = Text("Residue Classes (mod 5):", font_size=26, color=GREEN)
        residue_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(residue_title))

        classes = VGroup()
        for i in range(5):
            class_group = VGroup()
            # Representative
            rep = MathTex(f"[{i}]", font_size=24, color=BLUE)

            # Some elements
            elements = MathTex(
                f"= \\{{..., {i - 5}, {i}, {i + 5}, {i + 10}, ...\\}}", font_size=20
            )

            class_group.add(rep, elements)
            class_group.arrange(RIGHT, buff=0.2)
            classes.add(class_group)

        classes.arrange(DOWN, buff=0.4)
        classes.next_to(residue_title, DOWN, buff=0.5)

        self.play(*[Write(c) for c in classes])
        self.wait(2)

        self.play(FadeOut(classes), FadeOut(residue_title))

        # Operations
        ops_title = Text("Modular Operations:", font_size=26, color=YELLOW)
        ops_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(ops_title))

        operations = VGroup(
            MathTex(
                r"(a + b) \bmod m = ((a \bmod m) + (b \bmod m)) \bmod m", font_size=22
            ),
            MathTex(
                r"(a \cdot b) \bmod m = ((a \bmod m) \cdot (b \bmod m)) \bmod m",
                font_size=22,
            ),
        ).arrange(DOWN, buff=0.5)
        operations.next_to(ops_title, DOWN, buff=0.5)

        self.play(*[Write(op) for op in operations])
        self.wait(2)

        # Example
        example2 = MathTex(
            r"7 \times 8 \equiv 2 \times 3 \equiv 6 \equiv 1 \pmod{5}",
            font_size=26,
            color=GREEN,
        )
        example2.next_to(operations, DOWN, buff=0.5)
        self.play(Write(example2))
        self.wait(2)

        self.play(FadeOut(operations), FadeOut(example2), FadeOut(ops_title))

        # Applications
        apps_title = Text("Applications:", font_size=26, color=GREEN)
        apps_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(apps_title))

        applications = VGroup(
            Text("• Cryptography (RSA)", font_size=22),
            Text("• Checksums", font_size=22),
            Text("• Hash functions", font_size=22),
            Text("• Calendar calculations", font_size=22),
            Text("• Computer science", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        applications.next_to(apps_title, DOWN, buff=0.5)
        applications.to_edge(LEFT, buff=1)

        self.play(*[Write(app) for app in applications])
        self.wait(3)

        self.play(FadeOut(applications), FadeOut(apps_title))

        # Summary
        summary = VGroup(
            Text("Modular Arithmetic", font_size=36, color=BLUE),
            MathTex(r"\mathbb{Z}_m = \\0, 1, 2, ..., m-1\\", font_size=28),
            Text("Clock arithmetic for mathematicians", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
