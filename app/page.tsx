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

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <CoachingPlansSection />
      <TestimonialsSection />
      <TransformationSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloating />
    </main>
  )
}
