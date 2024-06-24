import { FadeUp } from "@/components/animations"
import { Heading } from "@/components"
// import CountUp from "react-countup"

const JourneyCard = ({ title, count, plus }) => (
  <FadeUp
    className="
      w-full 
      p-10
      xl:p-16 
      flex 
      flex-col 
      items-center
      bg-black
      text-white
      border-2
      border-white
      rounded-xl
    "
  >
    <div className="max-w-[180px]">
      <Heading variant="sm" className="mb-5">
        <span>
          {/* <CountUp end={count} /> */}
          {count}
        </span>

        {plus}
      </Heading>

      <div className="font-brand-heading text-xl xl:text-2xl py-2">{title}</div>
    </div>
  </FadeUp>
)

export default JourneyCard
