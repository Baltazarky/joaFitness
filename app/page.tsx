import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProcessSection } from "@/components/process-section"
import { CoachingPlansSection } from "@/components/coaching-plans-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PhilosophySection />
      <ProcessSection />
      <CoachingPlansSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
