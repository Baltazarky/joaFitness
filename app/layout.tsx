import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Joa Fit | Entrenador Personal y Transformación Fitness",
  description:
    "Transforma tu cuerpo y mente con coaching fitness personalizado. Guía experta para resultados duraderos.",
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} dark`}>
      <body className="font-sans antialiased overflow-x-hidden bg-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
