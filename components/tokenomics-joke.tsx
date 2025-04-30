"use client"

import { useState } from "react"
import Image from "next/image"

export default function WhyDickbutt() {
  const [activeReason, setActiveReason] = useState<number | null>(null)

  const reasons = [
    {
      title: "Because Why Not?",
      description:
        "In a world full of serious tokens with 'utility', sometimes you just need a token shaped like a butt.",
      emoji: "🤷‍♂️",
    },
    {
      title: "Internet Culture",
      description: "DICKBUTT has been making people laugh since 2006. It's basically internet royalty at this point.",
      emoji: "👑",
    },
    {
      title: "Community Vibes",
      description: "Join a community of people who don't take themselves too seriously. We're here for the memes.",
      emoji: "🎭",
    },
    {
      title: "Solana Speed",
      description: "Built on Solana because we're impatient and like our transactions faster than our jokes.",
      emoji: "⚡",
    },
  ]

  return (
    <section className="py-16 px-4 dickbutt-bg">
      <h2 className="text-4xl font-bold text-center mb-8 text-dickbutt-orange">Why DICKBUTT?</h2>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-dickbutt-dark/80 p-6 rounded-lg border-2 ${
                activeReason === index ? "border-dickbutt-yellow scale-105" : "border-dickbutt-orange/50"
              } transition-all duration-300 cursor-pointer`}
              onMouseEnter={() => setActiveReason(index)}
              onMouseLeave={() => setActiveReason(null)}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{reason.emoji}</span>
                <h3 className="text-2xl font-bold text-dickbutt-yellow">{reason.title}</h3>
              </div>
              <p className="text-white/80">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-dickbutt-dark/60 p-6 rounded-lg border-2 border-dickbutt-orange text-center">
          <p className="text-xl text-white/90 mb-4">Still not convinced? Just look at this magnificent specimen:</p>
          <div className="flex justify-center">
            <div className="relative w-40 h-40 animate-bounce-slow">
              <Image
                src="/images/mascot.png"
                alt="DICKBUTT Mascot"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-dickbutt-yellow font-bold mt-4">Majestic, isn't it?</p>
        </div>
      </div>
    </section>
  )
}
