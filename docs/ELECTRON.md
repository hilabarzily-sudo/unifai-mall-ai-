# 🖥️ Electron Desktop App Guide

## Overview

UnifAI Mall can be packaged as a native desktop application for Windows, macOS, and Linux using Electron.

## Architecture

### Main Process (`electron/main.cjs`)
- Window management
- System integration (menus, tray)
- Auto-updater
- IPC communication
- Deep linking
- **Note:** Uses `.cjs` extension for CommonJS compatibility

### Renderer Process
- Your React application
- Runs in Chromium
- Isolated from Node.js

### Preload Script (`electron/preload.cjs`)
- Bridge between main and renderer
- Exposes safe APIs to renderer
- Context isolation enabled
- **Note:** Uses `.cjs` extension for CommonJS compatibility

## Development

### Prerequisites

```bash
npm install electron electron-builder electron-updater
```

### Run in Development Mode

```bash
npm run electron:dev
```

This will:
1. Start Vite dev server (port 5173)
2. Wait for server to be ready
3. Launch Electron window pointing to dev server
4. Enable hot reload

### Dev Tools

- **F12** - Open Chrome DevTools
- **Ctrl+R** - Reload window
- **Ctrl+Shift+I** - Toggle DevTools

## Building

### Build for All Platforms

```bash
npm run electron:build
```

### Build for Specific Platform

```bash
# Windows
npm run electron:build:win

# macOS
npm run electron:build:mac

# Linux
npm run electron:build:linux
```

### Build Output

Builds are created in `dist-electron/` directory:

**Windows:**
- `UnifAI Mall-1.0.0.exe` (installer)
- `UnifAI Mall-1.0.0-portable.exe` (portable)

**macOS:**
- `UnifAI Mall-1.0.0.dmg` (disk image)
- `UnifAI Mall-1.0.0-mac.zip` (zip archive)

**Linux:**
- `UnifAI Mall-1.0.0.AppImage`
- `UnifAI Mall-1.0.0.deb`
- `UnifAI Mall-1.0.0.rpm`

## Configuration

### electron-builder.json

```json
{
  "appId": "com.unifai.mall",
  "productName": "UnifAI Mall",
  "directories": {
    "output": "dist-electron"
  },
  "files": [
    "dist/**/*",
    "electron/**/*.cjs"
  ],
  "extraMetadata": {
    "main": "electron/main.cjs"
  },
  "win": {
    "target": ["nsis", "portable"],
    "icon": "public/icons/icon-512x512.png"
  },
  "mac": {
    "target": ["dmg", "zip"],
    "category": "public.app-category.productivity"
  },
  "linux": {
    "target": ["AppImage", "deb", "rpm"],
    "category": "Utility"
  }
}
```

## Features

### Native Menus

Configured in `electron/main.js`:

```javascript
const menu = Menu.buildFromTemplate([
  {
    label: 'File',
    submenu: [
      { role: 'quit' }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  }
]);
```

### System Tray

Creates a system tray icon with context menu:

```javascript
const tray = new Tray('icon.png');
tray.setContextMenu(Menu.buildFromTemplate([
  { label: 'Show App', click: () => mainWindow.show() },
  { label: 'Quit', click: () => app.quit() }
]));
```

### Auto-Updater

Checks for updates automatically:

```javascript
autoUpdater.checkForUpdatesAndNotify();

autoUpdater.on('update-available', () => {
  // Notify user
});

autoUpdater.on('update-downloaded', () => {
  // Prompt user to restart
});
```

### Deep Linking

Custom protocol: `unifai://`

```javascript
app.setAsDefaultProtocolClient('unifai');

// Handle: unifai://tool/123
app.on('open-url', (event, url) => {
  // Parse and navigate
});
```

## IPC Communication

### Main → Renderer

```javascript
// main.js
mainWindow.webContents.send('update-available');

// renderer (via preload)
window.electronAPI.onUpdateAvailable(() => {
  console.log('Update available!');
});
```

### Renderer → Main

```javascript
// preload.js
contextBridge.exposeInMainWorld('electronAPI', {
  getAppVersion: () => ipcRenderer.invoke('app-version')
});

// renderer
const version = await window.electronAPI.getAppVersion();
```

## Security Best Practices

### ✅ Enabled Features

- **Context Isolation** - Separate contexts for main and renderer
- **Node Integration Disabled** - Renderer can't access Node.js
- **Remote Module Disabled** - No direct main process access
- **Sandbox Enabled** - Additional security layer

### ❌ Disabled Features

- `nodeIntegration: false`
- `enableRemoteModule: false`
- `contextIsolation: true`

### Content Security Policy

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self'"
/>
```

## Platform-Specific Features

### Windows

- **NSIS Installer** - Professional installer
- **Auto-launch on startup** - Registry integration
- **Notifications** - Native Windows notifications
- **Jump Lists** - Recent items in taskbar

### macOS

- **DMG Installer** - Drag-to-install
- **Dock Integration** - Bounce, badges
- **Touch Bar Support** - MacBook Pro integration
- **App Store Ready** - Sandboxed build option

### Linux

- **Multiple Formats** - AppImage, deb, rpm, snap
- **Desktop Integration** - .desktop files
- **System Tray** - All major DEs
- **Auto-update** - Via package managers

## Packaging

### Code Signing

#### Windows

```json
{
  "win": {
    "certificateFile": "cert.pfx",
    "certificatePassword": "password"
  }
}
```

#### macOS

```json
{
  "mac": {
    "identity": "Developer ID Application: Your Name"
  }
}
```

### Notarization (macOS)

```bash
# Required for macOS 10.15+
export APPLE_ID="your@email.com"
export APPLE_ID_PASSWORD="app-specific-password"

npm run electron:build:mac
```

## Distribution

### Direct Download

Host builds on your website:
- `unifai-mall.com/download/windows`
- `unifai-mall.com/download/mac`
- `unifai-mall.com/download/linux`

### App Stores

**Microsoft Store** (Windows)
- Requires APPX format
- Submit via Partner Center

**Mac App Store**
- Requires sandbox
- Submit via App Store Connect

**Snap Store** (Linux)
- `snapcraft.yaml` configuration
- Auto-updates included

## Auto-Update

### Setup GitHub Releases

1. Create GitHub release with tag `v1.0.0`
2. Upload build artifacts
3. electron-updater checks for new releases

### Update Flow

```
App Start → Check for Updates → Download → Notify User → Install on Restart
```

### Configuration

```json
{
  "publish": {
    "provider": "github",
    "owner": "unifai",
    "repo": "unifai-mall"
  }
}
```

## Performance Optimization

### Reduce Bundle Size

```javascript
// Don't bundle dev dependencies
"files": [
  "dist/**/*",
  "!**/*.map"
]
```

### Lazy Loading

```javascript
// Load modules when needed
const heavyModule = await import('./heavy-module');
```

### Native Modules

```bash
# Rebuild for Electron
npm run electron-rebuild
```

## Debugging

### Debug Main Process

```bash
# Start with debugging
electron --inspect=5858 .

# In Chrome
chrome://inspect
```

### Debug Renderer Process

- Open DevTools (F12)
- Use React DevTools extension
- Use Vite's HMR

### Logs

```javascript
// Main process logs
console.log('Main:', data);

// Renderer logs
console.log('Renderer:', data);

// Both appear in terminal
```

## Common Issues

### White Screen on Launch

- Check dev server is running
- Verify URL in `loadURL()`
- Check console for errors

### Native Modules Not Working

```bash
npm rebuild --runtime=electron --target=28.0.0
```

### App Not Signing

- Verify certificate is valid
- Check identity in keychain
- Ensure correct provisioning profile

## Testing

### Unit Tests

```javascript
// Mock electron
jest.mock('electron', () => ({
  app: { getVersion: () => '1.0.0' },
  BrowserWindow: jest.fn(),
}));
```

### E2E Tests

```bash
# Use Spectron (deprecated) or Playwright
npm install --save-dev @playwright/test
```

## Deployment Checklist

- [ ] Update version in package.json
- [ ] Build for all platforms
- [ ] Sign applications
- [ ] Test on all platforms
- [ ] Create GitHub release
- [ ] Upload build artifacts
- [ ] Update website download links
- [ ] Announce release

## Resources

- [Electron Documentation](https://www.electronjs.org/docs)
- [electron-builder](https://www.electron.build/)
- [Security Best Practices](https://www.electronjs.org/docs/tutorial/security)
- [Auto-Update Guide](https://www.electron.build/auto-update)

---

*Desktop apps, simplified! 🖥️*

