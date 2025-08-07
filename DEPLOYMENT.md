# LinuxWale Next.js - Deployment Guide

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional):
   - Add your custom domain in Vercel dashboard
   - Update DNS records as instructed

### 2. Netlify

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**:
   - Connect your GitHub repository
   - Netlify will auto-deploy on every push

### 3. Railway

1. **Connect Repository**:
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository

2. **Environment Variables**:
   - No special environment variables needed for basic setup

### 4. DigitalOcean App Platform

1. **Create App**:
   - Choose GitHub as source
   - Select your repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Run command: `npm start`

## 🔧 Manual Deployment (VPS/Server)

### Prerequisites
- Node.js 18+
- PM2 (for process management)

### Steps

1. **Clone Repository**:
   ```bash
   git clone <your-repo-url>
   cd linuxwale-nextjs
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Build Application**:
   ```bash
   npm run build
   ```

4. **Install PM2**:
   ```bash
   npm install -g pm2
   ```

5. **Start Application**:
   ```bash
   pm2 start npm --name "linuxwale" -- start
   ```

6. **Setup Nginx** (Optional):
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🌍 Environment Variables

For production deployment, you may want to set:

```bash
NODE_ENV=production
PORT=3000
```

## 📊 Performance Optimization

### 1. Enable Compression
The app is already optimized with Next.js built-in optimizations:
- Automatic code splitting
- Image optimization
- Static generation where possible

### 2. CDN Setup
For better performance, consider using a CDN:
- Vercel automatically provides CDN
- For other platforms, use Cloudflare or similar

### 3. Monitoring
Consider adding monitoring tools:
- Vercel Analytics (if using Vercel)
- Google Analytics
- Sentry for error tracking

## 🔒 Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **Headers**: Consider adding security headers
3. **Updates**: Keep dependencies updated

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check Node.js version (18+ required)
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

2. **Images Not Loading**:
   - Ensure images are in `public/images/` directory
   - Check image paths in components

3. **Fonts Not Loading**:
   - Google Fonts are loaded via CSS import
   - Check network connectivity during build

### Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review build logs for specific errors
3. Ensure all dependencies are properly installed

## 🎯 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Images display properly
- [ ] Animations work smoothly
- [ ] Terminal welcome screen functions
- [ ] Mobile responsiveness works
- [ ] SEO meta tags are present
- [ ] Performance is acceptable (< 3s load time)

---

**Happy Deploying! 🐧**

*Why windows, when we have doors?*