import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { put } from "@vercel/blob"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  try {
    const formData = await req.formData()
    const file = formData.get("file") as File | null
    const key = formData.get("key") as string | null

    if (!file || !key) {
      return NextResponse.json({ error: "Archivo y key requeridos" }, { status: 400 })
    }

    const ext = file.name.split(".").pop() || "png"
    const filename = `${key}-${Date.now()}.${ext}`

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(filename, file, {
        access: "public",
      })

      await prisma.contentItem.upsert({
        where: { key },
        update: { value: blob.url },
        create: { key, value: blob.url },
      })

      return NextResponse.json({ url: blob.url })
    }

    // Fallback: return error if no blob token
    return NextResponse.json(
      { error: "Storage no configurado. Configurá BLOB_READ_WRITE_TOKEN o usá URL directa." },
      { status: 501 },
    )
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Error al subir archivo" }, { status: 500 })
  }
}
