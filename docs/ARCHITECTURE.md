# 🏗️ UnifAI Mall - System Architecture

## Overview

UnifAI Mall is a full-stack application built with modern web technologies, supporting Web, Desktop (Electron), and Mobile (Capacitor) platforms.

## Technology Stack

### Frontend
- **React 18.2** - UI library
- **Vite 5** - Build tool and development server
- **Tailwind CSS 3** - Utility-first CSS framework
- **OS26 Design System** - Custom design tokens
- **Glassmorphism** - UI aesthetic

### Backend
- **Supabase** - Backend-as-a-Service
  - PostgreSQL database
  - Authentication (Email, Google, Apple)
  - Real-time subscriptions
  - Storage for media files

### Desktop
- **Electron 28** - Cross-platform desktop framework
- **electron-builder** - Packaging and distribution
- **electron-updater** - Auto-update functionality

### Mobile
- **Capacitor** - Native mobile wrapper
- **Android SDK** - Android builds
- **Xcode** - iOS builds

### Testing
- **Jest** - Unit and integration testing
- **React Testing Library** - Component testing
- **Playwright** - End-to-end testing

### DevOps
- **GitHub Actions** - CI/CD pipelines
- **Vercel** - Web hosting
- **Docker** - Containerization

## Project Structure

```
unifai-mall/
├── frontend/                    # New organized structure
│   ├── src/
│   │   ├── components/
│   │   │   ├── screens/        # 14 full pages
│   │   │   ├── ui/             # Reusable components
│   │   │   └── layout/         # Layout components
│   │   ├── services/           # API services
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Utility functions
│   │   └── lib/                # Third-party configs
│   └── README.md
│
├── src/                        # Original structure (maintained)
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   └── lib/
│
├── electron/                   # Desktop app
│   ├── main.js                 # Main process
│   └── preload.js              # Preload script
│
├── tests/                      # Test suites
│   ├── unit/                   # Unit tests
│   ├── integration/            # Integration tests
│   └── e2e/                    # End-to-end tests
│
├── .github/workflows/          # CI/CD
│   ├── ci.yml
│   ├── deploy-web.yml
│   ├── deploy-electron.yml
│   └── deploy-mobile.yml
│
├── docs/                       # Documentation
├── public/                     # Static assets
└── scripts/                    # Utility scripts
```

## Data Flow

### Authentication Flow
```
User Action → AuthService → Supabase Auth → Session Token → User State
```

### Data Fetching Flow
```
Component → Service (toolsService) → Supabase Client → PostgreSQL → Transform → State
```

### Real-time Updates Flow
```
Database Change → Supabase Realtime → Subscription → State Update → UI Refresh
```

## Database Schema

### Core Tables

**users** (managed by Supabase Auth)
- id (uuid, primary key)
- email (text)
- created_at (timestamp)

**tools**
- id (uuid, primary key)
- name (text)
- description_he (text)
- description_en (text)
- url (text)
- logo_url (text)
- is_free (boolean)
- rating (decimal)
- created_at (timestamp)

**categories**
- id (uuid, primary key)
- name_he (text)
- name_en (text)
- icon (text)
- order_index (integer)

**favorites**
- id (uuid, primary key)
- user_id (uuid, foreign key → users)
- tool_id (uuid, foreign key → tools)
- created_at (timestamp)

**saved_prompts**
- id (uuid, primary key)
- user_id (uuid, foreign key → users)
- tool_id (uuid, foreign key → tools)
- prompt_text (text)
- parameters (jsonb)
- created_at (timestamp)

### Relationships
- One user → Many favorites
- One user → Many saved prompts
- One tool → Many favorites
- One tool → Many examples
- Many-to-many: tools ↔ categories (via category_tools)
- Many-to-many: tools ↔ tags (via tool_tags)

## Component Architecture

### Atomic Design Pattern

**Atoms** (Basic building blocks)
- Button, Input, Badge, Icon

**Molecules** (Simple combinations)
- Card, Modal, Form fields

**Organisms** (Complex combinations)
- Navigation, Header, Tool Card Grid

**Templates** (Page layouts)
- HomePage, ToolPage, AccountPage

**Pages** (Full screens)
- 14 complete screen components

### State Management

**Local State** - useState for component-level state
**Shared State** - Props drilling (considering Context API for v2)
**Server State** - Supabase real-time subscriptions

## Security

### Frontend
- Input validation
- XSS prevention
- CSRF protection
- Secure storage (no sensitive data in localStorage)

### Backend (Supabase)
- Row Level Security (RLS) policies
- JWT authentication
- API rate limiting
- SQL injection prevention

### Electron
- Context isolation enabled
- Node integration disabled
- Content Security Policy
- Secure IPC communication

## Performance Optimization

### Bundle Optimization
- Code splitting (vendor, supabase chunks)
- Tree shaking
- Minification
- Lazy loading

### Caching Strategy
- Service Worker for offline support
- Cache-first for static assets
- Network-first for API calls
- Stale-while-revalidate for non-critical data

### Image Optimization
- Lazy loading images
- WebP format support
- Responsive images
- CDN delivery (Supabase Storage)

## Deployment Architecture

### Web (Vercel)
```
GitHub → Actions → Build → Vercel → CDN → Users
```

### Desktop (Electron)
```
GitHub Release → electron-builder → Binaries (Win/Mac/Linux) → auto-updater
```

### Mobile (Capacitor)
```
Build → Capacitor → Native Project → App Store/Play Store
```

## Scalability Considerations

### Database
- Indexed columns for fast queries
- Connection pooling
- Query optimization
- Prepared statements

### API
- Supabase auto-scaling
- Edge functions for heavy operations
- Rate limiting per user

### Frontend
- Virtual scrolling for long lists
- Pagination
- Infinite scroll
- Debounced search

## Monitoring & Analytics

### Error Tracking
- Sentry integration (planned)
- Console error capturing
- Error boundaries

### Analytics
- Google Analytics integration
- User behavior tracking
- Performance metrics
- Conversion funnel

## Future Architecture Plans

### v2.0 Roadmap
- GraphQL layer for flexible queries
- Redis caching layer
- Microservices for heavy operations
- WebSockets for real-time chat
- AI recommendations engine
- Multi-language support (i18n)

## Development Workflow

```
Feature Branch → Local Dev → Unit Tests → Integration Tests → PR →
Code Review → CI/CD → E2E Tests → Staging → Production
```

## Best Practices

### Code Organization
- One component per file
- Colocate related files
- Use index.js for exports
- Keep components small (<300 lines)

### Naming Conventions
- PascalCase for components
- camelCase for functions/variables
- UPPER_CASE for constants
- kebab-case for files

### Git Workflow
- Feature branches from main
- Conventional commits
- Pull request reviews
- Automated testing before merge

---

*Last updated: November 2025*

