@echo off
chcp 65001 >nul
cls

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║      📱 UnifAI - Mobile App Setup & Launcher 📱              ║
echo ║               Android + iOS                                   ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

:: Check Node.js
echo [1/6] 🔍 Checking Node.js...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not installed!
    pause
    exit /b 1
)
echo ✅ Node.js installed
echo.

:: Check npm
echo [2/6] 🔍 Checking npm...
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm not installed!
    pause
    exit /b 1
)
echo ✅ npm installed
echo.

:: Check if node_modules exists
echo [3/6] 🔍 Checking dependencies...
if not exist "node_modules\" (
    echo ⚠️  Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Dependency installation failed!
        pause
        exit /b 1
    )
)
echo ✅ Dependencies installed
echo.

:: Build the app
echo [4/6] 🏗️  Building app...
echo ℹ️  This may take 1-2 minutes...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)
echo ✅ Build complete!
echo.

:: Initialize Capacitor projects if they don't exist
echo [5/6] 🔧 Preparing mobile platforms...

if not exist "android\" (
    echo 📱 Creating Android project...
    call npx cap add android
    if %errorlevel% neq 0 (
        echo ❌ Android project creation failed!
        pause
        exit /b 1
    )
    echo ✅ Android project created!
) else (
    echo ✅ Android project exists
)

if not exist "ios\" (
    echo 🍎 Creating iOS project...
    call npx cap add ios
    if %errorlevel% neq 0 (
        echo ❌ iOS project creation failed!
        echo ⚠️  iOS can only be created on macOS
        echo ℹ️  Continuing with Android only...
    ) else (
        echo ✅ iOS project created!
    )
) else (
    echo ✅ iOS project exists
)
echo.

:: Sync with Capacitor
echo [6/6] 🔄 Syncing with Capacitor...
call npx cap sync
if %errorlevel% neq 0 (
    echo ⚠️  Sync error
)
echo ✅ Sync complete!
echo.

:: Menu
:MENU
cls
echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║      📱 UnifAI Mobile - Select Platform 📱                    ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.
echo   [1] 🤖 Open Android in Android Studio
echo   [2] 🍎 Open iOS in Xcode (macOS only)
echo   [3] 🔄 Rebuild and Sync
echo   [4] 📱 Run on Android (device/emulator required)
echo   [5] 📊 Show Project Info
echo   [0] ❌ Exit
echo.
set /p choice="Select option (0-5): "

if "%choice%"=="1" goto ANDROID_STUDIO
if "%choice%"=="2" goto XCODE
if "%choice%"=="3" goto BUILD_SYNC
if "%choice%"=="4" goto RUN_ANDROID
if "%choice%"=="5" goto INFO
if "%choice%"=="0" exit /b 0
goto MENU

:ANDROID_STUDIO
echo.
echo 🚀 Opening Android Studio...
call npx cap open android
goto MENU

:XCODE
echo.
echo 🚀 Opening Xcode...
call npx cap open ios
if %errorlevel% neq 0 (
    echo ❌ Xcode is only available on macOS!
    timeout /t 3 >nul
)
goto MENU

:BUILD_SYNC
echo.
echo 🔄 Rebuilding...
call npm run build
echo 🔄 Syncing...
call npx cap sync
echo ✅ Complete!
timeout /t 2 >nul
goto MENU

:RUN_ANDROID
echo.
echo 📱 Running on Android...
echo ℹ️  Make sure device or emulator is running!
cd android
call gradlew.bat installDebug
cd ..
echo ✅ App installed on device!
timeout /t 3 >nul
goto MENU

:INFO
cls
echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║      📊 Project Information 📊                                ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.
echo 📱 Platforms:
if exist "android\" (
    echo   ✅ Android: Installed
) else (
    echo   ❌ Android: Not installed
)
if exist "ios\" (
    echo   ✅ iOS: Installed
) else (
    echo   ❌ iOS: Not installed (macOS only)
)
echo.
echo 📦 Capacitor Version:
call npx cap --version
echo.
echo 🔧 Required Tools:
echo   • Android Studio - for Android development
echo   • Xcode (macOS) - for iOS development
echo   • Java JDK 17+ - for Android builds
echo.
pause
goto MENU
