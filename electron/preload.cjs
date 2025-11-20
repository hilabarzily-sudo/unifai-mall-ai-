// UnifAI Mall - Electron Preload Script
const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
  // App version
  getVersion: () => ipcRenderer.invoke('app-version'),
  
  // App restart
  restartApp: () => ipcRenderer.invoke('restart-app'),
  
  // Open tool in new window
  openToolWindow: (url, title) => ipcRenderer.invoke('open-tool-window', url, title),
  
  // Update events
  onUpdateAvailable: (callback) => {
    ipcRenderer.on('update-available', callback);
  },
  onUpdateDownloaded: (callback) => {
    ipcRenderer.on('update-downloaded', callback);
  },
  
  // Remove listeners
  removeListener: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  }
});

console.log('Preload script loaded successfully');
