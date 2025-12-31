import Link from "next/link"
import { Dumbbell } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Dumbbell className="h-7 w-7 text-amber-400" />
              <span className="text-lg font-bold tracking-tight text-white">
                JOA <span className="text-gray-400">FIT</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Transformando vidas a través del coaching fitness personalizado y guía nutricional.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces</h3>
            <ul className="space-y-3 text-sm">
              {["Inicio", "Filosofía", "Planes", "Contacto"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Programas</h3>
            <ul className="space-y-3 text-sm">
              {["Entrenamiento", "Nutrición", "Planes Completos"].map((link) => (
                <li key={link}>
                  <Link href="#planes" className="text-gray-400 hover:text-amber-400 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>coach@joafit.com</li>
              <li>+34 611 51 95 51</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-500">© {new Date().getFullYear()} Joa Fit. Todos los derechos reservados.</p>
            <div className="flex gap-6 text-gray-500">
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
