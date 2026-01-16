import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'S-SMDC | Surplus Energy-Based Small Modular Data Center',
  description: 'Turning Stranded Energy into Intelligent Compute. AI Infrastructure powered by wasted renewable energy.',
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
