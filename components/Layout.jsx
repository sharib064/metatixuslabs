import { useEffect, useState } from "react"
import { Urbanist } from "next/font/google"

import { Navbar } from "@/components"
import { FooterSection, ContactSection } from "./sections"

const font = Urbanist({ subsets: ["latin"] })

export default function Layout({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className={font.className}>
      <Navbar scrollPosition={scrollPosition} />

      {children}

      <div id="contact-us">
        <ContactSection />
      </div>

      <FooterSection />
    </main>
  )
}
