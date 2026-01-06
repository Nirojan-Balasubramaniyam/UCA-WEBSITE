# GitHub Pages Deployment Checklist

## ✅ Configuration Done:
- [x] `vite.config.js` has `base: '/UCA-WEBSITE/'`
- [x] GitHub Actions workflow created
- [x] `.nojekyll` file added to prevent Jekyll processing
- [x] `404.html` file added for SPA routing

## 🔧 Steps to Deploy:

### 1. Commit and Push Changes
```bash
git add .
git commit -m "Fix GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
4. Save

### 3. Enable Workflow Permissions
1. Go to **Settings** → **Actions** → **General**
2. Scroll to **"Workflow permissions"**
3. Select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**

### 4. Check Deployment
1. Go to **Actions** tab in your repository
2. You should see a workflow run after pushing
3. Wait for it to complete (green checkmark)
4. Visit: `https://nirojan-balasubramaniyam.github.io/UCA-WEBSITE/`

## 🐛 Troubleshooting:

### If still seeing blank page:

1. **Check Browser Console (F12)**
   - Look for red error messages
   - Check Network tab for failed requests

2. **Verify GitHub Pages URL**
   - Make sure you're visiting: `https://nirojan-balasubramaniyam.github.io/UCA-WEBSITE/`
   - NOT: `https://nirojan-balasubramaniyam.github.io/` (missing /UCA-WEBSITE/)

3. **Check Actions Tab**
   - Make sure the workflow ran successfully
   - Check for any error messages in the workflow logs

4. **Verify Build Output**
   - The `dist/index.html` should have paths like `/UCA-WEBSITE/assets/...`
   - If paths start with `/assets/...` (without /UCA-WEBSITE/), the base path isn't set correctly

5. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or open in incognito/private window

## 📝 Important Notes:

- **Environment Variables**: The `.env` file is NOT deployed to GitHub Pages
  - EmailJS credentials won't work in production unless you:
    - Use GitHub Secrets and update the workflow to inject them
    - Or hardcode them (NOT recommended for security)
    - Or use a different email service that works client-side

- **Build Output**: The `dist/` folder contains the production build
  - Don't commit `dist/` to git (it's in .gitignore)
  - GitHub Actions will build it automatically




