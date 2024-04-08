'use client'

import { useLinkContext } from '@/context/link'

import { LinkCard } from '@/components/link-card'

import CardGroupSkeleton from '@/components/skeleton/card-group'

export default function DepartmentSection() {
  const { getLinkByPage } = useLinkContext()
  const data = getLinkByPage('main')

  if (!data) return <CardGroupSkeleton />

  return (
    <section className="grid h-full w-full grid-cols-1 grid-rows-[min-content_max-content] place-items-center gap-6 bg-secondary py-6">
      <div className="col-span-1 row-span-1 flex w-full items-center justify-center">
        <h2 className="text-lg font-semibold text-white lg:text-heading-3">
          Setores
        </h2>
      </div>
      <div className="col-span-1 row-span-1 flex w-full flex-wrap items-center justify-center gap-4">
        {/* Card link */}
        {data[2].infos.map((link, index) => {
          return (
            <LinkCard.Root key={index} linkPath={link.linkPath}>
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
