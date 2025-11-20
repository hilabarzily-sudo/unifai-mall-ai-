import React, { useState, useEffect } from "react";
import { authService } from "@services/authService";
import { toolsService } from "@services/toolsService";
import { favoritesService } from "@services/favoritesService";
import { promptsService } from "@services/promptsService";
import { historyService } from "@services/historyService";
import { transformTool, transformTools, transformPrompt } from "@utils/dataTransformers";

// Import all screens
import SplashScreen from "@components/screens/01-SplashScreen";
import AuthPopup from "@components/screens/02-AuthPopup";
import HomePage from "@components/screens/03-HomePage";
import ToolPage from "@components/screens/04-ToolPage";
import ExamplesGrid from "@components/screens/05-ExamplesGrid";
import ExampleViewer from "@components/screens/06-ExampleViewer";
import PromptRevealSheet from "@components/screens/07-PromptRevealSheet";
import ToolWebView from "@components/screens/08-ToolWebView";
import FavoritesPage from "@components/screens/09-FavoritesPage";
import SavedPromptsSlider from "@components/screens/10-SavedPromptsSlider";
import SearchPage from "@components/screens/11-SearchPage";
import AccountPage from "@components/screens/12-AccountPage";
import AccountSettingsSheet from "@components/screens/13-AccountSettingsSheet";
import EmptyState from "@components/screens/14-EmptyState";

// UNIFAI APP – Complete Flow with Supabase Integration
// Real authentication, database, and full functionality

export default function UnifAIApp() {
  // App State
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [showSplash, setShowSplash] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Auth State
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Popups & Modals
  const [showAuth, setShowAuth] = useState(false);
  const [authTrigger, setAuthTrigger] = useState({ type: "soft", message: null });
  const [showSearch, setShowSearch] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showWebView, setShowWebView] = useState(false);
  const [showPromptSheet, setShowPromptSheet] = useState(false);
  
  // Data State (from database)
  const [allTools, setAllTools] = useState([]);
  const [categories, setCategories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [savedPrompts, setSavedPrompts] = useState([]);
  const [savedExamples, setSavedExamples] = useState([]);
  const [recentTools, setRecentTools] = useState([]);
  
  // Screen-specific state
  const [selectedTool, setSelectedTool] = useState(null);
  const [viewingExample, setViewingExample] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [preloadedPrompt, setPreloadedPrompt] = useState(null);

  // Initialize: Check auth status and load initial data
  useEffect(() => {
    let isMounted = true;
    let subscription = null;
    
    async function initialize() {
      // Only set loading if still mounted
      if (isMounted) {
        setLoading(true);
      }
      
      try {
        // Check if user is already logged in
        const { user: currentUser } = await authService.getCurrentUser();
        if (isMounted && currentUser) {
          setUser(currentUser);
          setIsLoggedIn(true);
          
          // Load user profile
          const { profile } = await authService.getUserProfile(currentUser.id);
          if (isMounted) {
            setUserProfile(profile);
          }
          
          // Load user data
          await loadUserData(currentUser.id);
        }
        
        // Load tools and categories (available to all)
        await loadPublicData();
      } catch (err) {
        console.error('Initialization error:', err);
        // Only update state if still mounted
        if (isMounted) {
          setError('שגיאה בטעינת נתונים. אנא רענן את הדף.');
        }
      } finally {
        // Only update loading state if still mounted
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    
    initialize();
    
    // Listen to auth changes
    const authListener = authService.onAuthStateChange(async (event, session) => {
      if (!isMounted) return;
      
      if (session?.user) {
        setUser(session.user);
        setIsLoggedIn(true);
        await loadUserData(session.user.id);
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setFavorites([]);
        setSavedPrompts([]);
        setSavedExamples([]);
        setRecentTools([]);
      }
    });
    
    if (authListener && authListener.data) {
      subscription = authListener.data.subscription;
    }
    
    // Cleanup function
    return () => {
      isMounted = false;
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  // Load public data (tools, categories)
  async function loadPublicData() {
    try {
      const [toolsResult, categoriesResult] = await Promise.all([
        toolsService.getAllTools(),
        toolsService.getAllCategories()
      ]);
      
      if (toolsResult.tools) {
        setAllTools(transformTools(toolsResult.tools));
      }
      if (categoriesResult.categories) {
        setCategories(categoriesResult.categories);
      }
    } catch (err) {
      console.error('Error loading public data:', err);
    }
  }

  // Load user-specific data
  async function loadUserData(userId) {
    try {
      const [favoritesResult, promptsResult, historyResult] = await Promise.all([
        favoritesService.getUserFavorites(userId),
        promptsService.getUserPrompts(userId),
        historyService.getRecentTools(userId)
      ]);
      
      if (favoritesResult.favorites) {
        setFavorites(transformTools(favoritesResult.favorites));
      }
      if (promptsResult.prompts) {
        setSavedPrompts(promptsResult.prompts.map(transformPrompt));
      }
      if (historyResult.tools) {
        setRecentTools(transformTools(historyResult.tools));
      }
    } catch (err) {
      console.error('Error loading user data:', err);
    }
  }

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

  const handleLogin = async (email, password, provider = 'email') => {
    setLoading(true);
    setError(null);
    try {
      let result;
      if (provider === 'google') {
        result = await authService.signInWithGoogle();
      } else {
        result = await authService.signInWithEmail(email, password);
      }
      
      if (result.error) {
        setError(result.error);
        alert(`שגיאה: ${result.error}`);
      } else {
        setShowAuth(false);
        // User data will be loaded by onAuthStateChange listener
      }
    } catch (err) {
      setError(err.message);
      alert(`שגיאה: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await authService.signOut();
      setUser(null);
      setUserProfile(null);
      setIsLoggedIn(false);
      setFavorites([]);
      setSavedPrompts([]);
      setSavedExamples([]);
      setRecentTools([]);
      setCurrentScreen("home");
    } catch (err) {
      console.error('Logout error:', err);
      alert(`שגיאה בהתנתקות: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenTool = async (tool) => {
    if (!isLoggedIn) {
      setAuthTrigger({ type: "hard", message: "נדרש חשבון כדי לפתוח כלים" });
      setShowAuth(true);
      return;
    }
    
    setSelectedTool(tool);
    setCurrentScreen("tool");
    
    // Track usage in background
    if (user?.id && tool?.id) {
      historyService.trackToolUsage(user.id, tool.id);
      // Reload recent tools
      const { tools } = await historyService.getRecentTools(user.id);
      if (tools) setRecentTools(transformTools(tools));
    }
  };

  const handleAddToFavorites = async (tool) => {
    if (!isLoggedIn || !user?.id) {
      setAuthTrigger({ type: "hard", message: "נדרש חשבון כדי לשמור מועדפים" });
      setShowAuth(true);
      return;
    }
    
    const isFavorite = favorites.some((t) => t.id === tool.id);
    
    try {
      if (isFavorite) {
        await favoritesService.removeFavorite(user.id, tool.id);
      } else {
        await favoritesService.addFavorite(user.id, tool.id);
      }
      
      // Reload favorites
      const { favorites: newFavorites } = await favoritesService.getUserFavorites(user.id);
      if (newFavorites) {
        setFavorites(transformTools(newFavorites));
      }
    } catch (err) {
      alert(`שגיאה: ${err.message}`);
    }
  };

  const handleSavePrompt = async (toolId, promptText, parameters = {}) => {
    if (!isLoggedIn || !user?.id) {
      setAuthTrigger({ type: "hard", message: "נדרש חשבון כדי לשמור פרומפטים" });
      setShowAuth(true);
      return;
    }
    
    try {
      await promptsService.savePrompt(user.id, toolId, promptText, parameters);
      
      // Reload prompts
      const { prompts } = await promptsService.getUserPrompts(user.id);
      if (prompts) {
        setSavedPrompts(prompts.map(transformPrompt));
      }
      
      alert("הפרומפט נשמר בהצלחה!");
    } catch (err) {
      alert(`שגיאה בשמירה: ${err.message}`);
    }
  };

  const handleUseTool = () => {
    if (!isLoggedIn) {
      setAuthTrigger({ type: "hard", message: "נדרש חשבון כדי להשתמש בכלים" });
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
    if (loading && !showSplash) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-[#f6f7fb] to-[#eef1f8] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/80 border border-gray-200 shadow-lg flex items-center justify-center text-3xl mb-4 mx-auto animate-pulse">
              🔄
            </div>
            <p className="text-gray-600">טוען...</p>
          </div>
        </div>
      );
    }

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
            onAddToFavorites={handleAddToFavorites}
            onOpenAccount={() => setCurrentScreen("account")}
            onLogout={handleLogout}
            onNavigate={(page) => setCurrentScreen(page)}
            favorites={favorites}
            allTools={allTools}
            categories={categories}
            recentTools={recentTools}
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
            savedPrompts={savedPrompts}
            savedExamples={savedExamples}
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
            user={{
              ...user,
              name: userProfile?.display_name || user?.email,
              email: user?.email,
              avatar: userProfile?.avatar_url || "👤",
              memberSince: new Date(user?.created_at).toLocaleDateString('he-IL'),
              totalTools: favorites.length,
              totalPrompts: savedPrompts.length,
            }}
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
          onLogin={handleLogin}
          showCloseButton={authTrigger.type === "soft"}
          triggerType={authTrigger.type}
          message={authTrigger.message}
        />
      )}

      {/* Search Page */}
      {showSearch && (
        <SearchPage
          allTools={allTools}
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
            const promptData = {
              id: Date.now(),
              text: viewingExample.prompt || "Example prompt",
              tool: viewingExample.tool,
              parameters: viewingExample.parameters || {},
            };
            setSelectedPrompt(promptData);
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
            if (selectedPrompt && selectedPrompt.text) {
              navigator.clipboard.writeText(selectedPrompt.text);
              alert("הפרומפט הועתק!");
            }
          }}
          onTryInTool={() => handleTryInTool(selectedPrompt?.text)}
          onSave={(text) => {
            if (selectedTool?.id) {
              handleSavePrompt(selectedTool.id, text, selectedPrompt?.parameters);
            }
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
          user={{
            ...userProfile,
            email: user?.email
          }}
          onClose={() => setShowSettings(false)}
          onSave={async (data) => {
            if (user?.id) {
              const { profile } = await authService.updateUserProfile(user.id, data);
              if (profile) {
                setUserProfile(profile);
                alert("ההגדרות נשמרו!");
              }
            }
          }}
        />
      )}

      {/* Bottom Navigation (when logged in, but not on home page) */}
      {!showSplash && isLoggedIn && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-white/90 border-t border-white/30 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-around">
            <button
              onClick={() => setCurrentScreen("home")}
              className={`flex flex-col items-center gap-1 px-3 sm:px-4 py-2 rounded-xl transition-all ${
                currentScreen === "home" ? "bg-blue-50 text-blue-600 scale-105" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="text-xl sm:text-2xl">🏠</span>
              <span className="text-xs sm:text-sm font-medium">בית</span>
            </button>

            <button
              onClick={() => setShowSearch(true)}
              className="flex flex-col items-center gap-1 px-3 sm:px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-50 transition-all"
            >
              <span className="text-xl sm:text-2xl">🔍</span>
              <span className="text-xs sm:text-sm font-medium">חיפוש</span>
            </button>

            <button
              onClick={() => setCurrentScreen("favorites")}
              className={`flex flex-col items-center gap-1 px-3 sm:px-4 py-2 rounded-xl transition-all ${
                currentScreen === "favorites" ? "bg-blue-50 text-blue-600 scale-105" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="text-xl sm:text-2xl">⭐</span>
              <span className="text-xs sm:text-sm font-medium">מועדפים</span>
            </button>

            <button
              onClick={() => setCurrentScreen("account")}
              className={`flex flex-col items-center gap-1 px-3 sm:px-4 py-2 rounded-xl transition-all ${
                currentScreen === "account" ? "bg-blue-50 text-blue-600 scale-105" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="text-xl sm:text-2xl">👤</span>
              <span className="text-xs sm:text-sm font-medium">חשבון</span>
            </button>
          </div>
        </nav>
      )}

      {/* Error Display */}
      {error && (
        <div className="fixed top-4 right-4 z-50 p-4 rounded-xl bg-red-100 border border-red-300 text-red-800 shadow-lg max-w-md">
          <div className="flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="font-semibold mb-1">שגיאה</p>
              <p className="text-sm">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="ml-auto text-red-600 hover:text-red-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

