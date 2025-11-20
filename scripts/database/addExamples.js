import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdcovbyzaapgfamcplrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkY292Ynl6YWFwZ2ZhbWNwbHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzIyNzUsImV4cCI6MjA3ODM0ODI3NX0.HPea_53YtelmnOpQN3Sp6HWfVXzvsEj-DmSU-1cX4gY'

const supabase = createClient(supabaseUrl, supabaseKey)

// דוגמאות עשירות לכלים פופולריים
const toolExamples = {
  'ChatGPT': [
    { 
      title: '🎓 סיוע בלימודים',
      prompt: 'תסביר לי את תורת היחסות של איינשטיין בצורה פשוטה',
      example_type: 'education',
      result: 'הסבר ברור ופשוט עם דוגמאות מהחיים',
      output_example: 'תורת היחסות של איינשטיין מסבירה שזמן ומרחב הם יחסיים...'
    },
    { 
      title: '💻 כתיבת קוד',
      prompt: 'כתוב לי פונקציה ב-JavaScript לסינון מערך לפי תנאי',
      example_type: 'code',
      result: 'קוד מלא עם הסברים',
      output_example: 'function filterArray(arr, condition) { return arr.filter(condition); }'
    },
    { 
      title: '✍️ כתיבת תוכן',
      prompt: 'כתוב לי פוסט לאינסטגרם על טיול בצפון',
      example_type: 'content',
      result: 'פוסט מושך עם אמוג\'ים',
      output_example: '🌲 נהניתי מטיול מדהים בצפון! הטבע, האוויר הצח...'
    }
  ],
  'Claude': [
    { 
      title: '📄 ניתוח מסמך ארוך',
      prompt: 'נתח את המסמך הזה וסכם את 5 הנקודות החשובות ביותר',
      example_type: 'analysis',
      result: 'סיכום מסודר ומפורט',
      output_example: '1. נקודה ראשונה...\n2. נקודה שנייה...'
    },
    { 
      title: '🔍 מחקר מעמיק',
      prompt: 'מה ההבדלים בין GPT-4 ל-Claude 3?',
      example_type: 'research',
      result: 'השוואה מפורטת ואובייקטיבית',
      output_example: 'GPT-4: חזק יותר בקוד\nClaude 3: טוב יותר בהקשר ארוך'
    },
    { 
      title: '✨ כתיבה יצירתית',
      prompt: 'כתוב לי סיפור קצר על רובוט שלומד רגשות',
      example_type: 'creative',
      result: 'סיפור מרתק ומעורר מחשבה',
      output_example: 'פעם חי רובוט בעיר עתידנית...'
    }
  ],
  'Midjourney': [
    { 
      title: '🎨 תמונת אמנות',
      prompt: 'mystical forest with glowing mushrooms, detailed, fantasy art --ar 16:9',
      example_type: 'art',
      result: 'תמונה מדהימה בסגנון פנטסטי',
      output_example: '[תמונה של יער מיסטי עם פטריות זוהרות]'
    },
    { 
      title: '📸 דיוקן ריאליסטי',
      prompt: 'professional portrait photo, natural lighting, 35mm lens --ar 3:4',
      example_type: 'photo',
      result: 'דיוקן פוטוריאליסטי',
      output_example: '[תמונה של דיוקן מקצועי]'
    },
    { 
      title: '🏢 עיצוב לוגו',
      prompt: 'modern minimalist logo for tech startup, clean design --no text',
      example_type: 'design',
      result: 'לוגו מודרני ומינימליסטי',
      output_example: '[לוגו מעוצב]'
    }
  ],
  'DALL-E 3': [
    { 
      title: '🖼️ תמונה עם טקסט',
      prompt: 'Create a motivational poster with text "Never Give Up"',
      example_type: 'design',
      result: 'פוסטר מוטיבציה עם הטקסט',
      output_example: '[פוסטר עם הכיתוב Never Give Up]'
    },
    { 
      title: '🎭 דמות אנימציה',
      prompt: 'Cute cartoon character, friendly robot, colorful, Pixar style',
      example_type: 'character',
      result: 'דמות חמודה בסגנון פיקסאר',
      output_example: '[דמות רובוט קריקטורית]'
    },
    { 
      title: '🏞️ נוף טבעי',
      prompt: 'Beautiful sunset over mountains, photorealistic',
      example_type: 'photo',
      result: 'נוף מדהים וריאליסטי',
      output_example: '[שקיעה מעל הרים]'
    }
  ],
  'GitHub Copilot': [
    { 
      title: '⚡ פונקציה מהירה',
      prompt: '// Function to validate email address',
      example_type: 'code',
      result: 'פונקציית ולידציה מלאה',
      output_example: 'function validateEmail(email) { return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email); }'
    },
    { 
      title: '🧪 בדיקות אוטומטיות',
      prompt: '// Write unit tests for the above function',
      example_type: 'test',
      result: 'בדיקות Jest מלאות',
      output_example: 'describe("validateEmail", () => { it("should return true for valid email", ...) });'
    },
    { 
      title: '📝 תיעוד',
      prompt: '// Add JSDoc documentation',
      example_type: 'documentation',
      result: 'תיעוד JSDoc מלא',
      output_example: '/** @param {string} email - Email address to validate\n@returns {boolean} */'
    }
  ],
  'Canva AI': [
    { 
      title: '📱 פוסט לאינסטגרם',
      prompt: 'Create Instagram post for coffee shop grand opening',
      example_type: 'social',
      result: 'עיצוב מושלם לאינסטגרם',
      output_example: '[פוסט מעוצב עם תמונת קפה]'
    },
    { 
      title: '🎤 מצגת',
      prompt: 'Create business presentation about AI trends',
      example_type: 'presentation',
      result: 'מצגת מקצועית עם גרפיקה',
      output_example: '[מצגת 10 שקפים]'
    },
    { 
      title: '🎨 לוגו',
      prompt: 'Design modern logo for fitness brand',
      example_type: 'branding',
      result: 'לוגו מעוצב בגרסאות שונות',
      output_example: '[לוגו עם וריאציות צבע]'
    }
  ],
  'Grammarly': [
    { 
      title: '✅ תיקון דקדוק',
      prompt: 'Their going to the store tomorrow',
      example_type: 'grammar',
      result: 'תיקון: They\'re going to the store tomorrow',
      output_example: 'They\'re going to the store tomorrow'
    },
    { 
      title: '💡 שיפור סגנון',
      prompt: 'This is a very very good idea',
      example_type: 'style',
      result: 'שיפור: This is an excellent idea',
      output_example: 'This is an excellent idea'
    },
    { 
      title: '🎯 התאמת טון',
      prompt: 'Hey! I need this ASAP!',
      example_type: 'tone',
      result: 'טון פורמלי: I kindly request this at your earliest convenience',
      output_example: 'I kindly request this at your earliest convenience'
    }
  ],
  'Notion AI': [
    { 
      title: '📝 סיכום פגישה',
      prompt: 'Summarize these meeting notes into action items',
      example_type: 'productivity',
      result: 'רשימת משימות ממוקדת',
      output_example: '1. John will prepare the report\n2. Sarah will contact clients'
    },
    { 
      title: '✍️ כתיבת מאמר',
      prompt: 'Write a blog post about productivity tips',
      example_type: 'content',
      result: 'מאמר מלא ומסודר',
      output_example: '# 10 Productivity Tips\n\n1. Start your day early...'
    },
    { 
      title: '🌐 תרגום',
      prompt: 'Translate this page to Hebrew',
      example_type: 'translation',
      result: 'תרגום מדויק לעברית',
      output_example: '[התוכן בעברית]'
    }
  ]
}

// דוגמאות כלליות לכלים אחרים
function getGenericExamples(toolName, category) {
  const examples = []
  
  if (category?.includes('וידאו')) {
    examples.push(
      { title: '🎬 יצירת וידאו', prompt: `צור וידאו עם ${toolName}`, example_type: 'video', result: 'וידאו מקצועי' },
      { title: '✂️ עריכת קליפ', prompt: 'ערוך את הסרטון הזה', example_type: 'editing', result: 'קליפ ערוך' }
    )
  } else if (category?.includes('מוזיקה')) {
    examples.push(
      { title: '🎵 יצירת מוזיקה', prompt: 'צור מנגינה רגועה', example_type: 'music', result: 'קובץ מוזיקה' },
      { title: '🎤 דיבוב', prompt: 'המר טקסט לדיבור', example_type: 'voice', result: 'קובץ אודיו' }
    )
  } else if (category?.includes('קוד')) {
    examples.push(
      { title: '💻 כתיבת קוד', prompt: 'כתוב פונקציה', example_type: 'code', result: 'קוד מלא' },
      { title: '🐛 תיקון באגים', prompt: 'מצא שגיאות בקוד', example_type: 'debugging', result: 'קוד מתוקן' }
    )
  } else if (category?.includes('עיצוב')) {
    examples.push(
      { title: '🎨 עיצוב', prompt: `עצב עם ${toolName}`, example_type: 'design', result: 'עיצוב מושלם' },
      { title: '🖼️ יצירת תמונה', prompt: 'צור תמונה', example_type: 'image', result: 'תמונה מעוצבת' }
    )
  } else if (category?.includes('כתיבה')) {
    examples.push(
      { title: '✍️ כתיבת תוכן', prompt: 'כתוב מאמר', example_type: 'content', result: 'תוכן איכותי' },
      { title: '✅ תיקון טקסט', prompt: 'תקן שגיאות', example_type: 'editing', result: 'טקסט מתוקן' }
    )
  } else {
    examples.push(
      { title: `🚀 שימוש ב-${toolName}`, prompt: `איך משתמשים ב-${toolName}?`, example_type: 'general', result: `תוצאה מ-${toolName}` }
    )
  }
  
  return examples
}

async function addExamples() {
  console.log('📚 מוסיף דוגמאות לכל הכלים...\n')
  
  try {
    // שלוף כלים וקטגוריות
    const { data: tools } = await supabase.from('tools').select('id, name').order('name')
    const { data: categories } = await supabase.from('categories').select('*')
    const { data: categoryTools } = await supabase.from('category_tools').select('tool_id, category_id')
    
    // מפה של tool_id -> category
    const toolCategoryMap = {}
    for (const ct of categoryTools) {
      const category = categories.find(c => c.id === ct.category_id)
      if (category) {
        toolCategoryMap[ct.tool_id] = category.name_he
      }
    }
    
    let added = 0
    let errors = 0
    
    for (const tool of tools) {
      try {
        const category = toolCategoryMap[tool.id]
        const examples = toolExamples[tool.name] || getGenericExamples(tool.name, category)
        
        console.log(`📝 ${tool.name} - ${examples.length} דוגמאות`)
        
        for (const example of examples) {
          const { error } = await supabase
            .from('tool_examples')
            .insert({
              tool_id: tool.id,
              title: example.title,
              prompt: example.prompt,
              result: example.result
            })
          
          if (!error) {
            added++
          } else if (error.code !== '23505') { // Ignore duplicate errors
            console.error(`   ❌ שגיאה: ${error.message}`)
            errors++
          }
        }
        
        await new Promise(resolve => setTimeout(resolve, 50))
        
      } catch (error) {
        console.error(`❌ שגיאה ב-${tool.name}:`, error.message)
        errors++
      }
    }
    
    console.log('\n' + '='.repeat(50))
    console.log('📊 סיכום:')
    console.log('='.repeat(50))
    console.log(`✅ דוגמאות שנוספו: ${added}`)
    console.log(`❌ שגיאות: ${errors}`)
    console.log('='.repeat(50))
    
  } catch (error) {
    console.error('❌ שגיאה כללית:', error.message)
  }
  
  process.exit(0)
}

addExamples()

