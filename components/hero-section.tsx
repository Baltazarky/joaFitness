"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection({ content }: { content: Record<string, string> }) {
  const whatsappLink = `https://wa.me/${content.whatsapp_phone}?text=${content.whatsapp_message}`

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Photo background layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/joa.png"
          alt="Joaquin - Entrenador Personal"
          fill
          className="object-cover object-center lg:object-[50%_25%]"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays - 3 layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-black" />
      </div>

      <div className="container mx-auto px-4 md:px-8 w-full relative z-10 py-24">
        <div className="max-w-2xl">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="text-sm">🔥</span>
            <span>{content.hero_pill_badge}</span>
          </div>

          {/* H1 */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.85] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {content.hero_headline}
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
            {content.hero_subheadline}
          </p>

          {/* 2 CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 text-base px-8 py-6 rounded-full font-bold tracking-wider uppercase shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver Planes
            </Button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 py-6 rounded-full font-bold tracking-wider uppercase border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar por WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/50 text-sm animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              {content.hero_trust_1}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              {content.hero_trust_2}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              {content.hero_trust_3}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
        <div className="w-5 h-8 rounded-full border-2 border-white/25 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-[scrollBounce_2s_ease-in-out_infinite]" />
        </div>
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Descubre mis planes</span>
      </div>
    </section>
  )
}
