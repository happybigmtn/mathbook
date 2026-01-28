#!/usr/bin/env python3
"""
Build script for Manim animations
This script compiles Manim animations for web deployment
"""

import os
import subprocess
import sys
from pathlib import Path

# Animation configurations
ANIMATIONS = [
    {
        "name": "CommutativeProperty",
        "file": "commutative_property.py",
        "class": "CommutativePropertyScene",
    },
    {
        "name": "EulersFormula",
        "file": "eulers_formula.py",
        "class": "EulersFormulaScene",
    },
    {
        "name": "PythagoreanTheorem",
        "file": "pythagorean_theorem.py",
        "class": "PythagoreanTheoremScene",
    },
    {
        "name": "PrimeNumbers",
        "file": "prime_numbers.py",
        "class": "PrimeNumbersScene",
    },
    {
        "name": "AxiomOfChoice",
        "file": "axiom_of_choice.py",
        "class": "AxiomOfChoiceScene",
    },
    {
        "name": "Compactness",
        "file": "compactness.py",
        "class": "CompactnessScene",
    },
    {
        "name": "Groups",
        "file": "groups.py",
        "class": "GroupsScene",
    },
    {
        "name": "Manifolds",
        "file": "manifolds.py",
        "class": "ManifoldsScene",
    },
    {
        "name": "EulerIdentity",
        "file": "euler_identity.py",
        "class": "EulerIdentityScene",
    },
    {
        "name": "FourierTransform",
        "file": "fourier_transform.py",
        "class": "FourierTransformScene",
    },
    {
        "name": "EllipticCurves",
        "file": "elliptic_curves.py",
        "class": "EllipticCurvesScene",
    },
    {
        "name": "TrigonometricFunctions",
        "file": "trigonometric_functions.py",
        "class": "TrigonometricFunctionsScene",
    },
    {
        "name": "GoldenRatio",
        "file": "golden_ratio.py",
        "class": "GoldenRatioScene",
    },
    {
        "name": "Fibonacci",
        "file": "fibonacci.py",
        "class": "FibonacciScene",
    },
    {
        "name": "Infinity",
        "file": "infinity.py",
        "class": "InfinityScene",
    },
    {
        "name": "EpsilonDelta",
        "file": "epsilon_delta.py",
        "class": "EpsilonDeltaScene",
    },
    {
        "name": "ModularArithmetic",
        "file": "modular_arithmetic.py",
        "class": "ModularArithmeticScene",
    },
    {
        "name": "ThreeGeometries",
        "file": "three_geometries.py",
        "class": "ThreeGeometriesScene",
    },
    {
        "name": "CentralLimitTheorem",
        "file": "central_limit_theorem.py",
        "class": "CentralLimitTheoremScene",
    },
    {
        "name": "NumberSystems",
        "file": "number_systems.py",
        "class": "NumberSystemsScene",
    },
    {
        "name": "ProofTechniques",
        "file": "proof_techniques.py",
        "class": "ProofTechniquesScene",
    },
    {
        "name": "ComplexNumbers",
        "file": "complex_numbers.py",
        "class": "ComplexNumbersScene",
    },
    {
        "name": "Vectors",
        "file": "vectors.py",
        "class": "VectorsScene",
    },
    {
        "name": "Derivatives",
        "file": "derivatives.py",
        "class": "DerivativesScene",
    },
    {
        "name": "Matrices",
        "file": "matrices.py",
        "class": "MatricesScene",
    },
    {
        "name": "Integration",
        "file": "integration.py",
        "class": "IntegrationScene",
    },
    {
        "name": "TaylorSeries",
        "file": "taylor_series.py",
        "class": "TaylorSeriesScene",
    },
]


def build_animation(animation):
    """Build a single Manim animation"""
    print(f"Building {animation['name']}...")

    cmd = [
        "manim",
        "-pqh",  # high quality
        "--format=webm",
        f"--output_file={animation['name']}",
        animation["file"],
        animation["class"],
    ]

    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
        if result.returncode == 0:
            print(f"✓ {animation['name']} built successfully")
            return True
        else:
            print(f"✗ {animation['name']} failed:")
            print(result.stderr)
            return False
    except subprocess.TimeoutExpired:
        print(f"✗ {animation['name']} timed out")
        return False
    except Exception as e:
        print(f"✗ {animation['name']} error: {e}")
        return False


def main():
    """Build all animations"""
    output_dir = Path("public/animations")
    output_dir.mkdir(parents=True, exist_ok=True)

    print("Building Manim animations...")
    print("=" * 50)

    success_count = 0
    for animation in ANIMATIONS:
        if build_animation(animation):
            success_count += 1

    print("=" * 50)
    print(f"Built {success_count}/{len(ANIMATIONS)} animations")

    return 0 if success_count == len(ANIMATIONS) else 1


if __name__ == "__main__":
    sys.exit(main())
