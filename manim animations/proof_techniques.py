from manim import *
import numpy as np


class ProofTechniquesScene(Scene):
    """
    Proof Techniques visualization.

    Shows direct proof, proof by contradiction, and mathematical induction
    with concrete examples for each technique.
    """

    def construct(self):
        # Title
        title = Text("Proof Techniques", font_size=44, color=BLUE)
        subtitle = Text("How Mathematicians Prove Theorems", font_size=24, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Direct Proof
        direct_title = Text("1. Direct Proof", font_size=28, color=GREEN)
        direct_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(direct_title))

        direct_desc = Text(
            "Start with assumptions, apply logical steps, reach conclusion",
            font_size=20,
            line_spacing=1.5,
        )
        direct_desc.next_to(direct_title, DOWN, buff=0.3)

        self.play(Write(direct_desc))

        # Example: Sum of two even numbers is even
        example_title = Text(
            "Example: If n and m are even, then n+m is even", font_size=22, color=YELLOW
        )
        example_title.next_to(direct_desc, DOWN, buff=0.5)

        proof_steps = VGroup(
            MathTex(
                r"\text{Let } n = 2k, m = 2j \text{ for integers } k, j", font_size=20
            ),
            MathTex(r"n + m = 2k + 2j = 2(k + j)", font_size=20),
            MathTex(r"\therefore n + m \text{ is even}", font_size=20, color=GREEN),
        ).arrange(DOWN, buff=0.3)
        proof_steps.next_to(example_title, DOWN, buff=0.3)

        self.play(Write(example_title))
        self.play(*[Write(step) for step in proof_steps])
        self.wait(2)

        self.play(
            FadeOut(direct_title),
            FadeOut(direct_desc),
            FadeOut(example_title),
            FadeOut(proof_steps),
        )

        # Proof by Contradiction
        contra_title = Text("2. Proof by Contradiction", font_size=28, color=RED)
        contra_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(contra_title))

        contra_desc = Text(
            "Assume the opposite, derive contradiction, conclude original",
            font_size=20,
            line_spacing=1.5,
        )
        contra_desc.next_to(contra_title, DOWN, buff=0.3)

        self.play(Write(contra_desc))

        # Example: sqrt(2) is irrational
        example2_title = Text(
            "Example: \\sqrt{2} is irrational", font_size=22, color=YELLOW
        )
        example2_title.next_to(contra_desc, DOWN, buff=0.5)

        contra_steps = VGroup(
            MathTex(
                r"\text{Assume } \sqrt{2} = \frac{p}{q} \text{ (reduced)}", font_size=18
            ),
            MathTex(r"2 = \frac{p^2}{q^2} \\Rightarrow 2q^2 = p^2", font_size=18),
            MathTex(
                r"\therefore p^2 \text{ even} \\Rightarrow p \text{ even}", font_size=18
            ),
            MathTex(
                r"p = 2k \\Rightarrow 2q^2 = 4k^2 \\Rightarrow q^2 = 2k^2", font_size=18
            ),
            MathTex(
                r"\therefore q \text{ also even! Contradiction!}",
                font_size=18,
                color=RED,
            ),
        ).arrange(DOWN, buff=0.2)
        contra_steps.next_to(example2_title, DOWN, buff=0.3)

        self.play(Write(example2_title))
        self.play(*[Write(step) for step in contra_steps])
        self.wait(2)

        self.play(
            FadeOut(contra_title),
            FadeOut(contra_desc),
            FadeOut(example2_title),
            FadeOut(contra_steps),
        )

        # Mathematical Induction
        induct_title = Text("3. Mathematical Induction", font_size=28, color=BLUE)
        induct_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(induct_title))

        induct_desc = Text(
            "Prove base case, assume for n, prove for n+1",
            font_size=20,
            line_spacing=1.5,
        )
        induct_desc.next_to(induct_title, DOWN, buff=0.3)

        self.play(Write(induct_desc))

        # Example: Sum of first n natural numbers
        example3_title = Text(
            "Example: 1 + 2 + ... + n = n(n+1)/2", font_size=22, color=YELLOW
        )
        example3_title.next_to(induct_desc, DOWN, buff=0.5)

        induct_steps = VGroup(
            MathTex(r"\text{Base: } 1 = \frac{1(2)}{2} = 1 \\checkmark", font_size=18),
            MathTex(r"\text{Assume: } 1 + ... + n = \frac{n(n+1)}{2}", font_size=18),
            MathTex(
                r"\text{Prove for } n+1: 1 + ... + n + (n+1) = \frac{(n+1)(n+2)}{2}",
                font_size=18,
            ),
            MathTex(
                r"\text{LHS} = \frac{n(n+1)}{2} + (n+1) = \frac{n(n+1) + 2(n+1)}{2}",
                font_size=16,
            ),
            MathTex(
                r"= \frac{(n+1)(n+2)}{2} = \text{RHS} \\checkmark",
                font_size=18,
                color=GREEN,
            ),
        ).arrange(DOWN, buff=0.2)
        induct_steps.next_to(example3_title, DOWN, buff=0.3)

        self.play(Write(example3_title))
        self.play(*[Write(step) for step in induct_steps])
        self.wait(2)

        # Visual domino analogy
        domino_title = Text("Domino Analogy:", font_size=24, color=YELLOW)
        domino_title.next_to(induct_steps, DOWN, buff=0.5)

        dominoes = VGroup()
        for i in range(6):
            domino = Rectangle(height=0.8, width=0.3, color=WHITE, stroke_width=2)
            domino.move_to(np.array([i * 0.5 - 1.5, -0.5, 0]))
            dominoes.add(domino)

        self.play(Write(domino_title))
        self.play(*[Create(d) for d in dominoes])

        # Knock over dominoes
        for i in range(len(dominoes)):
            self.play(
                Rotate(
                    dominoes[i],
                    angle=-PI / 2 + 0.1,
                    about_point=dominoes[i].get_bottom(),
                ),
                run_time=0.3,
            )

        self.wait(2)

        self.play(
            FadeOut(induct_title),
            FadeOut(induct_desc),
            FadeOut(example3_title),
            FadeOut(induct_steps),
            FadeOut(domino_title),
            FadeOut(dominoes),
        )

        # Summary
        summary = VGroup(
            Text("Proof Techniques", font_size=36, color=BLUE),
            Text("Direct: Forward reasoning", font_size=24, color=GREEN),
            Text("Contradiction: Assume opposite", font_size=24, color=RED),
            Text("Induction: Domino effect", font_size=24, color=BLUE),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
