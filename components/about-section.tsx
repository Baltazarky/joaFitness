"use client"

import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 md:py-32 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-14">
            <p className="text-amber-400 text-sm font-medium tracking-[0.25em] uppercase mb-4">Conocerme</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Sobre mí</h2>
          </div>

          {/* Contenido */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Foto */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-zinc-800 to-black border border-zinc-800 overflow-hidden">
                <Image
                  src="/joa.png"
                  alt="Joaquin - Entrenador Personal"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Texto + Quotes */}
            <div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                <strong className="text-white">Soy Joaquin, un apasionado por el entrenamiento.</strong>
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Mi misión es acompañarte en tu transformación. Estoy aquí para ayudarte a convertir miedos, complejos e
                inseguridades en confianza, fuerza y amor propio. Porque cuidarte a ti mismo no es solo el objetivo, sino
                aprender durante el camino a cómo hacerlo.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10">
                Con años de experiencia en entrenamiento personal y nutrición deportiva, mi enfoque se basa en la
                simplicidad y resultados reales. Cada plan está diseñado específicamente para ti.
              </p>

              {/* Quote blocks - filosofía */}
              <div className="space-y-5">
                <div className="border-l-2 border-amber-500 pl-5">
                  <p className="text-white/80 text-base leading-relaxed italic">
                    &ldquo;La consistencia es el verdadero superpoder. No se trata de motivación, se trata de identidad.&rdquo;
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-5">
                  <p className="text-white/80 text-base leading-relaxed italic">
                    &ldquo;Entrenar debería ser simple, no complicado. Mi enfoque es crear un plan que funcione para vos y
                    hacerlo lo más fácil posible de seguir.&rdquo;
                  </p>
                </div>
                <div className="border-l-2 border-amber-500 pl-5">
                  <p className="text-white/80 text-base leading-relaxed italic">
                    &ldquo;Construir el cuerpo correcto empieza por ordenar la vida.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
