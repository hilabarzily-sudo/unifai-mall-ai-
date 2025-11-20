# ⚡ UnifAI Screens - Quick Reference Card

**הכל שאת צריכה במבט אחד**

---

## 🚀 הרצה מהירה

```bash
cd /Users/hila/Desktop/mall_of_ai/unifai-mall/screens/
npm run dev
```

**זהו!** 🎉

---

## 📂 מיקום

```
/Users/hila/Desktop/mall_of_ai/unifai-mall/screens/
```

---

## 📱 14 המסכים

| # | Screen | File |
|---|--------|------|
| 1 | Splash | `01-SplashScreen.jsx` |
| 2 | Auth | `02-AuthPopup.jsx` |
| 3 | Home | `03-HomePage.jsx` |
| 4 | Tool | `04-ToolPage.jsx` |
| 5 | Examples | `05-ExamplesGrid.jsx` |
| 6 | Viewer | `06-ExampleViewer.jsx` |
| 7 | Prompt | `07-PromptRevealSheet.jsx` |
| 8 | WebView | `08-ToolWebView.jsx` |
| 9 | Favorites | `09-FavoritesPage.jsx` |
| 10 | Slider | `10-SavedPromptsSlider.jsx` |
| 11 | Search | `11-SearchPage.jsx` |
| 12 | Account | `12-AccountPage.jsx` |
| 13 | Settings | `13-AccountSettingsSheet.jsx` |
| 14 | Empty | `14-EmptyState.jsx` |

---

## 📚 תיעוד (קראי בסדר)

1. **START_HERE.md** ⭐
2. **RUN.md** 🚀
3. **VISUAL_GUIDE.md** 🎨
4. **CHECKLIST.md** ✅
5. **SUMMARY.md** 📊
6. **README.md** 📖

---

## 🎨 Glassmorphism Style

```css
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 16px-32px;
```

---

## 🎨 Colors (OS26)

```css
BG: #f6f7fb → #eef1f8 (gradient)
Glass: rgba(255,255,255, 0.4-0.8)
Border: rgba(255,255,255, 0.2-0.4)
Button: #111827 (gray-900)
```

---

## 🔧 Scripts

```bash
npm run dev      # Development
npm run build    # Production
npm run preview  # Preview build
```

---

## 🐛 Troubleshooting

```bash
# נקה והתקן מחדש
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 💡 Props Example

```jsx
<HomePage 
  isLoggedIn={true}
  onOpenAuth={() => {}}
  onOpenTool={(tool) => {}}
/>
```

---

## 📊 Stats

- **Files:** 28 total
- **Screens:** 14 components
- **Lines:** ~5,000
- **Framework:** React 18
- **Build:** Vite 5
- **CSS:** Tailwind 3

---

## ✅ Status

**🟢 READY FOR USE**

כל הקבצים תקינים, אין שגיאות, מוכן להרצה!

---

## 🎯 User Flow

```
Splash → Home → Tool/Search/Favorites/Account
         ↓
    Examples → Viewer → Prompt → WebView
```

---

**הדפס את זה ושמור לידך!** 📄

