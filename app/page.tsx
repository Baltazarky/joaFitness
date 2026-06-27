import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { CoachingPlansSection } from "@/components/coaching-plans-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TransformationSection } from "@/components/transformation-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloating } from "@/components/whatsapp-floating"
import { getAllContent } from "@/lib/content"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const content = await getAllContent()

  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroSection content={content} />
      <StatsBar content={content} />
      <CoachingPlansSection />
      <TestimonialsSection />
      <TransformationSection content={content} />
      <AboutSection content={content} />
      <ContactSection content={content} />
      <Footer content={content} />
      <WhatsAppFloating content={content} />
    </main>
  )
}
