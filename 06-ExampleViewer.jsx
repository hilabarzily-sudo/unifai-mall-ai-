import React, { useState } from "react";

// EXAMPLE VIEWER – Sora-style Popup
// Clean white/transparent background
// Output in center with hover effect
// View Prompt button + Share icons
// CTA: "Open Tool"

export default function ExampleViewer({ example, onClose, onViewPrompt, onOpenTool }) {
  const [showPrompt, setShowPrompt] = useState(false);

  // Mock data if not provided
  const exampleData = example || {
    id: 1,
    image: "🖼️",
    prompt: "A cyberpunk cityscape at golden hour with neon lights reflecting off wet streets, flying cars in the distance, volumetric fog, highly detailed, 8k resolution",
    tool: "Midjourney",
    toolIcon: "🎨",
    parameters: {
      model: "Midjourney v6",
      aspectRatio: "16:9",
      stylization: "High",
      quality: "Standard",
      seed: "1234567890",
    },
    createdAt: "2 days ago",
    likes: 234,
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/95 backdrop-blur-xl animate-fade-in">
      {/* Close Background */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-900/10 hover:bg-gray-900/20 flex items-center justify-center transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            {/* Share Button */}
            <button className="w-10 h-10 rounded-full bg-gray-900/10 hover:bg-gray-900/20 flex items-center justify-center transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>

            {/* Like Button */}
            <button className="flex items-center gap-2 px-4 h-10 rounded-full bg-gray-900/10 hover:bg-gray-900/20 transition-all">
              <span>♡</span>
              <span className="text-sm font-medium">{exampleData.likes}</span>
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative mb-6 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl group">
          <div className="aspect-video flex items-center justify-center">
            <div className="text-[120px] transition-transform duration-300 group-hover:scale-105">
              {exampleData.image}
            </div>
          </div>

          {/* Floating Hover Badge */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{exampleData.toolIcon}</span>
              <div>
                <p className="text-xs text-gray-600">Created with</p>
                <p className="font-semibold text-sm">{exampleData.tool}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowPrompt(true)}
            className="flex-1 py-4 px-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 hover:bg-white hover:shadow-lg transition-all font-medium"
          >
            View Prompt
          </button>
          <button
            onClick={onOpenTool}
            className="flex-1 py-4 px-6 rounded-2xl bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-all shadow-xl"
          >
            Open Tool
          </button>
        </div>

        {/* Tool Info Footer */}
        <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
          <span>{exampleData.createdAt}</span>
          <span>{exampleData.parameters.aspectRatio} • {exampleData.parameters.quality}</span>
        </div>
      </div>

      {/* Prompt Reveal Sheet */}
      {showPrompt && (
        <div className="absolute inset-0 z-20 flex items-end justify-center animate-slide-up">
          <div className="w-full max-w-3xl rounded-t-[32px] bg-white/95 backdrop-blur-2xl border-t border-white/40 shadow-2xl p-8 max-h-[80vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Prompt Details</h3>
              <button
                onClick={() => setShowPrompt(false)}
                className="w-8 h-8 rounded-full bg-gray-900/10 hover:bg-gray-900/20 flex items-center justify-center transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 p-1 rounded-2xl bg-gray-100/60">
              <button className="flex-1 py-2.5 px-4 rounded-xl bg-gray-900 text-white text-sm font-medium transition-all">
                Prompt
              </button>
              <button className="flex-1 py-2.5 px-4 rounded-xl text-gray-600 hover:text-gray-900 text-sm font-medium transition-all">
                Parameters
              </button>
            </div>

            {/* Prompt Text */}
            <div className="p-5 rounded-2xl bg-gray-100/60 mb-6">
              <p className="text-gray-800 leading-relaxed">
                {exampleData.prompt}
              </p>
            </div>

            {/* Parameters Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(exampleData.parameters).map(([key, value]) => (
                <div key={key} className="p-4 rounded-xl bg-gray-100/60">
                  <p className="text-xs text-gray-600 mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                  <p className="font-medium text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 py-3 px-4 rounded-xl bg-white/80 border border-gray-200 hover:bg-white hover:shadow-md transition-all font-medium text-sm">
                📋 Copy Prompt
              </button>
              <button
                onClick={onOpenTool}
                className="flex-1 py-3 px-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm transition-all shadow-lg"
              >
                Try in Tool
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

