"use client"

import { useState } from "react"

interface FunnyButtonProps {
  text: string
  href: string
  className?: string
}

export default function FunnyButton({ text, href, className = "" }: FunnyButtonProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = () => {
    setIsHovering(true)
    if (Math.random() > 0.5) {
      const x = Math.random() * 100 - 50
      const y = Math.random() * 100 - 50
      setPosition({ x, y })
    }
  }

  const handleClick = () => {
    window.open(href, "_blank")
  }

  return (
    <button
      className={`relative px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 ${className}`}
      style={{
        transform: isHovering ? `translate(${position.x}px, ${position.y}px)` : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
