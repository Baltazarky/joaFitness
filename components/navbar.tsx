"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Dumbbell } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#planes", label: "Planes" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "/admin/login", label: "Admin" },
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
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-zinc-900" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Dumbbell
              className={`h-6 w-6 transition-colors duration-300 ${
                scrolled ? "text-amber-400" : "text-white"
              }`}
            />
            <span
              className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              JOA <span className="text-gray-400">FIT</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-[0.12em] uppercase transition-all duration-300 ${
                  scrolled ? "text-gray-300 hover:text-amber-400" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden py-6 bg-black/95 backdrop-blur-md rounded-b-2xl border-b border-zinc-900">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-300 hover:text-amber-400 transition-colors px-2 tracking-[0.12em] uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
