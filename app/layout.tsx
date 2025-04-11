import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'DickButt',
  description: 'The most memeable cryptocurrency on the internet',
  icons: {
    icon: '/images/mascot.png',
    shortcut: '/images/mascot.png',
    apple: '/images/mascot.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://dickbutt.space',
    title: 'DickButt',
    description: 'The most memeable cryptocurrency on the internet',
    siteName: 'DickButt',
    images: [
      {
        url: '/images/logo-banner.png',
        width: 1200,
        height: 630,
        alt: 'DickButt - The most memeable cryptocurrency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DickButt',
    description: 'The most memeable cryptocurrency on the internet',
    images: ['/images/logo-banner.png'],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://dickbutt.space" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="min-h-screen bg-[#FF6600]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}