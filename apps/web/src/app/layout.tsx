import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'UnifAI Mall - AI Tools Marketplace',
  description: 'Discover and explore the best AI tools for your needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}

