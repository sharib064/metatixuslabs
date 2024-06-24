import { BookCallButton, Heading, Paragraph, ScrollingBanner, Section } from "@/components"
import { FadeUp } from "@/components/animations"

export default function HeroSection() {
  return (
    <Section
      variant="full"
      className="
        bg-[url('/images/backgrounds/bg4.jpg')] 
        bg-center 
        bg-cover 
        bg-no-repeat
      "
    >
      <div
        className="
          relative 
          xl:container 
          mx-auto 
          flex 
          flex-col 
          text-center
        "
      >
        <div
          className="
            flex 
            flex-col 
            md:flex-row 
            items-center 
            mt-10
          "
        >
          <FadeUp className="md:w-3/5">
            <Heading variant="sm" className="text-2xl mt-0 drop-shadow-lg">
              <span>WHAT</span>&nbsp;
              <span className="text-brand-primary">METATIXUS LABS</span>&nbsp;
              <span>OFFER?</span>
            </Heading>
          </FadeUp>

          <FadeUp className="md:w-2/5 md:px-5 flex flex-col items-center">
            <Paragraph
              className="
                my-5 
                text-center 
                drop-shadow-lg 
                font-bold
              "
            >
              Welcome to METATIXUS LABS! We are a team of experts who specialize in providing top-notch Web3 services to
              our clients.
            </Paragraph>
          </FadeUp>
        </div>

        <FadeUp className="md:px-10 md:my-10 flex flex-col items-center">
          <Paragraph
            className="
              mb-10 
              text-center 
              drop-shadow-lg
            "
          >
            We provide 16+ services from NFT marketing to NFT launching, NFT community building, and much more, we offer
            a wide range of web3 services that can help you take advantage of the latest innovations in the digital
            space. With 15+ succesful clients and number of trusted partners and founders. We let our work do the
            talking. WE ARE HERE TO SELL OUT YOUR PROJECT!
          </Paragraph>

          <FadeUp className="btn mb-10">
            <BookCallButton color="primary" />
          </FadeUp>
        </FadeUp>
      </div>

      <div className="absolute bottom-0 w-full overflow-x-hidden">
        <div
          className="
            title 
            absolute top-0 
            -translate-y-full 
            bg-black text-white 
            text-sm font-bold 
            px-4 py-2 
            rounded-tr-xl
          "
        >
          Featured on
        </div>

        <ScrollingBanner />
      </div>
    </Section>
  )
}
