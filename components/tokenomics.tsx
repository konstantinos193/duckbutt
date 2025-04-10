export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Tokenomics</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Token Distribution</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Community Pool</span>
                <span className="text-secondary font-bold">50%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Liquidity</span>
                <span className="text-secondary font-bold">30%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Development</span>
                <span className="text-secondary font-bold">10%</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Marketing</span>
                <span className="text-secondary font-bold">10%</span>
              </li>
            </ul>
          </div>

          <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-4">Token Details</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Token Name</span>
                <span className="text-secondary font-bold">DICKBUTT</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Platform</span>
                <span className="text-secondary font-bold">Odin.fun</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Total Supply</span>
                <span className="text-secondary font-bold">69,420,000,000</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Blockchain</span>
                <span className="text-secondary font-bold">Bitcoin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-dark/80 backdrop-blur-sm border border-primary/20 rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-4">Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-2 border-primary/50 pl-4">
              <h4 className="text-xl font-bold text-secondary mb-2">Phase 1</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Token Launch on Odin.fun</li>
                <li>• Community Building</li>
                <li>• Website Launch</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary/50 pl-4">
              <h4 className="text-xl font-bold text-secondary mb-2">Phase 2</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Marketing Campaigns</li>
                <li>• Community Contests</li>
                <li>• Partnerships</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary/50 pl-4">
              <h4 className="text-xl font-bold text-secondary mb-2">Phase 3</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Ecosystem Expansion</li>
                <li>• Additional Platform Listings</li>
                <li>• Community Governance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
