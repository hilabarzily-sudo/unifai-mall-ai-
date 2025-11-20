// ================================================================================
// UNIFAI - EXAMPLE VIEWER (Sora Style)
// Sketch JavaScript API Script
// Clean fullscreen viewer with centered output
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  bg: 'rgba(255, 255, 255, 0.95)',
  buttonBg: 'rgba(17, 24, 39, 0.1)',
  buttonPrimary: '#111827',
  buttonWhite: 'rgba(255, 255, 255, 0.6)',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  cardBg: '#E5E7EB',
};

function createExampleViewer() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '06 - Example Viewer',
    frame: { x: 0, y: 880, width: 390, height: 844 },
    parent: page,
  });

  // Background
  new Shape({
    name: 'Background',
    frame: { x: 0, y: 0, width: 390, height: 844 },
    style: {
      fills: [{ color: COLORS.bg }],
      blur: { enabled: true, radius: 48, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  // Top Bar
  const topBarY = 40;

  // Close Button
  new Shape({
    name: 'Close Button',
    frame: { x: 24, y: topBarY, width: 40, height: 40 },
    style: {
      fills: [{ color: COLORS.buttonBg }],
      borderRadius: 20,
    },
    parent: artboard,
  });

  new Text({
    name: 'Close Icon',
    text: '✕',
    frame: { x: 32, y: topBarY + 8, width: 24, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Share Button
  new Shape({
    name: 'Share Button',
    frame: { x: 270, y: topBarY, width: 40, height: 40 },
    style: {
      fills: [{ color: COLORS.buttonBg }],
      borderRadius: 20,
    },
    parent: artboard,
  });

  // Like Button
  new Shape({
    name: 'Like Button',
    frame: { x: 318, y: topBarY, width: 48, height: 40 },
    style: {
      fills: [{ color: COLORS.buttonBg }],
      borderRadius: 20,
    },
    parent: artboard,
  });

  new Text({
    name: 'Like Count',
    text: '♡ 234',
    frame: { x: 320, y: topBarY + 10, width: 44, height: 20 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 13,
      fontWeight: 500,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Main Image Container
  const imageWidth = 342;
  const imageHeight = 192; // 16:9 aspect ratio
  const imageX = (390 - imageWidth) / 2;
  const imageY = 120;

  new Shape({
    name: 'Image Container',
    frame: { x: imageX, y: imageY, width: imageWidth, height: imageHeight },
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
      borderRadius: 24,
      shadows: [{
        color: 'rgba(0, 0, 0, 0.25)',
        blur: 48,
        y: 24,
      }],
    },
    parent: artboard,
  });

  // Large Icon in center
  new Text({
    name: 'Example Icon',
    text: '🖼️',
    frame: { x: imageX + (imageWidth - 100) / 2, y: imageY + (imageHeight - 100) / 2, width: 100, height: 100 },
    style: {
      fontSize: 80,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Floating Badge (on hover)
  new Shape({
    name: 'Tool Badge',
    frame: { x: imageX + 16, y: imageY + 16, width: 140, height: 60 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.8)' }],
      borders: [{ color: 'rgba(255, 255, 255, 0.4)', thickness: 1 }],
      borderRadius: 12,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 16,
        y: 4,
      }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Badge Icon',
    text: '🎨',
    frame: { x: imageX + 24, y: imageY + 24, width: 32, height: 32 },
    style: {
      fontSize: 24,
    },
    parent: artboard,
  });

  new Text({
    name: 'Badge Label',
    text: 'Created with',
    frame: { x: imageX + 60, y: imageY + 22, width: 80, height: 16 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 10,
    },
    parent: artboard,
  });

  new Text({
    name: 'Badge Tool',
    text: 'Midjourney',
    frame: { x: imageX + 60, y: imageY + 38, width: 80, height: 18 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 13,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Action Buttons
  const buttonY = imageY + imageHeight + 32;
  const buttonWidth = (imageWidth - 12) / 2;

  // View Prompt Button
  new Shape({
    name: 'View Prompt Button',
    frame: { x: imageX, y: buttonY, width: buttonWidth, height: 56 },
    style: {
      fills: [{ color: COLORS.buttonWhite }],
      borders: [{ color: 'rgba(255, 255, 255, 0.4)', thickness: 1 }],
      borderRadius: 16,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'View Prompt Text',
    text: 'View Prompt',
    frame: { x: imageX, y: buttonY + 16, width: buttonWidth, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 15,
      fontWeight: 500,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Open Tool Button
  new Shape({
    name: 'Open Tool Button',
    frame: { x: imageX + buttonWidth + 12, y: buttonY, width: buttonWidth, height: 56 },
    style: {
      fills: [{ color: COLORS.buttonPrimary }],
      borderRadius: 16,
      shadows: [{
        color: 'rgba(0, 0, 0, 0.2)',
        blur: 24,
        y: 8,
      }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Open Tool Text',
    text: 'Open Tool',
    frame: { x: imageX + buttonWidth + 12, y: buttonY + 16, width: buttonWidth, height: 24 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 15,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Footer Info
  const footerY = buttonY + 80;

  new Text({
    name: 'Footer Left',
    text: '2 days ago',
    frame: { x: imageX, y: footerY, width: 100, height: 18 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
    },
    parent: artboard,
  });

  new Text({
    name: 'Footer Right',
    text: '16:9 • Standard',
    frame: { x: imageX + imageWidth - 120, y: footerY, width: 120, height: 18 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
      alignment: Text.Alignment.right,
    },
    parent: artboard,
  });

  sketch.UI.message('✅ Example Viewer created successfully!');
}

createExampleViewer();

