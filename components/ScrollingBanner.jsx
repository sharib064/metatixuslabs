import { partners, clients } from "@/constants"

export default function ScrollingBanner() {
  const clientAndPartners = partners.concat(clients)

  return (
    <div className="w-full bg-white py-5 overflow-hidden">
      <div className="flex items-center animate-scroll">
        {clientAndPartners &&
          clientAndPartners?.map(({ name }, i) => (
            <div key={i + "banner"} className="font-brand-heading whitespace-nowrap uppercase text-black">
              {name} &nbsp;• &nbsp;
            </div>
          ))}
      </div>
    </div>
  )
}
