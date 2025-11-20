// ================================================================================
// UNIFAI - TOOL WEBVIEW
// Sketch JavaScript API Script
// Simple info screen showing tool is opening
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  backdrop: 'rgba(0, 0, 0, 0.4)',
  modalBg: 'rgba(255, 255, 255, 0.95)',
  buttonPrimary: '#111827',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  infoBg: 'rgba(239, 246, 255, 0.8)',
  infoBorder: 'rgba(191, 219, 254, 0.4)',
};

function createToolWebView() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '08 - Tool WebView',
    frame: { x: 840, y: 880, width: 390, height: 844 },
    parent: page,
  });

  // Backdrop
  new Shape({
    name: 'Backdrop',
    frame: { x: 0, y: 0, width: 390, height: 844 },
    style: {
      fills: [{ color: COLORS.backdrop }],
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  // Modal Container
  const modalWidth = 320;
  const modalHeight = 380;
  const modalX = (390 - modalWidth) / 2;
  const modalY = (844 - modalHeight) / 2;

  new Shape({
    name: 'Modal Container',
    frame: { x: modalX, y: modalY, width: modalWidth, height: modalHeight },
    style: {
      fills: [{ color: COLORS.modalBg }],
      borders: [{ color: 'rgba(255, 255, 255, 0.4)', thickness: 1 }],
      borderRadius: 24,
      blur: { enabled: true, radius: 40, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(0, 0, 0, 0.3)',
        blur: 64,
        y: 24,
      }],
    },
    parent: artboard,
  });

  // Tool Icon Container
  const iconSize = 80;
  const iconX = modalX + (modalWidth - iconSize) / 2;
  const iconY = modalY + 40;

  new Shape({
    name: 'Icon Container',
    frame: { x: iconX, y: iconY, width: iconSize, height: iconSize },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.8)' }],
      borders: [{ color: 'rgba(229, 231, 235, 1)', thickness: 1 }],
      borderRadius: 16,
      shadows: [{
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 16,
        y: 4,
      }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Tool Icon',
    text: '🎨',
    frame: { x: iconX + 8, y: iconY + 8, width: iconSize - 16, height: iconSize - 16 },
    style: {
      fontSize: 48,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Tool Name
  new Text({
    name: 'Tool Name',
    text: 'Midjourney',
    frame: { x: modalX, y: iconY + iconSize + 20, width: modalWidth, height: 28 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Status Message
  new Text({
    name: 'Status Message',
    text: 'פותח בטאב חדש...',
    frame: { x: modalX, y: iconY + iconSize + 56, width: modalWidth, height: 20 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Preloaded Prompt Info Box
  const infoBoxY = iconY + iconSize + 96;

  new Shape({
    name: 'Info Box',
    frame: { x: modalX + 16, y: infoBoxY, width: modalWidth - 32, height: 100 },
    style: {
      fills: [{ color: COLORS.infoBg }],
      borders: [{ color: COLORS.infoBorder, thickness: 1 }],
      borderRadius: 12,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Info Label',
    text: '📋 הפרומפט שלך הועתק:',
    frame: { x: modalX + 24, y: infoBoxY + 12, width: modalWidth - 48, height: 16 },
    style: {
      textColor: '#1E40AF',
      fontSize: 11,
      alignment: Text.Alignment.right,
    },
    parent: artboard,
  });

  new Text({
    name: 'Info Prompt',
    text: '"Cyberpunk cityscape at\ngolden hour with neon lights..."',
    frame: { x: modalX + 24, y: infoBoxY + 34, width: modalWidth - 48, height: 36 },
    style: {
      textColor: '#1E3A8A',
      fontSize: 12,
      lineHeight: 18,
      alignment: Text.Alignment.right,
      fontStyle: 'italic',
    },
    parent: artboard,
  });

  new Text({
    name: 'Copy Again',
    text: 'לחץ כאן להעתיק שוב',
    frame: { x: modalX + 24, y: infoBoxY + 76, width: modalWidth - 48, height: 16 },
    style: {
      textColor: '#1D4ED8',
      fontSize: 11,
      fontWeight: 500,
      alignment: Text.Alignment.right,
    },
    parent: artboard,
  });

  // Close Button
  const closeButtonY = infoBoxY + 124;

  new Shape({
    name: 'Close Button',
    frame: { x: modalX + 40, y: closeButtonY, width: modalWidth - 80, height: 40 },
    style: {
      fills: [{ color: COLORS.buttonPrimary }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Close Text',
    text: 'סגור',
    frame: { x: modalX + 40, y: closeButtonY + 10, width: modalWidth - 80, height: 20 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 13,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  sketch.UI.message('✅ Tool WebView created successfully!');
}

createToolWebView();

