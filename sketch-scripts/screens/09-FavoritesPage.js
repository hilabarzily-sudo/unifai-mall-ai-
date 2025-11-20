// ================================================================================
// UNIFAI - FAVORITES PAGE
// Sketch JavaScript API Script
// Saved tools, prompts, and examples
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  bg: '#f6f7fb',
  glass: 'rgba(255, 255, 255, 0.4)',
  headerBg: 'rgba(255, 255, 255, 0.6)',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  cardBg: 'rgba(255, 255, 255, 0.4)',
  buttonPrimary: '#111827',
};

function createFavoritesPage() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '09 - Favorites Page',
    frame: { x: 1260, y: 880, width: 390, height: 1200 },
    parent: page,
  });

  // Background
  new Shape({
    name: 'Background',
    frame: { x: 0, y: 0, width: 390, height: 1200 },
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

  new Text({
    name: 'Header Title',
    text: 'המועדפים שלי',
    frame: { x: 24, y: 32, width: 200, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Section: Recently Saved
  new Text({
    name: 'Section Title 1',
    text: 'נשמר לאחרונה',
    frame: { x: 24, y: 96, width: 200, height: 28 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Horizontal Slider Cards
  const sliderY = 136;
  const cardWidth = 288;
  const cardHeight = 92;

  for (let i = 0; i < 2; i++) {
    const cardX = 24 + i * (cardWidth + 12);

    new Shape({
      name: `Recent Card ${i + 1}`,
      frame: { x: cardX, y: sliderY, width: cardWidth, height: cardHeight },
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
      name: `Recent Icon ${i + 1}`,
      frame: { x: cardX + 16, y: sliderY + 14, width: 56, height: 56 },
      style: {
        fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
        borderRadius: 12,
      },
      parent: artboard,
    });

    new Text({
      name: `Recent Emoji ${i + 1}`,
      text: i === 0 ? '🎨' : '🤖',
      frame: { x: cardX + 28, y: sliderY + 22, width: 32, height: 40 },
      style: {
        fontSize: 32,
        alignment: Text.Alignment.center,
      },
      parent: artboard,
    });

    // Tool Info
    new Text({
      name: `Recent Name ${i + 1}`,
      text: i === 0 ? 'Midjourney' : 'ChatGPT',
      frame: { x: cardX + 84, y: sliderY + 20, width: 180, height: 20 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 16,
        fontWeight: 600,
      },
      parent: artboard,
    });

    new Text({
      name: `Recent Category ${i + 1}`,
      text: i === 0 ? 'Design' : 'AI Assistant',
      frame: { x: cardX + 84, y: sliderY + 44, width: 180, height: 16 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 12,
      },
      parent: artboard,
    });

    new Text({
      name: `Recent Time ${i + 1}`,
      text: `נפתח לאחרונה: ${i === 0 ? '2 days ago' : '5 hours ago'}`,
      frame: { x: cardX + 84, y: sliderY + 64, width: 180, height: 14 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 11,
      },
      parent: artboard,
    });
  }

  // Section: Saved Tools
  new Text({
    name: 'Section Title 2',
    text: 'כלים שמורים',
    frame: { x: 24, y: 256, width: 200, height: 28 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Tool Cards (2 columns)
  const toolsY = 296;
  const toolCardWidth = 171;
  const toolCardHeight = 108;

  const tools = [
    { icon: '🎨', name: 'Midjourney', category: 'Design' },
    { icon: '🤖', name: 'ChatGPT', category: 'AI Assistant' },
    { icon: '🎬', name: 'Runway', category: 'Video' },
    { icon: '🧠', name: 'Claude', category: 'AI Assistant' },
  ];

  tools.forEach((tool, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 24 + col * (toolCardWidth + 12);
    const y = toolsY + row * (toolCardHeight + 12);

    new Shape({
      name: `Tool Card ${idx + 1}`,
      frame: { x, y, width: toolCardWidth, height: toolCardHeight },
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
      name: `Tool Icon ${idx + 1}`,
      frame: { x: x + 16, y: y + 16, width: 64, height: 64 },
      style: {
        fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
        borderRadius: 12,
      },
      parent: artboard,
    });

    new Text({
      name: `Tool Emoji ${idx + 1}`,
      text: tool.icon,
      frame: { x: x + 32, y: y + 24, width: 32, height: 40 },
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
      frame: { x: x + 88, y: y + 24, width: toolCardWidth - 100, height: 20 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 14,
        fontWeight: 600,
      },
      parent: artboard,
    });

    new Text({
      name: `Tool Category ${idx + 1}`,
      text: tool.category,
      frame: { x: x + 88, y: y + 46, width: toolCardWidth - 100, height: 16 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 11,
      },
      parent: artboard,
    });
  });

  // Section: Saved Prompts
  new Text({
    name: 'Section Title 3',
    text: 'פרומפטים שמורים',
    frame: { x: 24, y: 552, width: 200, height: 28 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Prompt Cards
  const promptsY = 592;

  for (let i = 0; i < 3; i++) {
    const promptY = promptsY + i * 88;

    new Shape({
      name: `Prompt Card ${i + 1}`,
      frame: { x: 24, y: promptY, width: 342, height: 76 },
      style: {
        fills: [{ color: COLORS.cardBg }],
        borders: [{ color: 'rgba(255, 255, 255, 0.2)', thickness: 1 }],
        borderRadius: 16,
        blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      },
      parent: artboard,
    });

    new Text({
      name: `Prompt Text ${i + 1}`,
      text: i === 0 ? 'Cyberpunk cityscape at golden hour...' : i === 1 ? 'Write a blog post about AI trends...' : 'Mountain landscape with aurora...',
      frame: { x: 40, y: promptY + 16, width: 260, height: 20 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 13,
      },
      parent: artboard,
    });

    new Text({
      name: `Prompt Meta ${i + 1}`,
      text: `${i === 0 ? 'Midjourney' : i === 1 ? 'ChatGPT' : 'DALL-E'}  •  ${i === 0 ? 'Yesterday' : i === 1 ? '2 days ago' : '1 week ago'}`,
      frame: { x: 40, y: promptY + 40, width: 200, height: 16 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 11,
      },
      parent: artboard,
    });

    // Copy Button
    new Shape({
      name: `Copy Button ${i + 1}`,
      frame: { x: 310, y: promptY + 22, width: 40, height: 32 },
      style: {
        fills: [{ color: 'rgba(255, 255, 255, 0.8)' }],
        borderRadius: 8,
      },
      parent: artboard,
    });

    new Text({
      name: `Copy Icon ${i + 1}`,
      text: '📋',
      frame: { x: 320, y: promptY + 28, width: 20, height: 20 },
      style: {
        fontSize: 16,
        alignment: Text.Alignment.center,
      },
      parent: artboard,
    });
  }

  sketch.UI.message('✅ Favorites Page created successfully!');
}

createFavoritesPage();

