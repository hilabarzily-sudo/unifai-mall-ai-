import { supabase } from '../lib/supabase'

export const favoritesService = {
  // Get user favorites
  async getUserFavorites(userId) {
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select(`
          *,
          tool:tools(*)
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      const tools = data.map(item => item.tool)
      return { favorites: tools, error: null }
    } catch (error) {
      console.error('Error fetching favorites:', error)
      return { favorites: [], error: error.message }
    }
  },

  // Add to favorites
  async addFavorite(userId, toolId) {
    try {
      const { data, error } = await supabase
        .from('favorites')
        .insert({
          user_id: userId,
          tool_id: toolId
        })
        .select()
        .single()
      
      if (error) throw error
      return { favorite: data, error: null }
    } catch (error) {
      return { favorite: null, error: error.message }
    }
  },

  // Remove from favorites
  async removeFavorite(userId, toolId) {
    try {
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', userId)
        .eq('tool_id', toolId)
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  },

  // Check if tool is favorited
  async isFavorite(userId, toolId) {
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('id')
        .eq('user_id', userId)
        .eq('tool_id', toolId)
        .single()
      
      return { isFavorite: !!data, error: null }
    } catch (error) {
      return { isFavorite: false, error: null }
    }
  }
}

