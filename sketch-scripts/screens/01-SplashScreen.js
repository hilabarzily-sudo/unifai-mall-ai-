// ================================================================================
// UNIFAI - SPLASH SCREEN
// Sketch JavaScript API Script
// ================================================================================
// How to use:
// 1. Open Sketch
// 2. Go to: Plugins > Run Script...
// 3. Select this file and run
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style, Rectangle, Group } = sketch;

// ================================================================================
// DESIGN TOKENS - OS26 + Glassmorphism
// ================================================================================
const COLORS = {
  bgGradientStart: '#f6f7fb',
  bgGradientEnd: '#eef1f8',
  glassWhite40: 'rgba(255, 255, 255, 0.4)',
  glassWhite30: 'rgba(255, 255, 255, 0.3)',
  glassBorder: 'rgba(255, 255, 255, 0.3)',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  dotsBounce: 'rgba(17, 24, 39, 0.6)',
};

const SIZES = {
  artboardWidth: 390,
  artboardHeight: 844,
  logoSize: 128,
  logoRadius: 32,
  dotSize: 8,
  dotSpacing: 6,
};

// ================================================================================
// MAIN FUNCTION
// ================================================================================
function createSplashScreen() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  // Create Artboard
  const artboard = new Artboard({
    name: '01 - Splash Screen',
    frame: { x: 0, y: 0, width: SIZES.artboardWidth, height: SIZES.artboardHeight },
    parent: page,
  });

  // Background Gradient
  const background = new Shape({
    name: 'Background Gradient',
    frame: { x: 0, y: 0, width: SIZES.artboardWidth, height: SIZES.artboardHeight },
    style: {
      fills: [{
        color: COLORS.bgGradientStart,
        fillType: Style.FillType.Gradient,
        gradient: {
          gradientType: Style.GradientType.Linear,
          from: { x: 0, y: 0 },
          to: { x: 1, y: 1 },
          stops: [
            { position: 0, color: COLORS.bgGradientStart },
            { position: 0.5, color: COLORS.bgGradientEnd },
            { position: 1, color: '#e8ebf3' },
          ],
        },
      }],
    },
    parent: artboard,
  });

  // Blur Background Layer
  const blurLayer = new Shape({
    name: 'Background Blur',
    frame: { x: 0, y: 0, width: SIZES.artboardWidth, height: SIZES.artboardHeight },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.3)' }],
      blur: { enabled: true, radius: 96, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  // Logo Container (Glass Card)
  const centerX = SIZES.artboardWidth / 2;
  const centerY = SIZES.artboardHeight / 2;

  const logoContainer = new Shape({
    name: 'Logo Container',
    frame: {
      x: centerX - SIZES.logoSize / 2,
      y: centerY - 160,
      width: SIZES.logoSize,
      height: SIZES.logoSize,
    },
    style: {
      fills: [{ color: COLORS.glassWhite40 }],
      borders: [{ color: COLORS.glassBorder, thickness: 1 }],
      borderRadius: SIZES.logoRadius,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(0, 0, 0, 0.15)',
        blur: 40,
        x: 0,
        y: 20,
      }],
    },
    parent: artboard,
  });

  // Logo Text "U"
  const logoText = new Text({
    name: 'Logo Text',
    text: 'U',
    frame: {
      x: centerX - 30,
      y: centerY - 140,
      width: 60,
      height: 60,
    },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 56,
      fontWeight: 700,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // App Name
  const appName = new Text({
    name: 'App Name',
    text: 'UnifAI',
    frame: {
      x: 0,
      y: centerY - 50,
      width: SIZES.artboardWidth,
      height: 40,
    },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 32,
      fontWeight: 600,
      alignment: Text.Alignment.center,
      letterSpacing: -0.5,
    },
    parent: artboard,
  });

  // Tagline
  const tagline = new Text({
    name: 'Tagline',
    text: 'Spotify for AI Tools',
    frame: {
      x: 0,
      y: centerY - 10,
      width: SIZES.artboardWidth,
      height: 24,
    },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 14,
      fontWeight: 300,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Loading Dots (3 circles)
  const dotsY = centerY + 40;
  const dotsStartX = centerX - (SIZES.dotSize * 1.5 + SIZES.dotSpacing);

  for (let i = 0; i < 3; i++) {
    const dot = new Shape({
      name: `Loading Dot ${i + 1}`,
      frame: {
        x: dotsStartX + i * (SIZES.dotSize + SIZES.dotSpacing),
        y: dotsY,
        width: SIZES.dotSize,
        height: SIZES.dotSize,
      },
      style: {
        fills: [{ color: COLORS.dotsBounce }],
        borderRadius: SIZES.dotSize / 2,
      },
      parent: artboard,
    });
  }

  // Success message
  sketch.UI.message('✅ Splash Screen created successfully!');
}

// ================================================================================
// RUN SCRIPT
// ================================================================================
createSplashScreen();

