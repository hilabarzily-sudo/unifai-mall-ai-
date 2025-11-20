# 🚀 UnifAI - Setup Guide

## 1️⃣ Environment Variables Setup

צור קובץ `.env` בשורש הפרויקט עם התוכן הבא:

```env
# API Keys (דוגמאות - החלף במפתחות שלך)
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
OPENAI_API_KEY=sk-proj-your-openai-key-here
OPENROUTER_API_KEY=sk-or-v1-your-openrouter-key-here

# Supabase (דוגמאות - החלף בערכים שלך מ-Supabase Dashboard)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Setup Supabase Database

1. עבור ל-Supabase Dashboard: https://supabase.com/dashboard
2. בחר את הפרויקט שלך
3. עבור ל-SQL Editor
4. הרץ את הקובץ `supabase-schema.sql`

## 4️⃣ Run Development Server

```bash
npm run dev
```

האפליקציה תפתח ב-http://localhost:3000

## 5️⃣ Features

✅ Authentication with Supabase (Google, Email)
✅ Real-time data from database
✅ Save favorites, prompts, examples
✅ Full CRUD operations
✅ Error handling & loading states
✅ Responsive design

## 🔧 Troubleshooting

### אם יש בעיות עם Supabase:
1. ודא ש-URL ו-ANON_KEY נכונים
2. ודא שה-Schema רץ בהצלחה
3. בדוק את הקונסול לשגיאות

### אם יש בעיות עם npm:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Next Steps

- קרא את `README.md` למידע מפורט
- קרא את `API_DOCS.md` לתיעוד API

