import { ComponentProps } from "react"

import LinkCard from "@/components/link-card"

import LinkProps from "@/types/links"

type Props = {
  data: LinkProps[]
}

const TrainingSection = ({data, ...props}: Props & ComponentProps<'section'>) => {
  return (
    <section 
      {...props}
      >
    <h2 className="text-lg font-semibold text-white lg:text-2xl">
      Treinamentos
    </h2>
    <div className="flex flex-wrap items-center justify-center w-full gap-6">
      {/* Card link */}
      {data[1].infos.map((link, index) => {
        return (
          <LinkCard
            key={index}
            title={link.title}
            iconAlign="center"
            description={link.description}
            linkPath={link.linkPath}
          />
        )
      })}
    </div>
  </section>
  )
}

export default TrainingSection