import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import Link from "next/link"
import { FileText, ImageIcon, ChevronRight } from "lucide-react"

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user) redirect("/admin/login")

  const contentCount = await prisma.contentItem.count()
  const user = session.user

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold">
          Bienvenido, {user.name || "Admin"}
        </h1>
        <p className="text-zinc-500 text-sm mt-1">Panel de administración de Joa Fit</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
          <p className="text-2xl font-bold text-amber-400">{contentCount}</p>
          <p className="text-zinc-500 text-xs mt-1">Textos editables</p>
        </div>
        <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800">
          <p className="text-2xl font-bold text-amber-400">1</p>
          <p className="text-zinc-500 text-xs mt-1">Administrador</p>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">Acciones rápidas</h2>

        <Link
          href="/admin/contenido"
          className="flex items-center justify-between bg-zinc-900 rounded-2xl p-4 border border-zinc-800 hover:border-amber-500/50 transition-colors min-h-[56px]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="font-medium text-sm">Editar contenidos</p>
              <p className="text-zinc-500 text-xs">Hero, planes, about, contacto...</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-zinc-600" />
        </Link>

        <Link
          href="/admin/imagenes"
          className="flex items-center justify-between bg-zinc-900 rounded-2xl p-4 border border-zinc-800 hover:border-amber-500/50 transition-colors min-h-[56px]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="font-medium text-sm">Gestionar imágenes</p>
              <p className="text-zinc-500 text-xs">Hero, about, transformaciones</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-zinc-600" />
        </Link>
      </div>

      <div className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800">
        <p className="text-xs text-zinc-500 leading-relaxed">
          Los cambios se guardan automáticamente en la base de datos y se reflejan
          al recargar la página principal. Cerrá sesión al terminar.
        </p>
      </div>
    </div>
  )
}
