import Image from "next/image"
import { FadeUp } from "@/components/animations"
import { SiTwitter } from "react-icons/si"

const ClientCard = ({ name, image, link }) => (
  <FadeUp
    className="
      relative 
      group 
      bg-black 
      border-2 
      border-white 
      rounded-tl-full 
      rounded-tr-full 
      rounded-lg 
      overflow-hidden
      "
  >
    <a href={link} target="_blank">
      <div className="flex flex-col items-center">
        <div className="relative w-28 h-28 overflow-hidden">
          {/* <img src={image} alt={name} className="w-full h-full object-contain" /> */}
          <Image src={image} alt={name} fill className="object-contain" />
        </div>

        <div
          className="
            py-2 
            text-sm 
            font-bold 
            whitespace-normal 
            max-w-[7rem]
          "
        >
          {name}
        </div>
      </div>

      <div
        className="
          absolute 
          top-0 
          w-full 
          h-full 
          flex 
          justify-center 
          items-center 
          bg-brand-secondary 
          opacity-0 
          translate-y-5 
          group-hover:opacity-100 
          group-hover:translate-y-0
        "
      >
        <SiTwitter className="w-7 h-7" />
      </div>
    </a>
  </FadeUp>
)

export default ClientCard
