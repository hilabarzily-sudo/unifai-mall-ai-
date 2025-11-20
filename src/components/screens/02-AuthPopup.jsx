import React, { useState } from "react";

// AUTH POPUP – Sign In / Sign Up
// Glassmorphism centered modal
// Google / Apple / Email authentication
// Optional close button (X) – depends on trigger context

export default function AuthPopup({ 
  onClose, 
  onLogin,
  showCloseButton = true,
  triggerType = "soft", // "soft" | "hard"
  message 
}) {
  const [mode, setMode] = useState("signin"); // "signin" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const defaultMessage = mode === "signin"
    ? "כדי לשמור כלים ולפתוח אותם, צריך להתחבר לחשבון UnifAI שלך"
    : "צור חשבון UnifAI כדי לשמור כלים, פרומפטים ודוגמאות";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={showCloseButton ? onClose : undefined}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md rounded-[32px] border border-white/20 bg-white/80 backdrop-blur-2xl shadow-2xl p-8 animate-scale-in">
        
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-900/10 hover:bg-gray-900/20 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">U</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-gray-900 mb-2">
          {mode === "signin" ? "התחברות" : "הרשמה"}
        </h2>

        {/* Message */}
        <p className="text-center text-sm text-gray-600 mb-8 leading-relaxed">
          {message || defaultMessage}
        </p>

        {/* Mode Toggle Tabs */}
        <div className="flex gap-2 mb-6 p-1 rounded-2xl bg-white/60 backdrop-blur-md">
          <button
            onClick={() => setMode("signin")}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
              mode === "signin"
                ? "bg-gray-900 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            התחברות
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
              mode === "signup"
                ? "bg-gray-900 text-white shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            הרשמה
          </button>
        </div>

        {/* Social Auth Buttons */}
        <div className="space-y-3 mb-6">
          {/* Google */}
          <button 
            onClick={() => onLogin && onLogin(null, null, 'google')}
            className="w-full py-3.5 px-4 rounded-xl bg-white/80 backdrop-blur-md border border-gray-200/50 hover:bg-white hover:shadow-md transition-all flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm font-medium text-gray-900">
              {mode === "signin" ? "המשך עם Google" : "הרשמה עם Google"}
            </span>
          </button>

          {/* Apple */}
          <button 
            onClick={() => onLogin && onLogin(null, null, 'apple')}
            className="w-full py-3.5 px-4 rounded-xl bg-gray-900 hover:bg-gray-800 transition-all flex items-center justify-center gap-3">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <span className="text-sm font-medium text-white">
              {mode === "signin" ? "המשך עם Apple" : "הרשמה עם Apple"}
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300/50" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 text-xs text-gray-500 bg-white/80">או</span>
          </div>
        </div>

        {/* Email Form */}
        <div className="space-y-3">
          <input
            type="email"
            placeholder="כתובת אימייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3 px-4 rounded-xl bg-white/60 backdrop-blur-md border border-gray-200/50 focus:border-gray-400 focus:bg-white outline-none transition-all text-sm"
          />
          <input
            type="password"
            placeholder="סיסמה"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-3 px-4 rounded-xl bg-white/60 backdrop-blur-md border border-gray-200/50 focus:border-gray-400 focus:bg-white outline-none transition-all text-sm"
          />
          
          {mode === "signup" && (
            <input
              type="password"
              placeholder="אימות סיסמה"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-3 px-4 rounded-xl bg-white/60 backdrop-blur-md border border-gray-200/50 focus:border-gray-400 focus:bg-white outline-none transition-all text-sm"
            />
          )}

          <button 
            onClick={() => {
              if (mode === "signup" && password !== confirmPassword) {
                alert("הסיסמאות לא תואמות");
                return;
              }
              onLogin && onLogin(email, password, 'email');
            }}
            className="w-full py-3.5 px-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm transition-all shadow-lg hover:shadow-xl">
            {mode === "signin" ? "התחבר" : "צור חשבון"}
          </button>
        </div>

        {/* Footer Link */}
        {mode === "signin" && (
          <button className="w-full mt-4 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            שכחת סיסמה?
          </button>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

