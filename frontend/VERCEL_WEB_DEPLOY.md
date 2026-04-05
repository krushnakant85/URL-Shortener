# ✅ Deploy to Vercel - Web Dashboard Method (Easiest)

Since Vercel CLI requires authentication, use the **Web Dashboard** instead (faster and easier):

---

## 🎯 Step-by-Step: Deploy via Vercel Dashboard

### Step 1: Go to Vercel
Open: **https://vercel.com**

### Step 2: Sign Up / Login
- Click **"Sign Up"** (top right)
- Select **"Continue with GitHub"**
- Authorize Vercel to access your GitHub

### Step 3: Import Project
After signing in, you'll see dashboard:
- Click **"Add New..."** button
- Select **"Project"**

### Step 4: Select Repository
- Click **"Import Git Repository"**
- Search for: `URL-Shortener`
- Click the repository to select it

### Step 5: Configure Project
Vercel will show configuration page:

**Root Directory:**
- Change from root to: `./frontend`
- (Click on Settings to change)

**Framework:**
- Should auto-detect: `Vite` ✓

**Build Command:**
- `npm run build` ✓

**Output Directory:**
- `dist` ✓

**Install Command:**
- `npm install` ✓

### Step 6: Environment Variables ⭐ IMPORTANT

Add this environment variable:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | `https://3szvli0kq2.execute-api.us-east-1.amazonaws.com/prod/` |

Click **"Add"** to add each variable.

### Step 7: Deploy
Click the big **"Deploy"** button

---

## ⏳ Deployment In Progress

Wait 2-3 minutes. You'll see:
```
✓ Building...
✓ Optimizing...
✓ Deploying...
✓ Success!
```

---

## 🎉 Deployment Complete!

You'll get a message like:
```
✅ Congratulations! Your project is live.

🎉 Production: https://url-shortener-abc123.vercel.app
```

**Copy this URL - this is your new short base URL!** 🚀

---

## 📊 What Changed

### Before (Long URL):
```
https://3szvli0kq2.execute-api.us-east-1.amazonaws.com/prod/0f937f3b
```

### After (Short URL):
```
https://url-shortener-abc123.vercel.app
```

Much better! ✨

---

## ✅ Test Your Deployment

1. Go to your Vercel URL
2. Enter a URL to shorten
3. Test the shortened URL
4. Verify everything works!

---

## 🔄 Auto-Deployment Setup

Once deployed on Vercel:
- Every time you push to GitHub, Vercel automatically:
  - Detects the changes
  - Rebuilds your app
  - Deploys to production
  - No manual work needed!

---

## 🎓 For Your College Submission

**Use this Vercel URL in your presentation!**

Example:
```
https://url-shortener-XXXXX.vercel.app
```

mention:
- Frontend deployed on Vercel
- Backend on AWS Lambda
- Database is DynamoDB
- Automatic CI/CD with GitHub

---

## ✅ Final Checklist

After deployment:
- [ ] Go to your Vercel URL
- [ ] Shorten a test URL
- [ ] Copy the shortened URL works
- [ ] Open the shortened URL
- [ ] Verify it redirects correctly
- [ ] Save your Vercel URL for presentation
- [ ] Test on mobile
- [ ] All features working ✓

---

## 🆘 Troubleshooting

### "Still says 'dist' not found"
- Make sure Root Directory is set to `./frontend`
- Check Build Command is `npm run build`
- Check Output Directory is `dist`

### "API not responding"
- Verify VITE_API_URL env variable is added
- Check it has no trailing/leading spaces
- Restart the deployment after adding env var

### "Want to redeploy"
- Go to Vercel Dashboard
- Click on your project
- Click "Deployments"
- Click most recent deployment
- Click three dots "..."
- Select "Redeploy"

---

**Everything is ready! Just follow the steps above and your URL Shortener will be live on Vercel! 🚀**
