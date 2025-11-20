# Monorepo Migration Guide

## Overview

The UnifAI Mall project has been restructured from a single Capacitor-based project into a **Turborepo monorepo** with separate apps for Web, Mobile, and Desktop.

## What Was Done

### ✅ Phase 1: Infrastructure
- Created Turborepo monorepo structure
- Setup workspace dependencies
- Configured TypeScript and build pipeline
- Created root configuration files

### ✅ Phase 2: Shared Packages

#### @repo/shared-logic
- ✅ Migrated `src/utils/dataTransformers.js` → TypeScript
- ✅ Created package structure for algorithms, validation, types
- 📝 TODO: Migrate remaining services logic

#### @repo/ui-components
- ✅ Migrated Button, Card, Badge components → TypeScript
- 📝 TODO: Migrate Input, Modal components
- 📝 TODO: Add theme configuration

#### @repo/supabase-client
- ✅ Created Supabase client wrapper
- ✅ Migrated tools database queries
- ✅ Migrated auth services
- 📝 TODO: Migrate favorites, prompts, reviews services

### ✅ Phase 3: Web App (Next.js)
- ✅ Created Next.js 14 app with App Router
- ✅ Setup Tailwind CSS and styling
- ✅ Created basic home page
- 📝 TODO: Migrate 14 screen components as Next.js pages/routes
- 📝 TODO: Setup routing structure

### ✅ Phase 4: Mobile App (React Native)
- ✅ Created React Native project structure
- ✅ Setup TypeScript configuration
- ✅ Created basic App component
- 📝 TODO: Move `android/` folder to `apps/mobile/android/`
- 📝 TODO: Move `ios/` folder to `apps/mobile/ios/`
- 📝 TODO: Migrate 14 screen components for mobile
- 📝 TODO: Setup React Navigation

### ✅ Phase 5: Desktop App (Electron)
- ✅ Created Electron configuration
- ✅ Setup main and preload processes
- ✅ Configured to use Web app as renderer
- 📝 TODO: Move `electron-builder.json` settings
- 📝 TODO: Add desktop-specific features

### ✅ Phase 6: Supabase
- ✅ Created `supabase/` directory structure
- ✅ Added config.toml for local development
- 📝 TODO: Convert `scripts/database/*.sql` to migrations
- 📝 TODO: Convert `scripts/database/*.js` to seed data

### ✅ Phase 7: Configuration
- ✅ Updated README with monorepo structure
- ✅ Created `.env.example`
- ✅ Setup Turborepo pipeline

## What Still Needs Migration

### High Priority

1. **Screen Components (14 files)**
   - Source: `src/components/screens/*.jsx`
   - Web destination: `apps/web/src/app/[routes]/page.tsx`
   - Mobile destination: `apps/mobile/src/screens/*.tsx`

2. **Native Mobile Folders**
   - Move: `android/` → `apps/mobile/android/`
   - Move: `ios/` → `apps/mobile/ios/`
   - Update: Capacitor configuration for mobile app

3. **Remaining Services**
   - `src/services/favoritesService.js`
   - `src/services/promptsService.js`
   - `src/services/reviewsService.js`
   - `src/services/historyService.js`
   - Destination: `packages/supabase-client/src/database/`

4. **Database Migrations**
   - Convert: `scripts/database/*.sql` → `supabase/migrations/`
   - Convert: populate scripts → `supabase/seed.sql`

### Medium Priority

5. **UI Components**
   - `frontend/src/components/ui/Input.jsx` → `packages/ui-components/`
   - `frontend/src/components/ui/Modal.jsx` → `packages/ui-components/`

6. **Layout Components**
   - `frontend/src/components/layout/Header.jsx`
   - `frontend/src/components/layout/Navigation.jsx`
   - Destination: `apps/web/src/components/layout/`

7. **Hooks**
   - `src/hooks/useSupabaseData.js`
   - Destination: `packages/supabase-client/src/hooks/`

8. **Assets & Public Files**
   - `public/*` → `apps/web/public/`
   - Icons and images

### Low Priority

9. **Testing Setup**
   - `tests/` → Move to respective apps
   - Setup Jest/Playwright in each app

10. **Documentation**
   - Update all docs in `docs/` for new structure
   - Create app-specific README files

11. **CI/CD**
   - `.github/workflows/*` → Update for monorepo
   - Add Turborepo caching

12. **Build Scripts**
   - `*.bat` files → Update or remove
   - Docker configuration

## Migration Steps for Screens

### Example: Migrating HomePage

#### Original Location
```
src/components/screens/03-HomePage.jsx
```

#### Web (Next.js)
```typescript
// apps/web/src/app/page.tsx
import { HomeScreen } from '@/components/HomeScreen'

export default function Home() {
  return <HomeScreen />
}

// apps/web/src/components/HomeScreen.tsx
// ... migrated component code
```

#### Mobile (React Native)
```typescript
// apps/mobile/src/screens/HomeScreen.tsx
import { View, Text, StyleSheet } from 'react-native'
// ... adapted component code with RN styling
```

## File Mapping Reference

| Original | New Location |
|----------|-------------|
| `src/components/screens/*.jsx` | `apps/web/src/app/**/page.tsx` |
| `src/components/screens/*.jsx` | `apps/mobile/src/screens/*.tsx` |
| `src/services/*.js` | `packages/supabase-client/src/database/*.ts` |
| `src/utils/*.js` | `packages/shared-logic/src/utils/*.ts` |
| `src/lib/supabase.js` | `packages/supabase-client/src/client.ts` |
| `frontend/src/components/ui/*.jsx` | `packages/ui-components/src/*.tsx` |
| `android/` | `apps/mobile/android/` |
| `ios/` | `apps/mobile/ios/` |
| `electron/*.cjs` | `apps/desktop/*.cjs` |
| `scripts/database/*.sql` | `supabase/migrations/*.sql` |
| `public/*` | `apps/web/public/*` |

## Testing the Migration

### Test Web App
```bash
cd apps/web
npm install
npm run dev
# Visit http://localhost:3000
```

### Test Mobile App
```bash
cd apps/mobile
npm install
npm run android  # or npm run ios
```

### Test Desktop App
```bash
cd apps/desktop
npm install
npm run dev
```

### Test Shared Packages
```bash
# From root
npm run build
# All packages should build successfully
```

## Next Steps

1. Install dependencies in all workspaces: `npm install`
2. Build shared packages: `npm run build`
3. Start migrating screen components
4. Move native folders for mobile
5. Convert database scripts to migrations
6. Test each app independently
7. Update documentation

## Rollback Plan

If you need to revert:

```bash
git checkout main
# Original structure is preserved in main branch
```

The `monorepo-refactor` branch contains all new structure.

## Questions?

See the main README.md or check individual app README files for more details.

