import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Register Service Worker for PWA (only in production and not in Electron)
const isElectron = navigator.userAgent.toLowerCase().includes('electron') || window.electron !== undefined;
const isProduction = import.meta.env.PROD;

if ('serviceWorker' in navigator && isProduction && !isElectron) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered:', registration);
        
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New service worker available, notify user
              if (confirm('עדכון חדש זמין! לטעון מחדש?')) {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
              }
            }
          });
        });
      })
      .catch((error) => {
        console.log('SW registration failed:', error);
      });
  });
} else if (isElectron) {
  console.log('Service Worker disabled in Electron');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

