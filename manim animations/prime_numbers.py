from manim import *


class PrimeNumbersScene(Scene):
    """
    Visual explanation of Prime Numbers.

    Shows what primes are, the Sieve of Eratosthenes, and Euclid's proof
    of infinitely many primes.
    """

    def construct(self):
        # Title
        title = Text("Prime Numbers", font_size=48, color=BLUE)
        subtitle = Text("The Building Blocks of Arithmetic", font_size=28, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Definition
        def_text = Text(
            "A prime number has exactly two divisors: 1 and itself",
            font_size=26,
            color=YELLOW,
        )
        def_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_text))
        self.wait(2)
        self.play(FadeOut(def_text))

        # Show first primes
        primes_text = Text("Prime Numbers:", font_size=28, color=GREEN)
        primes_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(primes_text))

        # Display first several primes
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
        prime_mobs = VGroup(
            *[MathTex(str(p), font_size=32, color=BLUE) for p in primes]
        )
        prime_mobs.arrange(RIGHT, buff=0.5)
        prime_mobs.next_to(primes_text, DOWN, buff=0.5)

        self.play(*[Write(p) for p in prime_mobs], run_time=2)
        self.wait(2)

        # Show composite numbers for contrast
        self.play(FadeOut(primes_text), FadeOut(prime_mobs))

        composite_text = Text("Composite Numbers (not prime):", font_size=28, color=RED)
        composite_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(composite_text))

        composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20]
        composite_mobs = VGroup(
            *[MathTex(str(c), font_size=32, color=RED) for c in composites]
        )
        composite_mobs.arrange(RIGHT, buff=0.5)
        composite_mobs.next_to(composite_text, DOWN, buff=0.5)

        self.play(*[Write(c) for c in composite_mobs], run_time=2)

        # Show factorizations
        factorizations = VGroup(
            MathTex(r"4 = 2 \times 2", font_size=20, color=GRAY),
            MathTex(r"6 = 2 \times 3", font_size=20, color=GRAY),
            MathTex(r"8 = 2 \times 2 \times 2", font_size=20, color=GRAY),
            MathTex(r"9 = 3 \times 3", font_size=20, color=GRAY),
        )
        factorizations.arrange(DOWN, aligned_edge=LEFT, buff=0.2)
        factorizations.to_edge(RIGHT, buff=1)

        self.play(*[Write(f) for f in factorizations], run_time=2)
        self.wait(2)

        self.play(
            FadeOut(composite_text), FadeOut(composite_mobs), FadeOut(factorizations)
        )

        # Sieve of Eratosthenes
        sieve_title = Text("Sieve of Eratosthenes", font_size=30, color=YELLOW)
        sieve_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(sieve_title))

        # Create number grid
        numbers = VGroup()
        for i in range(1, 51):
            num = MathTex(str(i), font_size=20)
            row = (i - 1) // 10
            col = (i - 1) % 10
            num.move_to(np.array([col - 4.5, 2 - row, 0]))
            numbers.add(num)

        self.play(*[Write(n) for n in numbers], run_time=2)

        # Cross out multiples
        sieve_text = Text("Cross out multiples:", font_size=22)
        sieve_text.next_to(sieve_title, DOWN, buff=0.3)
        sieve_text.to_edge(LEFT, buff=1)
        self.play(Write(sieve_text))

        # Cross out multiples of 2
        cross_2 = MathTex(r"\times 2", font_size=18, color=RED)
        cross_2.next_to(sieve_text, DOWN)
        self.play(Write(cross_2))

        for i, num in enumerate(numbers):
            if i + 1 > 2 and (i + 1) % 2 == 0:
                cross = Line(
                    num.get_corner(UL) + np.array([-0.1, 0.1, 0]),
                    num.get_corner(DR) + np.array([0.1, -0.1, 0]),
                    color=RED,
                    stroke_width=2,
                )
                self.play(Create(cross), run_time=0.05)

        self.wait(0.5)

        # Cross out multiples of 3
        cross_3 = MathTex(r"\times 3", font_size=18, color=ORANGE)
        cross_3.next_to(cross_2, DOWN)
        self.play(Write(cross_3))

        for i, num in enumerate(numbers):
            if i + 1 > 3 and (i + 1) % 3 == 0 and (i + 1) % 2 != 0:
                cross = Line(
                    num.get_corner(UL) + np.array([-0.1, 0.1, 0]),
                    num.get_corner(DR) + np.array([0.1, -0.1, 0]),
                    color=ORANGE,
                    stroke_width=2,
                )
                self.play(Create(cross), run_time=0.05)

        self.wait(0.5)

        # Cross out multiples of 5
        cross_5 = MathTex(r"\times 5", font_size=18, color=PURPLE)
        cross_5.next_to(cross_3, DOWN)
        self.play(Write(cross_5))

        for i, num in enumerate(numbers):
            if i + 1 > 5 and (i + 1) % 5 == 0 and (i + 1) % 2 != 0 and (i + 1) % 3 != 0:
                cross = Line(
                    num.get_corner(UL) + np.array([-0.1, 0.1, 0]),
                    num.get_corner(DR) + np.array([0.1, -0.1, 0]),
                    color=PURPLE,
                    stroke_width=2,
                )
                self.play(Create(cross), run_time=0.05)

        self.wait(1)

        # Highlight remaining primes
        remaining = Text("Remaining = Primes!", font_size=22, color=GREEN)
        remaining.next_to(cross_5, DOWN)
        self.play(Write(remaining))

        # Circle the primes
        for i, num in enumerate(numbers):
            n = i + 1
            if n > 1 and all(n % d != 0 for d in range(2, int(n**0.5) + 1)):
                circle = Circle(radius=0.25, color=GREEN, stroke_width=2)
                circle.move_to(num.get_center())
                self.play(Create(circle), run_time=0.05)

        self.wait(2)
        self.play(
            FadeOut(numbers),
            FadeOut(sieve_title),
            FadeOut(sieve_text),
            FadeOut(cross_2),
            FadeOut(cross_3),
            FadeOut(cross_5),
            FadeOut(remaining),
        )

        # Infinitely many primes
        infinite_title = Text("Infinitely Many Primes", font_size=30, color=YELLOW)
        infinite_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(infinite_title))

        euclid_text = Text("Euclid's Proof (300 BCE):", font_size=24)
        euclid_text.next_to(infinite_title, DOWN, buff=0.5)
        self.play(Write(euclid_text))

        # Show the proof steps
        steps = VGroup(
            Text("1. Assume finitely many primes: p₁, p₂, ..., pₙ", font_size=20),
            Text("2. Consider: N = p₁ × p₂ × ... × pₙ + 1", font_size=20),
            Text("3. N is not divisible by any pᵢ (remainder 1)", font_size=20),
            Text("4. So N is either prime or has a new prime factor", font_size=20),
            Text(
                "5. Contradiction! Therefore, infinitely many primes",
                font_size=20,
                color=GREEN,
            ),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        steps.next_to(euclid_text, DOWN, buff=0.5)
        steps.to_edge(LEFT, buff=1)

        for step in steps:
            self.play(Write(step))
            self.wait(0.5)

        self.wait(2)
        self.play(FadeOut(steps), FadeOut(euclid_text), FadeOut(infinite_title))

        # Summary
        summary = VGroup(
            Text("Primes are the atoms of numbers", font_size=32, color=BLUE),
            Text("Every integer factors uniquely into primes", font_size=26),
            Text("Infinitely many primes exist", font_size=26, color=GREEN),
            MathTex(r"\infty", font_size=48, color=YELLOW),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
