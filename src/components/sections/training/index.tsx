'use client'

import { useLinkContext } from '@/context/link'

import { LinkCard } from '@/components/link-card'
import CardGroupSkeleton from '@/components/skeleton/card-group'

const TrainingSection = () => {
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage('main')

  if (!data) return <CardGroupSkeleton />

  return (
    <section className="h-[60vh] xl:h-screen bg-primary w-full grid grid-rows-[15%_85%] grid-cols-1 place-items-center">
      <h2 className="row-span-1 col-span-1 h-full text-lg grid place-items-center font-semibold text-white lg:text-heading-3">
        Treinamentos
      </h2>
      <div className="col-span-1 row-span-1 h-full flex flex-wrap items-center justify-center w-full gap-2">
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
