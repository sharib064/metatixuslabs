import Link from "next/link"
import Image from "next/image"

import { FadeUp } from "@/components/animations"
import { HiChevronRight } from "react-icons/hi2"

const ServiceCard = ({ title, icon, i }) => {
  return (
    <FadeUp
      className="
        relative 
        rounded-full 
        md:overflow-hidden 
        group
      "
    >
      <Link href={`/services/#service-${i}`}>
        <div
          className="
            inline-flex 
            items-center 
            bg-white 
            p-5 
            rounded-full 
            drop-shadow-md 
            /hover:-translate-y-1
            hover:scale-110
          "
        >
          {/* <img src={icon} alt={title} width={40} height={40} className="object-contain" /> */}
          <Image src={icon} alt={title} width={40} height={40} className="object-contain" />

          <div
            className="
              hidden 
              md:flex 
              md:justify-center 
              text-sm 
              ml-2 
              text-center 
              font-bold 
              text-brand-secondary 
              whitespace-normal 
              w-52
            "
          >
            {title}
          </div>
        </div>

        <div
          className="
            md:hidden 
            text-xs 
            mt-2 
            text-center 
            text-brand-secondary 
            whitespace-normal 
            w-40
          "
        >
          {title}
        </div>

        <div
          className="
            hidden 
            md:flex 
            opacity-0 
            group-hover:opacity-100 
            absolute 
            justify-end 
            items-center 
            pr-10 
            top-0 
            w-full 
            h-full 
            bg-gradient-to-r 
            from-transparent 
            to-white
          "
        >
          <HiChevronRight className="h-7 w-7 text-brand-secondary group-hover:translate-x-5" />
        </div>
      </Link>
    </FadeUp>
  )
}

export default ServiceCard
