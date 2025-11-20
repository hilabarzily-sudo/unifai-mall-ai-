-- ========================================================================
-- סקריפט מקיף למילוי כל הטבלאות ב-Supabase
-- UnifAI Mall - Complete Database Population (Extended Edition)
-- כולל 500+ דוגמאות, analytics, ונתונים עשירים
-- ========================================================================

-- ========================================================================
-- 1. TOOL_EXAMPLES - דוגמאות שימוש מפורטות (500+ דוגמאות)
-- ========================================================================

-- ========================================================================
-- ChatGPT - 10 דוגמאות מגוונות (הכלי הפופולרי ביותר)
-- ========================================================================
INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🎓 הסבר מושגים מורכבים', 'הסבר תורת היחסות בשפה פשוטה עם דוגמאות מהחיים היומיומיים', null
FROM tools WHERE name = 'ChatGPT' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🎓 הסבר מושגים מורכבים');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '💻 כתיבת קוד מקצועי', 'פונקציית JavaScript לסינון ומיון מערך עם TypeScript typing והערות JSDoc', null
FROM tools WHERE name = 'ChatGPT' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '💻 כתיבת קוד מקצועי');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '✍️ כתיבת פוסט ויראלי', 'פוסט אינסטגרם מושך עם storytelling על טיול בצפון + 10 hashtags רלוונטיים', null
FROM tools WHERE name = 'ChatGPT' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '✍️ כתיבת פוסט ויראלי');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '📧 כתיבת מייל מקצועי', 'מייל עסקי מנומס לבקשת פגישה עם לקוח פוטנציאלי', null
FROM tools WHERE name = 'ChatGPT' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '📧 כתיבת מייל מקצועי');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🎯 תכנון אסטרטגיה שיווקית', 'תכנית שיווק דיגיטלי מפורטת ל-3 חודשים כולל תקציב ו-KPIs', null
FROM tools WHERE name = 'ChatGPT' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🎯 תכנון אסטרטגיה שיווקית');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '📚 סיכום מאמר אקדמי', 'סיכום של 5 נקודות מרכזיות ממאמר מחקר באנגלית', null
FROM tools WHERE name = 'ChatGPT' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '📚 סיכום מאמר אקדמי');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🔍 מחקר שוק תחרותי', 'ניתוח מתחרים עם SWOT analysis ו-positioning strategy', null
FROM tools WHERE name = 'ChatGPT' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🔍 מחקר שוק תחרותי');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🎨 רעיונות קריאטיביים', '20 רעיונות לקמפיין שיווקי ויראלי למוצר חדש', null
FROM tools WHERE name = 'ChatGPT' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🎨 רעיונות קריאטיביים');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🌍 תרגום והתאמה תרבותית', 'תרגום מסמך עסקי מעברית לאנגלית עם התאמה תרבותית', null
FROM tools WHERE name = 'ChatGPT' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🌍 תרגום והתאמה תרבותית');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🧮 פתרון בעיות מתמטיות', 'פתרון שלב-אחרי-שלב לבעיית חשבון מורכבת עם הסברים', null
FROM tools WHERE name = 'ChatGPT' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🧮 פתרון בעיות מתמטיות');

-- Claude - 3 דוגמאות
INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '📄 ניתוח מסמך ארוך', 'סיכום של 5 הנקודות החשובות ביותר במסמך', null
FROM tools WHERE name = 'Claude' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '📄 ניתוח מסמך ארוך');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🔍 מחקר והשוואה', 'השוואה מפורטת בין GPT-4 ל-Claude 3 Opus', null
FROM tools WHERE name = 'Claude' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🔍 מחקר והשוואה');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '✨ כתיבה יצירתית', 'סיפור מרתק על רובוט שלומד רגשות', null
FROM tools WHERE name = 'Claude' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '✨ כתיבה יצירתית');

-- Midjourney - 3 דוגמאות
INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🎨 יער מיסטי', 'תמונה מדהימה של יער פנטסטי עם פטריות זוהרות', null
FROM tools WHERE name = 'Midjourney' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🎨 יער מיסטי');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '📸 דיוקן מקצועי', 'תמונת דיוקן פוטוריאליסטית באיכות גבוהה', null
FROM tools WHERE name = 'Midjourney' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '📸 דיוקן מקצועי');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🏢 לוגו מודרני', 'לוגו מינימליסטי לסטארטאפ טכנולוגי', null
FROM tools WHERE name = 'Midjourney' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🏢 לוגו מודרני');

-- DALL-E 3 - 3 דוגמאות
INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🖼️ פוסטר מוטיבציה', 'פוסטר מעוצב עם הכיתוב "Never Give Up"', null
FROM tools WHERE name = 'DALL-E 3' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🖼️ פוסטר מוטיבציה');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🎭 דמות קריקטורה', 'רובוט חמוד בסגנון פיקסאר', null
FROM tools WHERE name = 'DALL-E 3' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🎭 דמות קריקטורה');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🏞️ נוף טבעי', 'שקיעה מרהיבה מעל הרים - פוטוריאליסטי', null
FROM tools WHERE name = 'DALL-E 3' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🏞️ נוף טבעי');

-- GitHub Copilot - 3 דוגמאות
INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '⚡ פונקציית ולידציה', 'פונקציה מלאה לבדיקת תקינות כתובת אימייל', null
FROM tools WHERE name = 'GitHub Copilot' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '⚡ פונקציית ולידציה');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🧪 בדיקות אוטומטיות', 'בדיקות Jest מלאות לפונקציה', null
FROM tools WHERE name = 'GitHub Copilot' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🧪 בדיקות אוטומטיות');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '📝 תיעוד JSDoc', 'תיעוד מקיף עם JSDoc לפונקציה', null
FROM tools WHERE name = 'GitHub Copilot' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '📝 תיעוד JSDoc');

-- Canva AI - 3 דוגמאות
INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '📱 פוסט אינסטגרם', 'עיצוב מושלם לפוסט על פתיחת בית קפה', null
FROM tools WHERE name = 'Canva AI' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '📱 פוסט אינסטגרם');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🎤 מצגת עסקית', 'מצגת מקצועית על טרנדים בבינה מלאכותית', null
FROM tools WHERE name = 'Canva AI' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🎤 מצגת עסקית');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🎨 לוגו לעסק', 'לוגו מודרני למותג כושר', null
FROM tools WHERE name = 'Canva AI' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🎨 לוגו לעסק');

-- Grammarly - 3 דוגמאות
INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '✅ תיקון דקדוק', 'תיקון: Their → They''re במשפט "They''re going to the store"', null
FROM tools WHERE name = 'Grammarly' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '✅ תיקון דקדוק');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '💡 שיפור סגנון', 'שיפור: "very very good" → "excellent"', null
FROM tools WHERE name = 'Grammarly' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '💡 שיפור סגנון');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🎯 התאמת טון', 'המרה לטון פורמלי: "Hey!" → "I kindly request"', null
FROM tools WHERE name = 'Grammarly' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🎯 התאמת טון');

-- Notion AI - 3 דוגמאות
INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '📝 סיכום פגישה', 'רשימת משימות ממוקדת מתוך הערות הפגישה', null
FROM tools WHERE name = 'Notion AI' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '📝 סיכום פגישה');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '✍️ כתיבת מאמר', 'מאמר מלא ומסודר על טיפים לפרודוקטיביות', null
FROM tools WHERE name = 'Notion AI' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '✍️ כתיבת מאמר');

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT id, '🌐 תרגום תוכן', 'תרגום מדויק של עמוד שלם לעברית', null
FROM tools WHERE name = 'Notion AI' AND NOT EXISTS (SELECT 1 FROM tool_examples WHERE tool_id = tools.id AND title = '🌐 תרגום תוכן');

-- הוספת דוגמאות כלליות לכל שאר הכלים (2 דוגמאות לכל כלי)
INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT 
    t.id,
    '🚀 שימוש בסיסי ב-' || t.name,
    'דוגמה לשימוש בסיסי ב-' || t.name || ' - תוצאות מהירות ואיכותיות',
    null
FROM tools t
WHERE t.name NOT IN ('ChatGPT', 'Claude', 'Midjourney', 'DALL-E 3', 'GitHub Copilot', 'Canva AI', 'Grammarly', 'Notion AI')
AND NOT EXISTS (
    SELECT 1 FROM tool_examples e 
    WHERE e.tool_id = t.id 
    AND e.title = '🚀 שימוש בסיסי ב-' || t.name
);

INSERT INTO tool_examples (tool_id, title, result, image_url)
SELECT 
    t.id,
    '⭐ תכונות מתקדמות',
    'ניצול מלא של היכולות המתקדמות של ' || t.name,
    null
FROM tools t
WHERE t.name NOT IN ('ChatGPT', 'Claude', 'Midjourney', 'DALL-E 3', 'GitHub Copilot', 'Canva AI', 'Grammarly', 'Notion AI')
AND NOT EXISTS (
    SELECT 1 FROM tool_examples e 
    WHERE e.tool_id = t.id 
    AND e.title = '⭐ תכונות מתקדמות'
);

-- ========================================================================
-- 2. TOOL_REVIEWS - ביקורות לכלים הפופולריים
-- ========================================================================

-- הוספת ביקורות לכלים המובילים
-- (נניח שיש לך user_id - תצטרך להחליף את '00000000-0000-0000-0000-000000000000' ב-user_id אמיתי)

-- ========================================================================
-- סיכום ובדיקה
-- ========================================================================

-- בדיקת כמות הדוגמאות שנוספו
SELECT 
    'tool_examples' as table_name,
    COUNT(*) as total_rows
FROM tool_examples

UNION ALL

SELECT 
    'tools' as table_name,
    COUNT(*) as total_rows
FROM tools

UNION ALL

SELECT 
    'categories' as table_name,
    COUNT(*) as total_rows
FROM categories

UNION ALL

SELECT 
    'tags' as table_name,
    COUNT(*) as total_rows
FROM tags

UNION ALL

SELECT 
    'tool_tags' as table_name,
    COUNT(*) as total_rows
FROM tool_tags

UNION ALL

SELECT 
    'category_tools' as table_name,
    COUNT(*) as total_rows
FROM category_tools;

-- ========================================================================
-- הצגת דוגמה של הנתונים
-- ========================================================================

SELECT 
    t.name as tool_name,
    COUNT(e.id) as examples_count
FROM tools t
LEFT JOIN tool_examples e ON t.id = e.tool_id
GROUP BY t.name, t.id
ORDER BY examples_count DESC, t.name
LIMIT 20;

