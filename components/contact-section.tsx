"use client"

import { useState } from "react"
import { Send, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Envíanos un mensaje
          </h2>
          <p className="text-gray-300 text-lg">
            Estamos aquí para acompañarte en cada paso. Ante cualquier duda o requerimiento, no dudes en contactarnos.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Información de contacto */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                <Mail className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-gray-300">coach@joafit.com</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                <Phone className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-gray-300">+34 611 51 95 51</span>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 md:p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black border-gray-700 text-white placeholder:text-gray-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black border-gray-700 text-white placeholder:text-gray-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Tu mensaje..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black border-gray-700 text-white placeholder:text-gray-500 resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 rounded-full py-6 font-semibold"
              >
                Enviar Mensaje
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
