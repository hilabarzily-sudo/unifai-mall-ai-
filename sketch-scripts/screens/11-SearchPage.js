// ================================================================================
// UNIFAI - SEARCH PAGE
// Sketch JavaScript API Script
// Universal search with glassmorphism input
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  bg: '#f6f7fb',
  glass: 'rgba(255, 255, 255, 0.4)',
  headerBg: 'rgba(255, 255, 255, 0.6)',
  inputBg: 'rgba(255, 255, 255, 0.8)',
  inputBorder: 'rgba(255, 255, 255, 0.4)',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  placeholderColor: '#9CA3AF',
  cardBg: 'rgba(255, 255, 255, 0.4)',
  tagBg: 'rgba(255, 255, 255, 0.6)',
};

function createSearchPage() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '11 - Search Page',
    frame: { x: 0, y: 1760, width: 390, height: 1000 },
    parent: page,
  });

  // Background
  new Shape({
    name: 'Background',
    frame: { x: 0, y: 0, width: 390, height: 1000 },
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

  // Header with Search
  new Shape({
    name: 'Header',
    frame: { x: 0, y: 0, width: 390, height: 88 },
    style: {
      fills: [{ color: COLORS.headerBg }],
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      borders: [{ color: 'rgba(255, 255, 255, 0.2)', thickness: 1, position: Style.BorderPosition.Inside }],
      shadows: [{
        color: 'rgba(0, 0, 0, 0.05)',
        blur: 8,
        y: 2,
      }],
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

  // Search Input
  new Shape({
    name: 'Search Input',
    frame: { x: 76, y: 24, width: 290, height: 48 },
    style: {
      fills: [{ color: COLORS.inputBg }],
      borders: [{ color: COLORS.inputBorder, thickness: 1 }],
      borderRadius: 16,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(0, 0, 0, 0.08)',
        blur: 16,
        y: 4,
      }],
    },
    parent: artboard,
  });

  // Search Icon
  new Text({
    name: 'Search Icon',
    text: '🔍',
    frame: { x: 88, y: 32, width: 24, height: 32 },
    style: {
      fontSize: 18,
    },
    parent: artboard,
  });

  // Placeholder Text
  new Text({
    name: 'Placeholder',
    text: 'חפש כלי AI, קטגוריות, תגיות...',
    frame: { x: 122, y: 36, width: 230, height: 20 },
    style: {
      textColor: COLORS.placeholderColor,
      fontSize: 15,
    },
    parent: artboard,
  });

  // Popular Searches Section
  new Text({
    name: 'Section Title',
    text: 'חיפושים פופולריים',
    frame: { x: 24, y: 112, width: 200, height: 24 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 18,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Popular Search Pills
  const pillsY = 152;
  const popularSearches = ['יצירת תמונות', 'ChatGPT', 'וידאו AI', 'כתיבה', 'שיבוט קול'];
  
  let currentX = 24;
  let currentY = pillsY;

  popularSearches.forEach((search, idx) => {
    const pillWidth = 100 + (search.length * 4);
    
    if (currentX + pillWidth > 366) {
      currentX = 24;
      currentY += 48;
    }

    new Shape({
      name: `Popular Pill ${idx + 1}`,
      frame: { x: currentX, y: currentY, width: pillWidth, height: 44 },
      style: {
        fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
        borders: [{ color: 'rgba(255, 255, 255, 0.3)', thickness: 1 }],
        borderRadius: 12,
        blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      },
      parent: artboard,
    });

    new Text({
      name: `Popular Text ${idx + 1}`,
      text: `🔍 ${search}`,
      frame: { x: currentX, y: currentY + 12, width: pillWidth, height: 20 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 13,
        fontWeight: 500,
        alignment: Text.Alignment.center,
      },
      parent: artboard,
    });

    currentX += pillWidth + 12;
  });

  // Search Results Section
  new Text({
    name: 'Results Title',
    text: '3 תוצאות עבור "midjourney"',
    frame: { x: 24, y: 320, width: 300, height: 20 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
    },
    parent: artboard,
  });

  // Result Cards
  const resultsY = 360;

  const results = [
    { icon: '🎨', name: 'Midjourney', category: 'Design', tags: ['Paid', 'Pro'] },
    { icon: '🖼️', name: 'DALL-E', category: 'Design', tags: ['Free', 'API'] },
    { icon: '🌅', name: 'Leonardo AI', category: 'Design', tags: ['Freemium'] },
  ];

  results.forEach((result, idx) => {
    const cardY = resultsY + idx * 116;

    // Card
    new Shape({
      name: `Result Card ${idx + 1}`,
      frame: { x: 24, y: cardY, width: 342, height: 104 },
      style: {
        fills: [{ color: COLORS.cardBg }],
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

    // Icon
    new Shape({
      name: `Result Icon ${idx + 1}`,
      frame: { x: 40, y: cardY + 16, width: 64, height: 64 },
      style: {
        fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
        borderRadius: 12,
      },
      parent: artboard,
    });

    new Text({
      name: `Result Emoji ${idx + 1}`,
      text: result.icon,
      frame: { x: 56, y: cardY + 24, width: 32, height: 40 },
      style: {
        fontSize: 36,
        alignment: Text.Alignment.center,
      },
      parent: artboard,
    });

    // Tool Info
    new Text({
      name: `Result Name ${idx + 1}`,
      text: result.name,
      frame: { x: 116, y: cardY + 20, width: 160, height: 20 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 16,
        fontWeight: 600,
      },
      parent: artboard,
    });

    new Text({
      name: `Result Category ${idx + 1}`,
      text: result.category,
      frame: { x: 116, y: cardY + 44, width: 160, height: 16 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 13,
      },
      parent: artboard,
    });

    // Tags
    let tagX = 116;
    result.tags.forEach((tag, tagIdx) => {
      const tagWidth = 48 + (tag.length * 4);

      new Shape({
        name: `Tag ${idx + 1}-${tagIdx + 1}`,
        frame: { x: tagX, y: cardY + 68, width: tagWidth, height: 24 },
        style: {
          fills: [{ color: COLORS.tagBg }],
          borders: [{ color: 'rgba(255, 255, 255, 0.3)', thickness: 1 }],
          borderRadius: 6,
        },
        parent: artboard,
      });

      new Text({
        name: `Tag Text ${idx + 1}-${tagIdx + 1}`,
        text: tag,
        frame: { x: tagX, y: cardY + 72, width: tagWidth, height: 16 },
        style: {
          textColor: COLORS.textPrimary,
          fontSize: 11,
          alignment: Text.Alignment.center,
        },
        parent: artboard,
      });

      tagX += tagWidth + 8;
    });

    // Arrow
    new Text({
      name: `Arrow ${idx + 1}`,
      text: '→',
      frame: { x: 336, y: cardY + 44, width: 20, height: 24 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 18,
      },
      parent: artboard,
    });
  });

  sketch.UI.message('✅ Search Page created successfully!');
}

createSearchPage();

