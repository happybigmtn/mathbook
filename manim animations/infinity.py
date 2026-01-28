from manim import *
import numpy as np


class InfinityScene(Scene):
    """
    Infinity visualization showing different sizes of infinity,
    Cantor's diagonal argument, and Hilbert's Hotel.
    """

    def construct(self):
        # Title
        title = Text("Infinity", font_size=48, color=BLUE)
        subtitle = Text("Different Sizes of Infinity", font_size=28, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Countable infinity
        countable_title = Text(
            "ℵ₀ (Aleph-null): Countable Infinity", font_size=28, color=GREEN
        )
        countable_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(countable_title))

        # Natural numbers
        naturals = VGroup(*[MathTex(str(i), font_size=24) for i in range(1, 13)])
        naturals.arrange(RIGHT, buff=0.4)
        naturals.next_to(countable_title, DOWN, buff=0.5)

        dots = MathTex(r"\cdots", font_size=32)
        dots.next_to(naturals, RIGHT, buff=0.3)

        self.play(*[Write(n) for n in naturals], run_time=1.5)
        self.play(Write(dots))
        self.wait(1)

        # Show they can be counted
        count_text = Text("Can be put in one-to-one correspondence", font_size=22)
        count_text.next_to(naturals, DOWN, buff=0.5)
        self.play(Write(count_text))
        self.wait(1)

        self.play(
            FadeOut(naturals),
            FadeOut(dots),
            FadeOut(count_text),
            FadeOut(countable_title),
        )

        # Hilbert's Hotel
        hotel_title = Text("Hilbert's Hotel:", font_size=28, color=YELLOW)
        hotel_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(hotel_title))

        hotel_desc = Text(
            "A hotel with infinitely many rooms, all occupied...", font_size=22
        )
        hotel_desc.next_to(hotel_title, DOWN, buff=0.3)
        self.play(Write(hotel_desc))

        # Draw rooms
        rooms = VGroup()
        for i in range(8):
            room = Square(side_length=0.5, color=BLUE, stroke_width=2)
            room.move_to(np.array([i * 0.8 - 3, 0, 0]))
            label = MathTex(f"{i + 1}", font_size=16).move_to(room.get_center())
            rooms.add(VGroup(room, label))

        rooms_dots = MathTex(r"\cdots", font_size=24)
        rooms_dots.move_to(np.array([3.5, 0, 0]))

        self.play(
            *[Create(r[0]) for r in rooms],
            *[Write(r[1]) for r in rooms],
            Write(rooms_dots),
            run_time=2,
        )

        # Show all occupied
        occupied_text = Text("All rooms occupied", font_size=20, color=RED)
        occupied_text.next_to(rooms, DOWN, buff=0.5)
        self.play(Write(occupied_text))
        self.wait(1)

        # New guest arrives
        new_guest = Text("New guest arrives!", font_size=22, color=GREEN)
        new_guest.next_to(occupied_text, DOWN, buff=0.3)
        self.play(Write(new_guest))

        # Solution: everyone moves
        solution = Text(
            "Solution: Everyone moves to room n+1", font_size=20, color=YELLOW
        )
        solution.next_to(new_guest, DOWN, buff=0.3)
        self.play(Write(solution))
        self.wait(2)

        self.play(
            FadeOut(rooms),
            FadeOut(rooms_dots),
            FadeOut(hotel_title),
            FadeOut(hotel_desc),
            FadeOut(occupied_text),
            FadeOut(new_guest),
            FadeOut(solution),
        )

        # Uncountable infinity
        uncountable_title = Text(
            "Uncountable: The Real Numbers", font_size=28, color=RED
        )
        uncountable_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(uncountable_title))

        # Show interval [0,1]
        interval_text = MathTex(r"[0, 1]", font_size=32, color=BLUE)
        interval_text.next_to(uncountable_title, DOWN, buff=0.5)
        self.play(Write(interval_text))

        # Line representing interval
        line = NumberLine(x_range=[0, 1, 0.25], length=6)
        line.next_to(interval_text, DOWN, buff=0.5)

        self.play(Create(line))

        uncountable_desc = Text(
            "Cannot be put in one-to-one correspondence with ℕ", font_size=22
        )
        uncountable_desc.next_to(line, DOWN, buff=0.5)
        self.play(Write(uncountable_desc))
        self.wait(2)

        self.play(
            FadeOut(line),
            FadeOut(interval_text),
            FadeOut(uncountable_desc),
            FadeOut(uncountable_title),
        )

        # Cantor's diagonal argument
        cantor_title = Text("Cantor's Diagonal Argument:", font_size=28, color=YELLOW)
        cantor_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(cantor_title))

        # Show a list of numbers
        numbers = VGroup(
            MathTex(r"0.\mathbf{1}23456...", font_size=22),
            MathTex(r"0.3\mathbf{4}5678...", font_size=22),
            MathTex(r"0.57\mathbf{2}345...", font_size=22),
            MathTex(r"0.901\mathbf{8}76...", font_size=22),
            MathTex(r"\vdots", font_size=24),
        ).arrange(DOWN, buff=0.2)
        numbers.next_to(cantor_title, DOWN, buff=0.5)
        numbers.to_edge(LEFT, buff=1)

        self.play(*[Write(n) for n in numbers])

        diagonal_text = Text(
            "Change each diagonal digit to create a new number",
            font_size=20,
            color=GREEN,
        )
        diagonal_text.next_to(numbers, RIGHT, buff=1)
        self.play(Write(diagonal_text))

        new_number = MathTex(r"0.2539...", font_size=28, color=YELLOW)
        new_number.next_to(diagonal_text, DOWN, buff=0.5)
        self.play(Write(new_number))

        conclusion = Text("This number is NOT in the list!", font_size=22, color=RED)
        conclusion.next_to(new_number, DOWN, buff=0.3)
        self.play(Write(conclusion))
        self.wait(2)

        self.play(
            FadeOut(numbers),
            FadeOut(diagonal_text),
            FadeOut(new_number),
            FadeOut(conclusion),
            FadeOut(cantor_title),
        )

        # Summary
        summary = VGroup(
            Text("There are different sizes of infinity", font_size=32, color=BLUE),
            MathTex(r"\aleph_0 < \mathfrak{c}", font_size=36, color=YELLOW),
            Text("Countable < Uncountable", font_size=26),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
