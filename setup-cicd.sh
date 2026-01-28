#!/bin/bash

# Setup script for CI/CD deployment
# This helps configure the GitHub secrets needed for automated deployment

echo "🔧 CI/CD Setup Helper"
echo "===================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Must run from project root directory"
    exit 1
fi

echo "This script will help you set up automated deployment to Netlify."
echo ""
echo "📘 Netlify Setup Instructions:"
echo ""
echo "1. Go to https://app.netlify.com/user/applications/personal"
echo "2. Click 'New access token'"
echo "3. Copy the token"
echo ""
echo "4. Go to your GitHub repo: https://github.com/happybigmtn/mathbook"
echo "5. Navigate to: Settings → Secrets and variables → Actions"
echo "6. Click 'New repository secret'"
echo "7. Add NETLIFY_AUTH_TOKEN with your token"
echo ""
echo "8. Get your Site ID from Netlify dashboard → Site settings → General"
echo "9. Add NETLIFY_SITE_ID as another secret"
echo ""
echo "✅ After setting secrets, pushes to master will auto-deploy!"
echo ""
echo "📋 Next Steps:"
echo "1. Set up the secrets in GitHub as described above"
echo "2. The next push to master will trigger automatic deployment"
echo "3. Monitor deployments in the GitHub Actions tab"
echo ""
echo "📖 For more details, see CICD_SETUP.md"
