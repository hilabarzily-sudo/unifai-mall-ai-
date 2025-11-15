# התקנה והפעלה – UnifAI Screens

מדריך מהיר להתקנה ושימוש בקומפוננטות

---

## 📦 שיטה 1: התקנה מלאה (Vite + React)

### צעד 1: התקן dependencies

```bash
cd screens/
npm install
```

או עם yarn:

```bash
yarn install
```

### צעד 2: הפעל את השרת

```bash
npm run dev
```

הדפדפן ייפתח ב-`http://localhost:5173`

---

## 🚀 שיטה 2: שילוב בפרויקט קיים

### צעד 1: העתק את תיקיית `screens/`

```bash
cp -r screens/ your-project/src/components/unifai/
```

### צעד 2: התקן Tailwind CSS (אם עדיין לא מותקן)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### צעד 3: הגדר את `tailwind.config.js`

העתק את התצורה מ-`screens/tailwind.config.js` או הוסף:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/unifai/**/*.{js,jsx}",
  ],
  // ... שאר ההגדרות מהקובץ המקורי
}
```

### צעד 4: הוסף את Tailwind ל-CSS

ב-`src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### צעד 5: יבא קומפוננטה

```jsx
import SplashScreen from './components/unifai/01-SplashScreen';
import HomePage from './components/unifai/03-HomePage';

function App() {
  return (
    <>
      <SplashScreen onComplete={() => console.log('Done!')} />
      <HomePage isLoggedIn={false} />
    </>
  );
}
```

---

## 🎨 שיטה 3: Sketch / Figma

### Sketch (עם OS26 Kit):

1. **התקן Sketch2Code plugin** (אופציונלי)
2. **ייבוא ידני:**
   - פתח את הקובץ `Untitled.sketch`
   - צור Symbols מהקומפוננטות
   - השתמש ב-VISUAL_GUIDE.md כהתייחסות

3. **שימוש ב-OS26 Kit:**
   ```
   - Glassmorphism Styles מוכנים
   - Typography System
   - Color Palette
   - Button Components
   ```

### Figma:

1. **html.to.design plugin:**
   ```bash
   npm run build
   # העלה את ה-build ל-html.to.design
   ```

2. **Figma Import Plugin** - ייבא את ה-JSX

3. **ייצוא ידני:** השתמש ב-VISUAL_GUIDE.md

---

## 🧪 בדיקה מהירה

צור `test.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Tailwind CSS
import SplashScreen from './screens/01-SplashScreen';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SplashScreen onComplete={() => alert('Splash done!')} />
  </React.StrictMode>
);
```

---

## 📱 בדיקת Mobile

### Chrome DevTools:

```
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
בחר: iPhone 14 Pro / iPhone SE / iPad
```

### Responsive Breakpoints:

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

---

## 🔧 Troubleshooting

### בעיה: Tailwind לא עובד

**פתרון:**

```bash
# 1. וודא שה-content paths נכונים
# tailwind.config.js:
content: ["./src/**/*.{js,jsx}"]

# 2. הפעל מחדש את dev server
npm run dev
```

### בעיה: Glassmorphism לא נראה

**פתרון:**

```jsx
// וודא שיש backdrop-blur support:
<div className="backdrop-blur-xl bg-white/40">
  
// אם לא עובד, נסה:
<div style={{ 
  backdropFilter: 'blur(24px)',
  backgroundColor: 'rgba(255,255,255,0.4)'
}}>
```

### בעיה: Animations לא חלקות

**פתרון:**

```css
/* הוסף ל-index.css: */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 📚 Structure Overview

```
screens/
├── 01-SplashScreen.jsx          ← Start here
├── 02-AuthPopup.jsx             ← Auth logic
├── 03-HomePage.jsx              ← Main screen
├── ...                          ← Other screens
├── App.jsx                      ← Complete demo
├── README.md                    ← Documentation
├── VISUAL_GUIDE.md              ← Visual reference
├── INSTALLATION.md              ← This file
├── package.json                 ← Dependencies
└── tailwind.config.js           ← Tailwind config
```

---

## 🎯 Next Steps

1. ✅ הפעל את `App.jsx` לראות את כל ה-flow
2. ✅ התאם את הקומפוננטות לצרכים שלך
3. ✅ חבר ל-Backend API (Supabase)
4. ✅ הוסף State Management (Context / Redux)
5. ✅ Deploy (Vercel / Netlify)

---

## 🔗 Links

- **Tailwind CSS:** https://tailwindcss.com
- **OS26 Design:** https://os26.design
- **Glassmorphism:** https://glassmorphism.com
- **React Docs:** https://react.dev

---

## 💡 Tips

### Performance:

```jsx
// Use React.memo for heavy components
export default React.memo(HomePage);

// Lazy load screens
const ToolPage = lazy(() => import('./04-ToolPage'));
```

### Customization:

```jsx
// Override colors via props
<HomePage 
  theme={{
    primary: '#yourColor',
    glass: 'rgba(255,255,255,0.5)',
  }}
/>
```

---

**זקוק לעזרה? בדוק את README.md או VISUAL_GUIDE.md**

