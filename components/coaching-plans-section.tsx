"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

// Planes simplificados similares a WhateverFit
const plans = [
  {
    period: "Mensual",
    name: "Entrenamiento",
    price: "€50",
    originalPrice: null,
    savings: null,
    popular: false,
    features: ["Rutina personalizada", "Seguimiento semanal", "Videos explicativos", "App móvil"],
  },
  {
    period: "Mensual",
    name: "Nutrición",
    price: "€50",
    originalPrice: null,
    savings: null,
    popular: false,
    features: ["Plan personalizado", "Seguimiento nutricional", "Soporte continuo", "Ajustes según progreso"],
  },
  {
    period: "Mensual",
    name: "Entreno + Nutrición",
    price: "€89",
    originalPrice: "€100",
    savings: "Ahorras 11€",
    popular: true,
    features: [
      "Rutina personalizada",
      "Plan nutricional completo",
      "Seguimiento semanal",
      "Videos explicativos",
      "App móvil",
      "Soporte 24/7",
    ],
  },
  {
    period: "Trimestral",
    name: "Entreno + Nutrición",
    price: "€246",
    originalPrice: "€300",
    savings: "Ahorras 54€",
    popular: false,
    features: [
      "Rutina personalizada",
      "Plan nutricional completo",
      "Seguimiento semanal",
      "Videos explicativos",
      "App móvil",
      "Soporte 24/7",
    ],
  },
  {
    period: "Semestral",
    name: "Entreno + Nutrición",
    price: "€450",
    originalPrice: "€600",
    savings: "Ahorras 150€",
    popular: false,
    features: [
      "Rutina personalizada",
      "Plan nutricional completo",
      "Seguimiento semanal",
      "Videos explicativos",
      "App móvil",
      "Soporte 24/7",
    ],
  },
]

export function CoachingPlansSection() {
  return (
    <section id="planes" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Tarifas</h2>
          <p className="text-gray-300 text-lg">
            Elige el plan que más se adapte a tus objetivos y nosotros nos encargamos del resto.
          </p>
        </div>

        {/* Grid de planes */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-amber-500 scale-105 shadow-[0_0_30px_rgba(217,119,6,0.3)]"
                  : "border-gray-800 hover:border-amber-500/50"
              }`}
            >
              {/* Badge "más vendido" */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-1.5 rounded-full text-xs font-bold">
                  más vendido
                </div>
              )}

              {/* Periodo */}
              <p className="text-amber-400 text-sm font-medium mb-2">{plan.period}</p>

              {/* Nombre del plan */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{plan.name}</h3>

              {/* Precio */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">{plan.originalPrice}</span>
                  )}
                </div>
                {plan.savings && (
                  <p className="text-amber-400 text-sm font-medium mt-1">{plan.savings}</p>
                )}
                <p className="text-gray-400 text-sm mt-1">Al mes *</p>
              </div>

              {/* Características */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500"
                    : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
                } rounded-full py-6 font-semibold`}
              >
                ¡Quiero Empezar!
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
