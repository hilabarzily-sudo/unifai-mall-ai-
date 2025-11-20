@echo off
chcp 65001 >nul
color 0B
title 🌐 UnifAI - Web Launcher (Direct)

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║      🌐 UnifAI - Direct Web Launcher 🌐                       ║
echo ║           Quick start for web development                     ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

:: Step 1: Kill existing processes and free ports
echo [1/4] 🧹 Cleaning previous processes...
echo.

:: Kill Vite dev servers on ports 5173-5180
for /L %%p in (5173,1,5180) do (
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%%p 2^>nul') do (
        if not "%%a"=="" (
            echo      ├─ Freeing port %%p (PID: %%a)
            taskkill /F /PID %%a >nul 2>&1
        )
    )
)

:: Kill any remaining Node.js processes
for /f "tokens=2" %%a in ('tasklist /FI "IMAGENAME eq node.exe" /FO LIST ^| findstr PID') do (
    taskkill /F /PID %%a >nul 2>&1
)

echo      └─ ✅ All ports cleaned!
echo.

:: Step 2: Quick dependency check
echo [2/4] 📦 Checking dependencies...
if not exist "node_modules\" (
    echo ⚠️  Dependencies not found! Installing...
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Installation failed!
        pause
        exit /b 1
    )
    echo ✅ Installation complete!
) else (
    echo ✅ Dependencies OK
)
echo.

:: Step 3: Wait a moment for ports to free up
echo [3/4] ⏳ Waiting for ports to be ready...
timeout /t 2 >nul
echo      └─ ✅ Ready!
echo.

:: Step 4: Start web server
echo [4/4] 🚀 Starting Web Development Server...
echo.
echo ═══════════════════════════════════════════════════════════════
echo.
echo 🌐 Opening browser in 3 seconds...
echo 📱 Server will be available at: http://localhost:5174
echo.
echo Press Ctrl+C to stop the server
echo.
echo ═══════════════════════════════════════════════════════════════
echo.

:: Start Vite dev server
start "" http://localhost:5174
npm run dev

pause

