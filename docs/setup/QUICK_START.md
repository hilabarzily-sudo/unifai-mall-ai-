# ⚡ Quick Start - UnifAI Mall

## 🚀 התחלה ב-3 שלבים

### 1️⃣ בדוק שהכל תקין

**Windows:**
```bash
CHECK_ALL_PLATFORMS.bat
```

**Mac/Linux:**
```bash
npm run verify
```

---

### 2️⃣ בחר פלטפורמה

#### 🌐 Web (הכי מהיר)
```bash
npm run dev
```
→ פותח ב: `http://localhost:5173`

#### 🖥️ Desktop
```bash
npm run electron:dev
```
→ פותח חלון Native

#### 📱 Mobile
```bash
# Android
npx cap add android
npx cap sync android
npx cap open android

# iOS (Mac only)
npx cap add ios
npx cap sync ios
npx cap open ios
```

#### 🎯 תפריט אינטראקטיבי
```bash
START_ULTIMATE.bat
```

---

### 3️⃣ פתח ותעבוד!

הקוד נמצא ב:
- `src/` - קוד מקורי
- `frontend/src/` - מבנה מאורגן
- `electron/` - Desktop app
- `tests/` - בדיקות

---

## 📚 מסמכים חשובים

| מסמך | תיאור | קרא אם... |
|------|-------|----------|
| **READY_FOR_ALL_PLATFORMS.md** | סיכום מהיר | רוצה סקירה כללית |
| **PLATFORM_SETUP.md** | מדריך מפורט | רוצה פרטים מלאים |
| **ELECTRON_FIX.md** | תיקון Desktop | יש בעיה עם Electron |
| **DEPLOYMENT_GUIDE.md** | העלאה | מוכן להעלות לפרודקשן |
| **docs/** | תיעוד טכני | רוצה להבין לעומק |

---

## 🧪 בדיקות

```bash
npm test              # הכל
npm run test:unit     # רק Unit
npm run test:e2e      # רק E2E
```

---

## 🏗️ Build לפרודקשן

```bash
# Web
npm run build

# Desktop
npm run electron:build

# Mobile
npx cap sync
# אז פתח ב-Android Studio / Xcode
```

---

## 🆘 בעיות?

1. **קרא את השגיאה** - בדרך כלל היא מסבירה מה הבעיה
2. **הרץ:** `npm run verify` - יראה מה חסר
3. **חפש ב:** `PLATFORM_SETUP.md` - פתרונות לבעיות נפוצות
4. **נקה והתקן מחדש:**
   ```bash
   rm -rf node_modules
   npm install
   ```

---

## ⚡ פקודות מהירות

```bash
npm run dev              # Web dev
npm run electron:dev     # Desktop dev
npm test                 # Run tests
npm run build            # Build web
npm run electron:build   # Build desktop
npm run verify           # Check setup
START_ULTIMATE.bat       # Interactive menu
```

---

**זהו! עכשיו תתחיל לעבוד! 🚀**

