import { Logo } from "@/components"
import Link from "next/link"

export default function FooterSection() {
  return (
    <section
      className="
          lg:container 
          lg:mx-auto
          p-5
          sm:px-10
          flex  
          items-center
          text-white 
          justify-between 
          gap-10
        "
    >
      <div>© 2023 All Rights Reserved, Metatixus Labs</div>

      <div className="w-20">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </section>
  )
}
