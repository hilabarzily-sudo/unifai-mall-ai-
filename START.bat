@echo off
chcp 65001 >nul
color 0B
title 🚀 UnifAI - Ultimate Smart Launcher

:: Create log file
set LOGFILE=start-log-%DATE:~-4,4%%DATE:~-7,2%%DATE:~-10,2%-%TIME:~0,2%%TIME:~3,2%%TIME:~6,2%.txt
echo [%DATE% %TIME%] Starting UnifAI Ultimate Launcher > %LOGFILE%

echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║      🚀 UnifAI - Ultimate Smart Application Launcher 🚀       ║
echo ║         With advanced checks and selection menu               ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

:: ========== Check 1: Node.js ==========
echo [1/12] 🔍 Checking Node.js installation...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not installed!
    echo 📥 Please install from: https://nodejs.org/
    echo [%DATE% %TIME%] ERROR: Node.js not found >> %LOGFILE%
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✅ Node.js installed: %NODE_VERSION%
echo [%DATE% %TIME%] Node.js version: %NODE_VERSION% >> %LOGFILE%
echo.

:: ========== Check 2: npm ==========
echo [2/12] 🔍 Checking npm installation...
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm not installed!
    echo [%DATE% %TIME%] ERROR: npm not found >> %LOGFILE%
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo ✅ npm installed: v%NPM_VERSION%
echo [%DATE% %TIME%] npm version: v%NPM_VERSION% >> %LOGFILE%
echo.

:: ========== Check 3: Git Repository ==========
echo [3/12] 🔍 Checking Git repository...
if exist ".git\" (
    echo ✅ Git repository exists
    git status --porcelain >nul 2>&1
    if %errorlevel% equ 0 (
        for /f %%a in ('git status --porcelain ^| find /c /v ""') do set CHANGES=%%a
        if !CHANGES! gtr 0 (
            echo ⚠️  %CHANGES% uncommitted changes
            echo [%DATE% %TIME%] Git: %CHANGES% uncommitted changes >> %LOGFILE%
        ) else (
            echo ℹ️  Working tree is clean
        )
    )
) else (
    echo ⚠️  Not a Git repository
    echo [%DATE% %TIME%] WARNING: Not a git repository >> %LOGFILE%
)
echo.

:: ========== Check 4: node_modules ==========
echo [4/12] 🔍 Checking dependencies...
if not exist "node_modules\" (
    echo ⚠️  node_modules not found! Starting installation...
    echo 📦 Installing packages... (this may take 1-2 minutes)
    echo [%DATE% %TIME%] Installing npm packages... >> %LOGFILE%
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Package installation failed!
        echo [%DATE% %TIME%] ERROR: npm install failed >> %LOGFILE%
        pause
        exit /b 1
    )
    echo ✅ Installation complete!
) else (
    echo ✅ node_modules exists
    for /f "tokens=*" %%a in ('dir /b /a:d node_modules ^| find /c /v ""') do set PKG_COUNT=%%a
    echo ℹ️  Number of packages: %PKG_COUNT%
    echo [%DATE% %TIME%] node_modules: %PKG_COUNT% packages >> %LOGFILE%
)
echo.

:: ========== Check 5: Config Files ==========
echo [5/12] 🔍 Checking configuration files...
set CONFIG_OK=1

if not exist "package.json" (
    echo ❌ package.json not found!
    set CONFIG_OK=0
) else (
    echo ✅ package.json exists
)

if not exist "vite.config.js" (
    echo ⚠️  vite.config.js not found
) else (
    echo ✅ vite.config.js exists
)

if not exist "tailwind.config.js" (
    echo ⚠️  tailwind.config.js not found
) else (
    echo ✅ tailwind.config.js exists
)

if not exist "index.html" (
    echo ❌ index.html not found!
    set CONFIG_OK=0
) else (
    echo ✅ index.html exists
)

if %CONFIG_OK% equ 0 (
    echo ❌ Critical files missing!
    echo [%DATE% %TIME%] ERROR: Critical config files missing >> %LOGFILE%
    pause
    exit /b 1
)
echo.

:: ========== Check 6: .env File ==========
echo [6/12] 🔍 Checking configuration file (.env)...
if not exist ".env" (
    echo ⚠️  .env file not found!
    if exist ".env.example" (
        echo 📝 Copying from .env.example...
        copy ".env.example" ".env" >nul
        echo ✅ .env file created!
    ) else (
        echo ℹ️  Continuing without .env (may cause issues)
    )
) else (
    echo ✅ .env file exists
)
echo.

:: ========== Check 7: Internet Connection ==========
echo [7/12] 🔍 Checking internet connection...
ping -n 1 8.8.8.8 >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Internet connection OK
    echo [%DATE% %TIME%] Internet connection: OK >> %LOGFILE%
) else (
    echo ⚠️  No internet connection (may affect Supabase)
    echo [%DATE% %TIME%] WARNING: No internet connection >> %LOGFILE%
)
echo.

:: ========== Check 8: Disk Space ==========
echo [8/12] 🔍 Checking available disk space...
for /f "tokens=3" %%a in ('dir /-c ^| find "bytes free"') do set FREE_SPACE=%%a
echo ✅ Free disk space: %FREE_SPACE% bytes
echo [%DATE% %TIME%] Free disk space: %FREE_SPACE% >> %LOGFILE%
echo.

:: ========== Check 9: Electron Dependencies ==========
echo [9/12] 🔍 Checking Electron dependencies...
if exist "electron\" (
    echo ✅ Electron directory exists
    if exist "electron\main.cjs" (
        echo ✅ electron/main.cjs exists
    )
    if exist "electron-builder.json" (
        echo ✅ electron-builder.json exists
    ) else (
        echo ⚠️  electron-builder.json not found
    )
) else (
    echo ℹ️  Electron not installed (optional)
)
echo.

:: ========== Check 10: Capacitor Dependencies ==========
echo [10/12] 🔍 Checking Capacitor dependencies...
if exist "capacitor.config.json" (
    echo ✅ capacitor.config.json exists
    if exist "android\" (
        echo ✅ Android project exists
    )
    if exist "ios\" (
        echo ✅ iOS project exists
    )
) else (
    echo ℹ️  Capacitor not configured (optional)
)
echo.

:: ========== Check 11: Supabase Connection ==========
echo [11/12] 🔍 Checking database connectivity...
echo 📡 Connecting to Supabase...
call npm run check-db >nul 2>&1
if %errorlevel% neq 0 (
    echo ⚠️  Cannot verify Supabase connectivity
    echo [%DATE% %TIME%] WARNING: Supabase connection check failed >> %LOGFILE%
) else (
    echo ✅ Database connectivity OK!
    echo [%DATE% %TIME%] Supabase connection: OK >> %LOGFILE%
)
echo.

:: ========== Check 12: Port 5173 ==========
echo [12/12] 🔍 Checking if port 5173 is available...
netstat -ano | findstr ":5173" >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠️  Port 5173 is busy - Vite will use alternative port
    echo [%DATE% %TIME%] WARNING: Port 5173 is busy >> %LOGFILE%
) else (
    echo ✅ Port 5173 is available
    echo [%DATE% %TIME%] Port 5173: Available >> %LOGFILE%
)
echo.

:: ========== Selection Menu ==========
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║  ✅ All checks complete!                                       ║
echo ║                                                               ║
echo ║  What would you like to run?                                  ║
echo ║                                                               ║
echo ║  [1] 🌐 Web App (Development)                                ║
echo ║  [2] 🖥️  Electron Desktop App                                ║
echo ║  [3] 📱 Mobile Preview (Capacitor)                           ║
echo ║  [4] 🏗️  Build Production                                    ║
echo ║  [5] 🧪 Run Tests                                            ║
echo ║  [6] 🔄 Check for Updates                                    ║
echo ║  [7] 📋 Show System Info                                     ║
echo ║  [0] ❌ Exit                                                  ║
echo ║                                                               ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

choice /C 12345670 /N /M "Select option (1-7, 0 to exit): "
set CHOICE=%ERRORLEVEL%

echo [%DATE% %TIME%] User selected option: %CHOICE% >> %LOGFILE%

if %CHOICE% equ 1 goto WEB_APP
if %CHOICE% equ 2 goto ELECTRON_APP
if %CHOICE% equ 3 goto MOBILE_APP
if %CHOICE% equ 4 goto BUILD_PROD
if %CHOICE% equ 5 goto RUN_TESTS
if %CHOICE% equ 6 goto CHECK_UPDATES
if %CHOICE% equ 7 goto SYSTEM_INFO
if %CHOICE% equ 8 goto EXIT

:WEB_APP
echo.
echo 🌐 Starting Web App...
echo [%DATE% %TIME%] Starting Web App >> %LOGFILE%
call npm run dev
goto END

:ELECTRON_APP
echo.
echo 🖥️  Starting Electron Desktop App...
echo [%DATE% %TIME%] Starting Electron App >> %LOGFILE%
if exist "electron\main.cjs" (
    call npm run electron:dev
) else (
    echo ❌ Electron not installed!
    echo Install with: npm install electron electron-builder
    pause
)
goto END

:MOBILE_APP
echo.
echo 📱 Starting Mobile Preview...
echo [%DATE% %TIME%] Starting Mobile Preview >> %LOGFILE%
if exist "capacitor.config.json" (
    call npx cap sync
    call npx cap open android
) else (
    echo ❌ Capacitor not installed!
    echo Install with: npm install @capacitor/core @capacitor/cli
    pause
)
goto END

:BUILD_PROD
echo.
echo 🏗️  Building Production Build...
echo [%DATE% %TIME%] Building production >> %LOGFILE%
call npm run build
echo ✅ Build complete! Files in dist/
pause
goto END

:RUN_TESTS
echo.
echo 🧪 Running Tests...
echo [%DATE% %TIME%] Running tests >> %LOGFILE%
call npm run test --if-present
pause
goto END

:CHECK_UPDATES
echo.
echo 🔄 Checking for updates...
echo [%DATE% %TIME%] Checking for updates >> %LOGFILE%
call npm outdated
pause
goto END

:SYSTEM_INFO
echo.
echo 📋 System Information:
echo ═══════════════
echo Node.js: %NODE_VERSION%
echo npm: v%NPM_VERSION%
echo Packages: %PKG_COUNT%
echo Free Space: %FREE_SPACE% bytes
echo.
echo Configuration files:
if exist "vite.config.js" echo ✅ vite.config.js
if exist "tailwind.config.js" echo ✅ tailwind.config.js
if exist ".env" echo ✅ .env
if exist "electron\main.cjs" echo ✅ Electron (main.cjs)
if exist "capacitor.config.json" echo ✅ Capacitor
echo.
pause
goto END

:EXIT
echo.
echo 👋 Goodbye!
echo [%DATE% %TIME%] Launcher closed by user >> %LOGFILE%
exit /b 0

:END
echo.
echo [%DATE% %TIME%] Session ended >> %LOGFILE%
echo Log saved to: %LOGFILE%
pause

