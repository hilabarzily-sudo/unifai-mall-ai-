#!/usr/bin/env node

/**
 * UnifAI Mall - Platform Verification Script
 * Checks if all platforms are properly configured
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\n🔍 UnifAI Mall - Platform Setup Verification\n');
console.log('═'.repeat(60));

const checks = {
  passed: 0,
  failed: 0,
  warnings: 0
};

// Helper functions
function checkExists(filePath, name) {
  const exists = fs.existsSync(filePath);
  if (exists) {
    console.log(`✅ ${name}`);
    checks.passed++;
  } else {
    console.log(`❌ ${name} - NOT FOUND`);
    checks.failed++;
  }
  return exists;
}

function checkCommand(command, name) {
  try {
    execSync(command, { stdio: 'ignore' });
    console.log(`✅ ${name}`);
    checks.passed++;
    return true;
  } catch (error) {
    console.log(`❌ ${name} - NOT INSTALLED`);
    checks.failed++;
    return false;
  }
}

function checkWarning(condition, message) {
  if (!condition) {
    console.log(`⚠️  ${message}`);
    checks.warnings++;
  }
}

// 1. Check Core Requirements
console.log('\n📦 Core Requirements:');
console.log('─'.repeat(60));
checkCommand('node --version', 'Node.js');
checkCommand('npm --version', 'npm');
checkCommand('git --version', 'git');

// 2. Check Project Files
console.log('\n📁 Project Files:');
console.log('─'.repeat(60));
checkExists('package.json', 'package.json');
checkExists('vite.config.js', 'vite.config.js');
checkExists('tailwind.config.js', 'tailwind.config.js');
checkExists('index.html', 'index.html');
checkExists('App.jsx', 'App.jsx');

// 3. Check Web/PWA Setup
console.log('\n🌐 Web & PWA Setup:');
console.log('─'.repeat(60));
checkExists('public/sw.js', 'Service Worker');
checkExists('public/manifest.json', 'PWA Manifest');
checkExists('src/services', 'Services directory');
checkExists('src/components', 'Components (frontend structure)');

// 4. Check Electron Setup
console.log('\n🖥️  Electron Setup:');
console.log('─'.repeat(60));
const hasElectronMain = checkExists('electron/main.cjs', 'Main process (main.cjs)');
const hasElectronPreload = checkExists('electron/preload.cjs', 'Preload script (preload.cjs)');
checkExists('electron-builder.json', 'Electron builder config');

// Check package.json main entry
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (pkg.main === 'electron/main.cjs') {
    console.log('✅ package.json main entry correct');
    checks.passed++;
  } else {
    console.log(`❌ package.json main entry incorrect: ${pkg.main}`);
    checks.failed++;
  }
} catch (error) {
  console.log('❌ Cannot read package.json');
  checks.failed++;
}

// 5. Check Mobile Setup
console.log('\n📱 Mobile Setup (Capacitor):');
console.log('─'.repeat(60));
const hasCapConfig = checkExists('capacitor.config.json', 'Capacitor config');
const hasAndroid = fs.existsSync('android');
const hasIOS = fs.existsSync('ios');

if (hasAndroid) {
  console.log('✅ Android project exists');
  checks.passed++;
} else {
  console.log('⚠️  Android project not initialized (run: npx cap add android)');
  checks.warnings++;
}

if (hasIOS) {
  console.log('✅ iOS project exists');
  checks.passed++;
} else {
  console.log('⚠️  iOS project not initialized (run: npx cap add ios)');
  checks.warnings++;
}

// 6. Check Testing Setup
console.log('\n🧪 Testing Setup:');
console.log('─'.repeat(60));
checkExists('jest.config.js', 'Jest config');
checkExists('playwright.config.js', 'Playwright config');
checkExists('tests/unit', 'Unit tests directory');
checkExists('tests/integration', 'Integration tests directory');
checkExists('tests/e2e', 'E2E tests directory');

// 7. Check CI/CD Setup
console.log('\n🔄 CI/CD Setup:');
console.log('─'.repeat(60));
checkExists('.github/workflows/ci.yml', 'CI workflow');
checkExists('.github/workflows/deploy-web.yml', 'Web deploy workflow');
checkExists('.github/workflows/deploy-electron.yml', 'Electron deploy workflow');
checkExists('.github/workflows/deploy-mobile.yml', 'Mobile deploy workflow');

// 8. Check Environment
console.log('\n⚙️  Environment:');
console.log('─'.repeat(60));
const hasEnv = checkExists('.env', '.env file');
if (!hasEnv) {
  checkExists('.env.example', '.env.example (copy to .env)');
}

// 9. Check Dependencies
console.log('\n📚 Dependencies:');
console.log('─'.repeat(60));
const hasNodeModules = checkExists('node_modules', 'node_modules');
if (!hasNodeModules) {
  console.log('⚠️  Run: npm install');
  checks.warnings++;
}

// Check critical packages
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const criticalDeps = {
    'react': 'React',
    '@supabase/supabase-js': 'Supabase',
    'electron': 'Electron',
    '@capacitor/core': 'Capacitor',
  };

  for (const [dep, name] of Object.entries(criticalDeps)) {
    if (pkg.dependencies?.[dep] || pkg.devDependencies?.[dep]) {
      console.log(`✅ ${name} in package.json`);
      checks.passed++;
    } else {
      console.log(`⚠️  ${name} not in package.json`);
      checks.warnings++;
    }
  }
} catch (error) {
  console.log('❌ Cannot check dependencies');
  checks.failed++;
}

// 10. Check Build Output Directories
console.log('\n🏗️  Build Directories:');
console.log('─'.repeat(60));
checkWarning(!fs.existsSync('dist'), 'dist/ not found (run: npm run build)');
checkWarning(!fs.existsSync('dist-electron'), 'dist-electron/ not found (run: npm run electron:build)');

// Summary
console.log('\n' + '═'.repeat(60));
console.log('📊 Verification Summary:');
console.log('═'.repeat(60));
console.log(`✅ Passed:   ${checks.passed}`);
console.log(`❌ Failed:   ${checks.failed}`);
console.log(`⚠️  Warnings: ${checks.warnings}`);
console.log('');

// Platform Readiness
console.log('🌐 Platform Readiness:');
console.log('─'.repeat(60));

const webReady = fs.existsSync('index.html') && fs.existsSync('App.jsx');
const pwaReady = fs.existsSync('public/sw.js') && fs.existsSync('public/manifest.json');
const electronReady = hasElectronMain && hasElectronPreload;
const mobileReady = hasCapConfig;

console.log(`🌐 Web:        ${webReady ? '✅ READY' : '❌ NOT READY'}`);
console.log(`📱 PWA:        ${pwaReady ? '✅ READY' : '❌ NOT READY'}`);
console.log(`🖥️  Desktop:    ${electronReady ? '✅ READY' : '❌ NOT READY'}`);
console.log(`📱 Mobile:     ${mobileReady ? '⚙️  CONFIG READY (needs platform init)' : '❌ NOT READY'}`);

console.log('\n' + '═'.repeat(60));

// Exit code
if (checks.failed > 0) {
  console.log('❌ Setup verification FAILED. Fix the errors above.\n');
  process.exit(1);
} else if (checks.warnings > 0) {
  console.log('⚠️  Setup has warnings. Consider fixing them.\n');
  process.exit(0);
} else {
  console.log('✅ All platforms are properly configured!\n');
  console.log('Next steps:');
  console.log('  1. npm install (if not done)');
  console.log('  2. npm run dev (Web development)');
  console.log('  3. npm run electron:dev (Desktop development)');
  console.log('  4. npx cap add android/ios (Mobile setup)');
  console.log('');
  process.exit(0);
}

