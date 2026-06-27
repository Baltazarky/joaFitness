"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, FileText, ImageIcon, LogOut, Dumbbell } from "lucide-react"
import { signOut } from "next-auth/react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/contenido", label: "Contenido", icon: FileText },
  { href: "/admin/imagenes", label: "Imágenes", icon: ImageIcon },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  return (
    <div className="min-h-[100dvh] bg-black text-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-amber-400" />
            <span className="font-bold text-sm">JOA FIT</span>
          </Link>
          <span className="text-xs text-zinc-500 uppercase tracking-wider">Admin</span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-6 pb-24">
        {children}
      </main>

      {/* Bottom Nav (mobile-first) */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-zinc-900">
        <div className="max-w-lg mx-auto px-4 h-16 flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-4 py-2 rounded-lg transition-colors min-w-[64px] min-h-[44px] justify-center",
                  isActive ? "text-amber-400" : "text-zinc-500 hover:text-zinc-300",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium tracking-wider uppercase">{item.label}</span>
              </Link>
            )
          })}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-lg text-zinc-500 hover:text-red-400 transition-colors min-w-[64px] min-h-[44px] justify-center"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-wider uppercase">Salir</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
