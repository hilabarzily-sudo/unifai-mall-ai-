# 🚀 UnifAI - איך להתחיל

## ⚡ הפעלה מהירה (מומלץ)

### אפשרות 1: לחיצה כפולה על קובץ BAT

```
🟢 START_QUICK.bat
```
- פותח את Frontend בדפדפן
- מתחבר ל-Backend (Supabase)
- **הכי פשוט וקל!**

---

### אפשרות 2: הפעלה עם בדיקות מלאות

```
🔵 START_FRONTEND_BACKEND.bat
```
- בודק ומנקה תהליכים ישנים
- בודק קובץ `.env`
- בודק חיבור ל-Supabase
- פותח את Frontend

---

### אפשרות 3: דרך Terminal

```bash
npm run dev
```
או
```bash
npm start
```
או
```bash
npm run start:all
```

---

## 🌐 כתובות

| שירות | כתובת | תיאור |
|-------|--------|-------|
| **Frontend** | http://localhost:5174 | האתר הראשי |
| **Backend** | https://qdcovbyzaapgfamcplrt.supabase.co | Supabase (Cloud) |

---

## 🔧 פתרון בעיות

### הדפדפן לא נפתח?
פתח ידנית: http://localhost:5174

### אין נתונים באתר?
1. וודא שקובץ `.env` קיים ב-`frontend/`
2. הרץ: `npm run test:connection`
3. בדוק Console (F12) בדפדפן

### Port 5174 תפוס?
הרץ: `KILL_PORTS.bat`

---

## 📊 בדיקת חיבור לדאטהבייס

```bash
npm run test:connection
```

זה יבדוק:
- ✅ חיבור ל-Supabase
- ✅ גישה לטבלאות
- ✅ כמות נתונים

---

## 🛑 עצירת השרת

לחץ `Ctrl + C` בחלון Terminal

---

## 📱 פלטפורמות אחרות

### Electron (Desktop):
```
START_ELECTRON_CLEAN.bat
```

### Mobile:
```
START_MOBILE.bat
```

---

## 🆘 קיבלת שגיאה?

1. **בדוק שיש .env:**
   - צריך להיות ב-`frontend/.env`
   - צריך להכיל `VITE_SUPABASE_URL` ו-`VITE_SUPABASE_ANON_KEY`

2. **הרץ בדיקה:**
   ```bash
   npm run test:connection
   ```

3. **נקה תהליכים:**
   ```
   KILL_PORTS.bat
   ```

4. **התקן מחדש:**
   ```bash
   npm install
   ```

---

**✨ זהו! עכשיו פשוט לחץ על `START_QUICK.bat` ותתחיל לעבוד! 🚀**

