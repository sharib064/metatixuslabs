import Image from "next/image"
import { FadeUp } from "@/components/animations"
import { SiTwitter } from "react-icons/si"

const PartnerCard = ({ name, image, link }) => (
  <FadeUp className="relative group bg-black border-2 border-white rounded-lg overflow-hidden">
    <a href={link} target="_blank">
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 m-2 rounded-lg overflow-hidden">
          {/* <img src={image} alt={name} className="w-full h-full object-contain" /> */}
          <Image src={image} alt={name} fill className="object-contain" />
        </div>

        <div>{name}</div>
      </div>

      <div className="absolute top-0 w-full h-full flex justify-center items-center bg-brand-primary/90 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0">
        <SiTwitter className="w-7 h-7" />
      </div>
    </a>
  </FadeUp>
)

export default PartnerCard
