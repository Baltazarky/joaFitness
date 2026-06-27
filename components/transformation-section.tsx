"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { id: 1, label: "Transformación 1" },
  { id: 2, label: "Transformación 2" },
  { id: 3, label: "Transformación 3" },
  { id: 4, label: "Transformación 4" },
  { id: 5, label: "Transformación 5" },
]

export function TransformationSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="resultados" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-amber-400 text-sm font-medium tracking-[0.25em] uppercase mb-4">Resultados reales</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Transformaciones que inspiran
          </h2>
          <p className="text-gray-400 text-lg">
            Personas reales que se comprometieron con el proceso y lograron resultados increíbles. Tu transformación
            podría ser la siguiente.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide) => (
                <div key={slide.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] lg:flex-[0_0_60%] px-3">
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 flex items-center justify-center group cursor-pointer hover:border-amber-500/40 transition-all duration-500">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className="text-4xl">📷</span>
                      </div>
                      <p className="text-gray-500 text-sm">{slide.label}</p>
                      <p className="text-gray-600 text-xs mt-2">Próximamente</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-white hover:bg-zinc-800 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "bg-amber-500 w-6" : "bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
