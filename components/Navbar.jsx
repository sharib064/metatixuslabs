import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

import { motion, AnimatePresence } from "framer-motion"

import { HiBars3 as MenuIcon, HiXMark as CloseIcon } from "react-icons/hi2"
import { navlinks } from "@/constants"
import { Logo } from "@/components"

export default function Navbar({ scrollPosition }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuOpen = () => setIsOpen((p) => !p)

  const isScrolled = scrollPosition > 0

  return (
    <section className="relative z-20">
      <header className="relative">
        <nav
          className="
            fixed
            w-full 
            flex 
            justify-between
            items-center
            px-4
            md:px-8
            py-4
            md:py-6
            bg-gradient-to-b
            from-gray-900
            to-transparent
          "
        >
          <div
            className={`
              absolute 
              top-0 
              left-0 
              w-full 
              h-full 
              z-[-1] 
              bg-black 
              ${isScrolled ? "translate-y-0" : "-translate-y-full"}
            `}
          ></div>

          <div className="text-4xl font-brand-heading text-white">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="options">
            <button
              className={`
                active:shadow-xl 
                rounded-full 
                p-3 
                ${isScrolled ? "text-black bg-white hover:bg-gray-100" : "bg-gray-800 hover:bg-gray-700 text-white"}`}
              onClick={handleMenuOpen}
            >
              <MenuIcon className={`w-6 h-6 ${isScrolled ? "text-black" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      <aside>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overlay fixed top-0 w-full h-screen cursor-pointer bg-black/60"
                onClick={handleMenuOpen}
              ></motion.div>

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 right-0 w-full md:w-1/2 h-screen bg-black"
              >
                <MobileNav handleMenuOpen={handleMenuOpen} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </aside>
    </section>
  )
}

const MobileNav = ({ handleMenuOpen }) => {
  const router = useRouter()
  return (
    <div
      className="
      menu
      py-4  
      md:py-6 
      px-2 
      md:px-8 
      w-full 
      z-50
    "
    >
      <div className="close flex justify-end mb-5 px-6 md:px-0 text-white">
        <button onClick={handleMenuOpen} className="p-3 rounded-full hover:bg-white group">
          <CloseIcon className="w-6 h-6 group-hover:text-black" />
        </button>
      </div>

      <div className="navlinks px-5 space-y-2 flex flex-col items-center md:items-start">
        {navlinks &&
          navlinks?.map(({ title, link }, i) => (
            <Link
              key={i + title}
              href={link}
              onClick={handleMenuOpen}
              className={`
                relative
                inline-block
                px-5
                py-1.5
                group
                rounded-full
                uppercase
                text-center
                text-white
                font-bold
                text-2xl
                ${router.pathname == link ? "" : "hover:text-black"} 
                overflow-hidden
            `}
            >
              <span
                className={`${router.pathname == link ? "translate-y-0" : "translate-y-full"} 
                  absolute 
                  top-0 
                  left-0 
                  z-[-1] 
                  w-full 
                  h-full 
                  rounded-full 
                  bg-brand-primary 
                  group-hover:translate-y-0
                `}
              ></span>
              <span>{title}</span>
            </Link>
          ))}
      </div>
    </div>
  )
}
