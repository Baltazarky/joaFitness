"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloating({ content }: { content: Record<string, string> }) {
  const whatsappLink = `https://wa.me/${content.whatsapp_phone}?text=${content.whatsapp_message}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Escríbeme por WhatsApp"
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white fill-white" />
        </div>
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-zinc-900 text-white text-sm px-4 py-2 rounded-xl border border-zinc-700 whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none">
          Escríbeme por WhatsApp
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-zinc-900 border-r border-t border-zinc-700" />
        </span>
      </div>
    </a>
  )
}
