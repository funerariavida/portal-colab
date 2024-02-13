import SectionProps from '@/types/section'

import LinkCard from '@/components/link-card'

const TrainingSection = ({ data, cardVariant, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <h2 className="text-lg font-semibold text-white lg:text-2xl">
        Treinamentos
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full gap-6">
        {/* Card link */}
        {data[1].infos.map((link, index) => {
          return (
            <LinkCard
              key={index}
              variant={cardVariant}
              title={link.title}
              iconAlign="center"
              description={link.description}
              linkPath={link.linkPath}
              target="blank"
            />
          )
        })}
      </div>
    </section>
  )
}

export default TrainingSection
