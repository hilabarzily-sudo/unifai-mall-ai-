import React from "react";

// ACCOUNT PAGE – App Store Style
// User profile + Favorite tools list
// Settings button in header

export default function AccountPage({ 
  user,
  favoriteTools = [],
  onOpenTool,
  onOpenSettings,
  onLogout 
}) {
  // Mock user data
  const userData = user || {
    name: "Sarah Cohen",
    email: "sarah@example.com",
    avatar: "👤",
    memberSince: "January 2024",
    totalTools: 12,
    totalPrompts: 48,
  };

  // Mock favorite tools
  const tools = favoriteTools.length > 0 ? favoriteTools : [
    { id: 1, name: "Midjourney", icon: "🎨", category: "Design", lastUsed: "2 days ago" },
    { id: 2, name: "ChatGPT", icon: "🤖", category: "AI Assistant", lastUsed: "5 hours ago" },
    { id: 3, name: "Runway", icon: "🎬", category: "Video", lastUsed: "1 week ago" },
    { id: 4, name: "Claude", icon: "🧠", category: "AI Assistant", lastUsed: "3 days ago" },
    { id: 5, name: "DALL-E", icon: "🖼️", category: "Design", lastUsed: "4 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f7fb] to-[#eef1f8] text-gray-900 antialiased">
      
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 border-b border-white/20 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Account</h1>
          <button
            onClick={onOpenSettings}
            className="w-10 h-10 rounded-xl bg-white/60 hover:bg-white/80 flex items-center justify-center transition-all"
            title="Settings"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        
        {/* User Profile Card */}
        <section className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl p-8">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-5xl shadow-lg flex-shrink-0">
              {userData.avatar}
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">{userData.name}</h2>
              <p className="text-gray-600 mb-4">{userData.email}</p>
              <p className="text-sm text-gray-500 mb-6">Member since {userData.memberSince}</p>

              {/* Stats */}
              <div className="flex gap-6">
                <div className="px-5 py-3 rounded-xl bg-white/60 backdrop-blur-md">
                  <p className="text-2xl font-bold text-gray-900">{userData.totalTools}</p>
                  <p className="text-xs text-gray-600 mt-1">Favorite Tools</p>
                </div>
                <div className="px-5 py-3 rounded-xl bg-white/60 backdrop-blur-md">
                  <p className="text-2xl font-bold text-gray-900">{userData.totalPrompts}</p>
                  <p className="text-xs text-gray-600 mt-1">Saved Prompts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Favorite Tools Section - App Store Style */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Favorite Tools</h2>
          <div className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl overflow-hidden">
            {tools.map((tool, idx) => (
              <article
                key={tool.id}
                className={`flex items-center justify-between px-6 py-5 hover:bg-white/60 transition-all cursor-pointer ${
                  idx !== tools.length - 1 ? "border-b border-white/30" : ""
                }`}
                onClick={() => onOpenTool(tool)}
              >
                {/* Tool Info */}
                <div className="flex items-center gap-4 flex-1">
                  {/* Icon - Rounded Rectangle 60px */}
                  <div className="w-[60px] h-[60px] rounded-xl bg-white/60 backdrop-blur-md flex items-center justify-center text-3xl shadow-md flex-shrink-0">
                    {tool.icon}
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="font-semibold text-[17px] text-gray-900 mb-1">{tool.name}</h3>
                    <p className="text-sm text-gray-600">{tool.category}</p>
                    <p className="text-xs text-gray-500 mt-1">Last used: {tool.lastUsed}</p>
                  </div>
                </div>

                {/* Open Button - App Store Style */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenTool(tool);
                  }}
                  className="px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm"
                  style={{ height: "28px", fontSize: "14px" }}
                >
                  Open
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Account Actions */}
        <section className="rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl overflow-hidden">
          <button className="w-full px-6 py-4 text-left hover:bg-white/60 transition-all border-b border-white/30">
            <div className="flex items-center justify-between">
              <span className="font-medium">View Purchase History</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
          <button className="w-full px-6 py-4 text-left hover:bg-white/60 transition-all border-b border-white/30">
            <div className="flex items-center justify-between">
              <span className="font-medium">Manage Subscriptions</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
          <button
            onClick={onLogout}
            className="w-full px-6 py-4 text-left hover:bg-white/60 transition-all text-red-600"
          >
            <span className="font-medium">Log Out</span>
          </button>
        </section>
      </main>
    </div>
  );
}

