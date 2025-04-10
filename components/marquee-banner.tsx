export default function MarqueeBanner() {
  const text = "🍆 BUY DICKBUTT OR STAY POOR FOREVER 🍆 THIS IS NOT FINANCIAL ADVICE 🍆 ACTUALLY IT IS 🍆 BUY NOW 🍆 "
  // Duplicate the text to ensure continuous flow
  const repeatedText = text.repeat(10)

  return (
    <div className="marquee">
      <div className="track">{repeatedText}</div>
    </div>
  )
}
