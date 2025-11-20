# 🌐 UnifAI Mall - Multi-Platform Setup Guide

## 📊 Platform Status

| Platform | Status | Ready for Production |
|----------|--------|---------------------|
| 🌐 **Web (Browser)** | ✅ Ready | Yes |
| 📱 **PWA (Installable)** | ✅ Ready | Yes |
| 🖥️ **Desktop (Electron)** | ✅ Fixed | Yes |
| 📱 **Mobile iOS** | ⚙️ Config Ready | Needs Xcode |
| 📱 **Mobile Android** | ⚙️ Config Ready | Needs Android SDK |

---

## 🚀 Quick Start - Choose Your Platform

### 1. 🌐 Web Development (Fastest)
```bash
npm run dev
# Opens: http://localhost:5173
```

### 2. 🖥️ Desktop App (Electron)
```bash
npm run electron:dev
# Opens: Native window
```

### 3. 📱 Mobile Preview (After setup)
```bash
# Android
npm run mobile:android

# iOS (Mac only)
npm run mobile:ios
```

---

## 📋 Prerequisites by Platform

### All Platforms
- ✅ Node.js 18+ 
- ✅ npm 9+
- ✅ Git

### Desktop (Electron)
- ✅ Already configured!
- No additional requirements

### Mobile (iOS)
- macOS computer
- Xcode 14+
- iOS Simulator or device
- Apple Developer account (for deployment)

### Mobile (Android)
- Android Studio
- Android SDK 29+
- Java JDK 11+
- Android device or emulator

---

## 🔧 Platform-Specific Setup

### 🌐 Web & PWA (Already Working!)

**Development:**
```bash
npm run dev
```

**Production Build:**
```bash
npm run build
npm run preview  # Test production build
```

**Deploy:**
```bash
# Vercel
npm run deploy:vercel

# Netlify
npm run deploy:netlify

# Docker
npm run docker:build
npm run docker:run
```

---

### 🖥️ Desktop (Electron) - Already Fixed!

**Development:**
```bash
npm run electron:dev
```

**Build for Your OS:**
```bash
# Windows
npm run electron:build:win

# macOS
npm run electron:build:mac

# Linux
npm run electron:build:linux

# All platforms
npm run electron:build
```

**Output:** `dist-electron/`
- Windows: `.exe`, `.exe` portable
- macOS: `.dmg`, `.zip`
- Linux: `.AppImage`, `.deb`, `.rpm`

---

### 📱 Mobile Setup

#### Initial Setup (One Time)

```bash
# 1. Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios

# 2. Initialize Capacitor (already configured)
# capacitor.config.json already exists!

# 3. Add platforms
npx cap add android
npx cap add ios

# 4. Sync web code to native projects
npx cap sync
```

#### Android Development

**Prerequisites:**
1. Install Android Studio from: https://developer.android.com/studio
2. Install Android SDK (API 29+)
3. Set ANDROID_HOME environment variable

**Steps:**
```bash
# 1. Build web app
npm run build

# 2. Sync to Android
npx cap sync android

# 3. Open in Android Studio
npx cap open android

# 4. In Android Studio:
#    - Click "Run" button
#    - Select device/emulator
#    - App will install and run
```

**Build APK:**
```bash
cd android
./gradlew assembleRelease
# APK: android/app/build/outputs/apk/release/app-release.apk
```

#### iOS Development (Mac Only)

**Prerequisites:**
1. macOS computer
2. Xcode from App Store
3. Xcode Command Line Tools

**Steps:**
```bash
# 1. Build web app
npm run build

# 2. Sync to iOS
npx cap sync ios

# 3. Open in Xcode
npx cap open ios

# 4. In Xcode:
#    - Select target device
#    - Click "Run" button
#    - App will build and run
```

**Build for App Store:**
```bash
# In Xcode:
# Product > Archive
# Then distribute to App Store
```

---

## 🧪 Testing by Platform

### Web
```bash
npm run test              # All tests
npm run test:unit         # Unit tests
npm run test:integration  # Integration tests
npm run test:e2e          # E2E tests
```

### Desktop
```bash
# Same as web, plus:
npm run electron:pack     # Test packaging
```

### Mobile
```bash
# Use native testing tools:
# Android: Android Studio > Run Tests
# iOS: Xcode > Product > Test
```

---

## 📦 Building for Production

### Web (Vercel/Netlify)
```bash
npm run build
# Output: dist/
# Size: ~500KB gzipped
```

### Desktop (All Platforms)
```bash
npm run electron:build
# Output: dist-electron/
# Size: ~100-200MB per platform
```

### Mobile
```bash
# Android
npm run mobile:build:android
# Output: android/app/build/outputs/apk/

# iOS
npm run mobile:build:ios
# Output: Via Xcode archive
```

---

## 🔄 Cross-Platform Development Workflow

### 1. Start Development
```bash
# Terminal 1: Web dev server
npm run dev

# Terminal 2: Watch tests
npm run test:watch

# Terminal 3 (optional): Electron
npm run electron:dev
```

### 2. Make Changes
- Edit code in `src/` or `frontend/src/`
- Hot reload works for web
- Electron needs restart (Ctrl+R in app)

### 3. Test
```bash
npm test
```

### 4. Build
```bash
npm run build              # Web
npm run electron:build     # Desktop
npx cap sync              # Mobile
```

---

## 🌍 Platform-Specific Features

### Web/PWA
✅ Service Worker offline support
✅ Installable on desktop/mobile
✅ Push notifications
✅ Background sync
✅ Share API
✅ Responsive design

### Desktop (Electron)
✅ Native menus
✅ System tray
✅ Auto-update
✅ File system access
✅ Native notifications
✅ Deep linking
✅ Custom protocols

### Mobile (Capacitor)
✅ Native UI components
✅ Camera access
✅ Geolocation
✅ Push notifications
✅ Biometric auth
✅ Native storage
✅ Share sheet

---

## 📂 Platform Files Overview

```
unifai-mall/
│
├── 🌐 Web/PWA
│   ├── src/                    # React source
│   ├── public/                 # Static assets
│   ├── dist/                   # Build output
│   ├── public/sw.js            # Service Worker
│   └── public/manifest.json    # PWA manifest
│
├── 🖥️ Desktop (Electron)
│   ├── electron/
│   │   ├── main.cjs           # Main process
│   │   └── preload.cjs        # Preload script
│   ├── electron-builder.json  # Build config
│   └── dist-electron/         # Build output
│
└── 📱 Mobile (Capacitor)
    ├── capacitor.config.json  # Capacitor config
    ├── android/               # Android project
    └── ios/                   # iOS project
```

---

## 🐛 Troubleshooting

### Web Issues

**White screen:**
```bash
# Check console for errors
# Verify .env file exists
npm run check-db
```

**Build fails:**
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Electron Issues

**App won't start:**
```bash
# Verify files exist
ls electron/main.cjs electron/preload.cjs

# Reinstall electron
npm install --save-dev electron
```

**Build fails:**
```bash
# Clean and rebuild
rm -rf dist dist-electron
npm run build
npm run electron:build
```

### Mobile Issues

**Sync fails:**
```bash
# Clean and sync
rm -rf android ios
npx cap add android
npx cap add ios
npx cap sync
```

**Build fails Android:**
```bash
cd android
./gradlew clean
./gradlew assembleDebug
```

**Build fails iOS:**
```bash
cd ios/App
pod install
# Then rebuild in Xcode
```

---

## ✅ Verification Checklist

### Before Development
- [ ] Node.js 18+ installed
- [ ] npm install completed
- [ ] .env file exists with Supabase credentials
- [ ] npm run dev works

### Before Desktop Build
- [ ] Web app builds successfully
- [ ] electron/main.cjs exists
- [ ] electron/preload.cjs exists
- [ ] npm run electron:dev works

### Before Mobile Build
- [ ] capacitor.config.json exists
- [ ] Android Studio / Xcode installed
- [ ] npx cap sync works
- [ ] Native project opens

### Before Production Deploy
- [ ] All tests pass
- [ ] npm run build succeeds
- [ ] Linter errors fixed
- [ ] Environment variables set
- [ ] Performance tested

---

## 🚀 Deployment Guides

### Web to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Desktop to GitHub Releases
```bash
# Tag release
git tag v1.0.0
git push origin v1.0.0

# GitHub Actions will:
# - Build for Windows, Mac, Linux
# - Create release
# - Upload binaries
```

### Mobile to App Stores

**Google Play:**
1. Build signed APK/AAB
2. Create app in Play Console
3. Upload APK/AAB
4. Fill store listing
5. Submit for review

**App Store:**
1. Archive in Xcode
2. Create app in App Store Connect
3. Upload archive
4. Fill store listing
5. Submit for review

---

## 📊 Performance Targets

| Platform | Load Time | Bundle Size | FPS |
|----------|-----------|-------------|-----|
| Web | < 2s | < 500KB | 60 |
| PWA | < 1s (cached) | - | 60 |
| Desktop | < 3s | ~150MB | 60 |
| Mobile | < 2s | ~50MB | 60 |

---

## 🔐 Security Checklist

- [ ] No API keys in code
- [ ] Environment variables used
- [ ] HTTPS only
- [ ] Input validation
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Content Security Policy
- [ ] Rate limiting

---

## 📞 Support

**Issues?**
- Check `ELECTRON_FIX.md` for Electron issues
- Check `DEPLOYMENT_GUIDE.md` for deployment
- Check `docs/` for detailed guides

**Still stuck?**
- GitHub Issues
- Email: support@unifai.com

---

*Last updated: November 2024*
*All platforms ready for production! 🎉*

