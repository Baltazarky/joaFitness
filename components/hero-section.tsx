"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center h-full">
          {/* Columna izquierda - Texto */}
          <div className="text-left z-10 flex flex-col justify-center">
            {/* Subtítulo pequeño */}
            <p className="text-white/70 font-medium tracking-[0.2em] uppercase mb-6 text-sm md:text-base">
              Wherever, Whenever
            </p>

            {/* Título principal */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
              JOA FIT
            </h1>

            {/* Subtítulo descriptivo */}
            <p className="text-white/80 text-base md:text-lg mb-10 max-w-md">
              Asesorías online de entrenamiento y nutrición
            </p>

            {/* Botón CTA */}
            <div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 text-base md:text-lg px-8 py-6 rounded-full font-semibold"
              >
                ¡Quiero Empezar!
              </Button>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[80vh] max-h-[800px]">
            <Image
              src="/joa.png"
              alt="Joaquin - Entrenador Personal"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
