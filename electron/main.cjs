// UnifAI Mall - Electron Main Process
const { app, BrowserWindow, Menu, Tray, ipcMain, shell } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

let mainWindow;
let tray;

const isDev = !app.isPackaged;
const isMac = process.platform === 'darwin';

// Fix cache issues on Windows
if (process.platform === 'win32') {
  app.setPath('userData', path.join(app.getPath('appData'), 'UnifAI'));
}

// Create main window
function createWindow() {
  const fs = require('fs');
  const iconPath = path.join(__dirname, '../public/icons/icon-512x512.png');
  
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1024,
    minHeight: 768,
    title: 'UnifAI Mall',
    icon: fs.existsSync(iconPath) ? iconPath : undefined,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs'),
      webSecurity: isDev ? false : true, // Disable in dev for HMR
      allowRunningInsecureContent: isDev,
      devTools: true,
      sandbox: false, // Fix Windows cache issues
    },
    backgroundColor: '#f6f7fb',
    show: false, // Don't show until ready
    frame: true,
    titleBarStyle: 'default',
  });

  // Load app
  if (isDev) {
    // Vite might use alternative port if 5173 is taken
    const devPort = process.env.VITE_PORT || '5174';
    const devUrl = `http://localhost:${devPort}`;
    
    console.log(`Loading dev server from: ${devUrl}`);
    
    // Load with retry mechanism
    const loadWithRetry = (attempts = 0) => {
      mainWindow.loadURL(devUrl).catch(err => {
        console.error(`Failed to load URL (attempt ${attempts + 1}):`, err.message);
        
        if (attempts < 5) {
          console.log(`Retrying in ${1 + attempts} second(s)...`);
          setTimeout(() => loadWithRetry(attempts + 1), (1 + attempts) * 1000);
        } else {
          console.error('Max retry attempts reached. Please ensure Vite dev server is running.');
        }
      });
    };
    
    loadWithRetry();
    
    // Open DevTools once loaded
    mainWindow.webContents.once('did-finish-load', () => {
      console.log('App loaded successfully!');
      mainWindow.webContents.openDevTools();
    });
    
    // Handle load errors
    mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
      if (errorCode !== -3) { // -3 is abort, which is ok
        console.error(`Page failed to load: ${errorDescription} (${errorCode})`);
      }
    });
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // Show when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  // Handle window close
  mainWindow.on('close', (event) => {
    if (!app.isQuitting && !isMac) {
      event.preventDefault();
      mainWindow.hide();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Handle external links - don't open everything in browser
  // This allows tool windows to open within Electron
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    // Allow internal navigation within the app
    if (url.startsWith('http://localhost') || url.startsWith('https://localhost')) {
      return { action: 'deny' };
    }
    // For external links, open in default browser only if not a tool URL
    // Tool URLs will be handled by the IPC handler
    return { action: 'deny' };
  });

  // Create menu
  createMenu();
  
  // Create tray
  createTray();
}

// Create application menu
function createMenu() {
  const template = [
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'about', label: 'About UnifAI' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit', label: 'Quit UnifAI' }
      ]
    }] : []),
    {
      label: 'File',
      submenu: [
        isMac ? { role: 'close' } : { role: 'quit', label: 'Exit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        ...(isMac ? [
          { role: 'pasteAndMatchStyle' },
          { role: 'delete' },
          { role: 'selectAll' },
        ] : [
          { role: 'delete' },
          { type: 'separator' },
          { role: 'selectAll' }
        ])
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ] : [
          { role: 'close' }
        ])
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            await shell.openExternal('https://unifai.com');
          }
        },
        {
          label: 'Documentation',
          click: async () => {
            await shell.openExternal('https://docs.unifai.com');
          }
        },
        { type: 'separator' },
        {
          label: 'Check for Updates',
          click: () => {
            checkForUpdates();
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// Create system tray
function createTray() {
  const trayIconPath = path.join(__dirname, '../public/icons/icon-96x96.png');
  
  // Check if icon exists before creating tray
  const fs = require('fs');
  if (!fs.existsSync(trayIconPath)) {
    console.log('Tray icon not found, skipping tray creation');
    return;
  }

  try {
  tray = new Tray(trayIconPath);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show UnifAI',
      click: () => {
        mainWindow.show();
      }
    },
    {
      label: 'Hide UnifAI',
      click: () => {
        mainWindow.hide();
      }
    },
    { type: 'separator' },
    {
      label: 'Check for Updates',
      click: () => {
        checkForUpdates();
      }
    },
    { type: 'separator' },
    {
      label: 'Quit',
      click: () => {
        app.isQuitting = true;
        app.quit();
      }
    }
  ]);

  tray.setToolTip('UnifAI Mall');
  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  });
  } catch (error) {
    console.error('Failed to create tray:', error.message);
  }
}

// Auto updater
function checkForUpdates() {
  if (!isDev) {
    autoUpdater.checkForUpdatesAndNotify();
  }
}

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update-available');
});

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update-downloaded');
});

// IPC Handlers
ipcMain.handle('app-version', () => {
  return app.getVersion();
});

ipcMain.handle('restart-app', () => {
  autoUpdater.quitAndInstall();
});

// Open tool in new window
ipcMain.handle('open-tool-window', (event, url, title) => {
  const toolWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: title || 'AI Tool',
    parent: mainWindow,
    modal: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
    },
    backgroundColor: '#ffffff',
  });

  toolWindow.loadURL(url);
  
  // Remove menu bar
  toolWindow.setMenuBarVisibility(false);
  
  // Handle external links in tool window
  toolWindow.webContents.setWindowOpenHandler(({ url }) => {
    // Allow the tool window to open popups within itself
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        width: 1000,
        height: 700,
        webPreferences: {
          nodeIntegration: false,
          contextIsolation: true,
          sandbox: true,
        }
      }
    };
  });

  toolWindow.on('closed', () => {
    console.log('Tool window closed');
  });

  return { success: true };
});

// App lifecycle
app.whenReady().then(() => {
  createWindow();

  // Check for updates on startup (production only)
  if (!isDev) {
    setTimeout(() => {
      checkForUpdates();
    }, 3000);
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});

app.on('before-quit', () => {
  app.isQuitting = true;
});

// Security (only for main window, not tool windows)
app.on('web-contents-created', (event, contents) => {
  // Check if this is a tool window by checking the parent
  const isToolWindow = contents.getType() === 'window' && 
                       BrowserWindow.fromWebContents(contents)?.getParentWindow() !== null;
  
  if (!isToolWindow) {
    // Only apply strict security to main window
    contents.on('will-navigate', (event, navigationUrl) => {
      const appUrl = isDev ? 'localhost:5174' : 'file://';
      
      // Allow navigation within the app
      if (!navigationUrl.startsWith(`http://${appUrl}`) && !navigationUrl.startsWith(appUrl)) {
        event.preventDefault();
        // Don't open external links from main window in browser
        console.log('Blocked navigation to:', navigationUrl);
      }
    });
  }
  // Tool windows can navigate freely - they can load any URL
});

// Deep linking (custom protocol)
if (process.defaultApp) {
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('unifai', process.execPath, [path.resolve(process.argv[1])]);
  }
} else {
  app.setAsDefaultProtocolClient('unifai');
}

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
}

console.log('Electron app started successfully');

