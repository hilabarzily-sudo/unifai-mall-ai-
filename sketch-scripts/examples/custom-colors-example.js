// ================================================================================
// EXAMPLE: Custom Color Theme
// This example shows how to customize colors for all screens
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

// ================================================================================
// CUSTOM COLOR PALETTE
// Modify these colors to match your brand!
// ================================================================================
const CUSTOM_COLORS = {
  // Your Brand Colors
  brand: {
    primary: '#6366F1',           // Indigo - Your main brand color
    secondary: '#8B5CF6',         // Purple - Secondary brand color
    accent: '#EC4899',            // Pink - Accent color
  },
  
  // Custom Backgrounds
  background: {
    primary: '#F8FAFC',           // Lighter background
    secondary: '#F1F5F9',         // Secondary background
    gradient: {
      from: '#F8FAFC',
      to: '#EEF2FF'               // Subtle blue tint
    }
  },
  
  // Custom Glass Effects
  glass: {
    light: 'rgba(99, 102, 241, 0.1)',    // Indigo tint
    medium: 'rgba(99, 102, 241, 0.2)',
    strong: 'rgba(99, 102, 241, 0.3)',
    border: 'rgba(99, 102, 241, 0.15)',
  },
  
  // Custom Text Colors
  text: {
    primary: '#1E293B',           // Darker slate
    secondary: '#64748B',         // Slate 500
    brand: '#6366F1',             // Brand color for links
  },
  
  // Custom Buttons
  button: {
    primary: '#6366F1',           // Brand button
    primaryHover: '#4F46E5',
    secondary: 'rgba(255, 255, 255, 0.9)',
  }
};

// ================================================================================
// EXAMPLE SCREEN WITH CUSTOM COLORS
// ================================================================================
function createCustomThemeExample() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  // Create Artboard
  const artboard = new Artboard({
    name: 'Custom Theme Example',
    frame: { x: 0, y: 0, width: 390, height: 844 },
    parent: page,
  });

  // ============================================================================
  // 1. CUSTOM GRADIENT BACKGROUND
  // ============================================================================
  new Shape({
    name: 'Background',
    frame: { x: 0, y: 0, width: 390, height: 844 },
    style: {
      fills: [{
        fillType: Style.FillType.Gradient,
        gradient: {
          gradientType: Style.GradientType.Linear,
          from: { x: 0, y: 0 },
          to: { x: 1, y: 1 },
          stops: [
            { position: 0, color: CUSTOM_COLORS.background.gradient.from },
            { position: 1, color: CUSTOM_COLORS.background.gradient.to },
          ],
        },
      }],
    },
    parent: artboard,
  });

  // ============================================================================
  // 2. HEADER WITH BRAND COLOR
  // ============================================================================
  new Shape({
    name: 'Header',
    frame: { x: 0, y: 0, width: 390, height: 72 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      borders: [{ color: CUSTOM_COLORS.glass.border, thickness: 1 }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Header Title',
    text: 'Custom Theme',
    frame: { x: 0, y: 32, width: 390, height: 24 },
    style: {
      textColor: CUSTOM_COLORS.brand.primary,
      fontSize: 20,
      fontWeight: 700,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // ============================================================================
  // 3. CUSTOM GLASS CARD WITH BRAND TINT
  // ============================================================================
  new Shape({
    name: 'Card with Brand Tint',
    frame: { x: 24, y: 120, width: 342, height: 200 },
    style: {
      fills: [{ color: CUSTOM_COLORS.glass.medium }],
      borders: [{ color: CUSTOM_COLORS.glass.border, thickness: 1 }],
      borderRadius: 24,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(99, 102, 241, 0.2)',  // Brand color shadow
        blur: 32,
        x: 0,
        y: 12,
      }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Card Title',
    text: 'Brand-Themed Card',
    frame: { x: 48, y: 148, width: 294, height: 32 },
    style: {
      textColor: CUSTOM_COLORS.text.primary,
      fontSize: 24,
      fontWeight: 600,
    },
    parent: artboard,
  });

  new Text({
    name: 'Card Description',
    text: 'This card uses your custom\nbrand colors with a subtle\nindigo tint and shadow.',
    frame: { x: 48, y: 188, width: 294, height: 72 },
    style: {
      textColor: CUSTOM_COLORS.text.secondary,
      fontSize: 15,
      lineHeight: 24,
    },
    parent: artboard,
  });

  // ============================================================================
  // 4. CUSTOM BRAND BUTTONS
  // ============================================================================
  // Primary Brand Button
  new Shape({
    name: 'Primary Brand Button',
    frame: { x: 24, y: 360, width: 342, height: 56 },
    style: {
      fills: [{ color: CUSTOM_COLORS.button.primary }],
      borderRadius: 16,
      shadows: [{
        color: 'rgba(99, 102, 241, 0.3)',
        blur: 24,
        x: 0,
        y: 8,
      }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Button Text',
    text: 'Brand Primary Button',
    frame: { x: 24, y: 376, width: 342, height: 24 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 16,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Secondary Accent Button
  new Shape({
    name: 'Accent Button',
    frame: { x: 24, y: 432, width: 342, height: 56 },
    style: {
      fills: [{ color: CUSTOM_COLORS.brand.accent }],
      borderRadius: 16,
      shadows: [{
        color: 'rgba(236, 72, 153, 0.3)',
        blur: 24,
        x: 0,
        y: 8,
      }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Accent Button Text',
    text: 'Accent Button',
    frame: { x: 24, y: 448, width: 342, height: 24 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 16,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // ============================================================================
  // 5. INFO PANEL
  // ============================================================================
  new Shape({
    name: 'Info Panel',
    frame: { x: 24, y: 520, width: 342, height: 140 },
    style: {
      fills: [{ color: 'rgba(99, 102, 241, 0.05)' }],
      borders: [{ color: CUSTOM_COLORS.glass.border, thickness: 1 }],
      borderRadius: 16,
    },
    parent: artboard,
  });

  new Text({
    name: 'Info Title',
    text: '🎨 Custom Theme Applied!',
    frame: { x: 48, y: 544, width: 294, height: 24 },
    style: {
      textColor: CUSTOM_COLORS.brand.primary,
      fontSize: 16,
      fontWeight: 600,
    },
    parent: artboard,
  });

  new Text({
    name: 'Info Text',
    text: 'This example shows how to:\n• Change brand colors\n• Customize glass effects\n• Apply brand shadows\n• Use custom gradients',
    frame: { x: 48, y: 576, width: 294, height: 72 },
    style: {
      textColor: CUSTOM_COLORS.text.secondary,
      fontSize: 13,
      lineHeight: 20,
    },
    parent: artboard,
  });

  sketch.UI.message('✅ Custom theme example created!');
}

// ================================================================================
// HOW TO USE THIS IN YOUR SCREENS
// ================================================================================
/*

1. Copy the CUSTOM_COLORS object to any screen script
2. Replace the existing COLORS with CUSTOM_COLORS
3. Run the script

Example:

// In 01-SplashScreen.js:
const COLORS = {
  bgGradientStart: '#6366F1',      // Use your brand color
  bgGradientEnd: '#8B5CF6',        // Use secondary color
  // ... rest of colors
};

*/

// RUN
createCustomThemeExample();

