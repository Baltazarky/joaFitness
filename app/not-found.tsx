import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-amber-500 mb-4">404</h1>
        <p className="text-gray-400 mb-8">Página no encontrada</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-3 rounded-full font-semibold hover:from-amber-400 hover:to-amber-500 transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
