import { Button, Card } from '@repo/ui-components'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            🎨 UnifAI Mall
          </h1>
          <p className="text-xl text-gray-600">
            שוק כלי AI - גלה, חקור והשתמש בכלים החכמים ביותר
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="glass" padding="lg" hover>
            <h2 className="text-2xl font-bold mb-2">🔧 כלים</h2>
            <p className="text-gray-600 mb-4">
              חקור מאות כלי AI לכל צורך
            </p>
            <Button variant="primary">גלה עוד</Button>
          </Card>

          <Card variant="glass" padding="lg" hover>
            <h2 className="text-2xl font-bold mb-2">⭐ מועדפים</h2>
            <p className="text-gray-600 mb-4">
              שמור את הכלים והפרומפטים שלך
            </p>
            <Button variant="secondary">הצג מועדפים</Button>
          </Card>

          <Card variant="glass" padding="lg" hover>
            <h2 className="text-2xl font-bold mb-2">🔍 חיפוש</h2>
            <p className="text-gray-600 mb-4">
              מצא את הכלי המושלם בשבילך
            </p>
            <Button variant="ghost">חפש כעת</Button>
          </Card>
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>✨ Built with Next.js, React, and Turborepo ✨</p>
        </div>
      </div>
    </main>
  )
}

