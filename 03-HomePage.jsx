import React, { useState } from "react";

// HOME PAGE – Wolt Dynamic Logic + Notion-style Sliders
// Dynamic Sections: History, Recommended, Filters, Categories
// Glassmorphism cards with horizontal scrolling

export default function HomePage({ isLoggedIn, onOpenAuth, onOpenTool }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Mock Data
  const recentTools = [
    { id: 1, name: "ChatGPT", icon: "🤖", tags: ["Text", "Chat"], category: "AI Assistant" },
    { id: 2, name: "Midjourney", icon: "🎨", tags: ["Image", "Design"], category: "Design" },
    { id: 3, name: "Runway", icon: "🎬", tags: ["Video", "Creative"], category: "Video" },
  ];

  const recommendedTools = [
    { id: 4, name: "Claude", icon: "🧠", tags: ["Text", "Pro"], category: "AI Assistant", featured: true },
    { id: 5, name: "DALL-E", icon: "🖼️", tags: ["Image", "Free"], category: "Design" },
    { id: 6, name: "ElevenLabs", icon: "🎙️", tags: ["Audio", "Voice"], category: "Audio" },
    { id: 7, name: "Canva AI", icon: "✨", tags: ["Design", "Fast"], category: "Design" },
    { id: 8, name: "Ideogram", icon: "🔤", tags: ["Image", "Typography"], category: "Design" },
    { id: 9, name: "Perplexity", icon: "🔍", tags: ["Search", "Research"], category: "Research" },
  ];

  const freeTools = [
    { id: 10, name: "Gemini", icon: "💎", tags: ["Free", "Fast"], category: "AI Assistant" },
    { id: 11, name: "Leonardo AI", icon: "🎭", tags: ["Free", "Image"], category: "Design" },
  ];

  const categories = [
    {
      name: "Design",
      tools: [
        { id: 12, name: "Midjourney", icon: "🎨", tags: ["Pro", "Popular"] },
        { id: 13, name: "Canva AI", icon: "✨", tags: ["Free", "Fast"] },
        { id: 14, name: "Runway", icon: "🎬", tags: ["Pro", "Video"] },
        { id: 15, name: "Ideogram", icon: "🔤", tags: ["Free", "Typography"] },
        { id: 16, name: "Flair", icon: "📸", tags: ["Pro", "Product"] },
      ],
    },
    {
      name: "Writing",
      tools: [
        { id: 17, name: "ChatGPT", icon: "🤖", tags: ["Popular", "Pro"] },
        { id: 18, name: "Claude", icon: "🧠", tags: ["Pro", "Advanced"] },
        { id: 19, name: "Jasper", icon: "✍️", tags: ["Marketing", "Content"] },
      ],
    },
    {
      name: "Video",
      tools: [
        { id: 20, name: "Runway", icon: "🎬", tags: ["Pro", "Popular"] },
        { id: 21, name: "Pika Labs", icon: "🎥", tags: ["Free", "Beta"] },
        { id: 22, name: "Synthesia", icon: "👤", tags: ["Pro", "Avatar"] },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f7fb] to-[#eef1f8] text-gray-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md">
              <span className="text-lg font-bold">U</span>
            </div>
            <h1 className="text-xl font-semibold">UnifAI</h1>
          </div>

          <button
            onClick={isLoggedIn ? undefined : onOpenAuth}
            className="px-4 py-2 rounded-xl bg-gray-900/90 hover:bg-gray-900 text-white text-sm font-medium transition-all shadow-md"
          >
            {isLoggedIn ? "הפרופיל שלי" : "התחברות / הרשמה"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        
        {/* Section 1: History of Used Tools */}
        {isLoggedIn && recentTools.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4">היסטוריית כלים אחרונים</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {recentTools.map((tool) => (
                <article
                  key={tool.id}
                  onClick={() => onOpenTool(tool)}
                  className="flex-shrink-0 w-72 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-5 hover:bg-white/60 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 rounded-xl bg-white/60 flex items-center justify-center text-3xl shadow-md">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{tool.name}</h3>
                      <p className="text-xs text-gray-600">{tool.category}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {tool.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/60 backdrop-blur-md text-xs text-gray-700 border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Section 2: Recommended For You */}
        <section>
          <h2 className="text-xl font-semibold mb-4">מומלץ עבורך</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedTools.map((tool) => (
              <article
                key={tool.id}
                onClick={() => onOpenTool(tool)}
                className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-5 hover:bg-white/60 hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer"
              >
                {tool.featured && (
                  <div className="mb-2">
                    <span className="px-2 py-1 rounded-lg bg-yellow-500/20 text-yellow-800 text-xs font-medium border border-yellow-500/30">
                      ⭐ Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-16 h-16 rounded-xl bg-white/60 flex items-center justify-center text-4xl shadow-md">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{tool.name}</h3>
                    <p className="text-xs text-gray-600">{tool.category}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {tool.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/60 backdrop-blur-md text-xs text-gray-700 border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: Free to Use Today */}
        <section>
          <h2 className="text-xl font-semibold mb-4">חינמי לשימוש היום</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {freeTools.map((tool) => (
              <article
                key={tool.id}
                onClick={() => onOpenTool(tool)}
                className="flex-shrink-0 w-72 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-5 hover:bg-white/60 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-xl bg-white/60 flex items-center justify-center text-3xl shadow-md">
                    {tool.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{tool.name}</h3>
                    <p className="text-xs text-gray-600">{tool.category}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {tool.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-green-500/20 text-green-800 text-xs font-medium border border-green-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 4: Categories */}
        {categories.map((category) => (
          <section key={category.name}>
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {category.tools.map((tool) => (
                <article
                  key={tool.id}
                  onClick={() => onOpenTool(tool)}
                  className="flex-shrink-0 w-64 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-5 hover:bg-white/60 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center text-2xl shadow-md">
                      {tool.icon}
                    </div>
                    <h3 className="font-semibold text-sm">{tool.name}</h3>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {tool.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/60 backdrop-blur-md text-xs text-gray-700 border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

