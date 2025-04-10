"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="font-display text-3xl text-primary">DICKBUTT</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
                About
              </Link>
              <Link href="/#tokenomics" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
                Tokenomics
              </Link>
              <Link href="/#how-to-buy" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">
                How to Buy
              </Link>
              <a
                href="https://odin.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Trade on Odin.fun
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary/20 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark border-b border-primary/20">
            <Link
              href="/#about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#tokenomics"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Tokenomics
            </Link>
            <Link
              href="/#how-to-buy"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Buy
            </Link>
            <a
              href="https://odin.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white block px-3 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Trade on Odin.fun
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
