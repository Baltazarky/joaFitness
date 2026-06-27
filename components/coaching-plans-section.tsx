"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Dumbbell, Utensils, Star } from "lucide-react"

interface Plan {
  period: string
  name: string
  price: string
  originalPrice: string | null
  savings: string | null
  popular: boolean
  features: string[]
  category: "entrenamiento" | "nutricion" | "completo"
  icon: typeof Dumbbell
}

const plans: Plan[] = [
  {
    period: "Mensual",
    name: "Entrenamiento",
    price: "$15.000",
    originalPrice: null,
    savings: null,
    popular: false,
    category: "entrenamiento",
    icon: Dumbbell,
    features: ["Rutina personalizada", "Seguimiento semanal", "Videos explicativos", "App móvil"],
  },
  {
    period: "Mensual",
    name: "Nutrición",
    price: "$15.000",
    originalPrice: null,
    savings: null,
    popular: false,
    category: "nutricion",
    icon: Utensils,
    features: ["Plan personalizado", "Seguimiento nutricional", "Soporte continuo", "Ajustes según progreso"],
  },
  {
    period: "Mensual",
    name: "Entreno + Nutrición",
    price: "$25.000",
    originalPrice: "$28.000",
    savings: "Ahorras $3.000/mes",
    popular: true,
    category: "completo",
    icon: Star,
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
    price: "$66.000",
    originalPrice: "$75.000",
    savings: "Ahorras $9.000",
    popular: false,
    category: "completo",
    icon: Star,
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
    price: "$120.000",
    originalPrice: "$150.000",
    savings: "Ahorras $30.000",
    popular: false,
    category: "completo",
    icon: Star,
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

const filters = [
  { key: "todos", label: "Todos" },
  { key: "entrenamiento", label: "Entrenamiento" },
  { key: "nutricion", label: "Nutrición" },
  { key: "completo", label: "Completo" },
] as const

type FilterKey = (typeof filters)[number]["key"]

export function CoachingPlansSection() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("todos")

  const filteredPlans = activeFilter === "todos" ? plans : plans.filter((p) => p.category === activeFilter)

  return (
    <section id="planes" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-amber-400 text-sm font-medium tracking-[0.25em] uppercase mb-4">Planes flexibles</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Elegí tu plan</h2>
          <p className="text-gray-400 text-lg">
            Planes flexibles. Cancelá cuando quieras. Sin compromiso.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-1.5 p-1.5 rounded-xl bg-zinc-900 border border-zinc-800">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-lg text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === f.key
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de planes */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-b from-zinc-900 to-black rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-amber-500 shadow-[0_0_40px_rgba(217,119,6,0.15)] ring-2 ring-amber-500 ring-offset-2 ring-offset-black"
                    : "border-zinc-800 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(217,119,6,0.08)]"
                }`}
              >
                {/* Cover gradient */}
                <div className="h-32 rounded-t-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center border-b border-zinc-800 overflow-hidden">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    plan.popular
                      ? "bg-gradient-to-br from-amber-500 to-amber-600"
                      : "bg-gradient-to-br from-zinc-700 to-zinc-800"
                  }`}>
                    <Icon className={`w-8 h-8 ${plan.popular ? "text-black" : "text-amber-400"}`} />
                  </div>
                </div>

                {/* Badge "más vendido" */}
                {plan.popular && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
                    más vendido
                  </div>
                )}

                <div className="p-6 md:p-8 pt-6">
                  {/* Periodo */}
                  <p className="text-amber-400/80 text-xs font-medium tracking-[0.15em] uppercase mb-1">{plan.period}</p>

                  {/* Nombre del plan */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">{plan.name}</h3>

                  {/* Precio */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-lg text-gray-600 line-through">{plan.originalPrice}</span>
                      )}
                    </div>
                    {plan.savings && (
                      <p className="text-amber-400 text-sm font-medium mt-1.5">{plan.savings}</p>
                    )}
                    <p className="text-gray-600 text-xs mt-1">Por mes / Sin permanencia</p>
                  </div>

                  {/* Características */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón */}
                  <Button
                    className={`w-full rounded-full py-6 font-bold tracking-wider uppercase text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.popular
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30"
                        : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                    }`}
                  >
                    Empezar ahora
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
