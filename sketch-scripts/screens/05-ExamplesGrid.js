// ================================================================================
// UNIFAI - EXAMPLES GRID (Pinterest Style)
// Sketch JavaScript API Script
// Asymmetric masonry layout for AI-generated examples
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  bg: '#f6f7fb',
  glass: 'rgba(255, 255, 255, 0.4)',
  headerBg: 'rgba(255, 255, 255, 0.6)',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  cardBg: '#E5E7EB',
};

function createExamplesGrid() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '05 - Examples Grid',
    frame: { x: 1680, y: 0, width: 390, height: 1000 },
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
    text: 'גלריית דוגמאות',
    frame: { x: 24, y: 28, width: 200, height: 28 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
    },
    parent: artboard,
  });

  new Text({
    name: 'Header Subtitle',
    text: 'תוצרים מכלי AI שונים',
    frame: { x: 24, y: 52, width: 200, height: 18 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
    },
    parent: artboard,
  });

  // Pinterest-style Grid (4 columns, asymmetric)
  const colWidth = 85;
  const gap = 12;
  const startX = 24;
  const startY = 96;

  const exampleCards = [
    // Column 1
    { col: 0, row: 0, height: 200, icon: '🖼️', prompt: 'Cyberpunk city' },
    { col: 0, row: 1, height: 160, icon: '🌅', prompt: 'Mountain vista' },
    // Column 2
    { col: 1, row: 0, height: 160, icon: '🎭', prompt: 'Portrait art' },
    { col: 1, row: 1, height: 200, icon: '🏛️', prompt: 'Ancient temple' },
    // Column 3
    { col: 2, row: 0, height: 180, icon: '🚀', prompt: 'Space station' },
    { col: 2, row: 1, height: 180, icon: '🦄', prompt: 'Magic creature' },
    // Column 4
    { col: 3, row: 0, height: 200, icon: '🌊', prompt: 'Underwater' },
    { col: 3, row: 1, height: 160, icon: '🎨', prompt: 'Abstract art' },
  ];

  exampleCards.forEach((card, idx) => {
    const x = startX + card.col * (colWidth + gap);
    // Calculate y based on previous cards in same column
    const prevCards = exampleCards.filter((c, i) => i < idx && c.col === card.col);
    const y = startY + prevCards.reduce((sum, c) => sum + c.height + gap, 0);

    // Card Background
    new Shape({
      name: `Example Card ${idx + 1}`,
      frame: { x, y, width: colWidth, height: card.height },
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

    // Image Area
    const imageHeight = card.height - 48;
    new Shape({
      name: `Image ${idx + 1}`,
      frame: { x, y, width: colWidth, height: imageHeight },
      style: {
        fills: [{
          fillType: Style.FillType.Gradient,
          gradient: {
            gradientType: Style.GradientType.Linear,
            from: { x: 0, y: 0 },
            to: { x: 1, y: 1 },
            stops: [
              { position: 0, color: '#E5E7EB' },
              { position: 1, color: '#D1D5DB' },
            ],
          },
        }],
        borderRadius: 16,
      },
      parent: artboard,
    });

    // Icon
    new Text({
      name: `Icon ${idx + 1}`,
      text: card.icon,
      frame: { x: x + (colWidth - 40) / 2, y: y + (imageHeight - 40) / 2, width: 40, height: 40 },
      style: {
        fontSize: 32,
        alignment: Text.Alignment.center,
      },
      parent: artboard,
    });

    // Prompt Text
    new Text({
      name: `Prompt ${idx + 1}`,
      text: card.prompt,
      frame: { x: x + 8, y: y + imageHeight + 8, width: colWidth - 16, height: 32 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 10,
        lineHeight: 14,
      },
      parent: artboard,
    });
  });

  sketch.UI.message('✅ Examples Grid created successfully!');
}

createExamplesGrid();

