import { prisma } from "./prisma"

export const defaults: Record<string, string> = {
  hero_pill_badge: "+500 clientes ya entrenan conmigo",
  hero_headline: "JOA FIT",
  hero_subheadline:
    "Asesorías online de entrenamiento y nutrición. Dejá de improvisar en el gym, seguí un plan probado y empezá a ver resultados reales.",
  hero_trust_1: "Sin permanencia",
  hero_trust_2: "Primera consulta gratis",
  hero_trust_3: "100% Online",

  stats_years: "Años de experiencia",
  stats_clients: "Clientes entrenados",
  stats_programs: "Programas disponibles",

  vp_1_title: "Estructurado",
  vp_1_desc: "Cada semana planificada. Sin improvisar. Solo seguir el plan.",
  vp_2_title: "Probado",
  vp_2_desc: "9 años de experiencia condensados en programas que funcionan.",
  vp_3_title: "Sin permanencia",
  vp_3_desc: "Pagas y empezás. Sin esperas, sin llamadas, sin vueltas.",
  vp_4_title: "Resultados",
  vp_4_desc: "Fuerza, resistencia y estética. Todo en un mismo enfoque.",

  about_bio_1: "Soy Joaquin, un apasionado por el entrenamiento.",
  about_bio_2:
    "Mi misión es acompañarte en tu transformación. Estoy aquí para ayudarte a convertir miedos, complejos e inseguridades en confianza, fuerza y amor propio. Porque cuidarte a ti mismo no es solo el objetivo, sino aprender durante el camino a cómo hacerlo.",
  about_bio_3:
    "Con años de experiencia en entrenamiento personal y nutrición deportiva, mi enfoque se basa en la simplicidad y resultados reales. Cada plan está diseñado específicamente para ti.",
  about_quote_1:
    "La consistencia es el verdadero superpoder. No se trata de motivación, se trata de identidad.",
  about_quote_2:
    "Entrenar debería ser simple, no complicado. Mi enfoque es crear un plan que funcione para vos y hacerlo lo más fácil posible de seguir.",
  about_quote_3:
    "Construir el cuerpo correcto empieza por ordenar la vida.",

  contact_email: "joaquin.sanch@icloud.com",
  contact_phone: "+54 9 342 595-3943",

  whatsapp_phone: "5493425953943",
  whatsapp_message:
    "Hola%20Joaquin!%20Me%20interesan%20tus%20planes%20de%20entrenamiento",

  footer_instagram: "https://instagram.com/joa.fit",
  footer_youtube: "https://youtube.com/@joa.fit",
  footer_tiktok: "https://tiktok.com/@joa.fit",
}

export async function getAllContent(): Promise<Record<string, string>> {
  try {
    const items = await prisma.contentItem.findMany()
    const merged: Record<string, string> = { ...defaults }
    for (const item of items) {
      if (item.value) {
        merged[item.key] = item.value
      }
    }
    return merged
  } catch {
    return { ...defaults }
  }
}
