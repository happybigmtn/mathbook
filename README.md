# The Princeton Companion to Mathematics - Interactive

An interactive, visual exploration of mathematics based on *The Princeton Companion to Mathematics*. Built with Next.js 16, TypeScript, and inspired by 3Blue1Brown's visual style.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)

## Features

- **Full Text Integration**: Complete book text with two-column Feynman-style annotations
- **Interactive Visualizations**: 3Blue1Brown-style animations and interactive demos
- **Feynman-Style Explanations**: Clear, intuitive explanations that build true understanding
- **Hands-On Exercises**: Interactive problems with immediate feedback
- **Progress Tracking**: Track your learning journey with achievements
- **Comprehensive Coverage**: All 8 parts of the Princeton Companion
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Automated CI/CD**: Auto-deploy on every push to GitHub

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Math Rendering**: KaTeX
- **State Management**: Zustand
- **UI Components**: Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pcm-interactive-book.git
cd pcm-interactive-book
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

The static site will be generated in the `dist` directory.

## Deployment

### Automated CI/CD (Recommended)

This project includes GitHub Actions workflows for automatic deployment:

1. **Push to GitHub** - Every push to `master` automatically triggers deployment
2. **Setup secrets** - Add your deployment credentials as GitHub secrets
3. **Done!** - Your site deploys automatically

See [CICD_SETUP.md](./CICD_SETUP.md) for detailed configuration instructions.

### Manual Deployment

#### Netlify

1. Push your code to GitHub
2. Connect the repository on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Project Structure

```
pcm-interactive-book/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── animations/   # Interactive visualization components
│   │   ├── exercises/    # Exercise components
│   │   └── ui/           # UI components
│   ├── data/             # Content data (chapters, concepts, mathematicians)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   └── types/            # TypeScript types
├── content/              # Markdown content for chapters
├── manim animations/     # Manim animation scripts
├── public/               # Static assets
└── dist/                 # Build output
```

## Content Structure

The book follows the original Princeton Companion structure:

1. **Part I: Introduction** - What is mathematics about?
2. **Part II: Origins of Modern Mathematics** - Historical development
3. **Part III: Mathematical Concepts** - 99 essential concepts
4. **Part IV: Branches of Mathematics** - Deep dives into areas
5. **Part V: Theorems and Problems** - Great theorems and open problems
6. **Part VI: Mathematicians** - Biographies of great mathematicians
7. **Part VII: Influence of Mathematics** - Applications
8. **Part VIII: Final Perspectives** - Reflections on mathematics

## Manim Animations

To build Manim animations:

1. Install Manim: `pip install manim`
2. Run: `npm run manim:build`
3. Animations will be generated in `public/animations/`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Adding New Content

1. Add chapter data to `src/data/chapters.ts`
2. Create interactive components in `src/components/animations/`
3. Add exercises to test understanding
4. Update the component map in the chapter page

### Adding New Animations

1. Create a new Manim script in `manim animations/`
2. Add the animation config to `build_all.py`
3. Build the animation
4. Reference it in your chapter content

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on *The Princeton Companion to Mathematics* edited by Timothy Gowers
- Inspired by 3Blue1Brown's visual style and teaching approach
- Built with modern web technologies for the best learning experience

## Roadmap

- [ ] Complete all Part I chapters
- [ ] Add more interactive visualizations
- [ ] Implement collaborative features
- [ ] Add video explanations
- [ ] Mobile app version
- [ ] Offline support

---

**Happy Learning!** 🧮✨
# CI/CD Enabled - Last updated: Tue Jan 27 09:08:09 PM EST 2026
# Redeploy Tue Jan 27 11:56:45 PM EST 2026
# Preview deploy test
# Deploy trigger Wed Jan 28 12:54:29 AM EST 2026
