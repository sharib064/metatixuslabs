import { useState } from "react"

import { Accordion, Heading, Section } from "@/components"
import { FadeUp } from "@/components/animations"
import { faqs } from "@/constants"

export default function FAQSection() {
  const [active, setActive] = useState(false)
  const handleActive = (i) => {
    if (active === i) {
      setActive(false)
    } else {
      setActive(i)
    }
  }

  return (
    <Section>
      <FadeUp>
        <Heading className="mb-10">FAQ</Heading>
      </FadeUp>

      <FadeUp className="w-full max-w-2xl lg:max-w-4xl">
        {faqs?.map(({ title, description }, i) => (
          <div key={i + title} onClick={() => handleActive(i)}>
            <Accordion title={title} description={description} item={i} active={active} />
          </div>
        ))}
      </FadeUp>
    </Section>
  )
}
