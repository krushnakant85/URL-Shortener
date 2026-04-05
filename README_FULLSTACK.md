# URL Shortener - Full Stack Application

## 📋 Project Overview

A complete URL shortening service built with modern cloud technologies. This is a full-stack application featuring:

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: AWS Lambda (Node.js)
- **Database**: Amazon DynamoDB
- **Infrastructure**: AWS CDK (TypeScript)
- **API**: API Gateway (REST)

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (React)                         │
│                   (Vite + Tailwind CSS)                      │
├─────────────────────────────────────────────────────────────┤
│                      API Gateway                             │
│                    (REST Endpoints)                          │
├──────────────────┬─────────────────┬───────────────────────┤
│ Lambda Function  │ Lambda Function  │   DynamoDB Table      │
│ (Shorten URL)    │ (Redirect URL)   │   (URL Storage)       │
└──────────────────┴─────────────────┴───────────────────────┘
```

## 🚀 Features

### Frontend
- ✨ Modern, responsive UI with Tailwind CSS
- 🔗 URL shortening with real-time feedback
- 💾 URL history with LocalStorage persistence
- 📋 Copy-to-clipboard functionality
- 🎯 URL validation
- 📱 Mobile-friendly design
- ⚡ Built with Vite for fast development

### Backend
- 🌐 RESTful API endpoints
- 🚀 Serverless Lambda functions
- 🗃️ DynamoDB for scalable storage
- 📊 Click tracking on shortened URLs
- ⏰ Timestamp logging
- ✅ Error handling and validation

## 📁 Project Structure

```
url-shortener-aws/
├── frontend/                    # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── URLShortener.jsx     # URL shortening form
│   │   │   └── URLHistory.jsx       # URL history component
│   │   ├── api.js                   # API service
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Tailwind styles
│   ├── index.html                   # HTML template
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── lambda/                      # AWS Lambda Functions
│   ├── shorten-url/
│   │   └── index.ts             # URL shortening function
│   └── redirect-url/
│       └── index.ts             # URL redirection function
├── lib/
│   └── url-shortener-aws-stack.ts   # CDK Stack definition
├── bin/
│   └── url-shortener-aws.ts         # CDK App entry point
├── test/
│   └── url-shortener-aws.test.ts    # Unit tests
├── package.json                 # Backend dependencies
└── cdk.json                     # CDK configuration
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- AWS Account
- AWS CLI configured (for deployment)

### Backend Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build & Test**
   ```bash
   npm run build
   ```

3. **Deploy to AWS**
   ```bash
   # First time setup - bootstrap the CDK environment
   npx cdk bootstrap

   # Deploy the stack
   npm run deploy
   ```

### Frontend Setup

1. **Navigate to Frontend Directory**
   ```bash
   cd frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   ```bash
   # Copy the example env file
   cp .env.example .env.local

   # Edit .env.local if needed (API URL is pre-configured)
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   The frontend will open at `http://localhost:3000`

5. **Build for Production**
   ```bash
   npm run build
   ```

## 📡 API Endpoints

### 1. Shorten URL
**POST** `/shorten-url`

**Request Body:**
```json
{
  "url": "https://example.com/very/long/url"
}
```

**Response:**
```json
{
  "shortUrl": "a1b2c3d4",
  "url": "https://example.com/very/long/url",
  "message": "URL shortened successfully"
}
```

### 2. Redirect to Original URL
**GET** `/{shortUrl}`

**Response:** HTTP 302 redirect to original URL

**Tracking:** Increments click counter and logs timestamp

## 🗄️ Database Schema

**Table Name:** `url-table`

**Attributes:**
- `shortUrl` (String, Partition Key) - 8-character short URL identifier
- `createdAt` (String, Sort Key) - ISO timestamp of creation
- `url` (String) - Original long URL
- `clicks` (Number) - Click counter
- `timestamps` (List) - Array of access timestamps

## 💾 LocalStorage Schema

URLs are stored in browser's LocalStorage for client-side history:

```javascript
{
  shortUrl: "a1b2c3d4",
  url: "https://example.com/...",
  createdAt: "2024-01-15T10:30:00.000Z",
  clicks: 0,
  timestamps: []
}
```

## 🔧 Available Commands

### Backend
```bash
npm run build       # Compile TypeScript and run tests
npm run watch       # Watch for changes and compile
npm run test        # Run unit tests
npm run cdk synth   # Generate CloudFormation template
npm run deploy      # Deploy to AWS
npm run destroy     # Destroy the AWS stack
npm run clean       # Clean and reinstall everything
```

### Frontend
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

## 🌐 Deployment Details

**Live API URL:**
```
https://3szvli0kq2.execute-api.us-east-1.amazonaws.com/prod/
```

**AWS Resources Created:**
- API Gateway REST API
- Lambda Function (Shorten URL)
- Lambda Function (Redirect URL)
- DynamoDB Table
- IAM Roles & Policies
- CloudFormation Stack

**Region:** us-east-1
**Account ID:** 219850557234

## 📊 How It Works

### URL Shortening Flow
1. User enters a long URL in the frontend
2. Frontend validates the URL format
3. Request sent to `/shorten-url` endpoint
4. Lambda function generates a unique 8-character ID using UUID
5. URL mapping stored in DynamoDB
6. Short URL returned to frontend
7. URL added to browser's LocalStorage

### URL Redirection Flow
1. User accesses shortened URL (GET `/{shortUrl}`)
2. Lambda function queries DynamoDB for the mapping
3. Click counter incremented
4. Timestamp logged
5. HTTP 302 redirect to original URL

## 🔒 Security Considerations

- ✅ URL validation on frontend and backend
- ✅ DynamoDB encryption at rest
- ✅ API Gateway CORS configuration
- ✅ IAM least-privilege policies
- ✅ No sensitive data stored in LocalStorage

## 📈 Scalability

- **Lambda**: Auto-scales to handle traffic
- **DynamoDB**: Pay-per-request billing mode
- **API Gateway**: Managed service, auto-scales
- **Frontend**: Static deployment ready (S3 + CloudFront)

## 🧪 Testing

Run backend tests:
```bash
npm test
```

**Test Coverage:**
- API Gateway creation
- Lambda functions
- DynamoDB table
- IAM permissions

## 🚀 Future Enhancements

- [ ] Custom short URL generation (vanity URLs)
- [ ] QR code generation
- [ ] URL expiration/TTL
- [ ] Click analytics dashboard
- [ ] User authentication
- [ ] Admin panel
- [ ] S3 static frontend hosting
- [ ] CloudFront CDN distribution

## 📝 College Submission Notes

This project demonstrates:

1. **Cloud Architecture**: AWS CDK infrastructure as code
2. **Serverless Computing**: AWS Lambda functions
3. **NoSQL Databases**: DynamoDB design and queries
4. **Frontend Development**: React with modern tooling
5. **API Design**: RESTful API principles
6. **Full-Stack Integration**: Frontend-Backend communication
7. **DevOps**: Deployment and CI/CD concepts
8. **Best Practices**: Error handling, validation, testing

## 📚 Technologies Used

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Axios
- JavaScript ES6+

**Backend:**
- Node.js 22.x
- TypeScript
- AWS Lambda
- AWS SDK v3

**Infrastructure:**
- AWS CDK
- AWS CloudFormation
- AWS API Gateway
- AWS DynamoDB
- AWS IAM

**Testing:**
- Jest

## 👨‍💼 Author

College Project - URL Shortener Service

## 📄 License

MIT License

## 🤝 Support

For issues or questions, check the AWS documentation:
- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/)
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [Amazon DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)
