import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdcovbyzaapgfamcplrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkY292Ynl6YWFwZ2ZhbWNwbHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzIyNzUsImV4cCI6MjA3ODM0ODI3NX0.HPea_53YtelmnOpQN3Sp6HWfVXzvsEj-DmSU-1cX4gY'

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkAllTables() {
  console.log('🔍 בודק את כל הטבלאות ב-Supabase...\n')
  
  const tables = [
    'tools',
    'categories',
    'favorites',
    'saved_prompts',
    'tool_examples',
    'user_profiles',
    'tags',
    'tool_tags',
    'category_tools',
    'tool_usage_history',
    'user_history',
    'notifications',
    'device_sessions',
    'user_prompts',
    'user_push_tokens'
  ]
  
  for (const table of tables) {
    try {
      const { data, error, count } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true })
      
      if (error) {
        console.log(`❌ ${table}: שגיאה - ${error.message}`)
      } else {
        console.log(`✅ ${table}: ${count || 0} רשומות`)
      }
    } catch (err) {
      console.log(`❌ ${table}: שגיאה - ${err.message}`)
    }
  }
  
  // Show sample data from tools
  console.log('\n📋 דוגמה של כלים:')
  const { data: tools } = await supabase
    .from('tools')
    .select('id, name, description_he, is_free, rating')
    .limit(3)
  
  console.log(JSON.stringify(tools, null, 2))
  
  // Show categories
  console.log('\n📂 קטגוריות:')
  const { data: categories } = await supabase
    .from('categories')
    .select('id, name_he, icon')
  
  console.log(JSON.stringify(categories, null, 2))
  
  process.exit(0)
}

checkAllTables()

