import Link from "next/link"
import { Dumbbell, Instagram, Youtube, Music2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Dumbbell className="h-6 w-6 text-amber-400" />
              <span className="text-lg font-bold tracking-tight text-white">
                JOA <span className="text-gray-500">FIT</span>
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm max-w-xs">
              Transformando vidas a través del coaching fitness personalizado y guía nutricional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">Enlaces</h3>
            <ul className="space-y-3">
              {["Inicio", "Planes", "Sobre mí"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-").replace("í", "i")}`}
                    className="text-gray-500 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#contacto" className="text-gray-500 hover:text-amber-400 transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm tracking-wider uppercase">Seguime</h3>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/50 hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/50 hover:-translate-y-0.5 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-500/50 hover:-translate-y-0.5 transition-all duration-300"
                aria-label="TikTok"
              >
                <Music2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Joa Fit. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-600 hover:text-amber-400 transition-colors text-xs tracking-wider uppercase">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-600 hover:text-amber-400 transition-colors text-xs tracking-wider uppercase">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
