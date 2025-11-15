import React, { useState } from "react";

// SEARCH PAGE – Universal search
// Clean search bar with Glassmorphism keyboard
// Real-time results filtering

export default function SearchPage({ onSelectTool, onClose }) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Mock search results
  const allTools = [
    { id: 1, name: "Midjourney", icon: "🎨", category: "Design", tags: ["Image", "Pro"] },
    { id: 2, name: "ChatGPT", icon: "🤖", category: "AI Assistant", tags: ["Text", "Popular"] },
    { id: 3, name: "DALL-E", icon: "🖼️", category: "Design", tags: ["Image", "Free"] },
    { id: 4, name: "Runway", icon: "🎬", category: "Video", tags: ["Video", "Pro"] },
    { id: 5, name: "Claude", icon: "🧠", category: "AI Assistant", tags: ["Text", "Advanced"] },
    { id: 6, name: "ElevenLabs", icon: "🎙️", category: "Audio", tags: ["Voice", "Pro"] },
    { id: 7, name: "Canva AI", icon: "✨", category: "Design", tags: ["Design", "Fast"] },
    { id: 8, name: "Perplexity", icon: "🔍", category: "Research", tags: ["Search", "Free"] },
  ];

  // Filter results
  const results = query.trim()
    ? allTools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query.toLowerCase()) ||
          tool.category.toLowerCase().includes(query.toLowerCase()) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  // Popular searches
  const popularSearches = ["Image Generation", "ChatGPT", "Video AI", "Writing", "Voice Clone"];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#f6f7fb] to-[#eef1f8] animate-fade-in">
      {/* Header with Search Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white/60 hover:bg-white/80 flex items-center justify-center transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Search Input - Glassmorphism */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                placeholder="חפש כלי AI, קטגוריות, תגיות..."
                className="w-full py-3.5 pl-12 pr-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 focus:border-gray-400 focus:bg-white outline-none transition-all text-base shadow-lg"
                autoFocus
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {query.trim() === "" ? (
          // Popular Searches
          <section>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">חיפושים פופולריים</h2>
            <div className="flex flex-wrap gap-3">
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => setQuery(search)}
                  className="px-5 py-3 rounded-xl bg-white/60 backdrop-blur-xl border border-white/30 hover:bg-white hover:shadow-lg transition-all text-sm font-medium"
                >
                  🔍 {search}
                </button>
              ))}
            </div>

            {/* Recent Searches (Mock) */}
            <div className="mt-12">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">חיפושים אחרונים</h2>
              <div className="space-y-2">
                {["Midjourney", "ChatGPT alternatives", "Video editing AI"].map((search) => (
                  <button
                    key={search}
                    onClick={() => setQuery(search)}
                    className="w-full text-right px-5 py-3 rounded-xl bg-white/40 backdrop-blur-xl border border-white/20 hover:bg-white/60 hover:shadow-md transition-all text-sm"
                  >
                    <span className="text-gray-400 mr-2">🕐</span>
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </section>
        ) : results.length > 0 ? (
          // Search Results
          <section>
            <h2 className="text-sm text-gray-600 mb-4">
              {results.length} תוצאות עבור "{query}"
            </h2>
            <div className="space-y-3">
              {results.map((tool) => (
                <article
                  key={tool.id}
                  onClick={() => onSelectTool(tool)}
                  className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-5 hover:bg-white/60 hover:shadow-2xl hover:scale-[1.01] transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-white/60 flex items-center justify-center text-4xl shadow-md flex-shrink-0">
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base mb-1">{tool.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{tool.category}</p>
                      <div className="flex gap-2 flex-wrap">
                        {tool.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-white/60 backdrop-blur-md text-xs text-gray-700 border border-white/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : (
          // No Results
          <section className="text-center py-12">
            <div className="w-24 h-24 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 flex items-center justify-center text-5xl mx-auto mb-6">
              🔍
            </div>
            <h3 className="text-xl font-semibold mb-2">לא נמצאו תוצאות</h3>
            <p className="text-gray-600 mb-6">נסה לחפש במילים אחרות או בקטגוריות</p>
            <button
              onClick={() => setQuery("")}
              className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium transition-all"
            >
              נקה חיפוש
            </button>
          </section>
        )}
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

