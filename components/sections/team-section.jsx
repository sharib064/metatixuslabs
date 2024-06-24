import { Heading, Section, TeamCard } from "@/components"
import { FadeUp } from "@/components/animations"
import { team } from "@/constants"

export default function TeamSection() {
  return (
    <Section className="text-center">
      <div className="xl:container xl:mx-auto px-10 flex flex-col items-center">
        <FadeUp>
          <Heading variant="sm" className="pb-10">
            <span>Metatixus</span>
            <br className="md:hidden" />
            &nbsp;
            <span className="text-brand-primary">Team</span>
          </Heading>
        </FadeUp>

        <FadeUp className="text-lg bg-gray-950">3+ Years Experience Across Finding Team Members.</FadeUp>
      </div>

      <div className="cards px-5 flex flex-wrap gap-5 justify-center my-10">
        {team?.map(({ head, color, image, title, subtitle, role, linkedin, twitter }, i) => (
          <TeamCard
            key={i + head}
            head={head}
            color={color}
            image={image}
            title={title}
            subtitle={subtitle}
            role={role}
            linkedin={linkedin}
            twitter={twitter}
          />
        ))}
      </div>
    </Section>
  )
}
