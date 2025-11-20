@echo off
chcp 65001 >nul
cls

echo ╔═══════════════════════════════════════════════════════════════╗
echo ║      🤖 UnifAI - Android SDK Setup Helper 🤖                ║
echo ║               Configures Android SDK                          ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.

set "SDK_ROOT=D:\Android folder"
set "CMDLINE_TOOLS=%SDK_ROOT%\cmdline-tools"

echo [1/5] 🔍 Checking directories...
echo.

if not exist "%SDK_ROOT%" (
    echo ❌ Directory D:\Android folder not found!
    pause
    exit /b 1
)

if not exist "%CMDLINE_TOOLS%" (
    echo ❌ cmdline-tools not found!
    echo ℹ️  Download from: https://developer.android.com/studio#command-tools
    pause
    exit /b 1
)

echo ✅ Directories exist
echo.

echo [2/5] 🏗️  Preparing directory structure...
echo.

:: Create correct structure
if not exist "%CMDLINE_TOOLS%\latest" (
    mkdir "%CMDLINE_TOOLS%\latest"
)

:: Move files to correct location if bin is directly in cmdline-tools
if exist "%CMDLINE_TOOLS%\bin" (
    echo ℹ️  Moving files to correct structure...
    xcopy "%CMDLINE_TOOLS%\bin" "%CMDLINE_TOOLS%\latest\bin\" /E /I /Y >nul 2>&1
    xcopy "%CMDLINE_TOOLS%\lib" "%CMDLINE_TOOLS%\latest\lib\" /E /I /Y >nul 2>&1
    if exist "%CMDLINE_TOOLS%\source.properties" copy "%CMDLINE_TOOLS%\source.properties" "%CMDLINE_TOOLS%\latest\" >nul 2>&1
    if exist "%CMDLINE_TOOLS%\NOTICE.txt" copy "%CMDLINE_TOOLS%\NOTICE.txt" "%CMDLINE_TOOLS%\latest\" >nul 2>&1
)

echo ✅ Directory structure ready
echo.

echo [3/5] 🔧 Downloading Android SDK Components...
echo ℹ️  This may take 5-10 minutes...
echo.

:: Set temporary environment variable
set "ANDROID_HOME=%SDK_ROOT%"
set "PATH=%CMDLINE_TOOLS%\latest\bin;%PATH%"

:: Download required components
echo 📦 Downloading Platform Tools...
call "%CMDLINE_TOOLS%\latest\bin\sdkmanager.bat" --sdk_root="%SDK_ROOT%" "platform-tools" --verbose

echo.
echo 📦 Downloading Build Tools...
call "%CMDLINE_TOOLS%\latest\bin\sdkmanager.bat" --sdk_root="%SDK_ROOT%" "build-tools;33.0.0" --verbose

echo.
echo 📦 Downloading Android 13 Platform...
call "%CMDLINE_TOOLS%\latest\bin\sdkmanager.bat" --sdk_root="%SDK_ROOT%" "platforms;android-33" --verbose

echo.
echo 📦 Downloading Emulator...
call "%CMDLINE_TOOLS%\latest\bin\sdkmanager.bat" --sdk_root="%SDK_ROOT%" "emulator" --verbose

echo.
echo 📦 Downloading System Image (for emulator)...
call "%CMDLINE_TOOLS%\latest\bin\sdkmanager.bat" --sdk_root="%SDK_ROOT%" "system-images;android-33;google_apis;x86_64" --verbose

echo.
echo ✅ All components downloaded!
echo.

echo [4/5] 📊 Showing installed components...
echo.
call "%CMDLINE_TOOLS%\latest\bin\sdkmanager.bat" --sdk_root="%SDK_ROOT%" --list_installed

echo.
echo [5/5] ✅ Setup complete!
echo.
echo ╔═══════════════════════════════════════════════════════════════╗
echo ║  ✅ Android SDK ready!                                         ║
echo ║                                                               ║
echo ║  📂 SDK path:                                                 ║
echo ║     D:\Android folder                                         ║
echo ║                                                               ║
echo ║  🔧 What now:                                                 ║
echo ║  1. Open Android Studio                                      ║
echo ║  2. Go to: File → Settings → Android SDK                     ║
echo ║  3. Enter the path: D:\Android folder                        ║
echo ║  4. Click Apply → OK                                         ║
echo ║                                                               ║
echo ╚═══════════════════════════════════════════════════════════════╝
echo.
echo 📋 Path copied to clipboard:
echo D:\Android folder | clip
echo.
pause
