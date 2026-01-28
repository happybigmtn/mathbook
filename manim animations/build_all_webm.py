#!/usr/bin/env python3
"""
Render all Manim animations and convert to webm format for web use.
"""

import subprocess
import os
import sys
from pathlib import Path

# List of all animation files and their scene classes
ANIMATIONS = [
    ("commutative_property.py", "CommutativePropertyScene"),
    ("eulers_formula.py", "EulersFormulaScene"),
    ("pythagorean_theorem.py", "PythagoreanTheoremScene"),
    ("prime_numbers.py", "PrimeNumbersScene"),
    ("axiom_of_choice.py", "AxiomOfChoiceScene"),
    ("compactness.py", "CompactnessScene"),
    ("groups.py", "GroupsScene"),
    ("manifolds.py", "ManifoldsScene"),
    ("euler_identity.py", "EulerIdentityScene"),
    ("fourier_transform.py", "FourierTransformScene"),
    ("elliptic_curves.py", "EllipticCurvesScene"),
    ("trigonometric_functions.py", "TrigonometricFunctionsScene"),
    ("golden_ratio.py", "GoldenRatioScene"),
    ("fibonacci.py", "FibonacciScene"),
    ("infinity.py", "InfinityScene"),
    ("epsilon_delta.py", "EpsilonDeltaScene"),
    ("modular_arithmetic.py", "ModularArithmeticScene"),
    ("three_geometries.py", "ThreeGeometriesScene"),
    ("central_limit_theorem.py", "CentralLimitTheoremScene"),
    ("number_systems.py", "NumberSystemsScene"),
    ("proof_techniques.py", "ProofTechniquesScene"),
    ("complex_numbers.py", "ComplexNumbersScene"),
    ("vectors.py", "VectorsScene"),
    ("derivatives.py", "DerivativesScene"),
    ("matrices.py", "MatricesScene"),
    ("integration.py", "IntegrationScene"),
    ("taylor_series.py", "TaylorSeriesScene"),
    ("logarithms.py", "LogarithmsScene"),
    ("exponential_growth.py", "ExponentialGrowthScene"),
    ("continuity.py", "ContinuityScene"),
    ("limits.py", "LimitsScene"),
    ("differential_equations.py", "DifferentialEquationsScene"),
    ("set_theory.py", "SetTheoryScene"),
]


def render_animation(py_file, scene_name, output_dir):
    """Render a single animation with Manim."""
    print(f"\n{'=' * 60}")
    print(f"Rendering {scene_name}...")
    print(f"{'=' * 60}")

    try:
        # Render with medium quality (-qm)
        result = subprocess.run(
            ["manim", "-qm", "--format", "webm", py_file, scene_name],
            capture_output=True,
            text=True,
            timeout=600,  # 10 minute timeout per animation
        )

        if result.returncode != 0:
            print(f"✗ {scene_name} failed:")
            print(result.stderr[-1000:] if len(result.stderr) > 1000 else result.stderr)
            return False

        # Find the generated webm file
        media_dir = Path("media/videos")
        scene_name_lower = scene_name.replace("Scene", "").lower()

        # Look for the webm file
        webm_files = list(media_dir.rglob(f"*{scene_name}*.webm"))

        if webm_files:
            # Copy to output directory with standardized name
            output_name = scene_name.replace("Scene", "")
            output_path = Path(output_dir) / f"{output_name}.webm"

            # Get the most recent file
            latest_webm = max(webm_files, key=lambda p: p.stat().st_mtime)

            # Copy file
            import shutil

            shutil.copy2(latest_webm, output_path)
            print(f"✓ {scene_name} built successfully -> {output_path}")
            return True
        else:
            print(f"✗ {scene_name}: Could not find output webm file")
            return False

    except subprocess.TimeoutExpired:
        print(f"✗ {scene_name} timed out after 10 minutes")
        return False
    except Exception as e:
        print(f"✗ {scene_name} failed with error: {e}")
        return False


def main():
    # Create output directory
    output_dir = "../public/animations"
    os.makedirs(output_dir, exist_ok=True)

    # Set up PATH for LaTeX
    tex_path = os.path.expanduser("~/.local/tinytex/bin/x86_64-linux")
    os.environ["PATH"] = tex_path + ":" + os.environ.get("PATH", "")

    print("Building Manim animations...")
    print(f"Output directory: {output_dir}")
    print(f"LaTeX PATH: {tex_path}")

    success_count = 0
    failed_count = 0
    failed_animations = []

    for py_file, scene_name in ANIMATIONS:
        if render_animation(py_file, scene_name, output_dir):
            success_count += 1
        else:
            failed_count += 1
            failed_animations.append((py_file, scene_name))

    print("\n" + "=" * 60)
    print("BUILD SUMMARY")
    print("=" * 60)
    print(f"Successful: {success_count}/{len(ANIMATIONS)}")
    print(f"Failed: {failed_count}/{len(ANIMATIONS)}")

    if failed_animations:
        print("\nFailed animations:")
        for py_file, scene_name in failed_animations:
            print(f"  - {scene_name} ({py_file})")

    return failed_count == 0


if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
