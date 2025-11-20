# 📱 UnifAI Mobile - מדריך התקנה והרצה

## 🎯 סקירה כללית

האפליקציה תומכת ב:
- 🤖 **אנדרואיד** (Android 7.0+)
- 🍎 **iOS** (iOS 13.0+)

---

## ✅ דרישות מקדימות

### לפיתוח אנדרואיד:
1. **Node.js** (v18 או חדש יותר)
2. **Android Studio** (Arctic Fox או חדש יותר)
3. **Java JDK** (גרסה 17 או 21)
4. **Android SDK** (API 33 ומעלה)

### לפיתוח iOS (רק macOS):
1. **macOS** (Ventura או חדש יותר)
2. **Xcode** (14.0 או חדש יותר)
3. **CocoaPods** (`sudo gem install cocoapods`)
4. **Node.js** (v18 או חדש יותר)

---

## 🚀 התקנה מהירה

### שלב 1: התקן את התלויות
```bash
npm install
```

### שלב 2: בנה את האפליקציה
```bash
npm run build
```

### שלב 3: הוסף פלטפורמות
```bash
# אנדרואיד
npx cap add android

# iOS (רק על macOS)
npx cap add ios
```

### שלב 4: סנכרן
```bash
npx cap sync
```

---

## 🤖 פיתוח על אנדרואיד

### פתיחת הפרויקט ב-Android Studio:
```bash
npx cap open android
```

או השתמש ב-launcher:
```bash
START_MOBILE.bat
# ובחר אפשרות 1
```

### הרצה על אמולטור/מכשיר:
1. פתח Android Studio
2. הפעל אמולטור או חבר מכשיר
3. לחץ על "Run" (Shift+F10)

### או מ-Command Line:
```bash
cd android
gradlew installDebug
```

---

## 🍎 פיתוח על iOS (macOS בלבד)

### פתיחת הפרויקט ב-Xcode:
```bash
npx cap open ios
```

### התקנת Pod dependencies:
```bash
cd ios/App
pod install
```

### הרצה על סימולטור/מכשיר:
1. פתח את `ios/App/App.xcworkspace` ב-Xcode
2. בחר סימולטור או מכשיר
3. לחץ על Run (⌘R)

---

## 🔄 תהליך פיתוח

### כל פעם שאתה משנה קוד:

#### אופציה 1: Hot Reload (מומלץ למובייל)
```bash
# הרץ dev server
npm run dev

# בקובץ capacitor.config.json, הוסף:
{
  "server": {
    "url": "http://YOUR_LOCAL_IP:5174",
    "cleartext": true
  }
}

# סנכרן
npx cap sync
```

#### אופציה 2: Build מלא
```bash
# בנה
npm run build

# סנכרן
npx cap sync

# פתח ב-IDE
npx cap open android  # או ios
```

---

## 📱 בדיקה על מכשיר אמיתי

### אנדרואיד:
1. הפעל "Developer Options" במכשיר
2. הפעל "USB Debugging"
3. חבר למחשב דרך USB
4. הרץ `adb devices` לוודא חיבור
5. הרץ מ-Android Studio

### iOS:
1. חבר iPhone/iPad למק
2. סמן על המכשיר ב-Xcode
3. "Trust" את המחשב במכשיר
4. הרץ מ-Xcode

---

## 🛠️ פקודות שימושיות

```bash
# בדוק גרסת Capacitor
npx cap --version

# סנכרן שינויים
npx cap sync

# סנכרן פלטפורמה ספציפית
npx cap sync android
npx cap sync ios

# עדכן Capacitor
npm install @capacitor/cli@latest @capacitor/core@latest
npm install @capacitor/android@latest @capacitor/ios@latest

# הסר ובנה מחדש פלטפורמה
npx cap sync android --deployment
npx cap sync ios --deployment

# בדוק בעיות
npx cap doctor
```

---

## 🐛 פתרון בעיות נפוצות

### בעיה: "Build failed" באנדרואיד
**פתרון:**
1. פתח `android/gradle.properties`
2. הוסף: `org.gradle.jvmargs=-Xmx2048m`
3. נקה build: `cd android && ./gradlew clean`

### בעיה: "Pod install failed" ב-iOS
**פתרון:**
```bash
cd ios/App
pod deintegrate
pod install --repo-update
```

### בעיה: "CORS errors" במובייל
**פתרון:**
ה-API של Supabase כבר מוגדר נכון ב-`capacitor.config.json`

### בעיה: אייקונים לא מופיעים
**פתרון:**
```bash
# השתמש ב-Capacitor Assets (אופציונלי)
npm install @capacitor/assets --save-dev
npx capacitor-assets generate
```

---

## 📦 בניה ל-Production

### אנדרואיד (APK):
```bash
cd android
./gradlew assembleRelease
# קובץ ב: android/app/build/outputs/apk/release/app-release.apk
```

### אנדרואיד (AAB - ל-Play Store):
```bash
cd android
./gradlew bundleRelease
# קובץ ב: android/app/build/outputs/bundle/release/app-release.aab
```

### iOS (ל-App Store):
1. פתח Xcode
2. Product → Archive
3. Distribute App → App Store Connect

---

## 🎨 התאמה אישית

### שינוי שם האפליקציה:
ערוך `capacitor.config.json`:
```json
{
  "appName": "UnifAI Mall"
}
```

### שינוי App ID:
```json
{
  "appId": "com.unifai.mall"
}
```

### שינוי אייקון:
החלף את הקבצים ב-`public/icons/` והרץ:
```bash
npx cap sync
```

---

## 📱 תכונות מובייל מיוחדות

האפליקציה משתמשת ב-Capacitor Plugins:

- **SplashScreen** - מסך פתיחה
- **StatusBar** - עיצוב שורת הסטטוס
- **Keyboard** - ניהול מקלדת
- **Push Notifications** - התראות (עתידי)

---

## 🔐 אבטחה

- כל הקריאות ל-API דרך HTTPS
- Supabase מטפל באימות
- אין שמירת מידע רגיש במכשיר (מלבד tokens)

---

## 📊 Performance

- **גודל APK**: ~15-20MB
- **גודל IPA**: ~20-25MB
- **זמן טעינה**: <2 שניות
- **תמיכה באופליין**: חלקית (Service Worker)

---

## 🆘 עזרה נוספת

- [Capacitor Docs](https://capacitorjs.com/docs)
- [Android Developer Guides](https://developer.android.com/)
- [iOS Developer Guides](https://developer.apple.com/)

---

## ✅ Checklist לפרסום

### לפני פרסום ל-Play Store:
- [ ] חתום את ה-APK/AAB
- [ ] בדוק על מכשירים שונים
- [ ] הכן screenshots
- [ ] כתוב תיאור אפליקציה
- [ ] הגדר מדיניות פרטיות
- [ ] בדוק permissions

### לפני פרסום ל-App Store:
- [ ] הכן certificates
- [ ] צור App ID ב-Apple Developer
- [ ] הכן screenshots (כל הגדלים)
- [ ] כתוב תיאור בעברית ואנגלית
- [ ] הגדר In-App Purchases (אם יש)
- [ ] בדוק על iPhone ו-iPad

---

**🎉 מוכן! עכשיו תוכל להריץ את האפליקציה על אנדרואיד ו-iOS!**

