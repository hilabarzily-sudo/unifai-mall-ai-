import React, { useState } from "react";

// PROMPT REVEAL SHEET – Sora Style Bottom Sheet
// Glass blur background
// Tabs: Prompt | Parameters
// Actions: Copy | Try in Tool | Save Changes

export default function PromptRevealSheet({ 
  prompt, 
  onClose, 
  onCopy, 
  onTryInTool,
  onSave,
  isEditable = false 
}) {
  const [activeTab, setActiveTab] = useState("prompt");
  const [editedPrompt, setEditedPrompt] = useState(prompt?.text || "");

  // Mock data if not provided
  const promptData = prompt || {
    id: 1,
    text: "A cyberpunk cityscape at golden hour with neon lights reflecting off wet streets, flying cars in the distance, volumetric fog, highly detailed, 8k resolution, cinematic lighting",
    parameters: {
      model: "Midjourney v6",
      aspectRatio: "16:9",
      stylization: "750",
      quality: "1",
      chaos: "0",
      seed: "1234567890",
      version: "6.0",
      style: "raw",
    },
    tool: "Midjourney",
    createdAt: "2024-01-15",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet Container */}
      <div className="relative z-10 w-full max-w-4xl rounded-t-[40px] bg-white/90 backdrop-blur-2xl border-t border-white/40 shadow-2xl animate-slide-up">
        
        {/* Handle Bar */}
        <div className="flex justify-center pt-4 pb-2">
          <div className="w-12 h-1.5 rounded-full bg-gray-300" />
        </div>

        {/* Content */}
        <div className="px-8 pb-8 pt-4 max-h-[85vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-1">Prompt Details</h2>
              <p className="text-sm text-gray-600">{promptData.tool} • {promptData.createdAt}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-gray-900/10 hover:bg-gray-900/20 flex items-center justify-center transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 p-1.5 rounded-2xl bg-gray-100/80 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("prompt")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                activeTab === "prompt"
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              📝 Prompt
            </button>
            <button
              onClick={() => setActiveTab("parameters")}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                activeTab === "parameters"
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              ⚙️ Parameters
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "prompt" ? (
            <div className="mb-6">
              {isEditable ? (
                <textarea
                  value={editedPrompt}
                  onChange={(e) => setEditedPrompt(e.target.value)}
                  className="w-full min-h-[200px] p-5 rounded-2xl bg-gray-100/60 backdrop-blur-md border border-gray-200/50 focus:border-gray-400 focus:bg-white/80 outline-none transition-all text-gray-800 leading-relaxed resize-none"
                  placeholder="Enter your prompt here..."
                />
              ) : (
                <div className="p-6 rounded-2xl bg-gray-100/60 backdrop-blur-md">
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {promptData.text}
                  </p>
                </div>
              )}
              
              {/* Prompt Stats */}
              <div className="mt-3 flex items-center gap-4 text-xs text-gray-600">
                <span>{promptData.text.split(' ').length} words</span>
                <span>{promptData.text.length} characters</span>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              {/* Parameters Grid */}
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(promptData.parameters).map(([key, value]) => (
                  <div key={key} className="p-4 rounded-xl bg-gray-100/60 backdrop-blur-md">
                    <p className="text-xs text-gray-600 mb-1.5 capitalize font-medium">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    <p className="font-semibold text-sm text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onCopy}
              className="flex-1 py-4 px-5 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all font-medium text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </button>

            {isEditable && (
              <button
                onClick={() => onSave(editedPrompt)}
                className="flex-1 py-4 px-5 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all font-medium text-sm flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Save Changes
              </button>
            )}

            <button
              onClick={onTryInTool}
              className="flex-1 py-4 px-5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Try in Tool
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 rounded-xl bg-blue-50/60 backdrop-blur-md border border-blue-200/40">
            <p className="text-xs text-blue-900 leading-relaxed">
              💡 Tip: Copy this prompt and modify it in the tool to create variations of this output.
            </p>
          </div>
        </div>
      </div>

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
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

