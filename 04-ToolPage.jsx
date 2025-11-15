import React, { useState } from "react";

// TOOL PAGE – App Store Application Page Logic
// Header + Description + Examples Grid + Features + Reviews
// Bottom CTA bar: Use Tool | Add to Favorites | Home

export default function ToolPage({ 
  tool, 
  onUseTool, 
  onAddToFavorites, 
  onGoHome,
  onViewExample,
  isLoggedIn,
  isFavorite = false,
  showSavedPrompts = false 
}) {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const toolData = tool || {
    id: 1,
    name: "Midjourney",
    icon: "🎨",
    category: "Design",
    tags: ["Paid", "Pro", "Popular"],
    description: "AI image generation tool that creates stunning visuals from text prompts. Perfect for designers, artists, and creative professionals.",
    targetAudience: "מתאים למעצבים, אמנים, ומקצוענים יצירתיים",
    rating: 4.8,
    reviewCount: 2847,
    pricing: "$10-30/month",
    speed: "Fast (30-60 sec)",
    tech: "Diffusion Models",
    limitations: "Limited free tier, queue times during peak hours",
  };

  const examples = [
    { id: 1, image: "🖼️", prompt: "Cyberpunk city at sunset...", type: "image" },
    { id: 2, image: "🌅", prompt: "Mountain landscape with...", type: "image" },
    { id: 3, image: "🎭", prompt: "Portrait of a futuristic...", type: "image" },
    { id: 4, image: "🏛️", prompt: "Ancient temple in jungle...", type: "image" },
    { id: 5, image: "🚀", prompt: "Space station orbiting...", type: "image" },
    { id: 6, image: "🦄", prompt: "Magical creature in forest...", type: "image" },
  ];

  const reviews = [
    { id: 1, user: "Sarah M.", rating: 5, text: "Amazing tool! Changed my workflow completely", date: "2 days ago" },
    { id: 2, user: "John D.", rating: 4, text: "Great results but can be slow during peak times", date: "1 week ago" },
    { id: 3, user: "Maya R.", rating: 5, text: "Best AI image generator I've used", date: "2 weeks ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f7fb] to-[#eef1f8] text-gray-900 antialiased pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={onGoHome} className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">Tool Details</h1>
          <div className="w-6" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        
        {/* Tool Header */}
        <section className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-white/60 backdrop-blur-md flex items-center justify-center text-5xl shadow-lg flex-shrink-0">
              {toolData.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{toolData.name}</h1>
              <p className="text-sm text-gray-600 mb-3">{toolData.category}</p>
              <div className="flex gap-2 flex-wrap mb-4">
                {toolData.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/60 backdrop-blur-md text-sm font-medium border border-white/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <span className="text-2xl">⭐</span>
                  <span className="font-semibold">{toolData.rating}</span>
                  <span className="text-sm text-gray-600">({toolData.reviewCount})</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description Card */}
        <section className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-6">
          <h2 className="text-lg font-semibold mb-3">מה הכלי הזה עושה</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{toolData.description}</p>
          <p className="text-sm text-gray-600">{toolData.targetAudience}</p>
        </section>

        {/* Examples Grid - Pinterest Style */}
        <section>
          <h2 className="text-xl font-semibold mb-4">דוגמאות מהכלי</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {examples.map((example, idx) => (
              <article
                key={example.id}
                onClick={() => onViewExample(example)}
                className={`rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer ${
                  idx % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                  {example.image}
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-600 line-clamp-2">{example.prompt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tool Features */}
        <section className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-6">
          <h2 className="text-lg font-semibold mb-4">מאפייני הכלי</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-600">מחיר</span>
              <p className="font-medium">{toolData.pricing}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">מהירות</span>
              <p className="font-medium">{toolData.speed}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">טכנולוגיה</span>
              <p className="font-medium">{toolData.tech}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">מגבלות</span>
              <p className="font-medium text-sm">{toolData.limitations}</p>
            </div>
          </div>
        </section>

        {/* Reviews - App Store Style */}
        <section className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-6">
          <h2 className="text-lg font-semibold mb-4">ביקורות ודירוגים</h2>
          
          {/* Rating Breakdown */}
          <div className="mb-6 p-4 rounded-xl bg-white/60 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl font-bold">{toolData.rating}</span>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">{toolData.reviewCount} reviews</p>
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 rounded-xl bg-white/60 backdrop-blur-md">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-medium text-sm">{review.user}</span>
                    <div className="flex gap-0.5 mt-1">
                      {[1,2,3,4,5].map(i => (
                        <span key={i} className={i <= review.rating ? "text-yellow-500" : "text-gray-300"}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <p className="text-sm text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom CTA Bar - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-t border-white/20 shadow-2xl">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <button
            onClick={onUseTool}
            className="flex-1 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-all shadow-lg"
          >
            Use Tool
          </button>
          <button
            onClick={onAddToFavorites}
            className={`px-6 py-3.5 rounded-xl border transition-all ${
              isFavorite
                ? "bg-yellow-500/20 border-yellow-500/40 text-yellow-800"
                : "bg-white/60 border-white/30 hover:bg-white"
            }`}
          >
            {isFavorite ? "★" : "☆"}
          </button>
          <button
            onClick={onGoHome}
            className="px-6 py-3.5 rounded-xl bg-white/60 border border-white/30 hover:bg-white transition-all"
          >
            🏠
          </button>
        </div>
      </div>
    </div>
  );
}

