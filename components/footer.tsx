import Link from "next/link"
import { Twitter, TextIcon as Telegram, DiscIcon as Discord, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <span className="font-display text-3xl text-primary">DICKBUTT</span>
            </Link>
            <p className="text-gray-400 mt-2">The most irreverent BTC meme token</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Telegram className="h-6 w-6" />
              <span className="sr-only">Telegram</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Discord className="h-6 w-6" />
              <span className="sr-only">Discord</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">Github</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/#tokenomics" className="text-gray-400 hover:text-white transition-colors">
              Tokenomics
            </Link>
            <Link href="/#how-to-buy" className="text-gray-400 hover:text-white transition-colors">
              How to Buy
            </Link>
          </div>

          <div className="text-gray-400">&copy; {new Date().getFullYear()} DICKBUTT. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
