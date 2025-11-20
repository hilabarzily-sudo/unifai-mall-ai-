// ================================================================================
// UNIFAI - EMPTY STATE
// Sketch JavaScript API Script
// Reusable empty state component for various scenarios
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  bg: '#f6f7fb',
  iconBg: 'rgba(255, 255, 255, 0.4)',
  iconBorder: 'rgba(255, 255, 255, 0.3)',
  buttonPrimary: '#111827',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  suggestionBg: 'rgba(255, 255, 255, 0.6)',
  suggestionBorder: 'rgba(255, 255, 255, 0.3)',
  infoBg: 'rgba(239, 246, 255, 0.6)',
  infoBorder: 'rgba(191, 219, 254, 0.4)',
};

function createEmptyState() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '14 - Empty State',
    frame: { x: 1260, y: 1760, width: 390, height: 600 },
    parent: page,
  });

  // Background
  new Shape({
    name: 'Background',
    frame: { x: 0, y: 0, width: 390, height: 600 },
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

  // Centered Container
  const centerX = 195;
  const centerY = 120;

  // Icon Container
  new Shape({
    name: 'Icon Container',
    frame: { x: centerX - 64, y: centerY, width: 128, height: 128 },
    style: {
      fills: [{ color: COLORS.iconBg }],
      borders: [{ color: COLORS.iconBorder, thickness: 1 }],
      borderRadius: 24,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 24,
        y: 8,
      }],
    },
    parent: artboard,
  });

  // Icon (Search example)
  new Text({
    name: 'Empty Icon',
    text: '🔍',
    frame: { x: centerX - 40, y: centerY + 20, width: 80, height: 88 },
    style: {
      fontSize: 72,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Title
  new Text({
    name: 'Empty Title',
    text: 'לא נמצאו תוצאות',
    frame: { x: 40, y: centerY + 152, width: 310, height: 32 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 24,
      fontWeight: 700,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Description
  new Text({
    name: 'Empty Description',
    text: 'נסה לחפש במילים אחרות או\nעיין בקטגוריות בדף הבית',
    frame: { x: 40, y: centerY + 196, width: 310, height: 48 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 15,
      lineHeight: 24,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Action Button
  new Shape({
    name: 'Action Button',
    frame: { x: centerX - 100, y: centerY + 268, width: 200, height: 52 },
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
    name: 'Action Text',
    text: 'חפש משהו אחר',
    frame: { x: centerX - 100, y: centerY + 282, width: 200, height: 24 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 16,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Suggestions Section
  new Text({
    name: 'Suggestions Title',
    text: 'אולי תרצה לנסות:',
    frame: { x: 40, y: centerY + 348, width: 310, height: 20 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
      fontWeight: 500,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Suggestion Pills
  const pillsY = centerY + 384;
  const suggestions = ['Image Generation', 'ChatGPT', 'Video AI', 'Writing'];
  
  let currentX = 40;

  suggestions.forEach((suggestion, idx) => {
    const pillWidth = 80 + (suggestion.length * 3);
    
    if (idx === 2) {
      currentX = 40; // New row
    }

    const pillY = idx < 2 ? pillsY : pillsY + 44;
    const adjustedX = idx < 2 ? currentX + idx * (pillWidth + 8) : currentX + (idx - 2) * (pillWidth + 8);

    new Shape({
      name: `Suggestion ${idx + 1}`,
      frame: { x: adjustedX, y: pillY, width: pillWidth, height: 36 },
      style: {
        fills: [{ color: COLORS.suggestionBg }],
        borders: [{ color: COLORS.suggestionBorder, thickness: 1 }],
        borderRadius: 12,
        blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      },
      parent: artboard,
    });

    new Text({
      name: `Suggestion Text ${idx + 1}`,
      text: suggestion,
      frame: { x: adjustedX, y: pillY + 8, width: pillWidth, height: 20 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 13,
        fontWeight: 500,
        alignment: Text.Alignment.center,
      },
      parent: artboard,
    });
  });

  // Help Box
  const helpY = pillsY + 100;

  new Shape({
    name: 'Help Box',
    frame: { x: 40, y: helpY, width: 310, height: 68 },
    style: {
      fills: [{ color: COLORS.infoBg }],
      borders: [{ color: COLORS.infoBorder, thickness: 1 }],
      borderRadius: 12,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Help Text',
    text: '💡 עצה: השתמש בחיפוש כדי למצוא\nכלים חדשים, או עיין בקטגוריות בדף הבית',
    frame: { x: 56, y: helpY + 16, width: 278, height: 36 },
    style: {
      textColor: '#1E40AF',
      fontSize: 11,
      lineHeight: 18,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  sketch.UI.message('✅ Empty State created successfully!');
}

createEmptyState();

