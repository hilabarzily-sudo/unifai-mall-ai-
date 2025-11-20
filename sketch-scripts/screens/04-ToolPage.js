// ================================================================================
// UNIFAI - TOOL PAGE (App Store Style)
// Sketch JavaScript API Script
// Tool Details with Tabs, Reviews, Share
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  bg: '#f6f7fb',
  glass: 'rgba(255, 255, 255, 0.4)',
  headerBg: 'rgba(255, 255, 255, 0.6)',
  buttonPrimary: '#111827',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  tabActive: '#111827',
  tabInactive: '#4B5563',
  ctaBg: 'rgba(255, 255, 255, 0.8)',
};

function createToolPage() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '04 - Tool Page',
    frame: { x: 1260, y: 0, width: 390, height: 1400 },
    parent: page,
  });

  // Background
  new Shape({
    name: 'Background',
    frame: { x: 0, y: 0, width: 390, height: 1400 },
    style: {
      fills: [{
        fillType: Style.FillType.Gradient,
        gradient: {
          gradientType: Style.GradientType.Linear,
          from: { x: 0, y: 0 },
          to: { x: 1, y: 1 },
          stops: [
            { position: 0, color: '#f6f7fb' },
            { position: 1, color: '#eef1f8' },
          ],
        },
      }],
    },
    parent: artboard,
  });

  // Header
  new Shape({
    name: 'Header',
    frame: { x: 0, y: 0, width: 390, height: 72 },
    style: {
      fills: [{ color: COLORS.headerBg }],
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      borders: [{ color: 'rgba(255, 255, 255, 0.2)', thickness: 1, position: Style.BorderPosition.Inside }],
    },
    parent: artboard,
  });

  // Back Button
  new Shape({
    name: 'Back Button',
    frame: { x: 24, y: 24, width: 40, height: 40 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Back Icon',
    text: '←',
    frame: { x: 32, y: 32, width: 24, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  new Text({
    name: 'Header Title',
    text: 'פרטי כלי',
    frame: { x: 0, y: 32, width: 390, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 18,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Share Button
  new Shape({
    name: 'Share Button',
    frame: { x: 326, y: 24, width: 40, height: 40 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  // Tool Header Card
  new Shape({
    name: 'Tool Header Card',
    frame: { x: 24, y: 96, width: 342, height: 160 },
    style: {
      fills: [{ color: COLORS.glass }],
      borders: [{ color: 'rgba(255, 255, 255, 0.2)', thickness: 1 }],
      borderRadius: 16,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 24,
        y: 8,
      }],
    },
    parent: artboard,
  });

  // Tool Icon
  new Shape({
    name: 'Tool Icon Box',
    frame: { x: 48, y: 120, width: 96, height: 96 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
      borderRadius: 16,
      blur: { enabled: true, radius: 16, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Tool Icon',
    text: '🎨',
    frame: { x: 64, y: 136, width: 64, height: 64 },
    style: {
      fontSize: 56,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Tool Name & Info
  new Text({
    name: 'Tool Name',
    text: 'Midjourney',
    frame: { x: 160, y: 120, width: 180, height: 32 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 28,
      fontWeight: 700,
    },
    parent: artboard,
  });

  new Text({
    name: 'Category',
    text: 'Design',
    frame: { x: 160, y: 156, width: 180, height: 20 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
    },
    parent: artboard,
  });

  // Rating
  new Text({
    name: 'Rating',
    text: '⭐ 4.8  (2,847 ביקורות)',
    frame: { x: 160, y: 184, width: 180, height: 20 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 13,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Tabs Navigation
  new Shape({
    name: 'Tabs Container',
    frame: { x: 24, y: 280, width: 342, height: 56 },
    style: {
      fills: [{ color: COLORS.glass }],
      borders: [{ color: 'rgba(255, 255, 255, 0.2)', thickness: 1 }],
      borderRadius: 16,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  const tabWidth = (342 - 16) / 4;
  const tabs = ['סקירה', 'דוגמאות', 'ביקורות', 'מחירים'];

  tabs.forEach((tabName, idx) => {
    const tabX = 32 + idx * tabWidth;
    
    // Active tab (first one)
    if (idx === 0) {
      new Shape({
        name: 'Active Tab',
        frame: { x: tabX, y: 288, width: tabWidth - 8, height: 40 },
        style: {
          fills: [{ color: COLORS.tabActive }],
          borderRadius: 12,
        },
        parent: artboard,
      });

      new Text({
        name: `Tab ${idx + 1}`,
        text: tabName,
        frame: { x: tabX, y: 296, width: tabWidth - 8, height: 24 },
        style: {
          textColor: '#FFFFFF',
          fontSize: 13,
          fontWeight: 600,
          alignment: Text.Alignment.center,
        },
        parent: artboard,
      });
    } else {
      new Text({
        name: `Tab ${idx + 1}`,
        text: tabName,
        frame: { x: tabX, y: 296, width: tabWidth - 8, height: 24 },
        style: {
          textColor: COLORS.tabInactive,
          fontSize: 13,
          fontWeight: 500,
          alignment: Text.Alignment.center,
        },
        parent: artboard,
      });
    }
  });

  // Description Card
  new Shape({
    name: 'Description Card',
    frame: { x: 24, y: 360, width: 342, height: 140 },
    style: {
      fills: [{ color: COLORS.glass }],
      borders: [{ color: 'rgba(255, 255, 255, 0.2)', thickness: 1 }],
      borderRadius: 16,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Description Title',
    text: 'מה הכלי הזה עושה',
    frame: { x: 48, y: 380, width: 294, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 18,
      fontWeight: 600,
    },
    parent: artboard,
  });

  new Text({
    name: 'Description Text',
    text: 'AI image generation tool that creates\nstunning visuals from text prompts.\nPerfect for designers and artists.',
    frame: { x: 48, y: 412, width: 294, height: 72 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 14,
      lineHeight: 22,
    },
    parent: artboard,
  });

  // Features Card
  new Shape({
    name: 'Features Card',
    frame: { x: 24, y: 520, width: 342, height: 120 },
    style: {
      fills: [{ color: COLORS.glass }],
      borders: [{ color: 'rgba(255, 255, 255, 0.2)', thickness: 1 }],
      borderRadius: 16,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Features Title',
    text: 'מאפייני הכלי',
    frame: { x: 48, y: 540, width: 294, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 18,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Feature items
  const features = [
    { label: 'מחיר', value: '$10-30/month' },
    { label: 'מהירות', value: 'Fast (30-60 sec)' },
  ];

  features.forEach((feature, idx) => {
    const featureY = 576 + idx * 28;
    
    new Text({
      name: `Feature Label ${idx + 1}`,
      text: feature.label,
      frame: { x: 48, y: featureY, width: 100, height: 20 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 13,
      },
      parent: artboard,
    });

    new Text({
      name: `Feature Value ${idx + 1}`,
      text: feature.value,
      frame: { x: 160, y: featureY, width: 180, height: 20 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 13,
        fontWeight: 500,
      },
      parent: artboard,
    });
  });

  // Bottom CTA Bar (Fixed)
  new Shape({
    name: 'CTA Bar',
    frame: { x: 0, y: 1300, width: 390, height: 100 },
    style: {
      fills: [{ color: COLORS.ctaBg }],
      borders: [{ color: 'rgba(255, 255, 255, 0.2)', thickness: 1, position: Style.BorderPosition.Inside }],
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(0, 0, 0, 0.15)',
        blur: 32,
        y: -4,
      }],
    },
    parent: artboard,
  });

  // Use Tool Button
  new Shape({
    name: 'Use Tool Button',
    frame: { x: 24, y: 1320, width: 260, height: 56 },
    style: {
      fills: [{ color: COLORS.buttonPrimary }],
      borderRadius: 12,
      shadows: [{
        color: 'rgba(0, 0, 0, 0.2)',
        blur: 16,
        y: 8,
      }],
    },
    parent: artboard,
  });

  new Text({
    name: 'CTA Text',
    text: 'השתמש בכלי',
    frame: { x: 24, y: 1336, width: 260, height: 24 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 16,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Favorite Button
  new Shape({
    name: 'Favorite Button',
    frame: { x: 296, y: 1320, width: 56, height: 56 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
      borders: [{ color: 'rgba(255, 255, 255, 0.3)', thickness: 1 }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Favorite Icon',
    text: '⭐',
    frame: { x: 312, y: 1336, width: 24, height: 24 },
    style: {
      fontSize: 20,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  sketch.UI.message('✅ Tool Page created successfully!');
}

createToolPage();

