# 🎨 UnifAI Mall - Monorepo

**"Spotify for AI Tools"** - Multi-platform AI Tools Marketplace

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![React Native](https://img.shields.io/badge/React_Native-0.72-blue)](https://reactnative.dev/)
[![Turborepo](https://img.shields.io/badge/Turborepo-1.11-red)](https://turbo.build/)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

## 🏗️ Architecture

This is a **Turborepo monorepo** containing:

- 🌐 **Web App** (Next.js) - Progressive web application
- 📱 **Mobile App** (React Native) - iOS & Android
- 💻 **Desktop App** (Electron) - Windows, macOS, Linux
- 📦 **Shared Packages** - Business logic, UI components, Supabase client

```
unifai-mall-monorepo/
├── apps/
│   ├── web/                # Next.js web app
│   ├── mobile/             # React Native mobile app
│   └── desktop/            # Electron desktop app
├── packages/
│   ├── shared-logic/       # Business logic & utilities
│   ├── ui-components/      # Shared React components
│   └── supabase-client/    # Database & auth services
├── supabase/               # Database migrations & functions
└── docs/                   # Documentation

```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm 9+
- For mobile: Android Studio / Xcode
- For desktop: Electron dependencies

### Installation

```bash
# Clone the repository
git clone https://github.com/hilabarzily-sudo/unifai-mall-ai-.git
cd unifai-mall-ai-

# Install all dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your Supabase credentials

# Start development
npm run dev          # Start all apps
npm run dev:web      # Start web app only
npm run dev:mobile   # Start mobile app only
npm run dev:desktop  # Start desktop app only
```

## 📱 Apps

### Web App (`apps/web`)

Next.js 14 with App Router, TypeScript, and Tailwind CSS.

```bash
cd apps/web
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
```

### Mobile App (`apps/mobile`)

React Native for iOS and Android.

```bash
cd apps/mobile
npm run android  # Run on Android
npm run ios      # Run on iOS (Mac only)
npm run start    # Start Metro bundler
```

### Desktop App (`apps/desktop`)

Electron wrapper around the web app.

```bash
cd apps/desktop
npm run dev            # Start in development mode
npm run build:win      # Build for Windows
npm run build:mac      # Build for macOS
npm run build:linux    # Build for Linux
```

## 📦 Packages

### `@repo/shared-logic`

Business logic, utilities, and data transformers.

```typescript
import { transformTool, formatRelativeTime } from '@repo/shared-logic'
```

### `@repo/ui-components`

Shared React components (Button, Card, Badge, etc.).

```typescript
import { Button, Card, Badge } from '@repo/ui-components'
```

### `@repo/supabase-client`

Supabase client wrapper with typed queries.

```typescript
import { initializeSupabase, toolsDB, authService } from '@repo/supabase-client'
```

## 🗄️ Database

Supabase PostgreSQL database with:

- Tools & Categories
- User Authentication
- Favorites & Saved Prompts
- Tool Examples & Reviews
- Row Level Security (RLS)

See `supabase/README.md` for setup instructions.

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start all apps in development
npm run dev:web          # Web app only
npm run dev:mobile       # Mobile app only
npm run dev:desktop      # Desktop app only

# Building
npm run build            # Build all apps
npm run build:web        # Web app only
npm run build:mobile     # Mobile app only
npm run build:desktop    # Desktop app only

# Testing & Linting
npm run lint             # Lint all packages
npm run test             # Run all tests

# Maintenance
npm run clean            # Clean all build artifacts
```

### Project Structure

```
├── apps/                          # Applications
│   ├── web/                       # Next.js web app
│   │   ├── src/app/              # App Router pages
│   │   ├── src/components/       # Web-specific components
│   │   └── public/               # Static assets
│   ├── mobile/                    # React Native app
│   │   ├── src/screens/          # Mobile screens
│   │   ├── src/components/       # Mobile components
│   │   ├── android/              # Android native code
│   │   └── ios/                  # iOS native code
│   └── desktop/                   # Electron app
│       ├── main.cjs              # Electron main process
│       └── preload.cjs           # Preload script
├── packages/                      # Shared packages
│   ├── shared-logic/             # Business logic
│   │   ├── src/algorithms/      # Algorithms
│   │   ├── src/utils/           # Utilities
│   │   └── src/types/           # TypeScript types
│   ├── ui-components/            # UI components
│   │   └── src/                 # Component source
│   └── supabase-client/          # Supabase wrapper
│       ├── src/auth/            # Auth services
│       ├── src/database/        # Database queries
│       └── src/client.ts        # Client setup
├── supabase/                      # Supabase configuration
│   ├── migrations/              # SQL migrations
│   ├── functions/               # Edge functions
│   └── config.toml             # Local config
├── docs/                          # Documentation
├── turbo.json                     # Turborepo configuration
├── package.json                   # Root package.json
└── tsconfig.json                  # Base TypeScript config
```

## 🎨 Design System

- **OS26** design system
- **Glassmorphism** UI style
- **Tailwind CSS** for styling
- **RTL Support** for Hebrew

## 🔐 Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

See `.env.example` for all available options.

## 📚 Documentation

- [Architecture](./docs/ARCHITECTURE.md) - System architecture overview
- [Supabase Setup](./supabase/README.md) - Database setup guide
- [Web App](./apps/web/README.md) - Web app documentation
- [Mobile App](./apps/mobile/README.md) - Mobile app documentation
- [Desktop App](./apps/desktop/README.md) - Desktop app documentation

## 🤝 Contributing

This project uses:

- **Turborepo** for monorepo management
- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 🔗 Links

- **Repository**: https://github.com/hilabarzily-sudo/unifai-mall-ai-
- **Issues**: https://github.com/hilabarzily-sudo/unifai-mall-ai-/issues
- **Supabase**: https://supabase.com

---

**Built with ❤️ by the UnifAI Team**

**Version 2.0.0** - Monorepo Architecture
