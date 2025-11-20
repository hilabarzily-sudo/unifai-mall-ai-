@echo off
:: Quick Mobile Setup - Create mobile projects in one click

echo ╔═══════════════════════════════════════════════════╗
echo ║   📱 UnifAI - Automatic Mobile Setup 📱           ║
echo ╚═══════════════════════════════════════════════════╝
echo.

echo [1/4] 📦 Installing dependencies...
call npm install
if %errorlevel% neq 0 exit /b 1

echo.
echo [2/4] 🏗️  Building app...
call npm run build
if %errorlevel% neq 0 exit /b 1

echo.
echo [3/4] 🤖 Creating Android project...
call npx cap add android
if %errorlevel% neq 0 (
    echo ⚠️  Android already exists or error
)

echo.
echo [4/4] 🔄 Syncing...
call npx cap sync

echo.
echo ✅ Setup complete!
echo.
echo 📱 Now run:
echo    START_MOBILE.bat
echo.
pause
