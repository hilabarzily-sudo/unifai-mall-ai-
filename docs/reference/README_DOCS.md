# UnifAI Screens – Complete UI Components Collection

**14 React Components** עבור האפליקציה UnifAI - "Spotify for AI Tools"

עוצב לפי **OS26 Design System** + **Glassmorphism**

---

## 📁 מבנה הקבצים

```
screens/
├── 01-SplashScreen.jsx          # מסך פתיחה עם אנימציה
├── 02-AuthPopup.jsx             # התחברות/הרשמה (Google, Apple, Email)
├── 03-HomePage.jsx              # דף הבית - Wolt Dynamic Logic
├── 04-ToolPage.jsx              # דף כלי - App Store Style
├── 05-ExamplesGrid.jsx          # גלריית דוגמאות - Pinterest
├── 06-ExampleViewer.jsx         # צפייה בדוגמה - Sora Style
├── 07-PromptRevealSheet.jsx    # גילוי פרומפט - Bottom Sheet
├── 08-ToolWebView.jsx           # פתיחת כלי ב-WebView
├── 09-FavoritesPage.jsx         # עמוד מועדפים
├── 10-SavedPromptsSlider.jsx   # סליידר פרומפטים שמורים
├── 11-SearchPage.jsx            # עמוד חיפוש
├── 12-AccountPage.jsx           # עמוד חשבון - App Store Style
├── 13-AccountSettingsSheet.jsx # הגדרות חשבון - Bottom Sheet
└── 14-EmptyState.jsx            # מצב ריק (no results)
```

---

## 🎨 עיצוב

כל הקומפוננטות מעוצבות עם:

### Glassmorphism
- `backdrop-blur-xl` / `backdrop-blur-2xl`
- `bg-white/40` / `bg-white/60` / `bg-white/80`
- `border border-white/20` / `border-white/30`

### Colors
- Primary: `bg-gray-900` (כפתורים ראשיים)
- Background: `from-[#f6f7fb] to-[#eef1f8]`
- Accents: `bg-blue-600` (App Store buttons)

### Animations
- Fade-in
- Scale-in / Scale-up
- Slide-up (bottom sheets)
- Hover effects (`hover:scale-[1.02]`)

---

## 📱 User Flow

### 1. App Launch
```jsx
<SplashScreen onComplete={() => navigate('/home')} />
```

### 2. Authentication Triggers
```jsx
// Soft trigger (can dismiss)
<AuthPopup 
  showCloseButton={true}
  triggerType="soft"
  message="היי, רוצה לשמור כלים?"
/>

// Hard trigger (must login)
<AuthPopup 
  showCloseButton={false}
  triggerType="hard"
/>
```

### 3. Home Page Navigation
```jsx
<HomePage 
  isLoggedIn={true}
  onOpenAuth={() => setShowAuth(true)}
  onOpenTool={(tool) => navigate(`/tool/${tool.id}`)}
/>
```

### 4. Tool Details
```jsx
<ToolPage 
  tool={selectedTool}
  onUseTool={() => setShowWebView(true)}
  onAddToFavorites={() => addToFavorites(tool)}
  onViewExample={(example) => setViewingExample(example)}
/>
```

### 5. Example Viewer (Sora-style)
```jsx
<ExampleViewer 
  example={selectedExample}
  onClose={() => setViewingExample(null)}
  onViewPrompt={() => setShowPromptSheet(true)}
  onOpenTool={() => openToolWithPrompt()}
/>
```

### 6. Tool WebView
```jsx
<ToolWebView 
  tool={selectedTool}
  preloadedPrompt={prompt?.text}
  onClose={() => setShowWebView(false)}
/>
```

---

## 🔧 Props Reference

### SplashScreen
```typescript
{
  onComplete?: () => void;  // נקרא אחרי 1.2 שניות
}
```

### AuthPopup
```typescript
{
  onClose: () => void;
  showCloseButton?: boolean;  // default: true
  triggerType?: "soft" | "hard";  // default: "soft"
  message?: string;  // הודעה מותאמת אישית
}
```

### HomePage
```typescript
{
  isLoggedIn: boolean;
  onOpenAuth: () => void;
  onOpenTool: (tool: Tool) => void;
}
```

### ToolPage
```typescript
{
  tool: Tool;
  onUseTool: () => void;
  onAddToFavorites: () => void;
  onGoHome: () => void;
  onViewExample: (example: Example) => void;
  isLoggedIn: boolean;
  isFavorite?: boolean;
  showSavedPrompts?: boolean;  // כאשר נפתח מ-Favorites
}
```

### ExampleViewer
```typescript
{
  example: Example;
  onClose: () => void;
  onViewPrompt: () => void;
  onOpenTool: () => void;
}
```

### PromptRevealSheet
```typescript
{
  prompt: Prompt;
  onClose: () => void;
  onCopy: () => void;
  onTryInTool: () => void;
  onSave?: (text: string) => void;
  isEditable?: boolean;  // default: false
}
```

### ToolWebView
```typescript
{
  tool: Tool;
  onClose: () => void;
  preloadedPrompt?: string;  // מ-"Try in Tool"
  toolUrl?: string;
}
```

### FavoritesPage
```typescript
{
  favoriteTools?: Tool[];
  savedPrompts?: Prompt[];
  savedExamples?: Example[];
  onOpenTool: (tool: Tool) => void;
  onViewPrompt: (prompt: Prompt) => void;
  onViewExample: (example: Example) => void;
}
```

### SavedPromptsSlider
```typescript
{
  toolId: string;
  toolName: string;
  savedPrompts?: Prompt[];
  onSelectPrompt: (prompt: Prompt) => void;
}
```

### SearchPage
```typescript
{
  onSelectTool: (tool: Tool) => void;
  onClose: () => void;
}
```

### AccountPage
```typescript
{
  user?: User;
  favoriteTools?: Tool[];
  onOpenTool: (tool: Tool) => void;
  onOpenSettings: () => void;
  onLogout: () => void;
}
```

### AccountSettingsSheet
```typescript
{
  user: User;
  onClose: () => void;
  onSave: (formData: UserSettings) => void;
}
```

### EmptyState
```typescript
{
  type?: "search" | "favorites" | "history" | "prompts" | "examples";
  query?: string;
  onAction?: (suggestion?: string) => void;
  suggestions?: string[];
}
```

---

## 🚀 דוגמאות שימוש

### דף כלי עם פרומפטים שמורים (מ-Favorites)
```jsx
function ToolPageWithPrompts({ tool }) {
  return (
    <>
      {/* Slider מופיע רק כאשר נפתח מ-Favorites */}
      <SavedPromptsSlider 
        toolId={tool.id}
        toolName={tool.name}
        savedPrompts={getUserPrompts(tool.id)}
        onSelectPrompt={(prompt) => openToolWithPrompt(prompt)}
      />
      
      <ToolPage 
        tool={tool}
        showSavedPrompts={true}
        {...otherProps}
      />
    </>
  );
}
```

### Flow מלא: Search → Tool → Example → Prompt → Try in Tool
```jsx
// 1. Search
<SearchPage 
  onSelectTool={(tool) => setSelectedTool(tool)}
/>

// 2. Tool Page
<ToolPage 
  tool={selectedTool}
  onViewExample={(ex) => setViewingExample(ex)}
/>

// 3. Example Viewer
<ExampleViewer 
  example={viewingExample}
  onViewPrompt={() => setShowPrompt(true)}
/>

// 4. Prompt Sheet
<PromptRevealSheet 
  prompt={viewingExample.prompt}
  onTryInTool={() => openToolWithPrompt()}
/>

// 5. Tool WebView with preloaded prompt
<ToolWebView 
  tool={selectedTool}
  preloadedPrompt={viewingExample.prompt.text}
/>
```

---

## 📦 התקנה ושימוש

### 1. העתק את התיקייה `screens/` לפרויקט שלך

### 2. וודא שיש לך Tailwind CSS
```bash
npm install -D tailwindcss
npx tailwindcss init
```

### 3. הוסף ל-`tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '3xl': '64px',
      },
    },
  },
}
```

### 4. יבא קומפוננטה:
```jsx
import SplashScreen from './screens/01-SplashScreen';
import AuthPopup from './screens/02-AuthPopup';
// ... וכו'
```

---

## 🎯 Features

- ✅ OS26 Design System
- ✅ Glassmorphism עקבי
- ✅ Responsive (mobile + desktop)
- ✅ Animations חלקות
- ✅ Accessibility (aria-labels, keyboard navigation)
- ✅ RTL Support (עברית)
- ✅ Dark Mode Ready
- ✅ Mock Data מובנה לבדיקות

---

## 🔗 ממשקי TypeScript (אופציונלי)

```typescript
interface Tool {
  id: string | number;
  name: string;
  icon: string;
  category: string;
  tags: string[];
  url?: string;
}

interface Example {
  id: string | number;
  image: string;
  prompt: string;
  tool: string;
  type: "image" | "video" | "audio" | "text";
}

interface Prompt {
  id: string | number;
  text: string;
  parameters?: Record<string, any>;
  tool: string;
  createdAt: string;
}

interface User {
  name: string;
  email: string;
  avatar?: string;
  memberSince?: string;
}
```

---

## 📝 הערות

1. **כל הקומפוננטות עצמאיות** - אפשר להשתמש בכל אחת בנפרד
2. **Mock Data מובנה** - לבדיקות מהירות
3. **Tailwind CSS נדרש** - כל העיצוב מבוסס על Tailwind
4. **RTL Support** - עברית מוכנה מראש
5. **Responsive** - עובד על כל גודל מסך

---

## 🎨 Sketch Integration

כדי להשתמש בקבצים האלה ב-Sketch:

1. פתח את Sketch
2. התקן את **html-sketchapp** plugin
3. או השתמש ב-**Figma** + **html.to.design**
4. Import את ה-JSX components
5. Convert ל-Sketch Symbols

---

**Created for UnifAI | AI Tools Store**  
Design System: OS26 + Glassmorphism  
Version: 1.0.0

