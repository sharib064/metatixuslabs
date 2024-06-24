import { HiPhone } from "react-icons/hi2"
import { Press } from "@/components/animations"

export default function BookCallButton({ color }) {
  return (
    <Press>
      <a
        href="https://calendly.com/metatixuslabs/45min"
        className={`
          active:shadow-xl
          rounded-full
          py-3.5
          px-5
          ${!color ? "bg-black hover:bg-gray-950 text-white" : ""}
          ${color == "primary" ? "bg-brand-primary hover:bg-brand-primary/95" : ""}
        `}
      >
        <HiPhone className="inline-flex mr-2" />
        Book a Call
      </a>
    </Press>
  )
}
