// ================================================================================
// UNIFAI - HOME PAGE
// Sketch JavaScript API Script
// Wolt-style Dynamic Home with Filters & Tool Cards
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  bg: '#f6f7fb',
  glass: 'rgba(255, 255, 255, 0.4)',
  glassBorder: 'rgba(255, 255, 255, 0.2)',
  headerBg: 'rgba(255, 255, 255, 0.6)',
  buttonPrimary: '#111827',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  cardBg: 'rgba(255, 255, 255, 0.4)',
  tagBg: 'rgba(255, 255, 255, 0.6)',
};

function createHomePage() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '03 - Home Page',
    frame: { x: 840, y: 0, width: 390, height: 1200 },
    parent: page,
  });

  // Background
  new Shape({
    name: 'Background',
    frame: { x: 0, y: 0, width: 390, height: 1200 },
    style: {
      fills: [{
        color: COLORS.bg,
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

  // Header (Sticky)
  new Shape({
    name: 'Header Background',
    frame: { x: 0, y: 0, width: 390, height: 72 },
    style: {
      fills: [{ color: COLORS.headerBg }],
      borders: [{ color: COLORS.glassBorder, thickness: 1, position: Style.BorderPosition.Inside }],
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(0, 0, 0, 0.05)',
        blur: 8,
        y: 2,
      }],
    },
    parent: artboard,
  });

  // Logo
  new Shape({
    name: 'Logo',
    frame: { x: 24, y: 20, width: 40, height: 40 },
    style: {
      fills: [{ color: COLORS.glass }],
      borders: [{ color: COLORS.glassBorder, thickness: 1 }],
      borderRadius: 12,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Logo Text',
    text: 'U',
    frame: { x: 36, y: 28, width: 16, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 18,
      fontWeight: 700,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  new Text({
    name: 'App Name',
    text: 'UnifAI',
    frame: { x: 72, y: 30, width: 80, height: 20 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Login Button
  new Shape({
    name: 'Login Button',
    frame: { x: 270, y: 24, width: 96, height: 32 },
    style: {
      fills: [{ color: COLORS.buttonPrimary }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Login Text',
    text: 'התחברות',
    frame: { x: 270, y: 30, width: 96, height: 20 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 13,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Filters Bar
  new Shape({
    name: 'Filters Bar',
    frame: { x: 24, y: 96, width: 342, height: 72 },
    style: {
      fills: [{ color: COLORS.glass }],
      borders: [{ color: COLORS.glassBorder, thickness: 1 }],
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

  new Shape({
    name: 'Filter Button',
    frame: { x: 36, y: 108, width: 100, height: 48 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
      borders: [{ color: COLORS.glassBorder, thickness: 1 }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Filter Text',
    text: '🔍 פילטרים',
    frame: { x: 36, y: 120, width: 100, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 14,
      fontWeight: 500,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Section Title
  new Text({
    name: 'Section Title',
    text: 'מומלץ עבורך',
    frame: { x: 24, y: 192, width: 200, height: 28 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Tool Cards (Grid 2x2)
  const cardWidth = 165;
  const cardHeight = 180;
  const cardGap = 12;
  const cardsY = 236;

  const toolCards = [
    { icon: '🎨', name: 'Midjourney', category: 'Design', rating: '4.8' },
    { icon: '🤖', name: 'ChatGPT', category: 'AI Assistant', rating: '4.9' },
    { icon: '🎬', name: 'Runway', category: 'Video', rating: '4.7' },
    { icon: '🧠', name: 'Claude', category: 'AI Assistant', rating: '4.8' },
  ];

  toolCards.forEach((tool, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const cardX = 24 + col * (cardWidth + cardGap);
    const cardY = cardsY + row * (cardHeight + cardGap);

    // Card Background
    new Shape({
      name: `Tool Card ${idx + 1}`,
      frame: { x: cardX, y: cardY, width: cardWidth, height: cardHeight },
      style: {
        fills: [{ color: COLORS.cardBg }],
        borders: [{ color: COLORS.glassBorder, thickness: 1 }],
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
      name: `Icon ${idx + 1}`,
      frame: { x: cardX + 16, y: cardY + 16, width: 64, height: 64 },
      style: {
        fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
        borderRadius: 12,
      },
      parent: artboard,
    });

    new Text({
      name: `Icon Emoji ${idx + 1}`,
      text: tool.icon,
      frame: { x: cardX + 32, y: cardY + 28, width: 32, height: 40 },
      style: {
        fontSize: 36,
        alignment: Text.Alignment.center,
      },
      parent: artboard,
    });

    // Tool Name
    new Text({
      name: `Tool Name ${idx + 1}`,
      text: tool.name,
      frame: { x: cardX + 16, y: cardY + 92, width: cardWidth - 32, height: 24 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 16,
        fontWeight: 600,
      },
      parent: artboard,
    });

    // Category
    new Text({
      name: `Category ${idx + 1}`,
      text: tool.category,
      frame: { x: cardX + 16, y: cardY + 116, width: cardWidth - 32, height: 18 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 12,
      },
      parent: artboard,
    });

    // Rating
    new Text({
      name: `Rating ${idx + 1}`,
      text: `⭐ ${tool.rating}`,
      frame: { x: cardX + 16, y: cardY + 140, width: 60, height: 20 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 13,
        fontWeight: 500,
      },
      parent: artboard,
    });

    // Tags
    new Shape({
      name: `Tag ${idx + 1}`,
      frame: { x: cardX + 16, y: cardY + 146, width: 40, height: 20 },
      style: {
        fills: [{ color: COLORS.tagBg }],
        borders: [{ color: COLORS.glassBorder, thickness: 1 }],
        borderRadius: 6,
      },
      parent: artboard,
    });
  });

  sketch.UI.message('✅ Home Page created successfully!');
}

createHomePage();

