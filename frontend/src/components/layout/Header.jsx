import React from 'react';

/**
 * Header Component - Top application header
 */
export default function Header({ title, subtitle, actions, onBack }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="p-2 rounded-xl hover:bg-gray-900/10 transition-colors"
              >
                <span className="text-xl">←</span>
              </button>
            )}
            
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              {subtitle && (
                <p className="text-sm text-gray-600 mt-0.5">{subtitle}</p>
              )}
            </div>
          </div>

          {/* Right side actions */}
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

