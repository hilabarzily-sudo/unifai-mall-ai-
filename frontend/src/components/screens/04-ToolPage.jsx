import React, { useState, useEffect } from "react";
import SavedPromptsSlider from "./10-SavedPromptsSlider";

// TOOL PAGE – Enhanced with Tabs, Reviews, Share, Similar Tools
// Tabs: Overview | Examples | Reviews | Pricing
// User rating system, share buttons, similar tools recommendations

export default function ToolPage({ 
  tool, 
  onUseTool, 
  onAddToFavorites, 
  onGoHome,
  onViewExample,
  onOpenTool,
  isLoggedIn,
  isFavorite = false,
  savedPrompts = [],
  onSelectPrompt,
  allTools = [],
  user = null
}) {
  const [activeTab, setActiveTab] = useState("overview");
  const [userRating, setUserRating] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showRatingDialog, setShowRatingDialog] = useState(false);

  // Mock data with safe defaults
  const toolData = {
    id: tool?.id || 1,
    name: tool?.name || "Midjourney",
    icon: tool?.icon || "🎨",
    category: tool?.category || "Design",
    tags: tool?.tags || ["Paid", "Pro", "Popular"],
    description: tool?.description || "AI image generation tool that creates stunning visuals from text prompts. Perfect for designers, artists, and creative professionals.",
    targetAudience: tool?.targetAudience || "מתאים למעצבים, אמנים, ומקצוענים יצירתיים",
    rating: tool?.rating || 4.8,
    reviewCount: tool?.reviewCount || 2847,
    pricing: tool?.pricing || "$10-30/month",
    speed: tool?.speed || "Fast (30-60 sec)",
    tech: tool?.tech || "Diffusion Models",
    limitations: tool?.limitations || "Limited free tier, queue times during peak hours",
    url: tool?.url,
    logoUrl: tool?.logoUrl,
    isFree: tool?.isFree,
    featured: tool?.featured,
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

  // Find similar tools (same category, exclude current)
  const similarTools = allTools
    .filter(t => t.id !== toolData.id && t.category === toolData.category)
    .slice(0, 4);

  // Share functions
  const shareViaWhatsApp = () => {
    const text = `${toolData.name} - ${toolData.description}\n${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareViaEmail = () => {
    const subject = `Check out ${toolData.name} on UnifAI`;
    const body = `I found this amazing AI tool: ${toolData.name}\n\n${toolData.description}\n\nCheck it out: ${window.location.href}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('קישור הועתק ללוח!');
    setShowShareMenu(false);
  };

  const handleRateSubmit = () => {
    if (userRating > 0) {
      // TODO: Call API to save rating
      alert(`דירוג של ${userRating} כוכבים נשמר!`);
      setShowRatingDialog(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f7fb] to-[#eef1f8] text-gray-900 antialiased pb-32">
      {/* Header with Share Button */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={onGoHome} className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">פרטי כלי</h1>
          
          {/* Share Button */}
          <div className="relative">
            <button
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="w-10 h-10 rounded-xl bg-white/60 hover:bg-white flex items-center justify-center transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            
            {/* Share Menu Dropdown */}
            {showShareMenu && (
              <div className="absolute left-0 top-full mt-2 w-48 rounded-2xl border border-white/20 bg-white/95 backdrop-blur-xl shadow-2xl py-2 animate-fade-in">
                <button
                  onClick={shareViaWhatsApp}
                  className="w-full px-4 py-3 text-right hover:bg-gray-100/80 transition-all flex items-center gap-3"
                >
                  <span className="text-xl">💬</span>
                  <span className="text-sm font-medium">שתף ב-WhatsApp</span>
                </button>
                <button
                  onClick={shareViaEmail}
                  className="w-full px-4 py-3 text-right hover:bg-gray-100/80 transition-all flex items-center gap-3"
                >
                  <span className="text-xl">📧</span>
                  <span className="text-sm font-medium">שתף במייל</span>
                </button>
                <button
                  onClick={copyLink}
                  className="w-full px-4 py-3 text-right hover:bg-gray-100/80 transition-all flex items-center gap-3"
                >
                  <span className="text-xl">🔗</span>
                  <span className="text-sm font-medium">העתק קישור</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        
        {/* Saved Prompts Slider */}
        {isLoggedIn && savedPrompts.length > 0 && (
          <SavedPromptsSlider
            toolId={toolData.id}
            toolName={toolData.name}
            savedPrompts={savedPrompts.filter(p => p.toolId === toolData.id)}
            onSelectPrompt={onSelectPrompt}
          />
        )}
        
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
                  <span className="text-sm text-gray-600">({toolData.reviewCount} ביקורות)</span>
                </div>
                {isLoggedIn && (
                  <button
                    onClick={() => setShowRatingDialog(true)}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    דרג כלי זה
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <div className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-2 flex gap-2">
          {[
            { id: 'overview', label: 'סקירה', icon: '📝' },
            { id: 'examples', label: 'דוגמאות', icon: '🎨' },
            { id: 'reviews', label: 'ביקורות', icon: '⭐' },
            { id: 'pricing', label: 'מחירים', icon: '💰' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-transparent text-gray-700 hover:bg-white/60'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Description Card */}
            <section className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-6">
              <h2 className="text-lg font-semibold mb-3">מה הכלי הזה עושה</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{toolData.description}</p>
              <p className="text-sm text-gray-600">{toolData.targetAudience}</p>
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
          </div>
        )}

        {/* Tab Content: Examples */}
        {activeTab === 'examples' && (
          <div className="space-y-6">
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
          </div>
        )}

        {/* Tab Content: Reviews */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
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
                    <p className="text-sm text-gray-600">{toolData.reviewCount} ביקורות</p>
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
          </div>
        )}

        {/* Tab Content: Pricing */}
        {activeTab === 'pricing' && (
          <div className="space-y-6">
            <section className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-6">
              <h2 className="text-lg font-semibold mb-4">מידע על מחירים</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/60 backdrop-blur-md">
                  <h3 className="font-semibold mb-2">מחיר</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{toolData.pricing}</p>
                  <p className="text-sm text-gray-600">
                    {toolData.isFree ? '✅ כולל גרסה חינמית' : '💳 דורש מנוי בתשלום'}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/80 backdrop-blur-md border border-blue-200">
                  <p className="text-sm text-blue-800">
                    💡 <strong>טיפ:</strong> בדוק את האתר הרשמי לפרטים מעודכנים על מחירים ומבצעים.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Similar Tools Section */}
        {similarTools.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold mb-4">כלים דומים שעשויים לעניין אותך</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {similarTools.map((similarTool) => (
                <article
                  key={similarTool.id}
                  onClick={() => onOpenTool && onOpenTool(similarTool)}
                  className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-4 hover:bg-white/60 hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-white/60 flex items-center justify-center text-3xl shadow-md">
                      {similarTool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base mb-1">{similarTool.name}</h3>
                      <p className="text-xs text-gray-600">{similarTool.category}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm font-medium">{similarTool.rating}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Rating Dialog */}
      {showRatingDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4 animate-scale-in">
            <h2 className="text-2xl font-bold mb-4 text-center">דרג את {toolData.name}</h2>
            <p className="text-gray-600 text-center mb-6">איך היה החוויה שלך עם הכלי הזה?</p>
            
            {/* Star Rating */}
            <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setUserRating(star)}
                  className="text-5xl transition-all hover:scale-110"
                >
                  {star <= userRating ? '⭐' : '☆'}
                </button>
              ))}
            </div>
            
            {userRating > 0 && (
              <p className="text-center text-gray-700 mb-6">
                {userRating === 5 && "מעולה! 🎉"}
                {userRating === 4 && "טוב מאוד! 👍"}
                {userRating === 3 && "בסדר 👌"}
                {userRating === 2 && "יכול להיות יותר טוב 😕"}
                {userRating === 1 && "לא משהו 😞"}
              </p>
            )}
            
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowRatingDialog(false);
                  setUserRating(0);
                }}
                className="flex-1 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 font-medium transition-all"
              >
                ביטול
              </button>
              <button
                onClick={handleRateSubmit}
                disabled={userRating === 0}
                className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                  userRating > 0
                    ? 'bg-gray-900 hover:bg-gray-800 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                שלח דירוג
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Bar - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-t border-white/20 shadow-2xl">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <button
            onClick={onUseTool}
            className="flex-1 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-all shadow-lg"
          >
            השתמש בכלי
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
