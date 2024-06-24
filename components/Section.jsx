export default function Section({ children, className, variant }) {
  return (
    <section
      className={`
        relative 
        py-20
        px-5
        sm:px-10
        w-full 
        flex 
        flex-col
        justify-center 
        items-center
        text-white
        ${variant !== "full" ? "lg:container lg:mx-auto" : ""}
        ${className}
      `}
    >
      {children}
    </section>
  )
}
