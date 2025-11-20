import React, { useState, useRef, useEffect } from "react";

// HOME PAGE – Wolt-Style Design with Floating Top Bar, Search, and Categories
// Modern floating UI with profile menu, search bar, and colorful category cards

export default function HomePage({ 
  isLoggedIn, 
  onOpenAuth, 
  onOpenTool, 
  onAddToFavorites, 
  onOpenAccount,
  onLogout,
  onNavigate,
  favorites = [],
  allTools = [],
  categories = [],
  recentTools = []
}) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const profileMenuRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter tools by search
  let searchResults = allTools;
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    searchResults = searchResults.filter(tool => 
      tool.name.toLowerCase().includes(query) ||
      tool.category?.toLowerCase().includes(query) ||
      tool.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Sections data (Wolt-style Dynamic Sections)
  const historyTools = isLoggedIn ? recentTools.slice(0, 10) : [];
  const recommendedTools = allTools.filter(tool => tool.featured || tool.rating >= 4.5).slice(0, 12);
  const freeTools = allTools.filter(tool => tool.isFree || tool.pricing?.toLowerCase() === 'free').slice(0, 10);
  
  // Group tools by category for category sections
  const toolsByCategory = {};
  categories.forEach(cat => {
    const catName = cat.name_he || cat.name || cat.nameHe;
    toolsByCategory[catName] = allTools.filter(tool => 
      tool.category === catName
    ).slice(0, 10);
  });

  // Debug: Log data to console
  console.log('📊 HomePage Data:', {
    allToolsCount: allTools.length,
    categoriesCount: categories.length,
    recentToolsCount: recentTools.length,
    recommendedToolsCount: recommendedTools.length,
    freeToolsCount: freeTools.length,
    toolsByCategory: Object.keys(toolsByCategory).map(cat => ({
      category: cat,
      count: toolsByCategory[cat].length
    }))
  });

  // Category colors for Wolt-style cards
  const categoryColors = {
    'כתיבה': { bg: '#FFF4E6', emoji: '✍️' },
    'תמונה': { bg: '#FFE5F5', emoji: '🎨' },
    'וידאו': { bg: '#E8F5E9', emoji: '🎬' },
    'קוד': { bg: '#E3F2FD', emoji: '💻' },
    'מוזיקה': { bg: '#F3E5F5', emoji: '🎵' },
    'שיווק': { bg: '#FFF3E0', emoji: '📊' },
    'עסקים': { bg: '#E0F2F1', emoji: '💼' },
    'חינוך': { bg: '#FFEBEE', emoji: '📚' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f7fb] to-[#eef1f8] text-gray-900 antialiased pb-32">
      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold text-white">U</span>
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UnifAI
              </h1>
            </div>

            {/* Auth Button / Profile */}
            <div className="relative" ref={profileMenuRef}>
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <span>👤</span>
                    <span className="hidden md:inline">הפרופיל שלי</span>
                  </button>

                  {/* Dropdown Menu */}
                  {showProfileMenu && (
                    <div className="absolute top-12 right-0 w-48 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden animate-slideDown">
                      <button
                        onClick={() => {
                          setShowProfileMenu(false);
                          onOpenAccount();
                        }}
                        className="w-full px-4 py-3 text-right hover:bg-gray-100 transition-all flex items-center gap-3 border-b border-gray-100"
                      >
                        <span className="text-xl">👤</span>
                        <span className="font-medium">חשבון שלי</span>
                      </button>
                      <button
                        onClick={() => {
                          setShowProfileMenu(false);
                          if (window.confirm('האם אתה בטוח שברצונך להתנתק?')) {
                            onLogout();
                          }
                        }}
                        className="w-full px-4 py-3 text-right hover:bg-red-50 transition-all flex items-center gap-3 text-red-600"
                      >
                        <span className="text-xl">🚪</span>
                        <span className="font-medium">התנתק</span>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all"
                >
                  התחברות / הרשמה
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pt-28 pb-24 space-y-8">

        {/* Floating Search Bar */}
        <section className="sticky top-24 z-40">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="חפש כלי AI, קטגוריה או תגית..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-14 rounded-full bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">
                🔍
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Search Results */}
            {searchQuery && (
              <div className="mt-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden max-h-96 overflow-y-auto">
                {searchResults.length > 0 ? (
                  searchResults.slice(0, 8).map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => {
                        setSearchQuery('');
                        onOpenTool(tool);
                      }}
                      className="w-full px-5 py-3 hover:bg-gray-50 transition-all flex items-center gap-4 border-b border-gray-100 last:border-0"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-2xl shadow-sm">
                        {tool.icon || '🔧'}
                      </div>
                      <div className="flex-1 text-right">
                        <h3 className="font-semibold">{tool.name}</h3>
                        <p className="text-sm text-gray-600">{tool.category}</p>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="px-5 py-8 text-center">
                    <div className="text-4xl mb-3">🔍</div>
                    <p className="text-gray-600">לא נמצאו תוצאות עבור "{searchQuery}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ============ DYNAMIC SECTIONS (Wolt-Style) ============ */}
        {!searchQuery && (
          <>
            {/* Section 1: History of Used Tools - Horizontal Scroll (Notion-Style) */}
            {isLoggedIn && historyTools.length > 0 && (
              <section className="rounded-3xl bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">⏱ כלים שהשתמשת בהם לאחרונה</h2>
                </div>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                  {historyTools.map((tool) => {
                    const isFavorite = favorites.some((f) => f.id === tool.id);
                    return (
                      <article
                        key={tool.id}
                        className="relative flex-shrink-0 w-72 rounded-2xl bg-white/80 border border-white/60 shadow-lg p-5 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
                        onClick={() => onOpenTool(tool)}
                      >
                        {isLoggedIn && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToFavorites(tool);
                            }}
                            className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/80 hover:bg-white flex items-center justify-center text-lg transition-all shadow-sm z-10"
                          >
                            {isFavorite ? "⭐" : "☆"}
                          </button>
                        )}
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-4xl shadow-md">
                            {tool.icon || '🔧'}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
                            <p className="text-sm text-gray-600">{tool.category}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-2">{tool.description}</p>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Section 2: Recommended For You - Pinterest-Style Asymmetric Grid */}
            {recommendedTools.length > 0 && (
              <section className="rounded-3xl bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl p-6">
                <h2 className="text-2xl font-bold mb-4">⭐ מומלץ עבורך</h2>
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                  {recommendedTools.map((tool) => {
                    const isFavorite = favorites.some((f) => f.id === tool.id);
                    return (
                      <article
                        key={tool.id}
                        className="relative break-inside-avoid rounded-2xl bg-white/80 border border-white/60 shadow-lg p-5 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
                        onClick={() => onOpenTool(tool)}
                      >
                        {isLoggedIn && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToFavorites(tool);
                            }}
                            className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/80 hover:bg-white flex items-center justify-center text-lg transition-all shadow-sm z-10"
                          >
                            {isFavorite ? "⭐" : "☆"}
                          </button>
                        )}
                        <div className="mb-4">
                          <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-6xl shadow-md mb-3">
                            {tool.icon || '🔧'}
                          </div>
                          <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{tool.category}</p>
                          <p className="text-sm text-gray-700">{tool.description}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Section 3: Free to Use Today - Horizontal Scroll */}
            {freeTools.length > 0 && (
              <section className="rounded-3xl bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl p-6">
                <h2 className="text-2xl font-bold mb-4">🎁 חינם לשימוש היום</h2>
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                  {freeTools.map((tool) => {
                    const isFavorite = favorites.some((f) => f.id === tool.id);
                    return (
                      <article
                        key={tool.id}
                        className="relative flex-shrink-0 w-64 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-white/60 shadow-lg p-5 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
                        onClick={() => onOpenTool(tool)}
                      >
                        {isLoggedIn && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToFavorites(tool);
                            }}
                            className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/80 hover:bg-white flex items-center justify-center text-lg transition-all shadow-sm z-10"
                          >
                            {isFavorite ? "⭐" : "☆"}
                          </button>
                        )}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center text-3xl shadow-md">
                            {tool.icon || '🔧'}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-base">{tool.name}</h3>
                            <p className="text-xs text-gray-600">{tool.category}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-2">{tool.description}</p>
                        <div className="mt-3 px-3 py-1 bg-green-500/20 rounded-full inline-flex items-center">
                          <span className="text-xs font-semibold text-green-700">חינם 🎉</span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Section 4: Categories - Each Category is a Horizontal Scroll of Tools */}
            {categories && categories.length > 0 && categories.map((category, idx) => {
              const catName = category.name_he || category.name || category.nameHe;
              const catTools = toolsByCategory[catName] || [];
              const catColor = categoryColors[catName] || { bg: '#E8F5E9', emoji: '🔧' };
              
              if (catTools.length === 0) return null;

              return (
                <section 
                  key={category.id || idx} 
                  className="rounded-3xl backdrop-blur-xl border border-white/40 shadow-xl p-6"
                  style={{ backgroundColor: `${catColor.bg}80` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{category.icon || catColor.emoji}</div>
                    <h2 className="text-2xl font-bold">{catName}</h2>
                  </div>
                  <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                    {catTools.map((tool) => {
                      const isFavorite = favorites.some((f) => f.id === tool.id);
                      return (
                        <article
                          key={tool.id}
                          className="relative flex-shrink-0 w-64 rounded-2xl bg-white/80 border border-white/60 shadow-lg p-5 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
                          onClick={() => onOpenTool(tool)}
                        >
                          {isLoggedIn && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onAddToFavorites(tool);
                              }}
                              className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/80 hover:bg-white flex items-center justify-center text-lg transition-all shadow-sm z-10"
                            >
                              {isFavorite ? "⭐" : "☆"}
                            </button>
                          )}
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-3xl shadow-md">
                              {tool.icon || '🔧'}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-base">{tool.name}</h3>
                              <p className="text-xs text-gray-600">{tool.category}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 line-clamp-2">{tool.description}</p>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Company Info */}
            <div className="text-center md:text-right">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold">U</span>
                </div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  UnifAI
                </h3>
              </div>
              <p className="text-gray-400 text-xs max-w-sm">
                הפלטפורמה המובילה לכלי AI - מרכזים את כל הכלים במקום אחד
              </p>
              <p className="text-gray-500 text-xs mt-1">
                © 2025 UnifAI. כל הזכויות שמורות.
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-semibold mb-2 text-center">עקבו אחרינו</h4>
              <div className="flex items-center gap-3 justify-center">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/unifai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 shadow-md"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/unifai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-blue-700 flex items-center justify-center transition-all hover:scale-110 shadow-md"
                  title="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/unifai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-all hover:scale-110 shadow-md"
                  title="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/972501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110 shadow-md"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@unifai.com"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-purple-600 flex items-center justify-center transition-all hover:scale-110 shadow-md"
                  title="Email"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
