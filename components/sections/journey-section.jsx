import { FadeUp } from "@/components/animations"
import { ClientCard, Heading, JourneyCard, Section } from "@/components"
import { clients, journey } from "@/constants"

export default function JourneySection() {
  return (
    <Section variant="full" className="bg-brand-primary text-center">
      <div className="lg:container lg:mx-auto">
        <FadeUp className="mb-20">
          <Heading>Our Journey and clients</Heading>
        </FadeUp>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {journey?.map(({ title, count, plus }, i) => (
            <JourneyCard key={i + title} title={title} count={count} plus={plus} />
          ))}
        </div>

        <div className="mt-20 flex gap-5 flex-wrap justify-center items-center">
          {clients?.map(({ name, image, link }, i) => (
            <ClientCard key={i + name} name={name} image={image} link={link} />
          ))}
        </div>
      </div>
    </Section>
  )
}
