"use client"

import { useState } from "react"

export default function TokenomicsJoke() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-16 px-4 dickbutt-bg">
      <h2 className="text-4xl font-bold text-center mb-8 text-dickbutt-orange">Tokenomics (or Whatever)</h2>

      <div className="max-w-3xl mx-auto bg-dickbutt-dark/80 p-8 rounded-lg border-2 border-dickbutt-yellow">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-dickbutt-yellow">Token Distribution</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Dev's Lamborghini Fund</span>
              <span className="font-bold text-dickbutt-yellow">42.0%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Actual Liquidity (maybe)</span>
              <span className="font-bold text-dickbutt-yellow">6.9%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Marketing (Twitter memes)</span>
              <span className="font-bold text-dickbutt-yellow">13.37%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Community (suckers like you)</span>
              <span className="font-bold text-dickbutt-yellow">37.73%</span>
            </div>
          </div>
        </div>

        <div
          className="bg-dickbutt-orange/20 p-6 rounded-lg border border-dickbutt-orange transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="text-2xl font-bold mb-4 text-dickbutt-yellow">Token Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Token Name</span>
              <span className="font-bold text-dickbutt-yellow">DICKBUTT</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Total Supply</span>
              <span className="font-bold text-dickbutt-yellow">69,420,000,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Value Proposition</span>
              <span className="font-bold text-dickbutt-yellow">{isHovered ? "ABSOLUTELY NONE" : "MOON SOON"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Utility</span>
              <span className="font-bold text-dickbutt-yellow">{isHovered ? "LMAO GOOD ONE" : "REVOLUTIONARY"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
