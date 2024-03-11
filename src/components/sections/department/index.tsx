'use client'

import { useLinkContext } from '@/context/link'

import { LinkCard } from '@/components/link-card'

import CardGroupSkeleton from '@/components/skeleton/card-group'

export default function DepartmentSection() {
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage('main')

  if (!data) return <CardGroupSkeleton />

  return (
    <section className="w-full grid grid-rows-[min-content_max-content] grid-cols-1 place-items-center">
      <h2 className="text-lg font-semibold row-span-1 col-span-1 h-full text-zinc-800 lg:text-heading-3 grid place-items-center">
        Setores
      </h2>
      <div className="row-span-1 col-span-1 flex flex-wrap items-center justify-center w-full gap-4">
        {/* Card link */}
        {data[2].infos.map((link, index) => {
          return (
            <LinkCard.Root
              key={index}
              variant="secondary"
              linkPath={link.linkPath}
            >
              <LinkCard.Content
                variant="secondary"
                title={link.title}
                description={link.description}
                icon={link.icon}
              />
              <LinkCard.Icon variant="secondary" />
            </LinkCard.Root>
          )
        })}
      </div>
    </section>
  )
}
