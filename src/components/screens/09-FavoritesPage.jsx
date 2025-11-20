import React from "react";

// FAVORITES PAGE – Saved tools, prompts, examples
// Notion-style "Recently Saved" slider
// Pinterest asymmetric collage of saved examples

export default function FavoritesPage({ 
  favoriteTools = [], 
  savedPrompts = [], 
  savedExamples = [],
  onOpenTool,
  onViewPrompt,
  onViewExample 
}) {
  // Mock data
  const tools = favoriteTools.length > 0 ? favoriteTools : [
    { id: 1, name: "Midjourney", icon: "🎨", lastUsed: "2 days ago", category: "Design" },
    { id: 2, name: "ChatGPT", icon: "🤖", lastUsed: "5 hours ago", category: "AI Assistant" },
    { id: 3, name: "Runway", icon: "🎬", lastUsed: "1 week ago", category: "Video" },
  ];

  const prompts = savedPrompts.length > 0 ? savedPrompts : [
    { id: 1, text: "Cyberpunk cityscape at golden hour...", tool: "Midjourney", savedAt: "Yesterday" },
    { id: 2, text: "Write a blog post about AI trends...", tool: "ChatGPT", savedAt: "2 days ago" },
    { id: 3, text: "Mountain landscape with aurora...", tool: "DALL-E", savedAt: "1 week ago" },
  ];

  const examples = savedExamples.length > 0 ? savedExamples : [
    { id: 1, image: "🖼️", prompt: "Futuristic city", tool: "Midjourney" },
    { id: 2, image: "🌅", prompt: "Mountain vista", tool: "DALL-E" },
    { id: 3, image: "🎭", prompt: "Portrait art", tool: "Midjourney" },
    { id: 4, image: "🏛️", prompt: "Ancient temple", tool: "Stable Diffusion" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f7fb] to-[#eef1f8] text-gray-900 antialiased pb-20">
      
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-xl font-semibold">המועדפים שלי</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-12">
        
        {/* Recently Saved - Notion-style Slider */}
        <section>
          <h2 className="text-xl font-semibold mb-4">נשמר לאחרונה</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {tools.slice(0, 3).map((tool) => (
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
                    <h3 className="font-semibold">{tool.name}</h3>
                    <p className="text-xs text-gray-600">{tool.category}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">נפתח לאחרונה: {tool.lastUsed}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Favorite Tools */}
        <section>
          <h2 className="text-xl font-semibold mb-4">כלים שמורים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <article
                key={tool.id}
                onClick={() => onOpenTool(tool)}
                className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-5 hover:bg-white/60 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-white/60 flex items-center justify-center text-4xl shadow-md">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">{tool.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{tool.category}</p>
                      <p className="text-xs text-gray-500 mt-1">Last used: {tool.lastUsed}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-all">
                    Open
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Saved Prompts */}
        <section>
          <h2 className="text-xl font-semibold mb-4">פרומפטים שמורים</h2>
          <div className="space-y-3">
            {prompts.map((prompt) => (
              <article
                key={prompt.id}
                onClick={() => onViewPrompt(prompt)}
                className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-5 hover:bg-white/60 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-gray-800 mb-2 line-clamp-2">{prompt.text}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span>{prompt.tool}</span>
                      <span>•</span>
                      <span>{prompt.savedAt}</span>
                    </div>
                  </div>
                  <button className="ml-4 px-3 py-1.5 rounded-lg bg-white/80 hover:bg-white text-sm transition-all">
                    📋
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Saved Examples - Pinterest Collage */}
        <section>
          <h2 className="text-xl font-semibold mb-4">דוגמאות שמורות</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {examples.map((example, idx) => (
              <article
                key={example.id}
                onClick={() => onViewExample(example)}
                className={`rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer ${
                  idx === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl">
                  {example.image}
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-600 line-clamp-1">{example.prompt}</p>
                  <p className="text-xs text-gray-500 mt-1">{example.tool}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <style>{`
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

