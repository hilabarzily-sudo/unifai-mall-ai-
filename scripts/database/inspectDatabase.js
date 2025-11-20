import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdcovbyzaapgfamcplrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkY292Ynl6YWFwZ2ZhbWNwbHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzIyNzUsImV4cCI6MjA3ODM0ODI3NX0.HPea_53YtelmnOpQN3Sp6HWfVXzvsEj-DmSU-1cX4gY'

const supabase = createClient(supabaseUrl, supabaseKey)

async function inspectDatabase() {
  console.log('🔍 בודק מבנה מפורט של המסד...\n')
  
  // Get sample tools with all fields
  console.log('📊 בודק שדות בטבלת tools:')
  const { data: sampleTool } = await supabase
    .from('tools')
    .select('*')
    .limit(1)
    .single()
  
  if (sampleTool) {
    console.log('שדות קיימים:')
    Object.keys(sampleTool).forEach(key => {
      console.log(`  ✓ ${key}: ${typeof sampleTool[key]} = ${sampleTool[key]?.toString()?.substring(0, 50) || 'null'}`)
    })
  }
  
  console.log('\n📊 בודק קטגוריות:')
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
  
  console.log(`  ✓ ${categories.length} קטגוריות:`)
  categories.forEach(cat => {
    console.log(`    - ${cat.name_he} (${cat.name_en}) ${cat.icon}`)
  })
  
  console.log('\n📊 בודק תגיות:')
  const { data: tags } = await supabase
    .from('tags')
    .select('*')
  
  console.log(`  ✓ ${tags.length} תגיות:`)
  tags.forEach(tag => {
    console.log(`    - ${tag.name_he} (${tag.name_en})`)
  })
  
  console.log('\n📊 בודק קשרים:')
  const { data: categoryTools } = await supabase
    .from('category_tools')
    .select('*')
  console.log(`  ✓ ${categoryTools.length} קשרי כלים-קטגוריות`)
  
  const { data: toolTags } = await supabase
    .from('tool_tags')
    .select('*')
  console.log(`  ✓ ${toolTags.length} קשרי כלים-תגיות`)
  
  console.log('\n📊 בודק דוגמאות כלים:')
  const { data: examples } = await supabase
    .from('tool_examples')
    .select('*')
  console.log(`  ✓ ${examples?.length || 0} דוגמאות`)
  
  // Check which tools don't have complete data
  console.log('\n📊 בודק כלים ללא תוכן מלא:')
  const { data: incompleteTools } = await supabase
    .from('tools')
    .select('id, name, url, logo_url, pricing_info, description_long')
  
  const missingUrl = incompleteTools.filter(t => !t.url).length
  const missingLogo = incompleteTools.filter(t => !t.logo_url).length
  const missingPricing = incompleteTools.filter(t => !t.pricing_info).length
  const missingLongDesc = incompleteTools.filter(t => !t.description_long).length
  
  console.log(`  ⚠️ ${missingUrl} כלים ללא URL`)
  console.log(`  ⚠️ ${missingLogo} כלים ללא לוגו`)
  console.log(`  ⚠️ ${missingPricing} כלים ללא מידע מחיר`)
  console.log(`  ⚠️ ${missingLongDesc} כלים ללא תיאור מורחב`)
  
  // Get list of all tools
  console.log('\n📋 רשימת כל הכלים:')
  const { data: allTools } = await supabase
    .from('tools')
    .select('id, name, is_free')
    .order('name')
  
  allTools.forEach((tool, idx) => {
    console.log(`  ${idx + 1}. ${tool.name} ${tool.is_free ? '(חינמי)' : '(בתשלום)'}`)
  })
  
  process.exit(0)
}

inspectDatabase()

