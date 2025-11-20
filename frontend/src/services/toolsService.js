import { supabase } from '../lib/supabase'

export const toolsService = {
  // Get all tools with categories
  async getAllTools() {
    try {
      const { data, error } = await supabase
        .from('tools')
        .select(`
          *,
          category_tools(
            category:categories(*)
          ),
          tool_tags(
            tag:tags(*)
          )
        `)
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return { tools: data, error: null }
    } catch (error) {
      console.error('Error fetching tools:', error)
      return { tools: [], error: error.message }
    }
  },

  // Get tool by ID
  async getToolById(toolId) {
    try {
      const { data, error } = await supabase
        .from('tools')
        .select(`
          *,
          category_tools(
            category:categories(*)
          ),
          tool_tags(
            tag:tags(*)
          ),
          tool_examples(*)
        `)
        .eq('id', toolId)
        .single()
      
      if (error) throw error
      return { tool: data, error: null }
    } catch (error) {
      return { tool: null, error: error.message }
    }
  },

  // Get tools by category
  async getToolsByCategory(categoryId) {
    try {
      const { data, error } = await supabase
        .from('category_tools')
        .select(`
          tool:tools(*)
        `)
        .eq('category_id', categoryId)
      
      if (error) throw error
      const tools = data.map(item => item.tool)
      return { tools, error: null }
    } catch (error) {
      return { tools: [], error: error.message }
    }
  },

  // Get all categories
  async getAllCategories() {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('order_index', { ascending: true })
      
      if (error) throw error
      return { categories: data, error: null }
    } catch (error) {
      return { categories: [], error: error.message }
    }
  },

  // Get tool examples
  async getToolExamples(toolId) {
    try {
      const { data, error } = await supabase
        .from('tool_examples')
        .select('*')
        .eq('tool_id', toolId)
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false })
      
      if (error) throw error
      return { examples: data, error: null }
    } catch (error) {
      return { examples: [], error: error.message }
    }
  },

  // Search tools
  async searchTools(query) {
    try {
      const { data, error } = await supabase
        .from('tools')
        .select(`
          *,
          category_tools(
            category:categories(*)
          ),
          tool_tags(
            tag:tags(*)
          )
        `)
        .or(`name.ilike.%${query}%,description_he.ilike.%${query}%,description_en.ilike.%${query}%`)
      
      if (error) throw error
      return { tools: data, error: null }
    } catch (error) {
      return { tools: [], error: error.message }
    }
  }
}

