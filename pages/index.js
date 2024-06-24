import {
  HeroSection,
  JourneySection,
  ServicesSection,
  PartnersSection,
  TeamSection,
  HowDoWeWorkSection,
  FAQSection,
} from "@/components/sections"

import { partners, founders } from "@/constants"
import { PageTitle } from "@/components"

export default function Home() {
  return (
    <>
      <PageTitle>Metatixus Labs | Home</PageTitle>

      <HeroSection />

      <JourneySection />

      <ServicesSection />

      <PartnersSection title="Trusted Partners" list={partners} />

      <PartnersSection title="Trusted Founders" list={founders} />

      <TeamSection />

      <div id="how-do-we-work">
        <HowDoWeWorkSection />
      </div>

      <FAQSection />
    </>
  )
}
