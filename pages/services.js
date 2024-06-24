import { Heading, PageTitle, Section, ServiceDescription } from "@/components"
import { services } from "@/constants"
import { FadeUp } from "@/components/animations"

export default function Services() {
  return (
    <Section>
      <PageTitle>Metatixus Labs | Services</PageTitle>

      <FadeUp>
        <Heading className="py-10">Services</Heading>
      </FadeUp>

      <div className="text-center">
        {services?.map(({ icon, title, description, video }, i) => (
          <ServiceDescription
            key={i + title}
            id={i}
            icon={icon}
            title={title}
            description={description}
            video={video}
            //
          />
        ))}
      </div>
    </Section>
  )
}
