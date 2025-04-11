"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import GlitchText from "@/components/glitch-text"
import MarqueeBanner from "@/components/marquee-banner"
import FloatingDickbutts from "@/components/floating-dickbutts"
import FaqSection from "@/components/faq-section"
import BuySteps from "@/components/buy-steps"
import TokenomicsJoke from "@/components/tokenomics-joke"
import FunnyButton from "@/components/funny-button"

// Get environment variables with fallbacks
const TRADING_URL = process.env.NEXT_PUBLIC_TRADING_URL || "https://funkybit.fun"
const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL || "#"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const closePopup = () => {
    setShowPopup(false)
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <FloatingDickbutts count={8} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dickbutt-dark">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-dickbutt-orange/30 via-dickbutt-yellow/20 to-purple-500/30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NHgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,102,0,0.4)_0%,transparent_70%)] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,215,0,0.5)_0%,transparent_60%)] mix-blend-screen"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/images/logo-banner.png"
                alt="DICKBUTT Logo"
                width={600}
                height={200}
                className="object-contain"
                priority
              />
            </div>

            <GlitchText
              text="BITCOIN'S LEGENDARY MEME TOKEN"
              className="text-4xl md:text-6xl font-bold mb-6 transform -rotate-2"
            />

            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl">
              Inspired by <span className="text-dickbutt-yellow font-bold">Inscription #1</span>, the second inscription
              ever on Bitcoin!
            </p>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Trading exclusively on <span className="text-dickbutt-yellow font-bold">funkybit.fun</span> - join the
              community today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FunnyButton text="BUY DICKBUTT" href={TRADING_URL} className="bg-dickbutt-yellow text-dickbutt-dark" />

              <button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 right-0 md:right-20 w-40 md:w-64 transition-transform duration-300"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)` }}
        >
          <Image src="/images/mascot.png" alt="DICKBUTT Mascot" width={300} height={300} className="object-contain" />
        </div>
      </section>

      <MarqueeBanner />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-dickbutt-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-dickbutt-orange transform -rotate-1">
            WTF is DICKBUTT?
          </h2>

          <div className="bg-dickbutt-dark/80 backdrop-blur-sm border-2 border-dickbutt-orange rounded-xl p-6 md:p-8 mb-12 transform rotate-1">
            <p className="text-xl text-white/90 mb-6">
              DICKBUTT is not just another meme token. It's THE meme token inspired by{" "}
              <span className="text-dickbutt-yellow font-bold">Inscription #1</span>, the second inscription ever
              created on Bitcoin.
            </p>
            <p className="text-xl text-white/90 mb-6">
              This historic connection to Bitcoin's early inscriptions makes DICKBUTT a piece of blockchain history,
              combining internet culture with the technological innovation of BTC.
            </p>
            <p className="text-xl text-white/90">
              All trading happens exclusively on the funkybit.fun platform, where our community continues to grow and
              thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dickbutt-orange/20 backdrop-blur-sm border-2 border-dickbutt-orange rounded-xl p-6 hover:bg-dickbutt-orange/30 transition-colors transform -rotate-2 hover:rotate-0">
              <div className="text-dickbutt-yellow text-4xl font-bold mb-4">&#x1F923;</div>
              <h3 className="text-2xl font-bold text-white mb-3">Memes &gt; Utility</h3>
              <p className="text-gray-300">Who needs real-world use cases when you have dank memes? Not us!</p>
            </div>

            <div className="bg-dickbutt-orange/20 backdrop-blur-sm border-2 border-dickbutt-orange rounded-xl p-6 hover:bg-dickbutt-orange/30 transition-colors transform rotate-2 hover:rotate-0">
              <div className="text-dickbutt-yellow text-4xl font-bold mb-4">💎</div>
              <h3 className="text-2xl font-bold text-white mb-3">Hidden Gem</h3>
              <p className="text-gray-300">
                But what if it's not? Can you really afford to miss out on the next big thing?
              </p>
            </div>

            <div className="bg-dickbutt-orange/20 backdrop-blur-sm border-2 border-dickbutt-orange rounded-xl p-6 hover:bg-dickbutt-orange/30 transition-colors transform -rotate-1 hover:rotate-0">
              <div className="text-dickbutt-yellow text-4xl font-bold mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3">Moon or Bust</h3>
              <p className="text-gray-300">Probably bust, but that's part of the fun! YOLO responsibly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <TokenomicsJoke />

      {/* How to Buy Section */}
      <BuySteps />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <footer className="bg-dickbutt-dark border-t-2 border-dickbutt-orange/50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-dickbutt-yellow font-bold text-xl mb-4">DICKBUTT: Bitcoin's Historic Meme Token</p>

          <p className="text-white/70 mb-6">Join our community and be part of Bitcoin inscription history.</p>

          <div className="flex justify-center mb-6">
            <a
              href={TWITTER_URL}
              className="text-white/70 hover:text-dickbutt-yellow transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <span className="sr-only">Twitter/X</span>
            </a>
          </div>

          <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} DICKBUTT. All rights reserved.</p>
        </div>
      </footer>

      {/* Annoying Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
          <div className="bg-dickbutt-dark border-4 border-dickbutt-yellow p-8 rounded-lg max-w-md relative animate-bounce-slow">
            <button onClick={closePopup} className="absolute top-2 right-2 text-white/70 hover:text-white">
              ❌
            </button>

            <h3 className="text-2xl font-bold text-dickbutt-yellow mb-4">HEY! DON'T LEAVE YET!</h3>
            <p className="text-white mb-6">
              Are you SURE you don't want to buy DICKBUTT? Your friends will all be rich without you!
            </p>

            <div className="flex justify-between">
              <a
                href={TRADING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dickbutt-yellow text-dickbutt-dark px-6 py-2 rounded-full font-bold"
              >
                Buy Now
              </a>

              <button onClick={closePopup} className="bg-white/10 text-white px-6 py-2 rounded-full font-bold">
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
