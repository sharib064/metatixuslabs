import { Heading, Paragraph, Section, TextContainer } from "@/components"
import { socials } from "@/constants"
import { FadeUp } from "@/components/animations"
import { SiDiscord } from "react-icons/si"

export default function ContactSection() {
  return (
    <Section variant="full" className="bg-brand-primary text-white text-center">
      <TextContainer className="space-y-6">
        <FadeUp>
          <Heading className="text-brand-secondary">Contact Us</Heading>
        </FadeUp>

        <FadeUp>
          <Paragraph>
            Want to get in touch? We&apos;d love to hear from you! You can email us at&nbsp;
            <a href={`mailto:${socials[1].link}`} className="underline hover:text-gray-200">
              {socials[1].link.slice(7)}
            </a>
          </Paragraph>
        </FadeUp>

        <FadeUp className="socials text-xl flex flex-wrap justify-center gap-y-5">
          {socials &&
            socials?.map(({ title, Icon, link }, i) => (
              <a key={i + title} href={link} title={link} target="_blank" className="group">
                <span className="mx-3">
                  <Icon
                    className="
                      w-6 
                      h-6 
                      group-hover:text-gray-300 
                      inline-block
                    "
                  />
                  &nbsp;&nbsp;
                  {title}
                </span>
                <span className="px-3.5">|</span>
              </a>
            ))}

          <span className="mx-3 group">
            <SiDiscord
              className="
                w-6 
                h-6 
                group-hover:text-gray-300 
                inline-block
              "
            />
            &nbsp;&nbsp;MetaTixusLabs#8742
          </span>
        </FadeUp>
      </TextContainer>
    </Section>
  )
}
