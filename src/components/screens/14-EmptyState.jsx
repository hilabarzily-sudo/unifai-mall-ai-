import React from "react";

// EMPTY STATE – Reusable component for "no results" scenarios
// Used in: Search, Favorites, History, etc.
// Includes suggestions for similar content

export default function EmptyState({ 
  type = "search", // "search" | "favorites" | "history" | "prompts" | "examples"
  query = "",
  onAction,
  suggestions = [] 
}) {
  // Content based on type
  const content = {
    search: {
      icon: "🔍",
      title: "לא נמצאו תוצאות",
      description: query 
        ? `לא מצאנו כלים או תוכן שתואם ל-"${query}"`
        : "נסה לחפש כלי AI, קטגוריות, או תגיות",
      actionText: "חפש משהו אחר",
      suggestionsTitle: "אולי תרצה לנסות:",
    },
    favorites: {
      icon: "⭐",
      title: "אין כלים במועדפים",
      description: "התחל לשמור כלים שאתה אוהב כדי לגשת אליהם במהירות",
      actionText: "גלה כלים",
      suggestionsTitle: "כלים פופולריים:",
    },
    history: {
      icon: "🕐",
      title: "אין היסטוריה",
      description: "התחל להשתמש בכלים כדי לראות אותם כאן",
      actionText: "חקור כלים",
      suggestionsTitle: "התחל עם:",
    },
    prompts: {
      icon: "📝",
      title: "אין פרומפטים שמורים",
      description: "שמור פרומפטים שאתה משתמש בהם כדי לגשת אליהם מהר",
      actionText: "צור פרומפט חדש",
      suggestionsTitle: "פרומפטים לדוגמה:",
    },
    examples: {
      icon: "🖼️",
      title: "אין דוגמאות שמורות",
      description: "שמור תוצרים שאתה אוהב מכלי AI שונים",
      actionText: "חפש דוגמאות",
      suggestionsTitle: "דוגמאות פופולריות:",
    },
  };

  const currentContent = content[type] || content.search;

  // Default suggestions based on type
  const defaultSuggestions = {
    search: ["Image Generation", "ChatGPT", "Video AI", "Writing Tools"],
    favorites: ["Midjourney", "ChatGPT", "Runway", "Claude"],
    history: ["Popular Tools", "Free Tools", "Design Category"],
    prompts: ["Cyberpunk city", "Product photo", "Blog post"],
    examples: ["Abstract Art", "Portraits", "Landscapes"],
  };

  const displaySuggestions = suggestions.length > 0 
    ? suggestions 
    : defaultSuggestions[type] || [];

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        
        {/* Icon */}
        <div className="w-32 h-32 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl flex items-center justify-center text-6xl mx-auto mb-6 animate-fade-in">
          {currentContent.icon}
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3 text-gray-900">
          {currentContent.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          {currentContent.description}
        </p>

        {/* Action Button */}
        {onAction && (
          <button
            onClick={onAction}
            className="px-6 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-all shadow-lg hover:shadow-xl mb-8"
          >
            {currentContent.actionText}
          </button>
        )}

        {/* Suggestions */}
        {displaySuggestions.length > 0 && (
          <div className="mt-8">
            <p className="text-sm text-gray-600 font-medium mb-4">
              {currentContent.suggestionsTitle}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {displaySuggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => onAction && onAction(suggestion)}
                  className="px-4 py-2.5 rounded-xl bg-white/60 backdrop-blur-xl border border-white/30 hover:bg-white hover:shadow-lg transition-all text-sm font-medium"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Help Text */}
        <div className="mt-12 p-4 rounded-xl bg-blue-50/60 backdrop-blur-md border border-blue-200/40">
          <p className="text-xs text-blue-900 leading-relaxed">
            💡 עצה: השתמש בחיפוש כדי למצוא כלים חדשים, או עיין בקטגוריות בדף הבית
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

