from manim import *
import numpy as np


class MatricesScene(Scene):
    """
    Matrices visualization.

    Shows matrix operations, transformations, eigenvalues/vectors,
    and applications in linear algebra.
    """

    def construct(self):
        # Title
        title = Text("Matrices", font_size=44, color=BLUE)
        subtitle = Text(
            "Arrays of Numbers that Transform Space", font_size=24, color=GRAY
        )
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Definition
        def_title = Text("Definition:", font_size=26)
        def_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_title))

        # Show a matrix
        matrix = MathTex(
            r"A = \\begin{bmatrix} a & b \\ c & d \\end{bmatrix}", font_size=32
        )
        matrix.next_to(def_title, DOWN, buff=0.3)

        self.play(Write(matrix))
        self.wait(1)

        self.play(FadeOut(matrix), FadeOut(def_title))

        # Matrix multiplication
        mult_title = Text("Matrix Multiplication:", font_size=26, color=GREEN)
        mult_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(mult_title))

        multiplication = MathTex(
            r"\\begin{bmatrix} a & b \\ c & d \\end{bmatrix}",
            r"\\begin{bmatrix} e & f \\ g & h \\end{bmatrix} =",
            r"\\begin{bmatrix} ae+bg & af+bh \\ ce+dg & cf+dh \\end{bmatrix}",
            font_size=26,
        )
        multiplication.next_to(mult_title, DOWN, buff=0.5)

        self.play(Write(multiplication))
        self.wait(2)

        self.play(FadeOut(multiplication), FadeOut(mult_title))

        # Linear transformation
        transform_title = Text("Linear Transformations:", font_size=26, color=YELLOW)
        transform_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(transform_title))

        # Create grid
        grid = NumberPlane(
            x_range=[-3, 3, 1],
            y_range=[-3, 3, 1],
            background_line_style={"stroke_opacity": 0.4},
        )
        grid.scale(0.8)
        grid.next_to(transform_title, DOWN, buff=0.3)

        self.play(Create(grid))

        # Transformation matrix
        transform_label = MathTex(
            r"T = \\begin{bmatrix} 2 & 0 \\ 0 & 1 \\end{bmatrix}", font_size=22
        )
        transform_label.to_corner(DR)

        self.play(Write(transform_label))

        # Apply transformation (stretch x by 2)
        self.play(grid.animate.apply_matrix([[2, 0], [0, 1]]), run_time=3)
        self.wait(2)

        self.play(FadeOut(grid), FadeOut(transform_label), FadeOut(transform_title))

        # Eigenvalues and eigenvectors
        eigen_title = Text("Eigenvalues & Eigenvectors:", font_size=26, color=GREEN)
        eigen_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(eigen_title))

        eigen_def = MathTex(r"A\\vec{v} = \\lambda \\vec{v}", font_size=28)
        eigen_def.next_to(eigen_title, DOWN, buff=0.3)

        explanation = Text("Vectors that only get scaled (not rotated)", font_size=20)
        explanation.next_to(eigen_def, DOWN, buff=0.3)

        self.play(Write(eigen_def))
        self.play(Write(explanation))
        self.wait(2)

        self.play(FadeOut(eigen_def), FadeOut(explanation), FadeOut(eigen_title))

        # Applications
        apps_title = Text("Applications:", font_size=26, color=YELLOW)
        apps_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(apps_title))

        applications = VGroup(
            Text("• Computer graphics", font_size=22),
            Text("• Machine learning", font_size=22),
            Text("• Quantum mechanics", font_size=22),
            Text("• Data compression", font_size=22),
            Text("• Solving systems of equations", font_size=22),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3)
        applications.next_to(apps_title, DOWN, buff=0.5)
        applications.to_edge(LEFT, buff=1)

        self.play(*[Write(app) for app in applications])
        self.wait(3)

        self.play(FadeOut(applications), FadeOut(apps_title))

        # Summary
        summary = VGroup(
            Text("Matrices", font_size=36, color=BLUE),
            MathTex(r"A\\vec{v} = \\vec{w}", font_size=28),
            Text("Linear transformations in disguise", font_size=24),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
