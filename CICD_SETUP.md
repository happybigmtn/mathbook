# CI/CD Setup Guide

## Overview

This project has automated CI/CD pipelines configured via GitHub Actions. Every push to the `master` branch will automatically trigger a build and deployment.

## Available Workflows

### 1. **deploy-netlify.yml** - Deploy to Netlify
Automatically deploys to Netlify on every push to master.

### 2. **deploy-vercel.yml** - Deploy to Vercel  
Automatically deploys to Vercel on every push to master.

### 3. **ci-cd.yml** - Full Pipeline
Runs tests, builds, and deploys (template - configure deployment step).

## Quick Setup

### Option 1: Netlify (Recommended - already configured)

1. **Get Netlify credentials:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login and get token
   netlify login
   netlify status
   ```

2. **Get your Site ID:**
   - Go to your Netlify dashboard
   - Select your site
   - Go to Site settings → General
   - Copy the Site ID

3. **Add GitHub Secrets:**
   Go to your GitHub repository → Settings → Secrets and variables → Actions
   
   Add these secrets:
   - `NETLIFY_AUTH_TOKEN`: Your personal access token from Netlify
   - `NETLIFY_SITE_ID`: Your site's ID

4. **Enable the workflow:**
   Uncomment the Netlify deployment step in `.github/workflows/ci-cd.yml`

### Option 2: Vercel

1. **Get Vercel credentials:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login
   vercel login
   ```

2. **Link your project:**
   ```bash
   vercel link
   ```

3. **Get your tokens:**
   ```bash
   # Get project ID and org ID
   cat .vercel/project.json
   
   # Get token (create at https://vercel.com/account/tokens)
   ```

4. **Add GitHub Secrets:**
   - `VERCEL_TOKEN`: Your Vercel personal access token
   - `VERCEL_ORG_ID`: Your organization ID
   - `VERCEL_PROJECT_ID`: Your project ID

5. **Enable the workflow:**
   Uncomment the Vercel deployment step in `.github/workflows/ci-cd.yml`

## Alternative: Native Git Integration

### Netlify Git Integration
Instead of GitHub Actions, you can use Netlify's native Git integration:

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

This is simpler and requires no configuration files!

### Vercel Git Integration
Similarly for Vercel:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Deploy!

## How It Works

### On Every Push to Master:
1. ✅ GitHub Actions triggers
2. ✅ Code is checked out
3. ✅ Node.js 18 is set up
4. ✅ Dependencies are installed (`npm ci`)
5. ✅ TypeScript is checked (`npx tsc --noEmit`)
6. ✅ Project is built (`npm run build`)
7. ✅ Built files are deployed to your platform

### On Pull Requests:
- The pipeline runs tests and build
- Deployment creates a preview URL
- Status checks appear in the PR

## Monitoring Deployments

### GitHub Actions Tab
- Go to your repository → Actions tab
- See all workflow runs
- Click any run to see logs

### Deployment Status
- Success: Green checkmark ✓
- Failure: Red X - check logs for errors
- In Progress: Yellow circle

## Troubleshooting

### Build Failures
```bash
# Test locally
cd pcm-interactive-book
npm ci
npm run build
```

### Missing Secrets
If deployment fails with "Error: Input required and not supplied":
- Check that all required secrets are set in GitHub
- Secrets are case-sensitive

### Permission Denied
- Ensure GitHub Actions has write permissions:
  Settings → Actions → General → Workflow permissions → Read and write

### Netlify Specific
- Ensure `netlify.toml` is in the repository root
- Verify `dist` directory exists after build
- Check that the site ID is correct

## Customization

### Add Tests
Edit `.github/workflows/ci-cd.yml`:
```yaml
- name: Run tests
  run: npm test
```

### Change Node Version
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'  # or 'lts/*' for latest LTS
```

### Deploy on Specific Branches Only
```yaml
on:
  push:
    branches: 
      - master
      - production
```

## Current Status

✅ GitHub Actions workflows created
✅ Netlify configuration present (netlify.toml)
✅ Vercel configuration present (vercel.json)
✅ Build scripts configured

**Next Step:** Add your deployment secrets to GitHub and enable your preferred workflow!
