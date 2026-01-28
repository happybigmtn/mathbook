from manim import *


class AxiomOfChoiceScene(Scene):
    """
    Visual explanation of the Axiom of Choice.

    Shows the concept of choosing one element from each set in a collection,
    emphasizing the difference between finite and infinite collections.
    """

    def construct(self):
        # Title
        title = Text("The Axiom of Choice", font_size=48, color=BLUE)
        subtitle = Text("Choosing from Collections of Sets", font_size=24, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Part 1: Finite Collection Example
        finite_text = Text("Finite Collection:", font_size=32, color=GREEN)
        finite_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(finite_text))

        # Create three boxes (sets) with socks inside
        boxes = VGroup()
        socks_chosen = VGroup()

        for i in range(3):
            # Create box
            box = Rectangle(height=2, width=1.5, color=BLUE, fill_opacity=0.2)
            box.shift(RIGHT * (i - 1) * 3)

            # Add set label
            label = MathTex(f"S_{{{i + 1}}}", font_size=24)
            label.next_to(box, UP)

            # Create socks inside
            sock_colors = [RED, GREEN, BLUE, YELLOW]
            socks = VGroup()
            for j, color in enumerate(sock_colors):
                sock = Circle(radius=0.15, color=color, fill_opacity=0.8)
                sock.move_to(box.get_center() + UP * 0.3 + DOWN * j * 0.4)
                socks.add(sock)

            box_group = VGroup(box, label, socks)
            boxes.add(box_group)

            # Choose one sock
            chosen_sock = socks[0].copy()
            chosen_sock.set_stroke(WHITE, width=3)
            socks_chosen.add(chosen_sock)

        self.play(Create(boxes), run_time=2)
        self.wait(1)

        # Show choosing from each box
        choice_text = Text("Choose one from each", font_size=24, color=YELLOW)
        choice_text.next_to(boxes, DOWN, buff=0.5)
        self.play(Write(choice_text))

        for i, sock in enumerate(socks_chosen):
            arrow = Arrow(
                sock.get_bottom(),
                sock.get_bottom() + DOWN * 0.5,
                color=YELLOW,
                buff=0.1,
            )
            self.play(
                Indicate(sock, scale_factor=1.3, color=YELLOW),
                Create(arrow),
                run_time=0.5,
            )
            self.play(FadeOut(arrow))

        self.wait(1)
        self.play(FadeOut(choice_text))

        # Part 2: Infinite Collection
        self.play(FadeOut(boxes), FadeOut(finite_text))

        infinite_text = Text("Infinite Collection:", font_size=32, color=ORANGE)
        infinite_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(infinite_text))

        # Show ellipsis representing infinite sets
        dots = MathTex(r"\cdots", font_size=48)
        dots.next_to(title, DOWN, buff=1.5)

        infinite_boxes = VGroup()
        for i in range(5):
            box = Rectangle(height=1.5, width=1, color=BLUE, fill_opacity=0.2)
            if i < 2:
                box.shift(LEFT * 4 + RIGHT * i * 1.5)
            elif i > 2:
                box.shift(RIGHT * 2 + RIGHT * (i - 3) * 1.5)
            else:
                box.shift(LEFT * 0.5)
                continue

            label = MathTex(f"S_{{{i + 1 if i < 2 else i}}}", font_size=20)
            label.next_to(box, UP)

            # Add small dots inside to represent elements
            elements = VGroup()
            for _ in range(4):
                dot = Dot(radius=0.08, color=GRAY)
                offset = np.random.uniform(-0.3, 0.3, 3)
                offset[2] = 0  # Keep z-coordinate at 0
                dot.move_to(box.get_center() + offset)
                elements.add(dot)

            box_group = VGroup(box, label, elements)
            infinite_boxes.add(box_group)

        self.play(Create(infinite_boxes))
        self.play(Write(dots))
        self.wait(1)

        # Show the problem
        problem_text = Text("Can we choose one from each?", font_size=28, color=RED)
        problem_text.next_to(infinite_boxes, DOWN, buff=0.5)
        self.play(Write(problem_text))
        self.wait(2)

        # Axiom statement
        axiom_box = SurroundingRectangle(
            VGroup(infinite_boxes, dots, problem_text), color=YELLOW, buff=0.5
        )
        axiom_text = Text("Axiom of Choice: YES, we can!", font_size=28, color=YELLOW)
        axiom_text.next_to(axiom_box, DOWN, buff=0.3)

        self.play(Create(axiom_box))
        self.play(Write(axiom_text))
        self.wait(2)

        # Intuition
        intuition_title = Text("Intuition:", font_size=24, color=GREEN)
        intuition_title.to_edge(DOWN).shift(UP * 1.5)

        intuition_text = Text(
            "Even without a rule for choosing, a choice function exists",
            font_size=20,
            color=WHITE,
        )
        intuition_text.next_to(intuition_title, DOWN)

        self.play(Write(intuition_title))
        self.play(Write(intuition_text))
        self.wait(3)

        # Fade out everything
        self.play(
            FadeOut(
                VGroup(
                    title,
                    infinite_text,
                    infinite_boxes,
                    dots,
                    problem_text,
                    axiom_box,
                    axiom_text,
                    intuition_title,
                    intuition_text,
                )
            )
        )

        # Final summary
        summary = VGroup(
            Text("The Axiom of Choice", font_size=36, color=BLUE),
            Text("guarantees we can select one element", font_size=28),
            Text("from each set in ANY collection", font_size=28),
            Text("(even infinite ones)", font_size=24, color=YELLOW),
        ).arrange(DOWN, buff=0.3)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary))
