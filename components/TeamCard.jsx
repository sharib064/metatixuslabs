import Image from "next/image"
import { SiLinkedin, SiTwitter } from "react-icons/si"
import { FadeUp } from "@/components/animations"

export default function TeamCard({ head, color, image, title, role, linkedin, twitter }) {
  return (
    <FadeUp className="overflow-hidden rounded-2xl bg-gray-900 uppercase hover:drop-shadow-md">
      <div style={{ background: color }} className="px-5 py-3 font-brand-heading">
        {head}
      </div>

      <div className="relative w-full h-60">
        {/* <img src={image} alt={title} className="w-full h-full object-cover" /> */}
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <div className="flex gap-1 flex-col justify-between items-center p-3 w-60">
        <div className="font-bold text-lg">{title}</div>

        <div className="font-light text-sm text-gray-300">{role}</div>

        <div className="flex gap-6 hover:text-gray-200 pt-2">
          {twitter && (
            <a href={twitter} target="_blank">
              <SiTwitter className="h-7 w-7 hover:-translate-y-2" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank">
              <SiLinkedin className="h-7 w-7 hover:-translate-y-2" />
            </a>
          )}
        </div>
      </div>
    </FadeUp>
  )
}
