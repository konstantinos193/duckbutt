import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DICKBUTT - The Most Ridiculous Solana Meme Token Ever",
  description: "The most irreverent Solana meme token on letsbonk.fun - Buy now or forever be a loser!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="dickbutt-cursor font-comic">{children}</body>
    </html>
  )
}
