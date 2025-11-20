// ================================================================================
// UNIFAI - PROMPT REVEAL SHEET (Bottom Sheet)
// Sketch JavaScript API Script
// Sora-style bottom sheet with tabs
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  backdrop: 'rgba(0, 0, 0, 0.3)',
  sheetBg: 'rgba(255, 255, 255, 0.9)',
  handleBar: '#D1D5DB',
  buttonBg: 'rgba(17, 24, 39, 0.1)',
  buttonPrimary: '#111827',
  buttonWhite: 'rgba(255, 255, 255, 0.8)',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  inputBg: 'rgba(243, 244, 246, 0.6)',
  tabActive: '#FFFFFF',
  tabBg: 'rgba(243, 244, 246, 0.8)',
};

function createPromptRevealSheet() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '07 - Prompt Reveal Sheet',
    frame: { x: 420, y: 880, width: 390, height: 844 },
    parent: page,
  });

  // Backdrop
  new Shape({
    name: 'Backdrop',
    frame: { x: 0, y: 0, width: 390, height: 844 },
    style: {
      fills: [{ color: COLORS.backdrop }],
      blur: { enabled: true, radius: 8, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  // Sheet Container
  const sheetHeight = 600;
  const sheetY = 844 - sheetHeight;

  new Shape({
    name: 'Sheet Container',
    frame: { x: 0, y: sheetY, width: 390, height: sheetHeight },
    style: {
      fills: [{ color: COLORS.sheetBg }],
      borderRadius: 40,
      blur: { enabled: true, radius: 40, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(0, 0, 0, 0.3)',
        blur: 64,
        y: -8,
      }],
    },
    parent: artboard,
  });

  // Handle Bar
  new Shape({
    name: 'Handle Bar',
    frame: { x: (390 - 48) / 2, y: sheetY + 16, width: 48, height: 6 },
    style: {
      fills: [{ color: COLORS.handleBar }],
      borderRadius: 3,
    },
    parent: artboard,
  });

  // Header
  new Text({
    name: 'Sheet Title',
    text: 'Prompt Details',
    frame: { x: 32, y: sheetY + 40, width: 250, height: 32 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 24,
      fontWeight: 600,
    },
    parent: artboard,
  });

  new Text({
    name: 'Sheet Subtitle',
    text: 'Midjourney • 2024-01-15',
    frame: { x: 32, y: sheetY + 72, width: 250, height: 20 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
    },
    parent: artboard,
  });

  // Close Button
  new Shape({
    name: 'Close Button',
    frame: { x: 330, y: sheetY + 48, width: 40, height: 40 },
    style: {
      fills: [{ color: COLORS.buttonBg }],
      borderRadius: 20,
    },
    parent: artboard,
  });

  new Text({
    name: 'Close Icon',
    text: '✕',
    frame: { x: 338, y: sheetY + 56, width: 24, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 18,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Tabs Container
  const tabsY = sheetY + 116;

  new Shape({
    name: 'Tabs Background',
    frame: { x: 32, y: tabsY, width: 326, height: 52 },
    style: {
      fills: [{ color: COLORS.tabBg }],
      borderRadius: 16,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  // Active Tab
  new Shape({
    name: 'Active Tab',
    frame: { x: 38, y: tabsY + 6, width: 157, height: 40 },
    style: {
      fills: [{ color: COLORS.tabActive }],
      borderRadius: 12,
      shadows: [{
        color: 'rgba(0, 0, 0, 0.08)',
        blur: 8,
        y: 2,
      }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Tab 1 Text',
    text: '📝 Prompt',
    frame: { x: 38, y: tabsY + 16, width: 157, height: 20 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 13,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  new Text({
    name: 'Tab 2 Text',
    text: '⚙️ Parameters',
    frame: { x: 195, y: tabsY + 16, width: 157, height: 20 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
      fontWeight: 500,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Prompt Text Box
  const promptBoxY = tabsY + 72;

  new Shape({
    name: 'Prompt Box',
    frame: { x: 32, y: promptBoxY, width: 326, height: 140 },
    style: {
      fills: [{ color: COLORS.inputBg }],
      borderRadius: 16,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Prompt Text',
    text: 'A cyberpunk cityscape at golden hour\nwith neon lights reflecting off wet streets,\nflying cars in the distance, volumetric fog,\nhighly detailed, 8k resolution',
    frame: { x: 52, y: promptBoxY + 20, width: 286, height: 100 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 14,
      lineHeight: 22,
    },
    parent: artboard,
  });

  // Stats
  new Text({
    name: 'Stats',
    text: '28 words  •  178 characters',
    frame: { x: 32, y: promptBoxY + 152, width: 200, height: 16 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 11,
    },
    parent: artboard,
  });

  // Action Buttons
  const buttonsY = promptBoxY + 192;
  const buttonWidth = 102;

  // Copy Button
  new Shape({
    name: 'Copy Button',
    frame: { x: 32, y: buttonsY, width: buttonWidth, height: 56 },
    style: {
      fills: [{ color: COLORS.buttonWhite }],
      borders: [{ color: 'rgba(229, 231, 235, 0.5)', thickness: 1 }],
      borderRadius: 12,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Copy Text',
    text: '📋 Copy',
    frame: { x: 32, y: buttonsY + 18, width: buttonWidth, height: 20 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 13,
      fontWeight: 500,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Try in Tool Button
  new Shape({
    name: 'Try Button',
    frame: { x: 256, y: buttonsY, width: buttonWidth, height: 56 },
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
    name: 'Try Text',
    text: '→ Try in Tool',
    frame: { x: 256, y: buttonsY + 18, width: buttonWidth, height: 20 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 13,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Info Box
  const infoY = buttonsY + 80;

  new Shape({
    name: 'Info Box',
    frame: { x: 32, y: infoY, width: 326, height: 68 },
    style: {
      fills: [{ color: 'rgba(239, 246, 255, 0.6)' }],
      borders: [{ color: 'rgba(191, 219, 254, 0.4)', thickness: 1 }],
      borderRadius: 12,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Info Text',
    text: '💡 Tip: Copy this prompt and modify it in\nthe tool to create variations of this output.',
    frame: { x: 48, y: infoY + 16, width: 294, height: 36 },
    style: {
      textColor: '#1E40AF',
      fontSize: 11,
      lineHeight: 18,
    },
    parent: artboard,
  });

  sketch.UI.message('✅ Prompt Reveal Sheet created successfully!');
}

createPromptRevealSheet();

