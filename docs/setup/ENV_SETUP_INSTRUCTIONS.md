# 🔑 הוראות הגדרת קובץ .env

## ⚠️ חשוב מאוד!

לפני הרצת הפרויקט, צריך ליצור קובץ `.env` בשורש הפרויקט.

## 📝 צעדים:

### 1. צור קובץ בשם `.env` (ללא שום סיומת) בתיקייה:
```
D:\unifai-mall-ai--main\unifai-mall-ai--main\
```

### 2. העתק והדבק את התוכן הבא לתוך הקובץ:

```env
# API Keys (דוגמאות - החלף במפתחות שלך)
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
OPENAI_API_KEY=sk-proj-your-openai-key-here
OPENROUTER_API_KEY=sk-or-v1-your-openrouter-key-here

# Supabase (דוגמאות - החלף בערכים שלך מ-Supabase Dashboard)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. שמור את הקובץ

### 4. ודא שהקובץ נוצר נכון:
- הקובץ צריך להיקרא בדיוק `.env` (עם נקודה בהתחלה)
- הקובץ צריך להיות בתיקייה הראשית של הפרויקט
- הקובץ כבר מופיע ב-.gitignore ולא יעלה ל-Git

## ✅ בדיקה

אחרי יצירת הקובץ, הרץ:
```bash
npm run dev
```

אם הכל עובד, האפליקציה תפתח ב-http://localhost:3000

## ❌ אם יש שגיאה

אם אתה רואה שגיאה כמו:
```
Missing Supabase environment variables
```

זה אומר שהקובץ `.env` לא נוצר נכון או לא במיקום הנכון.

