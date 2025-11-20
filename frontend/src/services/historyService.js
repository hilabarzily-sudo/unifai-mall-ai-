import { supabase } from '../lib/supabase'

export const historyService = {
  // Track tool usage
  async trackToolUsage(userId, toolId, promptUsed = null) {
    try {
      const { data, error } = await supabase
        .from('tool_usage_history')
        .insert({
          user_id: userId,
          tool_id: toolId,
          prompt_used: promptUsed
        })
        .select()
        .single()
      
      if (error) throw error
      return { record: data, error: null }
    } catch (error) {
      console.error('Error tracking usage:', error)
      return { record: null, error: error.message }
    }
  },

  // Get user history
  async getUserHistory(userId, limit = 20) {
    try {
      const { data, error } = await supabase
        .from('tool_usage_history')
        .select(`
          *,
          tool:tools(*)
        `)
        .eq('user_id', userId)
        .order('opened_at', { ascending: false })
        .limit(limit)
      
      if (error) throw error
      return { history: data, error: null }
    } catch (error) {
      return { history: [], error: error.message }
    }
  },

  // Get recent tools (last 3 unique)
  async getRecentTools(userId) {
    try {
      const { data, error } = await supabase
        .from('tool_usage_history')
        .select(`
          tool:tools(*)
        `)
        .eq('user_id', userId)
        .order('opened_at', { ascending: false })
        .limit(10)
      
      if (error) throw error
      
      // Get unique tools (last 3)
      const uniqueTools = []
      const seenIds = new Set()
      
      for (const item of data) {
        if (item.tool && !seenIds.has(item.tool.id)) {
          uniqueTools.push(item.tool)
          seenIds.add(item.tool.id)
          if (uniqueTools.length >= 3) break
        }
      }
      
      return { tools: uniqueTools, error: null }
    } catch (error) {
      return { tools: [], error: error.message }
    }
  }
}

