import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DICKBUTT - The Most Ridiculous BTC Meme Token Ever",
  description: "The most irreverent BTC meme token on Odin.fun - Buy now or forever be a loser!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="dickbutt-cursor font-comic">{children}</body>
    </html>
  )
}


import './globals.css'