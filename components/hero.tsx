import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      <div className="absolute inset-0 bg-primary/90 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">DICKBUTT</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">The most irreverent BTC meme token on Odin.fun</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://odin.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-dark px-8 py-3 rounded-full font-bold text-lg hover:bg-secondary/90 transition-colors"
              >
                Trade Now
              </a>
              <a
                href="#about"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image src="/images/mascot.png" alt="DICKBUTT Mascot" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent z-10"></div>
    </div>
  )
}
