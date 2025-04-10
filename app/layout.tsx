import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DickButt',
  description: 'The most memeable cryptocurrency on the internet',
  icons: {
    icon: [
      {
        url: '/images/mascot.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/images/mascot.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    apple: {
      url: '/images/mascot.png',
      sizes: '180x180',
      type: 'image/png'
    }
  }
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
        <link rel="icon" type="image/png" sizes="32x32" href="/images/mascot.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/mascot.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/mascot.png" />
        <meta property="og:title" content="DickButt" />
        <meta property="og:description" content="The most memeable cryptocurrency on the internet" />
        <meta property="og:image" content="/images/logo-banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://dickbutt.space" />
        <meta property="og:type" content="website" />
      </head>
      <body className="min-h-screen bg-[#FF6600]">
        {children}
      </body>
    </html>
  )
}