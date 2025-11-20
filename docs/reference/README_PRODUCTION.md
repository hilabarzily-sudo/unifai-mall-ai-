# 🚀 UnifAI Mall - Production Ready

<div align="center">

![UnifAI Logo](https://via.placeholder.com/150)

**"Spotify for AI Tools" - גלה, נסה ושמור את כלי ה-AI הטובים ביותר**

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/unifai-mall)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/react-18.2.0-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-5.0.8-646CFF.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/tailwind-3.4.0-38B2AC.svg)](https://tailwindcss.com/)

[Demo](https://unifai-mall.vercel.app) · [Docs](./docs) · [Report Bug](https://github.com/yourusername/unifai-mall/issues)

</div>

---

## 📋 תוכן עניינים

- [סקירה כללית](#-סקירה-כללית)
- [תכונות](#-תכונות)
- [טכנולוגיות](#-טכנולוגיות)
- [התחלה מהירה](#-התחלה-מהירה)
- [מבנה הפרויקט](#-מבנה-הפרויקט)
- [העלאה](#-העלאה)
- [API](#-api)
- [תרומה](#-תרומה)

---

## 🎯 סקירה כללית

**UnifAI Mall** היא פלטפורמה מודרנית לגילוי וניהול כלי AI, בדומה ל-Spotify אבל לכלי AI.

### למה UnifAI?

✨ **אלפי כלי AI במקום אחד**  
🔍 **חיפוש מתקדם וסינון**  
⭐ **שמירת מועדפים ופרומפטים**  
📱 **תמיכה מלאה ב-Mobile**  
🌐 **PWA - עובד גם Offline**  
🎨 **עיצוב OS26 + Glassmorphism**

---

## ✨ תכונות

### 🎬 ניהול משתמשים
- [x] התחברות עם Google/Apple/Email
- [x] פרופיל משתמש מלא
- [x] ניהול הגדרות אישיות
- [x] היסטוריית שימוש

### 🔧 ניהול כלים
- [x] 114+ כלי AI מוכנים
- [x] 10 קטגוריות
- [x] דירוג וביקורות
- [x] פילטר כלים חינמיים/בתשלום
- [x] תגיות מתקדמות

### ⭐ מועדפים ושמירות
- [x] שמירת כלים מועדפים
- [x] שמירת פרומפטים
- [x] שמירת דוגמאות
- [x] סנכרון בין מכשירים

### 🎨 UI/UX
- [x] 14 מסכים מלאים
- [x] אנימציות חלקות
- [x] Glassmorphism design
- [x] Dark mode support
- [x] RTL support (עברית)
- [x] Responsive design

### 📱 Cross-Platform
- [x] Web (Desktop + Mobile)
- [x] PWA (Progressive Web App)
- [x] iOS App (Capacitor)
- [x] Android App (Capacitor)

---

## 🛠️ טכנולוגיות

### Frontend
- **React 18.2** - UI Framework
- **Vite 5** - Build Tool
- **Tailwind CSS 3** - Styling
- **React Router** - Navigation

### Backend
- **Supabase** - Backend as a Service
  - PostgreSQL Database
  - Authentication
  - Real-time subscriptions
  - Storage

### Mobile
- **Capacitor** - Native iOS/Android
- **PWA** - Progressive Web App

### DevOps
- **Vercel** - Hosting
- **GitHub Actions** - CI/CD
- **Docker** - Containerization

---

## 🚀 התחלה מהירה

### דרישות מקדימות

```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### התקנה

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/unifai-mall.git
cd unifai-mall

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env
# ערוך את .env עם המפתחות שלך

# 4. Start development server
npm run dev
```

### 🎉 האפליקציה תיפתח ב: `http://localhost:5173`

---

## 📁 מבנה הפרויקט

```
unifai-mall/
│
├── src/
│   ├── components/
│   │   └── screens/          # 14 Screen Components
│   ├── services/              # API Services
│   ├── hooks/                 # Custom Hooks
│   ├── utils/                 # Utilities
│   ├── lib/                   # Third-party configs
│   ├── App.jsx                # Main App
│   └── main.jsx               # Entry Point
│
├── public/
│   ├── manifest.json          # PWA Manifest
│   └── icons/                 # App Icons
│
├── scripts/
│   └── checkDatabase.js       # DB Health Check
│
├── deployment/
│   ├── vercel.json            # Vercel Config
│   ├── netlify.toml           # Netlify Config
│   ├── Dockerfile             # Docker Config
│   └── nginx.conf             # Nginx Config
│
└── docs/                      # Documentation
```

---

## 📊 נתונים

הפרויקט כולל:

- **114 כלי AI** מוכנים לשימוש
- **10 קטגוריות** מסודרות
- **8 תגיות** לסינון
- **14 מסכים** מלאים

---

## 🚀 העלאה

### Vercel (מומלץ)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Docker

```bash
# Build image
docker build -t unifai-mall .

# Run container
docker run -p 3000:80 unifai-mall
```

[מדריך העלאה מפורט →](./DEPLOYMENT_GUIDE.md)

---

## 🔐 משתני סביבה

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional
VITE_GA_MEASUREMENT_ID=your_ga_id
VITE_SENTRY_DSN=your_sentry_dsn
```

---

## 📱 Mobile Apps

### iOS

```bash
npx cap add ios
npx cap sync ios
npx cap open ios
```

### Android

```bash
npx cap add android
npx cap sync android
npx cap open android
```

[מדריך Mobile מפורט →](./docs/MOBILE.md)

---

## 🧪 בדיקות

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Check database
npm run check-db

# Build test
npm run build
npm run preview
```

---

## 📈 Performance

- ⚡ **Lighthouse Score: 95+**
- 🚀 **First Contentful Paint: < 1s**
- 📦 **Bundle Size: < 500KB**
- 🎨 **60 FPS Animations**

---

## 🤝 תרומה

אנחנו מקבלים בברכה תרומות!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 רישיון

מופץ תחת רישיון MIT. ראה `LICENSE` לפרטים נוספים.

---

## 👥 צוות

- **Your Name** - [GitHub](https://github.com/yourusername)

---

## 🙏 תודות

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [Capacitor](https://capacitorjs.com/)

---

## 📞 צור קשר

- 🌐 Website: [unifai.com](https://unifai.com)
- 📧 Email: support@unifai.com
- 💬 Discord: [Join our community](https://discord.gg/unifai)

---

<div align="center">

**⭐ אם אהבת את הפרויקט, תן לנו כוכב! ⭐**

Made with ❤️ by UnifAI Team

</div>

