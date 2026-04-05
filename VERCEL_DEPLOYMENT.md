# 🚀 Deploy Frontend to Vercel via GitHub

## Automatic Deployment (Easiest - 2 minutes)

### Step 1: Go to Vercel Website
Visit: https://vercel.com/

### Step 2: Click "Sign Up"
- Choose "Continue with GitHub"
- Authorize Vercel to access your GitHub account

### Step 3: Import GitHub Repository
1. After signing up, click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Paste your repo URL:
   ```
   https://github.com/krushnakant85/URL-Shortener.git
   ```
4. Click **Import**

### Step 4: Configure Project
1. **Root Directory:** Select `frontend`
2. **Framework:** Presets to `Vite` ✓
3. **Build Command:** `npm run build` ✓
4. **Output Directory:** `dist` ✓
5. **Environment Variables:** Add:
   - Key: `VITE_API_URL`
   - Value: `https://3szvli0kq2.execute-api.us-east-1.amazonaws.com/prod/`

### Step 5: Deploy
Click **"Deploy"** button

**Wait 2-3 minutes for deployment...**

### ✅ You'll Get:
```
✅ Production URL: https://url-shortener-XXXXX.vercel.app
✅ Auto-updates on every git push
✅ Free SSL certificate
✅ CDN for fast worldwide delivery
```

---

## Your Deployment Will Have:

✅ Short base URL: `https://url-shortener-XXXXX.vercel.app`
✅ Shortened links: `https://url-shortener-XXXXX.vercel.app/34cd5209`
✅ AWS backend still working
✅ Auto-deploys on every GitHub commit
✅ 100% free forever

---

## 🎓 For Your College Presentation:

**Share this URL instead of the long AWS endpoint!**

The architecture is:
- **Frontend:** Vercel (CDN, fast)
- **Backend:** AWS Lambda (scalable)
- **Database:** DynamoDB (persistent)

---

**Go to https://vercel.com and start the deployment process!**
