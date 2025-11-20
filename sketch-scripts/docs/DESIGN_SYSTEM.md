# 🎨 UnifAI Design System

**Complete Design Tokens & Guidelines**

---

## 📊 Overview

This document defines all design tokens used across the UnifAI Sketch Scripts collection. These tokens ensure consistency across all 14 screens.

---

## 🎨 Color System

### Primary Colors

```javascript
// Background Colors
'bg-primary': '#f6f7fb',           // Main background
'bg-secondary': '#eef1f8',         // Secondary background
'bg-tertiary': '#e8ebf3',          // Tertiary background

// Gradient Backgrounds
'gradient-main': 'linear-gradient(135deg, #f6f7fb 0%, #eef1f8 100%)',
'gradient-subtle': 'linear-gradient(135deg, #f6f7fb 0%, #e8ebf3 100%)',
```

### Glass Effects (Glassmorphism)

```javascript
// Glass Fills
'glass-light': 'rgba(255, 255, 255, 0.4)',
'glass-medium': 'rgba(255, 255, 255, 0.6)',
'glass-strong': 'rgba(255, 255, 255, 0.8)',
'glass-subtle': 'rgba(255, 255, 255, 0.2)',

// Glass Borders
'glass-border-light': 'rgba(255, 255, 255, 0.2)',
'glass-border-medium': 'rgba(255, 255, 255, 0.3)',
'glass-border-strong': 'rgba(255, 255, 255, 0.4)',
```

### Text Colors

```javascript
// Primary Text
'text-primary': '#111827',         // Gray 900 - Main headings & body
'text-secondary': '#6B7280',       // Gray 500 - Secondary text
'text-tertiary': '#9CA3AF',        // Gray 400 - Tertiary text
'text-placeholder': '#D1D5DB',     // Gray 300 - Placeholders

// On Dark Backgrounds
'text-on-dark': '#FFFFFF',         // White text
'text-on-dark-secondary': 'rgba(255, 255, 255, 0.8)',
```

### UI Colors

```javascript
// Buttons
'button-primary': '#111827',       // Dark button
'button-secondary': 'rgba(255, 255, 255, 0.8)',
'button-hover': '#000000',

// Interactive States
'hover-bg': 'rgba(255, 255, 255, 0.6)',
'active-bg': 'rgba(255, 255, 255, 0.8)',
'focus-border': '#111827',

// Backdrop
'backdrop-blur': 'rgba(0, 0, 0, 0.3)',
'backdrop-light': 'rgba(0, 0, 0, 0.1)',
```

### Accent Colors

```javascript
// Status Colors
'success': '#10B981',              // Green
'warning': '#F59E0B',              // Yellow
'error': '#EF4444',                // Red
'info': '#3B82F6',                 // Blue

// Semantic Colors
'blue-primary': '#2563EB',
'blue-light': '#EFF6FF',
'blue-border': '#BFDBFE',

'yellow-primary': '#F59E0B',
'yellow-light': '#FEF3C7',
'yellow-border': '#FDE68A',
```

---

## 📐 Spacing System

### Base Unit: 4px

```javascript
// Micro Spacing
'space-1': '4px',
'space-2': '8px',
'space-3': '12px',
'space-4': '16px',

// Standard Spacing
'space-5': '20px',
'space-6': '24px',
'space-8': '32px',
'space-10': '40px',
'space-12': '48px',

// Large Spacing
'space-16': '64px',
'space-20': '80px',
'space-24': '96px',
```

### Component Spacing

```javascript
// Padding
'padding-button': '12px 24px',
'padding-input': '12px 16px',
'padding-card': '16px',
'padding-card-large': '24px',
'padding-section': '32px',

// Gaps
'gap-small': '8px',
'gap-medium': '12px',
'gap-large': '16px',
'gap-xlarge': '24px',
```

---

## 📝 Typography System

### Font Family

```javascript
// Primary Font
'font-primary': 'SF Pro Display, -apple-system, system-ui',

// Fallback
'font-fallback': 'Arial, sans-serif',

// Hebrew Support
'font-hebrew': 'SF Pro Display, Arial Hebrew, Arial',
```

### Font Sizes

```javascript
// Display Sizes
'text-5xl': '48px',
'text-4xl': '36px',
'text-3xl': '32px',
'text-2xl': '28px',
'text-xl': '24px',

// Body Sizes
'text-lg': '18px',
'text-base': '16px',
'text-md': '15px',
'text-sm': '14px',
'text-xs': '13px',
'text-2xs': '12px',
'text-3xs': '11px',
```

### Font Weights

```javascript
'font-light': 300,
'font-regular': 400,
'font-medium': 500,
'font-semibold': 600,
'font-bold': 700,
'font-extrabold': 800,
```

### Line Heights

```javascript
'leading-none': '1',
'leading-tight': '1.25',
'leading-snug': '1.375',
'leading-normal': '1.5',
'leading-relaxed': '1.625',
'leading-loose': '2',
```

---

## 🔲 Border Radius

```javascript
// Small Radii
'radius-sm': '8px',
'radius-base': '12px',
'radius-md': '16px',

// Large Radii
'radius-lg': '20px',
'radius-xl': '24px',
'radius-2xl': '32px',
'radius-3xl': '40px',

// Special
'radius-full': '9999px',     // Pills/Circles
```

---

## 🌫️ Blur Effects

```javascript
// Background Blur (Glassmorphism)
'blur-sm': '8px',
'blur-base': '12px',
'blur-md': '16px',
'blur-lg': '24px',
'blur-xl': '32px',
'blur-2xl': '40px',
'blur-3xl': '48px',
'blur-4xl': '96px',
```

---

## 🎭 Shadows

### Elevation Levels

```javascript
// Level 1 (Subtle)
'shadow-sm': {
  color: 'rgba(0, 0, 0, 0.05)',
  x: 0,
  y: 2,
  blur: 8
},

// Level 2 (Card)
'shadow-base': {
  color: 'rgba(0, 0, 0, 0.08)',
  x: 0,
  y: 4,
  blur: 16
},

// Level 3 (Raised)
'shadow-md': {
  color: 'rgba(0, 0, 0, 0.1)',
  x: 0,
  y: 8,
  blur: 24
},

// Level 4 (Modal)
'shadow-lg': {
  color: 'rgba(0, 0, 0, 0.15)',
  x: 0,
  y: 16,
  blur: 48
},

// Level 5 (Overlay)
'shadow-xl': {
  color: 'rgba(0, 0, 0, 0.2)',
  x: 0,
  y: 24,
  blur: 64
},

// Special (Inset)
'shadow-inset': {
  color: 'rgba(0, 0, 0, 0.1)',
  x: 0,
  y: 2,
  blur: 4,
  type: 'inset'
},
```

---

## 📱 Artboard Sizes

### Mobile Devices

```javascript
// iPhone 14 Pro (Main)
'mobile-standard': {
  width: 390,
  height: 844
},

// iPhone 14 Pro Max
'mobile-large': {
  width: 430,
  height: 932
},

// iPhone SE
'mobile-small': {
  width: 375,
  height: 667
},
```

### Component Sizes

```javascript
// Wide Components
'component-wide': {
  width: 800,
  height: 'auto'
},

// Square Components
'component-square': {
  width: 600,
  height: 600
},
```

---

## 🎯 Component Specifications

### Buttons

```javascript
// Primary Button
{
  height: '44-56px',
  padding: '12px 24px',
  borderRadius: '12px',
  fontSize: '14-16px',
  fontWeight: 600,
  background: '#111827',
  color: '#FFFFFF'
}

// Secondary Button
{
  height: '44-56px',
  padding: '12px 24px',
  borderRadius: '12px',
  fontSize: '14-16px',
  fontWeight: 500,
  background: 'rgba(255, 255, 255, 0.8)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  color: '#111827'
}

// Icon Button
{
  width: '40px',
  height: '40px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.6)'
}
```

### Input Fields

```javascript
// Text Input
{
  height: '48px',
  padding: '12px 16px',
  borderRadius: '12px',
  fontSize: '15px',
  background: 'rgba(255, 255, 255, 0.6)',
  border: '1px solid rgba(229, 231, 235, 0.5)',
  focus: {
    background: 'rgba(255, 255, 255, 1)',
    border: '1px solid #111827'
  }
}
```

### Cards

```javascript
// Standard Card
{
  borderRadius: '16px',
  padding: '16px-24px',
  background: 'rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(24px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  shadow: '0 8px 24px rgba(0,0,0,0.1)'
}

// Large Card
{
  borderRadius: '24px',
  padding: '24px-32px',
  background: 'rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(24px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  shadow: '0 16px 48px rgba(0,0,0,0.15)'
}
```

### Modals & Sheets

```javascript
// Modal
{
  borderRadius: '32px',
  padding: '32px',
  maxWidth: '450px',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(40px)',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  shadow: '0 24px 64px rgba(0,0,0,0.3)'
}

// Bottom Sheet
{
  borderRadius: '40px 40px 0 0',
  padding: '32px',
  background: '#FFFFFF',
  shadow: '0 -8px 64px rgba(0,0,0,0.3)'
}
```

---

## 🎨 Animation Guidelines

### Timing Functions

```javascript
'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
'ease-smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
```

### Duration

```javascript
'duration-fast': '150ms',
'duration-base': '250ms',
'duration-medium': '350ms',
'duration-slow': '500ms',
```

---

## 📚 Usage Examples

### Creating a Glass Card

```javascript
new Shape({
  name: 'Glass Card',
  frame: { x: 24, y: 100, width: 342, height: 200 },
  style: {
    fills: [{ color: 'rgba(255, 255, 255, 0.4)' }],
    borders: [{ color: 'rgba(255, 255, 255, 0.2)', thickness: 1 }],
    borderRadius: 16,
    blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
    shadows: [{
      color: 'rgba(0, 0, 0, 0.1)',
      blur: 24,
      x: 0,
      y: 8,
    }],
  },
  parent: artboard,
});
```

### Creating Text with Proper Styling

```javascript
new Text({
  name: 'Heading',
  text: 'My Heading',
  frame: { x: 40, y: 120, width: 310, height: 32 },
  style: {
    textColor: '#111827',
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 32,
    alignment: Text.Alignment.right,  // RTL support
  },
  parent: artboard,
});
```

---

## ✅ Design Checklist

When creating a new screen, ensure:

- [ ] Background uses gradient (#f6f7fb → #eef1f8)
- [ ] All cards use glassmorphism (rgba + blur)
- [ ] Proper spacing (multiples of 4px)
- [ ] Consistent border radius (12-32px)
- [ ] Appropriate shadows for elevation
- [ ] Text colors are accessible
- [ ] RTL support for Hebrew text
- [ ] Mobile-first sizing (390×844)

---

**Design System Version: 1.0.0**  
**Last Updated: November 2024**  
**Maintained by: UnifAI Design Team**

