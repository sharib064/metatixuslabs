import { Heading, BrandButton, Logo } from "@/components"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { FadeUp } from "@/components/animations"

export default function Overlay() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
      return
    }
    document.body.style.overflowY = "scroll"
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          className="
            z-50 
            fixed 
            w-full 
            h-screen 
            flex 
            justify-center 
            items-center
            bg-gray-950 
            bg-[url('/images/backgrounds/bg.jpg')]
            bg-cover
            bg-center
          "
        >
          <div className="flex flex-col gap-5 items-center text-white">
            <FadeUp className="flex flex-col items-center text-center">
              <Logo className="scale-[2]" />
              <br />
              <br />
              <Heading variant="sm" className="drop-shadow-lg">
                METATIXUS <br /> LABS
              </Heading>
            </FadeUp>

            <FadeUp>
              <BrandButton color="primary" className="bg-brand-primary px-10" onClick={() => setIsOpen(false)}>
                Let&apos;s Connect
              </BrandButton>
            </FadeUp>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
