import React, { useState, useEffect } from "react";

// Import all screens
import SplashScreen from "./01-SplashScreen";
import AuthPopup from "./02-AuthPopup";
import HomePage from "./03-HomePage";
import ToolPage from "./04-ToolPage";
import ExamplesGrid from "./05-ExamplesGrid";
import ExampleViewer from "./06-ExampleViewer";
import PromptRevealSheet from "./07-PromptRevealSheet";
import ToolWebView from "./08-ToolWebView";
import FavoritesPage from "./09-FavoritesPage";
import SavedPromptsSlider from "./10-SavedPromptsSlider";
import SearchPage from "./11-SearchPage";
import AccountPage from "./12-AccountPage";
import AccountSettingsSheet from "./13-AccountSettingsSheet";
import EmptyState from "./14-EmptyState";

// UNIFAI APP – Complete Flow Integration
// Demonstrates all 14 screens working together
// Navigation, state management, and user flows

export default function UnifAIApp() {
  // App State
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  
  // Popups & Modals
  const [showAuth, setShowAuth] = useState(false);
  const [authTrigger, setAuthTrigger] = useState({ type: "soft", message: null });
  const [showSearch, setShowSearch] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showWebView, setShowWebView] = useState(false);
  const [showPromptSheet, setShowPromptSheet] = useState(false);
  
  // Data State
  const [selectedTool, setSelectedTool] = useState(null);
  const [viewingExample, setViewingExample] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [preloadedPrompt, setPreloadedPrompt] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // User Data
  const [user, setUser] = useState(null);

  // Auto-trigger auth popup after 3 minutes on home (if not logged in)
  useEffect(() => {
    if (currentScreen === "home" && !isLoggedIn) {
      const timer = setTimeout(() => {
        setAuthTrigger({ 
          type: "soft", 
          message: "היי, רוצה לשמור כלים, פרומפטים ודוגמאות לעצמך? התחבר/י או הירשם/י לחשבון UnifAI." 
        });
        setShowAuth(true);
      }, 180000); // 3 minutes

      return () => clearTimeout(timer);
    }
  }, [currentScreen, isLoggedIn]);

  // Handlers
  const handleSplashComplete = () => {
    setShowSplash(false);
    setCurrentScreen("home");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({
      name: "Sarah Cohen",
      email: "sarah@example.com",
      avatar: "👤",
      memberSince: "January 2024",
    });
    setShowAuth(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setFavorites([]);
    setCurrentScreen("home");
  };

  const handleOpenTool = (tool) => {
    if (!isLoggedIn) {
      setAuthTrigger({ type: "hard", message: null });
      setShowAuth(true);
      // Store pending action
      setTimeout(() => {
        if (isLoggedIn) {
          setSelectedTool(tool);
          setCurrentScreen("tool");
        }
      }, 100);
    } else {
      setSelectedTool(tool);
      setCurrentScreen("tool");
    }
  };

  const handleAddToFavorites = (tool) => {
    if (!isLoggedIn) {
      setAuthTrigger({ type: "hard", message: null });
      setShowAuth(true);
    } else {
      setFavorites((prev) => {
        const exists = prev.find((t) => t.id === tool.id);
        if (exists) {
          return prev.filter((t) => t.id !== tool.id);
        }
        return [...prev, tool];
      });
    }
  };

  const handleUseTool = () => {
    if (!isLoggedIn) {
      setAuthTrigger({ type: "hard", message: null });
      setShowAuth(true);
    } else {
      setShowWebView(true);
    }
  };

  const handleViewExample = (example) => {
    setViewingExample(example);
  };

  const handleTryInTool = (prompt) => {
    setPreloadedPrompt(prompt);
    setShowPromptSheet(false);
    setShowWebView(true);
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return (
          <HomePage
            isLoggedIn={isLoggedIn}
            onOpenAuth={() => {
              setAuthTrigger({ type: "soft", message: null });
              setShowAuth(true);
            }}
            onOpenTool={handleOpenTool}
          />
        );

      case "tool":
        return (
          <ToolPage
            tool={selectedTool}
            onUseTool={handleUseTool}
            onAddToFavorites={() => handleAddToFavorites(selectedTool)}
            onGoHome={() => setCurrentScreen("home")}
            onViewExample={handleViewExample}
            isLoggedIn={isLoggedIn}
            isFavorite={favorites.some((t) => t.id === selectedTool?.id)}
          />
        );

      case "favorites":
        return (
          <FavoritesPage
            favoriteTools={favorites}
            onOpenTool={handleOpenTool}
            onViewPrompt={(prompt) => {
              setSelectedPrompt(prompt);
              setShowPromptSheet(true);
            }}
            onViewExample={handleViewExample}
          />
        );

      case "account":
        return (
          <AccountPage
            user={user}
            favoriteTools={favorites}
            onOpenTool={handleOpenTool}
            onOpenSettings={() => setShowSettings(true)}
            onLogout={handleLogout}
          />
        );

      case "examples":
        return (
          <ExamplesGrid
            onSelectExample={handleViewExample}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}

      {/* Main App */}
      {!showSplash && renderScreen()}

      {/* Auth Popup */}
      {showAuth && (
        <AuthPopup
          onClose={() => setShowAuth(false)}
          showCloseButton={authTrigger.type === "soft"}
          triggerType={authTrigger.type}
          message={authTrigger.message}
        />
      )}

      {/* Search Page */}
      {showSearch && (
        <SearchPage
          onSelectTool={(tool) => {
            setShowSearch(false);
            handleOpenTool(tool);
          }}
          onClose={() => setShowSearch(false)}
        />
      )}

      {/* Example Viewer */}
      {viewingExample && (
        <ExampleViewer
          example={viewingExample}
          onClose={() => setViewingExample(null)}
          onViewPrompt={() => {
            setSelectedPrompt(viewingExample.prompt);
            setShowPromptSheet(true);
          }}
          onOpenTool={handleUseTool}
        />
      )}

      {/* Prompt Sheet */}
      {showPromptSheet && (
        <PromptRevealSheet
          prompt={selectedPrompt}
          onClose={() => setShowPromptSheet(false)}
          onCopy={() => {
            navigator.clipboard.writeText(selectedPrompt.text);
            alert("Prompt copied!");
          }}
          onTryInTool={() => handleTryInTool(selectedPrompt.text)}
          onSave={(text) => {
            console.log("Saved prompt:", text);
            setShowPromptSheet(false);
          }}
        />
      )}

      {/* Tool WebView */}
      {showWebView && (
        <ToolWebView
          tool={selectedTool}
          onClose={() => {
            setShowWebView(false);
            setPreloadedPrompt(null);
          }}
          preloadedPrompt={preloadedPrompt}
        />
      )}

      {/* Account Settings */}
      {showSettings && (
        <AccountSettingsSheet
          user={user}
          onClose={() => setShowSettings(false)}
          onSave={(data) => {
            setUser({ ...user, ...data });
            console.log("Settings saved:", data);
          }}
        />
      )}

      {/* Bottom Navigation (when logged in) */}
      {!showSplash && isLoggedIn && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/80 border-t border-white/20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-around">
            <button
              onClick={() => setCurrentScreen("home")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                currentScreen === "home" ? "bg-gray-900/10" : "hover:bg-gray-900/5"
              }`}
            >
              <span className="text-xl">🏠</span>
              <span className="text-xs font-medium">Home</span>
            </button>

            <button
              onClick={() => setShowSearch(true)}
              className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl hover:bg-gray-900/5 transition-all"
            >
              <span className="text-xl">🔍</span>
              <span className="text-xs font-medium">Search</span>
            </button>

            <button
              onClick={() => setCurrentScreen("favorites")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                currentScreen === "favorites" ? "bg-gray-900/10" : "hover:bg-gray-900/5"
              }`}
            >
              <span className="text-xl">⭐</span>
              <span className="text-xs font-medium">Favorites</span>
            </button>

            <button
              onClick={() => setCurrentScreen("account")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                currentScreen === "account" ? "bg-gray-900/10" : "hover:bg-gray-900/5"
              }`}
            >
              <span className="text-xl">👤</span>
              <span className="text-xs font-medium">Account</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}

