export default function About() {
  return (
    <section id="about" className="py-20 bg-dark bitcoin-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">About DICKBUTT</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 md:p-8 mb-12">
          <p className="text-lg md:text-xl text-white/90 mb-6">
            DICKBUTT is not just another meme token. It's a cultural phenomenon that embraces the irreverent, humorous
            side of crypto while building on Bitcoin's secure foundation.
          </p>
          <p className="text-lg md:text-xl text-white/90">
            Born from internet culture and fueled by community enthusiasm, DICKBUTT combines the reliability of BTC with
            the fun and excitement of meme tokens. All trading happens within the secure Odin.fun platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
            <div className="text-secondary text-4xl font-bold mb-4">01</div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">Community Driven</h3>
            <p className="text-gray-300">
              Built by the community, for the community. DICKBUTT thrives on its passionate holders.
            </p>
          </div>

          <div className="bg-dark/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
            <div className="text-secondary text-4xl font-bold mb-4">02</div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">BTC Powered</h3>
            <p className="text-gray-300">
              Leveraging the security and stability of Bitcoin while adding the fun of meme culture.
            </p>
          </div>

          <div className="bg-dark/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
            <div className="text-secondary text-4xl font-bold mb-4">03</div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">Odin.fun Native</h3>
            <p className="text-gray-300">
              Exclusively traded on the Odin.fun platform, ensuring security and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
