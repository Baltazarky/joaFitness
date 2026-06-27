import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await hash("admin123", 12)

  await prisma.user.upsert({
    where: { email: "joaquin.sanch@icloud.com" },
    update: {},
    create: {
      email: "joaquin.sanch@icloud.com",
      password: hashedPassword,
      name: "Joaquin",
      role: "ADMIN",
    },
  })

  console.log("✅ Admin user created: joaquin.sanch@icloud.com / admin123")
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
