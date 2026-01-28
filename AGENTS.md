# Agent Directions: PCM Interactive Book Development

## Content Structure

### Two-Tab Layout
Each chapter/concept page must have two distinct tabs:

1. **FEYNMAN TAB** (formerly Summary)
   - **IN-DEPTH EXPLANATIONS**: Not superficial overviews. Readers should get 90% of the substantive detail from this tab alone.
   - **Feynman-style teaching**: Clear, intuitive explanations with analogies, visualizations, and step-by-step breakdowns
   - **All visualizations go here**: Interactive diagrams, animations, visual proofs, geometric interpretations
   - **Comprehensive coverage**: Can be long and detailed as long as it's accessible
   - **Annotations**: Visual explainers, analogies, deep-dives, and clarifying notes
   - **Goal**: Make the mathematics understandable without losing rigor

2. **FULL TEXT TAB** 
   - **VERBATIM**: Exact text from the Princeton Companion to Mathematics PDF
   - **NO REWRITING**: Extract directly without changing structure, examples, or explanations
   - **COMPLETE**: Include all proofs, examples, and mathematical details
   - **KaTeX formatting**: All math properly typeset
   - **NO VISUALIZATIONS**: This tab shows the original text only
   - **Purpose**: Reference the authoritative source material

## KaTeX Formatting Standards

All mathematical content must use KaTeX:
- Inline math: `$...$`
- Display math: `$$...$$`
- Multi-line equations: Use `align` environment
- Preserve original mathematical notation from the PDF
- Ensure proper rendering of Greek letters, subscripts, superscripts

## Visual Explainers Requirement

**ALL visualizations go in the Feynman tab**:
- Interactive diagrams (React components)
- Animated demonstrations
- Visual proofs or illustrations
- Step-by-step visual breakdowns
- Geometric interpretations
- Multiple visualizations where concepts warrant it

## Content Depth Standards

### Feynman Tab Requirements:
- **Substantial detail**: Not 10,000-foot explanations
- **90% coverage**: Reader should get almost all important content from this tab
- **Accessible rigor**: Deep mathematics presented clearly
- **Multiple modalities**: Text + visuals + interactive elements
- **Self-contained**: Can stand alone without Full Text tab

### Full Text Tab Requirements:
- **99%+ fidelity**: Exact reproduction of PDF text
- **Complete content**: No omissions of examples or proofs
- **Original structure**: Preserve section breaks, formatting, and flow
- **KaTeX throughout**: All mathematics properly formatted

## Content Addition Process

1. **Extract** verbatim text from PDF for Full Text tab
2. **Create** comprehensive Feynman explanation with:
   - Detailed conceptual explanations
   - Step-by-step walkthroughs
   - Interactive visualizations
   - Multiple examples and analogies
   - Annotations for clarification
3. **Format** all math using KaTeX in both tabs
4. **Verify** both tabs are complete and high-quality

## File Organization

```
src/data/
  chapters.ts           - Original chapter metadata
  fullTextChapters.ts   - Verbatim book text from PDF
  feynmanChapters.ts    - Our detailed Feynman-style explanations
```

## Quality Standards

- **Feynman Tab**: Comprehensive, visual, intuitive, 90%+ substance coverage
- **Full Text Tab**: Exact reproduction, no modifications, complete content
- **Visuals**: At least one substantial visualization per page, all in Feynman tab
- **Math**: Properly formatted KaTeX throughout both tabs
- **Annotations**: Only in Feynman tab

## Implementation Notes

- Feynman tab should be the primary learning resource
- Full Text tab is for reference and comparison
- Users can read Feynman tab alone and understand the material deeply
- Full Text tab preserves the authority and completeness of the original
- Visualizations enhance but don't replace mathematical content
