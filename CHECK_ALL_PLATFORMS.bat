@echo off
chcp 65001 >nul
color 0A
title 🌐 UnifAI - Platform Verification

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║       🌐 UnifAI Mall - Check All Platforms 🌐                  ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

echo [*] Running comprehensive check...
echo.

node scripts/verify-setup.js

echo.
echo ════════════════════════════════════════════════════════════════
echo.

if %errorlevel% equ 0 (
    echo ✅ All platforms ready!
    echo.
    echo 📖 Available guides:
    echo    - READY_FOR_ALL_PLATFORMS.md    Quick read
    echo    - PLATFORM_SETUP.md             Detailed guide
    echo    - ELECTRON_FIX.md               Electron fixes
    echo.
    echo 🚀 Next steps:
    echo    [1] npm run dev           - Web development
    echo    [2] npm run electron:dev  - Desktop development
    echo    [3] START.bat             - Interactive menu
    echo.
) else (
    echo ⚠️  There are issues that need fixing!
    echo.
    echo 🔧 Fix the issues shown above and then run again:
    echo    CHECK_ALL_PLATFORMS.bat
    echo.
)

pause
