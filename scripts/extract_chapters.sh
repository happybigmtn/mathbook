#!/bin/bash

# Script to extract Princeton Companion to Mathematics chapters
# Usage: ./extract_chapters.sh

PDF_FILE="/tmp/pcm_full.txt"
OUTPUT_DIR="/tmp/extracted_chapters"

mkdir -p "$OUTPUT_DIR"

# Extract Part I - Introduction
echo "Extracting Part I chapters..."

# I.1 What Is Mathematics About? (lines 2151-2791)
sed -n '2151,2791p' "$PDF_FILE" > "$OUTPUT_DIR/I.1_what_is_mathematics.txt"

# I.2 The Language and Grammar of Mathematics (lines 2792-3640)
sed -n '2792,3640p' "$PDF_FILE" > "$OUTPUT_DIR/I.2_language_and_grammar.txt"

# I.3 Some Fundamental Mathematical Definitions (lines 3641-6745)
sed -n '3641,6745p' "$PDF_FILE" > "$OUTPUT_DIR/I.3_fundamental_definitions.txt"

# I.4 The General Goals of Mathematical Research (lines 6746-7500 approx)
sed -n '6746,7500p' "$PDF_FILE" > "$OUTPUT_DIR/I.4_general_goals.txt"

echo "Extraction complete. Files saved to $OUTPUT_DIR"
echo ""
echo "Extracted files:"
ls -lh "$OUTPUT_DIR"
