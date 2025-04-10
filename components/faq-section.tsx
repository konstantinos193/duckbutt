"use client"

import { useState } from "react"

const faqs = [
  {
    question: "What is DICKBUTT's connection to Bitcoin?",
    answer:
      "DICKBUTT is inspired by Inscription #1, which was the second inscription ever created on Bitcoin. This historic connection makes DICKBUTT not just a meme token, but a part of Bitcoin's cultural heritage and inscription history.",
  },
  {
    question: "What exactly is DICKBUTT?",
    answer:
      "DICKBUTT is a meme token that combines internet humor with the power of Bitcoin. It's fun, it's memorable, and it's trading exclusively on the Odin.fun platform.",
  },
  {
    question: "Is this a good investment?",
    answer:
      "While we can't predict the future, meme tokens have shown incredible potential in the crypto space. As always, do your own research and only invest what you're comfortable with.",
  },
  {
    question: "Why should I buy DICKBUTT?",
    answer:
      "DICKBUTT offers a unique combination of meme culture and Bitcoin history. Plus, memes have proven to be powerful drivers in the crypto economy. Join our growing community today!",
  },
  {
    question: "Where does the name come from?",
    answer:
      "The name comes from a popular internet meme that has been around since the early 2000s. It's now immortalized on the Bitcoin blockchain as Inscription #1.",
  },
  {
    question: "When will DICKBUTT reach its potential?",
    answer:
      "Market timing is impossible to predict, but with our growing community and historic Bitcoin connection, we believe DICKBUTT has a bright future ahead.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 rainbow-text">Frequently Asked Questions</h2>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-2 border-dickbutt-orange rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left font-bold text-xl flex justify-between items-center bg-dickbutt-orange/20 hover:bg-dickbutt-orange/30"
              onClick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "👇" : "👆"}</span>
            </button>

            {openIndex === index && (
              <div className="p-4 bg-dickbutt-dark border-t-2 border-dickbutt-orange/50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
