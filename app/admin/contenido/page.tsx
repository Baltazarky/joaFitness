"use client"

import { useState, useEffect, useCallback } from "react"
import { Loader2, Save, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const sections = [
  {
    id: "hero",
    label: "Hero",
    fields: [
      { key: "hero_pill_badge", label: "Badge superior" },
      { key: "hero_headline", label: "Título principal (H1)" },
      { key: "hero_subheadline", label: "Subtítulo" },
      { key: "hero_trust_1", label: "Trust bar #1" },
      { key: "hero_trust_2", label: "Trust bar #2" },
      { key: "hero_trust_3", label: "Trust bar #3" },
    ],
  },
  {
    id: "stats",
    label: "Estadísticas",
    fields: [
      { key: "stats_years", label: "Años de experiencia" },
      { key: "stats_clients", label: "Clientes entrenados" },
      { key: "stats_programs", label: "Programas disponibles" },
    ],
  },
  {
    id: "valueprops",
    label: "Propuestas de valor",
    fields: [
      { key: "vp_1_title", label: "VP #1 - Título" },
      { key: "vp_1_desc", label: "VP #1 - Descripción" },
      { key: "vp_2_title", label: "VP #2 - Título" },
      { key: "vp_2_desc", label: "VP #2 - Descripción" },
      { key: "vp_3_title", label: "VP #3 - Título" },
      { key: "vp_3_desc", label: "VP #3 - Descripción" },
      { key: "vp_4_title", label: "VP #4 - Título" },
      { key: "vp_4_desc", label: "VP #4 - Descripción" },
    ],
  },
  {
    id: "about",
    label: "Sobre mí",
      fields: [
        { key: "about_bio_1", label: "Bio - Párrafo 1" },
        { key: "about_bio_2", label: "Bio - Párrafo 2" },
        { key: "about_bio_3", label: "Bio - Párrafo 3" },
        { key: "about_quote_1", label: "Frase filosofía #1" },
        { key: "about_quote_2", label: "Frase filosofía #2" },
        { key: "about_quote_3", label: "Frase filosofía #3" },
      ],
  },
  {
    id: "contact",
    label: "Contacto",
    fields: [
      { key: "contact_email", label: "Email" },
      { key: "contact_phone", label: "Teléfono" },
      { key: "whatsapp_phone", label: "WhatsApp (número)" },
      { key: "whatsapp_message", label: "WhatsApp (mensaje)" },
    ],
  },
  {
    id: "footer",
    label: "Footer",
    fields: [
      { key: "footer_instagram", label: "URL Instagram" },
      { key: "footer_youtube", label: "URL YouTube" },
      { key: "footer_tiktok", label: "URL TikTok" },
    ],
  },
]

export default function ContentEditorPage() {
  const [content, setContent] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then((data) => {
        setContent(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    const initial: Record<string, boolean> = {}
    sections.forEach((s) => (initial[s.id] = true))
    setOpenSections(initial)
  }, [])

  const handleChange = useCallback((key: string, value: string) => {
    setContent((prev) => ({ ...prev, [key]: value }))
    setSaved(false)
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      })
      if (res.ok) {
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
      }
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-zinc-500" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Editar contenidos</h1>
        <Button
          onClick={handleSave}
          disabled={saving || saved}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full h-10 px-5 text-sm font-semibold disabled:opacity-50"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : saved ? (
            "✓ Guardado"
          ) : (
            <>
              <Save className="w-4 h-4 mr-1.5" />
              Guardar
            </>
          )}
        </Button>
      </div>

      {sections.map((section) => (
        <div
          key={section.id}
          className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden"
        >
          <button
            onClick={() =>
              setOpenSections((prev) => ({ ...prev, [section.id]: !prev[section.id] }))
            }
            className="w-full flex items-center justify-between p-4 min-h-[48px]"
          >
            <span className="font-medium text-sm">{section.label}</span>
            {openSections[section.id] ? (
              <ChevronUp className="w-4 h-4 text-zinc-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-zinc-500" />
            )}
          </button>

          {openSections[section.id] && (
            <div className="px-4 pb-4 space-y-3 border-t border-zinc-800 pt-3">
              {section.fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-xs text-zinc-500 mb-1.5">{field.label}</label>
                  <Textarea
                    value={content[field.key] ?? ""}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className="bg-black border-zinc-800 text-white placeholder:text-zinc-700 text-sm resize-none min-h-[60px]"
                    rows={2}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {saved && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-emerald-500/90 text-black text-sm font-medium px-5 py-2.5 rounded-full shadow-lg">
          ✓ Cambios guardados
        </div>
      )}
    </div>
  )
}
