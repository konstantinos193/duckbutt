"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"

interface DickbuttProps {
  count?: number
}

export default function FloatingDickbutts({ count = 10 }: DickbuttProps) {
  const [dickbutts, setDickbutts] = useState<
    Array<{ id: number; x: number; y: number; size: number; rotation: number; speed: number }>
  >([])
  const animationRef = useRef<number | null>(null)
  const lastUpdateRef = useRef<number>(0)

  useEffect(() => {
    const newDickbutts = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 30, // Slightly smaller sizes
      rotation: Math.random() * 360,
      speed: Math.random() * 3 + 1, // Slower speeds
    }))
    setDickbutts(newDickbutts)

    const animate = (timestamp: number) => {
      // Only update every 100ms for better performance
      if (timestamp - lastUpdateRef.current > 100) {
        lastUpdateRef.current = timestamp
        setDickbutts((prev) =>
          prev.map((dickbutt) => ({
            ...dickbutt,
            y: (dickbutt.y + dickbutt.speed / 20) % 100, // Slower movement
            rotation: (dickbutt.rotation + 0.5) % 360, // Slower rotation
          })),
        )
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dickbutts.map((dickbutt) => (
        <div
          key={dickbutt.id}
          className="absolute"
          style={{
            left: `${dickbutt.x}vw`,
            top: `${dickbutt.y}vh`,
            transform: `rotate(${dickbutt.rotation}deg)`,
            opacity: 0.15, // Reduced opacity
            willChange: "transform", // Performance optimization
          }}
        >
          <Image
            src="/images/mascot.png"
            alt="Floating Dickbutt"
            width={dickbutt.size}
            height={dickbutt.size}
            className="object-contain"
            loading="lazy"
            unoptimized={false}
          />
        </div>
      ))}
    </div>
  )
}
