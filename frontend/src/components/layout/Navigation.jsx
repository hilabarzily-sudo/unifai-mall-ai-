import React from 'react';

/**
 * Navigation Component - Bottom navigation bar
 */
export default function Navigation({ currentPage, onNavigate, isLoggedIn }) {
  const navItems = [
    { id: 'home', icon: '🏠', label: 'בית' },
    { id: 'search', icon: '🔍', label: 'חיפוש' },
    { id: 'favorites', icon: '⭐', label: 'מועדפים', requiresAuth: true },
    { id: 'account', icon: '👤', label: 'חשבון', requiresAuth: true },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/80 border-t border-white/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-around">
        {navItems.map((item) => {
          if (item.requiresAuth && !isLoggedIn) return null;
          
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                isActive ? 'bg-gray-900/10' : 'hover:bg-gray-900/5'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

