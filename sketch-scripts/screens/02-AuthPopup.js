// ================================================================================
// UNIFAI - AUTH POPUP (Sign In / Sign Up)
// Sketch JavaScript API Script
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  bgGradient: '#f6f7fb',
  backdropBlur: 'rgba(0, 0, 0, 0.3)',
  modalBg: 'rgba(255, 255, 255, 0.8)',
  glassBorder: 'rgba(255, 255, 255, 0.2)',
  buttonPrimary: '#111827',
  buttonWhite: 'rgba(255, 255, 255, 0.8)',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  inputBg: 'rgba(255, 255, 255, 0.6)',
  tabActive: '#111827',
  tabInactive: '#6B7280',
};

function createAuthPopup() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  // Artboard
  const artboard = new Artboard({
    name: '02 - Auth Popup',
    frame: { x: 420, y: 0, width: 390, height: 844 },
    parent: page,
  });

  // Background
  new Shape({
    name: 'Background',
    frame: { x: 0, y: 0, width: 390, height: 844 },
    style: {
      fills: [{ color: COLORS.bgGradient }],
    },
    parent: artboard,
  });

  // Backdrop Blur
  new Shape({
    name: 'Backdrop',
    frame: { x: 0, y: 0, width: 390, height: 844 },
    style: {
      fills: [{ color: COLORS.backdropBlur }],
      blur: { enabled: true, radius: 8, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  // Modal Container
  const modalWidth = 350;
  const modalHeight = 620;
  const modalX = (390 - modalWidth) / 2;
  const modalY = (844 - modalHeight) / 2;

  new Shape({
    name: 'Modal Container',
    frame: { x: modalX, y: modalY, width: modalWidth, height: modalHeight },
    style: {
      fills: [{ color: COLORS.modalBg }],
      borders: [{ color: COLORS.glassBorder, thickness: 1 }],
      borderRadius: 32,
      blur: { enabled: true, radius: 40, type: Style.BlurType.Background },
      shadows: [{
        color: 'rgba(0, 0, 0, 0.25)',
        blur: 60,
        x: 0,
        y: 30,
      }],
    },
    parent: artboard,
  });

  // Close Button (X)
  new Shape({
    name: 'Close Button',
    frame: { x: modalX + modalWidth - 40, y: modalY + 24, width: 32, height: 32 },
    style: {
      fills: [{ color: 'rgba(17, 24, 39, 0.1)' }],
      borderRadius: 16,
    },
    parent: artboard,
  });

  // Logo Container
  const logoSize = 64;
  new Shape({
    name: 'Logo Box',
    frame: {
      x: modalX + (modalWidth - logoSize) / 2,
      y: modalY + 32,
      width: logoSize,
      height: logoSize,
    },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
      borders: [{ color: COLORS.glassBorder, thickness: 1 }],
      borderRadius: 16,
      blur: { enabled: true, radius: 24, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  // Logo Text
  new Text({
    name: 'Logo U',
    text: 'U',
    frame: { x: modalX + (modalWidth - 40) / 2, y: modalY + 44, width: 40, height: 40 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 28,
      fontWeight: 700,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Title
  new Text({
    name: 'Title',
    text: 'התחברות',
    frame: { x: modalX, y: modalY + 120, width: modalWidth, height: 32 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 24,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Message
  new Text({
    name: 'Message',
    text: 'כדי לשמור כלים ולפתוח אותם,\nצריך להתחבר לחשבון UnifAI שלך',
    frame: { x: modalX + 20, y: modalY + 160, width: modalWidth - 40, height: 44 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
      fontWeight: 400,
      alignment: Text.Alignment.center,
      lineHeight: 20,
    },
    parent: artboard,
  });

  // Tab Toggle Container
  new Shape({
    name: 'Tabs Background',
    frame: { x: modalX + 24, y: modalY + 220, width: modalWidth - 48, height: 52 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
      borderRadius: 16,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  // Active Tab
  new Shape({
    name: 'Active Tab',
    frame: { x: modalX + 28, y: modalY + 224, width: (modalWidth - 56) / 2 - 4, height: 44 },
    style: {
      fills: [{ color: COLORS.tabActive }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  // Tab Text
  new Text({
    name: 'Tab Text',
    text: 'התחברות',
    frame: { x: modalX + 28, y: modalY + 234, width: (modalWidth - 56) / 2 - 4, height: 24 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 14,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Google Button
  new Shape({
    name: 'Google Button',
    frame: { x: modalX + 24, y: modalY + 290, width: modalWidth - 48, height: 48 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.8)' }],
      borders: [{ color: 'rgba(229, 231, 235, 0.5)', thickness: 1 }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Google Button Text',
    text: '🟦 המשך עם Google',
    frame: { x: modalX + 24, y: modalY + 302, width: modalWidth - 48, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 14,
      fontWeight: 500,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Apple Button
  new Shape({
    name: 'Apple Button',
    frame: { x: modalX + 24, y: modalY + 350, width: modalWidth - 48, height: 48 },
    style: {
      fills: [{ color: COLORS.buttonPrimary }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Apple Button Text',
    text: '🍎 המשך עם Apple',
    frame: { x: modalX + 24, y: modalY + 362, width: modalWidth - 48, height: 24 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 14,
      fontWeight: 500,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Divider
  new Text({
    name: 'Divider',
    text: 'או',
    frame: { x: modalX + (modalWidth - 40) / 2, y: modalY + 416, width: 40, height: 20 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 12,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Email Input
  new Shape({
    name: 'Email Input',
    frame: { x: modalX + 24, y: modalY + 450, width: modalWidth - 48, height: 48 },
    style: {
      fills: [{ color: COLORS.inputBg }],
      borders: [{ color: 'rgba(229, 231, 235, 0.5)', thickness: 1 }],
      borderRadius: 12,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Email Placeholder',
    text: 'כתובת אימייל',
    frame: { x: modalX + 40, y: modalY + 462, width: modalWidth - 80, height: 24 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 14,
    },
    parent: artboard,
  });

  // Password Input
  new Shape({
    name: 'Password Input',
    frame: { x: modalX + 24, y: modalY + 510, width: modalWidth - 48, height: 48 },
    style: {
      fills: [{ color: COLORS.inputBg }],
      borders: [{ color: 'rgba(229, 231, 235, 0.5)', thickness: 1 }],
      borderRadius: 12,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Password Placeholder',
    text: 'סיסמה',
    frame: { x: modalX + 40, y: modalY + 522, width: modalWidth - 80, height: 24 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 14,
    },
    parent: artboard,
  });

  // Submit Button
  new Shape({
    name: 'Submit Button',
    frame: { x: modalX + 24, y: modalY + 570, width: modalWidth - 48, height: 48 },
    style: {
      fills: [{ color: COLORS.buttonPrimary }],
      borderRadius: 12,
      shadows: [{
        color: 'rgba(0, 0, 0, 0.2)',
        blur: 16,
        x: 0,
        y: 8,
      }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Submit Text',
    text: 'התחבר',
    frame: { x: modalX + 24, y: modalY + 582, width: modalWidth - 48, height: 24 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 14,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  sketch.UI.message('✅ Auth Popup created successfully!');
}

createAuthPopup();

