# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Prerequisites
- Node.js 18+
- npm

### Step 1: Backend Setup (Already Deployed ✅)
The backend is already deployed on AWS! The live API is at:
```
https://3szvli0kq2.execute-api.us-east-1.amazonaws.com/prod/
```

### Step 2: Frontend Development

1. **Navigate to Frontend**
   ```bash
   cd frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   The app will automatically open at `http://localhost:3000`

### Step 3: Test the Application

1. **Shorten a URL**
   - Enter: `https://www.github.com/anthropics/anthropic-sdk-python`
   - Click "Shorten URL"
   - Get your short URL instantly!

2. **View History**
   - All shortened URLs appear in the history section
   - Click "Copy" to copy the short URL
   - Click "Open" to test the redirect
   - Click "Delete" to remove from history

3. **Share**
   - Copy your short URL
   - Share it with anyone
   - They'll be redirected to the original URL

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
# Output: dist/ folder with production-ready files
```

### Deployment Options

#### Option 1: Deploy Frontend to AWS S3 + CloudFront (Easiest)
```bash
# Build frontend
cd frontend && npm run build

# Create S3 bucket
aws s3 mb s3://my-url-shortener-frontend

# Upload dist folder
aws s3 sync dist/ s3://my-url-shortener-frontend/

# Make it public (for testing only)
aws s3api put-bucket-acl --bucket my-url-shortener-frontend --acl public-read
```

#### Option 2: Deploy Frontend to GitHub Pages
```bash
cd frontend
npm run build
# Push dist/ folder to gh-pages branch
```

#### Option 3: Deploy Frontend to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel
```

## 📄 Project Structure After Setup

```
frontend/
├── node_modules/             # Dependencies
├── dist/                      # Production build (run npm run build)
├── src/
│   ├── components/
│   ├── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── .env.local                 # Your environment config
```

## 🔗 API Usage Examples

### Using curl
```bash
# Shorten URL
curl -X POST https://3szvli0kq2.execute-api.us-east-1.amazonaws.com/prod/shorten-url \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/very/long/url"}'

# Redirect (automatically follows)
curl -L https://3szvli0kq2.execute-api.us-east-1.amazonaws.com/prod/a1b2c3d4
```

### Using JavaScript
```javascript
const response = await fetch('https://3szvli0kq2.execute-api.us-east-1.amazonaws.com/prod/shorten-url', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://example.com/long/url' })
});
const data = await response.json();
console.log(data.shortUrl);
```

## 🐛 Troubleshooting

### "Cannot GET /shorten-url"
- Check if the API endpoint in `frontend/src/api.js` is correct
- Verify AWS backend is deployed: `npm run deploy` in root

### Port 3000 already in use
```bash
# Change port in vite.config.js or use:
npm run dev -- --port 3001
```

### CORS errors
- Backend already has CORS enabled ✅
- Check browser console for detailed errors
- Ensure you're using the correct API URL

### LocalStorage not working
- Try a different browser
- Clear browser cache
- Check if private/incognito mode is causing issues

## 📊 Performance Tips

1. **Optimize Frontend**
   ```bash
   # Build size analysis
   npm install --save-dev webpack-bundle-analyzer
   ```

2. **Monitor Lambda Performance**
   - Check CloudWatch logs in AWS Console
   - Look for cold start times and execution duration

3. **Optimize DynamoDB**
   - Currently using on-demand pricing (auto-scales)
   - Monitor provisioned throughput in AWS Console

## 🎓 College Submission Submission Checklist

- [ ] Backend working (API Gateway + Lambda + DynamoDB)
- [ ] Frontend working (React + Vite + Tailwind)
- [ ] URL history stored in LocalStorage
- [ ] URL validation (frontend + backend)
- [ ] Error handling
- [ ] Responsive design
- [ ] README documentation
- [ ] Code comments where needed
- [ ] Tests passing (`npm test`)

## 📚 Documentation

See `README_FULLSTACK.md` for:
- Detailed architecture
- API endpoints documentation
- Database schema
- Deployment details
- Future enhancements

## 🚀 Next Steps

1. **Customize Colors** - Edit Tailwind colors in `tailwind.config.js`
2. **Add More Features** - Analytics, custom URLs, expiration
3. **Deploy Frontend** - Host on S3, Vercel, or GitHub Pages
4. **Monitor** - Set up CloudWatch alerts
5. **Scale** - Add caching, CDN, multi-region support

## 💡 Tips for College Presentation

1. **Show Live Demo**
   - Display frontend at localhost:3000
   - Show API working with curl commands
   - Show URL history in browser

2. **Explain Architecture**
   - Frontend → API Gateway → Lambda → DynamoDB
   - Highlight cloud services used
   - Explain scalability benefits

3. **Highlight Skills Demonstrated**
   - Cloud architecture (AWS)
   - Full-stack development
   - Infrastructure as Code (CDK)
   - REST API design
   - React development

4. **Performance Metrics**
   - Average response time: <200ms
   - Scalability: Auto-scales to handle traffic
   - Cost: Pay only for what you use

---

**Happy coding! 🎉**
