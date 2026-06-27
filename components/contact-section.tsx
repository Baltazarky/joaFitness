"use client"

import { useState } from "react"
import { Send, Mail, Phone, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Error al enviar")

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-amber-400 text-sm font-medium tracking-[0.25em] uppercase mb-4">Contacto</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Envíanos un mensaje
          </h2>
          <p className="text-gray-400 text-lg">
            Ante cualquier duda o requerimiento, no dudes en contactarnos.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Información de contacto */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                <Mail className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-gray-300">joaquin.sanch@icloud.com</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                <Phone className="w-6 h-6 text-amber-400" />
              </div>
              <span className="text-gray-300">+54 9 342 595-3943</span>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 md:p-8 border border-zinc-800">
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
                  className="bg-black border-zinc-700 text-white placeholder:text-gray-600 focus:border-amber-500/50"
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
                  className="bg-black border-zinc-700 text-white placeholder:text-gray-600 focus:border-amber-500/50"
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
                  className="bg-black border-zinc-700 text-white placeholder:text-gray-600 focus:border-amber-500/50 resize-none"
                  required
                />
              </div>

              {/* Feedback messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-xl px-4 py-3 text-sm">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  Mensaje enviado correctamente. Te responderemos pronto.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 text-sm">
                  Error al enviar. Intentá de nuevo o escribinos por WhatsApp.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 rounded-full py-6 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
