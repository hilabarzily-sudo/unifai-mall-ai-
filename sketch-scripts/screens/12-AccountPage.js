// ================================================================================
// UNIFAI - ACCOUNT PAGE (App Store Style)
// Sketch JavaScript API Script
// User profile with favorite tools list
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
  buttonBlue: '#2563EB',
  avatarBg: '#D1D5DB',
  statsBg: 'rgba(255, 255, 255, 0.6)',
};

function createAccountPage() {
  const document = sketch.getSelectedDocument();
  const page = document.selectedPage;

  const artboard = new Artboard({
    name: '12 - Account Page',
    frame: { x: 420, y: 1760, width: 390, height: 1000 },
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
    text: 'Account',
    frame: { x: 24, y: 32, width: 200, height: 24 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Settings Button
  new Shape({
    name: 'Settings Button',
    frame: { x: 326, y: 24, width: 40, height: 40 },
    style: {
      fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
      borderRadius: 12,
    },
    parent: artboard,
  });

  new Text({
    name: 'Settings Icon',
    text: '⚙️',
    frame: { x: 334, y: 30, width: 24, height: 28 },
    style: {
      fontSize: 20,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Profile Card
  new Shape({
    name: 'Profile Card',
    frame: { x: 24, y: 96, width: 342, height: 180 },
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

  // Avatar
  new Shape({
    name: 'Avatar',
    frame: { x: 56, y: 128, width: 96, height: 96 },
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
      shadows: [{
        color: 'rgba(0, 0, 0, 0.1)',
        blur: 16,
        y: 4,
      }],
    },
    parent: artboard,
  });

  new Text({
    name: 'Avatar Icon',
    text: '👤',
    frame: { x: 76, y: 144, width: 56, height: 64 },
    style: {
      fontSize: 48,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // User Info
  new Text({
    name: 'User Name',
    text: 'Sarah Cohen',
    frame: { x: 168, y: 136, width: 180, height: 28 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 24,
      fontWeight: 700,
    },
    parent: artboard,
  });

  new Text({
    name: 'User Email',
    text: 'sarah@example.com',
    frame: { x: 168, y: 168, width: 180, height: 20 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 15,
    },
    parent: artboard,
  });

  new Text({
    name: 'Member Since',
    text: 'Member since January 2024',
    frame: { x: 168, y: 192, width: 180, height: 16 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 13,
    },
    parent: artboard,
  });

  // Stats
  new Shape({
    name: 'Stat 1',
    frame: { x: 168, y: 220, width: 80, height: 44 },
    style: {
      fills: [{ color: COLORS.statsBg }],
      borderRadius: 8,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Stat 1 Number',
    text: '12',
    frame: { x: 168, y: 224, width: 80, height: 20 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 700,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  new Text({
    name: 'Stat 1 Label',
    text: 'Favorite Tools',
    frame: { x: 168, y: 244, width: 80, height: 14 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 10,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  new Shape({
    name: 'Stat 2',
    frame: { x: 260, y: 220, width: 80, height: 44 },
    style: {
      fills: [{ color: COLORS.statsBg }],
      borderRadius: 8,
      blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
    },
    parent: artboard,
  });

  new Text({
    name: 'Stat 2 Number',
    text: '48',
    frame: { x: 260, y: 224, width: 80, height: 20 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 700,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  new Text({
    name: 'Stat 2 Label',
    text: 'Saved Prompts',
    frame: { x: 260, y: 244, width: 80, height: 14 },
    style: {
      textColor: COLORS.textSecondary,
      fontSize: 10,
      alignment: Text.Alignment.center,
    },
    parent: artboard,
  });

  // Favorite Tools Section
  new Text({
    name: 'Section Title',
    text: 'Favorite Tools',
    frame: { x: 24, y: 300, width: 200, height: 28 },
    style: {
      textColor: COLORS.textPrimary,
      fontSize: 20,
      fontWeight: 600,
    },
    parent: artboard,
  });

  // Tool List Card (App Store Style)
  new Shape({
    name: 'Tools List Card',
    frame: { x: 24, y: 344, width: 342, height: 365 },
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

  // Tool Items
  const tools = [
    { icon: '🎨', name: 'Midjourney', category: 'Design', lastUsed: '2 days ago' },
    { icon: '🤖', name: 'ChatGPT', category: 'AI Assistant', lastUsed: '5 hours ago' },
    { icon: '🎬', name: 'Runway', category: 'Video', lastUsed: '1 week ago' },
  ];

  tools.forEach((tool, idx) => {
    const itemY = 344 + idx * 88;

    // Divider (except first)
    if (idx > 0) {
      new Shape({
        name: `Divider ${idx}`,
        frame: { x: 48, y: itemY, width: 294, height: 1 },
        style: {
          fills: [{ color: 'rgba(255, 255, 255, 0.3)' }],
        },
        parent: artboard,
      });
    }

    // Tool Icon
    new Shape({
      name: `Tool Icon ${idx + 1}`,
      frame: { x: 48, y: itemY + 14, width: 60, height: 60 },
      style: {
        fills: [{ color: 'rgba(255, 255, 255, 0.6)' }],
        borderRadius: 12,
        blur: { enabled: true, radius: 12, type: Style.BlurType.Background },
      },
      parent: artboard,
    });

    new Text({
      name: `Tool Emoji ${idx + 1}`,
      text: tool.icon,
      frame: { x: 62, y: itemY + 22, width: 32, height: 40 },
      style: {
        fontSize: 32,
        alignment: Text.Alignment.center,
      },
      parent: artboard,
    });

    // Tool Info
    new Text({
      name: `Tool Name ${idx + 1}`,
      text: tool.name,
      frame: { x: 120, y: itemY + 20, width: 120, height: 20 },
      style: {
        textColor: COLORS.textPrimary,
        fontSize: 17,
        fontWeight: 600,
      },
      parent: artboard,
    });

    new Text({
      name: `Tool Category ${idx + 1}`,
      text: tool.category,
      frame: { x: 120, y: itemY + 42, width: 120, height: 16 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 14,
      },
      parent: artboard,
    });

    new Text({
      name: `Tool Time ${idx + 1}`,
      text: `Last used: ${tool.lastUsed}`,
      frame: { x: 120, y: itemY + 60, width: 120, height: 14 },
      style: {
        textColor: COLORS.textSecondary,
        fontSize: 12,
      },
      parent: artboard,
    });

    // Open Button (App Store Style)
    new Shape({
      name: `Open Button ${idx + 1}`,
      frame: { x: 278, y: itemY + 32, width: 60, height: 28 },
      style: {
        fills: [{ color: COLORS.buttonBlue }],
        borderRadius: 14,
      },
      parent: artboard,
    });

    new Text({
      name: `Open Text ${idx + 1}`,
      text: 'Open',
      frame: { x: 278, y: itemY + 36, width: 60, height: 20 },
      style: {
        textColor: '#FFFFFF',
        fontSize: 14,
        fontWeight: 600,
        alignment: Text.Alignment.center,
      },
      parent: artboard,
    });
  });

  sketch.UI.message('✅ Account Page created successfully!');
}

createAccountPage();

