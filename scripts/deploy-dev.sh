#!/bin/bash
echo "🚀 Deploying to dev environment..."

# Push changes
git push origin dev

# Wait for deployment
sleep 30

# Get latest preview URL and create alias
LATEST_URL=$(vercel ls --yes | grep "Preview" | head -1 | awk '{print $1}' | sed 's/https:\/\///')
echo "📎 Creating alias for: $LATEST_URL"

vercel alias $LATEST_URL unique-motors-dev-projects.vercel.app

echo "✅ Dev environment updated: https://unique-motors-dev-projects.vercel.app"