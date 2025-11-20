// ================================================================================
// UNIFAI - ACCOUNT SETTINGS SHEET (Bottom Sheet)
// Sketch JavaScript API Script
// Settings popup with user identity, personalization, app management
// ================================================================================

const sketch = require('sketch');
const { Artboard, Shape, Text, Style } = sketch;

const COLORS = {
  backdrop: 'rgba(0, 0, 0, 0.3)',
  sheetBg: '#FFFFFF',
  handleBar: '#D1D5DB',
  buttonPrimary: '#111827',
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  inputBg: '#F9FAFB',
  inputBorder: '#E5E7EB',
  sectionBg: '#F9FAFB',
  toggleActive: '#2563EB',
  toggleInactive: '#D1D5DB',
  avatarBg: '#E5E7EB',
};

function createAccountSettingsSheet() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '13 - Account Settings Sheet',
    frame: { x: 840, y: 1760, width: 390, height: 844 },
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
  const sheetHeight = 700;
  const sheetY = 844 - sheetHeight;

  new Shape({
    name: 'Sheet Container',
    frame: { x: 0, y: sheetY, width: 390, height: sheetHeight },
    style: {
      fills: [{ color: COLORS.sheetBg }],
      borderRadius: 40,
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
  new Shape({
    name: 'Header Divider',
    frame: { x: 0, y: sheetY + 80, width: 390, height: 1 },
    style: {
      fills: [{ color: 'rgba(229, 231, 235, 0.5)' }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Sheet Title',
    text: 'Settings',
    frame: { x: 32, y: sheetY + 40, width: 200, height: 28 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Done Button
  new Shape({
    name: 'Done Button',
    frame: { x: 298, y: sheetY + 36, width: 60, height: 32 },
    style: {
      fills: [{ color: COLORS.buttonPrimary }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Done Text',
    text: 'Done',
    frame: { x: 298, y: sheetY + 42, width: 60, height: 20 },
    style: {
      textColor: '#FFFFFF',
      fontSize: 13,
      fontWeight: 600,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  let currentY = sheetY + 104;

  // Section A: UnifAI Account
  new Text({
    name: 'Section A Title',
    text: 'UnifAI Account',
    frame: { x: 32, y: currentY, width: 200, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 18,
      fontWeight: 600,
    },
    parent: artboard,
  });

  currentY += 40;

  // Profile Picture
  new Shape({
    name: 'Avatar',
    frame: { x: 32, y: currentY, width: 80, height: 80 },
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

  new Text({
    name: 'Avatar Icon',
    text: '👤',
    frame: { x: 52, y: currentY + 12, width: 40, height: 56 },
    style: {
      fontSize: 40,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Change Photo Button
  new Shape({
    name: 'Change Photo Button',
    frame: { x: 128, y: currentY + 24, width: 120, height: 32 },
    style: {
      fills: [{ color: '#F3F4F6' }],
      borderRadius: 8,
    },
    parent: artboard,
  });

  new Text({
    name: 'Change Photo Text',
    text: 'Change Photo',
    frame: { x: 128, y: currentY + 30, width: 120, height: 20 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 13,
      fontWeight: 500,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  currentY += 100;

  // Full Name Input
  new Text({
    name: 'Name Label',
    text: 'Full Name',
    frame: { x: 32, y: currentY, width: 100, height: 18 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
      fontWeight: 500,
    },
    parent: artboard,
  });

  currentY += 26;

  new Shape({
    name: 'Name Input',
    frame: { x: 32, y: currentY, width: 326, height: 48 },
    style: {
      fills: [{ color: COLORS.inputBg }],
      borders: [{ color: COLORS.inputBorder, thickness: 1 }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Name Value',
    text: 'Sarah Cohen',
    frame: { x: 48, y: currentY + 14, width: 294, height: 20 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 15,
    },
    parent: artboard,
  });

  currentY += 64;

  // Section B: Personalization
  new Text({
    name: 'Section B Title',
    text: 'Personalization',
    frame: { x: 32, y: currentY, width: 200, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 18,
      fontWeight: 600,
    },
    parent: artboard,
  });

  currentY += 40;

  // Language Select
  new Text({
    name: 'Language Label',
    text: 'Language',
    frame: { x: 32, y: currentY, width: 100, height: 18 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
      fontWeight: 500,
    },
    parent: artboard,
  });

  currentY += 26;

  new Shape({
    name: 'Language Select',
    frame: { x: 32, y: currentY, width: 326, height: 48 },
    style: {
      fills: [{ color: COLORS.inputBg }],
      borders: [{ color: COLORS.inputBorder, thickness: 1 }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Language Value',
    text: 'Hebrew',
    frame: { x: 48, y: currentY + 14, width: 250, height: 20 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 15,
    },
    parent: artboard,
  });

  new Text({
    name: 'Dropdown Icon',
    text: '▼',
    frame: { x: 326, y: currentY + 16, width: 20, height: 16 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 12,
    },
    parent: artboard,
  });

  currentY += 64;

  // Feed Personalization Toggle
  new Shape({
    name: 'Toggle Container 1',
    frame: { x: 32, y: currentY, width: 326, height: 64 },
    style: {
      fills: [{ color: COLORS.sectionBg }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Toggle 1 Title',
    text: 'Feed Personalization',
    frame: { x: 48, y: currentY + 14, width: 200, height: 18 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 14,
      fontWeight: 500,
    },
    parent: artboard,
  });

  new Text({
    name: 'Toggle 1 Desc',
    text: 'Show tools based on your interests',
    frame: { x: 48, y: currentY + 36, width: 200, height: 16 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 12,
    },
    parent: artboard,
  });

  // Toggle Switch (Active)
  new Shape({
    name: 'Toggle 1 Track',
    frame: { x: 290, y: currentY + 20, width: 48, height: 28 },
    style: {
      fills: [{ color: COLORS.toggleActive }],
      borderRadius: 14,
    },
    parent: artboard,
  });

  new Shape({
    name: 'Toggle 1 Knob',
    frame: { x: 314, y: currentY + 24, width: 20, height: 20 },
    style: {
      fills: [{ color: '#FFFFFF' }],
      borderRadius: 10,
      shadows: [{
        color: 'rgba(0, 0, 0, 0.2)',
        blur: 4,
        y: 2,
      }],
    },
    parent: artboard,
  });

  currentY += 80;

  // Section C: App Management
  new Text({
    name: 'Section C Title',
    text: 'App Management',
    frame: { x: 32, y: currentY, width: 200, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 18,
      fontWeight: 600,
    },
    parent: artboard,
  });

  currentY += 40;

  // Notifications Toggle
  new Shape({
    name: 'Toggle Container 2',
    frame: { x: 32, y: currentY, width: 326, height: 64 },
    style: {
      fills: [{ color: COLORS.sectionBg }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Toggle 2 Title',
    text: 'Notifications',
    frame: { x: 48, y: currentY + 14, width: 200, height: 18 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 14,
      fontWeight: 500,
    },
    parent: artboard,
  });

  new Text({
    name: 'Toggle 2 Desc',
    text: 'Get updates about new tools and features',
    frame: { x: 48, y: currentY + 36, width: 220, height: 16 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 12,
    },
    parent: artboard,
  });

  // Toggle Switch (Active)
  new Shape({
    name: 'Toggle 2 Track',
    frame: { x: 290, y: currentY + 20, width: 48, height: 28 },
    style: {
      fills: [{ color: COLORS.toggleActive }],
      borderRadius: 14,
    },
    parent: artboard,
  });

  new Shape({
    name: 'Toggle 2 Knob',
    frame: { x: 314, y: currentY + 24, width: 20, height: 20 },
    style: {
      fills: [{ color: '#FFFFFF' }],
      borderRadius: 10,
      shadows: [{
        color: 'rgba(0, 0, 0, 0.2)',
        blur: 4,
        y: 2,
      }],
    },
    parent: artboard,
  });

  sketch.UI.message('✅ Account Settings Sheet created successfully!');
}

createAccountSettingsSheet();

