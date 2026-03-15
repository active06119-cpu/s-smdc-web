import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://s-smdc.com'
const ogImage = `${siteUrl}/og-image.png`
const title = 'S-SMDC | Surplus Energy-Based Small Modular Data Center'
const description = 'Turning Stranded Energy into Intelligent Compute. AI Infrastructure powered by wasted renewable energy.'

export const metadata: Metadata = {
  title,
  description,
  robots: 'index, follow',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    siteName: 'S-SMDC',
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'S-SMDC' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
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
