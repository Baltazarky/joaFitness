"use client"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Sobre mí</h2>
          </div>

          {/* Contenido */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Placeholder de foto */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-gray-800 to-black border-2 border-amber-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-2 border-amber-500/30 flex items-center justify-center">
                    <span className="text-4xl">📸</span>
                  </div>
                  <p className="text-gray-400 text-sm">Foto de Joaquin</p>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                <strong className="text-white">Soy Joaquin, un apasionado por el entrenamiento.</strong>
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Mi misión es acompañarte en tu transformación. Estoy aquí para ayudarte a convertir miedos, complejos e
                inseguridades en confianza, fuerza y amor propio. Porque cuidarte a ti mismo no es solo el objetivo: sino
                aprender durante el camino a cómo hacerlo.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Con años de experiencia en entrenamiento personal y nutrición deportiva, mi enfoque se basa en la
                simplicidad y resultados reales. Cada plan está diseñado específicamente para ti, adaptándose a tus
                necesidades, objetivos y estilo de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
