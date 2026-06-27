import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { defaults } from "@/lib/content"

const defaultKeys = [
  "hero_pill_badge", "hero_headline", "hero_subheadline",
  "hero_trust_1", "hero_trust_2", "hero_trust_3",
  "stats_years", "stats_clients", "stats_programs",
  "vp_1_title", "vp_1_desc",
  "vp_2_title", "vp_2_desc",
  "vp_3_title", "vp_3_desc",
  "vp_4_title", "vp_4_desc",
  "about_bio_1", "about_bio_2", "about_bio_3",
  "about_quote_1", "about_quote_2", "about_quote_3",
  "contact_email", "contact_phone",
  "whatsapp_phone", "whatsapp_message",
  "footer_instagram", "footer_youtube", "footer_tiktok",
  "image_hero", "image_about",
  "image_transformation_1", "image_transformation_2",
]

export async function GET() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const items = await prisma.contentItem.findMany()
  const content: Record<string, string> = { ...defaults }

  for (const item of items) {
    if (item.value && item.key in defaults) {
      content[item.key] = item.value
    }
  }

  return NextResponse.json(content)
}

export async function PUT(req: Request) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const body = await req.json()

  const updates = Object.entries(body).filter(([key]) => defaultKeys.includes(key))

  for (const [key, value] of updates) {
    await prisma.contentItem.upsert({
      where: { key },
      update: { value: value as string },
      create: { key, value: value as string },
    })
  }

  return NextResponse.json({ success: true })
}
