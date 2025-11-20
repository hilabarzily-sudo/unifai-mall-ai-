-- Migration: Enhance Tools Table with Additional Fields
-- Purpose: Add missing fields for complete tool marketplace functionality

-- Add new columns to tools table if they don't exist
ALTER TABLE tools 
ADD COLUMN IF NOT EXISTS pricing_info TEXT,
ADD COLUMN IF NOT EXISTS description_long TEXT,
ADD COLUMN IF NOT EXISTS target_audience TEXT,
ADD COLUMN IF NOT EXISTS speed TEXT,
ADD COLUMN IF NOT EXISTS tech TEXT,
ADD COLUMN IF NOT EXISTS limitations TEXT,
ADD COLUMN IF NOT EXISTS review_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS usage_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;

-- Create tool_reviews table for user ratings
CREATE TABLE IF NOT EXISTS tool_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_text TEXT,
    helpful_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(tool_id, user_id)
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_tool_reviews_tool_id ON tool_reviews(tool_id);
CREATE INDEX IF NOT EXISTS idx_tool_reviews_user_id ON tool_reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_tool_reviews_rating ON tool_reviews(rating);

-- Create function to update tool rating based on reviews
CREATE OR REPLACE FUNCTION update_tool_rating()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE tools
    SET 
        rating = (
            SELECT COALESCE(AVG(rating)::DECIMAL(3,2), 4.5)
            FROM tool_reviews
            WHERE tool_id = NEW.tool_id
        ),
        review_count = (
            SELECT COUNT(*)
            FROM tool_reviews
            WHERE tool_id = NEW.tool_id
        )
    WHERE id = NEW.tool_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update rating
DROP TRIGGER IF EXISTS trigger_update_tool_rating ON tool_reviews;
CREATE TRIGGER trigger_update_tool_rating
AFTER INSERT OR UPDATE OR DELETE ON tool_reviews
FOR EACH ROW
EXECUTE FUNCTION update_tool_rating();

-- Add RLS policies for tool_reviews
ALTER TABLE tool_reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read reviews
CREATE POLICY "Anyone can read reviews"
ON tool_reviews FOR SELECT
USING (true);

-- Allow authenticated users to insert their own reviews
CREATE POLICY "Users can insert own reviews"
ON tool_reviews FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Allow users to update their own reviews
CREATE POLICY "Users can update own reviews"
ON tool_reviews FOR UPDATE
USING (auth.uid() = user_id);

-- Allow users to delete their own reviews
CREATE POLICY "Users can delete own reviews"
ON tool_reviews FOR DELETE
USING (auth.uid() = user_id);

-- Create table for tool clicks/views tracking
CREATE TABLE IF NOT EXISTS tool_analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    event_type TEXT NOT NULL, -- 'view', 'click', 'use'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tool_analytics_tool_id ON tool_analytics(tool_id);
CREATE INDEX IF NOT EXISTS idx_tool_analytics_event_type ON tool_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_tool_analytics_created_at ON tool_analytics(created_at);

-- Enable RLS for analytics
ALTER TABLE tool_analytics ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert analytics
CREATE POLICY "Anyone can insert analytics"
ON tool_analytics FOR INSERT
WITH CHECK (true);

-- Only allow admins to read analytics (or you can make it public)
CREATE POLICY "Anyone can read analytics"
ON tool_analytics FOR SELECT
USING (true);

