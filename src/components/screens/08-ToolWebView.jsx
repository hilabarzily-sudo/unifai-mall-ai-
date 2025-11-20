import React, { useState } from "react";
import { Browser } from '@capacitor/browser';

// TOOL WEBVIEW – Popup with iframe/webview
// Responsive to all screen sizes
// Glassmorphism container
// Preloaded prompt support (if coming from "Try in Tool")

export default function ToolWebView({ 
  tool, 
  onClose, 
  preloadedPrompt = null,
  toolUrl 
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Mock data if not provided
  const toolData = tool || {
    id: 1,
    name: "Midjourney",
    icon: "🎨",
    url: toolUrl || "https://midjourney.com",
  };

  // Open in appropriate platform
  React.useEffect(() => {
    async function openTool() {
      console.log('🔧 ToolWebView - Opening tool:', toolData.name, toolData.url);
      
      if (!toolData.url) {
        console.error('❌ No URL provided for tool:', toolData);
        return;
      }
      
      // Check platform
      const isElectron = window.electron !== undefined;
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      
      console.log('🔍 Platform check:', { isElectron, isMobile, hasElectronAPI: !!window.electron });
      
      try {
        if (isElectron) {
          console.log('🖥️ Opening in Electron window...');
          // Electron: Open in new window
          const result = await window.electron.openToolWindow(toolData.url, toolData.name);
          console.log('✅ Electron window opened:', result);
          setTimeout(() => onClose(), 500);
        } else if (isMobile) {
          console.log('📱 Opening in mobile browser...');
          // Mobile: Open in-app browser (Capacitor)
          await Browser.open({ 
            url: toolData.url,
            presentationStyle: 'fullscreen',
            toolbarColor: '#f6f7fb'
          });
          console.log('✅ Mobile browser opened');
          setTimeout(() => onClose(), 500);
        } else {
          console.log('🌐 Opening in web browser tab...');
          // Web: Open in new tab
          window.open(toolData.url, '_blank');
          console.log('✅ Browser tab opened');
          setTimeout(() => onClose(), 500);
        }
      } catch (error) {
        console.error('❌ Failed to open tool:', error);
        console.log('🔄 Trying fallback: window.open');
        // Fallback to window.open
        window.open(toolData.url, '_blank');
        setTimeout(() => onClose(), 500);
      }
    }
    
    openTool();
  }, [toolData.url, toolData.name, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Info Container (shows briefly before opening) */}
      <div className="relative z-10 w-full max-w-md rounded-3xl overflow-hidden bg-white/95 backdrop-blur-2xl border border-white/40 shadow-2xl p-8 animate-scale-in text-center">
        <div className="w-20 h-20 rounded-2xl bg-white/80 border border-gray-200 shadow-lg flex items-center justify-center text-4xl mb-4 mx-auto">
          {toolData.icon}
        </div>
        <h2 className="text-xl font-semibold mb-2">{toolData.name}</h2>
        <p className="text-sm text-gray-600 mb-6">פותח בטאב חדש...</p>
        {preloadedPrompt && (
          <div className="p-4 rounded-xl bg-blue-50/80 backdrop-blur-md border border-blue-200/40 text-right">
            <p className="text-xs text-blue-900 mb-2">📋 הפרומפט שלך הועתק:</p>
            <p className="text-sm text-blue-800 italic">"{preloadedPrompt}"</p>
            <button 
              onClick={() => navigator.clipboard.writeText(preloadedPrompt)}
              className="mt-3 text-xs text-blue-700 hover:text-blue-900 font-medium"
            >
              לחץ כאן להעתיק שוב
            </button>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold transition-all"
        >
          סגור
        </button>
      </div>

      {/* Old iframe code removed - we now open tools in new window/tab */}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

