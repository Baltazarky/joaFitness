"use client"

import { useState, useEffect, type RefObject } from "react"

export function useScrollAnimation(ref: RefObject<HTMLElement | null>, threshold = 0.5) {
  const [opacity, setOpacity] = useState(0)
  const [scale, setScale] = useState(0.95)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distance = Math.abs(elementCenter - viewportCenter)
      const maxDistance = windowHeight / 2 + rect.height / 2

      // Calculate opacity based on how centered the element is
      const rawOpacity = 1 - (distance / maxDistance) * (1 - threshold)
      const clampedOpacity = Math.max(0, Math.min(1, rawOpacity))
      setOpacity(clampedOpacity)

      // Calculate scale
      const rawScale = 0.95 + clampedOpacity * 0.05
      setScale(rawScale)
    }

    handleScroll() // Initial calculation
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [ref, threshold])

  return { opacity, scale }
}
