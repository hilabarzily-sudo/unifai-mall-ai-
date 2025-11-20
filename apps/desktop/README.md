# UnifAI Mall - Desktop App

Electron-based desktop application that wraps the Next.js web app.

## Development

```bash
# Start both web server and Electron
npm run dev

# Build for specific platforms
npm run build:win
npm run build:mac
npm run build:linux
```

## Architecture

- Uses Next.js web app (`apps/web`) as the renderer process
- Electron main process handles native desktop features
- Shares all code through monorepo packages

## Notes

- Original electron/ folder contents have been moved here
- Reuses the web app for UI
- Can add desktop-specific features (file system, notifications, etc.)

