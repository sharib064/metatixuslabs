export default function Logo({ className }) {
  return (
    <img
      src="/images/logo.png"
      alt="Metatixus Logo"
      className={`
        w-12 
        h-12 
        object-contain 
        rounded-xl 
        shadow-[0_0_7px_2px] 
        shadow-brand-primary 
        ${className}
      `}
    />
  )
}
