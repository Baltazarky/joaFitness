"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#planes", label: "Planes" },
  { href: "#sobre-mi", label: "Sobre nosotros" },
  { href: "#contacto", label: "Contáctenos" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Dumbbell className={`h-7 w-7 transition-colors ${scrolled ? "text-amber-400" : "text-white"}`} />
            <span
              className={`text-lg font-bold tracking-tight transition-colors ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              JOA <span className="opacity-80">FIT</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-gray-300 hover:text-amber-400" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              className={`transition-all rounded-full ${
                scrolled
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              ¡Quiero Empezar!
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-white" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-white" : "text-white"}`} />
            )}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-6 bg-black/95 backdrop-blur-md rounded-b-2xl border-b border-gray-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-300 hover:text-amber-400 transition-colors px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full">
                ¡Quiero Empezar!
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
