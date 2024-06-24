export default function Paragraph({ children, className, variant }) {
  return (
    <p
      className={`
        w-full lg:max-w-4xl mx-auto
        ${!variant ? "text-base sm:text-lg 2xl:text-2xl" : ""}
        ${variant == "sm" ? "text-xs sm:text-sm 2xl:text-xl" : ""}
        ${className}
      `}
    >
      {children}
    </p>
  )
}
