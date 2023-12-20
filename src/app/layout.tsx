import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Expanzo | Homepage',
  description: 'Expanzo react test built with Next.js, Typescript, TailwindCSS...',
  icons: {
    icon: '/logo.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
