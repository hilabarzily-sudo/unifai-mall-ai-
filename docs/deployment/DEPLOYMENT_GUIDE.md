# 🚀 מדריך העלאה מלא - UnifAI Mall

## 🎯 אפשרויות העלאה:

1. **Vercel** ⚡ - הכי מהיר ומומלץ
2. **Netlify** 🌐 - אלטרנטיבה מעולה
3. **Docker** 🐳 - לשרתים עצמאיים
4. **Mobile Apps** 📱 - iOS + Android

---

## 1️⃣ העלאה ל-Vercel (מומלץ) ⚡

### שלב 1: התקנת Vercel CLI
```bash
npm install -g vercel
```

### שלב 2: התחברות
```bash
vercel login
```

### שלב 3: העלאה
```bash
vercel
```

### שלב 4: הגדרת משתני סביבה
```bash
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
```

### שלב 5: העלאה לפרודקשן
```bash
vercel --prod
```

### ✅ זהו! האפליקציה שלך עכשיו ב:
```
https://your-project.vercel.app
```

---

## 2️⃣ העלאה ל-Netlify 🌐

### דרך 1: דרך הממשק (GUI)

1. היכנס ל: https://app.netlify.com
2. לחץ על **"Add new site"**
3. בחר **"Import an existing project"**
4. חבר את GitHub/GitLab
5. בחר את הפרויקט
6. הגדרות build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. הוסף משתני סביבה:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
8. לחץ **"Deploy"**

### דרך 2: דרך CLI

```bash
# התקנה
npm install -g netlify-cli

# התחברות
netlify login

# העלאה
netlify deploy --prod
```

### ✅ האפליקציה שלך ב:
```
https://your-app.netlify.app
```

---

## 3️⃣ העלאה עם Docker 🐳

### שלב 1: בניית Image
```bash
docker build -t unifai-mall .
```

### שלב 2: הרצה לוקלית
```bash
docker run -p 3000:80 \
  -e VITE_SUPABASE_URL=your_url \
  -e VITE_SUPABASE_ANON_KEY=your_key \
  unifai-mall
```

### שלב 3: הרצה עם Docker Compose
```bash
docker-compose up -d
```

### העלאה ל-Docker Hub
```bash
# Tag
docker tag unifai-mall your-username/unifai-mall:latest

# Push
docker push your-username/unifai-mall:latest
```

### Deploy לשרת
```bash
# SSH לשרת
ssh user@your-server

# Pull and run
docker pull your-username/unifai-mall:latest
docker run -d -p 80:80 --name unifai your-username/unifai-mall:latest
```

---

## 4️⃣ אפליקציות Mobile 📱

### הכנה (פעם אחת)

```bash
# התקנת Capacitor
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android @capacitor/ios

# אתחול
npx cap init "UnifAI Mall" "com.unifai.mall"

# הוספת פלטפורמות
npx cap add android
npx cap add ios
```

### Build ו-Deploy

#### Android 🤖

```bash
# 1. בניית Web
npm run build

# 2. העתקה ל-Android
npx cap sync android

# 3. פתיחת Android Studio
npx cap open android

# 4. ב-Android Studio:
# - Build > Generate Signed Bundle / APK
# - בחר APK או AAB
# - חתום עם keystore שלך
# - העלה ל-Google Play Console
```

#### iOS 🍎

```bash
# 1. בניית Web
npm run build

# 2. העתקה ל-iOS
npx cap sync ios

# 3. פתיחת Xcode
npx cap open ios

# 4. ב-Xcode:
# - Product > Archive
# - Distribute App
# - Upload to App Store Connect
# - הגש לבדיקה
```

---

## 5️⃣ GitHub Actions (CI/CD) 🔄

צור קובץ: `.github/workflows/deploy.yml`

```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 6️⃣ PWA (Progressive Web App) 📱

### הפעלת PWA

1. הוסף למטה ב-`index.html`:

```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#1a1a1a">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

2. צור Service Worker: `public/sw.js`

```javascript
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('unifai-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.css',
        '/assets/index.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

3. רשום את ה-Service Worker ב-`main.jsx`:

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

---

## 🔐 משתני סביבה

### Development (`.env`)
```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Production
הוסף במערכת ההעלאה:
- Vercel: Dashboard > Settings > Environment Variables
- Netlify: Site settings > Build & deploy > Environment
- Docker: דרך `-e` או `docker-compose.yml`

---

## 🧪 בדיקות לפני העלאה

```bash
# 1. Build לוקלי
npm run build

# 2. תצוגה מקדימה
npm run preview

# 3. בדיקת בריאות DB
npm run check-db

# 4. בדיקת Lighthouse
npx lighthouse http://localhost:4173 --view
```

---

## 📊 ניטור ואנליטיקס

### Google Analytics

הוסף ל-`index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Sentry (Error Tracking)

```bash
npm install @sentry/react
```

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production"
});
```

---

## 🌐 דומיין מותאם אישית

### Vercel
```bash
vercel domains add yourdomain.com
```

### Netlify
```bash
netlify domains:add yourdomain.com
```

### הגדרות DNS
```
Type: A
Name: @
Value: [IP מהספק]

Type: CNAME
Name: www
Value: [Domain מהספק]
```

---

## ✅ Checklist לפני העלאה:

- [ ] Build עובד ללא שגיאות
- [ ] כל משתני הסביבה מוגדרים
- [ ] Supabase credentials נכונים
- [ ] PWA manifest מוגדר
- [ ] Icons בכל הגדלים
- [ ] SEO meta tags
- [ ] Analytics מוגדר
- [ ] Error tracking מוגדר
- [ ] Mobile responsive
- [ ] Performance optimization
- [ ] Security headers
- [ ] HTTPS enabled
- [ ] Domain configured

---

## 🆘 פתרון בעיות נפוצות

### Build נכשל
```bash
# נקה cache
rm -rf node_modules dist
npm install
npm run build
```

### Supabase connection error
```bash
# בדוק credentials
echo $VITE_SUPABASE_URL
echo $VITE_SUPABASE_ANON_KEY

# בדוק קישוריות
npm run check-db
```

### Mobile app לא עובד
```bash
# סנכרן מחדש
npx cap sync

# נקה build
npx cap clean
```

---

## 📞 תמיכה

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Capacitor Docs:** https://capacitorjs.com/docs
- **Supabase Docs:** https://supabase.com/docs

---

**🎉 בהצלחה עם ההעלאה! 🚀**

