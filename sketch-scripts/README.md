# 🎨 UnifAI Sketch Scripts Collection

**14 סקריפטים מקצועיים ליצירת מסכי UnifAI ב-Sketch**

ברוכים הבאים! זהו אוסף מלא של סקריפטים שמאפשר לך ליצור את כל 14 המסכים של אפליקציית UnifAI ישירות ב-Sketch באמצעות JavaScript API.

---

## 📋 תוכן עניינים

- [מה זה?](#מה-זה)
- [דרישות](#דרישות)
- [איך להשתמש](#איך-להשתמש)
- [רשימת הסקריפטים](#רשימת-הסקריפטים)
- [מערכת העיצוב](#מערכת-העיצוב)
- [שאלות נפוצות](#שאלות-נפוצות)

---

## 🎯 מה זה?

אוסף של 14 קבצי JavaScript שמשתמשים ב-**Sketch JavaScript API** כדי ליצור אוטומטית:

- ✅ Artboards עם מידות מדויקות
- ✅ שכבות Glassmorphism עם Blur effects
- ✅ טקסטים בפונט נכון ובגדלים מדויקים
- ✅ אייקונים ואמוג'ים
- ✅ כפתורים וקלטים
- ✅ גרדיאנטים וצללים

**הכל לפי מערכת העיצוב OS26 + Glassmorphism!**

---

## 💻 דרישות

לפני שמתחילים, ודא שיש לך:

1. **Sketch** גרסה 53 ומעלה (מומלץ גרסה עדכנית)
2. **macOS** - Sketch פועל רק על Mac
3. הקבצים הורדו למחשב שלך

---

## 🚀 איך להשתמש

### שלב 1: פתיחת Sketch
פתח את אפליקציית Sketch על המק שלך.

### שלב 2: הרצת סקריפט
יש **שתי דרכים** להריץ סקריפט:

#### דרך א': Run Script (מומלץ)
```
1. לך לתפריט: Plugins > Run Script...
2. או השתמש בקיצור: Control + Shift + K
3. בחר את הקובץ שרוצה להריץ (למשל: 01-SplashScreen.js)
4. לחץ Run
```

#### דרך ב': Copy & Paste
```
1. פתח את הקובץ בעורך טקסט
2. העתק את כל הקוד (Cmd + A, Cmd + C)
3. ב-Sketch: Plugins > Run Script...
4. הדבק את הקוד (Cmd + V)
5. לחץ Run
```

### שלב 3: הסקריפט יוצר את המסך!
✨ תוך שניות ייווצר Artboard חדש עם כל האלמנטים במקום הנכון!

---

## 📱 רשימת הסקריפטים

| # | קובץ | מסך | תיאור |
|---|------|-----|-------|
| 01 | `01-SplashScreen.js` | Splash Screen | מסך פתיחה עם לוגו ואנימציה |
| 02 | `02-AuthPopup.js` | Auth Popup | התחברות/הרשמה עם Google, Apple, Email |
| 03 | `03-HomePage.js` | Home Page | דף בית עם פילטרים וכרטיסי כלים |
| 04 | `04-ToolPage.js` | Tool Page | עמוד כלי מפורט בסגנון App Store |
| 05 | `05-ExamplesGrid.js` | Examples Grid | גלריה בסגנון Pinterest |
| 06 | `06-ExampleViewer.js` | Example Viewer | תצוגת דוגמה בסגנון Sora |
| 07 | `07-PromptRevealSheet.js` | Prompt Reveal | Bottom sheet לפרומפטים |
| 08 | `08-ToolWebView.js` | Tool WebView | מסך פתיחת כלי |
| 09 | `09-FavoritesPage.js` | Favorites | עמוד מועדפים |
| 10 | `10-SavedPromptsSlider.js` | Prompts Slider | סליידר פרומפטים שמורים |
| 11 | `11-SearchPage.js` | Search | עמוד חיפוש אוניברסלי |
| 12 | `12-AccountPage.js` | Account | עמוד חשבון בסגנון App Store |
| 13 | `13-AccountSettingsSheet.js` | Settings | Bottom sheet הגדרות |
| 14 | `14-EmptyState.js` | Empty State | מצב ריק למצבים שונים |

---

## 🎨 מערכת העיצוב

כל הסקריפטים משתמשים במערכת עיצוב אחידה:

### 🎨 צבעים (OS26 + Glassmorphism)

```javascript
const COLORS = {
  // Backgrounds
  bg: '#f6f7fb',
  bgGradientEnd: '#eef1f8',
  
  // Glass Effects
  glass: 'rgba(255, 255, 255, 0.4)',
  glassWhite30: 'rgba(255, 255, 255, 0.3)',
  glassBorder: 'rgba(255, 255, 255, 0.2)',
  
  // Text
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  
  // Buttons
  buttonPrimary: '#111827',
  buttonWhite: 'rgba(255, 255, 255, 0.8)',
};
```

### 📐 מידות סטנדרטיות

```javascript
// Artboards
Mobile: 390 × 844 (iPhone 14 Pro)
Wide: 800 × 600 (לקומפוננטות רחבות)

// Border Radius
Cards: 16-32px
Buttons: 12-16px
Inputs: 12-16px
Modals: 24-40px

// Shadows
Elevation 1: blur: 8, y: 2
Elevation 2: blur: 16, y: 4
Elevation 3: blur: 24, y: 8
Elevation 4: blur: 48, y: 24
```

### 📝 טיפוגרפיה

```javascript
// Headings
H1: 32px, fontWeight: 700
H2: 24px, fontWeight: 600
H3: 20px, fontWeight: 600
H4: 18px, fontWeight: 600

// Body
Body Large: 16px
Body Regular: 14-15px
Body Small: 13px
Caption: 11-12px

// Alignment
RTL Support: כל הטקסטים תומכים בעברית
```

### 🔲 אפקטי Glassmorphism

כל כרטיס כולל:
- `background: rgba(255, 255, 255, 0.4)`
- `backdrop-filter: blur(24px)`
- `border: 1px solid rgba(255, 255, 255, 0.2)`
- `box-shadow: 0 8px 24px rgba(0,0,0,0.1)`

---

## ⚡ טיפים לשימוש

### 1️⃣ **הרץ סקריפטים לפי הסדר**
מומלץ להתחיל מ-01 ולהמשיך עד 14 - זה יארגן את ה-Artboards יפה ב-Sketch.

### 2️⃣ **ארגון ב-Pages**
אפשר ליצור Pages נפרדים ב-Sketch:
- Page 1: Main Screens (01-06)
- Page 2: Sheets & Popups (07-08, 13)
- Page 3: Content Pages (09-12)
- Page 4: Components (14)

### 3️⃣ **התאמה אישית**
כל הקוד מתועד ומסודר! אפשר בקלות:
- לשנות צבעים (משתנה `COLORS` בתחילת כל קובץ)
- לשנות מידות (משתנה `SIZES`)
- להוסיף אלמנטים חדשים

### 4️⃣ **Export לצורכי Development**
לאחר יצירת כל המסכים:
```
1. בחר Artboard
2. File > Export...
3. בחר פורמט (PNG, SVG, PDF)
4. Export!
```

---

## 🔧 התאמה אישית

### שינוי צבעים
בכל קובץ, בתחילה יש אוביקט `COLORS`. שנה אותו:

```javascript
const COLORS = {
  bg: '#YOUR_COLOR',              // הרקע שלך
  glass: 'rgba(R, G, B, 0.4)',   // הזכוכית שלך
  textPrimary: '#YOUR_TEXT',     // הטקסט שלך
  // ...
};
```

### שינוי מידות
חפש את `SIZES` או מידות ישירות:

```javascript
const SIZES = {
  artboardWidth: 390,   // שנה ל-414 ל-iPhone Plus
  artboardHeight: 844,  // שנה לפי הצורך
  // ...
};
```

### הוספת אלמנטים
כל אלמנט נוצר עם:

```javascript
// דוגמה: יצירת כפתור חדש
new Shape({
  name: 'My Button',
  frame: { x: 100, y: 200, width: 150, height: 44 },
  style: {
    fills: [{ color: '#111827' }],
    borderRadius: 12,
  },
  parent: artboard,
});

new Text({
  name: 'Button Text',
  text: 'לחץ כאן',
  frame: { x: 100, y: 210, width: 150, height: 24 },
  style: {
    textColor: '#FFFFFF',
    fontSize: 14,
    fontWeight: 600,
    alignment: Text.Alignment.center,
  },
  parent: artboard,
});
```

---

## ❓ שאלות נפוצות (FAQ)

### ❓ הסקריפט לא עובד - מה לעשות?
**תשובה:**
1. ודא ש-Sketch מעודכן (גרסה 53+)
2. בדוק שהקוד הועתק במלואו
3. הרץ רק סקריפט אחד בכל פעם
4. סגור והפעל מחדש את Sketch

### ❓ האם אפשר לערוך את האלמנטים שנוצרו?
**תשובה:** כן! כל אלמנט שנוצר הוא אובייקט Sketch רגיל. אפשר:
- לשנות צבעים
- להזיז ולשנות גודל
- למחוק או להוסיף
- לעשות כל דבר כמו עבודה רגילה ב-Sketch

### ❓ האם הסקריפטים עובדים ב-Figma?
**תשובה:** לא. הסקריפטים האלה נכתבו עבור Sketch JavaScript API ולא יעבדו ב-Figma. עבור Figma צריך לכתוב plugins שונים.

### ❓ איך אני יכול לראות את כל המסכים ביחד?
**תשובה:**
1. הרץ את כל 14 הסקריפטים
2. לך ל: View > Canvas > Zoom to Fit All
3. או: Cmd + 1

### ❓ האם אפשר להריץ את כל הסקריפטים בבת אחת?
**תשובה:** לא ישירות. אבל אפשר ליצור Sketch Plugin שיריץ את כולם.

---

## 📊 מבנה הקבצים

```
sketch-scripts/
├── README.md                           # הקובץ הזה
├── 01-SplashScreen.js                  # מסך פתיחה
├── 02-AuthPopup.js                     # התחברות
├── 03-HomePage.js                      # דף בית
├── 04-ToolPage.js                      # דף כלי
├── 05-ExamplesGrid.js                  # גלריה
├── 06-ExampleViewer.js                 # צפייה בדוגמה
├── 07-PromptRevealSheet.js             # פרומפט
├── 08-ToolWebView.js                   # WebView
├── 09-FavoritesPage.js                 # מועדפים
├── 10-SavedPromptsSlider.js            # סליידר
├── 11-SearchPage.js                    # חיפוש
├── 12-AccountPage.js                   # חשבון
├── 13-AccountSettingsSheet.js          # הגדרות
└── 14-EmptyState.js                    # מצב ריק
```

---

## 🎓 למידה נוספת

### Sketch JavaScript API
- [מדריך רשמי](https://developer.sketch.com/reference/api/)
- [דוגמאות](https://github.com/sketch-hq/SketchAPI/tree/develop/examples)
- [קהילה](https://sketchplugins.com/)

### OS26 Design System
- [אתר רשמי](https://os26.design)
- [Figma Community](https://www.figma.com/community/search?model_type=files&q=os26)

---

## 🎉 סיימת!

**כל הכבוד!** עכשיו יש לך את כל 14 המסכים של UnifAI ב-Sketch, מוכנים לעיצוב, התאמה אישית, ו-export!

### מה עושים עכשיו?

1. ✅ הרץ את כל הסקריפטים
2. ✅ התאם את הצבעים למותג שלך
3. ✅ הוסף תוכן אמיתי (טקסטים, תמונות)
4. ✅ Export לצוות הפיתוח
5. ✅ תהנה מהתוצאה!

---

## 📝 רישיון

הסקריפטים האלה נוצרו עבור פרויקט **UnifAI**.  
אפשר להשתמש, לשנות, ולשתף בחופשיות!

---

## 💌 יצירת קשר

יש שאלות? רעיונות? בעיות?  
פתח Issue או צור קשר!

---

**בהצלחה בעיצוב! 🚀**

**Built with ❤️ for UnifAI**  
**OS26 Design System + Glassmorphism**  
**Version 1.0.0**

