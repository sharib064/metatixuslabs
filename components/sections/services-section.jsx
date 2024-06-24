import { Heading, BrandButton, Section, FloatingBallsOverlay, BookCallButton, ServiceCard } from "@/components"
import { services } from "@/constants"
import Link from "next/link"

export default function ServicesSection() {
  return (
    <div className="relative bg-brand-primary">
      <FloatingBallsOverlay images={["/images/ball_pink.png", "/images/ball_purple.png"]} />

      <Section className="gap-16 text-center">
        <div>
          <Heading className="text-brand-secondary">Services</Heading>
        </div>

        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-wrap gap-5 justify-center">
            {services?.map(({ icon, title }, i) => (
              <ServiceCard key={i + title} title={title} icon={icon} i={i} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5">
            <BookCallButton />

            <Link href="/services">
              <BrandButton className="px-6">Read More</BrandButton>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}
