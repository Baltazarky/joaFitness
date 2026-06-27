import { NextResponse } from "next/server"
import { getResend } from "@/lib/resend"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    const resend = getResend()
    if (!resend) {
      console.log("Form submission (no RESEND_API_KEY):", { name, email, message })
      return NextResponse.json({ success: true })
    }

    const { error } = await resend.emails.send({
      from: "Contacto Joa Fit <onboarding@resend.dev>",
      to: ["joaquin.sanch@icloud.com"],
      replyTo: email,
      subject: `Nuevo mensaje de ${name} - Joa Fit`,
      html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color:#666;font-size:12px;">Enviado desde joafit.com</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
