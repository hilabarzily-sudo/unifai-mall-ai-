import React, { useState } from "react";

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

  // Open in new tab instead of iframe (better UX)
  React.useEffect(() => {
    if (toolData.url) {
      window.open(toolData.url, '_blank');
      // Close the popup immediately
      setTimeout(() => onClose(), 500);
    }
  }, [toolData.url, onClose]);

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

      {/* Old WebView Container - kept for reference but hidden */}
      <div className="hidden relative z-10 w-full h-full max-w-7xl max-h-[90vh] rounded-3xl overflow-hidden bg-white/95 backdrop-blur-2xl border border-white/40 shadow-2xl flex flex-col animate-scale-in">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/80 border border-gray-200/50 flex items-center justify-center text-xl shadow-sm">
              {toolData.icon}
            </div>
            <div>
              <h2 className="font-semibold text-sm">{toolData.name}</h2>
              <p className="text-xs text-gray-600">{toolData.url}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Refresh Button */}
            <button
              onClick={() => setIsLoading(true)}
              className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
              title="Refresh"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>

            {/* Open in New Tab */}
            <button
              onClick={() => window.open(toolData.url, '_blank')}
              className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all"
              title="Open in new tab"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 text-white flex items-center justify-center transition-all ml-2"
              title="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Preloaded Prompt Banner */}
        {preloadedPrompt && (
          <div className="px-6 py-3 bg-blue-50/80 backdrop-blur-md border-b border-blue-200/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-blue-900">
                Prompt loaded: <span className="font-medium">"{preloadedPrompt.substring(0, 50)}..."</span>
              </p>
            </div>
            <button className="text-xs text-blue-700 hover:text-blue-900 font-medium">
              📋 Copy
            </button>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-20">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/80 border border-gray-200 shadow-lg flex items-center justify-center text-3xl mb-4 mx-auto">
                {toolData.icon}
              </div>
              <p className="text-sm text-gray-600 mb-4">Loading {toolData.name}...</p>
              <div className="flex gap-1.5 justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-900/60 animate-bounce [animation-delay:0ms]" />
                <div className="w-2 h-2 rounded-full bg-gray-900/60 animate-bounce [animation-delay:150ms]" />
                <div className="w-2 h-2 rounded-full bg-gray-900/60 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        )}

        {/* iframe/WebView Container */}
        <div className="flex-1 bg-white relative">
          <iframe
            src={toolData.url}
            className="w-full h-full border-0"
            title={toolData.name}
            onLoad={() => setIsLoading(false)}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
          
          {/* Placeholder Demo Content (since iframe won't work in demo) */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center pointer-events-none">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">{toolData.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{toolData.name}</h3>
              <p className="text-sm text-gray-600 mb-4">Tool interface would load here</p>
              {preloadedPrompt && (
                <div className="max-w-md mx-auto p-4 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200/50">
                  <p className="text-xs text-gray-600 mb-2">Preloaded prompt:</p>
                  <p className="text-sm text-gray-800 italic">"{preloadedPrompt}"</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-gray-200/50 bg-white/80 backdrop-blur-xl flex items-center justify-between">
          <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-sm font-medium transition-all">
            💾 Save Output
          </button>
          <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-sm font-medium transition-all">
            ⭐ Add to Favorites
          </button>
        </div>
      </div>

      <style jsx>{`
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

