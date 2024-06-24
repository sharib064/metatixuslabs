import { Heading, Paragraph } from "@/components"
import ReactPlayer from "react-player"

const ServiceDescription = ({ id, icon, title, description, video }) => {
  return (
    <div id={`service-${id}`} className="space-y-5 pt-28">
      <div>
        <Heading
          variant="xs"
          className="
          mb-5 
          flex 
          gap-5 
          justify-center 
          items-center
        "
        >
          <img src={icon} alt={title} className="h-10 object-contain invert" />
          {title}
        </Heading>
      </div>

      <div>
        <Paragraph className="text-justify">{description}</Paragraph>
      </div>

      <div
        className="
          relative 
          mx-auto 
          max-w-lg 
          lg:max-w-2xl 
          aspect-video 
          rounded-2xl 
          overflow-hidden 
          bg-gray-800 
          border-4 
          border-white 
          drop-shadow-lg
        "
      >
        <ReactPlayer
          url={video}
          width="100%"
          height="100%"
          controls
          //
        />
      </div>
    </div>
  )
}
export default ServiceDescription
