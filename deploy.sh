#!/bin/bash

# Deploy script for PCM Interactive Book

echo "🚀 Deploying PCM Interactive Book..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. Current version: $(node -v)"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build succeeded
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📁 Build output is in the 'dist' directory"
echo ""
echo "To deploy to Vercel:"
echo "  1. Push to GitHub"
echo "  2. Connect repository on Vercel"
echo "  3. Deploy!"
echo ""
echo "To deploy to Netlify:"
echo "  1. Push to GitHub"
echo "  2. Connect repository on Netlify"
echo "  3. Build command: npm run build"
echo "  4. Publish directory: dist"
echo ""
