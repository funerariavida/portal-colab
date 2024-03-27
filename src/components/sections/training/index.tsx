'use client'

import { useLinkContext } from '@/context/link'

import { LinkCard } from '@/components/link-card'
import CardGroupSkeleton from '@/components/skeleton/card-group'

const TrainingSection = () => {
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage('main')

  if (!data) return <CardGroupSkeleton />

  return (
    <section className="col-span-1 grid w-full grid-cols-1 grid-rows-[max-content_auto] place-items-center gap-6 bg-primary py-6">
      <div className="grid place-items-center">
        <h2 className="flex-1 text-lg font-semibold text-white lg:text-heading-3">
          Treinamentos
        </h2>
      </div>
      <div className="col-span-1 flex h-full flex-wrap items-center justify-center gap-2">
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
