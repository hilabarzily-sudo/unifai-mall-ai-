import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qdcovbyzaapgfamcplrt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkY292Ynl6YWFwZ2ZhbWNwbHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzIyNzUsImV4cCI6MjA3ODM0ODI3NX0.HPea_53YtelmnOpQN3Sp6HWfVXzvsEj-DmSU-1cX4gY'

const supabase = createClient(supabaseUrl, supabaseKey)

// Enhanced data for popular AI tools
const toolEnhancements = {
  'ChatGPT': {
    url: 'https://chat.openai.com',
    pricing_info: 'חינמי / Plus $20/חודש',
    description_long: 'מודל שפה מתקדם מבית OpenAI המסוגל לנהל שיחות, לכתוב קוד, לענות על שאלות ולסייע במגוון משימות. גרסת GPT-4 מציעה יכולות מתקדמות יותר כולל ניתוח תמונות והבנת הקשר ארוך.',
    target_audience: 'מתאים לכולם - סטודנטים, מפתחים, כותבים, חוקרים, ואנשי מקצוע',
    speed: 'מהיר (1-5 שניות)',
    tech: 'GPT-4 / GPT-3.5-turbo',
    limitations: 'מגבלת 40 הודעות/3 שעות ב-GPT-4, ידע עד אפריל 2023',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    featured: true
  },
  'Claude': {
    url: 'https://claude.ai',
    pricing_info: 'חינמי / Pro $20/חודש',
    description_long: 'מודל AI מתקדם מבית Anthropic עם דגש על בטיחות ושיחות ארוכות. מצטיין בניתוח מסמכים ארוכים, כתיבה יצירתית וקוד איכותי. תומך בהעלאת קבצים וניתוח תמונות.',
    target_audience: 'מתאים למפתחים, חוקרים, כותבים וכל מי שזקוק לניתוח מסמכים ארוכים',
    speed: 'מהיר (2-6 שניות)',
    tech: 'Claude 3 Opus / Sonnet / Haiku',
    limitations: 'מגבלות שימוש בגרסה החינמית, זמינות לא תמיד מובטחת',
    logo_url: 'https://www.anthropic.com/_next/image?url=%2Fimages%2Ficons%2Fclaude-logo.png',
    featured: true
  },
  'Midjourney': {
    url: 'https://midjourney.com',
    pricing_info: '$10-$120/חודש (אין גרסה חינמית)',
    description_long: 'מחולל תמונות AI מתקדם המייצר יצירות אמנות מרהיבות מתיאורים טקסטואליים. נחשב לאחד הכלים המובילים ביצירת תמונות באיכות גבוהה עם סגנונות אמנותיים מגוונים.',
    target_audience: 'מתאים למעצבים, אמנים דיגיטליים, יוצרי תוכן ומקצוענים יצירתיים',
    speed: 'בינוני (30-60 שניות)',
    tech: 'Diffusion Models v6',
    limitations: 'דורש מנוי בתשלום, פועל דרך Discord בלבד, תורים בשעות שיא',
    logo_url: 'https://cdn.midjourney.com/midjourney-logo.png',
    featured: true
  },
  'DALL-E': {
    url: 'https://openai.com/dall-e',
    pricing_info: '$15 ל-115 תמונות',
    description_long: 'מחולל תמונות AI מבית OpenAI המייצר תמונות יצירתיות ומציאותיות מתיאורים. DALL-E 3 משולב ב-ChatGPT Plus ומציע שליטה טובה יותר על הפלט.',
    target_audience: 'מתאים ליוצרי תוכן, משווקים, מעצבים ואנשי מקצוע יצירתיים',
    speed: 'מהיר (10-15 שניות)',
    tech: 'DALL-E 3',
    limitations: 'מגבלות על תוכן רגיש, דורש קרדיטים או מנוי ChatGPT Plus',
    logo_url: 'https://openai.com/content/images/2022/05/openai-avatar.png',
    featured: true
  },
  'GitHub Copilot': {
    url: 'https://github.com/features/copilot',
    pricing_info: '$10/חודש (חינמי לסטודנטים)',
    description_long: 'עוזר AI לכתיבת קוד המשתלב ישירות ב-IDE. מציע השלמות קוד חכמות, כתיבת פונקציות שלמות, והצעות לפתרון בעיות. מבוסס על GPT-4 עם אימון ספציפי על קוד.',
    target_audience: 'מתאים למפתחים בכל הרמות - מתחילים ועד מתקדמים',
    speed: 'מאוד מהיר (0.5-2 שניות)',
    tech: 'GPT-4 + Codex',
    limitations: 'דורש מנוי, עובד רק בסביבות פיתוח נתמכות',
    logo_url: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png',
    featured: true
  },
  'Canva': {
    url: 'https://canva.com',
    pricing_info: 'חינמי / Pro $120/שנה',
    description_long: 'פלטפורמת עיצוב גרפי עם יכולות AI מתקדמות. כולל כלי Magic Design, הסרת רקע, יצירת תמונות מטקסט ועוד. מציעה תבניות מוכנות למעלה מכל סוג תוכן.',
    target_audience: 'מתאים למעצבים, משווקים, מנהלי רשתות חברתיות ויזמים',
    speed: 'מהיר (3-10 שניות)',
    tech: 'Magic Studio AI Suite',
    limitations: 'תכונות AI מתקדמות דורשות מנוי Pro',
    logo_url: 'https://www.canva.com/favicon.ico',
    featured: true
  },
  'Notion AI': {
    url: 'https://notion.so/product/ai',
    pricing_info: '$10/חודש (נוסף למנוי Notion)',
    description_long: 'עוזר AI משולב ב-Notion לכתיבה, סיכום, תרגום ועריכת תוכן. מסייע בארגון מחשבות, יצירת מסמכים ושיפור פרודוקטיביות.',
    target_audience: 'מתאים לכותבים, סטודנטים, מנהלי פרויקטים ואנשי מקצוע',
    speed: 'מהיר (2-5 שניות)',
    tech: 'Custom LLM',
    limitations: 'דורש חשבון Notion ומנוי נוסף ל-AI',
    logo_url: 'https://www.notion.so/front-static/favicon.ico',
    featured: false
  },
  'Grammarly': {
    url: 'https://grammarly.com',
    pricing_info: 'חינמי / Premium $12/חודש',
    description_long: 'כלי בדיקת דקדוק וסגנון כתיבה מתקדם עם AI. מזהה טעויות, מציע שיפורים בסגנון, בהירות וטון. משתלב בדפדפן, Word, Gmail ועוד.',
    target_audience: 'מתאים לכותבים, סטודנטים, אנשי מקצוע וכל מי שכותב באנגלית',
    speed: 'מיידי (real-time)',
    tech: 'NLP + Machine Learning',
    limitations: 'תמיכה מוגבלת בעברית, חלק מהתכונות דורשות Premium',
    logo_url: 'https://static.grammarly.com/assets/files/efe57d016d9efff36da7884c193b646b/favicon.svg',
    featured: false
  }
}

// Default values for tools without specific data
const getDefaultData = (toolName) => ({
  url: `https://${toolName.toLowerCase().replace(/\s+/g, '')}.com`,
  pricing_info: 'מידע על מחיר יתעדכן בקרוב',
  description_long: `${toolName} הוא כלי AI מתקדם המסייע במשימות שונות. פרטים נוספים יתווספו בקרוב.`,
  target_audience: 'מתאים למגוון קהלים',
  speed: 'משתנה',
  tech: 'AI Technology',
  limitations: 'יתעדכן בקרוב',
  logo_url: null,
  featured: false
})

async function enhanceTools() {
  console.log('🚀 מתחיל עדכון תוכן הכלים...\n')
  
  try {
    // Get all tools
    const { data: tools, error } = await supabase
      .from('tools')
      .select('id, name')
    
    if (error) throw error
    
    console.log(`📊 נמצאו ${tools.length} כלים לעדכון\n`)
    
    let updated = 0
    let skipped = 0
    
    for (const tool of tools) {
      const enhancement = toolEnhancements[tool.name] || getDefaultData(tool.name)
      
      const { error: updateError } = await supabase
        .from('tools')
        .update(enhancement)
        .eq('id', tool.id)
      
      if (updateError) {
        console.log(`❌ שגיאה בעדכון ${tool.name}: ${updateError.message}`)
        skipped++
      } else {
        console.log(`✅ עודכן: ${tool.name}`)
        updated++
      }
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    console.log(`\n📊 סיכום:`)
    console.log(`✅ עודכנו: ${updated} כלים`)
    console.log(`❌ נכשלו: ${skipped} כלים`)
    
  } catch (error) {
    console.error('❌ שגיאה כללית:', error.message)
  }
  
  process.exit(0)
}

enhanceTools()

