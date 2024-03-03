'use client'

import SectionProps from '@/types/section'

import { LinkCard } from '@/components/link-card'
import CardGroupSkeleton from '@/components/skeleton/card-group'
import { useLinkContext } from '@/context/link'

const TrainingSection = ({ ...props }: SectionProps) => {
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage('main')

  if (!data) return <CardGroupSkeleton />

  return (
    <section {...props}>
      <h2 className="text-lg font-semibold text-white lg:text-2xl">
        Treinamentos
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full gap-6">
        {/* Card link */}
        {data[1].infos.map((link, index) => {
          return (
            <LinkCard.Root
              key={index}
              variant="default"
              linkPath={link.linkPath}
              target="blank"
            >
              <LinkCard.Content
                variant="default"
                title={link.title}
                description={link.description}
                icon={link.icon}
              />
              <LinkCard.Icon variant="default" />
            </LinkCard.Root>
          )
        })}
      </div>
    </section>
  )
}

export default TrainingSection
