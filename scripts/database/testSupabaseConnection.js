import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdcovbyzaapgfamcplrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkY292Ynl6YWFwZ2ZhbWNwbHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzIyNzUsImV4cCI6MjA3ODM0ODI3NX0.HPea_53YtelmnOpQN3Sp6HWfVXzvsEj-DmSU-1cX4gY'

const supabase = createClient(supabaseUrl, supabaseKey)

console.log('🔌 מנסה להתחבר ל-Supabase...\n')

async function testConnection() {
  try {
    // Test 1: Fetch tools
    console.log('📦 בודק גישה לטבלת tools...')
    const { data: tools, error: toolsError } = await supabase
      .from('tools')
      .select('id, name, description_he')
      .limit(3)
    
    if (toolsError) {
      console.error('❌ שגיאה בגישה ל-tools:', toolsError.message)
      console.error('📄 פרטים:', JSON.stringify(toolsError, null, 2))
    } else {
      console.log(`✅ tools: ${tools.length} כלים נמצאו`)
      console.log('דוגמה:', tools[0]?.name || 'אין נתונים')
    }
    
    // Test 2: Fetch categories
    console.log('\n📂 בודק גישה לטבלת categories...')
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('id, name_he, icon')
      .limit(3)
    
    if (catError) {
      console.error('❌ שגיאה בגישה ל-categories:', catError.message)
      console.error('📄 פרטים:', JSON.stringify(catError, null, 2))
    } else {
      console.log(`✅ categories: ${categories.length} קטגוריות נמצאו`)
      console.log('דוגמה:', categories[0]?.name_he || 'אין נתונים')
    }
    
    // Test 3: Fetch with relations
    console.log('\n🔗 בודק גישה עם קשרים (tools + category_tools)...')
    const { data: toolsWithCat, error: relError } = await supabase
      .from('tools')
      .select(`
        id,
        name,
        category_tools(
          category:categories(name_he)
        )
      `)
      .limit(2)
    
    if (relError) {
      console.error('❌ שגיאה בגישה לקשרים:', relError.message)
      console.error('📄 פרטים:', JSON.stringify(relError, null, 2))
    } else {
      console.log(`✅ tools עם קשרים: ${toolsWithCat.length} כלים נמצאו`)
      console.log('דוגמה:', JSON.stringify(toolsWithCat[0], null, 2))
    }
    
    console.log('\n' + '='.repeat(60))
    console.log('📊 סיכום:')
    if (!toolsError && !catError && !relError) {
      console.log('✅ הכל תקין! הבעיה כנראה בצד הקליינט (React)')
    } else {
      console.log('❌ יש בעיית הרשאות RLS - צריך להריץ את הסקריפט:')
      console.log('   scripts/database/fix-all-rls-policies.sql')
      console.log('   ב-Supabase SQL Editor')
    }
    console.log('='.repeat(60))
    
  } catch (error) {
    console.error('💥 שגיאה כללית:', error)
  }
}

testConnection()

