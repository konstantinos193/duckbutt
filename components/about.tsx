export default function About() {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">About DICKBUTT</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bringing the fun and irreverent side of crypto while building on BTC's secure foundation.
          </p>
        </div>

        <div className="prose prose-lg text-gray-300 max-w-3xl mx-auto mb-12">
          <p>
            Born from internet culture and fueled by community enthusiasm, DICKBUTT combines the reliability of BTC with
            the fun and excitement of meme tokens. All trading happens within the secure pump.fun platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
              🚀
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">BTC Powered</h3>
            <p className="text-gray-300">
              Leveraging the speed and low fees of BTC while adding the fun of meme culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
