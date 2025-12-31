"use client"

import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "1",
    title: "Selecciona tu plan",
    description: "Realizada la compra del plan elegido",
  },
  {
    number: "2",
    title: "Descargar app",
    description: "Nuestra app para llevar todo el asesoramiento al completo",
  },
  {
    number: "3",
    title: "Rellena el formulario",
    description:
      "Para diseñar tu rutina 100% personalizada. El plazo de entrega es de 48-72 horas laborables.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro proceso en tres pasos
          </h2>
        </div>

        {/* Grid de pasos */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Número del paso */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center border-4 border-amber-400/30">
                <span className="text-3xl font-bold text-black">{step.number}</span>
              </div>

              {/* Título y descripción */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

