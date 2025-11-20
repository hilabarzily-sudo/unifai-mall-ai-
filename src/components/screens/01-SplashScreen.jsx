import React, { useEffect } from "react";

// SPLASH SCREEN – OS26 + Glassmorphism
// Auto-transition after 1.2 seconds
// Smooth fade animation + logo reveal

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#f6f7fb] via-[#eef1f8] to-[#e8ebf3] flex items-center justify-center animate-fade-in">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl" />

      {/* Logo Container */}
      <div className="relative z-10 flex flex-col items-center gap-6 animate-scale-up">
        {/* Logo Circle */}
        <div className="w-32 h-32 rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl flex items-center justify-center">
          <div className="text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
            U
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
          UnifAI
        </h1>

        {/* Tagline */}
        <p className="text-sm text-gray-600 font-light">
          Spotify for AI Tools
        </p>

        {/* Loading Animation */}
        <div className="mt-8 flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-gray-900/60 animate-bounce [animation-delay:0ms]" />
          <div className="w-2 h-2 rounded-full bg-gray-900/60 animate-bounce [animation-delay:150ms]" />
          <div className="w-2 h-2 rounded-full bg-gray-900/60 animate-bounce [animation-delay:300ms]" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-up {
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
          animation: fade-in 0.6s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

