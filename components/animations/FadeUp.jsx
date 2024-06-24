import { motion } from "framer-motion"

export default function FadeUp({ children, className }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "linear" }}
      className={className ? className : ""}
    >
      {children}
    </motion.div>
  )
}
