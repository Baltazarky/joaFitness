"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Dumbbell, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    setLoading(false)

    if (result?.error) {
      setError("Email o contraseña incorrectos")
      return
    }

    router.push("/admin/dashboard")
  }

  return (
    <div className="min-h-[100dvh] bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
            <Dumbbell className="w-7 h-7 text-black" />
          </div>
          <h1 className="text-2xl font-bold">Acceso Administrador</h1>
          <p className="text-zinc-500 text-sm mt-1">Ingresá para gestionar el sitio</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-zinc-400 mb-1.5">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="joaquin.sanch@icloud.com"
              className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-zinc-400 mb-1.5">
              Contraseña
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600"
              required
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-2.5 text-center">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-full h-12 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Ingresar"}
          </Button>
        </form>

        <p className="text-zinc-600 text-xs text-center mt-8">
          Solo personal autorizado
        </p>
      </div>
    </div>
  )
}
