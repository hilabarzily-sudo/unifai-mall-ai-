import { getSupabase } from '../client'

export const toolsDB = {
  // Get all tools with categories
  async getAllTools() {
    try {
      const supabase = getSupabase()
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
    } catch (error: any) {
      console.error('Error fetching tools:', error)
      return { tools: [], error: error.message }
    }
  },

  // Get tool by ID
  async getToolById(toolId: string) {
    try {
      const supabase = getSupabase()
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
    } catch (error: any) {
      return { tool: null, error: error.message }
    }
  },

  // Get tools by category
  async getToolsByCategory(categoryId: string) {
    try {
      const supabase = getSupabase()
      const { data, error } = await supabase
        .from('category_tools')
        .select(`
          tool:tools(*)
        `)
        .eq('category_id', categoryId)
      
      if (error) throw error
      const tools = data.map((item: any) => item.tool)
      return { tools, error: null }
    } catch (error: any) {
      return { tools: [], error: error.message }
    }
  },

  // Get all categories
  async getAllCategories() {
    try {
      const supabase = getSupabase()
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('order_index', { ascending: true })
      
      if (error) throw error
      return { categories: data, error: null }
    } catch (error: any) {
      return { categories: [], error: error.message }
    }
  },

  // Search tools
  async searchTools(query: string) {
    try {
      const supabase = getSupabase()
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
        .or(`name.ilike.%${query}%,description_en.ilike.%${query}%,description_he.ilike.%${query}%`)
      
      if (error) throw error
      return { tools: data, error: null }
    } catch (error: any) {
      return { tools: [], error: error.message }
    }
  }
}

