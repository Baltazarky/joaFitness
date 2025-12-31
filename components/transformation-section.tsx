"use client"

export function TransformationSection() {
  return (
    <section id="resultados" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Transformaciones que inspiran
          </h2>
          <p className="text-gray-300 text-lg">
            Personas reales que se comprometieron con el proceso y lograron resultados increíbles. Tu transformación
            podría ser la siguiente.
          </p>
        </div>

        {/* Placeholder para imágenes antes/después */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div key={item} className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-gray-800 to-black border-2 border-amber-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-2 border-amber-500/30 flex items-center justify-center">
                    <span className="text-3xl">📷</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {item === 1 ? "Foto Antes" : "Foto Después"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
