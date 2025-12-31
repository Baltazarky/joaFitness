"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jennifer L.",
    role: "Ejecutiva de Marketing",
    rating: 5,
    text: "Trabajar con Joaquin ha sido transformador. Su enfoque es científico pero simple de seguir. Nunca me había sentido más fuerte o segura en mi vida.",
  },
  {
    name: "Carlos M.",
    role: "Ingeniero de Software",
    rating: 5,
    text: "Como alguien con un horario ocupado, necesitaba un programa eficiente. Joaquin entregó exactamente eso. La mejor inversión en mi salud.",
  },
  {
    name: "Emma W.",
    role: "Profesora",
    rating: 5,
    text: "El coaching nutricional fue un cambio total. Finalmente entiendo cómo alimentar mi cuerpo correctamente, y los resultados hablan por sí mismos.",
  },
  {
    name: "Roberto K.",
    role: "Empresario",
    rating: 5,
    text: "A los 50, pensé que ponerme en forma ya no era posible. Joaquin me demostró lo contrario. Su paciencia y experiencia son inigualables.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-gray-300 text-lg">
            No solo confíes en mi palabra. Esto es lo que algunos de mis clientes tienen que decir sobre su experiencia
            trabajando conmigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 border border-gray-800"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
