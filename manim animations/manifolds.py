from manim import *


class ManifoldsScene(ThreeDScene):
    """
    Visual explanation of Manifolds.

    Shows how manifolds locally look like Euclidean space,
    using examples: Circle (1D), Sphere (2D), and Torus.
    """

    def construct(self):
        # Title
        title = Text("Manifolds", font_size=48, color=BLUE)
        subtitle = Text("Locally Euclidean Spaces", font_size=28, color=GRAY)
        subtitle.next_to(title, DOWN)

        self.play(Write(title))
        self.play(FadeIn(subtitle))
        self.wait(2)

        self.play(FadeOut(subtitle))
        self.play(title.animate.to_edge(UP))

        # Definition
        def_text = Text(
            "A manifold is a space that locally looks like Euclidean space",
            font_size=24,
            color=YELLOW,
        )
        def_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(def_text))
        self.wait(2)
        self.play(FadeOut(def_text))

        # Example 1: Circle S¹
        circle_text = Text("Circle S¹ (1-Manifold)", font_size=32, color=GREEN)
        circle_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(circle_text))

        # Create a circle
        circle = Circle(radius=2, color=BLUE, stroke_width=4)
        self.play(Create(circle))

        # Show local looks like line
        zoom_point = Dot(circle.point_at_angle(PI / 4), color=RED)
        self.play(Create(zoom_point))

        # Zoom in effect using camera
        self.play(self.camera.frame.animate.scale(0.3).move_to(zoom_point), run_time=2)

        # Show that locally it looks like a line
        local_line = Line(
            circle.point_at_angle(PI / 4 - 0.2),
            circle.point_at_angle(PI / 4 + 0.2),
            color=YELLOW,
            stroke_width=8,
        )
        local_text = Text("Locally: looks like a line", font_size=16, color=YELLOW)
        local_text.next_to(local_line, UP, buff=0.1)

        self.play(Create(local_line), Write(local_text))
        self.wait(2)

        # Zoom back out
        self.play(
            self.camera.frame.animate.scale(1 / 0.3).move_to(ORIGIN),
            FadeOut(local_line),
            FadeOut(local_text),
            FadeOut(zoom_point),
            run_time=2,
        )

        self.play(FadeOut(circle), FadeOut(circle_text))

        # Example 2: Sphere S²
        sphere_text = Text("Sphere S² (2-Manifold)", font_size=32, color=GREEN)
        sphere_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(sphere_text))

        # Create a sphere
        sphere = Sphere(radius=1.5, resolution=(20, 20))
        sphere.set_color(BLUE)
        sphere.set_opacity(0.6)

        self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
        self.play(Create(sphere))
        self.wait(1)

        # Show local patch looks like plane
        self.begin_ambient_camera_rotation(rate=0.1)
        self.wait(2)
        self.stop_ambient_camera_rotation()

        # Add text explaining
        local_plane_text = Text(
            "Locally: looks like a plane", font_size=24, color=YELLOW
        )
        local_plane_text.to_corner(UL)
        self.add_fixed_in_frame_mobjects(local_plane_text)
        self.play(Write(local_plane_text))
        self.wait(2)

        self.play(FadeOut(sphere), FadeOut(sphere_text), FadeOut(local_plane_text))
        self.set_camera_orientation(phi=0, theta=0)

        # Example 3: Torus
        torus_text = Text("Torus T² (2-Manifold)", font_size=32, color=GREEN)
        torus_text.next_to(title, DOWN, buff=0.5)
        self.play(Write(torus_text))

        # Create a torus
        torus = Torus(major_radius=2, minor_radius=0.7, resolution=(20, 20))
        torus.set_color(PURPLE)
        torus.set_opacity(0.6)

        self.set_camera_orientation(phi=75 * DEGREES, theta=45 * DEGREES)
        self.play(Create(torus))
        self.wait(1)

        self.begin_ambient_camera_rotation(rate=0.1)
        self.wait(3)
        self.stop_ambient_camera_rotation()

        # Show it's still locally a plane
        torus_local = Text("Still locally looks like ℝ²", font_size=24, color=YELLOW)
        torus_local.to_corner(UL)
        self.add_fixed_in_frame_mobjects(torus_local)
        self.play(Write(torus_local))
        self.wait(2)

        self.play(FadeOut(torus), FadeOut(torus_text), FadeOut(torus_local))
        self.set_camera_orientation(phi=0, theta=0)

        # Analogy: Earth's surface
        analogy_title = Text("Analogy: Earth's Surface", font_size=32, color=BLUE)
        analogy_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(analogy_title))

        # Create a simple sphere to represent Earth
        earth = Circle(radius=2, color=BLUE, fill_opacity=0.3)
        self.play(Create(earth))

        # Add small person to show local flatness
        person = Dot(earth.get_center() + RIGHT * 2, color=RED)
        person.scale(2)
        self.play(Create(person))

        # Show local tangent plane
        tangent = Line(
            earth.get_center() + RIGHT * 2 + UP * 0.5,
            earth.get_center() + RIGHT * 2 + DOWN * 0.5,
            color=YELLOW,
            stroke_width=6,
        )

        self.play(Create(tangent))

        analogy_text = Text("To us: Earth looks flat", font_size=24, color=YELLOW)
        analogy_text.next_to(analogy_title, DOWN, buff=0.8)
        self.play(Write(analogy_text))

        analogy_text2 = Text("Globally: Earth is a sphere", font_size=24, color=GREEN)
        analogy_text2.next_to(analogy_text, DOWN, buff=0.3)
        self.play(Write(analogy_text2))

        self.wait(3)

        self.play(
            FadeOut(earth),
            FadeOut(person),
            FadeOut(tangent),
            FadeOut(analogy_text),
            FadeOut(analogy_text2),
            FadeOut(analogy_title),
        )

        # Summary
        summary = VGroup(
            Text("Manifolds generalize curves and surfaces", font_size=32, color=BLUE),
            Text("to higher dimensions", font_size=28),
            Text("Locally: flat like ℝⁿ", font_size=26, color=GREEN),
            Text("Globally: can be curved", font_size=26, color=YELLOW),
        ).arrange(DOWN, buff=0.4)

        self.play(Write(summary))
        self.wait(3)
        self.play(FadeOut(summary), FadeOut(title))
