export default function TextContainer({ children, className }) {
  return (
    <div
      className={`
        z-10
        px-5 
        sm:px-10 
        md:px-0 
        space-y-4 
        w-full
        max-w-[640px] 
        lg:max-w-[940px]
        ${className}
      `}
    >
      {children}
    </div>
  )
}
