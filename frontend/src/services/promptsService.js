import { supabase } from '../lib/supabase'

export const promptsService = {
  // Get user's saved prompts
  async getUserPrompts(userId) {
    try {
      const { data, error } = await supabase
        .from('saved_prompts')
        .select(`
          *,
          tool:tools(*)
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return { prompts: data, error: null }
    } catch (error) {
      console.error('Error fetching prompts:', error)
      return { prompts: [], error: error.message }
    }
  },

  // Get prompts by tool
  async getPromptsByTool(userId, toolId) {
    try {
      const { data, error } = await supabase
        .from('saved_prompts')
        .select('*')
        .eq('user_id', userId)
        .eq('tool_id', toolId)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return { prompts: data, error: null }
    } catch (error) {
      return { prompts: [], error: error.message }
    }
  },

  // Save prompt
  async savePrompt(userId, toolId, promptText, parameters = {}) {
    try {
      const { data, error } = await supabase
        .from('saved_prompts')
        .insert({
          user_id: userId,
          tool_id: toolId,
          prompt_text: promptText,
          parameters: parameters
        })
        .select()
        .single()
      
      if (error) throw error
      return { prompt: data, error: null }
    } catch (error) {
      return { prompt: null, error: error.message }
    }
  },

  // Delete prompt
  async deletePrompt(promptId, userId) {
    try {
      const { error } = await supabase
        .from('saved_prompts')
        .delete()
        .eq('id', promptId)
        .eq('user_id', userId)
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  },

  // Update prompt
  async updatePrompt(promptId, userId, updates) {
    try {
      const { data, error } = await supabase
        .from('saved_prompts')
        .update(updates)
        .eq('id', promptId)
        .eq('user_id', userId)
        .select()
        .single()
      
      if (error) throw error
      return { prompt: data, error: null }
    } catch (error) {
      return { prompt: null, error: error.message }
    }
  }
}

