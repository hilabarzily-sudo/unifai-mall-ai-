// Transform tool from database format to app format
export function transformTool(dbTool) {
  if (!dbTool) return null
  
  // Extract categories
  const categories = dbTool.category_tools?.map(ct => ct.category) || []
  const primaryCategory = categories[0]?.name_he || categories[0]?.name_en || 'כללי'
  
  // Extract tags
  const tags = dbTool.tool_tags?.map(tt => tt.tag?.name_he) || []
  
  // Determine icon based on category or use emoji
  let icon = '🔧'
  if (primaryCategory.includes('עיצוב') || primaryCategory.includes('אמנות')) icon = '🎨'
  else if (primaryCategory.includes('כתיבה') || primaryCategory.includes('תוכן')) icon = '✍️'
  else if (primaryCategory.includes('מחקר')) icon = '🔬'
  else if (primaryCategory.includes('קוד') || primaryCategory.includes('פיתוח')) icon = '💻'
  else if (primaryCategory.includes('פרודוקטיביות')) icon = '⚡'
  else if (primaryCategory.includes('וידאו')) icon = '🎬'
  else if (primaryCategory.includes('אודיו')) icon = '🎵'
  else if (primaryCategory.includes('שיווק')) icon = '📈'
  else if (primaryCategory.includes('חינוך')) icon = '📚'
  else if (primaryCategory.includes('עסקים')) icon = '💼'
  
  return {
    id: dbTool.id,
    name: dbTool.name,
    icon: icon,
    category: primaryCategory,
    description: dbTool.description_he || dbTool.description_en || '',
    url: dbTool.url,
    logoUrl: dbTool.logo_url,
    tags: tags.length > 0 ? tags : [dbTool.is_free ? 'חינמי' : 'בתשלום'],
    isFree: dbTool.is_free,
    pricing: dbTool.pricing_info,
    rating: dbTool.rating || 4.5,
    featured: dbTool.rating >= 4.7,
  }
}

// Transform multiple tools
export function transformTools(dbTools) {
  if (!dbTools || !Array.isArray(dbTools)) return []
  return dbTools.map(transformTool).filter(Boolean)
}

// Transform category
export function transformCategory(dbCategory) {
  if (!dbCategory) return null
  
  return {
    id: dbCategory.id,
    name: dbCategory.name_he || dbCategory.name_en,
    nameEn: dbCategory.name_en,
    nameHe: dbCategory.name_he,
    icon: dbCategory.icon || '📁',
    description: dbCategory.description_he,
    order: dbCategory.order_index
  }
}

// Transform saved prompt
export function transformPrompt(dbPrompt) {
  if (!dbPrompt) return null
  
  return {
    id: dbPrompt.id,
    text: dbPrompt.prompt_text,
    tool: dbPrompt.tool?.name || 'Unknown',
    toolId: dbPrompt.tool_id,
    parameters: dbPrompt.parameters || {},
    createdAt: dbPrompt.created_at,
    savedAt: formatRelativeTime(dbPrompt.created_at),
    resultUrl: dbPrompt.result_url
  }
}

// Transform tool example
export function transformExample(dbExample) {
  if (!dbExample) return null
  
  return {
    id: dbExample.id,
    image: dbExample.image_url,
    prompt: dbExample.prompt_text,
    tool: dbExample.tool?.name || 'Unknown',
    toolId: dbExample.tool_id,
    parameters: dbExample.parameters || {},
    type: 'image',
    isFeatured: dbExample.is_featured,
    createdAt: dbExample.created_at
  }
}

// Format relative time (Hebrew)
export function formatRelativeTime(dateString) {
  if (!dateString) return ''
  
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)
  
  if (diffMins < 1) return 'עכשיו'
  if (diffMins < 60) return `לפני ${diffMins} דקות`
  if (diffHours < 24) return `לפני ${diffHours} שעות`
  if (diffDays === 1) return 'אתמול'
  if (diffDays < 7) return `לפני ${diffDays} ימים`
  if (diffWeeks === 1) return 'לפני שבוע'
  if (diffWeeks < 4) return `לפני ${diffWeeks} שבועות`
  
  return date.toLocaleDateString('he-IL')
}

// Group tools by category
export function groupToolsByCategory(tools, categories) {
  const grouped = {}
  
  categories.forEach(category => {
    grouped[category.id] = {
      ...category,
      tools: []
    }
  })
  
  tools.forEach(tool => {
    // Add tool to its primary category
    if (tool.categoryId && grouped[tool.categoryId]) {
      grouped[tool.categoryId].tools.push(tool)
    }
  })
  
  return Object.values(grouped).filter(cat => cat.tools.length > 0)
}

