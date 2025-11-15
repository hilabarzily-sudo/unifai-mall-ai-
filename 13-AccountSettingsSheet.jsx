import React, { useState } from "react";

// ACCOUNT SETTINGS SHEET – Popup Sheet (Bottom Sheet)
// Rounded corners (40px), white background
// Sections: User Identity, Personalization, App Management

export default function AccountSettingsSheet({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: user?.name || "Sarah Cohen",
    email: user?.email || "sarah@example.com",
    nickname: user?.nickname || "SarahC",
    language: user?.language || "Hebrew",
    theme: user?.theme || "Auto",
    feedPersonalization: user?.feedPersonalization ?? true,
    notifications: user?.notifications ?? true,
  });

  const handleSave = () => {
    if (onSave) onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

      {/* Sheet Container */}
      <div className="relative z-10 w-full max-w-2xl rounded-t-[40px] bg-white shadow-2xl animate-slide-up">
        
        {/* Handle Bar */}
        <div className="flex justify-center pt-4 pb-2">
          <div className="w-12 h-1.5 rounded-full bg-gray-300" />
        </div>

        {/* Header */}
        <div className="px-8 py-4 border-b border-gray-200/50 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Settings</h2>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold transition-all"
          >
            Done
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 pt-6 max-h-[75vh] overflow-y-auto space-y-8">
          
          {/* Section A: User Identity */}
          <section>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">UnifAI Account</h3>
            
            <div className="space-y-4">
              {/* Profile Picture */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-4xl shadow-md">
                  👤
                </div>
                <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-all">
                  Change Photo
                </button>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gray-400 focus:bg-white outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gray-400 focus:bg-white outline-none transition-all"
                />
              </div>

              {/* Nickname */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nickname <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.nickname}
                  onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gray-400 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* Section B: Personalization */}
          <section>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Personalization</h3>
            
            <div className="space-y-4">
              {/* Language */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gray-400 focus:bg-white outline-none transition-all"
                >
                  <option>Hebrew</option>
                  <option>English</option>
                  <option>Arabic</option>
                </select>
              </div>

              {/* Theme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color Theme</label>
                <select
                  value={formData.theme}
                  onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-gray-400 focus:bg-white outline-none transition-all"
                >
                  <option>Auto</option>
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>

              {/* Feed Personalization */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                <div>
                  <p className="font-medium text-sm">Feed Personalization</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Show tools based on your interests
                  </p>
                </div>
                <button
                  onClick={() =>
                    setFormData({ ...formData, feedPersonalization: !formData.feedPersonalization })
                  }
                  className={`relative w-12 h-7 rounded-full transition-all ${
                    formData.feedPersonalization ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                      formData.feedPersonalization ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </section>

          {/* Section C: App Management */}
          <section>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">App Management</h3>
            
            <div className="space-y-3">
              {/* Notifications Toggle */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                <div>
                  <p className="font-medium text-sm">Notifications</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Get updates about new tools and features
                  </p>
                </div>
                <button
                  onClick={() => setFormData({ ...formData, notifications: !formData.notifications })}
                  className={`relative w-12 h-7 rounded-full transition-all ${
                    formData.notifications ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                      formData.notifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Privacy */}
              <button className="w-full p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all text-left">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">Privacy Settings</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Terms & Policies */}
              <button className="w-full p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all text-left">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">Terms & Policies</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </section>

          {/* App Info */}
          <section className="pt-4 border-t border-gray-200/50">
            <p className="text-xs text-gray-500 text-center">UnifAI v1.0.0</p>
          </section>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
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

