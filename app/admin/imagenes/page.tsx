"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Upload, Loader2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const imageFields = [
  { key: "image_hero", label: "Hero (foto principal)", aspect: "16:9" },
  { key: "image_about", label: "Sobre mí", aspect: "4:5" },
  { key: "image_transformation_1", label: "Transformación #1", aspect: "3:4" },
  { key: "image_transformation_2", label: "Transformación #2", aspect: "3:4" },
]

function PlaceholderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.41a2.25 2.25 0 0 1 3.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
  )
}

export default function ImagesPage() {
  const [content, setContent] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)
  const [urlInputs, setUrlInputs] = useState<Record<string, string>>({})
  const [uploading, setUploading] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then((data) => {
        setContent(data)
        setUrlInputs(Object.fromEntries(imageFields.map((f) => [f.key, data[f.key] ?? ""])))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const handleUrlSave = async (key: string) => {
    setSaving(key)
    await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [key]: urlInputs[key] }),
    })
    setContent((prev) => ({ ...prev, [key]: urlInputs[key] }))
    setSaving(null)
  }

  const handleFileUpload = async (key: string, file: File) => {
    setUploading(key)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("key", key)

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData })
      const data = await res.json()
      if (data.url) {
        setUrlInputs((prev) => ({ ...prev, [key]: data.url }))
        setContent((prev) => ({ ...prev, [key]: data.url }))
      }
    } catch {
      console.error("Upload failed")
    } finally {
      setUploading(null)
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
      <div>
        <h1 className="text-lg font-bold">Gestionar imágenes</h1>
        <p className="text-zinc-500 text-sm">Subí imágenes o pegá una URL</p>
      </div>

      {imageFields.map((field) => (
        <div key={field.key} className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
          {/* Preview */}
          <div className="bg-zinc-950 flex items-center justify-center min-h-[120px] border-b border-zinc-800">
            {content[field.key] ? (
              <div className="relative w-full aspect-[4/3] max-h-[200px]">
                <Image
                  src={content[field.key] || "/placeholder.svg"}
                  alt={field.label}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-zinc-800 flex items-center justify-center">
                  <PlaceholderIcon className="w-6 h-6 text-zinc-600" />
                </div>
                <p className="text-zinc-600 text-sm">Sin imagen</p>
              </div>
            )}
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{field.label}</span>
              <span className="text-[10px] text-zinc-600">{field.aspect}</span>
            </div>

            {/* URL input */}
            <div className="flex gap-2">
              <Input
                value={urlInputs[field.key] ?? ""}
                onChange={(e) => setUrlInputs((prev) => ({ ...prev, [field.key]: e.target.value }))}
                placeholder="Pegá una URL de imagen..."
                className="bg-black border-zinc-800 text-white placeholder:text-zinc-700 text-sm flex-1"
              />
              <Button
                onClick={() => handleUrlSave(field.key)}
                disabled={saving === field.key}
                size="icon"
                className="bg-zinc-800 hover:bg-zinc-700 rounded-xl min-w-[44px] min-h-[44px]"
              >
                {saving === field.key ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Check className="w-4 h-4" />
                )}
              </Button>
            </div>

            {/* File upload */}
            <label className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 rounded-xl py-3 cursor-pointer transition-colors min-h-[44px]">
              {uploading === field.key ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">Subir archivo</span>
                </>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleFileUpload(field.key, file)
                  e.target.value = ""
                }}
              />
            </label>
          </div>
        </div>
      ))}
    </div>
  )
}
