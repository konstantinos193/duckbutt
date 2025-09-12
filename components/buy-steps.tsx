"use client"

import { useState } from "react"
import Image from "next/image"

// Get environment variable with fallback
const TRADING_URL = process.env.NEXT_PUBLIC_TRADING_URL || "https://spark"

export default function BuySteps() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      title: "Step 1: Get Your Ass to spark",
      description: "Create an account on spark. It's like signing up for OnlyFans but for your wallet.",
      emoji: "🚀",
    },
    {
      title: "Step 2: Deposit Your BTC",
      description: "Send your precious BTC to spark. Yes, you're really doing this.",
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
      <h2 className="text-4xl font-bold text-center mb-12 text-dickbutt-yellow">How to Get DICKBUTT</h2>

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

      <div className="text-center mt-12 bg-dickbutt-dark/80 p-6 rounded-lg max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-dickbutt-yellow mb-4">Contract Address</h3>
        <div className="flex items-center justify-center flex-wrap">
          <code className="bg-dickbutt-dark/80 text-dickbutt-yellow p-2 rounded font-mono text-sm sm:text-base overflow-x-auto max-w-full">
            Coming Soon...
          </code>
          <button
            onClick={() => {
              navigator.clipboard.writeText("Coming Soon...")
              alert("Contract address copied to clipboard!")
            }}
            className="ml-2 p-2 bg-dickbutt-orange/30 hover:bg-dickbutt-orange/50 rounded"
            aria-label="Copy contract address"
          >
            📋
          </button>
        </div>
      </div>
    </section>
  )
}
