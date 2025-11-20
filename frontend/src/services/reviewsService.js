import { supabase } from '../lib/supabase'

export const reviewsService = {
  // Get all reviews for a tool
  async getToolReviews(toolId) {
    try {
      const { data, error } = await supabase
        .from('tool_reviews')
        .select(`
          *,
          user:user_id (
            id,
            email
          )
        `)
        .eq('tool_id', toolId)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return { reviews: data, error: null }
    } catch (error) {
      console.error('Error fetching reviews:', error)
      return { reviews: [], error: error.message }
    }
  },

  // Get user's review for a specific tool
  async getUserReview(userId, toolId) {
    try {
      const { data, error } = await supabase
        .from('tool_reviews')
        .select('*')
        .eq('user_id', userId)
        .eq('tool_id', toolId)
        .single()
      
      if (error && error.code !== 'PGRST116') throw error // PGRST116 = not found
      return { review: data, error: null }
    } catch (error) {
      return { review: null, error: error.message }
    }
  },

  // Add or update a review
  async upsertReview(userId, toolId, rating, reviewText = '') {
    try {
      const { data, error } = await supabase
        .from('tool_reviews')
        .upsert({
          user_id: userId,
          tool_id: toolId,
          rating: rating,
          review_text: reviewText,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,tool_id'
        })
        .select()
        .single()
      
      if (error) throw error
      return { review: data, error: null }
    } catch (error) {
      return { review: null, error: error.message }
    }
  },

  // Delete a review
  async deleteReview(userId, toolId) {
    try {
      const { error } = await supabase
        .from('tool_reviews')
        .delete()
        .eq('user_id', userId)
        .eq('tool_id', toolId)
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  },

  // Mark review as helpful
  async markHelpful(reviewId) {
    try {
      const { data, error } = await supabase
        .from('tool_reviews')
        .select('helpful_count')
        .eq('id', reviewId)
        .single()
      
      if (error) throw error
      
      const { error: updateError } = await supabase
        .from('tool_reviews')
        .update({ helpful_count: (data.helpful_count || 0) + 1 })
        .eq('id', reviewId)
      
      if (updateError) throw updateError
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  },

  // Get review statistics for a tool
  async getReviewStats(toolId) {
    try {
      const { data, error } = await supabase
        .from('tool_reviews')
        .select('rating')
        .eq('tool_id', toolId)
      
      if (error) throw error
      
      if (!data || data.length === 0) {
        return {
          stats: {
            averageRating: 0,
            totalReviews: 0,
            distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
          },
          error: null
        }
      }
      
      const totalReviews = data.length
      const averageRating = data.reduce((sum, r) => sum + r.rating, 0) / totalReviews
      
      const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
      data.forEach(r => {
        distribution[r.rating] = (distribution[r.rating] || 0) + 1
      })
      
      return {
        stats: {
          averageRating: parseFloat(averageRating.toFixed(2)),
          totalReviews,
          distribution
        },
        error: null
      }
    } catch (error) {
      return { stats: null, error: error.message }
    }
  }
}

