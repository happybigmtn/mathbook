from manim import *
import numpy as np


class NumberSystemsScene(Scene):
    """
    Number Systems - Feynman Style Visualization

    Shows WHY we needed to expand from natural numbers to complex numbers
    through concrete problems that couldn't be solved.
    """

    def construct(self):
        # Start with counting apples
        title = Text("Why Do We Need More Numbers?", font_size=36, color=BLUE)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.scale(0.6).to_edge(UP))

        # Show natural numbers with apples
        apples = VGroup(
            *[Circle(radius=0.2, color=RED, fill_opacity=0.8) for _ in range(5)]
        )
        apples.arrange(RIGHT, buff=0.3)
        apples.shift(UP * 2)

        count_text = Text("Counting apples: 1, 2, 3, 4, 5...", font_size=24)
        count_text.next_to(apples, DOWN, buff=0.5)

        self.play(*[Create(apple) for apple in apples])
        self.play(Write(count_text))
        self.wait(2)

        # The first problem: subtraction
        self.play(FadeOut(apples), FadeOut(count_text))

        problem1 = Text(
            "Problem: I have 3 apples, you take 5.", font_size=28, color=RED
        )
        problem1.shift(UP * 1)

        visual1 = VGroup(
            Text("🍎 🍎 🍎", font_size=40),
            Text("- 5", font_size=40, color=RED),
            Text("= ???", font_size=40, color=YELLOW),
        ).arrange(RIGHT, buff=0.5)
        visual1.shift(DOWN * 0.5)

        self.play(Write(problem1))
        self.play(Write(visual1))
        self.wait(2)

        # Solution: negative numbers
        solution1 = Text("Solution: Negative Numbers!", font_size=26, color=GREEN)
        solution1.to_edge(DOWN, buff=1)

        result1 = MathTex(r"3 - 5 = -2", font_size=32, color=GREEN)
        result1.next_to(visual1, DOWN, buff=0.5)

        self.play(Write(solution1))
        self.play(FadeOut(visual1[2]))
        self.play(Write(result1))
        self.wait(2)

        self.play(
            FadeOut(problem1), FadeOut(visual1), FadeOut(solution1), FadeOut(result1)
        )

        # Second problem: sharing
        problem2 = Text(
            "Problem: Share 3 apples among 2 people", font_size=28, color=RED
        )
        problem2.shift(UP * 1)

        apples2 = VGroup(
            *[Circle(radius=0.2, color=RED, fill_opacity=0.8) for _ in range(3)]
        )
        apples2.arrange(RIGHT, buff=0.3)
        apples2.shift(UP * 0.5)

        people = VGroup(
            Text("👤", font_size=50),
            Text("👤", font_size=50),
        ).arrange(RIGHT, buff=2)
        people.shift(DOWN * 0.5)

        self.play(Write(problem2))
        self.play(*[Create(apple) for apple in apples2])
        self.play(Write(people))
        self.wait(2)

        # Show the split
        arrow1 = Arrow(apples2[0].get_bottom(), people[0].get_top(), color=YELLOW)
        arrow2 = Arrow(apples2[1].get_bottom(), people[1].get_top(), color=YELLOW)
        arrow3 = Arrow(
            apples2[2].get_bottom(),
            (people[0].get_top() + people[1].get_top()) / 2,
            color=YELLOW,
        )

        self.play(Create(arrow1), Create(arrow2), Create(arrow3))

        solution2 = Text("Solution: Fractions!", font_size=26, color=GREEN)
        solution2.to_edge(DOWN, buff=1)

        result2 = MathTex(r"3 \\div 2 = 1.5 = \\frac{3}{2}", font_size=32, color=GREEN)
        result2.next_to(people, DOWN, buff=0.5)

        self.play(Write(solution2))
        self.play(Write(result2))
        self.wait(2)

        self.play(
            FadeOut(problem2),
            FadeOut(apples2),
            FadeOut(people),
            FadeOut(arrow1),
            FadeOut(arrow2),
            FadeOut(arrow3),
            FadeOut(solution2),
            FadeOut(result2),
        )

        # Third problem: diagonal of square
        problem3 = Text("Problem: Diagonal of a 1×1 square", font_size=28, color=RED)
        problem3.shift(UP * 1.5)

        # Draw square
        square = Square(side_length=2, color=BLUE)
        square.shift(DOWN * 0.5)

        # Diagonal
        diagonal = Line(
            square.get_corner(UL), square.get_corner(DR), color=YELLOW, stroke_width=3
        )

        # Labels
        label1 = MathTex(r"1", font_size=24).next_to(square, LEFT)
        label2 = MathTex(r"1", font_size=24).next_to(square, DOWN)
        question = MathTex(r"?", font_size=28, color=YELLOW).next_to(
            diagonal, UR, buff=0.2
        )

        self.play(Write(problem3))
        self.play(Create(square))
        self.play(Create(diagonal), Write(label1), Write(label2), Write(question))
        self.wait(2)

        # Show Pythagorean theorem
        theorem = MathTex(r"1^2 + 1^2 = ?^2", font_size=28)
        theorem.next_to(square, DOWN, buff=0.8)

        result3 = MathTex(r"? = \\sqrt{2} \\approx 1.414...", font_size=28, color=GREEN)
        result3.next_to(theorem, DOWN, buff=0.3)

        solution3 = Text("Solution: Irrational Numbers!", font_size=26, color=GREEN)
        solution3.to_edge(DOWN, buff=0.5)

        self.play(Write(theorem))
        self.play(Write(result3))
        self.play(Write(solution3))
        self.wait(2)

        self.play(
            FadeOut(problem3),
            FadeOut(square),
            FadeOut(diagonal),
            FadeOut(label1),
            FadeOut(label2),
            FadeOut(question),
            FadeOut(theorem),
            FadeOut(result3),
            FadeOut(solution3),
        )

        # Final problem: x² = -1 (already done in complex_numbers, so summarize)
        problem4 = Text("Problem: x² = -1", font_size=32, color=RED)

        visual4 = Text("No solution on the number line...", font_size=24)
        visual4.shift(DOWN * 0.5)

        solution4 = Text("Solution: Add a new dimension!", font_size=26, color=GREEN)
        solution4.shift(DOWN * 1.5)

        self.play(Write(problem4))
        self.play(Write(visual4))
        self.wait(1)
        self.play(Write(solution4))
        self.wait(2)

        # Show the tower
        self.play(FadeOut(problem4), FadeOut(visual4), FadeOut(solution4))

        tower_title = Text("The Tower of Numbers", font_size=32, color=BLUE)
        self.play(Write(tower_title))
        self.wait(0.5)
        self.play(tower_title.animate.scale(0.7).to_edge(UP))

        # Build the tower visually
        tower = VGroup(
            VGroup(
                Text("ℕ", font_size=40, color=GREEN), Text("(counting)", font_size=18)
            ).arrange(DOWN, buff=0.1),
            VGroup(
                Text("ℤ", font_size=40, color=BLUE), Text("(negative)", font_size=18)
            ).arrange(DOWN, buff=0.1),
            VGroup(
                Text("ℚ", font_size=40, color=YELLOW), Text("(fractions)", font_size=18)
            ).arrange(DOWN, buff=0.1),
            VGroup(
                Text("ℝ", font_size=40, color=PURPLE), Text("(complete)", font_size=18)
            ).arrange(DOWN, buff=0.1),
            VGroup(
                Text("ℂ", font_size=40, color=ORANGE), Text("(complex)", font_size=18)
            ).arrange(DOWN, buff=0.1),
        ).arrange(DOWN, buff=0.4)
        tower.shift(DOWN * 0.5)

        for level in tower:
            self.play(Write(level))
            self.wait(0.3)

        # Key insight
        insight = Text(
            "Each new level solves problems the previous couldn't",
            font_size=24,
            color=YELLOW,
        )
        insight.to_edge(DOWN, buff=0.8)

        self.play(Write(insight))
        self.wait(3)

        self.play(
            FadeOut(tower),
            FadeOut(insight),
            FadeOut(tower_title),
            FadeOut(title),
        )
