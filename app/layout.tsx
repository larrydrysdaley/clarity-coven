import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clarity Coven - Your Intention, Illuminated',
  description: 'Your personal sanctuary for spiritual insight, intentional rituals, and mindful reflection. No fear. No manipulation. Just you, your intentions, and the wisdom within.',
  keywords: ['spiritual guidance', 'tarot', 'psychic readings', 'intention rituals', 'mindfulness'],
  authors: [{ name: 'Clarity Coven' }],
  openGraph: {
    title: 'Clarity Coven - Your Intention, Illuminated',
    description: 'Ethical spiritual insight platform for modern souls',
    type: 'website',
  },
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
