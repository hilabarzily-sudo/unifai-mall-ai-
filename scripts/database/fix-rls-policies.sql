-- Fix RLS Policies for tool_tags and tool_examples
-- This allows the anon key to insert data for populating the database

-- Enable RLS if not already enabled
ALTER TABLE tool_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE tool_examples ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public insert on tool_tags" ON tool_tags;
DROP POLICY IF EXISTS "Allow public read on tool_tags" ON tool_tags;
DROP POLICY IF EXISTS "Allow public insert on tool_examples" ON tool_examples;
DROP POLICY IF EXISTS "Allow public read on tool_examples" ON tool_examples;

-- Create policies for tool_tags
CREATE POLICY "Allow public read on tool_tags"
ON tool_tags FOR SELECT
USING (true);

CREATE POLICY "Allow public insert on tool_tags"
ON tool_tags FOR INSERT
WITH CHECK (true);

-- Create policies for tool_examples
CREATE POLICY "Allow public read on tool_examples"
ON tool_examples FOR SELECT
USING (true);

CREATE POLICY "Allow public insert on tool_examples"
ON tool_examples FOR INSERT
WITH CHECK (true);

