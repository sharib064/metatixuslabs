import { Heading, PartnerCard, Section } from "@/components"
import { FadeUp } from "@/components/animations"

export default function PartnersSection({ title, list }) {
  return (
    <Section variant="full" className="bg-gray-900 text-white text-center">
      <FadeUp className="mb-20">
        <Heading>{title}</Heading>
      </FadeUp>

      <div className="flex flex-wrap justify-center gap-5">
        {list?.map(({ name, image, link }, i) => (
          <PartnerCard key={i + name} name={name} image={image} link={link} />
        ))}
      </div>
    </Section>
  )
}
