import { Heading, Paragraph, Section } from "@/components"
import { FadeUp } from "@/components/animations"
import { steps } from "@/constants"

export default function HowDoWeWorkSection() {
  return (
    <Section>
      <div className="head">
        <Heading variant="sm">How Do We Work?</Heading>
      </div>

      <div
        className="
            flex 
            flex-col 
            gap-10 
            py-10 
            md:py-20
          "
      >
        {steps?.map(({ title, description }, i) => (
          <Phase key={"step" + i} title={title} description={description} i={i + 1} />
        ))}
      </div>
    </Section>
  )
}

function Phase({ title, description, i }) {
  return (
    <div className="flex gap-10">
      <FadeUp className="relative">
        <div
          className="
            w-16 
            h-16 
            bg-white 
            text-gray-950 
            text-2xl 
            font-bold 
            rounded-full 
            flex 
            justify-center 
            items-center
          "
        >
          <div>{i}</div>
        </div>

        <div
          className="
            dot 
            absolute 
            left-1/2 
            -translate-x-1/2 
            mt-3 
            w-3 
            h-3 
            rounded-full 
            bg-white 
            ring-4 
            ring-white/10
          "
        ></div>

        <div
          className="
            line 
            absolute 
            top-20 
            left-1/2 
            -translate-x-1/2 
            w-1 
            h-[85%] 
            last-of-type:h-[65%] 
            bg-brand-primary/30 
            rounded-full
          "
        ></div>
      </FadeUp>

      {/* Card */}
      <FadeUp
        className="
          /hidden
          max-w-[480px]
          p-8
          mt-5
          bg-brand-blue-dark/40
          backdrop-blur-sm
          rounded-lg
          border
          border-brand-primary/70
          drop-shadow-xl
        "
      >
        <Heading variant="xs">{title}</Heading>

        <div className="pt-5">
          <Paragraph>{description}</Paragraph>
        </div>
      </FadeUp>
    </div>
  )
}
