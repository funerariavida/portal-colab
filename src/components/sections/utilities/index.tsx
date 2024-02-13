import LinkCard from '@/components/link-card'

import SectionProps from '@/types/section'

export default function UtilsSection({
  data,
  cardVariant,
  ...props
}: SectionProps) {
  return (
    <section {...props}>
      <div className="w-full bg-primary h-20 md:h-28 lg:h-32 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
          Portal do Colaborador
        </h1>
      </div>
      <div className="px-2 py-4 flex flex-wrap items-center justify-center w-full gap-3">
        <div className="w-full text-center">
          <h3 className="text-lg font-semibold lg:text-2xl text-secondary">
            {data[0].name}
          </h3>
        </div>
        {/* Card link */}
        {data[0].infos.map((link, index) => {
          return (
            <LinkCard
              variant={cardVariant}
              key={index}
              title={link.title}
              description={link.description}
              icon={link.icon}
              linkPath={link.linkPath}
              target="blank"
            />
          )
        })}
      </div>
    </section>
  )
}
