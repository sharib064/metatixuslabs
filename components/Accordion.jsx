import { motion, AnimatePresence } from "framer-motion"

export default function Accordion({ title, description, item, active }) {
  const isActive = item === active

  const accordion = {
    collapsed: { height: 0 },
    open: { height: "auto" },
  }

  return (
    <div
      className={`
        py-5 
        border-b 
        border-gray-800 
        ${item === 0 ? "border-t" : ""}
      `}
    >
      <div className="p-4">
        <button
          className="
            w-full 
            flex 
            md:gap-5 
            justify-between 
            gap-5
          "
        >
          <div className="font-brand-heading text-left">{title}</div>

          <div className="w-1/12">
            <div className="relative w-5 h-5">
              <i
                className={`
                  absolute 
                  left-0 
                  top-1/2 
                  -translate-y-1/2 
                  w-5 
                  h-px 
                  bg-white 
                  ${isActive && "rotate-180"}
                `}
              ></i>
              <i
                className={`
                  absolute 
                  top-0 
                  left-1/2 
                  -translate-x-1/2 
                  h-5 
                  w-px 
                  bg-white 
                  ${isActive && "rotate-90"}
                `}
              ></i>
            </div>
          </div>
        </button>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={accordion}
              transition={{ ease: "linear", duration: 0.5 }}
              className="pt-5 overflow-hidden"
            >
              {description}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
