import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdcovbyzaapgfamcplrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkY292Ynl6YWFwZ2ZhbWNwbHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzIyNzUsImV4cCI6MjA3ODM0ODI3NX0.HPea_53YtelmnOpQN3Sp6HWfVXzvsEj-DmSU-1cX4gY'

const supabase = createClient(supabaseUrl, supabaseKey)

// מאגר תוכן עשיר לכלים פופולריים
const richToolData = {
  'ChatGPT': {
    logo_url: 'https://cdn.openai.com/assets/apple-touch-icon-mznu49o3.webp',
    pricing_info: 'חינמי / Plus $20/חודש / Team $25/חודש לכל משתמש',
    description_long: 'ChatGPT הוא מודל שפה מתקדם מבית OpenAI המסוגל לנהל שיחות טבעיות, לכתוב קוד, לענות על שאלות, ולסייע במגוון רחב של משימות. גרסת GPT-4 מציעה יכולות מתקדמות כולל ניתוח תמונות, הבנת הקשר ארוך, וביצועים משופרים. הכלי תומך בעברית ומתאים לסטודנטים, מפתחים, כותבים ואנשי מקצוע.',
    target_audience: 'כולם - סטודנטים, מפתחים, כותבים, חוקרים, ואנשי מקצוע בכל תחום',
    speed: 'מהיר מאוד (1-5 שניות)',
    tech: 'GPT-4 / GPT-4 Turbo / GPT-3.5',
    limitations: 'מגבלת 40 הודעות כל 3 שעות ב-GPT-4, ידע עד אפריל 2023, לא מחובר לאינטרנט בגרסה בסיסית',
    featured: true,
    tags: ['צ\'אט', 'כתיבה', 'קוד'],
    examples: [
      { title: 'כתיבת מאמר', prompt: 'כתוב לי מאמר על בינה מלאכותית בחינוך', type: 'text' },
      { title: 'תיקון קוד', prompt: 'תסביר לי את הקוד הזה ותתקן שגיאות', type: 'code' },
      { title: 'תרגום מסמך', prompt: 'תרגם את הטקסט הזה לאנגלית', type: 'text' }
    ]
  },
  'Claude': {
    logo_url: 'https://www.anthropic.com/images/icons/claude-logo.png',
    pricing_info: 'חינמי / Pro $20/חודש / Team $25/חודש לכל משתמש',
    description_long: 'Claude הוא מודל AI מתקדם מבית Anthropic עם דגש על בטיחות ושיחות ארוכות במיוחד. מצטיין בניתוח מסמכים ארוכים (עד 200,000 טוקנים), כתיבה יצירתית ברמה גבוהה, וכתיבת קוד איכותי. תומך בהעלאת קבצים מרובים, ניתוח תמונות, והוא ידוע כמקפיד במיוחד על דיוק והבנת הקשר.',
    target_audience: 'מפתחים, חוקרים, כותבים, אנליסטים וכל מי שצריך לעבוד עם מסמכים ארוכים',
    speed: 'מהיר (2-6 שניות)',
    tech: 'Claude 3 Opus / Sonnet / Haiku',
    limitations: 'מגבלות שימוש בגרסה החינמית (כ-50 הודעות ביום), זמינות לא תמיד מובטחת בשעות שיא',
    featured: true,
    tags: ['צ\'אט', 'כתיבה', 'קוד'],
    examples: [
      { title: 'ניתוח מסמך ארוך', prompt: 'נתח את המסמך הזה וסכם את הנקודות המרכזיות', type: 'text' },
      { title: 'כתיבה יצירתית', prompt: 'כתוב לי סיפור קצר על...', type: 'text' },
      { title: 'סקירת קוד', prompt: 'סקור את הקוד הזה והצע שיפורים', type: 'code' }
    ]
  },
  'Midjourney': {
    logo_url: 'https://cdn.midjourney.com/logo-square.png',
    pricing_info: 'Basic $10/חודש / Standard $30/חודש / Pro $60/חודש / Mega $120/חודש',
    description_long: 'Midjourney הוא מחולל תמונות AI מתקדם ביותר המייצר יצירות אמנות מרהיבות מתיאורים טקסטואליים. נחשב לאחד הכלים המובילים ביצירת תמונות באיכות גבוהה עם סגנונות אמנותיים מגוונים - מפוטוריאליסטי ועד אבסטרקטי. פועל דרך Discord ומציע קהילה פעילה של אמנים ומעצבים.',
    target_audience: 'מעצבים גרפיים, אמנים דיגיטליים, יוצרי תוכן, משווקים ומקצוענים יצירתיים',
    speed: 'בינוני (30-60 שניות לתמונה)',
    tech: 'Diffusion Models v6.0',
    limitations: 'דורש מנוי בתשלום (אין גרסה חינמית), פועל רק דרך Discord, תורים ארוכים בשעות שיא',
    featured: true,
    tags: ['תמונות', 'עיצוב'],
    examples: [
      { title: 'נוף פנטסטי', prompt: 'A mystical forest with glowing mushrooms, fantasy art', type: 'image' },
      { title: 'דמות אנימה', prompt: 'Anime character portrait, detailed, colorful', type: 'image' },
      { title: 'לוגו מודרני', prompt: 'Modern minimalist logo design for tech company', type: 'image' }
    ]
  },
  'DALL-E 3': {
    logo_url: 'https://openai.com/content/images/2023/10/dall-e-3-image.png',
    pricing_info: '$15 ל-115 תמונות או ChatGPT Plus $20/חודש',
    description_long: 'DALL-E 3 הוא מחולל תמונות AI מתקדם מבית OpenAI המייצר תמונות יצירתיות ומציאותיות מתיאורים. משולב ב-ChatGPT Plus ומציע שליטה מדויקת על הפלט, הבנה טובה של הוראות מורכבות, ויכולת להוסיף טקסט לתמונות. מצטיין ביצירת תמונות עם פרטים מדויקים והבנה עמוקה של ההנחיות.',
    target_audience: 'יוצרי תוכן, משווקים דיגיטליים, מעצבים גרפיים ואנשי מקצוע יצירתיים',
    speed: 'מהיר (10-20 שניות)',
    tech: 'DALL-E 3',
    limitations: 'מגבלות על תוכן רגיש, דורש קרדיטים או מנוי ChatGPT Plus, מוגבל למספר תמונות מסוים',
    featured: true,
    tags: ['תמונות', 'עיצוב'],
    examples: [
      { title: 'תמונה ריאליסטית', prompt: 'A photorealistic image of a cat wearing sunglasses', type: 'image' },
      { title: 'איור קריקטורי', prompt: 'Cartoon style illustration of a superhero', type: 'image' },
      { title: 'עיצוב פוסטר', prompt: 'Movie poster design with dramatic lighting', type: 'image' }
    ]
  },
  'GitHub Copilot': {
    logo_url: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png',
    pricing_info: '$10/חודש (חינמי לסטודנטים ותורמי קוד פתוח)',
    description_long: 'GitHub Copilot הוא עוזר AI לכתיבת קוד המשתלב ישירות בעורך הקוד שלך (VS Code, JetBrains, וכו\'). מציע השלמות קוד חכמות בזמן אמת, כתיבת פונקציות שלמות, הצעות לפתרון בעיות, ותיעוד אוטומטי. מבוסס על GPT-4 עם אימון ספציפי על מיליארדי שורות קוד.',
    target_audience: 'מפתחים בכל הרמות - מתחילים ועד מתקדמים, בכל שפות התכנות',
    speed: 'מאוד מהיר (0.5-2 שניות)',
    tech: 'GPT-4 + Codex',
    limitations: 'דורש מנוי, עובד רק בסביבות פיתוח נתמכות, לפעמים מציע קוד לא אופטימלי',
    featured: true,
    tags: ['קוד'],
    examples: [
      { title: 'פונקציה מלאה', prompt: '// Function to validate email', type: 'code' },
      { title: 'בדיקות אוטומטיות', prompt: '// Write unit tests for this function', type: 'code' },
      { title: 'תיעוד קוד', prompt: '// Add documentation comments', type: 'code' }
    ]
  },
  'Canva AI': {
    logo_url: 'https://static.canva.com/web/images/favicon.png',
    pricing_info: 'חינמי / Pro $120/שנה / Teams $150/שנה לכל משתמש',
    description_long: 'Canva הוא פלטפורמת עיצוב גרפי מקיפה עם יכולות AI מתקדמות. כולל כלי Magic Design ליצירת עיצובים אוטומטית, הסרת רקע חכמה, יצירת תמונות מטקסט, הרחבת תמונות, ומעל 250,000 תבניות מוכנות. מתאים לעיצוב פוסטים, מצגות, לוגואים, ועוד.',
    target_audience: 'מעצבים, משווקים, מנהלי רשתות חברתיות, יזמים וכל מי שצריך עיצוב מהיר',
    speed: 'מהיר (3-10 שניות)',
    tech: 'Magic Studio AI Suite',
    limitations: 'תכונות AI מתקדמות דורשות מנוי Pro, מגבלה על מספר יצירות AI בחודש',
    featured: true,
    tags: ['עיצוב', 'תמונות', 'מצגות'],
    examples: [
      { title: 'פוסט לאינסטגרם', prompt: 'Create an Instagram post for a coffee shop', type: 'design' },
      { title: 'לוגו לעסק', prompt: 'Design a modern logo for tech startup', type: 'design' },
      { title: 'מצגת מכירות', prompt: 'Create a sales presentation', type: 'presentation' }
    ]
  },
  'Grammarly': {
    logo_url: 'https://static.grammarly.com/assets/files/efe57d016d9efff36da7884c193b646b/favicon.svg',
    pricing_info: 'חינמי / Premium $12/חודש / Business $15/חודש לכל משתמש',
    description_long: 'Grammarly הוא כלי בדיקת דקדוק וסגנון כתיבה מתקדם המשתמש ב-AI. מזהה טעויות דקדוק, איות ופיסוק, מציע שיפורים בסגנון הכתיבה, בהירות וטון. משתלב בדפדפן, Word, Gmail, Google Docs ועוד. גרסת Premium מציעה הצעות מתקדמות לשיפור הכתיבה.',
    target_audience: 'כותבים, סטודנטים, אנשי מקצוע וכל מי שכותב באנגלית',
    speed: 'מיידי (real-time)',
    tech: 'NLP + Machine Learning',
    limitations: 'תמיכה מוגבלת בעברית, חלק מהתכונות המתקדמות דורשות Premium',
    featured: false,
    tags: ['כתיבה'],
    examples: [
      { title: 'תיקון דקדוק', prompt: 'Their going to the store', type: 'text' },
      { title: 'שיפור סגנון', prompt: 'This is very very good', type: 'text' },
      { title: 'התאמת טון', prompt: 'Convert this to formal tone', type: 'text' }
    ]
  },
  'Notion AI': {
    logo_url: 'https://www.notion.so/front-static/favicon.ico',
    pricing_info: '$10/חודש (נוסף למנוי Notion)',
    description_long: 'Notion AI הוא עוזר כתיבה ומחשבה משולב ישירות ב-Notion. מסייע בכתיבה, סיכום מסמכים, תרגום, עריכה, ויצירת תוכן. מאפשר לארגן מחשבות, ליצור מסמכים מורכבים, ולשפר פרודוקטיביות. משתלב בצורה חלקה עם כל התכונות של Notion.',
    target_audience: 'כותבים, סטודנטים, מנהלי פרויקטים וכל מי שמשתמש ב-Notion',
    speed: 'מהיר (2-5 שניות)',
    tech: 'Custom LLM',
    limitations: 'דורש חשבון Notion ומנוי נוסף ל-AI, מוגבל למספר בקשות מסוים בחודש',
    featured: false,
    tags: ['כתיבה'],
    examples: [
      { title: 'סיכום פגישה', prompt: 'Summarize these meeting notes', type: 'text' },
      { title: 'כתיבת מאמר', prompt: 'Write a blog post about...', type: 'text' },
      { title: 'תרגום תוכן', prompt: 'Translate this page to Hebrew', type: 'text' }
    ]
  }
}

// לוגואים ברירת מחדל לפי קטגוריה
const defaultLogos = {
  'עיצוב ואמנות': '🎨',
  'כתיבה ותוכן': '✍️',
  'מחקר וניתוח': '🔬',
  'קוד ופיתוח': '💻',
  'פרודוקטיביות': '⚡',
  'וידאו ומולטימדיה': '🎬',
  'אודיו ומוזיקה': '🎵',
  'שיווק ו-SEO': '📈',
  'חינוך ולמידה': '📚',
  'עסקים וכספים': '💼'
}

// מיפוי תגיות לפי שם כלי וקטגוריה
function getTagsForTool(toolName, category) {
  const tags = []
  
  // תגיות לפי שם
  if (toolName.includes('Chat') || toolName.includes('Claude') || toolName.includes('GPT') || toolName.includes('Bard')) {
    tags.push('צ\'אט')
  }
  if (toolName.includes('Code') || toolName.includes('Copilot') || toolName.includes('Codeium') || toolName.includes('Replit')) {
    tags.push('קוד')
  }
  if (toolName.includes('DALL-E') || toolName.includes('Midjourney') || toolName.includes('Stable') || toolName.includes('Image')) {
    tags.push('תמונות')
  }
  if (toolName.includes('Video') || toolName.includes('Runway') || toolName.includes('Synthesia')) {
    tags.push('וידאו')
  }
  if (toolName.includes('Music') || toolName.includes('Audio') || toolName.includes('Sound') || toolName.includes('Voice')) {
    tags.push('מוזיקה')
  }
  if (toolName.includes('Slides') || toolName.includes('Presentation') || toolName.includes('Gamma') || toolName.includes('Tome')) {
    tags.push('מצגות')
  }
  
  // תגיות לפי קטגוריה
  if (category?.includes('כתיבה')) tags.push('כתיבה')
  if (category?.includes('עיצוב')) tags.push('עיצוב')
  if (category?.includes('קוד')) tags.push('קוד')
  if (category?.includes('וידאו')) tags.push('וידאו')
  
  return [...new Set(tags)] // הסרת כפילויות
}

async function populateAllData() {
  console.log('🚀 מתחיל מילוי מלא של כל הטבלאות...\n')
  
  let stats = {
    toolsUpdated: 0,
    toolTagsCreated: 0,
    examplesCreated: 0,
    errors: 0
  }
  
  try {
    // שלב 1: שליפת כל הנתונים
    console.log('📊 שולף נתונים...')
    const { data: tools } = await supabase.from('tools').select('*').order('name')
    const { data: tags } = await supabase.from('tags').select('*')
    const { data: categories } = await supabase.from('categories').select('*')
    const { data: categoryTools } = await supabase.from('category_tools').select('tool_id, category_id')
    
    console.log(`  ✓ ${tools.length} כלים`)
    console.log(`  ✓ ${tags.length} תגיות`)
    console.log(`  ✓ ${categories.length} קטגוריות\n`)
    
    // יצירת מפה של tool_id -> category
    const toolCategoryMap = {}
    for (const ct of categoryTools) {
      const category = categories.find(c => c.id === ct.category_id)
      if (category) {
        toolCategoryMap[ct.tool_id] = category.name_he
      }
    }
    
    // שלב 2: עדכון כלים
    console.log('🔄 מעדכן כלים:\n')
    
    for (const tool of tools) {
      try {
        const toolCategory = toolCategoryMap[tool.id] || 'כללי'
        const richData = richToolData[tool.name]
        const updates = {}
        
        // אם יש תוכן עשיר - השתמש בו
        if (richData) {
          console.log(`  ⭐ ${tool.name} - עדכון עשיר`)
          Object.assign(updates, {
            logo_url: richData.logo_url,
            pricing_info: richData.pricing_info,
            description_long: richData.description_long,
            target_audience: richData.target_audience,
            speed: richData.speed,
            tech: richData.tech,
            limitations: richData.limitations,
            featured: richData.featured
          })
        } else if (!tool.logo_url) {
          // אם אין לוגו - תן emoji לפי קטגוריה
          console.log(`  📝 ${tool.name} - עדכון בסיסי`)
          updates.logo_url = defaultLogos[toolCategory] || '🔧'
        }
        
        // עדכן רק אם יש שינויים
        if (Object.keys(updates).length > 0) {
          const { error } = await supabase
            .from('tools')
            .update(updates)
            .eq('id', tool.id)
          
          if (error) throw error
          stats.toolsUpdated++
        }
        
        // שלב 3: חיבור תגיות
        const toolTags = richData?.tags || getTagsForTool(tool.name, toolCategory)
        
        for (const tagName of toolTags) {
          const tag = tags.find(t => t.name_he === tagName)
          if (tag) {
            // בדוק אם הקשר כבר קיים
            const { data: existing } = await supabase
              .from('tool_tags')
              .select('id')
              .eq('tool_id', tool.id)
              .eq('tag_id', tag.id)
              .single()
            
            if (!existing) {
              const { error } = await supabase
                .from('tool_tags')
                .insert({ tool_id: tool.id, tag_id: tag.id })
              
              if (!error) {
                stats.toolTagsCreated++
              }
            }
          }
        }
        
        // שלב 4: יצירת דוגמאות
        const examples = richData?.examples || [
          { title: `דוגמה ל-${tool.name}`, prompt: `השתמש ב-${tool.name} כדי...`, type: 'general' }
        ]
        
        for (const example of examples) {
          const { error } = await supabase
            .from('tool_examples')
            .insert({
              tool_id: tool.id,
              title: example.title,
              prompt: example.prompt,
              example_type: example.type,
              result: `תוצאה לדוגמה ל-${tool.name}`
            })
          
          if (!error) {
            stats.examplesCreated++
          } else {
            // Silent fail for now
          }
        }
        
        // המתן קצר למניעת rate limiting
        await new Promise(resolve => setTimeout(resolve, 100))
        
      } catch (error) {
        console.error(`  ❌ שגיאה ב-${tool.name}:`, error.message)
        stats.errors++
      }
    }
    
    // סיכום
    console.log('\n' + '='.repeat(50))
    console.log('📊 סיכום:')
    console.log('='.repeat(50))
    console.log(`✅ כלים שעודכנו: ${stats.toolsUpdated}`)
    console.log(`✅ קשרי כלים-תגיות: ${stats.toolTagsCreated}`)
    console.log(`✅ דוגמאות שנוצרו: ${stats.examplesCreated}`)
    console.log(`❌ שגיאות: ${stats.errors}`)
    console.log('='.repeat(50))
    
  } catch (error) {
    console.error('❌ שגיאה כללית:', error.message)
  }
  
  process.exit(0)
}

populateAllData()

