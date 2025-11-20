# Supabase Database

This directory contains all Supabase-related files for the UnifAI Mall project.

## Structure

```
supabase/
├── migrations/          # Database schema migrations
├── functions/           # Edge Functions (Deno)
├── config.toml         # Local development configuration
└── seed.sql            # Initial data for development
```

## Setup

### Local Development

```bash
# Install Supabase CLI
npm install -g supabase

# Start local Supabase
supabase start

# Apply migrations
supabase db push

# Stop local Supabase
supabase stop
```

### Migrations

The `migrations/` folder contains SQL files from the original `scripts/database/` directory,
reorganized as proper Supabase migrations.

Key migration files:
- Initial schema setup
- Tools and categories tables
- User-related tables (favorites, saved prompts, etc.)
- RLS (Row Level Security) policies

## Production

To push to production Supabase:

```bash
# Link to your project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push

# Or manually run SQL in Supabase Dashboard
```

## Environment Variables

Required in your `.env` files:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

