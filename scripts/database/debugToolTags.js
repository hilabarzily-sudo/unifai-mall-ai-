import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdcovbyzaapgfamcplrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkY292Ynl6YWFwZ2ZhbWNwbHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzIyNzUsImV4cCI6MjA3ODM0ODI3NX0.HPea_53YtelmnOpQN3Sp6HWfVXzvsEj-DmSU-1cX4gY'

const supabase = createClient(supabaseUrl, supabaseKey)

async function debugToolTags() {
  console.log('🔍 בודק מבנה tool_tags ו-tool_examples...\n')
  
  // שלוף ChatGPT
  const { data: chatgpt } = await supabase
    .from('tools')
    .select('*')
    .eq('name', 'ChatGPT')
    .single()
  
  console.log('📋 כלי לדוגמה (ChatGPT):', chatgpt.id)
  
  // שלוף תג 'צ\'אט'
  const { data: tags } = await supabase
    .from('tags')
    .select('*')
  
  console.log('\n📌 תגיות זמינות:')
  tags.forEach(tag => {
    console.log(`  - ${tag.name_he} (ID: ${tag.id})`)
  })
  
  // נסה ליצור קשר
  console.log('\n🔗 מנסה ליצור קשר tool-tag...')
  const chatTag = tags.find(t => t.name_he === 'צ\'אט')
  
  if (!chatTag) {
    console.log('❌ לא נמצאה תגית "צ\'אט"')
    return
  }
  
  const { data: created, error } = await supabase
    .from('tool_tags')
    .insert({
      tool_id: chatgpt.id,
      tag_id: chatTag.id
    })
    .select()
  
  if (error) {
    console.log('❌ שגיאה ביצירת קשר:', error)
  } else {
    console.log('✅ נוצר קשר:', created)
  }
  
  // נסה ליצור דוגמה
  console.log('\n📝 מנסה ליצור דוגמה...')
  const { data: example, error: exampleError } = await supabase
    .from('tool_examples')
    .insert({
      tool_id: chatgpt.id,
      title: 'דוגמה 1',
      prompt: 'זו דוגמה',
      example_type: 'text',
      description: 'תיאור'
    })
    .select()
  
  if (exampleError) {
    console.log('❌ שגיאה ביצירת דוגמה:', exampleError)
  } else {
    console.log('✅ נוצרה דוגמה:', example)
  }
  
  process.exit(0)
}

debugToolTags()

