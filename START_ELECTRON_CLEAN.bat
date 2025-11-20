@echo off
chcp 65001 >nul
cls

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║      🚀 UnifAI - Clean Electron Launcher 🚀                  ║
echo ║           Cleans processes and restarts                       ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

:: Step 1: Kill existing processes
echo [1/3] 🔪 Closing previous processes...
echo.

:: Kill Vite dev servers on ports 5173-5180
for /L %%p in (5173,1,5180) do (
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%%p 2^>nul') do (
        if not "%%a"=="" (
            echo      ├─ Closing process on port %%p (PID: %%a)
            taskkill /F /PID %%a >nul 2>&1
        )
    )
)

:: Kill Electron processes
taskkill /F /IM electron.exe >nul 2>&1
if %errorlevel% equ 0 (
    echo      ├─ Closed Electron processes
)

:: Kill Node processes that might be running Vite
for /f "tokens=2" %%a in ('tasklist /FI "IMAGENAME eq node.exe" /FO LIST ^| findstr PID') do (
    echo      ├─ Closing Node.exe (PID: %%a)
    taskkill /F /PID %%a >nul 2>&1
)

echo      └─ ✅ All processes closed!
echo.

:: Step 2: Wait a moment
echo [2/3] ⏳ Waiting 2 seconds...
timeout /t 2 >nul
echo      └─ ✅ Ready!
echo.

:: Step 3: Start Electron
echo [3/3] 🚀 Starting Electron Desktop App...
echo.
echo ═══════════════════════════════════════════════════════════════
echo.

npm run electron:dev

pause

