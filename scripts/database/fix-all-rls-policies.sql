-- ========================================
-- FIX RLS POLICIES FOR ALL PUBLIC TABLES
-- ========================================
-- This script enables public read access to all tables that should be publicly accessible

-- ========================================
-- TOOLS TABLE
-- ========================================
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read on tools" ON tools;
DROP POLICY IF EXISTS "Allow public insert on tools" ON tools;

CREATE POLICY "Allow public read on tools"
ON tools FOR SELECT
USING (true);

CREATE POLICY "Allow public insert on tools"
ON tools FOR INSERT
WITH CHECK (true);

-- ========================================
-- CATEGORIES TABLE
-- ========================================
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read on categories" ON categories;
DROP POLICY IF EXISTS "Allow public insert on categories" ON categories;

CREATE POLICY "Allow public read on categories"
ON categories FOR SELECT
USING (true);

CREATE POLICY "Allow public insert on categories"
ON categories FOR INSERT
WITH CHECK (true);

-- ========================================
-- TAGS TABLE
-- ========================================
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read on tags" ON tags;
DROP POLICY IF EXISTS "Allow public insert on tags" ON tags;

CREATE POLICY "Allow public read on tags"
ON tags FOR SELECT
USING (true);

CREATE POLICY "Allow public insert on tags"
ON tags FOR INSERT
WITH CHECK (true);

-- ========================================
-- TOOL_TAGS TABLE (Junction)
-- ========================================
ALTER TABLE tool_tags ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read on tool_tags" ON tool_tags;
DROP POLICY IF EXISTS "Allow public insert on tool_tags" ON tool_tags;

CREATE POLICY "Allow public read on tool_tags"
ON tool_tags FOR SELECT
USING (true);

CREATE POLICY "Allow public insert on tool_tags"
ON tool_tags FOR INSERT
WITH CHECK (true);

-- ========================================
-- CATEGORY_TOOLS TABLE (Junction)
-- ========================================
ALTER TABLE category_tools ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read on category_tools" ON category_tools;
DROP POLICY IF EXISTS "Allow public insert on category_tools" ON category_tools;

CREATE POLICY "Allow public read on category_tools"
ON category_tools FOR SELECT
USING (true);

CREATE POLICY "Allow public insert on category_tools"
ON category_tools FOR INSERT
WITH CHECK (true);

-- ========================================
-- TOOL_EXAMPLES TABLE
-- ========================================
ALTER TABLE tool_examples ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public read on tool_examples" ON tool_examples;
DROP POLICY IF EXISTS "Allow public insert on tool_examples" ON tool_examples;

CREATE POLICY "Allow public read on tool_examples"
ON tool_examples FOR SELECT
USING (true);

CREATE POLICY "Allow public insert on tool_examples"
ON tool_examples FOR INSERT
WITH CHECK (true);

-- ========================================
-- USER-SPECIFIC TABLES (Authenticated Only)
-- ========================================

-- FAVORITES
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own favorites" ON favorites;
DROP POLICY IF EXISTS "Users can insert own favorites" ON favorites;
DROP POLICY IF EXISTS "Users can delete own favorites" ON favorites;

CREATE POLICY "Users can read own favorites"
ON favorites FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own favorites"
ON favorites FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own favorites"
ON favorites FOR DELETE
USING (auth.uid() = user_id);

-- SAVED_PROMPTS
ALTER TABLE saved_prompts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own prompts" ON saved_prompts;
DROP POLICY IF EXISTS "Users can insert own prompts" ON saved_prompts;
DROP POLICY IF EXISTS "Users can delete own prompts" ON saved_prompts;

CREATE POLICY "Users can read own prompts"
ON saved_prompts FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own prompts"
ON saved_prompts FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own prompts"
ON saved_prompts FOR DELETE
USING (auth.uid() = user_id);

-- USER_PROFILES
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON user_profiles;

CREATE POLICY "Users can read own profile"
ON user_profiles FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON user_profiles FOR UPDATE
USING (auth.uid() = id);

-- TOOL_USAGE_HISTORY
ALTER TABLE tool_usage_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can read own history" ON tool_usage_history;
DROP POLICY IF EXISTS "Users can insert own history" ON tool_usage_history;

CREATE POLICY "Users can read own history"
ON tool_usage_history FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own history"
ON tool_usage_history FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- ========================================
-- VERIFICATION
-- ========================================
-- Run these queries to verify the policies were created:
-- SELECT tablename, policyname FROM pg_policies WHERE schemaname = 'public';

