# Agent Directions: PCM Interactive Book Development

> **IMPORTANT: This project uses Netlify for deployment ONLY.** Do NOT deploy to Vercel or any other platform. All deployment configuration is set up for Netlify (see `netlify.toml`).

## Content Structure

### Two-Tab Layout
Each chapter/concept page must have two distinct tabs:

1. **FEYNMAN TAB** - Written from scratch in Feynman Lectures style
   - **ORIGINAL CONTENT**: Write this from scratch, do NOT copy from Full Text
   - **90% SUBSTANCE RETENTION**: Keep the rigor, don't water it down
   - **PLAIN ENGLISH FIRST**: Explain what the machinery is doing before showing equations
   - **TRANSLATE, DON'T TRANSCRIBE**: "We are summing up all the little contributions..." not just "∫f(x)dx"
   - **KEEP THE RIGOR**: Walk through every derivation step, explain edge cases and constraints
   - **ANALOGIES AS SUPPLEMENTS**: Use analogies only after explaining the mechanical reality
   - **CONVERSATIONAL TONE**: "We." "Let's see what happens..." "You might suspect X, but actually..."
   - **ALL VISUAL EXPLAINERS GO HERE**: Manim animations, interactive diagrams, visual proofs
   - **Goal**: Make the actual mathematics understandable, not strip it away

2. **FULL TEXT TAB** 
   - **VERBATIM**: Exact text from the Princeton Companion to Mathematics PDF
   - **NO REWRITING**: Extract directly without changing structure
   - **COMPLETE**: Include all proofs, examples, and mathematical details
   - **KaTeX formatting**: All math properly typeset
   - **FEYNMAN-STYLE ANNOTATIONS**: Clarifying notes, explanations, and references to the text (NOT visual explainers)
   - **Purpose**: Reference the authoritative source material with helpful guidance

## Feynman Writing Guidelines (The 90% Rule)

**Role**: You are Richard Feynman explaining mathematics from the Feynman Lectures.

**Objective**: Explain dense mathematical text with clarity and depth while retaining 90% of the technical substance. Do NOT create a "pop-science" summary. Make the actual mathematics understandable, not strip it away.

### The Feynman Method:

**1. Plain English First (The "What")**
Before showing a single variable, describe the behavior or nature of the concept in plain English. What is the machinery actually doing?
- If describing a tensor, talk about coordinate transformations first
- If describing a limit, talk about what "approaching" means intuitively
- If describing algebraic structures, talk about what they represent

**2. Translate, Don't Just Transcribe**
When you introduce equations, translate the notation into logical sentences:
- **Bad**: "The integral of f(x) dx..."
- **Good**: "We are summing up all the little contributions of f at every point x, taking the limit as the pieces get infinitesimally small..."

**3. Keep the Rigor (The 90% Rule)**
Do not skip derivation steps, edge cases, or specific conditions (e.g., differentiability, convergence). Walk through them:
- Explain why constraints exist
- Show what happens if conditions aren't met
- "If we didn't have this condition, the whole thing would blow up to infinity here, so we restrict it..."

**4. Analogies as Supplements Only**
Use analogies only AFTER explaining the mechanical reality of the math. Use them to cement the idea, not introduce it.

**5. Conversational Tone**
Use "We." "Let's see what happens if..." "You might suspect that X, but actually..."
Treat the user as an intelligent student who needs the intuition bridge.

## KaTeX Formatting Standards

All mathematical content must use KaTeX:
- Inline math: `$...$`
- Display math: `$$...$$`
- Multi-line equations: Use `align` environment
- Preserve original mathematical notation from the PDF
- Ensure proper rendering of Greek letters, subscripts, superscripts
- **IMPORTANT**: Annotations in Full Text tab must also render KaTeX properly

## Visual Explainers vs Annotations

**VISUAL EXPLAINERS (Manim animations, interactive diagrams)**:
- **LOCATION**: Feynman tab ONLY
- **PURPOSE**: Visual proofs, geometric interpretations, animated demonstrations
- **FORMAT**: React components, Manim animations, interactive diagrams
- **EXAMPLES**: Commutative property grid, limit visualizations, geometric constructions

**ANNOTATIONS (Full Text tab)**:
- **LOCATION**: Full Text tab ONLY
- **PURPOSE**: Clarifying notes and explanations of the verbatim text
- **FORMAT**: Text with KaTeX formatting
- **CONTENT**: 
  - Explanations of difficult passages
  - Mathematical clarifications
  - References to related concepts
  - "Feynman-style" notes on the text itself
- **NO VISUALS**: Annotations are text-only explanations

**RULE**: Visual explainers help you understand the concept (Feynman tab). Annotations help you understand the text (Full Text tab).

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

### For Full Text Tab:
1. **Extract** verbatim text from PDF
2. **Add text annotations** (NO visuals):
   - Clarifying notes on difficult passages
   - Mathematical explanations with KaTeX
   - References to related concepts
   - Keep annotations text-only

### For Feynman Tab:
3. **Create** comprehensive explanation from scratch:
   - Start with plain English intuition
   - Walk through derivations step-by-step
   - Explain constraints and edge cases
   - Use conversational "Feynman" tone
4. **Add ALL visual explainers**:
   - Manim animations
   - Interactive React components
   - Visual proofs and geometric interpretations
   - NO annotations - pure explanation + visuals
5. **Format** all math using KaTeX
6. **Verify** both tabs are complete and high-quality

## File Organization

```
src/data/
  chapters.ts           - Original chapter metadata
  fullTextChapters.ts   - Verbatim book text from PDF + text annotations
  feynmanChapters.ts    - Original Feynman-style explanations + Manim visual explainers
```

## Quality Standards

- **Feynman Tab**: Comprehensive, visual, intuitive, 90%+ substance coverage with ALL Manim animations and visual explainers
- **Full Text Tab**: Exact reproduction with Feynman-style text annotations for clarification
- **Visuals**: At least one substantial visualization per page, all in Feynman tab (NONE in Full Text)
- **Math**: Properly formatted KaTeX throughout both tabs and annotations
- **Annotations**: Text-only clarifications in Full Text tab (NO annotations in Feynman tab)

## Implementation Notes

- **Feynman tab** is the primary learning resource with original explanations and ALL visual explainers
- **Full Text tab** preserves the authoritative text with helpful text annotations (NO visuals)
- Users can read Feynman tab alone and understand the material deeply
- Full Text tab provides the original source with clarifying annotations
- **Visual explainers** (Manim) enhance understanding but don't replace the Feynman explanation
- **Annotations** help readers understand the verbatim text without altering it
- Never mix: Visuals stay in Feynman, annotations stay in Full Text

## Deployment Strategy (Cost-Optimized)

**Automatic preview deploys on every push:**

### Automatic Deployments:
- **Push to master**: Creates a deploy preview (using GitHub CLI to post URL as commit comment)
- **Every commit**: Gets its own preview URL posted as a commit comment
- **No PRs required**: Direct commits trigger preview deploys automatically

### How to Access Preview URLs:
After each push to master:
1. Go to the commit on GitHub
2. Look for the commit comment with 🚀 emoji
3. Click the Deploy Preview URL

### Manual Production Deploys:
When you need to deploy to production:
1. Go to GitHub Actions → "Deploy to Netlify (Auto Preview on Push)"
2. Click "Run workflow"
3. Select "production" from the dropdown
4. Click "Run workflow"

### Why This Saves Money:
- Preview deploys are free on Netlify (don't count toward build minutes)
- Production deploys only when explicitly needed
- No PR overhead - direct commits trigger previews
- Preview URLs posted automatically via GitHub CLI
