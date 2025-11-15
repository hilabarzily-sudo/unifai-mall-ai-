# UnifAI – Visual Screen Reference Guide

מדריך ויזואלי לכל 14 המסכים באפליקציה

---

## 🎬 1. Splash Screen
**קובץ:** `01-SplashScreen.jsx`

```
┌─────────────────────────┐
│                         │
│                         │
│         ┌─────┐         │
│         │  U  │         │  ← Logo (Glassmorphism)
│         └─────┘         │
│                         │
│        UnifAI           │  ← App Name
│   Spotify for AI Tools  │  ← Tagline
│                         │
│        ● ● ●            │  ← Loading dots
│                         │
└─────────────────────────┘
```

**משך:** 1.2 שניות → מעבר אוטומטי ל-Home

---

## 🔐 2. Auth Popup
**קובץ:** `02-AuthPopup.jsx`

```
┌─────────────────────────┐
│    [Background Blur]    │
│  ┌───────────────────┐  │
│  │        [X]        │  │ ← Close (optional)
│  │      ┌───┐        │  │
│  │      │ U │        │  │ ← Logo
│  │      └───┘        │  │
│  │                   │  │
│  │   התחברות/הרשמה   │  │
│  │                   │  │
│  │ ┌───────────────┐ │  │
│  │ │  התחברות  │ הרשמה │ │  ← Tabs
│  │ └───────────────┘ │  │
│  │                   │  │
│  │  [🔵 Google]      │  │
│  │  [⚫ Apple]        │  │
│  │                   │  │
│  │  ─── או ───       │  │
│  │                   │  │
│  │  [Email input]    │  │
│  │  [Password input] │  │
│  │  [התחבר Button]   │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

**טריגרים:**
- כפתור Header
- אחרי 3 דקות (soft)
- Add to Favorites (hard)
- Open Tool (hard)

---

## 🏠 3. Home Page
**קובץ:** `03-HomePage.jsx`

```
┌─────────────────────────────────┐
│ [U] UnifAI    [התחברות/הרשמה]   │ ← Header (sticky)
├─────────────────────────────────┤
│                                 │
│ היסטוריית כלים אחרונים          │
│ ╔═════╗ ╔═════╗ ╔═════╗ →      │ ← Horizontal scroll
│ ║ 🎨  ║ ║ 🤖  ║ ║ 🎬  ║        │
│ ║Tool1║ ║Tool2║ ║Tool3║        │
│ ╚═════╝ ╚═════╝ ╚═════╝        │
│                                 │
│ מומלץ עבורך                     │
│ ┌─────┐ ┌─────┐ ┌─────┐        │
│ │ 🧠  │ │ 🖼️  │ │ 🎙️  │        │ ← Pinterest Grid
│ │Tool4│ │Tool5│ │Tool6│        │
│ └─────┘ └─────┘ └─────┘        │
│ ┌─────┐ ┌─────┐ ┌─────┐        │
│ │ ✨  │ │ 🔤  │ │ 🔍  │        │
│ └─────┘ └─────┘ └─────┘        │
│                                 │
│ חינמי לשימוש היום               │
│ ╔═════╗ ╔═════╗ →              │
│                                 │
│ Design (Category)               │
│ ╔═════╗ ╔═════╗ ╔═════╗ →      │
│                                 │
│ Writing (Category)              │
│ ╔═════╗ ╔═════╗ →              │
└─────────────────────────────────┘
```

**סקשנים דינמיים (Wolt Logic):**
1. History (אם מחובר)
2. Recommended
3. Free to Use
4. Categories (Design, Writing, Video...)

---

## 🛠️ 4. Tool Page
**קובץ:** `04-ToolPage.jsx`

```
┌─────────────────────────────────┐
│ [←] Tool Details              │ ← Header (sticky)
├─────────────────────────────────┤
│ ┌────────────────────────────┐ │
│ │ ┌────┐  Midjourney         │ │
│ │ │ 🎨 │  Design              │ │
│ │ └────┘  [Paid][Pro][⭐]    │ │
│ │         ⭐ 4.8 (2847)      │ │
│ └────────────────────────────┘ │
│                                 │
│ ┌────────────────────────────┐ │
│ │ מה הכלי הזה עושה            │ │
│ │ AI image generation...      │ │
│ └────────────────────────────┘ │
│                                 │
│ דוגמאות מהכלי                   │
│ ┌───┐ ┌───┐ ┌───┐             │
│ │🖼️ │ │🌅 │ │🎭 │             │ ← Pinterest Grid
│ └───┘ └───┘ └───┘             │
│ ┌─────────┐ ┌───┐             │
│ │  🏛️     │ │🚀 │             │
│ └─────────┘ └───┘             │
│                                 │
│ מאפייני הכלי                    │
│ ┌────────────────────────────┐ │
│ │ מחיר: $10-30/month         │ │
│ │ מהירות: Fast (30-60 sec)   │ │
│ └────────────────────────────┘ │
│                                 │
│ Reviews ⭐⭐⭐⭐⭐               │
│ ┌────────────────────────────┐ │
│ │ Sarah M. ⭐⭐⭐⭐⭐          │ │
│ │ "Amazing tool!"            │ │
│ └────────────────────────────┘ │
├─────────────────────────────────┤
│ [Use Tool] [⭐] [🏠]            │ ← Bottom CTA (fixed)
└─────────────────────────────────┘
```

---

## 🖼️ 5. Examples Grid
**קובץ:** `05-ExamplesGrid.jsx`

```
┌─────────────────────────────────┐
│ גלריית דוגמאות                  │
├─────────────────────────────────┤
│ ┌───┐ ┌───────────┐ ┌───┐      │
│ │🖼️ │ │           │ │🌅 │      │
│ └───┘ │    🏛️     │ └───┘      │ ← Masonry Grid
│ ┌───┐ │           │ ┌───┐      │   (Pinterest)
│ │🎭 │ └───────────┘ │🚀 │      │
│ └───┘ ┌───┐ ┌───┐  └───┘      │
│       │🦄 │ │🌊 │              │
│       └───┘ └───┘              │
│ ┌───────────┐ ┌───┐ ┌───┐     │
│ │    🏙️     │ │🎨 │ │🌌 │     │
│ └───────────┘ └───┘ └───┘     │
│                                 │
│      [טען עוד דוגמאות]          │
└─────────────────────────────────┘
```

**Hover Effect:** overlay עם prompt + tool name

---

## 👁️ 6. Example Viewer (Sora-style)
**קובץ:** `06-ExampleViewer.jsx`

```
┌─────────────────────────────────┐
│ [X]                  [↗] [♡234] │ ← Top bar
│                                 │
│        ┌─────────────┐          │
│        │             │          │
│        │             │          │
│        │     🖼️      │          │ ← Image (center)
│        │             │          │
│        │             │          │
│        └─────────────┘          │
│                                 │
│  [View Prompt]  [Open Tool]    │ ← Actions
│                                 │
│  2 days ago    16:9 • Standard │ ← Info
└─────────────────────────────────┘

עם Prompt Sheet (bottom):
┌─────────────────────────────────┐
│ Prompt Details           [↓]    │
│ ┌─────────────────────────────┐ │
│ │ [Prompt] [Parameters]       │ │ ← Tabs
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ A cyberpunk cityscape...    │ │ ← Prompt text
│ └─────────────────────────────┘ │
│                                 │
│ Model: Midjourney v6            │
│ Aspect Ratio: 16:9              │
│                                 │
│ [📋 Copy]  [Try in Tool]        │
└─────────────────────────────────┘
```

---

## 📝 7. Prompt Reveal Sheet
**קובץ:** `07-PromptRevealSheet.jsx`

```
        [Backdrop with blur]
┌─────────────────────────────────┐
│         ────                    │ ← Handle bar
│                                 │
│ Prompt Details          [X]     │
│ Midjourney • 2024-01-15         │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ [📝 Prompt] [⚙️ Parameters] │ │ ← Tabs
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │                             │ │
│ │ Cyberpunk cityscape at      │ │ ← Prompt
│ │ golden hour with neon...    │ │   (editable)
│ │                             │ │
│ └─────────────────────────────┘ │
│                                 │
│ 42 words • 245 characters       │
│                                 │
│ [Copy] [Save Changes] [Try in Tool] │
│                                 │
│ 💡 Tip: Copy this prompt and... │
└─────────────────────────────────┘
```

**Parameters Tab:**
- Model, Aspect Ratio, Stylization
- Quality, Chaos, Seed, etc.

---

## 🌐 8. Tool WebView
**קובץ:** `08-ToolWebView.jsx`

```
┌─────────────────────────────────┐
│ ┌──┐ Midjourney  [↻][↗][X]     │ ← Top bar
│ │🎨│ midjourney.com             │
├─────────────────────────────────┤
│ 💡 Prompt loaded: "Cyberpunk..." │ ← Banner (if prompt)
├─────────────────────────────────┤
│                                 │
│     [Tool Interface Here]       │
│                                 │
│         ┌─────────┐             │
│         │   🎨    │             │ ← iframe/webview
│         │         │             │
│         │ Loading │             │
│         │  Tool   │             │
│         └─────────┘             │
│                                 │
├─────────────────────────────────┤
│ [💾 Save Output] [⭐ Favorite]  │ ← Bottom bar
└─────────────────────────────────┘
```

**Features:**
- Refresh, Open in new tab
- Preloaded prompt support
- Responsive container

---

## ⭐ 9. Favorites Page
**קובץ:** `09-FavoritesPage.jsx`

```
┌─────────────────────────────────┐
│ המועדפים שלי                    │
├─────────────────────────────────┤
│ נשמר לאחרונה                    │
│ ╔═════╗ ╔═════╗ ╔═════╗ →      │ ← Notion-style
│ ║ 🎨  ║ ║ 🤖  ║ ║ 🎬  ║        │   slider
│ ╚═════╝ ╚═════╝ ╚═════╝        │
│                                 │
│ כלים שמורים                     │
│ ┌────────────────────────────┐ │
│ │ 🎨 Midjourney    [Open]    │ │
│ │    Design • 2 days ago     │ │
│ ├────────────────────────────┤ │
│ │ 🤖 ChatGPT       [Open]    │ │
│ │    AI Assistant • 5 hrs    │ │
│ └────────────────────────────┘ │
│                                 │
│ פרומפטים שמורים                │
│ ┌────────────────────────────┐ │
│ │ Cyberpunk cityscape...     │ │
│ │ Midjourney • Yesterday     │ │
│ ├────────────────────────────┤ │
│ │ Write a blog post...       │ │
│ │ ChatGPT • 2 days ago       │ │
│ └────────────────────────────┘ │
│                                 │
│ דוגמאות שמורות                  │
│ ┌─────────┐ ┌───┐ ┌───┐       │
│ │   🖼️    │ │🌅 │ │🎭 │       │ ← Pinterest
│ └─────────┘ └───┘ └───┘       │   collage
│ ┌───┐ ┌───┐                    │
│ │🏛️ │ │🚀 │                    │
│ └───┘ └───┘                    │
└─────────────────────────────────┘
```

---

## 🎯 10. Saved Prompts Slider
**קובץ:** `10-SavedPromptsSlider.jsx`

```
┌─────────────────────────────────┐
│ הפרומפטים השמורים שלך ל-Midjourney │
│                            4 saved │
│                                 │
│ ╔═══════════╗ ╔═══════════╗ → │
│ ║ 🌆        ║ ║ 🏔️        ║   │
│ ║ Cyberpunk ║ ║ Mountain  ║   │
│ ║ cityscape ║ ║ landscape ║   │
│ ║ 2 days    ║ ║ 1 week    ║   │
│ ║    Use →  ║ ║    Use →  ║   │
│ ╚═══════════╝ ╚═══════════╝   │
│                                 │
│ ╔═══════════╗ ┌───────────┐   │
│ ║ ⚔️        ║ │   ➕     │   │
│ ║ Futuristic║ │ Create   │   │ ← Add new
│ ║ warrior   ║ │   New    │   │
│ ╚═══════════╝ └───────────┘   │
└─────────────────────────────────┘
```

**הופע:** רק כאשר פותחים Tool מתוך Favorites

---

## 🔍 11. Search Page
**קובץ:** `11-SearchPage.jsx`

```
┌─────────────────────────────────┐
│ [←] [🔍 חפש כלי AI...]         │ ← Search bar
├─────────────────────────────────┤
│                                 │
│ חיפושים פופולריים              │
│ [🔍 Image Generation]           │
│ [🔍 ChatGPT]                    │
│ [🔍 Video AI]                   │
│                                 │
│ חיפושים אחרונים                │
│ 🕐 Midjourney                   │
│ 🕐 ChatGPT alternatives         │
│                                 │
└─────────────────────────────────┘

עם תוצאות:
┌─────────────────────────────────┐
│ 8 תוצאות עבור "image"           │
│                                 │
│ ┌────────────────────────────┐ │
│ │ 🎨 Midjourney        [→]   │ │
│ │    Design                  │ │
│ │    [Image][Pro]            │ │
│ ├────────────────────────────┤ │
│ │ 🖼️ DALL-E           [→]   │ │
│ │    Design                  │ │
│ │    [Image][Free]           │ │
│ └────────────────────────────┘ │
└─────────────────────────────────┘
```

---

## 👤 12. Account Page
**קובץ:** `12-AccountPage.jsx`

```
┌─────────────────────────────────┐
│ Account                    [⚙️] │ ← Settings icon
├─────────────────────────────────┤
│ ┌────────────────────────────┐ │
│ │ ┌────┐ Sarah Cohen        │ │
│ │ │ 👤 │ sarah@example.com  │ │
│ │ └────┘ Member since Jan   │ │
│ │                            │ │
│ │ ┌──────┐ ┌──────┐         │ │
│ │ │  12  │ │  48  │         │ │
│ │ │Tools │ │Prompts│         │ │
│ │ └──────┘ └──────┘         │ │
│ └────────────────────────────┘ │
│                                 │
│ Favorite Tools                  │
│ ┌────────────────────────────┐ │
│ │ ┌────┐ Midjourney          │ │
│ │ │ 🎨 │ Design    [Open]    │ │ ← App Store
│ │ └────┘ Last: 2 days ago    │ │   style rows
│ ├────────────────────────────┤ │
│ │ ┌────┐ ChatGPT             │ │
│ │ │ 🤖 │ AI Asst   [Open]    │ │
│ │ └────┘ Last: 5 hours ago   │ │
│ └────────────────────────────┘ │
│                                 │
│ ┌────────────────────────────┐ │
│ │ View Purchase History  [→] │ │
│ │ Manage Subscriptions   [→] │ │
│ │ Log Out                    │ │
│ └────────────────────────────┘ │
└─────────────────────────────────┘
```

---

## ⚙️ 13. Account Settings Sheet
**קובץ:** `13-AccountSettingsSheet.jsx`

```
        [Backdrop with blur]
┌─────────────────────────────────┐
│         ────                    │ ← Handle bar
│                                 │
│ Settings              [Done]    │
├─────────────────────────────────┤
│ UnifAI Account                  │
│ ┌────┐ [Change Photo]           │
│ │ 👤 │                          │
│ └────┘                          │
│ [Full Name input]               │
│ [Email input]                   │
│ [Nickname input]                │
│                                 │
│ Personalization                 │
│ Language:  [Hebrew ▾]           │
│ Theme:     [Auto ▾]             │
│ Feed Personalization    [ON]    │
│                                 │
│ App Management                  │
│ Notifications          [ON]     │
│ Privacy Settings       [→]      │
│ Terms & Policies       [→]      │
│                                 │
│       UnifAI v1.0.0             │
└─────────────────────────────────┘
```

**Sections:**
- A: User Identity
- B: Personalization
- C: App Management

---

## 📭 14. Empty State
**קובץ:** `14-EmptyState.jsx`

```
┌─────────────────────────────────┐
│                                 │
│         ┌─────────┐             │
│         │         │             │
│         │   🔍    │             │ ← Icon
│         │         │             │
│         └─────────┘             │
│                                 │
│     לא נמצאו תוצאות             │
│                                 │
│  לא מצאנו כלים או תוכן         │
│  שתואם ל-"query"                │
│                                 │
│     [חפש משהו אחר]              │
│                                 │
│ אולי תרצה לנסות:                │
│ [Image Generation] [ChatGPT]   │
│ [Video AI] [Writing Tools]     │
│                                 │
│ ┌────────────────────────────┐ │
│ │ 💡 עצה: השתמש בחיפוש...    │ │
│ └────────────────────────────┘ │
└─────────────────────────────────┘
```

**Types:**
- search, favorites, history, prompts, examples

---

## 🎯 Navigation Flow

```
Splash (1.2s)
    ↓
Home Page
    ├→ [Search] → Search Page → Tool Page
    ├→ [Tool Card] → Tool Page
    │                  ├→ [Example] → Example Viewer
    │                  │                 ├→ [Prompt] → Prompt Sheet
    │                  │                 │              ↓
    │                  │                 └→ [Try] → Tool WebView
    │                  └→ [Use Tool] → Tool WebView
    ├→ [Favorites] → Favorites Page → Tool Page (w/ Prompts Slider)
    └→ [Account] → Account Page
                      └→ [Settings] → Settings Sheet
```

---

## 🎨 Design Tokens

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(24px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 16px-32px;
```

### Colors
```css
--bg-primary: linear-gradient(to-br, #f6f7fb, #eef1f8);
--bg-card: rgba(255, 255, 255, 0.4);
--bg-button: #111827 (gray-900);
--border: rgba(255, 255, 255, 0.2-0.4);
```

### Spacing
```css
--padding-card: 1.25rem (p-5);
--gap-items: 1rem (gap-4);
--rounded: 1rem-2rem (rounded-2xl);
```

---

**כל המסכים עובדים יחד ב-`App.jsx`**  
**README מפורט ב-`README.md`**

