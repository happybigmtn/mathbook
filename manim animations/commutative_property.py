"""
Manim animation for the commutative property of multiplication
"""

from manim import *


class CommutativePropertyScene(Scene):
    def construct(self):
        # Title
        title = Text("The Commutative Property", font_size=48)
        subtitle = MathTex("a \\times b = b \\times a", font_size=36)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(Write(subtitle))
        self.wait(1)
        self.play(FadeOut(title), FadeOut(subtitle))

        # Create grid for 3x5
        a, b = 3, 5
        grid = VGroup()
        squares = []

        for i in range(a):
            row = VGroup()
            row_squares = []
            for j in range(b):
                square = Square(side_length=0.5)
                square.set_fill(BLUE, opacity=0.7)
                square.set_stroke(WHITE, width=2)
                row.add(square)
                row_squares.append(square)
            row.arrange(RIGHT, buff=0.1)
            grid.add(row)
            squares.append(row_squares)

        grid.arrange(DOWN, buff=0.1)
        grid.move_to(LEFT * 3)

        # Labels
        row_label = MathTex(f"{a} \\text{{ rows}}")
        row_label.next_to(grid, LEFT)

        col_label = MathTex(f"{b} \\text{{ columns}}")
        col_label.next_to(grid, UP)

        # Animate grid creation
        self.play(Write(row_label), Write(col_label))

        for i, row in enumerate(grid):
            for j, square in enumerate(row):
                self.play(FadeIn(square), run_time=0.05)

        self.wait(1)

        # Count total
        total = MathTex(f"\\text{{Total}} = {a} \\times {b} = {a * b}")
        total.next_to(grid, DOWN, buff=0.5)
        self.play(Write(total))
        self.wait(1)

        # Transform to show commutativity
        self.play(
            FadeOut(row_label),
            FadeOut(col_label),
            FadeOut(total),
        )

        # Rotate grid concept
        transform_text = Text("Rotate the grid...", font_size=36)
        transform_text.to_edge(UP, buff=1)
        self.play(Write(transform_text))

        # Show rotated - actually rotate and move the grid
        rotated_grid = grid.copy()
        rotated_grid.move_to(grid.get_center() + RIGHT * 5)

        self.play(
            grid.animate.rotate(PI / 2).move_to(grid.get_center() + RIGHT * 5),
        )

        new_row_label = MathTex(f"{b} \text{{ rows}}")
        new_row_label.next_to(grid, LEFT)

        new_col_label = MathTex(f"{a} \text{{ columns}}")
        new_col_label.next_to(grid, UP)

        self.play(
            Write(new_row_label),
            Write(new_col_label),
        )

        # Rotate grid concept
        transform_text = Text("Rotate the grid...", font_size=36)
        transform_text.move_to(RIGHT * 3)
        self.play(Write(transform_text))

        # Show rotated
        rotated_grid = grid.copy()
        rotated_grid.move_to(RIGHT * 3)

        new_row_label = MathTex(f"{b} \\text{{ rows}}")
        new_row_label.next_to(rotated_grid, LEFT)

        new_col_label = MathTex(f"{a} \\text{{ columns}}")
        new_col_label.next_to(rotated_grid, UP)

        self.play(
            TransformFromCopy(grid, rotated_grid),
            Write(new_row_label),
            Write(new_col_label),
        )

        new_total = MathTex(f"{b} \\times {a} = {a * b}")
        new_total.next_to(rotated_grid, DOWN, buff=0.5)
        self.play(Write(new_total))

        self.wait(2)

        # Final conclusion
        conclusion = MathTex(f"{a} \\times {b} = {b} \\times {a} = {a * b}")
        conclusion.scale(1.5)
        conclusion.move_to(ORIGIN)

        self.play(
            FadeOut(grid),
            FadeOut(rotated_grid),
            FadeOut(transform_text),
            FadeOut(row_label),
            FadeOut(col_label),
            FadeOut(new_row_label),
            FadeOut(new_col_label),
            FadeOut(total),
            FadeOut(new_total),
        )

        self.play(Write(conclusion))
        self.wait(2)
