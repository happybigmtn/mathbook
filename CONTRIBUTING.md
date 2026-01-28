# Contributing to PCM Interactive Book

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## How to Contribute

### Reporting Bugs

- Check if the bug has already been reported
- Include steps to reproduce
- Include browser and OS information
- Include screenshots if applicable

### Suggesting Features

- Check if the feature has already been suggested
- Provide a clear description of the feature
- Explain why it would be useful

### Adding Content

1. **New Chapters**
   - Add chapter data to `src/data/chapters.ts`
   - Follow the existing structure
   - Include at least one interactive element
   - Add 2-3 exercises

2. **Interactive Components**
   - Create in `src/components/animations/`
   - Export from `src/components/animations/index.ts`
   - Add to componentMap in chapter page
   - Use TypeScript and follow existing patterns

3. **Exercises**
   - Include clear questions
   - Provide helpful hints
   - Write detailed explanations
   - Test the answer checking

### Code Style

- Use TypeScript for all new code
- Follow the existing component structure
- Use Tailwind CSS for styling
- Use Framer Motion for animations
- Write clear, self-documenting code

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/pcm-interactive-book.git
cd pcm-interactive-book

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/              # Next.js pages
├── components/       # React components
│   ├── animations/   # Interactive visualizations
│   ├── exercises/    # Exercise components
│   └── ui/           # UI components
├── data/             # Content data
├── lib/              # Utilities
├── styles/           # Global styles
└── types/            # TypeScript types
```

## Content Guidelines

### Writing Style

- Use clear, accessible language
- Explain concepts visually when possible
- Build intuition before formal definitions
- Include real-world examples

### Mathematical Notation

- Use KaTeX for math rendering
- Provide both formal and informal explanations
- Include visual interpretations

### Interactive Elements

- Make them engaging but not distracting
- Ensure they work on mobile devices
- Provide clear instructions
- Test thoroughly

## Questions?

Feel free to open an issue for any questions!
