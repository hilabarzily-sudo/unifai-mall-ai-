import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdcovbyzaapgfamcplrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkY292Ynl6YWFwZ2ZhbWNwbHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzIyNzUsImV4cCI6MjA3ODM0ODI3NX0.HPea_53YtelmnOpQN3Sp6HWfVXzvsEj-DmSU-1cX4gY'

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkStructure() {
  console.log('🔍 בודק מבנה טבלאות...\n')
  
  // Try to get one example if exists
  const { data: examples, error } = await supabase
    .from('tool_examples')
    .select('*')
    .limit(1)
  
  if (error) {
    console.log('❌ שגיאה בשליפת tool_examples:', error.message)
    
    // Try manual query to see structure
    console.log('\n🔍 מנסה לקבל מבנה...')
    const { error: structError } = await supabase
      .from('tool_examples')
      .select('id, tool_id, title, prompt, result, example_type, image_url, created_at')
      .limit(1)
    
    if (structError) {
      console.log('❌ גם זה נכשל:', structError.message)
    } else {
      console.log('✅ השדות: id, tool_id, title, prompt, result, example_type, image_url, created_at')
    }
  } else if (examples && examples.length > 0) {
    console.log('📊 מבנה tool_examples:')
    console.log(Object.keys(examples[0]))
  } else {
    console.log('⚠️ אין דוגמאות קיימות, אבל הטבלה תקינה')
    console.log('📊 נראה שהשדות הם: id, tool_id, title, prompt, result, example_type, image_url, created_at')
  }
  
  process.exit(0)
}

checkStructure()

