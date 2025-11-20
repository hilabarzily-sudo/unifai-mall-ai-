@echo off
chcp 65001 >nul
cls

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║      🚀 UnifAI - Frontend + Backend Launcher 🚀              ║
echo ║         Starting Development Servers                          ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

:: Step 1: Kill existing processes
echo [1/4] 🔪 Closing previous processes...
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

:: Kill Node processes
taskkill /F /IM node.exe >nul 2>&1

echo      ✅ Previous processes closed
echo.

:: Step 2: Check .env file
echo [2/4] 🔍 Checking environment configuration...
echo.

if not exist "frontend\.env" (
    echo      ⚠️  Warning: frontend\.env not found!
    echo      Creating from root .env...
    copy ".env" "frontend\.env" >nul 2>&1
    if %errorlevel% equ 0 (
        echo      ✅ Created frontend\.env
    ) else (
        echo      ❌ Error: Could not create frontend\.env
        echo      Please create it manually with Supabase credentials
        pause
        exit /b 1
    )
) else (
    echo      ✅ frontend\.env exists
)
echo.

:: Step 3: Test Supabase connection (Backend check)
echo [3/4] 🔌 Testing Supabase connection (Backend)...
echo.

node scripts\database\testSupabaseConnection.js
if %errorlevel% neq 0 (
    echo.
    echo      ⚠️  Backend connection issue detected!
    echo      Continuing anyway...
    timeout /t 3 >nul
)
echo.

:: Step 4: Start Frontend Dev Server
echo [4/4] 🌐 Starting Frontend Development Server...
echo.
echo      Frontend URL: http://localhost:5174
echo      Backend URL: https://qdcovbyzaapgfamcplrt.supabase.co
echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║  ✅ Servers are starting!                                     ║
echo ║  📱 Frontend: http://localhost:5174                           ║
echo ║  🗄️  Backend: Supabase (Cloud)                                ║
echo ║  🔥 Press Ctrl+C to stop                                      ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

:: Start development server from root
npm run dev

