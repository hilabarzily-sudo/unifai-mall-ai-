# 📑 UnifAI Screens – Complete Index

**תיעוד מלא לכל הקבצים בפרויקט**

---

## 📂 מבנה הפרויקט

```
unifai-mall/screens/
│
├── 🎨 SCREEN COMPONENTS (14 files)
│   ├── 01-SplashScreen.jsx          # Splash screen with animation
│   ├── 02-AuthPopup.jsx             # Authentication popup
│   ├── 03-HomePage.jsx              # Home page (Wolt logic)
│   ├── 04-ToolPage.jsx              # Tool details page
│   ├── 05-ExamplesGrid.jsx          # Pinterest-style examples
│   ├── 06-ExampleViewer.jsx         # Sora-style example viewer
│   ├── 07-PromptRevealSheet.jsx    # Prompt reveal bottom sheet
│   ├── 08-ToolWebView.jsx           # Tool webview popup
│   ├── 09-FavoritesPage.jsx         # Favorites page
│   ├── 10-SavedPromptsSlider.jsx   # Saved prompts slider
│   ├── 11-SearchPage.jsx            # Universal search
│   ├── 12-AccountPage.jsx           # User account page
│   ├── 13-AccountSettingsSheet.jsx # Settings bottom sheet
│   └── 14-EmptyState.jsx            # Empty state component
│
├── 🚀 MAIN APP FILES
│   ├── App.jsx                      # Complete app with navigation
│   ├── main.jsx                     # React entry point
│   ├── index.html                   # HTML template
│   └── index.css                    # Global styles + Tailwind
│
├── ⚙️ CONFIGURATION
│   ├── package.json                 # Dependencies & scripts
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.js           # Tailwind + OS26 config
│   ├── postcss.config.js            # PostCSS configuration
│   └── .gitignore                   # Git ignore rules
│
└── 📚 DOCUMENTATION
    ├── INDEX.md                     # This file
    ├── README.md                    # Main documentation
    ├── VISUAL_GUIDE.md              # Visual screen reference
    └── INSTALLATION.md              # Setup instructions
```

---

## 🎯 Quick Start

### 1️⃣ התקנה
```bash
cd unifai-mall/screens/
npm install
```

### 2️⃣ הפעלה
```bash
npm run dev
```

### 3️⃣ פתיחה בדפדפן
```
http://localhost:3000
```

---

## 📋 רשימת Screens

| # | Screen | File | Description |
|---|--------|------|-------------|
| 1 | Splash | `01-SplashScreen.jsx` | מסך פתיחה (1.2s) |
| 2 | Auth | `02-AuthPopup.jsx` | התחברות/הרשמה |
| 3 | Home | `03-HomePage.jsx` | דף הבית דינמי |
| 4 | Tool | `04-ToolPage.jsx` | דף כלי מפורט |
| 5 | Examples | `05-ExamplesGrid.jsx` | גלריית דוגמאות |
| 6 | Viewer | `06-ExampleViewer.jsx` | צפייה בדוגמה |
| 7 | Prompt | `07-PromptRevealSheet.jsx` | גילוי פרומפט |
| 8 | WebView | `08-ToolWebView.jsx` | פתיחת כלי |
| 9 | Favorites | `09-FavoritesPage.jsx` | מועדפים |
| 10 | Prompts | `10-SavedPromptsSlider.jsx` | פרומפטים שמורים |
| 11 | Search | `11-SearchPage.jsx` | חיפוש |
| 12 | Account | `12-AccountPage.jsx` | חשבון משתמש |
| 13 | Settings | `13-AccountSettingsSheet.jsx` | הגדרות |
| 14 | Empty | `14-EmptyState.jsx` | מצב ריק |

---

## 🎨 Design System

### OS26 + Glassmorphism

```css
/* Glass Effect */
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 16px-32px;
box-shadow: 0 8px 32px rgba(31, 38, 135, 0.07);
```

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| BG Primary | `#f6f7fb` | Main background |
| BG Secondary | `#eef1f8` | Gradient end |
| Glass Light | `rgba(255,255,255,0.4)` | Cards |
| Glass Strong | `rgba(255,255,255,0.6)` | Active elements |
| Glass Intense | `rgba(255,255,255,0.8)` | Popups |
| Primary Dark | `#111827` (gray-900) | Buttons |
| Border | `rgba(255,255,255,0.2-0.4)` | Borders |

---

## 🔄 User Flow

```
┌──────────────┐
│   Splash     │ (1.2s auto)
└──────┬───────┘
       ↓
┌──────────────┐
│   Home Page  │ ←─────────────┐
└──────┬───────┘                │
       │                        │
  ┌────┴────┬─────┬─────┐      │
  ↓         ↓     ↓     ↓       │
Search   Tool  Favs  Account    │
          │                     │
     ┌────┴────┐                │
     ↓         ↓                │
  Example  WebView              │
     │                          │
     ↓                          │
  Prompt ────────────────────→ Tool
```

---

## 📦 Dependencies

### Production
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```

### Development
```json
{
  "@vitejs/plugin-react": "^4.2.1",
  "tailwindcss": "^3.4.0",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32",
  "vite": "^5.0.8"
}
```

---

## 🛠️ Scripts

```bash
# Development
npm run dev          # Start dev server (port 3000)

# Production
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## 📄 Documentation Files

### README.md
- מדריך ראשי
- Props reference לכל component
- דוגמאות שימוש
- TypeScript interfaces

### VISUAL_GUIDE.md
- תיעוד ויזואלי של כל screen
- ASCII art representations
- Navigation flow diagrams
- Design tokens

### INSTALLATION.md
- הוראות התקנה מפורטות
- 3 שיטות התקנה שונות
- Troubleshooting
- Tips & tricks

---

## 🎓 How to Use

### דוגמה בסיסית

```jsx
import SplashScreen from './01-SplashScreen';
import HomePage from './03-HomePage';

function MyApp() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onComplete={() => setShowSplash(false)} />
  ) : (
    <HomePage isLoggedIn={false} />
  );
}
```

### Flow מלא

ראה `App.jsx` לדוגמה מלאה עם:
- ✅ State management
- ✅ Navigation logic
- ✅ Auth triggers
- ✅ Bottom navigation
- ✅ All screen transitions

---

## 🧩 Component Categories

### 🎬 Screens (Full Pages)
1. SplashScreen
2. HomePage
3. ToolPage
4. ExamplesGrid
5. FavoritesPage
6. SearchPage
7. AccountPage

### 📱 Popups & Modals
1. AuthPopup
2. ExampleViewer
3. ToolWebView
4. PromptRevealSheet
5. AccountSettingsSheet

### 🧩 Sub-Components
1. SavedPromptsSlider
2. EmptyState

---

## 🔧 Customization

### עריכת צבעים

ערוך `tailwind.config.js`:

```javascript
colors: {
  'unifai': {
    bg: {
      primary: '#yourColor',
    },
  },
}
```

### עריכת אנימציות

ערוך `index.css`:

```css
@keyframes yourAnimation {
  /* ... */
}
```

---

## 📊 Statistics

- **Total Files:** 23
- **Screen Components:** 14
- **Configuration Files:** 5
- **Documentation Files:** 4
- **Lines of Code:** ~5,000
- **Design System:** OS26 + Glassmorphism
- **Framework:** React 18
- **Build Tool:** Vite 5
- **CSS Framework:** Tailwind CSS 3

---

## 🚀 Next Steps

1. **עיין ב-VISUAL_GUIDE.md** לראות את כל המסכים
2. **קרא את README.md** להבנה מעמיקה
3. **הרץ `App.jsx`** לראות את ה-demo המלא
4. **התאם אישית** לפרויקט שלך
5. **חבר ל-Backend** (Supabase / Firebase)
6. **Deploy** לפרודקשן

---

## 📞 Support

- **Documentation:** README.md, VISUAL_GUIDE.md, INSTALLATION.md
- **Design Reference:** OS26.design
- **Tailwind Docs:** tailwindcss.com
- **React Docs:** react.dev

---

## 📜 License

MIT License - Free to use and modify

---

## 🎉 Features Summary

✅ 14 Complete Screens  
✅ OS26 Design System  
✅ Glassmorphism Styling  
✅ Responsive Design  
✅ RTL Support (Hebrew)  
✅ Dark Mode Ready  
✅ Accessibility (ARIA)  
✅ Smooth Animations  
✅ Mock Data Included  
✅ TypeScript Ready  
✅ Production Ready  
✅ Vite + React 18  
✅ Tailwind CSS 3  

---

**Created for UnifAI | Spotify for AI Tools**  
**Version 1.0.0**  
**2024**

