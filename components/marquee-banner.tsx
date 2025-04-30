export default function MarqueeBanner() {
  const text =
    "🍆 DICKBUTT ON SOLANA 🍆 FASTEST MEME IN THE WEST 🍆 CONTRACT: Coming Soon... 🍆 LOW FEES HIGH MEMES 🍆 "
  // Duplicate the text to ensure continuous flow
  const repeatedText = text.repeat(10)

  return (
    <div className="marquee">
      <div className="track">{repeatedText}</div>
    </div>
  )
}
