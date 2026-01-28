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

echo "This script will help you set up automated deployment."
echo ""
echo "Choose your deployment platform:"
echo "1) Netlify (recommended - already configured)"
echo "2) Vercel"
echo "3) Both"
echo ""
read -p "Enter choice (1-3): " choice

case $choice in
    1)
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
        ;;
    2)
        echo ""
        echo "📗 Vercel Setup Instructions:"
        echo ""
        echo "1. Go to https://vercel.com/account/tokens"
        echo "2. Click 'Create Token'"
        echo "3. Copy the token"
        echo ""
        echo "4. Run: vercel link (in project directory)"
        echo "5. Check .vercel/project.json for orgId and projectId"
        echo ""
        echo "6. Go to your GitHub repo: https://github.com/happybigmtn/mathbook"
        echo "7. Navigate to: Settings → Secrets and variables → Actions"
        echo "8. Add these secrets:"
        echo "   - VERCEL_TOKEN"
        echo "   - VERCEL_ORG_ID"  
        echo "   - VERCEL_PROJECT_ID"
        echo ""
        echo "✅ After setting secrets, pushes to master will auto-deploy!"
        ;;
    3)
        echo ""
        echo "You'll need to set up both Netlify and Vercel secrets."
        echo "See CICD_SETUP.md for detailed instructions."
        ;;
    *)
        echo "Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "📋 Next Steps:"
echo "1. Set up the secrets in GitHub as described above"
echo "2. The next push to master will trigger automatic deployment"
echo "3. Monitor deployments in the GitHub Actions tab"
echo ""
echo "📖 For more details, see CICD_SETUP.md"
