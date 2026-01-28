from manim import *


class PythagoreanTheoremScene(Scene):
    """
    Visual proof of the Pythagorean Theorem.

    Shows the classic geometric proof where a² + b² = c² by rearranging
    triangles within squares.
    """

    def construct(self):
        # Title
        title = Text("Pythagorean Theorem", font_size=48, color=BLUE)
        subtitle = MathTex(r"a^2 + b^2 = c^2", font_size=36, color=YELLOW)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(Write(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Create a right triangle
        triangle_points = [
            np.array([-2, -1.5, 0]),  # Right angle vertex
            np.array([2, -1.5, 0]),  # End of side a
            np.array([-2, 1.5, 0]),  # End of side b
        ]

        triangle = Polygon(*triangle_points, color=BLUE, stroke_width=4)
        triangle.set_fill(BLUE, opacity=0.2)

        # Labels for sides
        a_label = MathTex("a", font_size=28, color=GREEN)
        a_label.move_to((triangle_points[0] + triangle_points[1]) / 2 + DOWN * 0.4)

        b_label = MathTex("b", font_size=28, color=GREEN)
        b_label.move_to((triangle_points[0] + triangle_points[2]) / 2 + LEFT * 0.4)

        c_label = MathTex("c", font_size=28, color=RED)
        c_label.move_to(
            (triangle_points[1] + triangle_points[2]) / 2 + UP * 0.4 + RIGHT * 0.3
        )

        # Right angle marker
        right_angle = Square(side_length=0.3, color=WHITE, stroke_width=2)
        right_angle.move_to(triangle_points[0] + np.array([0.15, 0.15, 0]))

        self.play(Create(triangle), run_time=2)
        self.play(Write(a_label), Write(b_label), Write(c_label))
        self.play(Create(right_angle))
        self.wait(1)

        # Move triangle to side and create squares on each side
        self.play(
            triangle.animate.scale(0.8).to_edge(LEFT, buff=1).shift(UP * 0.5),
            FadeOut(a_label),
            FadeOut(b_label),
            FadeOut(c_label),
            FadeOut(right_angle),
        )

        # Create squares on each side
        # Square on side a
        square_a = Square(side_length=2.4, color=GREEN, stroke_width=3)
        square_a.set_fill(GREEN, opacity=0.2)
        square_a.move_to(np.array([1.2, -2.7, 0]))

        a_sq_label = MathTex(r"a^2", font_size=28, color=GREEN)
        a_sq_label.move_to(square_a.get_center())

        # Square on side b
        square_b = Square(side_length=1.8, color=BLUE, stroke_width=3)
        square_b.set_fill(BLUE, opacity=0.2)
        square_b.move_to(np.array([-3.8, 0.9, 0]))

        b_sq_label = MathTex(r"b^2", font_size=28, color=BLUE)
        b_sq_label.move_to(square_b.get_center())

        # Square on side c (hypotenuse)
        # Calculate the position for the square on the hypotenuse
        # The hypotenuse goes from (2, -1.5) to (-2, 1.5)
        c_length = np.sqrt(4**2 + 3**2)  # = 5
        square_c = Square(side_length=c_length * 0.4, color=RED, stroke_width=3)
        square_c.set_fill(RED, opacity=0.2)
        # Position it above the hypotenuse
        square_c.rotate(np.arctan2(3, -4))
        square_c.move_to(np.array([0.5, 2.5, 0]))

        c_sq_label = MathTex(r"c^2", font_size=28, color=RED)
        c_sq_label.move_to(square_c.get_center())

        # Show the squares
        squares_title = Text("Squares on each side:", font_size=24)
        squares_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(squares_title))

        self.play(Create(square_a), Write(a_sq_label))
        self.play(Create(square_b), Write(b_sq_label))
        self.play(Create(square_c), Write(c_sq_label))
        self.wait(2)

        # Geometric proof visualization
        self.play(
            FadeOut(squares_title),
            FadeOut(square_a),
            FadeOut(a_sq_label),
            FadeOut(square_b),
            FadeOut(b_sq_label),
            FadeOut(square_c),
            FadeOut(c_sq_label),
            FadeOut(triangle),
        )

        # Classic proof: Rearrangement
        proof_title = Text("Geometric Proof:", font_size=28, color=YELLOW)
        proof_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(proof_title))

        # Create a large square with side (a+b)
        a, b = 2, 1.5
        big_square = Square(side_length=a + b, color=WHITE, stroke_width=3)
        big_square.shift(DOWN * 0.5)

        big_label = MathTex(r"(a+b)^2", font_size=24)
        big_label.to_corner(UR)

        self.play(Create(big_square), Write(big_label))

        # Divide into sections and place 4 triangles
        # Calculate positions for 4 copies of the triangle - fixed positions
        tri1 = Polygon(
            np.array([-1.75, -1.25, 0]),
            np.array([0.25, -1.25, 0]),
            np.array([-1.75, 0.25, 0]),
            color=BLUE,
            fill_opacity=0.3,
        )

        tri2 = Polygon(
            np.array([0.25, -1.25, 0]),
            np.array([0.25, 0.75, 0]),
            np.array([1.75, -1.25, 0]),
            color=BLUE,
            fill_opacity=0.3,
        )

        tri3 = Polygon(
            np.array([1.75, 0.75, 0]),
            np.array([-0.25, 0.75, 0]),
            np.array([1.75, -0.75, 0]),
            color=BLUE,
            fill_opacity=0.3,
        )

        tri4 = Polygon(
            np.array([-0.25, 0.75, 0]),
            np.array([-1.75, 0.75, 0]),
            np.array([-0.25, -0.75, 0]),
            color=BLUE,
            fill_opacity=0.3,
        )

        triangles = VGroup(tri1, tri2, tri3, tri4)

        self.play(*[Create(t) for t in triangles], run_time=2)

        # Highlight the inner square (c²)
        inner_square = Square(side_length=c_length * 0.35, color=RED, stroke_width=4)
        inner_square.shift(DOWN * 0.5)
        inner_square_label = MathTex(r"c^2", font_size=28, color=RED)
        inner_square_label.move_to(inner_square.get_center())

        self.play(Create(inner_square), Write(inner_square_label))

        # Show area relationship
        area_eq = MathTex(r"(a+b)^2 = c^2 + 4 \times \frac{1}{2}ab", font_size=24)
        area_eq.next_to(big_square, DOWN, buff=0.5)

        self.play(Write(area_eq))
        self.wait(1)

        # Simplify
        simplified = MathTex(r"a^2 + 2ab + b^2 = c^2 + 2ab", font_size=24)
        simplified.next_to(area_eq, DOWN, buff=0.3)

        self.play(Write(simplified))
        self.wait(1)

        # Final result
        final = MathTex(r"a^2 + b^2 = c^2", font_size=32, color=YELLOW)
        final.next_to(simplified, DOWN, buff=0.5)

        self.play(Write(final))
        self.wait(2)

        self.play(
            FadeOut(big_square),
            FadeOut(big_label),
            FadeOut(triangles),
            FadeOut(inner_square),
            FadeOut(inner_square_label),
            FadeOut(area_eq),
            FadeOut(simplified),
            FadeOut(proof_title),
        )

        # Summary
        self.play(final.animate.move_to(ORIGIN).scale(1.5))

        summary_text = Text("The Pythagorean Theorem", font_size=32, color=BLUE)
        summary_text.next_to(final, UP, buff=0.8)

        self.play(Write(summary_text))
        self.wait(3)

        self.play(FadeOut(final), FadeOut(summary_text), FadeOut(title))
