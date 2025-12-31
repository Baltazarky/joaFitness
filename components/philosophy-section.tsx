"use client"

export function PhilosophySection() {
  return (
    <section id="filosofia" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Entrenar debería ser{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            simple
          </span>
          , no complicado.
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
          Me llamo Joaquin, y lo que me diferencia de otros entrenadores es una palabra:{" "}
          <strong className="text-white">simplicidad</strong>. Me gusta mantener las cosas simples y directas. Ya sea
          que quieras ganar músculo, perder peso o mejorar tu salud general, mi enfoque es crear un plan que funcione
          para ti y hacerlo lo más fácil posible de seguir.
        </p>
      </div>
    </section>
  )
}
