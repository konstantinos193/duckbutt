export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-20 bg-dark bitcoin-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">How to Buy</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
              1
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-3">Create Account</h3>
            <p className="text-gray-300">Sign up for an account on Odin.fun platform.</p>
          </div>

          <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
              2
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-3">Deposit BTC</h3>
            <p className="text-gray-300">Deposit Bitcoin to your Odin.fun wallet.</p>
          </div>

          <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
              3
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-3">Find DICKBUTT</h3>
            <p className="text-gray-300">Search for DICKBUTT token in the trading section.</p>
          </div>

          <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
              4
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-3">Trade & HODL</h3>
            <p className="text-gray-300">Buy DICKBUTT tokens and join our community!</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://odin.fun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
          >
            Buy on Odin.fun
          </a>
        </div>
      </div>
    </section>
  )
}
