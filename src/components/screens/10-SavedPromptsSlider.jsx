import React from "react";

// SAVED PROMPTS SLIDER – Appears when opening tool from Favorites
// Horizontal scrolling slider at top of Tool Page
// Quick access to user's saved prompts for this specific tool

export default function SavedPromptsSlider({ 
  toolId,
  toolName,
  savedPrompts = [],
  onSelectPrompt 
}) {
  // Mock data
  const prompts = savedPrompts.length > 0 ? savedPrompts : [
    { id: 1, text: "Cyberpunk cityscape at golden hour with neon lights...", savedAt: "2 days ago", preview: "🌆" },
    { id: 2, text: "Mountain landscape with aurora borealis...", savedAt: "1 week ago", preview: "🏔️" },
    { id: 3, text: "Futuristic warrior portrait in sci-fi armor...", savedAt: "3 days ago", preview: "⚔️" },
    { id: 4, text: "Ancient temple covered in jungle vines...", savedAt: "5 days ago", preview: "🏛️" },
  ];

  if (prompts.length === 0) return null;

  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-gray-900">הפרומפטים השמורים שלך ל-{toolName}</h3>
        <span className="text-xs text-gray-600">{prompts.length} saved</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
        {prompts.map((prompt) => (
          <article
            key={prompt.id}
            onClick={() => onSelectPrompt(prompt)}
            className="flex-shrink-0 w-72 rounded-xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-lg p-4 hover:bg-white/60 hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
          >
            <div className="flex items-start gap-3">
              {/* Preview Icon */}
              <div className="w-12 h-12 rounded-lg bg-white/60 flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                {prompt.preview}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800 line-clamp-2 mb-2">
                  {prompt.text}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{prompt.savedAt}</span>
                  <button className="text-xs text-gray-700 hover:text-gray-900 font-medium">
                    Use →
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Add New Prompt Card */}
        <article className="flex-shrink-0 w-72 rounded-xl border-2 border-dashed border-gray-300/60 bg-white/20 backdrop-blur-xl p-4 hover:bg-white/40 hover:border-gray-400/60 transition-all cursor-pointer">
          <div className="h-full flex flex-col items-center justify-center gap-2 text-center">
            <div className="w-12 h-12 rounded-lg bg-white/60 flex items-center justify-center text-2xl">
              ➕
            </div>
            <p className="text-sm font-medium text-gray-700">Create New</p>
            <p className="text-xs text-gray-500">Save your next prompt</p>
          </div>
        </article>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

