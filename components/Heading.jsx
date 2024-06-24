export default function Heading({ children, className, variant }) {
  return (
    <h1
      className={`
        font-brand-heading
        font-bold
        uppercase
        ${variant == "xs" ? "text-xl sm:text-2xl lg:text-3xl" : ""}
        ${variant == "sm" ? "text-3xl sm:text-5xl lg:text-6xl" : ""}
        ${!variant ? "text-5xl sm:text-[64px] lg:text-8xl 2xl:text-9xl" : ""}
        ${className}
      `}
    >
      {children}
    </h1>
  )
}
