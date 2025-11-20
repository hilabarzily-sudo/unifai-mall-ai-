# 📁 UnifAI Project Structure

**Professional Organization & File Hierarchy**

---

## 🎯 Project Overview

```
unifai-mall-ai/
│
├── 📱 APPLICATION                      # Main Application Code
│   ├── frontend/                       # Frontend application
│   ├── android/                        # Android native code
│   ├── ios/                           # iOS native code
│   ├── electron/                      # Electron desktop code
│   └── public/                        # Public assets
│
├── 🎨 DESIGN SYSTEM                    # Design & UI Assets
│   └── sketch-scripts/                # Sketch design scripts
│
├── 🔧 CONFIGURATION                    # Configuration Files
│   ├── capacitor.config.json
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── 📜 SCRIPTS                          # Build & Utility Scripts
│   ├── scripts/                       # Node.js scripts
│   └── *.bat                          # Windows batch files
│
├── 📚 DOCUMENTATION                    # Project Documentation
│   ├── docs/                          # Additional docs
│   ├── README.md
│   ├── INSTALLATION.md
│   ├── DEPLOYMENT_GUIDE.md
│   └── WEBVIEW_STATUS.md
│
└── 🧪 TESTING                          # Test Files
    └── tests/                         # Test suites
```

---

## 📂 Detailed Structure

### 1. 📱 Application Layer

```
unifai-mall-ai/
│
├── src/                                # Source Code
│   ├── components/                     # React Components
│   │   ├── 01-SplashScreen.jsx        # Screen components
│   │   ├── 02-AuthPopup.jsx
│   │   └── ...
│   │
│   ├── services/                       # Business Logic
│   │   ├── authService.js
│   │   ├── toolsService.js
│   │   ├── favoritesService.js
│   │   └── ...
│   │
│   ├── lib/                           # Libraries
│   │   └── supabase.js
│   │
│   ├── utils/                         # Utilities
│   │   └── dataTransformers.js
│   │
│   └── hooks/                         # Custom Hooks
│
├── frontend/                          # Frontend Build
│   ├── src/                           # Frontend source
│   └── README.md
│
├── App.jsx                            # Main App Component
├── main.jsx                           # React Entry Point
└── index.html                         # HTML Template
```

### 2. 📱 Mobile Platforms

```
├── android/                           # Android Platform
│   ├── app/
│   │   ├── src/
│   │   │   └── main/
│   │   │       ├── AndroidManifest.xml
│   │   │       └── res/
│   │   └── build.gradle
│   ├── gradle/
│   └── capacitor.settings.gradle
│
└── ios/                               # iOS Platform
    ├── App/
    │   ├── App/
    │   │   ├── Info.plist
    │   │   ├── Assets.xcassets/
    │   │   └── capacitor.config.json
    │   ├── App.xcodeproj/
    │   └── Podfile
    └── capacitor-cordova-ios-plugins/
```

### 3. 🖥️ Desktop Platform

```
├── electron/                          # Electron Desktop
│   ├── main.cjs                       # Main process
│   ├── preload.cjs                    # Preload script
│   └── electron-builder.json          # Build config
│
└── START_ELECTRON_CLEAN.bat          # Electron launcher
```

### 4. 🎨 Design System

```
└── sketch-scripts/                    # Sketch Design Scripts
    │
    ├── 📄 Documentation
    │   ├── INDEX.md                   # Project index
    │   ├── README.md                  # Complete guide
    │   ├── QUICK_START.md             # Quick start
    │   └── docs/                      # Additional docs
    │       ├── DESIGN_SYSTEM.md       # Design tokens
    │       ├── API_REFERENCE.md       # API docs
    │       ├── TROUBLESHOOTING.md     # Help guide
    │       └── CHANGELOG.md           # Version history
    │
    ├── 🎨 Design Assets
    │   └── assets/                    # Design tokens
    │       ├── colors.json            # Color palette
    │       ├── typography.json        # Typography
    │       └── spacing.json           # Spacing system
    │
    ├── 💡 Examples
    │   └── examples/                  # Usage examples
    │       ├── custom-colors-example.js
    │       ├── batch-run-example.js
    │       └── export-guide.md
    │
    └── 📱 Screen Scripts (14 files)
        ├── 01-SplashScreen.js
        ├── 02-AuthPopup.js
        ├── 03-HomePage.js
        ├── 04-ToolPage.js
        ├── 05-ExamplesGrid.js
        ├── 06-ExampleViewer.js
        ├── 07-PromptRevealSheet.js
        ├── 08-ToolWebView.js
        ├── 09-FavoritesPage.js
        ├── 10-SavedPromptsSlider.js
        ├── 11-SearchPage.js
        ├── 12-AccountPage.js
        ├── 13-AccountSettingsSheet.js
        └── 14-EmptyState.js
```

### 5. 🔧 Configuration Files

```
├── Configuration Files
│   ├── package.json                   # Dependencies & scripts
│   ├── package-lock.json              # Lock file
│   ├── capacitor.config.json          # Capacitor config
│   ├── vite.config.js                 # Vite bundler
│   ├── tailwind.config.js             # Tailwind CSS
│   ├── postcss.config.js              # PostCSS
│   ├── jest.config.js                 # Jest testing
│   ├── playwright.config.js           # E2E testing
│   ├── electron-builder.json          # Electron build
│   ├── docker-compose.yml             # Docker
│   ├── Dockerfile                     # Docker image
│   ├── vercel.json                    # Vercel deploy
│   ├── netlify.toml                   # Netlify deploy
│   ├── nginx.conf                     # Nginx config
│   └── .gitignore                     # Git ignore
│
└── Environment Files
    └── environments/
        ├── dev.env                    # Development
        ├── staging.env                # Staging
        └── prod.env                   # Production
```

### 6. 📜 Scripts & Automation

```
├── scripts/                           # Node.js Scripts
│   ├── populateToolsData.js          # Populate database
│   ├── checkDatabase.js              # Database checks
│   └── verify-setup.js               # Setup verification
│
└── Batch Scripts (.bat)               # Windows Scripts
    ├── START.bat                      # Start dev server
    ├── START_ELECTRON_CLEAN.bat       # Start Electron
    ├── START_MOBILE.bat               # Start mobile
    ├── CHECK_ALL_PLATFORMS.bat        # Check platforms
    ├── KILL_PORTS.bat                 # Kill processes
    ├── QUICK_SDK_FIX.bat              # Fix Android SDK
    ├── SETUP_ANDROID_SDK.bat          # Setup Android
    └── SETUP_MOBILE_QUICK.bat         # Quick mobile setup
```

### 7. 📚 Documentation

```
└── Documentation Files
    ├── Core Documentation
    │   ├── README.md                  # Main readme
    │   ├── README_DOCS.md             # Docs overview
    │   ├── README_PRODUCTION.md       # Production guide
    │   ├── INDEX.md                   # Index
    │   └── SUMMARY.md                 # Summary
    │
    ├── Setup Guides
    │   ├── INSTALLATION.md            # Installation
    │   ├── SETUP.md                   # Setup guide
    │   ├── QUICK_START.md             # Quick start
    │   ├── START_HERE.md              # Getting started
    │   ├── START_GUIDE.md             # Start guide
    │   └── RUN.md                     # Run instructions
    │
    ├── Platform Guides
    │   ├── MOBILE_SETUP_GUIDE.md      # Mobile setup
    │   ├── PLATFORM_SETUP.md          # Platform setup
    │   ├── ELECTRON.md                # Electron guide
    │   ├── ELECTRON_FIX.md            # Electron fixes
    │   └── ELECTRON_FIXES.md          # More fixes
    │
    ├── Deployment
    │   ├── DEPLOYMENT_GUIDE.md        # Deploy guide
    │   ├── MARKETPLACE_UPGRADE_GUIDE.md
    │   └── ENV_SETUP_INSTRUCTIONS.md  # Environment
    │
    ├── Status & Progress
    │   ├── WEBVIEW_STATUS.md          # WebView status
    │   ├── FINAL_STATUS.md            # Final status
    │   ├── FINAL_SETUP_COMPLETE.md    # Setup complete
    │   └── READY_FOR_ALL_PLATFORMS.md # Platform ready
    │
    ├── Reference
    │   ├── QUICK_REFERENCE.md         # Quick ref
    │   ├── PROJECT_STRUCTURE.md       # This file
    │   ├── ARCHITECTURE.md            # Architecture
    │   ├── COMPLETE_GUIDE.md          # Complete guide
    │   ├── VISUAL_GUIDE.md            # Visual guide
    │   ├── CHECKLIST.md               # Checklist
    │   ├── CHANGELOG.md               # Changes
    │   └── CONTRIBUTING.md            # Contributing
    │
    └── Additional
        ├── LAUNCHERS_SUMMARY.md       # Launchers
        ├── LAUNCHER_COMPARISON.md     # Comparison
        ├── TESTING.md                 # Testing
        ├── docs/                      # More docs
        └── ✅_CREATED_FILES_✅.md     # Created files
```

### 8. 🧪 Testing

```
└── tests/                             # Test Suites
    ├── __mocks__/                     # Mock files
    ├── unit/                          # Unit tests
    ├── integration/                   # Integration tests
    ├── e2e/                           # E2E tests
    └── setup.js                       # Test setup
```

### 9. 🌐 Public Assets

```
└── public/                            # Public Assets
    ├── icons/                         # App icons
    │   ├── icon-16x16.png
    │   ├── icon-32x32.png
    │   ├── icon-48x48.png
    │   ├── icon-64x64.png
    │   ├── icon-96x96.png
    │   ├── icon-128x128.png
    │   ├── icon-192x192.png
    │   ├── icon-256x256.png
    │   ├── icon-512x512.png
    │   └── README.md
    │
    ├── capacitor.config.ts            # Capacitor config
    ├── manifest.json                  # PWA manifest
    └── sw.js                          # Service worker
```

### 10. 📦 Build Output

```
└── dist/                              # Production Build
    ├── assets/                        # Bundled assets
    │   ├── index-*.css                # Compiled CSS
    │   ├── index-*.js                 # Compiled JS
    │   └── vendor-*.js                # Vendor bundles
    │
    ├── icons/                         # Optimized icons
    ├── index.html                     # Entry HTML
    ├── manifest.json                  # PWA manifest
    └── sw.js                          # Service worker
```

---

## 📊 File Count Summary

| Category | Count | Notes |
|----------|-------|-------|
| **Screen Components** | 14 | Main UI screens |
| **Services** | 6 | Business logic |
| **Scripts** | 14+ | Sketch + Node.js |
| **Batch Files** | 10+ | Windows automation |
| **Documentation** | 35+ | Guides & references |
| **Config Files** | 15+ | Various configs |
| **Test Files** | 6 | Testing suite |

**Total Project Files:** 100+ files

---

## 🎯 Quick Navigation

### For Developers

| Task | Location |
|------|----------|
| **Start Development** | `START.bat` or `npm run dev` |
| **Main App Component** | `App.jsx` |
| **Services** | `src/services/` |
| **Screen Components** | `01-SplashScreen.jsx` - `14-EmptyState.jsx` |
| **Configuration** | Root `*.config.js` files |

### For Designers

| Task | Location |
|------|----------|
| **Design Scripts** | `sketch-scripts/` |
| **Design System** | `sketch-scripts/docs/DESIGN_SYSTEM.md` |
| **Color Palette** | `sketch-scripts/assets/colors.json` |
| **Typography** | `sketch-scripts/assets/typography.json` |
| **Examples** | `sketch-scripts/examples/` |

### For DevOps

| Task | Location |
|------|----------|
| **Build Scripts** | `scripts/` |
| **CI/CD Config** | `vercel.json`, `netlify.toml` |
| **Docker** | `Dockerfile`, `docker-compose.yml` |
| **Environment** | `environments/*.env` |
| **Deployment** | `DEPLOYMENT_GUIDE.md` |

---

## 🏢 Enterprise Organization

This project follows **enterprise-grade** organizational patterns:

### ✅ Separation of Concerns
- **Frontend** separated from **Backend**
- **Native code** isolated in platform folders
- **Design** separated in dedicated folder
- **Documentation** comprehensive and organized

### ✅ Scalability
- Modular component structure
- Service-based architecture
- Reusable design tokens
- Platform-specific optimizations

### ✅ Maintainability
- Clear naming conventions
- Comprehensive documentation
- Version control friendly
- Easy onboarding for new team members

### ✅ Professional Standards
- Industry-standard tooling
- Best practices throughout
- Complete CI/CD setup
- Production-ready configuration

---

## 📈 Growth Path

```
Current Structure
      ↓
  Add Features
      ↓
Scale Services
      ↓
 Microservices
      ↓
Enterprise Ready
```

The structure supports growth from startup to enterprise scale.

---

**Maintained by: UnifAI Development Team**  
**Last Updated: November 17, 2024**  
**Version: 1.0.0**
