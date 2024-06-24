import { Press } from "@/components/animations"

export default function BrandButton({ children, className, onClick }) {
  return (
    <Press>
      <button
        className={`
        bg-black hover:bg-gray-950 text-white
        active:shadow-xl
        rounded-full
        p-3
        ${className}
      `}
        onClick={onClick}
      >
        {children}
      </button>
    </Press>
  )
}
