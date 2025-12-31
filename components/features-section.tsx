"use client"

import { Dumbbell, Utensils, TrendingUp, MessageCircle, BarChart3 } from "lucide-react"

// Características principales similares a WhateverFit
const features = [
  {
    icon: Dumbbell,
    title: "Entrenamiento",
    description:
      "Creamos rutinas completamente adaptadas a tus capacidades y objetivos, tanto en casa como en el gimnasio con vídeos explicativos de cada ejercicio. Tendrás seguimiento semanal.",
  },
  {
    icon: Utensils,
    title: "Nutrición",
    description:
      "Nuestro equipo de nutrición elabora planes de alimentación personalizados y brinda soporte adaptado a tus necesidades específicas.",
  },
  {
    icon: TrendingUp,
    title: "Seguimiento",
    description: "Te acompañamos a lo largo de todo tu proceso, ofreciendo apoyo y orientación en cada etapa.",
  },
  {
    icon: BarChart3,
    title: "Progreso",
    description:
      "Establecemos nuevos objetivos y aplicamos pautas de sobrecarga progresiva, con gráficos de rendimiento para visualizar tu evolución.",
  },
  {
    icon: MessageCircle,
    title: "Chat",
    description:
      "Comunicación disponible 24 horas para resolver dudas, evaluar técnica o ajustar tu rutina, con respuesta garantizada en 24-48 horas.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Todo lo que necesitas
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            en una sola app
          </h2>
        </div>

        {/* Grid de características */}
        <div className="max-w-5xl mx-auto space-y-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icono */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/30">
                    <IconComponent className="w-8 h-8 text-amber-400" />
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-base md:text-lg">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

