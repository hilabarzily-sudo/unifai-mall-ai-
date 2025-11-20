@echo off
chcp 65001 >nul
cls
echo.
echo ╔═══════════════════════════════════════════════════╗
echo ║      🔪 UnifAI - Port Killer 🔪                  ║
echo ║      Closes all processes on ports 5173-5180     ║
echo ╚═══════════════════════════════════════════════════╝
echo.

echo 🔍 Searching for processes on ports 5173-5180...
echo.

set FOUND=0

for /L %%p in (5173,1,5180) do (
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%%p 2^>nul') do (
        if not "%%a"=="" (
            set FOUND=1
            echo ├─ Found process on port %%p (PID: %%a)
            taskkill /F /PID %%a >nul 2>&1
            if !errorlevel! equ 0 (
                echo │  ✅ Closed successfully
            ) else (
                echo │  ❌ Failed to close
            )
        )
    )
)

if %FOUND% equ 0 (
    echo ℹ️  No processes found on ports 5173-5180
) else (
    echo.
    echo └─ ✅ All processes closed!
)

echo.
pause
