// ================================================================================
// UNIFAI - SAVED PROMPTS SLIDER
// Sketch JavaScript API Script
// Horizontal scrolling slider for saved prompts
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  bg: '#f6f7fb',
  glass: 'rgba(255, 255, 255, 0.4)',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  cardBg: 'rgba(255, 255, 255, 0.4)',
  addCardBorder: 'rgba(209, 213, 219, 0.6)',
  addCardBg: 'rgba(255, 255, 255, 0.2)',
};

function createSavedPromptsSlider() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '10 - Saved Prompts Slider',
    frame: { x: 1680, y: 880, width: 800, height: 220 },
    parent: page,
  });

  // Background
  new Shape({
    name: 'Background',
    frame: { x: 0, y: 0, width: 800, height: 220 },
    style: {
      fills: [{ color: COLORS.bg }],
    },
    parent: artboard,
  });

  // Section Header
  new Text({
    name: 'Section Title',
    text: 'הפרומפטים השמורים שלך ל-Midjourney',
    frame: { x: 24, y: 16, width: 400, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 16,
      fontWeight: 600,
    },
    parent: artboard,
  });

  new Text({
    name: 'Count Badge',
    text: '4 saved',
    frame: { x: 430, y: 18, width: 80, height: 20 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 11,
    },
    parent: artboard,
  });

  // Prompt Cards (Horizontal Slider)
  const cardWidth = 288;
  const cardHeight = 104;
  const cardY = 56;
  const cardSpacing = 12;

  const prompts = [
    { icon: '🌆', text: 'Cyberpunk cityscape at golden hour...', time: '2 days ago' },
    { icon: '🏔️', text: 'Mountain landscape with aurora...', time: '1 week ago' },
    { icon: '⚔️', text: 'Futuristic warrior portrait...', time: '3 days ago' },
  ];

  prompts.forEach((prompt, idx) => {
    const x = 24 + idx * (cardWidth + cardSpacing);

    // Card Background
    new Shape({
      name: `Prompt Card ${idx + 1}`,
      frame: { x, y: cardY, width: cardWidth, height: cardHeight },
      style: {
        fills: [{ color: COLORS.cardBg }],
        borders: [{ color: 'rgba(255, 255, 255, 0.2)', thickness: 1 }],
        borderRadius: 12,
        blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
        shadows: [{
          color: 'rgba(0, 0, 0, 0.08)',
          blur: 16,
          y: 4,
        }],
      },
      parent: artboard,
    });

    // Preview Icon
    new Shape({
      name: `Icon ${idx + 1}`,
      frame: { x: x + 16, y: cardY + 16, width: 48, height: 48 },
      style: {
        fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
        borderRadius: 8,
      },
      parent: artboard,
    });

    new Text({
      name: `Icon Emoji ${idx + 1}`,
      text: prompt.icon,
      frame: { x: x + 24, y: cardY + 20, width: 32, height: 40 },
      style: {
        fontSize: 28,
        alignment: Text.Alignment.center,
      },
      parent: artboard,
    });

    // Prompt Text
    new Text({
      name: `Prompt Text ${idx + 1}`,
      text: prompt.text,
      frame: { x: x + 76, y: cardY + 20, width: 190, height: 32 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 13,
        lineHeight: 18,
      },
      parent: artboard,
    });

    // Metadata
    new Text({
      name: `Time ${idx + 1}`,
      text: prompt.time,
      frame: { x: x + 76, y: cardY + 56, width: 100, height: 16 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 11,
      },
      parent: artboard,
    });

    // Use Button
    new Text({
      name: `Use Button ${idx + 1}`,
      text: 'Use →',
      frame: { x: x + 220, y: cardY + 78, width: 52, height: 16 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 11,
        fontWeight: 500,
        alignment: Text.Alignment.right,
      },
      parent: artboard,
    });
  });

  // Add New Prompt Card (Dashed Border)
  const addCardX = 24 + 3 * (cardWidth + cardSpacing);

  new Shape({
    name: 'Add New Card',
    frame: { x: addCardX, y: cardY, width: cardWidth, height: cardHeight },
    style: {
      fills: [{ color: COLORS.addCardBg }],
      borders: [{
        color: COLORS.addCardBorder,
        thickness: 2,
        position: Style.BorderPosition.Inside,
      }],
      borderRadius: 12,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  // Plus Icon
  new Shape({
    name: 'Plus Icon',
    frame: { x: addCardX + (cardWidth - 48) / 2, y: cardY + 20, width: 48, height: 48 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
      borderRadius: 8,
    },
    parent: artboard,
  });

  new Text({
    name: 'Plus Symbol',
    text: '➕',
    frame: { x: addCardX + (cardWidth - 32) / 2, y: cardY + 24, width: 32, height: 40 },
    style: {
      fontSize: 28,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  new Text({
    name: 'Add Title',
    text: 'Create New',
    frame: { x: addCardX, y: cardY + 76, width: cardWidth, height: 16 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 13,
      fontWeight: 500,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  new Text({
    name: 'Add Subtitle',
    text: 'Save your next prompt',
    frame: { x: addCardX, y: cardY + 92, width: cardWidth, height: 14 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 11,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  sketch.UI.message('✅ Saved Prompts Slider created successfully!');
}

createSavedPromptsSlider();

