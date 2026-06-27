"use client"

import { useEffect, useRef, useState } from "react"
import { Grid3X3, ShieldCheck, Zap, TrendingUp } from "lucide-react"

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, trigger])

  return count
}

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(value, 1500, inView)

  return (
    <div ref={ref} className="text-center">
      <span className="block text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-gray-400 text-sm md:text-base mt-2 block">{label}</span>
    </div>
  )
}

export function StatsBar({ content }: { content: Record<string, string> }) {
  const stats = [
    { value: 9, suffix: "+", label: content.stats_years },
    { value: 500, suffix: "+", label: content.stats_clients },
    { value: 8, suffix: "", label: content.stats_programs },
  ]

  const valueProps = [
    {
      icon: Grid3X3,
      title: content.vp_1_title,
      description: content.vp_1_desc,
    },
    {
      icon: ShieldCheck,
      title: content.vp_2_title,
      description: content.vp_2_desc,
    },
    {
      icon: Zap,
      title: content.vp_3_title,
      description: content.vp_3_desc,
    },
    {
      icon: TrendingUp,
      title: content.vp_4_title,
      description: content.vp_4_desc,
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-zinc-950 border-y border-zinc-900">
      <div className="container mx-auto px-4 md:px-8">
        {/* Stats */}
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 md:gap-16 mb-16 md:mb-20">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} {...stat} />
          ))}
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-amber-500/30 mx-auto mb-16 md:mb-20" />

        {/* Value Props */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, i) => {
            const Icon = prop.icon
            return (
              <div key={i} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 flex items-center justify-center group-hover:border-amber-500/40 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wider">{prop.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{prop.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
