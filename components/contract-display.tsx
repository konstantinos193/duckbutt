"use client"

import { useState } from "react"

export default function ContractDisplay() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "Coming Soon..."

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-dickbutt-dark/80 border-2 border-dickbutt-orange rounded-lg p-6 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-dickbutt-yellow mb-4 text-center">Solana Contract Address</h3>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <code className="bg-dickbutt-dark text-dickbutt-yellow p-3 rounded font-mono text-sm sm:text-base break-all">
          {contractAddress}
        </code>

        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-dickbutt-orange/30 hover:bg-dickbutt-orange/50 rounded-full transition-colors flex items-center gap-2"
        >
          <span>{copied ? "Copied! ✓" : "Copy 📋"}</span>
        </button>
      </div>

      <p className="text-white/70 text-center mt-4 text-sm">
        Add this contract to your wallet to view your DICKBUTT balance
      </p>
    </div>
  )
}
