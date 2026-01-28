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
