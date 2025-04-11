"use client"

import { useState } from "react"
import Image from "next/image"

// Get environment variable with fallback
const TRADING_URL = process.env.NEXT_PUBLIC_TRADING_URL || "https://funkybit.fun"

export default function BuySteps() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      title: "Step 1: Get Your Ass to funkybit.fun",
      description: "Create an account on funkybit.fun. It's like signing up for OnlyFans but for your wallet.",
      emoji: "🚀",
    },
    {
      title: "Step 2: Deposit Your BTC",
      description: "Send your precious Bitcoin to funkybit.fun. Yes, you're really doing this.",
      emoji: "💰",
    },
    {
      title: "Step 3: Find DICKBUTT",
      description: "Search for DICKBUTT in the trading section. It's the one with the... well, you know.",
      emoji: "🔍",
    },
    {
      title: "Step 4: YOLO Your Life Savings",
      description: "Click buy, enter amount, confirm, and tell your spouse you've made a 'strategic investment'.",
      emoji: "🍆",
    },
  ]

  return (
    <section className="py-16 px-4 retro-bg">
      <h2 className="text-4xl font-bold text-center mb-12 text-dickbutt-yellow">How to Throw Away Your Money</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-dickbutt-dark p-6 rounded-lg border-2 border-dickbutt-orange transform transition-all duration-300 hover:scale-105"
            onMouseEnter={() => setHoveredStep(index)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">{step.emoji}</div>
              <h3 className="text-xl font-bold text-dickbutt-orange">{step.title}</h3>
            </div>
            <p className="text-white/80">{step.description}</p>

            {hoveredStep === index && (
              <div className="mt-4 flex justify-center">
                <Image src="/images/mascot.png" alt="Dickbutt" width={60} height={60} className="animate-bounce-slow" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href={TRADING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-dickbutt-yellow text-dickbutt-dark px-8 py-4 rounded-full font-bold text-xl hover:bg-dickbutt-yellow/90 transition-colors animate-pulse"
        >
          BUY THIS CRAP NOW!
        </a>
      </div>
    </section>
  )
}
